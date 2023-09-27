import { Text } from "@react-pdf/renderer";

function PdfTitle({ data }) {
  console.log(data.style, "kkkk");
  return (
    <Text
      style={{
        fontFamily: "Noto Sans",
        textAlign: data?.textAlign,
        width: window.__INIT_PDF_CONFIG__[data?.titleWidth] ?? data?.titleWidth,
        fontSize: window.__INIT_PDF_CONFIG__[data?.type ?? "h4"],
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
