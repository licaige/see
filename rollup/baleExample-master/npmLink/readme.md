# 这是一个npm link 使用样例
* 用来解决发布新版公共包前进行新代码测试
## packet 是一个公共库
* `cd packet`
* `npm link` 这会使packet整个包链接到全局的node安装环境里面


## instance 是一个业务包
* `cd instance`
* `npm install`
* `npm link packet` 建立与全局node安装环境里面的packet包的链接, 这样在引用packet包的时候，在项目的node_modules因为建立了packet包的链接，所以可以直接引用。
* `node index.js`
* 之后packet发生更新重新执行`node index.js`即可


## 最后
* `cd packet`
* `npm unlink` // 取消软连接
* 测试成功，打包packet,发包即可
