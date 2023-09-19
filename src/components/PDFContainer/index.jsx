import { Document, Font, Page, StyleSheet } from "@react-pdf/renderer";
import React from "react";
import PingFangFont from "../../assets/font/PingFangSC-Regular.ttf";
import { PageHeader, PageFooter } from "../PageComponent";
import PdfContent from "../PDFContent";
import QRCode from "../QRCode";
import Watermark from "../WaterMark";

Font.register({ family: "pingFang", src: PingFangFont });

const styles = StyleSheet.create({
  body: {
    paddingBottom: 60,
    paddingHorizontal: 35,
    position: "relative",
    fontFamily: "pingFang",
  },
});

function PDFContainer(props) {
  const { config } = props;

  return (
    <Document>
      <Page style={styles.body}>
        <Watermark text={config?.watermark?.text} />
        <PageHeader />
        <PdfContent data={config.content} />
        <PageFooter />
      </Page>
    </Document>
  );
}

export default PDFContainer;
