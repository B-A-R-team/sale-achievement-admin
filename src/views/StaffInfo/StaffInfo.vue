<!--
 * @Author: lts
 * @Date: 2020-12-30 12:35:32
 * @LastEditTime: 2021-01-01 10:07:25
 * @FilePath: \sale-achievement-admin\src\views\StaffInfo\StaffInfo.vue
-->
<template>
  <a-card>
    <template #title >
      <a-input
        placeholder="请输入员工工号"
        v-model:value="staffId"

      >
        <template #prefix><user-outlined type="user" /></template>
        <template #suffix>
          <a-tooltip title="输入工号搜索">
            <info-circle-outlined style="color: rgba(0, 0, 0, 0.45)" />
          </a-tooltip>
        </template>
      </a-input>
        <a-button type="primary" @click="search">
        搜索
      </a-button>
    </template>
    <template #extra>
      <a-button type="primary" @click="showModal">
        注册帐号
      </a-button></template
    >
    <a-table
      :columns="columns"
      :data-source="data"
      :pagination="pagination"
      :loading="loading"
    >
      <template #avatar_url="{ text }">
        <a-avatar :src="text" />
      </template>
      <template #name="{ text }">
        <a>{{ text }}</a>
      </template>
      <template #action="{ record }">
        <span>
          <a @click="del(record)">删除</a>
        </span>
      </template>
    </a-table>
  </a-card>
  <a-modal
    title="注册帐号"
    v-model:visible="visible"
    :confirm-loading="confirmLoading"
    @ok="handleOk"
    cancelText="取消"
    okText="确定"
  >
    <a-input
      placeholder="请输入员工姓名"
      v-model:value="userName"
      ref="userNameInput"
    >
      <template #prefix><user-outlined type="user" /></template>
      <template #suffix>
        <a-tooltip title="输入员工姓名后自动生成工号">
          <info-circle-outlined style="color: rgba(0, 0, 0, 0.45)" />
        </a-tooltip>
      </template>
    </a-input>
  </a-modal>
</template>
<script>
import StaffInfo from "./staffInfo";
import './staffInfo.less'
import { UserOutlined, InfoCircleOutlined } from "@ant-design/icons-vue";

export default {
  components: {
    UserOutlined,
    InfoCircleOutlined,
  },
  setup() {
    return {
      ...StaffInfo(),
    };
  },
};
</script>
