import { Text } from "@react-pdf/renderer";
import React from "react";
import { FONTSIZE_SET } from "../CustomTable/utils";

// TODO 汉字的粗体样式。。。 'arial'不识别汉字。fontWeight属性不起作用
function PdfTitle({ data }) {
  return (
    <Text
      style={{
        fontFamily: "arial",
        textAlign: data?.textAlign,
        fontSize: FONTSIZE_SET[data?.type],
      }}
    >
      {data?.title}
    </Text>
  );
}

export default PdfTitle;
