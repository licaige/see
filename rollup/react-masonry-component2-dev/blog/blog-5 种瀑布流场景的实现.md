# 5 种瀑布流场景的实现

![](https://img11.360buyimg.com/ling/jfs/t1/25090/17/19875/56529/6333ef73E850b7641/16d49a75e24b2d35.jpg.dpg)

## 一、背景

本文介绍 5 种瀑布流场景的实现，**大家可以根据自身的需求场景进行选择**。

5 种场景分别是：

| 瀑布流                           | 特点                                                                                                                                                                                   |
| -------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 纵向+高度排序                    | 纯 CSS 多列实现，是**最简单的瀑布流写法**                                                                                                                                              |
| 纵向+高度排序+根据宽度自适应列数 | 通过 JS 根据屏幕宽度计算列数，**在 web 端更加灵活的展示瀑布流**                                                                                                                        |
| 横向                             | 纯 CSS 弹性布局实现，是**最简单的横向瀑布流写法**                                                                                                                                      |
| 横向+高度排序                    | 横向+高度排序的瀑布流，需要通过 JS 计算每一列高度，损耗性能，但是**可以避免某列特别长的情况**，体验更好                                                                                |
| 横向+高度排序+根据宽度自适应列数 | 需要通过 JS 计算每一列高度，并根据屏幕宽度计算列数，损耗性能，但是**可以避免某列特别长的情况**，并且可以**在 web 端更加灵活的展示瀑布流**，体验更好，**是 5 种瀑布流中用户体验最好的** |

我已经将这 5 种场景的实现封装成 npm 包，npm 包地址：<https://www.npmjs.com/package/react-masonry-component2>，可以直接在 React 项目中安装使用。

## 二、介绍

瀑布流，是比较流行的一种网站[页面布局](https://baike.baidu.com/item/%E9%A1%B5%E9%9D%A2%E5%B8%83%E5%B1%80?fromModule=lemma_inlink)，视觉表现为参差不齐的多栏布局，随着页面[滚动条](https://baike.baidu.com/item/%E6%BB%9A%E5%8A%A8%E6%9D%A1/7166861?fromModule=lemma_inlink)向下滚动，这种布局还会不断加载[数据块](https://baike.baidu.com/item/%E6%95%B0%E6%8D%AE%E5%9D%97/107672?fromModule=lemma_inlink)并附加至当前尾部。

下图就是一个瀑布流布局的示意图：

![image.png](https://img14.360buyimg.com/ling/jfs/t1/161693/6/30813/1157955/6333fa7aE0662ec9b/f7f8773cfa68356b.png.webp)

## 三、纵向+高度排序

纵向+高度排序指的是，每列按照纵向排列，往高度最小的列添加内容，如下图所示。

![image.png](https://img11.360buyimg.com/ling/jfs/t1/209234/11/26537/1008860/6333fb3cE1abfad45/18feed5873e593dc.png.webp)

实现纵向+高度排序瀑布流的方法是 **CSS 多列布局**。

### 1. 多列布局介绍

[多列布局](https://www.runoob.com/css3/css3-multiple-columns.html)指的是 CSS3 可以将文本内容设计成像报纸一样的多列布局，如下实例:

![image.png](https://img10.360buyimg.com/ling/jfs/t1/15026/12/19451/28528/6333fbb3E71a05387/5ac5ea15409278fd.png.webp)

CSS3 的多列属性:

- `column-count`：指定了需要分割的列数；
- `column-gap`：指定了列与列间的间隙；
- `column-rule-style`：指定了列与列间的边框样式；
- `column-rule-width`：指定了两列的边框厚度；
- `column-rule-color`：指定了两列的边框颜色；
- `column-rule`：是 column-rule-\* 所有属性的简写；
- `column-span`：指定元素跨越多少列；
- `column-width`：指定了列的宽度。

### 2. 实现思路

瀑布流实现思路如下：

- 通过 CSS `column-count` 分割内容为指定列；
- 通过 CSS `break-inside` 保证每个子元素渲染完再换行；

### 3. 实现代码

```css
.css-column {
  column-count: 4; //分为4列
}

.css-column div {
  break-inside: avoid; // 保证每个子元素渲染完在换行
}
```

### 4. 直接使用 npm 包

[npm - react-masonry-component2](https://www.npmjs.com/package/react-masonry-component2) 的使用方法：

```tsx
import { Masonry } from "react-masonry-component2";

export const MyComponent = (args) => {
  return (
    <Masonry direction="column">
      <div></div>
      <div></div>
      <div></div>
    </Masonry>
  );
};
```

在线预览：<https://632339a3ed0b247d36b0fa3c-njrsmzdcdj.chromatic.com/?path=/story/%E5%B8%83%E5%B1%80-masonry-%E7%80%91%E5%B8%83%E6%B5%81--%E7%BA%B5%E5%90%91%E5%B8%83%E5%B1%80>

## 四、纵向+高度排序+根据宽度自适应列数

在纵向+高度排序的基础上，按照宽度自适应列数。

![image.png](https://img11.360buyimg.com/ling/jfs/t1/92812/22/32791/1328755/6333fbebEbc74c8fc/4998ef2c5ffeae0a.png.webp)

### 1. 实现思路

- 监听 resize 方法，根据屏幕宽度得到该宽度下应该展示的列数

### 2. 实现代码

```ts
import { useCallback, useEffect, useMemo, useState } from "react";

import { DEFAULT_COLUMNS_COUNT } from "../const";

export const useHasMounted = () => {
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);
  return hasMounted;
};

export const useWindowWidth = () => {
  const hasMounted = useHasMounted();
  const [width, setWidth] = useState(0);

  const handleResize = useCallback(() => {
    if (!hasMounted) return;
    setWidth(window.innerWidth);
  }, [hasMounted]);

  useEffect(() => {
    if (hasMounted) {
      window.addEventListener("resize", handleResize);
      handleResize();
      return () => window.removeEventListener("resize", handleResize);
    }
  }, [hasMounted, handleResize]);

  return width;
};

export const useColumnCount = (columnsCountBreakPoints: {
  [props: number]: number;
}) => {
  const windowWidth = useWindowWidth();
  const columnCount = useMemo(() => {
    const breakPoints = (
      Object.keys(columnsCountBreakPoints as any) as unknown as number[]
    ).sort((a: number, b: number) => a - b);
    let count =
      breakPoints.length > 0
        ? columnsCountBreakPoints![breakPoints[0]]
        : DEFAULT_COLUMNS_COUNT;

    breakPoints.forEach((breakPoint) => {
      if (breakPoint < windowWidth) {
        count = columnsCountBreakPoints![breakPoint];
      }
    });

    return count;
  }, [windowWidth, columnsCountBreakPoints]);

  return columnCount;
};
```

动态定义 `style columnCount`，实现根据屏幕宽度自适应列数：

```tsx
const { columnsCountBreakPoints } = props;
const columnCount = useColumnCount(columnsCountBreakPoints);
return (
  <div className={classNames(["masonry-column-wrap"])} style={{ columnCount }}>
    {children}
  </div>
);
```

### 3. 直接使用 npm 包

[npm - react-masonry-component2](https://www.npmjs.com/package/react-masonry-component2) 的使用方法：

```tsx
import { Masonry } from "react-masonry-component2";

export const MyComponent = (args) => {
  return (
    <Masonry
      direction="column"
      columnsCountBreakPoints={{
        1400: 5,
        1000: 4,
        700: 3,
      }}
    >
      <div></div>
      <div></div>
      <div></div>
    </Masonry>
  );
};
```

在线预览：<https://632339a3ed0b247d36b0fa3c-njrsmzdcdj.chromatic.com/?path=/story/%E5%B8%83%E5%B1%80-masonry-%E7%80%91%E5%B8%83%E6%B5%81--%E7%BA%B5%E5%90%91%E5%B8%83%E5%B1%80>

## 五、横向

横向瀑布流指的是，每列按照横向排列，如下图所示。

![image.png](https://img12.360buyimg.com/ling/jfs/t1/39433/29/19425/1436425/6333fc3cE7bbb04e0/578cac089a713df8.png.webp)

实现横向瀑布流的方法是**CSS 弹性布局**。

### 1. 弹性布局介绍

弹性布局，是一种当页面需要适应不同的屏幕大小以及设备类型时确保元素拥有恰当的行为的布局方式。

引入弹性盒布局模型的目的是提供一种更加有效的方式来对一个容器中的子元素进行排列、对齐和分配空白空间。

CSS3 的弹性布局属性：

- `flex-dicreation`：指定了弹性子元素的排列方式；
- `justify-content`：指定了弹性布局的主轴对齐方式；
- `align-items`：指定了弹性布局的侧轴对齐方式；
- `flex-wrap`：指定了弹性子元素的换行方式；
- `align-content`：指定弹性布局各行的对齐方式；
- `order`：指定弹性子元素的排列顺序；
- `align-self`：指定弹性子元素的纵向对齐方式；
- `flex`  属性用于指定弹性子元素如何分配空间；
  - `auto`: 计算值为 1 1 auto
  - `initial`: 计算值为 0 1 auto
  - `none`：计算值为 0 0 auto
  - `inherit`：从父元素继承
  - `[ flex-grow ]`：定义弹性盒子元素的扩展比率。
  - `[ flex-shrink ]`：定义弹性盒子元素的收缩比率。
  - `[ flex-basis ]`：定义弹性盒子元素的默认基准值。

### 2. 实现思路

瀑布流实现思路如下：

- CSS 弹性布局对 4 列按横向排列，对每一列内部按纵向排列。

### 3. 实现代码

瀑布流实现代码如下：

```tsx
<div className={classNames(["masonry-flex-wrap"])}>
  <div className="masonry-flex-wrap-column">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
  <div className="masonry-flex-wrap-column">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
</div>
```

```css
.masonry-flex-wrap {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: stretch;

  &-column {
    display: "flex";
    flex-direction: "column";
    justify-content: "flex-start";
    align-content: "stretch";
    flex: 1;
  }
}
```

### 4. 直接使用 npm 包

[npm - react-masonry-component2](https://www.npmjs.com/package/react-masonry-component2) 的使用方法：

```tsx
import { Masonry } from "react-masonry-component2";

export const MyComponent = (args) => {
  return (
    <Masonry
      columnsCountBreakPoints={{
        1400: 5,
        1000: 4,
        700: 3,
      }}
    >
      <div></div>
      <div></div>
      <div></div>
    </Masonry>
  );
};
```

在线预览：<https://632339a3ed0b247d36b0fa3c-njrsmzdcdj.chromatic.com/?path=/story/%E5%B8%83%E5%B1%80-masonry-%E7%80%91%E5%B8%83%E6%B5%81--%E6%A8%AA%E5%90%91%E5%B8%83%E5%B1%80>

## 六、横向+高度排序

横向+高度排序指的是，每列按照横向排列，往高度最小的列添加内容，如下图所示。

![image.png](https://img12.360buyimg.com/ling/jfs/t1/112397/12/29950/1432589/6333fc6cEf1cd3d81/36458bf7c8fe0836.png.webp)

高度排序就需要用 JS 逻辑来做了。

### 1. 实现思路

- JS 将瀑布流的列表按高度均为分为指定列数，比如瀑布流为 4 列，那么就要把瀑布流列表分成 4 个列表

### 2. 实现代码

```ts
export const getColumnsSortWithHeight = (
  children: React.ReactNode,
  columnCount: number
) => {
  const columns: {
    height: number;
    children: React.ReactNode[];
  }[] = Array.from({ length: columnCount }, () => ({
    height: 0,
    children: [],
  }));

  React.Children.forEach(children, (child: React.ReactNode, index) => {
    if (child && React.isValidElement(child)) {
      if (index < columns.length) {
        columns[index % columnCount].children.push(child);
        columns[index % columnCount].height += child.props.height;
        return;
      }

      const minHeightColumn = minBy(columns, (a) => a.height) as {
        height: number;
        children: React.ReactNode[];
      };
      minHeightColumn.children.push(child);
      minHeightColumn.height += child.props.height;
    }
  });

  return columns;
};
```

### 3. 直接使用 npm 包

[npm - react-masonry-component2](https://www.npmjs.com/package/react-masonry-component2) 的使用方法：

```tsx
import { Masonry, MasonryItem } from "react-masonry-component2";

export const MyComponent = (args) => {
  return (
    <Masonry
      sortWithHeight
      columnsCountBreakPoints={{
        1400: 5,
        1000: 4,
        700: 3,
      }}
    >
      <MasonryItem height={200}>
        <div></div>
      </MasonryItem>
      <MasonryItem height={300}>
        <div></div>
      </MasonryItem>
      <MasonryItem height={400}>
        <div></div>
      </MasonryItem>
    </Masonry>
  );
};
```

在线预览：<https://632339a3ed0b247d36b0fa3c-njrsmzdcdj.chromatic.com/?path=/story/%E5%B8%83%E5%B1%80-masonry-%E7%80%91%E5%B8%83%E6%B5%81--%E6%A8%AA%E5%90%91%E5%B8%83%E5%B1%80%E9%AB%98%E5%BA%A6%E6%8E%92%E5%BA%8F>

## 七、横向+高度排序+根据宽度自适应列数

根据宽度自适应列数的做法和纵向场景一致，都是监听 resize 方法，根据屏幕宽度得到该宽度下应该展示的列数，这里不做赘述。

![image.png](https://img30.360buyimg.com/ling/jfs/t1/171490/13/30441/1444219/6333fca8E7308e214/ac27773be9d8e353.png.webp)

### 1. 直接使用 npm 包

[npm - react-masonry-component2](https://www.npmjs.com/package/react-masonry-component2) 的使用方法：

```tsx
import { Masonry } from "react-masonry-component2";

export const MyComponent = (args) => {
  return (
    <Masonry
      sortWithHeight
      direction="column"
      columnsCountBreakPoints={{
        1400: 5,
        1000: 4,
        700: 3,
      }}
    >
      <div></div>
      <div></div>
      <div></div>
    </Masonry>
  );
};
```

在线预览：<https://632339a3ed0b247d36b0fa3c-njrsmzdcdj.chromatic.com/?path=/story/%E5%B8%83%E5%B1%80-masonry-%E7%80%91%E5%B8%83%E6%B5%81--%E6%A8%AA%E5%90%91%E5%B8%83%E5%B1%80%E9%AB%98%E5%BA%A6%E6%8E%92%E5%BA%8F>

## 小结

本文介绍了 5 种瀑布流场景的实现：

- 纵向+高度排序
- 纵向+高度排序+根据宽度自适应列数
- 横向
- 横向+高度排序
- 横向+高度排序+根据宽度自适应列数

感兴趣的同学可以到[项目源码](https://github.com/jiaozitang/react-masonry-component2)查看完整实现代码。

也可以下载 <https://www.npmjs.com/package/react-masonry-component2> 直接使用。

## 更多思考

当瀑布流数据特别多时，dom 节点过多，会影响到页面性能，那么就需要为瀑布流添加滚动预加载和节点回收功能来进行优化了，在下个版本中将更新滚动预加载和节点回收功能的实现原理。
