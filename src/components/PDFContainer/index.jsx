import { Document, Font, Page, StyleSheet } from "@react-pdf/renderer";
import ArialFont from "../../assets/font/Arial.ttf";
import MingLiuFont from "../../assets/font/MingLiU.ttf";
import NotosanZhFont from "../../assets/font/Notosan-zh.otf";
import PingFangFont from "../../assets/font/PingFangSC-Regular.ttf";
import PdfContent from "../PDFContent";
import { PageFooter, PageHeader } from "../PageComponent";
import Watermark from "../WaterMark";

Font.register({ family: "pingFang", src: PingFangFont });
Font.register({ family: "arial", src: ArialFont });
Font.register({ family: "mingLiu", src: MingLiuFont });
Font.register({
  family: "Noto Sans",
  src: NotosanZhFont,
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
      <Page style={{ ...styles.body, fontSize: window.__INIT_PDF_CONFIG__.h4 }}>
        {Boolean(config?.watermark) && (
          <Watermark text={config?.watermark?.text} />
        )}
        <PageHeader config={config?.pdfHeader} />
        <PdfContent data={config.content} />
        <PageFooter config={config?.pdfFooter} />
      </Page>
    </Document>
  );
}

export default PDFContainer;
