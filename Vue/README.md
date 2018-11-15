### Node.js安装
> 1. 下载 [链接](https://npm.taobao.org/mirrors/node/v10.13.0/node-v10.13.0-win-x64.zip)
> 2. 在安装目录中新建两个文件夹 node-cache 和 node-global
> 3. 在系统环境变量中设置**NODE_HOME**为"D:\Program Files\nodejs",在**Path**中新增"%NODE_HOME%\node-global"和"%NODE_HOME%"
> 4. 设置npm属性
  - npm config set prefix "D:\Program Files\nodejs\node-cache"
  - npm config set prefix "D:\Program Files\nodejs\node-global"
  - npm config set registry http://registry.npm.taobao.org/
> 5. 设置全局依赖
  - npm install -g live-server
  - npm install -g vue
  - npm install -g vue-cli
  - npm install -g bootstrap --save || npm install -g bootstrap@3 --save 安装
  - npm install -g cnpm --registry=https://registry.npm.taobao.org
  - npm uninstall -g bootstrap --save 卸载
> 6. 开始构建项目
# 创建一个基于webpack模板的新项目
$ vue init webpack my-project
# 安装依赖，
$ cd my-project
$ npm run dev
