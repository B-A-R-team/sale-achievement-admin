import { ref } from 'vue';

const useCourseTable = () => {
  const columns = [
    { title: '课程名', dataIndex: 'name', key: 'name' },
    { title: '授课教师', dataIndex: 'teacher', key: 'teacher' },
    { title: '课程价格', dataIndex: 'price', key: 'price' },
    {
      title: '是否停课',
      dataIndex: 'isStop',
      slots: { customRender: 'isStop' },
      key: 'isStop',
    },
    {
      title: '操作',
      dataIndex: 'action',
      slots: { customRender: 'action' },
      key: 'action',
    },
  ];
  const total = ref(0);
  const loading = ref(true);
  const courseData = ref([]);

  return { total, courseData, columns, loading };
};

export default useCourseTable;
