## 页眉 页脚
页眉有两种，左上角，中间（右边也加上吧）。展示有两种，带下划线，不带下划线
### 设计
header: {
    textAlign: "left" | "right" | "center", 默认left 
    underline: true,
    text: "我是页眉"  默认 ： "Page 1 of 2"
},
footer: {
    textAlign: "left" | "right" | "center", 默认left 
    underline: true,
    text: "我是页眉"  默认 ： "Page 1 of 2"
}
## 水印
最外层
{
    waterMark: true
}
方案：不想引入其它的库，通过Text组件绝对定位来实现

## Table组件
需要自己实现
