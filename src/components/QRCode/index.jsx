import { Image, StyleSheet, View } from "@react-pdf/renderer";
import qrcode from "qrcode";
import React from "react";

const style = StyleSheet.create((size) => ({
  image: {
    width: size,
    height: size,
    textAlign: "right",
  },
}));
const QRCode = ({ data, size }) => {
  const styles = style(size);
  const qrCodeDataUrl = qrcode.toDataURL(data);

  return (
    <View style={styles.image}>
      <Image src={qrCodeDataUrl} />
    </View>
  );
};

export default QRCode;
