/*
 * @Author: Mengyu Xu
 * @Date: 2020-12-30 14:28:58
 * @LastEditTime: 2020-12-30 14:34:16
 * @FilePath: \admin\src\utils\warnning.js
 */

import { notification } from 'ant-design-vue';
import { WarningOutlined } from '@ant-design/icons-vue';

/**
 * 警告弹框
 * @param {*} title 弹框标题
 * @param {*} message
 */
export default function warnning(title, message) {
  notification.open({
    message: title,
    description: message,
    duration: 2,
    icon: <WarningOutlined style={{ color: '#fadb14' }} />,
  });
}
