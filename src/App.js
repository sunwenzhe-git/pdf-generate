import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import { useRequest } from "ahooks";
import React, { useMemo, useRef } from "react";
import PDFContainer from "./components/PDFContainer";
import { pdf1, pdf2 } from "./utils";

function getData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(pdf2);
    }, 1000);
  });
}
const App = () => {
  const iframeRef = useRef(null);
  const { data, error, loading } = useRequest(getData);
  const PDF = useMemo(() => data && <PDFContainer config={data} />, [data]);

  if (error) {
    return <div>failed to load</div>;
  }
  if (loading) {
    return <div>loading...</div>;
  }

  return (
    <>
      <PDFViewer
        innerRef={iframeRef}
        style={{ width: "100vw", height: "100vh" }}
      >
        {PDF}
      </PDFViewer>
      <PDFDownloadLink document={PDF} fileName="PdfContainer.pdf">
        {({ blob, url, loading, error }) => {
          return loading ? "Loading ..." : "下载 PDF";
        }}
      </PDFDownloadLink>
    </>
  );
};

export default App;
