WechatDebug
===========

微信接口本地调试工具，是一个方便微信公共平台开发者进行本地开发的调试工具。部分的代码来自[微擎](http://www.we7.cc/)的调试工具，对此表示感谢。
##使用方法
运行`WechatDebug/index/index.html`文件，并在配置项中配置你的接口路径，以及发送者账号，接收者账号。
![image](https://github.com/blue7wings/WechatDebug/raw/master/img/2014-09-09 19:20:06 的屏幕截图.png)
##注意事项
显示错误和调试依赖于xdebug，请安装xdebug，不然不会显示错误和调试信息。
##主要功能
### 接收返回的文本消息，单图文消息，多图文消息。
![image](https://github.com/blue7wings/WechatDebug/raw/master/img/2014-09-09 19:35:38 的屏幕截图.png)
### 显示返回的xml，出现错误会显示错误信息或者调试信息。

**正确返回xml**

![image](https://github.com/blue7wings/WechatDebug/raw/master/img/2014-09-09 19:37:46 的屏幕截图.png)

**出现错误**

![image](https://github.com/blue7wings/WechatDebug/raw/master/img/2014-09-09 19:39:24 的屏幕截图.png)

**使用`var_dump()`进行调试**

![image](https://github.com/blue7wings/WechatDebug/raw/master/img/2014-09-09 19:42:00 的屏幕截图.png)

##TODO

增加对图片，位置，等其他事件的支持。

对话添加到对话列表，滑动条自动滚动到最底下。

##版本更新
2014-9-9 增加对单图文和多图文回复的支持

