import { Text, View } from "@react-pdf/renderer";
import PdfTitle from "../Title";

function PdfInputText({ data }) {
  return (
    <View style={{ ...data.style }}>
      {!!data?.title && <PdfTitle data={data} />}
      {data?.col && (
        <View style={{ display: "flex", flexDirection: "row" }}>
          {Array.from({ length: data.col }, (_, index) => index).map((k) => (
            <Text
              key={k}
              style={{
                fontFamily: "Noto Sans",
                marginLeft:
                  k === 0
                    ? window.__[data?.titleWidth] || data?.titleWidth
                    : undefined,
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
              style={{ display: "flex", flexDirection: "row" }}
            >
              <Text
                style={{
                  fontFamily: data.titleBold ? "Noto Sans" : "pingFang",
                  fontSize: window.__INIT_PDF_CONFIG__.h5,
                  width:
                    window.__INIT_PDF_CONFIG__[data?.titleWidth] ||
                    data?.titleWidth,
                  textDecoration: k?.labelTextDecoration,
                }}
              >
                {k?.label}
                {k?.label && k?.value && labelColon ? ":" : ""}
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
                      {` ${k?.value?.[vItem]}`}
                    </Text>
                  ))}
                </>
              ) : (
                <Text
                  style={{
                    flex: 1,
                    top: data.titleBold && !k.labelBold ? "-2pt" : "",
                    textDecoration: k?.valueTextDecoration,
                    fontSize: window.__INIT_PDF_CONFIG__.h5,
                    fontFamily: k.labelBold ? "Noto Sans" : "pingFang",
                  }}
                >
                  {` ${k?.value} ${k?.unit ?? ""}`}
                </Text>
              )}
            </View>
          );
        })}
    </View>
  );
}

export default PdfInputText;
