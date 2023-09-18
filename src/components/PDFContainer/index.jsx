import {
  Document,
  Font,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";
import React from "react";
import PingFangFont from "../../assets/font/PingFangSC-Regular.ttf";
import CustomTable from "../CustomTable";
import PageHeader from "../PageHeader";
import QRCode from "../QRCode";
import Watermark from "../WaterMark";

Font.register({ family: "pingFang", src: PingFangFont });

const styles = StyleSheet.create({
  watermarkText: {
    position: "absolute",
    left: "-29vw",
    top: 0,
    right: "-29vw",
    bottom: 0,
    display: "flex",
    transform: `rotate(45deg)`,
  },
  document: {
    userSelect: "none",
  },
  watermarkPadding: {
    opacity: 0.1,
    fontSize: 19,
    lineHeight: 5.5,
    padding: 10,
  },
  body: {
    paddingBottom: 60,
    paddingHorizontal: 35,
    position: "relative",
    fontFamily: "pingFang",
  },
  title: {
    fontSize: 24,
    textAlign: "center",
  },
  image: {
    width: 40,
    height: 40,
    textAlign: "right",
  },
  author: {
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 40,
  },
  subtitle: {
    fontSize: 18,
    margin: 12,
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: "justify",
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: "center",
    color: "grey",
  },
  headerUnderline: {
    borderBottom: "1pt solid black",
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
});

function PDFContainer(props) {
  const { config } = props;

  const qrCodeData = "https://example.com";

  return (
    <Document>
      <Page style={styles.body}>
        <Watermark text={config?.watermark?.text} />
        <PageHeader />
        <>
          {config.content?.map((k, index) => {
            if (k.container === "table") {
              return (
                <CustomTable
                  key={`${k.container}_index`}
                  data={k?.dataSource}
                />
              );
            }
            if (k.container === "text") {
              return (
                <Text key={`${k.container}_index`} style={styles.text}>
                  {k.dataSource}
                </Text>
              );
            }
            return <></>;
          })}
        </>

        <View style={styles.image}>
          <QRCode value={qrCodeData} size={150} />
        </View>
        <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`
          }
          fixed
        />
      </Page>
    </Document>
  );
}

export default PDFContainer;
