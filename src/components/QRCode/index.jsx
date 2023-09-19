import { Image, StyleSheet, View } from "@react-pdf/renderer";
import qrcode from "qrcode";
import React from "react";
import PdfContent from "../PDFContent";

const style = StyleSheet.create((size) => ({
  qrCode: {
    width: size,
  },
}));
const QRCode = ({ data, size }) => {
  const styles = style(size);
  const qrCodeDataUrl = qrcode.toDataURL(data.dataSource);
  console.log(data, "data.describe");
  return (
    <View style={styles.qrCode}>
      <Image src={qrCodeDataUrl} />
      {!!data.describe && <PdfContent data={data.describe} />}
    </View>
  );
};

export default QRCode;
