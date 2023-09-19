import React from "react";
import { formatIteratorsData } from "../../utils";
import CustomTable from "../CustomTable";
import Flex from "../Flex";
import PdfInputText from "../PDFInputText";
import PdfText from "../PDFText";
import PdfTitle from "../PDFTitle";
import QRCode from "../QRCode";

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
      return <QRCode data={data} size={data.size} />;
    case "flex":
      return <Flex data={data.dataSource} />;
    case "title":
      return <PdfTitle data={data} />;
    case "inputText":
      return <PdfInputText data={data} />;
    default:
      return <></>;
  }
};
export default PdfContent;
