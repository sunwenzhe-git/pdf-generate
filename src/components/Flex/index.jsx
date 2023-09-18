import { StyleSheet, View } from "@react-pdf/renderer";
import React from "react";

const x = {
  watermark: {
    text: "xxxxxxxx",
    textAlign: "center",
    underline: true,
  },
  content: [
    {
      container: "Flex",
      col: 3,
      dataSource: [
        null,
        {
          container: [
            {
              container: "title",
              type: "h1",
              title: "慢性疾病共同治理先导计划",
            },
            {
              container: "title",
              type: "h2",
              title: "Chronic Disease Co-Care Pilot Schema",
            },
            {
              container: "title",
              type: "h2",
              title: "Consultation Letter",
              style: { paddingTop: 20 },
            },
          ],
        },
        {
          container: [
            {
              container: "qrCode",
              title: "慢性疾病共同治理先导计划",
            },
            {
              container: "inputText",
              title: "Reference No",
            },
          ],
        },
      ],
    },
  ],
};
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
      <View style={[styles.column, styles.column1]}>{/* 第一列的内容 */}</View>
      <View style={[styles.column, styles.column2]}>{/* 第二列的内容 */}</View>
      <View style={[styles.column, styles.column3]}>{/* 第三列的内容 */}</View>
    </View>
  );
};
export default Flex;
