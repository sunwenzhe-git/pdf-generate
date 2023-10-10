import { useRef, useState, useDeferredValue } from "react";
import { PDFViewer } from "@react-pdf/renderer";
import { useDeepCompareEffect } from "ahooks";
import PanelContainer from "./panelComponents/PanelContainer";
import PDFContainer from "./components/PDFContainer";

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
window.__INIT_PDF_CONFIG__ = INIT_PDF_CONFIG;

const App = () => {
  const iframeRef = useRef(null);
  const [config, setConfig] = useState(null);
  const data = useDeferredValue(config);
  console.log(data, "llll");
  useDeepCompareEffect(() => {
    window.__INIT_PDF_CONFIG__ = data?.__INIT_PDF_CONFIG__
      ? data.__INIT_PDF_CONFIG__
      : INIT_PDF_CONFIG;
  }, [data?.__INIT_PDF_CONFIG__]);

  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "row" }}>
      <div style={{ flex: 1, padding: 30 }}>
        <PanelContainer setConfig={setConfig} />
      </div>
      <PDFViewer innerRef={iframeRef} style={{ flex: 1 }}>
        <PDFContainer config={data} />
      </PDFViewer>
    </div>
  );
};

export default App;
