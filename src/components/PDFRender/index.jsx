import {
  Document,
  Font,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";
import React from "react";
import QRCode from "../QRCode";
import Watermark from "../WaterMark";
import CustomTable from "../CustomTable";
import PingFangFont from "../../assets/font/PingFangSC-Regular.ttf";
import PageHeader from "../PageHeader";

const config = {
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
  watermarkText: {
    position: "absolute",
    left: "-29vw",
    top: 0,
    right: "-29vw",
    bottom: 0,
    display: "flex",
    transform: `rotate(45deg)`,
  },
  document: {
    userSelect: "none",
  },
  watermarkPadding: {
    opacity: 0.1,
    fontSize: 19,
    lineHeight: 5.5,
    padding: 10,
  },
  body: {
    paddingBottom: 60,
    paddingHorizontal: 35,
    position: "relative",
    fontFamily: "pingFang",
  },
  title: {
    fontSize: 24,
    textAlign: "center",
  },
  image: {
    width: 40,
    height: 40,
    textAlign: "right",
  },
  author: {
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 40,
  },
  subtitle: {
    fontSize: 18,
    margin: 12,
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: "justify",
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: "center",
    color: "grey",
  },
  headerUnderline: {
    borderBottom: "1pt solid black",
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
});
function PdfRender() {
  return (
    <Document>
      <Page style={styles.body}></Page>
    </Document>
  );
}

export default PdfRender;
