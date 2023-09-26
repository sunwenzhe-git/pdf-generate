import { StyleSheet, View } from "@react-pdf/renderer";
import { formatIteratorsData } from "../../utils";
import PdfContent from "../PDFContent";

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
  return (
    <View style={className === "none" ? "" : styles.tableCell}>
      {cell?.container instanceof Array ? (
        formatIteratorsData(cell.container).map((cell, cellIndex) => (
          <TableCell key={cellIndex} cell={cell} className={"none"} />
        ))
      ) : (
        <PdfContent data={[{ ...cell }]} />
      )}
    </View>
  );
};

export default CustomTable;
