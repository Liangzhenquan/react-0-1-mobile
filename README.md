## 背景

根据之前搭建的 react 项目经验，本次搭建计划完善之前的不足支出

## 描述

### node 相关

**process.cwd()**
用于获取 Node.js 进程的当前工作目录。
**fs.realpathSync(path[,options])**
返回已解析的路径名。

### webpack 相关配置

**resolve.alias --config/webpack.common.js**
@： 设置文件路径别名
extensions: [.js, jsx] 设置文件扩展名 --如 import ComA from '@/ComA' ，可不写.js 或者.jsx 扩展名

### jsconfig.json 文件

告诉编辑器，@代表的目录是工程目录的 src 目录，配置后，当我们 import 的时候，用@符号配合路径提示插件，出现提示信息

### .editorconfig

不同开发者、不同电脑的编辑器，会有不同的编程缩进习惯，配置.editorconfig,来统一编辑器的配置

## eslint 相关配置

**1.安装**

- vscode 安装 eslint 插件
- 项目安装 eslint
- 项目安装 eslint-loader
- 项目安装 eslint-plugin-react

vscode 安装 eslint 插件是要编辑器内根据错误、警告提示波浪线
项目安装 eslint，ESLint 扩展将使用本地安装在工作区文件夹中的 ESLint 库，
项目安装 babel-eslint，eslint 的解析器
项目安装 eslint-loader，运行项目时，控制台根据 eslint 规则打印警告或错误
项目安装 eslint-plugin-react，检查 reat 的语法

### .elsintrc

```js
  "settings": {
    "react": {
      "version": "detect"
    }
  },
  // "parser": "babel-eslint",   //解析器
  "env": {   //告诉eslint环境，eslint不会检查一下window，document等变量的错误或警告
    "es6": true,
    "browser": true,
    "node": true
  },
  "parserOptions": {
    "ecmaVersion": 11,
    "ecmaFeatures": {
      "jsx": true
    },
    "sourceType": "module"
  },
  "extends": ["eslint:recommended", "plugin:react/recommended"],
  "rules": {
    "eqeqeq": 2, //必须使用全等
    "no-var": 2 //禁止使用var声明
  }
```

### .eslintignore

告诉 eslint，检查代码的时候，那些文件和目录无需检查
