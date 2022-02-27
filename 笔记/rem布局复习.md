# rem布局

主要解决了什么问题？

1、流式布局和flex布局主要解决了宽度的问题。高度基本上写死，如果用rem，则高度也可以伸缩。

<img src="/Users/huanglongzhan/Library/Application Support/typora-user-images/image-20211010223642671.png" alt="image-20211010223642671" style="zoom:50%;" />

<div align="center">携程网采用flex布局，高度写死</div>

2、让文字也能随着屏幕的变大而变大。



### 主流适配方案

1、less/sass + 媒体查询 +rem

2、flexible.js + rem