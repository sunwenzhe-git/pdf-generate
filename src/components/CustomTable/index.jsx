import { Font, StyleSheet, Text, View } from "@react-pdf/renderer";
import { chain, zipObject } from "lodash";
import React from "react";
import ArialFont from "../../assets/font/Arial.ttf";
import { formatIteratorsData } from "../../utils";

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
  const cellData = chain(data)
    .sortBy("col")
    .groupBy("col")
    .toPairs()
    .map((item) => zipObject(["group", "list"], item))
    .value();
  return (
    <View style={styles.tableRow}>
      {formatIteratorsData(cellData).map((cell, cellIndex) => (
        <TableCell key={cellIndex} cell={cell} />
      ))}
    </View>
  );
};

const TableCell = ({ cell }) => {
  return (
    <View style={styles.tableCell}>
      {cell.list.map((k) => (
        <View key={k.value} style={{ display: "flex", flexDirection: "row" }}>
          <Text
            style={{
              fontFamily: k.isBold ? "arial" : "pingFang",
              width: k?.titleWidth,
            }}
          >
            {k.title}
            {k.value ? ":" : ""}
          </Text>

          <Text style={{ flex: 1, top: k.isBold ? "-2pt" : "" }}>
            {k.value} {k.unit}
            {"\n"}
          </Text>
        </View>
      ))}
    </View>
  );
};

export default CustomTable;
