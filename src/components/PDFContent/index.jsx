import { Text } from "@react-pdf/renderer";
import React from "react";
import { formatIteratorsData } from "../../utils";
import CustomTable from "../CustomTable";
import Flex from "../Flex";
import PdfInputText from "../InputText";
import PdfText from "../PDFText";
import PdfTitle from "../Title";
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
  switch (data?.container) {
    case "table":
      return <CustomTable data={data?.dataSource} />;
    case "text":
      return <PdfText data={data} />;
    case "qrCode":
      return <QRCode data={data} size={data.size} />;
    case "flex":
      return <Flex data={data.dataSource} />;
    case "title":
      return <PdfTitle data={data} />;
    case "inputText":
      return <PdfInputText data={data} />;
    case "blank":
      return <Text> </Text>;
    default:
      return <></>;
  }
};
export default PdfContent;
