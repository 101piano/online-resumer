# online-resumer

>## 初始化项目
使用vue-cli工具，vue-cli用到了webpack</br>
```
> mkdir online-resumer</br>
> cd online-resumer</br>
> npm init #可以生成package.json

```

全局安装vue-cli,并初始化一个vue项目</br>

```
> npm install -g vue-cli
> npm init webpack .

? Generate project in current directory? Yes
  This will install Vue 2.x version of the template.

  For Vue 1.x use: vue init webpack#1.0

? Project name resumer
? Project description A Vue.js project
? Author frankfang <frankfang1990@gmail.com>
? Vue build standalone
? Install vue-router? Yes
? Use ESLint to lint your code? Yes
? Pick an ESLint preset Standard
? Setup unit tests with Karma + Mocha? Yes
? Setup e2e tests with Nightwatch? No

   vue-cli · Generated "online-resumer".
 
 > npm i 
 > npm run dev  //浏览器自动弹出
```
## 开始</br>
### 遇到小问题</br>
##### 1、当ESLint插件认为代码不符合规范时</br>
1.按照要求来</br>
2.禁用ESLint</br>
在build/webpack.base.conf.js里，rules里注释关于eslint-loader的代码</br>
##### 2、上传到github时</br>
首先，将config/index.js中的build的assetsPulicPath改为'/online-resumer/dist'</br>
其次，运行
```
npm run build //生成dist文件，需要将dist文件上传到github，不然依旧无法预览
```
最后，预览链接： https://101piano.github.io/online-resumer/dist/index.html </br>
或者https://101piano.github.io/online-resumer/dist/ </br>

### 使用sass</br> 
命令行：</br>
```
export SASS_BINARY_SITE="https://npm.taobao.org/mirrors/node-sass"
npm install --save  sass-loader node-sass
```
使用：</br>
```
<style lang="scss"></style>
```
### 使用svg</br>

### 使用vuex</br>

### 使用object-path</br>
* 目的</br>
```
Access deep properties using a path</br>
使用路径访问深度属性</br>
```
* 安装</br>
```
npm install object-path --save
```
* 用法</br>
```
ar obj = {
  a: {
    b: "d",
    c: ["e","f"]
  }
}
var objectPath = require("object-path")

objectPath.get(obj,"a.b")//"d"

objectPath.set(obj,"a.h","m")
objectPath.get(obj,"a.h")//"m"
```
其他用法暂时不写</br>

### 使用vue-i18n</br>
安装最新版本会报错，5.0.3就可以了
```
npm install vue-i18n@5.0.3 --save
```
### 使用source-map</br>
在build/webpack.dev.conf.js
```
- devtool: '#cheap-module-eval-source-map',
+ devtool: '#source-map'
```
### 使用vue-router</br>
安装：</br>
```
npm i -S vue-router
```

