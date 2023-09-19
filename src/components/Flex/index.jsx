import { StyleSheet, View } from "@react-pdf/renderer";
import PdfContent from "../PDFContent";
import { formatIteratorsData } from "../../utils";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
  column: {
    flex: 1,
    padding: 10,
  },
});

const Flex = ({ data }) => {
  return (
    <View style={styles.container}>
      {formatIteratorsData(data).map((item) => {
        return (
          <View style={styles.column}>
            {!!item && <PdfContent data={item} />}
          </View>
        );
      })}
    </View>
  );
};
export default Flex;
