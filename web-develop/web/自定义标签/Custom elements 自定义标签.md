# 自定义标签

## Web Components 中有一个非常重要的特性，可以通过 es5 代码轻松的实现自定义标签。

> facebook、google、netflix 等大厂都大面积的使用了 Web Components 技术来实现可重用的定制化元素。

实现自定义标签的方式有下面几种：

- Custom elements
- Shadow DOM
- HTML templates
- HTML Imports

> 我们要讲到的实现自定义标签方法是 Custom elements 和 HTML templates 技术，其中 Shadow DOM 还处在实验性阶段，目前最新版的 chrome/firefox 等浏览器的实验性功能默认都是开启的，所以不建议使用。另外 HTML Imports 的方式已经被弃用了，为什么会被弃用呢？我们下面会讲到。

## Custom elements

Custom elements 是最常用的自定义组件实现方案之一，语法如下：

```javascript
window.customElements.define('my-element', class extends HTMLElement {
  ...
});
```

我们来实现一个简单的带提示功能的文本框组件，提醒用户输入符合规则的邮件地址

```javascript
window.customElements.define('email-element', class extends HTMLElement {})
```

## Shadow DOM

## HTML templates

mdn 参考文档[custom elements](https://developer.mozilla.org/zh-CN/docs/Web/Web_Components/Using_custom_elements)
