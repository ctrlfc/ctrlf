# 准备

## 首先:需要有一个现代的浏览器

本书使用的是 JavaScript 语言最新版本 . 也就是说 , 你需要一个浏览器能运行用 ES2015 (ES6) 语言规范所写的代码 .

**浏览器** 是用来访问网页和使用 web 应用程序必不可少的软件 . 你可以先到 [我是谁](http://whatbrowser.org) 查看正在使用的是什么浏览器,以作为参考来决定是否升级它.不过在此之前还需要在 [兼容表](https://kangax.github.io/compat-table/es6/) 了解那些支持 ES2015 的浏览器 .

当然最便捷的办法是选择 Google chrome 浏览器或者 Mozilla Firefox 浏览器 , 这两款 "经久不衰"(保持更新) 的浏览器在其新版本中对于 ES2015 都有着优秀的支持 . 其他支持度还不错的浏览器还有 Opera 和 Microsoft Edge ( Windows 10 默认的浏览器 ) . 但是 , 所有的 Internet Explorer 对于 ES2015 支持都不佳 , 我们要做的是 : 远离他们 .

## 编码环境的解决方案 A: 在线编码

也许你是那种不耐烦的性格 , 又或者你认为安装到本地不是一个好的选择 . 不过幸运的是 , JavaScript 的优点是它几乎可以在任何浏览器上运行 . 所以你现在只需要一个已连接的 Internet 网络而已.

在线编码是一个 **JavaScript平台** , 一个在线服务平台 , 你可以在其中输入一些 JavaScript 代码,并立即看到结果 .

### 在1-23章使用 : CodePen

这些章节中 , 你需要一个能运行 HTML , CSS 和 JavaScript 的 **前端** 编码训练场.有极少数前端训练场是在线的.我个人最喜欢的 [CodePen](http://codepen.io) 就是其中之一,其他类似有 [JSFiddle](https://jsfiddle.net/) 和 [JS Bin](http://jsbin.com/) .

![The JSFiddle, CodePen and JS Bin logos](https://raw.githubusercontent.com/bpesquet/thejsway/master/manuscript/images/appendix01-01.png)

如果你选择使用 CodePen , 则 **有必要** 先看看 [欢迎来到CodePen](https://codepen.io/hello/) .它以非常友好的方式介绍该平台,并为您开始使用提供一切帮助 .

除此之外,有些非常实用的功能模块如: [自动补全](https://blog.codepen.io/documentation/editor/autocomplete/), [控制台](https://blog.codepen.io/documentation/editor/console/) , [自动保存](https://blog.codepen.io/documentation/editor/autosave/) , [快捷键](https://blog.codepen.io/documentation/editor/key-bindings/) 以及 [自动更新](https://blog.codepen.io/documentation/editor/auto-updating-previews/) .

小提示 : 我建议你在编码时启用自动保存和禁用自动更新.另外展开控制台可以看到代码产生的结果 .

你可以 新建Pen(不需要保存) 去尝试本书的每一个示例 , 也可以建立 完整的Project 保存下来以便于再次查找 .

> 由于性能问题,CodePen控制台并不能完全代替"真正的"浏览器控制台

### 在24章节之后使用 : Glitch

从24章开始 , 需要一个 **后端** 训练场来创建 Node.js 应用 . 这里有个非常好的选择 [Glitch](https://glitch.com) , 一个能够快速构建 Node 基础 Web 应用程序的平台 . Glitch 可以模拟本地 Node 设置并自动执行计划 , 包管理 , 托管和部署等操作 .
 
![The Glitch logo](https://raw.githubusercontent.com/bpesquet/thejsway/master/manuscript/images/appendix01-02.png)

你可以在 Glitch [这里](https://glitch.com/about/) 了解更多 , 以及通过一个混音项目 [这个项目](https://glitch.com/edit/#!/thejsway-starterapp) 知道如何开始 .

## 编码环境的解决方案 B: 构建本地开发环境


建立你的本地环境需要做些工作 , 但这将给你带来一个可定制和强大的编码环境.而且如果你需要离线工作 , 这是唯一的选择 .

请跟着下面这些步骤来帮你搭建一个编码环境 .

### 安装一个代码编辑器

事实上,编程是在多个文件中输入代码作为文本.在实际编程中 , 你需要在你的机器上使用 **代码编辑器** . 这是其中一些 :

* [Visual Studio Code](https://code.visualstudio.com/) (我正在使用的) .
* [Brackets](http://brackets.io/) .
* [Atom](https://atom.io/) .
* [Sublime Text](https://www.sublimetext.com/) .

### 安装 Node.js 和 npm

从24章开始 , **Node.js** 环境是必备的. **npm** 包管理器在Node安装时一起自动安装 . 

要在本机安装Node , 需要下载最新的版本 [这里](https://nodejs.org) , 执行下载文件并按照说明进行操作.

> 本书中的一些示例需要 Node 8 或 更高版本

检测 Node 是否装好的最简单方法是在终端/命令提示符下运行 `node --version` , 并检查是否返回版本字符串 .

```console
node --version
```

### 安装 代码格式化工具 和 语法校验工具

多年来 , 已经有许多工具来帮助缓解 JavaScript 开发人员的编程问题 . 特别是 , 任何
JavaScript 工程师都非常感兴趣的两种工具 :
* **代码格式化工具** 可以让你免除手动格式化代码的负担 , 并在多人开发时提高一致性 . [Prettier](https://github.com/prettier/prettier) 是目前的标准.
* **语法校验工具** 可以大大提高你的代码质量 , 检测错误并提示正确的做法. [ESLint](http://eslint.org) 是一个常见的选择 .

使用 ESLint 和 Prettier 最简单的方法是将它们作为 **插件** 添加到你的代码编辑器里.
对于VScode编辑器 , 可以使用以下链接 :

* [Prettier 插件](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode).
* [ESLint 插件](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint).

按照文档中提供的说明进行设置 .

> ESLint 配置在下一节讨论 .

### 整理你的代码

在开始编码之前构建基本文件夹和文件结构很重要 . 这样 , 你的项目将是有组织的 , 你也会从一个好的编程习惯开始 .

创建一个专门存放本书编码的文件夹 . 文件名名称无关紧要 , `thejsway-code` 就很不错 . 随后创建的所有本地文件应存放在此文件夹中的子文件夹内 , 最好的解决方案是为每一章创建一个子文件夹 .

你可以下载 [已经构建好的文件夹结构](https://raw.githubusercontent.com/bpesquet/thejsway/master/resources/code-skeleton.zip), 也可以按照下图来手动创建文件夹结构 .

#### 第 1 到 23 章

在这些章节中 , 你将在浏览器中执行JavaScript代码 . 你的文件将根据其类型进行存储 : HTML (扩展名为 .html) 文件放到 `html` 子文件中 , CSS (扩展名为 .css) 文件放到 `css` 子文件夹中 , JavaScript (扩展名为 ,js) 文件放到 `js` 子文件夹中 . 每一章都创建在这一系列文件夹中 , 如下所示 . 

![Folder structure for chapter 1](https://raw.githubusercontent.com/bpesquet/thejsway/master/manuscript/images/appendix01-03.png)

相关章节的示例和每个练习 , 请在章文件夹的 `html` 子文件夹中创建一个HTML文件 . 在这些 HTML 文件中 , 用 `<script>` 加载相关的 JavaScript 代码 .

```html
<!doctype html>
<html>

<head>
    <meta charset="utf-8">
    <title>Code examples</title>
</head>

<body>
    <!-- HTML code goes here -->

    <script src="../js/examples.js"></script>
</body>

</html>
```

这个 `<script>` 标签要求浏览器加载路径 `../js/examples.js` 的 `examples.js` JavaScript 文件 . 路径开始的两个点 (`..`) 表示你将在目录结构相对于 HTML 文件本身的上一级目录 , 查看 `js` 子文件夹中 名为 `examples.js` 的文件.

接下来 , 在浏览器中打开 HTML 文件 , 执行 `.js` 文件中的存储的 JavaScript 代码 . 其结果将显示在浏览器控制台中 (见下文) .

#### 24 章及以后

在这些章节中 : 你将创建 Node.js 应用来执行 JavaScript 代码 . 每个 Node 应用都必须放在其自己的文件夹中 , 并由此文件夹根目录下的 `package.json` 文件来定义 . 子文件夹可能有这些特定文件夹 :

* `node_modules` (自动创建) 存放外部依赖模块 .
* `public` 存放浏览器加载的客户端资源 , 如 CSS 和 JavaScript 文件 .
* `views` 存放 HTML 文件 .
* `modules` 存放内部模块 .

### 使用浏览器开发者工具

现代浏览器都会提供有助于Web开发的 **开发者工具** . 每个浏览器在提供哪些功能方面有所不同 , 但它们大致上是一样的 .

这些功能通常包括一个 **JavaScript控制台** (用于显示js输出和输入命令) , 一个 **页面结构检查器** (查看页面结构) 等等 !

![The Firefox JavaScript console](https://raw.githubusercontent.com/bpesquet/thejsway/master/manuscript/images/chapter12-01.png)

查看以下链接，了解有关浏览器开发者工具的更多信息：

* [Khan Academy - Inspecting HTML and CSS](https://www.khanacademy.org/computing/computer-programming/html-css/web-development-tools/a/using-the-browser-developer-tools).
* [OpenClassrooms - Optimize your website with DevTools](https://openclassrooms.com/courses/optimize-your-website-with-devtools).
* [Chrome DevTools Overview](https://developer.chrome.com/devtools).
* [Firefox Developer Tools](https://developer.mozilla.org/en-US/docs/Tools).

>原文地址 https://github.com/bpesquet/thejsway/blob/master/manuscript/appendix01.md