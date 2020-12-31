import { ref } from 'vue';
import request from '../../api';
import { message } from 'ant-design-vue';

const useEditCourse = (requestData) => {
  const editCourseId = ref(0);
  const editCourseName = ref('');
  const editCourseTeacher = ref('');
  const editCoursePrice = ref(0);
  const editCourseState = ref(false);
  const visibleEdit = ref(false);
  const editCourse = async () => {
    const result = await request({
      url: `course/${editCourseId.value}`,
      method: 'put',
      data: {
        name: editCourseName.value,
        teacher: editCourseTeacher.value,
        price: editCoursePrice.value,
        is_stop: editCourseState.value,
      },
    });
    if (result.code === 200) {
      message.success('修改成功');
      requestData();
      visibleEdit.value = false;
      return;
    }
    message.error(result.message);
  };
  const openEdit = (course) => {
    editCourseId.value = course.key;
    editCourseName.value = course.name;
    editCourseTeacher.value = course.teacher;
    editCoursePrice.value = course.price;
    editCourseState.value = course.isStop;
    visibleEdit.value = true;
  };

  return {
    editCourseName,
    editCourseTeacher,
    editCoursePrice,
    editCourseState,
    openEdit,
    visibleEdit,
    editCourse,
  };
};

export default useEditCourse;
