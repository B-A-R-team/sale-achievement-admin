/*
 * @Author: Mengyu Xu
 * @Date: 2020-12-30 23:53:27
 * @LastEditTime: 2020-12-31 00:12:17
 * @FilePath: \admin\src\utils\filterBy.js
 */

/**
 * 模糊过滤数据
 * @param {*} refDataList 响应式数据
 * @param {*} byKey 根据什么过滤
 */
export default function filterBy(refDataList, byKey) {
  return (refKeyword) => {
    return refDataList.value.filter((item) => {
      return new RegExp(refKeyword.value).test(item[byKey]);
    });
  };
}
