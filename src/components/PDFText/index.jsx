import React from "react";
import { Text, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: "justify",
  },
});
function PdfText({ data }) {
  return <Text style={styles.text}>{data}</Text>;
}

export default PdfText;
