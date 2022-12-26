# 项目demo

执行以下命令，安装Taro版本为3.5.7
```
npm install -g @tarojs/cli
```
初始化项目

```
taro init myApp
```
[初始化](./init.png)

安装"taro-ui": "^3.1.0-beta.4"

### eslint
```
npm install eslint -D
```

```
npm i eslint-config-taro eslint-plugin-import eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-prettier -D
```

typescript 相关的插件

```
npm i typescript @typescript-eslint/eslint-plugin @typescript-eslint/parser -D
```
### stylelint
```
npm i stylelint  -D
```
### 辅助命令
```
//package.json

 "scripts": {
    "format": "prettier --write \"./src/**/*.{js,jsx,json}\"",
    "lint": "npm run eslint stylelint",
    "eslint": "eslint --fix --ext .js,.jsx src",
    "stylelint": "stylelint \"./src/**/*.{css,less,scss}\" --fix"
  },

```
###  commit代码检查

```
npm i husky -D
```

在package.json中添加prepare脚本，并执行一次

```
{ 
    "scripts": { 
            "prepare": "husky install" 
        } 
}

```

创建hook：
```
npx husky add .husky/pre-commit "npm test"
```

根目录会有名为pre-commit的shell脚本，并且有一条npm test的命令，修改npm test 为 npm run format && npm run eslint && npm run stylelint

