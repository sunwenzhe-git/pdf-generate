import React from "react";
import { View, StyleSheet, Text } from "@react-pdf/renderer";
import { formatIteratorsData } from "../../utils";

const styles = StyleSheet.create({
  table: { width: "100%", border: "1px solid black" },
  tableRow: { flexDirection: "row" },
  tableCell: { flex: 1, border: "1px solid black", padding: 5 },
});

const CustomTable = ({ data }) => {
  console.log(data, "jjj");
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
        <TableCell key={cellIndex} text={cell} />
      ))}
    </View>
  );
};

const TableCell = ({ text }) => {
  return <Text style={styles.tableCell}>{text}</Text>;
};

export default CustomTable;
