<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Avatar from "./components/Avatar.vue";
import { ref } from "vue";
import { ElInput, ElMessage } from "element-plus";
// 控制 dialog 显示隐藏
let avatarDialogVisible = ref(false);
// 弹框中的确认按钮事件，参数是剪切图片数据信息
interface ICropData {
	cropBase64: string;
	cropBlob: string;
}

const handleDialogConfirm = (param: ICropData) => {
	console.log(param);
	base64Data.value = param.cropBase64;
	avatarDialogVisible.value = false;
};
// 弹框中的取消按钮事件
const handleDialogCancel = () => {
	avatarDialogVisible.value = false;
};
// 文本框
let base64Data = ref("");
const textarea = ref<InstanceType<typeof ElInput>>();
const copy = () => {
	if (base64Data.value) {
		textarea.value?.select();
		document.execCommand("copy");
		ElMessage.success(`复制成功`);
	} else {
		ElMessage.warning(`没有文本可复制`);
	}
};
</script>

<template>
	<el-button size="small" type="primary" @click="avatarDialogVisible = true">头像管理</el-button>
	<el-divider></el-divider>
	<img :src="base64Data" alt="裁剪图片" v-if="base64Data" />
	<el-divider></el-divider>
	<el-card class="pictureData">
		<p>图片数据（base64）：</p>
		<el-input ref="textarea" v-model="base64Data" autosize type="textarea" />
		<el-button type="primary" size="mini" class="copyBtn" @click="copy">复制</el-button>
	</el-card>

	<!-- 
		props： 
		avatarDialogVisible：弹框显示与否 
		handleDialogCancel：取消回调事件 
		dialogStyle：弹框宽高样式 
	-->
	<Avatar v-model:avatarDialogVisible="avatarDialogVisible" @handleDialogConfirm="handleDialogConfirm" @handleDialogCancel="handleDialogCancel" :imgStyle="{ width: 500, height: 500 }" :zoomStyle="{ middleZoom: 0.5, miniZoom: 0.3 }" />
</template>

<style>
#app {
	font-family: "PingFang SC", "JetBrains Mono", "Microsoft YaHei", Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
}
.pictureData {
	position: relative;
}
.copyBtn {
	position: absolute;
	right: 20px;
	top: 20px;
}
</style>
