<template>
  <div>
    <ProTable ref="proTable" :columns="columns" :requestApi="getNormalUserList">
      <template #tableHeader>
        <el-button
          type="primary"
          icon="Plus"
          :disabled="!BUTTONS['btn.UserNormal.add']"
          @click="openDialog('新增')"
        >
          新增
        </el-button>
      </template>
      <!-- 表格操作 -->
      <template #operation="scope">
        <el-button
          v-if="scope.row.status !== 1"
          type="primary"
          link
          icon="Edit"
          :disabled="!BUTTONS['btn.UserNormal.update']"
          @click="openDialog('编辑')"
        >
          编辑
        </el-button>
        <el-button
          v-if="scope.row.status !== 1"
          type="primary"
          link
          icon="Delete"
          :disabled="!BUTTONS['btn.UserNormal.view']"
        >
          详情
        </el-button>
      </template>
    </ProTable>
  </div>
</template>
<script setup lang="tsx">
import { ref } from 'vue'
import { ColumnProps } from '@/components/ProTable/src/types'
import { useAuth, hasAuth } from '@/hooks/useAuth'
import { useAuthButtons } from '@/hooks/useAuthButtons'
import { getNormalUserList } from '@/api/user/normal'
// import type { GoodsInfo } from '@/api/base/types'

const { BUTTONS } = useAuthButtons()

// *表格配置项
const columns: ColumnProps[] = [
  // { type: 'index', label: '#', width: 80 },
  { prop: 'id', label: 'UserId', width: 80, fixed: 'left' },
  {
    prop: 'name',
    label: '用户名',
    fixed: 'left',
    search: { el: 'input', props: { placeholder: '请输入用户名' } },
  },
  {
    prop: 'avatar',
    label: '头像',
    width: 100,
    fixed: 'left',
    render: ({ row }) => {
      return (
        <>
          <el-avatar size={50} src={row.avatar} />
        </>
      )
    },
  },
  { prop: 'phone', label: '手机号', width: 140 },
  {
    prop: 'sex',
    label: '性别',
    width: 100,
    render: ({ row }) => {
      return row.sex === 0 ? '男' : '女'
    },
  },
  { prop: 'level', label: 'VIP等级', width: 100 },
  { prop: 'account', label: '账户余额', width: 100 },
  {
    prop: 'onlineStatus',
    label: '在线状态',
    width: 100,
    render: ({ row }) => {
      return row.onlineStatus === 0 ? (
        <el-tag type="success">离线</el-tag>
      ) : (
        <el-tag type="info">离线</el-tag>
      )
    },
  },
  {
    prop: 'authStatus',
    label: '主播认证',
    width: 100,
    render: ({ row }) => {
      return row.authStatus === 0 ? (
        <el-tag type="warning">未认证</el-tag>
      ) : (
        <el-tag>已认证</el-tag>
      )
    },
  },
  { prop: 'createTime', label: '注册时间', width: 180 },
  {
    prop: 'status',
    label: '状态',
    width: 100,
    render: ({ row }) => {
      return (
        <el-switch
          v-model={row.status}
          class="ml-2"
          style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"
        />
      )
    },
  },
  { prop: 'operation', label: '操作', fixed: 'right', width: 180 },
]

// *获取 ProTable 元素，调用其获取刷新数据方法
const proTable = ref()

const openDialog = async (title: string) => {
  // 检查是否有操作权限
  const isAuth =
    title === '新增'
      ? hasAuth('btn.UserNormal.add1')
      : hasAuth('btn.UserNormal.update2')
  await useAuth(isAuth)
  // 其他的逻辑
}
</script>

<style lang="scss" scoped></style>
