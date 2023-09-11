<template>
	<div class="dialogWrap">
		<el-dialog custom-class="avatarDialog" v-model="avatarDialogVisible" :before-close="handleClose">
			<div class="dialogMain">
				<div>
					<p>裁剪：</p>
					<!-- 裁剪图片组件 -->
					<VueCropper class="cropper" ref="cropper" :img="option.imageUrl" :outputSize="option.outputSize" :outputType="option.outputType" :autoCrop="option.autoCrop" @realTime="realTime"></VueCropper>
					<!-- 上传图片组件 -->
					<el-upload ref="upload" class="avatar-uploader" :auto-upload="false" action="" :show-file-list="false" :on-success="handleAvatarSuccess" :on-error="handleAvatarError" :before-upload="handleBeforeAvatarUpload" :http-request="handleUpload" :on-change="handleChangeUpload">
						<template #trigger>
							<el-button type="primary" size="mini">选择图片</el-button>
						</template>
						<template #default>
							<el-button type="success" size="mini" @click="submitUpload" :style="{ margin: '10px' }">上传头像</el-button>
						</template>
						<template #tip>
							<div class="el-upload__tip"><span class="color-red">jpg/png</span> files with a size less than <span class="color-red">500kb</span></div>
						</template>
					</el-upload>
				</div>
				<!-- 图片预览区 -->
				<div class="preview" v-if="option.imageUrl">
					<p>预览：</p>
					<div class="previewWrap" :style="{ width: imgStyle.width + 'px', height: imgStyle.height + 'px', overflow: 'hidden', border: '1px dashed #ccc' }">
						<div class="show-preview" :style="{ width: previewStyle.state.w + 'px', height: previewStyle.state.h + 'px', overflow: 'hidden', margin: '0' }">
							<div :style="previewStyle.state.div">
								<img :src="option.imageUrl" :style="previewStyle.state.img" />
							</div>
						</div>
					</div>
					<p>{{ zoomStyle.middleZoom * 100 }}%缩放比例：</p>
					<div class="previewWrap" :style="{ width: imgStyle.width * zoomStyle.middleZoom + 'px', height: imgStyle.height * zoomStyle.middleZoom + 'px', overflow: 'hidden', border: '1px dashed #ccc' }">
						<div :style="previewMiddleStyle.state">
							<div :style="previewStyle.state.div">
								<img :src="previewStyle.state.url" :style="previewStyle.state.img" />
							</div>
						</div>
					</div>
					<p>{{ zoomStyle.miniZoom * 100 }}%缩放比例：</p>
					<div class="previewWrap" :style="{ width: imgStyle.width * zoomStyle.miniZoom + 'px', height: imgStyle.height * zoomStyle.miniZoom + 'px', overflow: 'hidden', border: '1px dashed #ccc' }">
						<div :style="previewMiniStyle.state">
							<div :style="previewStyle.state.div">
								<img :src="previewStyle.state.url" :style="previewStyle.state.img" />
							</div>
						</div>
					</div>
					<!-- <p>固定为 100 宽度</p>
					<div :style="previewStyle3.state">
						<div :style="previewStyle.state.div">
							<img :src="previewStyle.state.url" :style="previewStyle.state.img" />
						</div>
					</div>
					<p>固定为 100 高度</p>
					<div :style="previewStyle4.state">
						<div :style="previewStyle.state.div">
							<img :src="previewStyle.state.url" :style="previewStyle.state.img" />
						</div>
					</div> -->
				</div>
			</div>
			<template #footer>
				<span class="dialog-footer">
					<el-button @click="handleDialogCancel">取消</el-button>
					<el-button type="primary" @click="handleDialogConfirm">确定</el-button>
				</span>
			</template>
		</el-dialog>
	</div>
</template>
<script setup lang="ts">
import { VueCropper } from "vue-cropper";
import "vue-cropper/dist/index.css";
import { ElDialog, ElMessageBox, ElUpload } from "element-plus";
import "element-plus/dist/index.css"; //element-plus个别组件样式有bug，需单独引入，详见issue（https://github.com/element-plus/element-plus/issues/436）
import { ref, reactive, withDefaults } from "vue";
// 图片大小配置接口
interface IImgStyle {
	width: number;
	height: number;
}
// 图片缩放配置接口
interface IZoomStyle {
	middleZoom: number;
	miniZoom: number;
}
const props = withDefaults(
	defineProps<{
		avatarDialogVisible: boolean;
		imgStyle: IImgStyle;
		zoomStyle: IZoomStyle;
	}>(),
	{
		// 默认值
		avatarDialogVisible: false,
		imgStyle: () => {
			return {
				width: 200,
				height: 200,
			};
		},
		zoomStyle: () => {
			return {
				middleZoom: 0.5,
				miniZoom: 0.2,
			};
		},
	}
);
// 裁剪图大小
const cropperStyle = reactive({
	width: props.imgStyle.width + "px",
	height: props.imgStyle.height + "px",
});
/* dialog 的宽度根据组件 props 传过来的 imgStyle 图片大小决定 （*2+80）*/
const dialogStyle = reactive({
	width: props.imgStyle.width * 2 + 80 + "px",
});
interface ICropData {
	cropBase64: string;
	cropBlob: string;
}
// const emit = defineEmits(["handleDialogCancel", "update:avatarDialogVisible"]);
// 或者
const emit = defineEmits<{ (e: "handleDialogCancel"): void; (e: "handleDialogConfirm", cropData: ICropData): void; (e: "update:avatarDialogVisible", visible: boolean): void }>();
// 确定按钮事件
const handleDialogConfirm = async () => {
	try {
		let cropData = <ICropData>await getCrop();
		// 当确认的时候把截图数据通过参数传出去
		emit("handleDialogConfirm", cropData);
	} catch (err) {
		console.log(err);
	}
};
// 获取截图数据

