<!--
 * @Author: lts, Mengyu Xu
 * @Date: 2020-12-30 12:37:00
 * @LastEditTime: 2020-12-31 00:13:12
 * @FilePath: \admin\src\views\Customers\index.vue
-->
<template>
  <div class="customer-container">
    <a-input-search
      class="search-input"
      v-model:value="searchKey"
      placeholder="输入姓名搜索"
      enter-button="搜索"
      style="width: 300px"
      @search="onSearch"
    />
    <a-table
      :columns="columns"
      :data-source="customerData"
      size="small"
      :pagination="{ pageSize: 8, total: total }"
      :loading="loading"
    >
      <template #action>
        <a-button>查看</a-button>
      </template>
    </a-table>
  </div>
</template>
<script>
import { onMounted } from 'vue';
import useCustomerTable from './useCustomerTable';
import request from '../../api';
import warnning from '../../utils/warnning';
import useSearch from '../../composables/useSearch';
import './index.less';

export default {
  setup() {
    const { customerData, total, loading, columns } = useCustomerTable();

    const requestData = async () => {
      loading.value = true;
      const adapter = (data) => ({
        key: data.id,
        name: data.name,
        phone: data.phone,
        wechat: data.wechat,
        school: data.school,
        age: data.age,
        grade: data.grade,
        isPaid: data.is_paid ? '是' : '否',
        money: data.money,
        time: data.join_time,
      });

      const result = await request({
        url: 'customer',
        method: 'get',
      });

      loading.value = false;

      if (result.code === 200) {
        total.value = result.data.length;
        customerData.value = result.data.map(adapter);
        return;
      }
      warnning('错误', '数据请求失败');
    };

    onMounted(() => {
      requestData();
    });

    return {
      ...useSearch(customerData, 'name', requestData, total),
      total,
      customerData,
      loading,
      columns,
    };
  },
};
</script>
