import { ExtractDefaultPropTypes } from "vue";

export const watermarkProps = {
   markName: { // 设置水印名
       type: String,
       default: "PandaGuo"
   },
   isShowTime: { // 是否展示时间
       type: Boolean
   },
   fontColor: {  // 水印文字颜色
       type: String
   }
};

export type WaterMarkProps = ExtractDefaultPropTypes<typeof watermarkProps>