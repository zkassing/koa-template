## 1. 安装
```cmd
npm install 

或者使用

yarn
```

## 2. 运行
```
// 开发环境
npm run dev

// 生产环境
npm start
```

## 文件结构
```
config
  db.js // 数据库配置
routes
  demo.js // demo路由配置，可以在里面配置多个路由，其他分类路由可新建文件配置
controller
  demoController.js // 当访问demo时执行的函数
services
  demoService.js // 在这里进行对查询的数据库的操作
models
  demoModel.js // 在这里进行数据库查询
scripts
  query.js // 这个是链接数据库的配置
```

## 配置内容

配置顺序

`router -> controller -> service -> model -> query`
1. router中获取到参数传递给controller
```
url params参数 ctx.params.xxx
url query参数 ctx.query.xxx
url post请求参数 ctx.body.xxx
```
2. controller接收到参数后传递给service
3. service接收到参数后传递给model
4. model根据参数进行数据查询

查询数据后
1. model中调用query并获取到查询的数据
2. service中调用model并对model数据进行处理（如果不需要处理则直接返回即可）
3. controller中调用service获得处理后的数据，然后将数据返回到前台

