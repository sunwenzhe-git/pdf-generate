## 页眉 页脚
页眉有两种，左上角，中间（右边也加上吧）。展示有两种，带下划线，不带下划线

todo: 页脚
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
文字和svg可以被复制，canvas会变模糊
最外层
{
    waterMark: true
}
方案：不想引入其它的库，通过Text组件绝对定位来实现
todo：要放在最上面，并且水印不能被复制

## Table组件
需要自己实现

## 初始化时候需要一个init函数
就配置h1,h2还有字体这种
