import { StyleSheet, Text } from "@react-pdf/renderer";
import React from "react";

const stylesFunc = ({ textAlign, textDecoration }) =>
  StyleSheet.create({
    pageHeaderNumber: {
      fontSize: 12,
      left: textAlign === "left" ? "-4vw" : "",
      color: "grey",
      textAlign: textAlign,
      textDecoration: textDecoration,
    },
    pageFooter: {
      position: "absolute",
      fontSize: 12,
      bottom: 30,
      left: 0,
      right: 0,
      textAlign: "center",
      color: "grey",
    },
  });

/**
 * @param textAlign 文本对其方式
 * @param textDecoration 文本的decoration属性
 * @param text 所展示的具体文本
 * @returns
 */
const PageHeader = ({ textAlign = "left", textDecoration = "unset", text }) => {
  const styles = stylesFunc({ textAlign, textDecoration });

  return (
    <Text
      style={styles.pageHeaderNumber}
      render={({ pageNumber, totalPages }) =>
        text ?? `Page ${pageNumber} of ${totalPages}`
      }
      fixed
    />
  );
};
const PageFooter = ({ textAlign = "left", textDecoration = "unset", text }) => {
  const styles = stylesFunc({ textAlign, textDecoration });

  return (
    <Text
      style={styles.pageFooter}
      render={({ pageNumber, totalPages }) =>
        text ?? `${pageNumber} / ${totalPages}`
      }
      fixed
    />
  );
};
export { PageHeader, PageFooter };
