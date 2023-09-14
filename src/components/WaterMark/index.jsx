import React from "react";
import { Text, StyleSheet, View, Image } from "@react-pdf/renderer";

const styles = StyleSheet.create((length, fontSize) => ({
  watermark: {
    position: "relative",
    zIndex: 10,
  },
  watermarkText: {
    position: "absolute",
    left: "-29vw",
    top: 0,
    right: "-44vw",
    bottom: 0,
    display: "flex",
    transform: `rotate(45deg)`,
    flexDirection: "row",
    flexWrap: "wrap",
    zIndex: 88,
  },
  watermarkPadding: {
    opacity: 0.1,
    fontSize: 19,
    lineHeight: 5.5,
    padding: 10,
  },
  image: {
    marginVertical: 20,
    marginLeft: 10,
    width: (length * (fontSize + 6)) / 2,
    zIndex: 88,
    opacity: 0.4,
  },
}));
//文字转图片
function textToImage(text, fontSize) {
  let tLength = text.length; //获取文本个数
  let canvas = document.createElement("canvas"); //创建画布
  canvas.width = (tLength * (fontSize + 6)) / 2; //设置画布宽度，15为字体大小
  canvas.height = fontSize + 6;
  let context = canvas.getContext("2d"); //获取绘图环境
  context.textAlign = "center"; //设置居中
  context.fillStyle = "#fff"; //设置白色画笔
  context.fillRect(0, 0, canvas.width, canvas.height); //绘制白色背景，rect为方形
  context.font = `100 ${fontSize}px 宋体`; //加粗，字号，字体
  context.fillStyle = "#000"; //设置黑色画笔
  context.fillText(text, canvas.width / 2, canvas.height / 2); //添加文字
  return canvas.toDataURL("image/jpeg"); //返回Base64
}
function Watermark({ text }) {
  const imageSrc = textToImage(text, 20);
  const style = styles(text.length, 15);
  return (
    <View style={style.watermarkText} fixed>
      {Array.from({ length: 100 }, (_, index) => index).map((k) => (
        <Image key={k} src={imageSrc} style={style.image}></Image>
      ))}
    </View>
  );
}

export default Watermark;
