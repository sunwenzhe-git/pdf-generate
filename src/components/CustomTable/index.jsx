import { Font, StyleSheet, Text, View } from "@react-pdf/renderer";
import React from "react";
import ArialFont from "../../assets/font/Arial.ttf";
import { formatIteratorsData } from "../../utils";
import { WIDTH_SET } from "./utils";

Font.register({ family: "arial", src: ArialFont });

const styles = StyleSheet.create({
  table: { width: "100%", border: "1px solid black", fontSize: 12 },
  tableRow: { flexDirection: "row" },
  tableCell: {
    flex: 1,
    border: "1px solid black",
    padding: 5,
  },
});

const CustomTable = ({ data }) => {
  return (
    <View style={styles.table}>
      {formatIteratorsData(data).map((row, rowIndex) => (
        <TableRow key={rowIndex} data={row} />
      ))}
    </View>
  );
};

const TableRow = ({ data }) => {
  return (
    <View style={styles.tableRow}>
      {formatIteratorsData(data).map((cell, cellIndex) => (
        <TableCell key={cellIndex} cell={cell} />
      ))}
    </View>
  );
};

const TableCell = ({ cell, className }) => {
  let content;
  switch (cell.container) {
    case "title":
      content = <TitleComponent cell={cell} />;
      break;
    case "inputText":
      content = <InputTextComponent cell={cell} />;
      break;
    case "text":
      content = <TextComponent cell={cell} />;
      break;
    default:
      content = <ContainerArrComponent cell={cell} />;
      break;
  }
  return (
    <View style={className === "none" ? "" : styles.tableCell}>{content}</View>
  );
};

const TitleComponent = ({ cell }) => (
  <Text
    style={{
      fontFamily: "arial",
      textAlign: cell?.textAlign,
    }}
  >
    {cell?.title}
  </Text>
);

const TextComponent = ({ cell }) => <Text>{cell?.dataSource}</Text>;

const InputTextComponent = ({ cell }) => {
  return (
    <>
      {cell?.title && <TitleComponent cell={cell} />}

      {cell?.col && (
        <View style={{ display: "flex", flexDirection: "row" }}>
          {Array.from({ length: cell.col }, (_, index) => index).map((k) => (
            <Text
              key={k}
              style={{
                fontFamily: "arial",
                marginLeft: k === 0 ? WIDTH_SET[cell?.titleWidth] : undefined,
                flex: 1,
              }}
            >
              {cell?.colTitle?.[k]}
            </Text>
          ))}
        </View>
      )}

      {cell?.dataSource instanceof Array &&
        cell?.dataSource?.map((k) => (
          <View key={k.value} style={{ display: "flex", flexDirection: "row" }}>
            <Text
              style={{
                fontFamily: cell.titleBold ? "arial" : "pingFang",
                width: WIDTH_SET[cell?.titleWidth],
              }}
            >
              {k?.label}
              {k?.label && k?.value ? ":" : ""}
            </Text>

            {k?.value instanceof Array ? (
              <>
                {Array.from(
                  { length: k.value.length },
                  (_, index) => index
                ).map((vItem) => (
                  <Text
                    key={k}
                    style={{
                      flex: 1,
                    }}
                  >
                    {k?.value?.[vItem]}
                  </Text>
                ))}
              </>
            ) : (
              <Text style={{ flex: 1, top: cell.titleBold ? "-2pt" : "" }}>
                {k?.value} {k?.unit}
              </Text>
            )}
          </View>
        ))}
    </>
  );
};

const ContainerArrComponent = ({ cell }) => {
  return (
    <>
      {cell?.container instanceof Array && (
        <View>
          {formatIteratorsData(cell.container).map((cell, cellIndex) => (
            <TableCell key={cellIndex} cell={cell} className={"none"} />
          ))}
        </View>
      )}
    </>
  );
};

export default CustomTable;
