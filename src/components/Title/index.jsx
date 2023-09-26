import { Text } from "@react-pdf/renderer";
import React from "react";
import { FONTSIZE_SET } from "../CustomTable/utils";

function PdfTitle({ data }) {
  return (
    <Text
      style={{
        fontFamily: "Noto Sans",
        textAlign: data?.textAlign,
        fontSize: FONTSIZE_SET[data?.type],
        paddingBottom: 3,
        textDecoration: data?.textDecoration,
        ...data.style,
      }}
    >
      {data?.title}
    </Text>
  );
}

export default PdfTitle;
