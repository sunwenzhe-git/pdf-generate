import { StyleSheet, View } from "@react-pdf/renderer";
import { PdfItem } from "../PDFContent";
import { formatIteratorsData } from "../../utils";

const classes = StyleSheet.create(({ flexDirection, justifyContent }) => ({
  container: {
    flexDirection,
    justifyContent,
  },
  column: {
    padding: 10,
  },
}));

const Flex = ({ data }) => {
  const { flexDirection = "row", justifyContent = "space-between" } =
    data ?? {};
  const styles = classes({ flexDirection, justifyContent });

  return (
    <View style={styles.container}>
      {formatIteratorsData(data).map((item, index) => {
        return (
          <View
            style={[styles.column, { flex: item?.flex ? item.flex : 1 }]}
            key={index}
          >
            {!!item?.container && <PdfItem data={item} />}
          </View>
        );
      })}
    </View>
  );
};
export default Flex;
