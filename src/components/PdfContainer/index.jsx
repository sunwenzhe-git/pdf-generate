import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

// 创建样式
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
    padding: 20,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
    backgroundColor: "white",
    borderRadius: 5,
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: 150,
    marginBottom: 10,
    borderRadius: 5,
  },
  table: {
    width: "100%",
    marginBottom: 10,
  },
  tableRow: {
    flexDirection: "row",
    borderBottom: "1 solid black",
    padding: 5,
  },
  tableCell: {
    flex: 1,
    padding: 5,
  },
});
// interface PdfSchema {}
// 创建pdf文档
const PdfContainer = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.title}>PDF Example</Text>
        <Text>Section #1</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.title}>Table Example</Text>
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <View style={styles.tableCell}>
              <Text>Name</Text>
            </View>
            <View style={styles.tableCell}>
              <Text>Age</Text>
            </View>
          </View>
          <View style={styles.tableRow}>
            <View style={styles.tableCell}>
              <Text>John Doe</Text>
            </View>
            <View style={styles.tableCell}>
              <Text>30</Text>
            </View>
          </View>
          <View style={styles.tableRow}>
            <View style={styles.tableCell}>
              <Text>Jane Smith</Text>
            </View>
            <View style={styles.tableCell}>
              <Text>25</Text>
            </View>
          </View>
        </View>
      </View>
    </Page>
  </Document>
);

export default PdfContainer;
