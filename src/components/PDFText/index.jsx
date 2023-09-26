import { StyleSheet, Text } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  text: {
    textAlign: "justify",
  },
});
function PdfText({ data }) {
  return (
    <Text style={{ ...styles.text, fontSize: window.__INIT_PDF_CONFIG__.h5 }}>
      {data}
    </Text>
  );
}

export default PdfText;
