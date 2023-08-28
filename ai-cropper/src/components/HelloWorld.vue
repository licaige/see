<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="wapper">
      <div class="test test1">
        <vueCropper
          ref="cropper"
          :img="option.img"
          :outputSize="option.size"
          :outputType="option.outputType"
          :info="true"
          :full="option.full"
          :canMove="option.canMove"
          :canMoveBox="option.canMoveBox"
          :fixedBox="option.fixedBox"
          :original="option.original"
          :autoCrop="option.autoCrop"
          :autoCropWidth="option.autoCropWidth"
          :autoCropHeight="option.autoCropHeight"
          :centerBox="option.centerBox"
          :high="option.high"
          :infoTrue="option.infoTrue"
          :maxImgSize="option.maxImgSize"
          @realTime="realTime"
          @imgLoad="imgLoad"
          @cropMoving="cropMoving"
          :enlarge="option.enlarge"
          :mode="option.mode"
        ></vueCropper>
      </div>
      <div>
        <button @click="changeScale(1)" class="btn">+</button>
        <button @click="changeScale(-1)" class="btn">-</button>
        <button @click="rotateLeft" class="btn">rotateLeft</button>
        <button @click="rotateRight" class="btn">rotateRight</button>
      </div>
    </div>
    <div class="previews">
      <section class="pre-item">
        <p>截图框大小</p>
        <div class="show-preview" :style="{'width': previews.w + 'px', 'height': previews.h + 'px',  'overflow': 'hidden',
          'margin': '5px'}">
          <div :style="previews.div">
            <img :src="previews.url" :style="previews.img">
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import VueCropper from "./vue-cropper/vue-cropper";
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      previews: {},
      option: {
        img: "http://cdn.xyxiao.cn/Landscape_1.jpg",
        size: 1,
        full: false,
        outputType: "png",
        canMove: true,
        fixedBox: true,
        original: false,
        canMoveBox: false,
        autoCrop: true,
        // 只有自动截图开启 宽度高度才生效
        autoCropWidth: 280,
        autoCropHeight: 280,
        centerBox: true,
        high: false,
        cropData: {},
        enlarge: 1,
        mode: 'fill',
        maxImgSize: 2000
      },
      previewStyle1: {}
    }
  },
  components: {
    VueCropper: VueCropper
  },
  methods: {
    realTime(data) {
      var previews = data;
      var h = 0.5;
      var w = 0.2;

      this.previewStyle1 = {
        width: previews.w + "px",
        height: previews.h + "px",
        overflow: "hidden",
        margin: "0",
        zoom: h
      };
      this.previews = data;
    },
    imgLoad(msg) {
      console.log(msg);
    },
    cropMoving(data) {
      this.option.cropData = data;
    },
    rotateLeft() {
      this.$refs.cropper.rotateLeft();
    },
    rotateRight() {
      this.$refs.cropper.rotateRight();
    },
    changeScale(num) {
      num = num || 1;
      this.$refs.cropper.changeScale(num);
    },
  },
  mounted() {
    // this.changeImg();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.wapper {
  display: inline-block;
  vertical-align: top;
}
.test {
  display: inline-block;
  vertical-align: top;
  overflow: hidden;
  width: 280px;
  height: 280px;
}
.previews {
  display: inline-block;
  vertical-align: top;
  margin-left: 200px;
}
/deep/ .cropper-view-box {
  outline: none !important;
}
/deep/ .cropper-face {
  border-radius: 140px;
  background-color: unset !important;
  opacity: unset !important;
　box-shadow: 0 0 0 2000px;
}
.show-preview {
  border-radius: 50%;
  overflow: hidden;
}
.btn {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #c0ccda;
  color: #1f2d3d;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 20px 10px 0px 0px;
  padding: 9px 15px;
  font-size: 14px;
  border-radius: 4px;
  color: #fff;
  background-color: #50bfff;
  border-color: #50bfff;
  transition: all 0.2s ease;
  text-decoration: none;
  user-select: none;
}
</style>
