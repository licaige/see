// rollup.config.js
// import json from 'rollup-plugin-json';
import json from 'rollup-plugin-json';
export default {
    // input: 'src/main.js', // 打包入口文件
    input:'src/main.js',
    // output: {
    //     file: 'bundle.js',  // 打包输出文件
    //     format: 'cjs' // es/umd 也可，相当于配置命令行打包方式中的format，需要了解 JS 模块化知识
    // },
    output:{
        file:'bundle.js',
        format:'cjs'
    },
    // plugins: [ json() ] // 丰富的插件，自行配置
    plugins:[
        json()
    ]
};
