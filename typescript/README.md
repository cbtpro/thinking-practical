# Typescript

## 安装typescript支持

可以通过两种方式安装typescript支持，npm和visual studio插件。

### npm安装方式

<code>
npm install -g typescript
</code>

编写一个简单的ts文件

```typescript
// helloworld.ts
function sayhello(name: string) {
    return `Hello, ${name}`;
}

document.body.innerHTML = sayhello('peter');
```

编译这段代码
```shell
tsc helloworld.ts
```

会在同级目录下生成一个helloworld.js

我们还可以定义输出的文件名

```shell
tsc --outFile main.js helloworld.ts
```

并且可以将多个文件合并为一个文件
```shell
tsc --outFile main.js helloworld.ts farewell.ts
```

可以更改输出目录
```shell
tsc --outDir ../ helloworld.ts
```

使用严格模式编译ts
```shell
tsc --alwaysStrict true helloworld.ts
```

更多参数请查阅 [编译选项](https://www.tslang.cn/docs/handbook/compiler-options.html)

## 类型注解

JavaScript是弱类型语言，变量在定义的时候并不知道具体是什么类型，在运行的时候才知道是什么类型。类型注解通过为函数或者变量添加约束，在编写代码的时候就设计了变量类型，增加代码可读性。

```javascript
// 函数sayhello接收一个字符串类型的参数
function sayhello(name: string) {
    return `Hello, ${name}`;
}
// 函数goodbye返回一个字符串类型的结果
function goodbye(name: string): string {
    return `goodby ${name}`
}
```

以上代码编译成普通的JavaScript代码

```javascript
function sayhello(name) {
    return "Hello, " + name;
}
function goodbye(name) {
    return "Goodbye " + name;
}
```
可以看到编译后的结果并不包含typescript语法

### 其他类型注解
- number
- boolean
- Array
- Tuple 元祖
- enum
- void
- null和undefined
- never
- object
- any 泛型

## 类型断言
所谓断言，就是极力声明。在编写代码的时候明确的知道这个字段的类型是具体的、确切的类型。就可以使用断言告诉编译器，我已经做了类型检查。

```javascript
let width: any = '90%'
let unit = (width as String).substring(width.length - 1);
// 也可以是使用<>的方式来实现断言
// let unit = (<string>width).substring(width.length - 1);
```
>这里要注意，两种形式是一致的，在ts文件中都可以使用，但是由于jsx文件<、>符号是关键性的符号，jsx文件中只允许as语法来实现断言

