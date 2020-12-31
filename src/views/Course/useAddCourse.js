import { ref } from 'vue';
import request from '../../api';
import { message } from 'ant-design-vue';

const useAddCourse = (requestData) => {
  const addCourseName = ref('');
  const addCourseTeacher = ref('');
  const addCoursePrice = ref(0);
  const addCourseState = ref(false);
  const visibleAdd = ref(false);

  const addCourse = async () => {
    const result = await request({
      url: 'course',
      method: 'post',
      data: {
        name: addCourseName.value,
        teacher: addCourseTeacher.value,
        price: +addCoursePrice.value,
        is_stop: addCourseState.value,
      },
    });

    if (result.code === 200) {
      message.success('添加成功');
      requestData();
      visibleAdd.value = false;
      return;
    }
    message.error(result.message);
  };

  const openAdd = () => {
    visibleAdd.value = !visibleAdd.value;
  };

  return {
    addCourseName,
    addCourseTeacher,
    addCoursePrice,
    addCourseState,
    addCourse,
    openAdd,
    visibleAdd,
  };
};

export default useAddCourse;
