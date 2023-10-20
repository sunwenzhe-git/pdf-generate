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

## TODOLIST

### 数据源直接输入变量
### inputText value不存在就不展示
### 头部固定，尾部固定
### 水印支持图片
### 数据源list可以拖拽换顺序，跨层级可以复制
### pdfRadio组件还没有（吐出去个配置，自己传图片）
### 颜色和字体
