import React from "react";
import Flex from "../Flex";
import QRCode from "../QRCode";
import PdfText from "../PDFText";
import CustomTable from "../CustomTable";
import { formatIteratorsData } from "../../utils";

function PdfContent({ data }) {
  console.log(data, "kkkkkkk");
  return (
    <>
      {formatIteratorsData(data)?.map((k, index) => {
        if (k.container === "table") {
          return (
            <CustomTable key={`${k.container}_index`} data={k?.dataSource} />
          );
        }
        if (k.container === "text") {
          return <PdfText data={k.dataSource} key={`${k.container}_index`} />;
        }
        if (k.container === "qrCode") {
          return <QRCode value={k.dataSource} size={k.size} />;
        }
        if (k.container === "flex") {
          return <Flex data={k.dataSource} />;
        }
        return <></>;
      })}
    </>
  );
}

export default PdfContent;
