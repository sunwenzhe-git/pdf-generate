import React from "react";
import Flex from "../Flex";
import QRCode from "../QRCode";
import PdfText from "../PDFText";
import CustomTable from "../CustomTable";
import { formatIteratorsData } from "../../utils";

function PdfContent({ data }) {
  return (
    <>
      {formatIteratorsData(data)?.map((k, index) => (
        <PdfItem data={k} key={index} />
      ))}
    </>
  );
}

const PdfItem = ({ data }) => {
  switch (data.container) {
    case "table":
      return <CustomTable data={data?.dataSource} />;
    case "text":
      return <PdfText data={data.dataSource} />;
    case "qrCode":
      return <QRCode data={data.dataSource} size={data.size} />;
    case "flex":
      return <Flex data={data.dataSource} />;
    default:
      return <></>;
  }
};
export default PdfContent;