const cropper = ref<InstanceType<typeof VueCropper>>(null);
const getCrop = () => {
	return new Promise((resolve) => {
		let cropBase64 = new Promise((resolve) => {
			cropper.value?.getCropData((data: string) => {
				resolve(data);
			});
		});
		let cropBlob = new Promise((resolve) => {
			cropper.value?.getCropBlob((data: string) => {
				resolve(data);
			});
		});
		Promise.all([cropBase64, cropBlob]).then((result) => {
			resolve({ cropBase64: result[0], cropBlob: result[1] });
		});
	});
};
// 取消按钮事件
const handleDialogCancel = () => {
	emit("handleDialogCancel");
};

const handleClose = (done: Function) => {
	ElMessageBox.confirm("Are you sure to close this dialog?")
		.then(() => {
			// element-plus 的 bug : done() 未能改变父组件的 avatarDialogVisible
			emit("update:avatarDialogVisible", false);
			done();
		})
		.catch((err) => {
			// catch error
			console.log(err);
		});
};

// 裁剪图片组件配置
const option = reactive({
	imageUrl: "", //https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.kandao.com%2Fkandao%2FNewFile%2FUserNewData%2F20200405%2F20200405152319984718.jpg&refer=http%3A%2F%2Fimg.kandao.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1639043280&t=6115a0e08cf414f6016689ebda36726c
	outputSize: 1, //裁剪生成图片的质量 可选：0.1 ~ 1
	outputType: "jpeg", //裁剪生成图片的格式，jpg 需要传入 jpeg
	autoCrop: true, //是否默认生成截图框
});

// 图片预览样式
let previewStyle = reactive({
	state: {
		w: 0,
		h: 0,
		div: {},
		url: "",
		img: {},
	},
});
// 中等大小
let previewMiddleStyle = reactive({ state: {} });
// 迷你大小
let previewMiniStyle = reactive({ state: {} });
// 实时预览时间
const realTime = (data: any) => {
	previewStyle.state = data;
	previewMiddleStyle.state = {
		width: previewStyle.state.w + "px",
		height: previewStyle.state.h + "px",
		overflow: "hidden",
		margin: "0",
		zoom: props.zoomStyle.middleZoom,
	};
	previewMiniStyle.state = {
		width: previewStyle.state.w + "px",
		height: previewStyle.state.h + "px",
		overflow: "hidden",
		margin: "0",
		zoom: props.zoomStyle.miniZoom,
	};
	// previewStyle3.state = {
	// 	width: previewStyle.state.w + "px",
	// 	height: previewStyle.state.h + "px",
	// 	overflow: "hidden",
	// 	margin: "0",
	// 	zoom: 100 / previewStyle.state.w,
	// };
	// previewStyle4.state = {
	// 	width: previewStyle.state.w + "px",
	// 	height: previewStyle.state.h + "px",
	// 	overflow: "hidden",
	// 	margin: "0",
	// 	zoom: 100 / previewStyle.state.h,
	// };
};
// 上传成功方法
const handleAvatarSuccess = (res: any, file: any, fileList: any) => {
	console.log(res, file);
	console.log(URL.createObjectURL(file.raw));
};
// 上传失败方法
const handleAvatarError = (err: any, file: any, fileList: any) => {
	console.log(err, file, fileList);
};
// 上传前钩子
const handleBeforeAvatarUpload = (file: any) => {
	const isJPG = file.type === "image/jpeg";
	const isLt2M = file.size / 1024 / 1024 < 2;
	if (!isJPG) {
		alert("Avatar picture must be JPG format!");
		// ElMessage.error("Avatar picture must be JPG format!");
	}
	if (!isLt2M) {
		alert("Avatar picture size can not exceed 2MB!");
		// ElMessage.error("Avatar picture size can not exceed 2MB!");
	}
	return isJPG && isLt2M;
};
const handleChangeUpload = (file: any, fileList: any) => {
	// 读取上传的文件数据
	let url = URL.createObjectURL(file.raw);
	console.log(url);
	let reader = new FileReader();
	if (file) {
		reader.readAsDataURL(file.raw);
	}
	reader.addEventListener("load", function () {
		// base64数据
		console.log(reader.result);
	});
	option.imageUrl = url;
};
const upload = ref<InstanceType<typeof ElUpload>>();
// 上传
const submitUpload = () => {
	upload.value?.submit();
};
const handleUpload = (info: any) => {
	console.log(info);
	console.log("http-request:上传未剪切原图钩子函数handleUpload");
};
</script>
<style scoped>
.color-red {
	color: #f56c6c;
}
.dialogWrap :deep(.avatarDialog) {
	width: v-bind("dialogStyle.width");
}
.dialogMain {
	display: flex;
	justify-content: space-evenly;
}

.cropper {
	width: v-bind("cropperStyle.width");
	height: v-bind("cropperStyle.height");
	margin-bottom: 20px;
}

.previewWrap {
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>
