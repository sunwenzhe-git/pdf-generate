import React from "react";
import CustomTable from "../CustomTable";
import PdfText from "../PDFText";

function PdfContent({ data }) {
  return (
    <>
      {data?.map((k, index) => {
        if (k.container === "table") {
          return (
            <CustomTable key={`${k.container}_index`} data={k?.dataSource} />
          );
        }
        if (k.container === "text") {
          return <PdfText data={k.dataSource} key={`${k.container}_index`} />;
        }
        return <></>;
      })}
    </>
  );
}

export default PdfContent;
