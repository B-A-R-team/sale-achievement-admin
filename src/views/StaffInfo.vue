/* eslint-disable vue/no-unused-vars */
<!--
 * @Author: lts
 * @Date: 2020-12-30 12:35:32
 * @LastEditTime: 2020-12-30 14:38:18
 * @FilePath: \sale-achievement-admin\src\views\StaffInfo.vue
-->
<template>
  <a-card title="Card title">
    <a-table :columns="columns" :data-source="data">
      <template #name="{ text }">
        <a>{{ text }}</a>
      </template>
      <template #customTitle>
        <span><smile-outlined /> Name</span>
      </template>
      <template #tags="{ text: tags }">
        <span>
          <a-tag
            v-for="tag in tags"
            :key="tag"
            :color="
              tag === 'loser'
                ? 'volcano'
                : tag.length > 5
                ? 'geekblue'
                : 'green'
            "
          >
            {{ tag.toUpperCase() }}
          </a-tag>
        </span>
      </template>
      <template #action>
        <span>
          <a>Delete</a>
        </span>
      </template>
    </a-table>
  </a-card>
</template>
<script>
import { SmileOutlined } from "@ant-design/icons-vue";
const columns = [
  {
    title: "姓名",
    dataIndex: "name",
    key: "name",
    slots: { title: "customTitle", customRender: "name" },
  },
  {
    title: "工号",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
    slots: { customRender: "tags" },
  },
  {
    title: "管理",
    key: "action",
    slots: { customRender: "action" },
  },
];
const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
    {
    key: "4",
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
    {
    key: "5",
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];
export default {
  components: {
    SmileOutlined,
  },
  data() {
    return {
      data,
      columns,
    };
  },
};
</script>
<style lang="less">
</style>