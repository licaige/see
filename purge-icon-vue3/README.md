# 🚀 Purge-Icon-Vue3

> 🔥 该插件旨在能在项目中快速使用icon图标

### 一、插件的背景和目标
___
- 背景 - 工程中使用图标的场景很多。从最早的图片、雪碧图 -> 字体图标 -> Symbol雪碧图，许多的的UI组件库也提供了内置的图标库，在vue3流行后UI组件库都选择了把图标分离为单独的依赖库，让图标的引用很麻烦。iconify的出现让不同组件库的图标使用更简单了.


- 目标 - 实现iconify图标引用，实现本地svg图标引用，实现iconfont图标引用.


- 鸣谢 - 该插件实现参考vite-plugin-purge-icons和vite-plugin-svg-icons两个库，特别感谢


- 声明 - 该插件旨在减化自己工作中重复工作的工具，实现原理简单，自身能力有限，使用者勿喷，如果有好的想法和建议也可在issue中提出

### 二、插件的注册
___

Install:
```bash
$ npm install purge-icon-vue3
```

Use in main.ts for register plugin:
```javascript
createApp(App)
    .use(PurgeIconVue3)
    .mount('#app')
```

### 三、按插件使用(Purge-Icon-Vue3会自动注册一个PurgeIcon的全局组件)
___

1. 使用iconify图标:
```javascript
// xxx.vue 使用组件
<PurgeIcon icon="icon-park:subway" size="16" color="red" />
```

2. 使用iconfont图标: type指定iconfont
```javascript
// main.ts 适当的地方引入iconfont的字体图标文件
import './assets/iconfont/iconfont.css';

// xxx.vue 使用组件
<PurgeIcon type="iconfont" icon="icon-huocheditiezhantai" size="16" color="red" />
```

3. 使用svg图标: type指定svg
```javascript
/* 使用iconfont的Symbol集合 */

// main.ts 适当的地方引入iconfont的字体图标文件
import './assets/iconfont/iconfont.js';

// xxx.vue 使用组件
<PurgeIcon type="svg" icon="icon-huocheditiezhantai" size="16" />
```

```javascript
/* 使用本地svg文件 */

// vite.config.ts 使用插件自动加载本地的svg文件，示例使用的是vite插件，其它打包器需找到对应的插件
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
export default defineConfig({
    plugins: [
        createSvgIconsPlugin({
            iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
            symbolId: 'icon-[dir]-[name]'
        }),
    ]
})

// main.ts 引入注册代码
import 'virtual:svg-icons-register';

// xxx.vue 使用组件
<PurgeIcon type="svg" icon="icon-huocheditiezhantai" size="16" />
```

### 四、按组件使用
___
```javascript
// xxx.vue 使用组件
import { PurgeIcon, IconSvg, Iconfont, Iconify } from 'purge-icon-vue3';

<PurgeIcon type="svg" icon="icon-huocheditiezhantai" size="16" color="red" />
<IconSvg icon="icon-huocheditiezhantai" size="16" />
<Iconfont icon="icon-huocheditiezhantai" size="16" color="red" />
<Iconify icon="icon-huocheditiezhantai" size="16" color="red" />

// purge-icon-vue3可以导出四个组件
   PurgeIcon - 针对加载iconify图标, svg图标, iconfont图标
   IconSvg - 针对加载svg图标
   Iconfont - 针对加载iconfont图标
   Iconify - 针对加载iconify图标
```

### 五、组件支持选项
___
|  选项   | 含义  | 类型  |  默认值 |  可选 |
|  ----  | ----  | ----  | ----  | ----  |
| type  | 图标类型 | string  | iconify | iconify、svg、iconfont  |
| icon  | 图标引用 | string  | - | -  |
| size  | 图标大小 | number  | 16 | -  |
| color | 图标颜色 | string  | - | -  |
| spin | 图标旋转动画 | boolean  | false | true / false  |

```javascript
    1. svg图标不支持color选项
    2. icon选项参数说明，Iconify、Iconfont就是填写它的图标名，本地svg文件是`icon-${文件名}`
```
### 六、注意事项
___
```javascript
    1. iconify图标本库已经做处理, 不需要安装其它依赖库可以直接使用, 可在此处('https://icon-sets.iconify.design/')
       查找对应的图标即可
    2. iconfont图标需要使用者自己在外部引入图标依赖文件
    3. svg本地图标文件, 要用户自己使用插件生成引入, 详参'vite-plugin-svg-icons'插件,
       需要注意的是插件生成的symbolId是`icon-${文件名}`, 原因是为了和iconfont symbol图标保持一致
       
```
