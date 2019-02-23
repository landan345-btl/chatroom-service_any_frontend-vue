## 预先安装步骤
[1]. 步骤一，Windows or MAC 中下载 git 并安装
``` OS
略
```
---------------------------------------

[2]. 步骤二，安装 nodejs
```shell
略
```
---------------------------------------

[3]. 步骤三，安装 yarn
```shell
略
```
---------------------------------------

## 本地开发环境首次安装步骤

[1]. 步骤一，使用 git clone 下载此仓库代码
```shell
略
```
---------------------------------------

[2]. 步骤二，到 项目目录 以 yarn 安装需要的 npm 套件，虚拟机请加上 --no-bin-links
```OS
yarn                # Windows 使用 或 生产环境 Linux 使用
yarn --no-bin-links # Windows 使用 或 生产环境 Linux 使用 或 VM 使用 
```
---------------------------------------

[3]. 步骤三，到 任意，全域安装 vue-cli
```OS
sudo yarn global add typescript

```
---------------------------------------

[4]. 步骤四，到 项目目录 开发模式启动 vue dev server
```OS
yarn run serve
```
---------------------------------------

## 共同开发环境。测试环境。生产环境 首次安装步骤

[1]. 步骤一，使用 git clone 下载此仓库代码
```shell
略
```
---------------------------------------

[2]. 步骤二，到 项目目录 以 yarn 安装需要的 npm 套件，虚拟机请加上 --no-bin-links
```OS
yarn                # Windows 使用 或 生产环境 Linux 使用
yarn --no-bin-links # Windows 使用 或 生产环境 Linux 使用 或 VM 使用 
```
---------------------------------------

[3]. 步骤三，到 任意，全域安装 vue-cli
```OS
sudo yarn global add typescript

```
---------------------------------------

[4]. 步骤四，到 项目目录 打包 vue, sccs, typescript 为 html, css, javascript 静态资源
```OS
yarn run build
```
---------------------------------------

[5]. 步骤五，安装 nginx
```OS
略
```
---------------------------------------

[6]. 步骤六，配置 Nginx, root 指向 landan-www_frontend-vue/dist
```OS
略
```
---------------------------------------

## 注意事项

[*]. 注意，从 API 来的数据 统一 存到 vuex 的 store 里面
```OS
略
```
---------------------------------------

[*]. 注意，Vue 前端才用的数据 借由 $root , 统一传到 父组件 里面
```OS
略
```
---------------------------------------

[*]. 注意，匈牙利命名
```OS
m: Mixed,
i: Int,
f: Float,
s: String,
d: Date,
t: Time,
a: Array,
o: Object,
c: callable,
p: Promise

```
---------------------------------------

# landan-www_frontend-vue

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Run your end-to-end tests
```
yarn run test:e2e
```

### Run your unit tests
```
yarn run test:unit
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
