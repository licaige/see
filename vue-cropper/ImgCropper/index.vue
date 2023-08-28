<script>
import vueCrop from 'vue-cropper' 
import { isLegalFileType, isLegalFileSize } from '@/utils'
export default {
  data() {
    return {
      previews: {},
      imgSrc: '',
      option: {
        img: 'http://img1.vued.vanthink.cn/vued751d13a9cb5376b89cb6719e86f591f3.png', // 裁剪的默认图片地址
        outputSize: 1, // 裁剪生成照片的质量
        info: true, // 裁剪框的大小信息
        full: false, // 输出原图比例截图
        outputType: 'png', // 裁剪生成图片的格式
        canMove: true,
        original: false, 
        canMoveBox: true, 
        canScale: true, // 图片是否允许滚轮缩放
        autoCrop: true, // 是否默认生成截图框
        autoCropWidth: 300, // 默认生成截图框的宽度
        autoCropHeight: 300, // 默认生成截图框的高度
        fixedBox: true
      }
    }
  },
  components: {
    'vue-crop': vueCrop
  },
  methods: {
    before_upload(file) {
      const name_arr = (file.name || '').split('.')
      const fileSuffix = name_arr[name_arr.length - 1].toLowerCase() // 文件后缀名
      const legalFileArr = ['jpg', 'jpeg', 'png']
      const fileSize = file.size
      const limit = 2
      const fr = new FileReader()
      if (!isLegalFileType(fileSuffix, legalFileArr)) {
        this.$message.error('上传文件只能是' + legalFileArr.join(',') + '等格式')
        return false
      }
      if (!isLegalFileSize(fileSize, limit)) {
        this.$message.error('上传文件大小不能超过' + limit + 'MB!')
        return false
      }
      fr.readAsDataURL(file)
      fr.onload = (ev) => {
        const imgSrc = ev.target.result
        this.option.img = imgSrc
      }
      return true
    },
    upload_change(file, fileList) {
      this.before_upload(file.raw)
    },
    // 放大/缩小
    changeScale(num) { 
      num = num || 1
      this.$refs.cropper.changeScale(num)
    }, 
    // 左旋转
    rotateLeft() { 
      this.$refs.cropper.rotateLeft()
    }, 
    // 右旋转
    rotateRight() { 
      this.$refs.cropper.rotateRight()
    },
    // 下载图片
    img_download(type) { 
      var aLink = document.createElement('a') // 创建一个a标签
      aLink.download = 'img-download' 
      if (type === 'blob') { 
        this.$refs.cropper.getCropBlob((data) => { 
          this.downImg = window.URL.createObjectURL(data)
          aLink.href = window.URL.createObjectURL(data) 
          aLink.click() 
        }) 
      } else { 
        this.$refs.cropper.getCropData((data) => { 
          this.downImg = data
          aLink.href = data
          aLink.click() 
        }) 
      } 
    },
    // 实时预览函数 
    realTime(data) { 
      this.previews = data 
    }, 
    // 提交保存
    submit() {
      this.$refs.cropper.getCropBlob((data) => { 
        console.log(data)
        const img = window.URL.createObjectURL(data) 
        this.imgSrc = img
      }) 
    }
  }
}
</script>
<template>
<div class="img_cropper">
  <div class="btns_wrapper clearfix">
    <el-upload class="fl mr10" action="" :auto-upload="false" list-type="picture"  
      :show-file-list="false" :before-upload="before_upload" :on-change="upload_change">
      <el-button size="small" type="primary">点击上传</el-button>
    </el-upload>
    <el-button class="fl" size="small" icon="el-icon-plus" type="primary" @click.stop="changeScale(1)">放大</el-button>
    <el-button class="fl" size="small" icon="el-icon-minus" type="primary" @click.stop="changeScale(-1)">缩小</el-button>
    <el-button class="fl" size="small" icon="el-icon-refresh" type="primary" @click.stop="rotateLeft">左旋转</el-button>
    <el-button class="fl" size="small" icon="el-icon-refresh" type="primary" @click.stop="rotateRight">右旋转</el-button>
    <el-button class="fl" size="small" icon="el-icon-download" type="primary" @click.stop="img_download('blob')">下载</el-button>
    <el-button size="small" type="primary" @click.stop="submit">提交</el-button>
  </div>
  <div class="clearfix">
    <div class="img_wrapper fl ">
      <vue-crop
        ref="cropper"
        :img="option.img"
        :outputSize="option.outputSize"
        :outputType="option.outputType"
        :info="option.info"
        :full="option.full"
        :canMove="option.canMove"
        :canMoveBox="option.canMoveBox"
        :original="option.original"
        :canScale="option.canScale"
        :autoCrop="option.autoCrop"
        :autoCropWidth="option.autoCropWidth"
        :autoCropHeight="option.autoCropHeight"
        :fixedBox="option.fixedBox"
        @realTime="realTime"
      ></vue-crop>
    </div>
    <div :style="previews.div" class="preview fl">
      <img :src="previews.url" :style="previews.img">
    </div> 
  </div> 
</div>
</template>
<style lang="scss">
@import 'src/styles/variables'; 
.lab_baseinfo{
  .img_cropper{
    border: 1px solid #ccc;
    margin: 0 auto;
    padding: 20px;
    .btns_wrapper{
      padding-bottom: 10px;   
    }
    .img_wrapper{
      width: 600px;
      height: 400px;
      margin-right: 30px;
    }
    .preview{
      overflow: hidden;
      border-radius: 50%;
      border:1px solid #cccccc;
      background: #cccccc;
    }
  }
}
</style>


