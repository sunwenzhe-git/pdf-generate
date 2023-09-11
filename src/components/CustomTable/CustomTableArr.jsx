import { Font, StyleSheet, Text, View } from "@react-pdf/renderer";
import { chain, zipObject } from "lodash";
import React from "react";
import ArialFont from "../../assets/font/Arial.ttf";
import { formatIteratorsData } from "../../utils";

Font.register({ family: "arial", src: ArialFont });

const styles = StyleSheet.create({
  table: { width: "100%", border: "1px solid black" },
  tableRow: { flexDirection: "row" },
  tableCell: {
    flex: 1,
    border: "1px solid black",
    padding: 5,
  },
});

const CustomTableArr = ({ data }) => {
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
    <Text style={styles.tableCell}>
      {cell.list.map((k) => (
        <>
          <Text
            key={k.value}
            style={{ fontFamily: k.isBold ? "arial" : "pingFang" }}
          >
            {k.title}
            {k.value ? ":" : ""}
          </Text>
          <Text>
            {" "}
            {k.value}
            {"\n"}
          </Text>
        </>
      ))}
    </Text>
  );
};

export default CustomTableArr;
