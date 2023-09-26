import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import { useRequest } from "ahooks";
import React, { useMemo, useRef,useEffect,useState } from "react";
import PDFContainer from "./components/PDFContainer";
import { pdf1, pdf2 } from "./utils";

import qrcode from "qrcode";

function getData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(pdf2);
    }, 1000);
  });
}

const App = () => {
  const iframeRef = useRef(null);
  const [qr,setQR]= useState();
  const { data, error, loading } = useRequest(getData);
  const PDF = useMemo(() => data && <PDFContainer config={data} />, [data]);
  useEffect(()=>{
    qrcode.toDataURL("xxxxxx").then(res=>{
      setQR(res);
    })
  },[])
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
      <div><img src={qr} alt="XXX" width="200" height="200" /></div>
    </>
  );
};

export default App;
