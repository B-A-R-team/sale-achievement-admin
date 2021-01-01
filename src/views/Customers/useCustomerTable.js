/*
 * @Author: Mengyu Xu
 * @Date: 2020-12-30 23:28:20
 * @LastEditTime: 2020-12-31 00:05:25
 * @FilePath: \admin\src\views\Customers\useCustomerTable.js
 */

import { ref } from 'vue';

const useCustomerTable = () => {
  const columns = [
    { title: '姓名', dataIndex: 'name', key: 'name' },
    { title: '电话', dataIndex: 'phone', key: 'phone' },
    { title: '微信', dataIndex: 'wechat', key: 'wechat' },
    { title: '学校', dataIndex: 'school', key: 'school' },
    { title: '年龄', dataIndex: 'age', key: 'age' },
    { title: '年级', dataIndex: 'grade', key: 'grade' },
    { title: '是否付款', dataIndex: 'isPaid', key: 'isPaid' },
    { title: '消费金额', dataIndex: 'money', key: 'money' },
    { title: '消费时间', dataIndex: 'time', key: 'time' },
    {
      title: '操作',
      dataIndex: 'action',
      slots: { customRender: 'action' },
      key: 'action',
    },
  ];

  const customerData = ref([]);
  const total = ref(0);
  const loading = ref(true);

  return {
    columns,
    customerData,
    total,
    loading,
  };
};

export default useCustomerTable;
