import { useRef, useState, useDeferredValue } from "react";
import { PDFViewer } from "@react-pdf/renderer";
import { useDeepCompareEffect, useRequest } from "ahooks";
import PanelContainer from "./panelComponents/PanelContainer";
import PDFContainer from "./components/PDFContainer";
import { pdf1 } from "./utils";
const render = (template, dataSource) => {
  const regex = /{{([\d\D]*?)}}/g;
  const replacedTemplate = template.replace(regex, ($0, $1) => {
    const data = Object.assign({}, dataSource);
    return `${data[$1]}`;
  });
  return replacedTemplate;
};

function getData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = {
        A: "慢性疾病共同治理先导计划",
        B: "Chronic Disease Co-Care Pilot Schema",
      };
      resolve(data);
    }, 1000);
  });
}
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
function formData(config, data) {
  const newData = render(JSON.stringify(config), data);
  return JSON.parse(newData);
}
const App = () => {
  const iframeRef = useRef(null);
  const formRef = useRef(null);

  const [config, setConfig] = useState(null);
  const { data, error, loading } = useRequest(getData);
  const configData = useDeferredValue(config);
  useDeepCompareEffect(() => {
    window.__INIT_PDF_CONFIG__ = data?.__INIT_PDF_CONFIG__
      ? data.__INIT_PDF_CONFIG__
      : INIT_PDF_CONFIG;
  }, [data?.__INIT_PDF_CONFIG__]);
  if (loading) {
    return <>加载中...</>;
  }
  if (error) {
    return <>{JSON.stringify(error)}</>;
  }
  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "row" }}>
      <div style={{ flex: 1, padding: 30 }}>
        <PanelContainer
          setConfig={setConfig}
          config={config}
          formRef={formRef}
        />
      </div>
      <div style={{ position: "relative", flex: 1 }}>
        <div
          style={{ position: "fixed", top: 0, width: "50vw", height: "100%" }}
        >
          <PDFViewer
            innerRef={iframeRef}
            style={{ width: "100%", height: "100%" }}
          >
            <PDFContainer config={formData(configData, data)} />
          </PDFViewer>
        </div>
      </div>
    </div>
  );
};

export default App;
