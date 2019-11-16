### cat-koa2
这是我个人开发常用的基于 koa2 的 mvc 后台模板，数据库用的是 mongodb，也可以用其他数据库，使用方式大同小异 ~
### 怎么使用
```
get clone git@github.com:GitHubJackson/cat-koa.git
cd cat-koa2
npm install
```
数据库要使用的话请记得先修改为自己的数据库！
### 目录结构
```
+ bin
  - www               // 启动文件
+ config              // 配置文件
+ controllers         // 控制层(C)，处理接口
+ models              // 数据层(M)，操作数据表
+ views               // 视图层(V)
+ routes              // 后端路由
+ schemas             // 数据表模型
+ utils               // 工具函数
- app.js              
- package.json
```

### 备注
会持续优化和更新，有问题或者建议欢迎提 issue ~
