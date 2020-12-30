/*
 * @Author: Mengyu Xu
 * @Date: 2020-12-30 10:51:40
 * @LastEditTime: 2020-12-30 13:42:40
 * @FilePath: \admin\src\components\card\index.jsx
 */

import './index.less';
import { Card } from 'ant-design-vue';
import { defineComponent } from 'vue';

const card = defineComponent({
  name: 'card',
  props: {
    darkShadow: Boolean,
  },
  setup(props, { slots }) {
    const content = () => <div class="content">{slots}</div>;
    return {
      props: {
        title: props.title,
        darkShadow: props.darkShadow,
        headStyle: props.headStyle,
        bodyStyle: props.bodyStyle,
        children: content,
      },
    };
  },
  render() {
    const { children, darkShadow, ...rest } = this.props;

    return (
      <Card class={`card ${darkShadow ? 'dark' : ''}`} {...rest}>
        {children}
      </Card>
    );
  },
});

export default card;
