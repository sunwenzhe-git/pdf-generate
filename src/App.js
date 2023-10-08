import React, { useMemo, useRef, useEffect, useState } from "react";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import { useRequest } from "ahooks";
import PanelContainer from "./panelComponents/PanelContainer";
import PDFContainer from "./components/PDFContainer";
import { pdf1, pdf2 } from "./utils";

const INIT_PDF_CONFIG = {
  h1: 24,
  h2: 18,
  h3: 14.04,
  h4: 12,
  h5: 9.96,
  h6: 9,
  width_first: 60,
  width_second: 150,
};
function getData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = pdf1;
      window.__INIT_PDF_CONFIG__ = data?.__INIT_PDF_CONFIG__
        ? data.__INIT_PDF_CONFIG__
        : INIT_PDF_CONFIG;
      resolve(data);
    }, 1000);
  });
}

const App = () => {
  const iframeRef = useRef(null);
  const [config, setConfig] = useState(null);
  const { data, error, loading } = useRequest(getData);
  useEffect(() => {
    if (data) {
      setConfig(data);
    }
  }, [data]);
  const PDF = useMemo(
    () => config && <PDFContainer config={config} />,
    [config]
  );

  if (error) {
    return <div>failed to load</div>;
  }
  if (loading) {
    return <div>loading...</div>;
  }
  console.log(config, "config");
  return (
    <>
      <div style={{ height: "100vh", display: "flex", flexDirection: "row" }}>
        <div style={{ flex: 1, padding: 30 }}>
          <PanelContainer />
          {/* <PDFDownloadLink document={PDF} fileName="PdfContainer.pdf">
            {({ blob, url, loading, error }) => {
              return loading ? "Loading ..." : "下载 PDF";
            }}
          </PDFDownloadLink> */}
        </div>
        <PDFViewer innerRef={iframeRef} style={{ flex: 1 }}>
          {PDF}
        </PDFViewer>
      </div>
    </>
  );
};

export default App;
