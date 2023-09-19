import { Document, Font, Page, StyleSheet } from "@react-pdf/renderer";
import React from "react";
import ArialFont from "../../assets/font/Arial.ttf";
import MingLiuFont from "../../assets/font/MingLiU.ttf";
import NotosanBoldFont from "../../assets/font/Notosan-Bold.otf";
import NotosanFont from "../../assets/font/Notosan.otf";
import PingFangFont from "../../assets/font/PingFangSC-Regular.ttf";

import PdfContent from "../PDFContent";
import { PageFooter, PageHeader } from "../PageComponent";
import Watermark from "../WaterMark";

Font.register({ family: "pingFang", src: PingFangFont });
Font.register({ family: "arial", src: ArialFont });
Font.register({ family: "mingLiu", src: MingLiuFont });
Font.register({
  family: "Noto Sans",
  fonts: [{ src: NotosanFont }, { src: NotosanBoldFont, fontWeight: "bold" }],
});

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
        <PageHeader config={config?.pageHeader} />
        <PdfContent data={config.content} />
        <PageFooter config={config?.pageFooter} />
      </Page>
    </Document>
  );
}

export default PDFContainer;
