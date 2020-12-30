<!--
 * @Author: lts
 * @Date: 2020-12-30 10:04:56
 * @LastEditTime: 2020-12-30 14:28:04
 * @FilePath: \admin\src\views\Login\index.vue
-->
<template>
  <div class="login-container">
    <a-spin :spinning="loading">
      <card class="login-card" :darkShadow="true" title="登录业绩管理后台系统">
        <div class="login-wrapper">
          <a-input
            class="login-input"
            placeholder="请输入工号"
            size="large"
            v-model:value="staffId"
          >
            <template #prefix><user-outlined /></template>
          </a-input>
          <a-input
            class="login-input"
            placeholder="请输入密码"
            type="password"
            size="large"
            v-model:value="password"
          >
            <template #prefix><key-outlined /></template>
          </a-input>
          <a-button class="login-btn" type="primary" @click="handleLogin">
            登录
          </a-button>
        </div>
      </card>
    </a-spin>
  </div>
</template>
<script>
import { UserOutlined, KeyOutlined } from '@ant-design/icons-vue';
import card from '../../components/card';
import './index.less';
import useLogin from './useLogin';

export default {
  components: {
    card,
    UserOutlined,
    KeyOutlined,
  },
  setup() {
    return {
      ...useLogin(),
    };
  },
};
</script>
<style lang="less"></style>
