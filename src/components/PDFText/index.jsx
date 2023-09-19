import { StyleSheet, Text } from "@react-pdf/renderer";
import React from "react";
import { FONTSIZE_SET } from "../CustomTable/utils";

const styles = StyleSheet.create({
  text: {
    // margin: 12,
    fontSize: FONTSIZE_SET.h4,
    textAlign: "justify",
  },
});
function PdfText({ data }) {
  return <Text style={styles.text}>{data}</Text>;
}

export default PdfText;
