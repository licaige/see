node --max-old-space-size=4096给node开启大内存 避免打包时内存不够
node_modules/rollup/dist/bin/rollup -c直接用本地安装的rollup，避免部署时某个服务器没有全局安装rollup
dev 模式开启 -w 监听文件动态打包
BUILD:development 配置环境变量 代码里从process.env.BUILD取到

