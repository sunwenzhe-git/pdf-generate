import { Text, View } from "@react-pdf/renderer";
import React from "react";
import { WIDTH_SET } from "../CustomTable/utils";
import PdfTitle from "../PDFTitle";

function PdfInputText({ data }) {
  return (
    <>
      {data?.title && <PdfTitle data={data} />}

      {data?.col && (
        <View style={{ display: "flex", flexDirection: "row" }}>
          {Array.from({ length: data.col }, (_, index) => index).map((k) => (
            <Text
              key={k}
              style={{
                fontFamily: "Noto Sans",
                marginLeft:
                  k === 0
                    ? WIDTH_SET[data?.titleWidth] || data?.titleWidth
                    : undefined,
                flex: 1,
              }}
            >
              {data?.colTitle?.[k]}
            </Text>
          ))}
        </View>
      )}

      {data?.dataSource instanceof Array &&
        data?.dataSource?.map((k) => (
          <View key={k.value} style={{ display: "flex", flexDirection: "row" }}>
            <Text
              style={{
                fontFamily: data.titleBold ? "Noto Sans" : "pingFang",
                width: WIDTH_SET[data?.titleWidth] || data?.titleWidth,
              }}
            >
              {k?.label}
              {k?.label && k?.value ? ":" : ""}
            </Text>

            {k?.value instanceof Array ? (
              <>
                {Array.from(
                  { length: k.value.length },
                  (_, index) => index
                ).map((vItem) => (
                  <Text
                    key={k}
                    style={{
                      flex: 1,
                    }}
                  >
                    {k?.value?.[vItem]}
                  </Text>
                ))}
              </>
            ) : (
              <Text style={{ flex: 1, top: data.titleBold ? "-2pt" : "" }}>
                {k?.value} {k?.unit}
              </Text>
            )}
          </View>
        ))}
    </>
  );
}

export default PdfInputText;
