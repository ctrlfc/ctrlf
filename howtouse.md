## Meta 标签

**Doctype**: 声明 HTML5, 需要写在顶部。

```html
<!-- Doctype HTML5 -->
<!doctype html>
```

**charset( 字符类型 )**: 正确声明 `charset` meta(UTF-8)。

```html
<!-- 设置文档的字符编码 -->
<meta charset="utf-8">
```

**Viewport( 视口 )**: 正确声明 `viewport` meta。

```html
<!-- 响应式网页设计viewpoint声明 -->
<meta name="viewport" content="width=device-width, initial-scale=1">
```

**Title( 标题 )**:所有页面都使用 title(SEO:google 会计算标题中使用的字符的像素宽度,范围在 472 和 482 之间,所以平均字符数限制大约在 55 个字符左右)。

```html
<!-- 文档标题 -->
<title>网站标题不超过55个字符</title>
```

**Description(描述)**:提供`description`标签,它是唯一的同事内容不能超过 150 个字符。

```html
<!-- Meta Description -->
<meta name="description" content="Description of the page less than 150 characters">
```

## HTML 标签

**Language tag(语言标签)**: 指定你的网站的语言标签并与当前页面语言相关联。

```html
<html lang="zh_cn">
```

**CSS order(加载顺序)**：所有 CSS 文件都需要在 Javascript 文件加载之前加载完成(除了有时 JS 文件异步加载到页面之外的情况)。

# HTML

## 最佳实践

**HTML5 Semantic Elements(HTML5 语义化元素)**:正确的使用 HTML5 语义化标签(header,section,footer,main...)。

**Error pages(错误页面)**:404 页面和 5xx 错误的存在.5xx 错误业面需要集成 css(在当前服务器上无外部调用)。

## HTML 测试

**W3C compliant(兼容)**:所有也页面需要使用 W3C 验证器进行测试,以检测 HTML 代码中的可能存在的问题。

**HTML Lint**:使用工具来帮助我们分析 HTML 代码中可能存在的问题。

**Desktop Browsers**:使用页面都在桌面端浏览器上通过测试(Safari, Firefox, Chrome, Internet Explorer, EDGE...)。

**Mobile Browsers**:所有页面都在移动端浏览器上通过测试(Native browser, Chrome, Safari...)。

**Link checker(链接检查器)**:页面中链接没有断开,请确认你有没有 404 错误。

**Pixel perfect**:页面的像素级实现。根据设计稿的质量,你的页面可能做不到 100%还原,但你的网页需要尽可能的看见设计稿。

## Webfonts

**Webfont format（字体格式）**: High 现代浏览器都支持 WOFF、WOFF2、TTF 格式

**Webfont size（字体大小）**: High Webfont 大小不超过 2 MB (包括所有版本在内)。

# CSS

**响应式网站设计**:网站使用响应式设计。

**唯一 ID**:如果使用了 ID,确保 ID 的唯一性。

**Reset CSS**:使用 CSS reset(如 reset.css,normalize.css,reboot)(如果你是用的是 CSS 框架,例如 Bootstrap 或 Foundation,则 reset css 已被包含在其中)。

**CSS embed or line**:避免使用 CSS 嵌入或内联,仅用于必要的情况(例如:background-image for slider, CSS critical)。

**浏览器内核前缀**:对部分属性加上浏览器内核前缀,生成你浏览器兼容的属性。

## 性能

**连接**:将 CSS 文件连接到一个文件中。 (不适用 HTTP/2)。
**压缩**:压缩所有 css 文件。

mhw no.1

