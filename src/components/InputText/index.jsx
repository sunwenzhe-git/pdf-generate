import { Text, View } from "@react-pdf/renderer";
import PdfTitle from "../Title";

function PdfInputText({ data }) {
  return (
    <View style={{ ...data.style }}>
      {!!data?.title && <PdfTitle data={data} />}
      {data?.col && (
        <View
          style={{ display: "flex", flexDirection: "row", marginBottom: 8 }}
        >
          {Array.from({ length: data.col }, (_, index) => index).map((k) => (
            <Text
              key={k}
              style={{
                fontFamily: "Noto Sans",
                // marginLeft:
                //   k === 0
                //     ? window.__INIT_PDF_CONFIG__[data?.lableWidth] ||
                //       data?.lableWidth
                //     : undefined,
                textDecoration: data?.textDecoration,
                flex: 1,
              }}
            >
              {data?.colTitle?.[k]}
            </Text>
          ))}
        </View>
      )}

      {data?.dataSource instanceof Array &&
        data?.dataSource?.map((k) => {
          const labelColon = k?.labelColon ?? true;
          return (
            <View
              key={k.value}
              style={{
                display: "flex",
                flexDirection: "row",
                marginBottom: 4,
              }}
            >
              {!!k?.label && (
                <Text
                  style={{
                    fontFamily: k.labelBold ? "Noto Sans" : "pingFang",
                    fontSize: window.__INIT_PDF_CONFIG__.h5,
                    textDecoration: k?.labelTextDecoration,
                    width:
                      window.__INIT_PDF_CONFIG__[data?.lableWidth] ??
                      data?.lableWidth,
                  }}
                >
                  {k?.label}
                  {k?.label && k?.value && labelColon ? ":" : ""}
                </Text>
              )}
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
                      {`${labelColon ? "" : " "}${k?.value?.[vItem]}`}
                    </Text>
                  ))}
                </>
              ) : (
                <Text
                  style={{
                    flex: 1,
                    textDecoration: k?.valueTextDecoration,
                    fontSize: window.__INIT_PDF_CONFIG__.h5,
                    fontFamily: k.valueBold ? "Noto Sans" : "pingFang",
                  }}
                >
                  {`${labelColon ? "" : " "}${k?.value ?? ""} ${k?.unit ?? ""}`}
                </Text>
              )}
            </View>
          );
        })}
    </View>
  );
}

export default PdfInputText;
