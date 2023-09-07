import React from "react";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
// import PdfContainer from "./components/PdfContainer";
import PdfExample from "./components/PdfExample";

const App = () => {
  const timer = new Date().getTime();

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <PDFViewer style={{ width: "100vw", height: "100vh" }}>
        <PdfExample />
      </PDFViewer>
      <PDFDownloadLink document={<PdfExample />} fileName="PdfContainer.pdf">
        {({ blob, url, loading, error }) => {
          if (!loading) {
            console.log((new Date().getTime() - timer) / 1000, "llll");
          }
          return loading ? "Loading ..." : "下载 PDF";
        }}
      </PDFDownloadLink>
    </div>
  );
};

export default App;
