<!--
 * @Author: lts
 * @Date: 2020-12-29 18:14:57
 * @LastEditTime: 2020-12-30 10:04:11
 * @FilePath: \sale-achievement-admin\src\views\Home.vue
-->
<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
      <div class="logo" />
      <a-menu theme="dark" mode="inline" v-model:selectedKeys="selectedKeys">
        <a-menu-item key="1">
          <user-outlined />
          <span>nav 1</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <menu-unfold-outlined
          v-if="collapsed"
          class="trigger"
          @click="() => (collapsed = !collapsed)"
        />
        <menu-fold-outlined
          v-else
          class="trigger"
          @click="() => (collapsed = !collapsed)"
        />
      </a-layout-header>
      <a-breadcrumb style="margin: 16px 0">
        <a-breadcrumb-item>Home</a-breadcrumb-item>
        <a-breadcrumb-item>List</a-breadcrumb-item>
        <a-breadcrumb-item>App</a-breadcrumb-item>
      </a-breadcrumb>
      <a-layout-content
        :style="{
          margin: '24px 16px',
          padding: '24px',
          background: '#fff',
          minHeight: '280px',
        }"
      >
        Content
      </a-layout-content>
      <a-layout-footer>Footer</a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script>
import {
  UserOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons-vue";
export default {
  components: {
    UserOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
  },
  data() {
    return {
      selectedKeys: ["1"],
      collapsed: false,
    };
  },
};
</script>

<style lang="less" scoped>
#components-layout-demo-custom-trigger {
  height: 100%;
  .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
    &:hover {
      color: #1da57a;
    }
  }

  .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px;
  }
  .ant-layout-content {
    margin-top: 16px!important;
  }
  .ant-layout-footer {
    padding-top: 0;
    text-align: center;
  }
  .ant-breadcrumb {
    margin-bottom: 0!important;
    padding-left: 20px;
  }
}
</style>