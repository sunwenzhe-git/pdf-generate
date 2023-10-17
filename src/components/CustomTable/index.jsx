import { StyleSheet, View } from "@react-pdf/renderer";
import { formatIteratorsData } from "../../utils";
import { PdfItem } from "../PDFContent";

const styles = StyleSheet.create({
  table: {
    width: "100%",
    borderTop: "1px solid black",
    borderLeft: "1px solid black",
  },
  tableRow: { flexDirection: "row" },
  tableCell: {
    flex: 1,
    borderBottom: "1px solid black",
    borderRight: "1px solid black",
    padding: 5,
  },
});

const CustomTable = ({ data }) => {
  return (
    <View style={styles.table}>
      {formatIteratorsData(data).map((item, rowIndex) => (
        <TableRow key={rowIndex} data={item.row} />
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

const TableCell = ({ cell }) => {
  return (
    <View style={styles.tableCell}>
      <PdfItem data={cell} />
    </View>
  );
};

export default CustomTable;
