import { useRef, useState, useDeferredValue } from "react";
import { PDFViewer } from "@react-pdf/renderer";
import { useDeepCompareEffect } from "ahooks";
import PanelContainer from "./panelComponents/PanelContainer";
import PDFContainer from "./components/PDFContainer";
import { pdf1 } from "./utils";

const INIT_PDF_CONFIG = {
  h1: 24,
  h2: 18,
  h3: 14.04,
  h4: 12,
  h5: 9.96,
  h6: 9,
  width_1: 60,
  width_2: 150,
  width_3: 180,
};
window.__INIT_PDF_CONFIG__ = INIT_PDF_CONFIG;
function formData(config) {
  return config;
  // config.data?.map()
}
const App = () => {
  const iframeRef = useRef(null);
  const [config, setConfig] = useState(null);
  const data = useDeferredValue(config);
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
      <div style={{ position: "relative", flex: 1 }}>
        <div
          style={{ position: "fixed", top: 0, width: "50vw", height: "100%" }}
        >
          <PDFViewer
            innerRef={iframeRef}
            style={{ width: "100%", height: "100%" }}
          >
            <PDFContainer config={formData(data)} />
          </PDFViewer>
        </div>
      </div>
    </div>
  );
};

export default App;
