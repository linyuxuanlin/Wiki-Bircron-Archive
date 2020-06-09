Title: HTML 学习笔记

Date: 2017-7-12

tags: html


学习笔记整理。

<!-- more -->



---

## 基本文档

```html
<!DOCTYPE html>
<html>
    <head>
    <meta charset="utf-8">
        <title>文章标题</title>
    </head>
    <body>
        <h1>大标题</h1>
        <p>正文</p>
    </body>
</html>
```



---
## 语句

规范：标签使用小写，元素必须闭合。
在开始标签中添加斜杠以关闭空元素。eg. `<br />`

### 标题

用 <h1> ~ <h6> 标签定义

```html
<h1>这是一个标题</h1>
```

### 段落

```html
<p>这是一个段落</p>
```

### 链接

```html
<a href="url">链接显示的文本</a>
```

### 图像

```html
<img src="/xx.png" width="258" height="39" />
<a href="url"><img src="/xx.png" width="258" height="39"></a>
```

### 换行

```html
<br />
```

### 分割线

```html
<hr>
```

### 注释

```html
<!注释>
<!-- 注释 -->
```

### 文本格式化

```html
<b>粗体</b>
<i>斜体</i>
<del>删除</del>
<q>块引用</q>
```

### 列表

```html
<!无序>
<ul>
    <li>第一项</li>
    <li>第二项</li>
</ul>

<!有序>
<ol>
    <li>第一项</li>
</ol>
```





---

## 参考与致谢
* [HTML 教程 | 菜鸟教程](http://www.runoob.com/html/html-tutorial.html)

---