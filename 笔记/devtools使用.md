PWA( 全称:*Progressive* *Web* *App* )也就是说这是个渐进式的网页*应用程序*。

媒体查询、跨域

# Chrome调试工具

参考文档https://developer.chrome.com/docs/devtools/overview/





mac快捷键（command+option+j）or （f12）

## 1、审查元素

可以进行元素拖动

进行隐藏元素，复制元素，编辑元素，复制元素样式等操作，比较自由的Edit as HTML

保持住元素的hover等状态

.cls添加class，去掉class

动态查看页面元素，便于调整页面样式（优先级）, 可以同步到本地文件中



##### computed

①查看计算后的属性，可以忽略前面被覆盖的属性，看到元素的最终样式

②调盒子样式时更直观

③小箭头可以查看最终样式的来源

④show all可以查看浏览器默认的样式

![image-20210829173712587](/Users/huanglongzhan/Library/Application Support/typora-user-images/image-20210829173712587.png)



## 2、控制台

##### 控制台的输出日志等级，info（log的别名）、debug、warn、error

![image-20210829175738366](/Users/huanglongzhan/Library/Application Support/typora-user-images/image-20210829175738366.png)





##### 查看当前选中元素

![image-20210828183343839](/Users/huanglongzhan/Library/Application Support/typora-user-images/image-20210828183343839.png)

选中某个元素后，后面会有一个$0，在控制台使用$0可以打印出该元素

![image-20210828183454750](/Users/huanglongzhan/Library/Application Support/typora-user-images/image-20210828183454750.png)





使用console.table打印对象更直观

![image-20210828184505077](/Users/huanglongzhan/Library/Application Support/typora-user-images/image-20210828184505077.png)



console.assert(expression,message)

```javascript
console.assert(0.1+0.2===0.3,'断言错误“0.1+0.2≠0.3”')
```



动态表达式live expression

##### 查看某段程序运行时间

![image-20210829180530134](/Users/huanglongzhan/Library/Application Support/typora-user-images/image-20210829180530134.png)

计时结果为console.time和console.timeEnd之间经历的时间





## 3、网络栏

勾选Preserve log让页面刷新或重定向时仍能在面板保留网络请求信息，也可以方便地去比较两个请求的区别。

勾选Disable cache来禁用缓存

Hide Data Urls通常用来过滤base64图片

XHR筛选，用来调试接口

如果不是为了查看页面性能，将Show overview勾掉。

勾选Use large request rows可以在面板展示请求的更多信息

勾选Capture screenshots，可以捕获页面加载的快照

![image-20210828185404899](/Users/huanglongzhan/Library/Application Support/typora-user-images/image-20210828185404899.png)



搜索框除了对请求名称的搜索

还支持请求方法、网络状态码、url的搜索

![image-20210828190200880](/Users/huanglongzhan/Library/Application Support/typora-user-images/image-20210828190200880.png)

![image-20210828185957885](/Users/huanglongzhan/Library/Application Support/typora-user-images/image-20210828185957885.png)

![image-20210828190037605](/Users/huanglongzhan/Library/Application Support/typora-user-images/image-20210828190037605.png)





#### 4、执行命令

command+shift+p

整个页面捕获 Capature Screenshot，或捕获选中元素"node"



让devtools改变停靠位置

Dock to

Undock



#### 5、移动端调试

添加设备，或自定义设备

![image-20210829170157187](/Users/huanglongzhan/Library/Application Support/typora-user-images/image-20210829170157187.png)





#### 6、sources面板

sources对页面加载的所有资源进行汇总。

并根据不同域名进行分类，同一域名下资源又根据文件目录划分。



command+p可以搜索文件

如果需要对代码内容进行全局搜索，可以使用More-tools---search进行搜索

![image-20210829201431408](/Users/huanglongzhan/Library/Application Support/typora-user-images/image-20210829201431408.png)







#### 7、More-tools-sensor

#### 模拟定位

![image-20210829204857867](/Users/huanglongzhan/Library/Application Support/typora-user-images/image-20210829204857867.png)

#### 模拟传感器信息 





####  8、application面板

一键清空本地存储资源

查看本地存储及编辑





#### 9、Lighthouse面板

以前的audit面板，类似于页面跑分，从网站性能、用户体验的角度检测出页面的待优化点，并给出优化建议



identify and fix common problem that affect your site's performance, accessibility and user experience

识别并修复影响网站性能、可访问性和用户体验的常见问题



清除缓存，模拟弱网环境

下载评分报告

新建audit



选择需进行audit的项目

Performance:页面加载分析

Progressive Web App：页面是否满足pwa的标准

Best practice：页面是否符合现代web开发的最佳实践

Accessibility：残障人士是否可使用此网页

SEO：页面为了搜索引擎排名而优化的情况