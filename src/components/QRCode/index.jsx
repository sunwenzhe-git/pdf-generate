import React from "react";
import { Image } from "@react-pdf/renderer";
import qrcode from "qrcode";

const QRCode = ({ value, size }) => {
  const qrCodeDataUrl = qrcode.toDataURL(value, {
    width: size,
    height: size,
  });

  return <Image src={qrCodeDataUrl} />;
};

export default QRCode;
