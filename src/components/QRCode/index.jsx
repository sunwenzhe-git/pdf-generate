import { Image, StyleSheet, View } from "@react-pdf/renderer";
import qrcode from "qrcode";
import PdfContent from "../PDFContent";

const style = StyleSheet.create((size) => ({
  qrCode: {
    width: size,
    display: "flex",
    justifyContent: "center",
  },
}));
const QRCode = ({ data, size }) => {
  const styles = style(size);
  const qrCodeDataUrl = qrcode.toDataURL(data.dataSource);
  return (
    <View style={{ marginTop: -10, ...styles.qrCode }}>
      <Image style={{ width: size, height: size }} src={qrCodeDataUrl} />
      <View style={{ paddingLeft: 11 }}>
        {!!data.describe && <PdfContent data={data.describe} />}
      </View>
    </View>
  );
};

export default QRCode;
