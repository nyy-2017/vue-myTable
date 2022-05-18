const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    host: 'localhost',            // 启动时使⽤的域名
    port: 8080,                 // 指定端⼝号 
  }
})