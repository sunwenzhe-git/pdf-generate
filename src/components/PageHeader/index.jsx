import { StyleSheet, Text, View } from "@react-pdf/renderer";
import React from "react";
import CustomTableArr from "../CustomTable/CustomTableArr";

const stylesFunc = ({ textAlign, textDecoration }) =>
  StyleSheet.create({
    header: {
      fontSize: 12,
      marginBottom: 20,
      textAlign: textAlign,
      color: "grey",
      textDecoration: textDecoration,
    },
    headerUnderline: {
      borderBottom: "1pt solid black",
    },
    pageHeaderNumber: {
      fontSize: 12,
      left: "-4vw",
      color: "grey",
    },
  });

/**
 *
 * @param {isShowPage} 是否展示页眉的页数
 * @param {type} 页面的类型： 1.text纯文本  2.table自定义表格
 * @param {text} 当type为“text”时，所展示的具体文本
 * @param {textAlign} 当type为“text”时，文本对其方式
 * @param {textDecoration} 当type为“text”时，文本的decoration属性
 * @param {tableData} 当type为“table”时，所需要的data数据
 * @returns
 */
const PageHeader = ({
  isShowPage,
  type = "text",
  text,
  textAlign = "center",
  textDecoration = "unset",
  tableData,
}) => {
  const styles = stylesFunc({ textAlign, textDecoration });
  const pageShowContent = (
    <Text
      style={styles.pageHeaderNumber}
      render={({ pageNumber, totalPages }) =>
        `Page ${pageNumber} of ${totalPages}`
      }
      fixed
    />
  );

  return (
    <>
      {isShowPage && pageShowContent}
      {type === "table" ? (
        <View style={styles.headerUnderline}>
          <CustomTableArr data={tableData} />
        </View>
      ) : (
        <Text style={styles.header}>{text}</Text>
      )}
    </>
  );
};

export default PageHeader;
