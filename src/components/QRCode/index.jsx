import React from "react";
import { Image, View, StyleSheet } from "@react-pdf/renderer";
import qrcode from "qrcode";

const style = StyleSheet.create((size) => ({
  image: {
    width: size,
    height: size,
    textAlign: "right",
  },
}));
const QRCode = ({ value, size }) => {
  const styles = style(size);
  const qrCodeDataUrl = qrcode.toDataURL(value);

  return (
    <View style={styles.image}>
      <Image src={qrCodeDataUrl} />
    </View>
  );
};

export default QRCode;
