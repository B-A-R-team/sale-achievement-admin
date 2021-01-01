<template>
  <a-spin :spinning="loading">
    <a-page-header title="客户详情页" style="padding: 0;" @back="goBack" />
    <a-divider style="margin-top: 12px" />
    <a-descriptions title="客户信息">
      <a-descriptions-item
        v-for="(item, index) in info"
        :label="item.label"
        :key="index"
      >
        {{ item.value }}
      </a-descriptions-item>
    </a-descriptions>
    <a-divider />
    <a-descriptions title="课程信息">
      <a-descriptions-item
        v-for="(item, index) in course"
        :label="item.label"
        :key="index"
      >
        {{ item.value }}
      </a-descriptions-item>
    </a-descriptions>
  </a-spin>
</template>

<script>
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import request from '../../../api';

export default {
  setup() {
    const router = useRouter();
    const { id } = router.currentRoute.value.params;
    const info = ref([]);
    const course = ref([]);
    const loading = ref(true);

    const getInfo = async () => {
      loading.value = true;
      const adapter = (data) => [
        { label: '姓名', value: data.name },
        { label: '电话', value: data.phone },
        { label: '微信', value: data.wechat },
        { label: '学校', value: data.school },
        { label: '年龄', value: data.age },
        { label: '年级', value: data.grade },
        { label: '是否付款', value: data.is_paid ? '是' : '否' },
        { label: '消费金额', value: data.money },
        { label: '消费时间', value: data.join_time },
        { label: '所属员工姓名', value: data.staff.name },
        { label: '所属员工工号', value: data.staff.id },
      ];
      const courseAdapter = (data) => [
        { label: '课程名', value: data.course.name },
        { label: '授课教师', value: data.course.teacher },
        { label: '课程费用', value: data.course.price },
        { label: '是否开课', value: data.course.is_stop ? '否' : '是' },
      ];

      const result = await request({
        url: `customer/${id}`,
        method: 'get',
      });

      if (result.code === 200) {
        info.value = adapter(result.data);
        course.value = courseAdapter(result.data);
        loading.value = false;
        console.log(info.value);
      }
    };

    const goBack = () => router.back(-1);

    onMounted(() => {
      getInfo();
    });

    return {
      info,
      course,
      goBack,
      loading,
    };
  },
};
</script>

<style></style>
