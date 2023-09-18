import { StyleSheet, View } from "@react-pdf/renderer";
import React from "react";

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
