/*
 * @Author: Mengyu Xu
 * @Date: 2020-12-31 00:12:07
 * @LastEditTime: 2020-12-31 00:15:43
 * @FilePath: \admin\src\composables\useSearch.js
 */

import { ref } from 'vue';
import filterBy from '../utils/filterBy';

/**
 * 根据关键词搜索
 * @param {*} refRawData 响应式原始数据
 * @param {*} by 根据什么搜索
 * @param {*} requestData 取消搜索需要重新请求数据
 * @param {*} refTotalData 响应式数据总数
 * @returns searchKey 搜索关键词, onSearch 搜索事件
 */
const useSearch = (refRawData, by, requestData, refTotalData) => {
  const searchKey = ref('');

  const onSearch = () => {
    let list = filterBy(refRawData, by)(searchKey);
    refRawData.value = list;
    refTotalData.value = list.length;
    if (!searchKey.value) {
      requestData();
    }
  };

  return {
    searchKey,
    onSearch,
  };
};

export default useSearch;
