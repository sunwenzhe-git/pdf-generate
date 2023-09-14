import React, { useRef } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import PDFViewer from "./components/PDFViewer";
import PdfExample from "./components/PdfExample";

const App = () => {
  const iframeRef = useRef(null);

  return (
    <>
      <PDFViewer
        innerRef={iframeRef}
        style={{ width: "100vw", height: "100vh" }}
      >
        <PdfExample />
      </PDFViewer>
      <PDFDownloadLink document={<PdfExample />} fileName="PdfContainer.pdf">
        {({ blob, url, loading, error }) => {
          return loading ? "Loading ..." : "下载 PDF";
        }}
      </PDFDownloadLink>
    </>
  );
};

export default App;
