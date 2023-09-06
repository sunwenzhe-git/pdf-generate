import React from "react";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import PdfContainer from "./components/PdfContainer";
const App = () => {
  const timer = new Date().getTime();

  return (
    <>
      <PDFViewer>
        <PdfContainer />
      </PDFViewer>
      <PDFDownloadLink document={<PdfContainer />} fileName="PdfContainer.pdf">
        {({ blob, url, loading, error }) => {
          if (!loading) {
            console.log((new Date().getTime() - timer) / 1000, "llll");
          }
          return loading ? "Loading ..." : "下载 PDF";
        }}
      </PDFDownloadLink>
    </>
  );
};

export default App;
