<!--
 * @Author: lts
 * @Date: 2020-12-29 18:14:57
 * @LastEditTime: 2020-12-30 16:31:05
 * @FilePath: \admin\src\views\Home.vue
-->
<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
      <div class="logo" />
      <a-menu theme="dark" mode="inline" v-model:selectedKeys="selectedKeys">
        <a-menu-item key="1">
          <router-link to="/staffInfo">
            <user-outlined />
            <span>员工管理</span>
          </router-link>
        </a-menu-item>
        <a-menu-item key="2">
          <router-link to="/customers">
            <solution-outlined />
            <span>客户管理</span>
          </router-link>
        </a-menu-item>
        <a-menu-item key="3">
          <router-link to="/course">
            <book-outlined />
            <span>课程管理</span>
          </router-link>
        </a-menu-item>
        <!-- <router-view></router-view> -->
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
        <a-breadcrumb-item v-for="(item, index) in breadCrumb" :key="index">
          {{ item }}
        </a-breadcrumb-item>
      </a-breadcrumb>
      <a-layout-content
        :style="{
          margin: '24px 16px',
          padding: '24px',
          background: '#fff',
          minHeight: '280px',
        }"
      >
        <router-view></router-view>
      </a-layout-content>
      <a-layout-footer>
        Copyright © 2020 BAR Team. All rights reserved.
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script>
import {
  UserOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  SolutionOutlined,
  BookOutlined,
} from '@ant-design/icons-vue';
import { watch, ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const useBreadCrumb = () => {
  const breadCrumb = ref(['首页']);
  const router = useRouter();

  const mapToLabel = (fullPath) => {
    const routerReg = [
      { path: /^\/staffInfo$/, label: ['员工管理'] },
      { path: /^\/customers$/, label: ['客户管理'] },
      { path: /^\/course$/, label: ['课程管理'] },
      { path: /^\/customers\/\d/, label: ['客户管理', '客户详情'] },
    ];

    return routerReg.filter((item) => {
      return item.path.test(fullPath);
    });
  };
  watch(router.currentRoute, (val) => {
    const { fullPath } = val;
    breadCrumb.value = ['首页', ...mapToLabel(fullPath)[0].label];
  });

  onMounted(() => {
    breadCrumb.value = [
      '首页',
      ...mapToLabel(router.currentRoute.value.fullPath)[0].label,
    ];
  });

  return {
    breadCrumb,
  };
};

export default {
  components: {
    UserOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    SolutionOutlined,
    BookOutlined,
  },
  data() {
    return {
      selectedKeys: ['1'],
      collapsed: false,
    };
  },
  setup() {
    return {
      ...useBreadCrumb(),
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
    margin-top: 16px !important;
  }
  .ant-layout-footer {
    padding-top: 0;
    text-align: center;
  }
  .ant-breadcrumb {
    margin-bottom: 0 !important;
    padding-left: 20px;
  }
}
</style>
