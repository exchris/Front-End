# how to start vue project and dependencies

> first vue project

# Build Setup

```bash
# install dependencies
npm install

# serve with hot reload at localhost:8081
npm run dev

# build for production with minificatoin
npm run build

# build for production and view the bundle analyzer report
npm run build --report 
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

```bash
# global install vue-cli
npm install --global vue-cli

# create a project base of webpack
vue init webpack my-project

# install dependencies, go run
cd my-project
npm install
npm run dev
```

```bash
# install ElementUI
npm install --save element-ui / npm i element-ui -S

# 在main.js中写入以下内容
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
Vue.use(ElementUI)

# install vue-clipboard2 by copy
npm install --save vue-clipboard2

# add content in main.js
import VueClipboard from 'vue-clipboard2';
Vue.use(VueClipboard);
```