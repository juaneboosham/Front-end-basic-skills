# 第二章 HTML中的JavaScript

## 1、行内脚本与外部脚本的比较

外部脚本如<script src="http://www.somewhere.com/afile.js"></script>，浏览器在解析这个资源时，会向 src 属性指定的路径发送一个 GET 请求，以取得相应资源。带有src的script标签内部的代码无效。



外部脚本叫行内脚本具有**可维护性**、**可缓存**的优点



## 2、script标签的属性

### 2.1 async和defer的对比

​	通常情况下，直接使用script标签，浏览器按顺序加载到script并执行，脚本加载&执行的过程中，会阻塞后续的`DOM`渲染。

​	而`async`和`defer`，这两个属性使得`script`的加载都不会阻塞`DOM`的渲染。

	### defer：script加载时不会阻止文档的解析，当页面解析和渲染完毕后，执行script。

### async：script加载时同样不会阻止文档的解析，但加载完后会立即执行。



注意：script执行时必然会阻塞HTML文档解析，defer和async只对外部脚本有效



甘特图解析：

蓝：文档解析

紫：脚本加载

黄：脚本执行

绿：DOMContentLoaded触发

![image-20210717202305986](/Users/huanglongzhan/Library/Application Support/typora-user-images/image-20210717202305986.png)

![image-20210717202422516](/Users/huanglongzhan/Library/Application Support/typora-user-images/image-20210717202422516.png)





## 2.2 动态加载脚本

即动态创建script标签，赋值script.src，此时的script标签相当于加了async。

