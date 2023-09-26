import { StyleSheet, Text } from "@react-pdf/renderer";

const stylesFunc = ({ textAlign, textDecoration, color }) =>
  StyleSheet.create({
    pageHeaderNumber: {
      fontSize: 12,
      left: textAlign === "left" ? "-4vw" : "",
      color,
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
      color,
    },
  });

/**
 * @param textAlign 文本对其方式
 * @param textDecoration 文本的decoration属性
 * @param text 所展示的具体文本
 * @returns
 */
const PageHeader = ({ config = {} }) => {
  const {
    textAlign = "left",
    textDecoration = "unset",
    text,
    color = "grey",
    style,
  } = config;
  const styles = stylesFunc({ textAlign, textDecoration, color });

  return (
    <Text
      style={{ ...styles.pageHeaderNumber, ...style }}
      render={({ pageNumber, totalPages }) =>
        text ?? `Page ${pageNumber} of ${totalPages}`
      }
      fixed
    />
  );
};
const PageFooter = ({ config = {} }) => {
  const {
    textAlign = "left",
    textDecoration = "unset",
    text,
    color = "grey",
    style,
  } = config;
  const styles = stylesFunc({ textAlign, textDecoration, color });

  return (
    <Text
      style={{ ...styles.pageFooter, ...style }}
      render={({ pageNumber, totalPages }) =>
        text ?? `${pageNumber} / ${totalPages}`
      }
      fixed
    />
  );
};
export { PageHeader, PageFooter };
