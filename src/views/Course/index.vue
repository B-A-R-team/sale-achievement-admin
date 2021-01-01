<template>
  <div class="course-container">
    <a-input-search
      class="search-input"
      v-model:value="searchKey"
      placeholder="输入课程名搜索"
      enter-button="搜索"
      style="width: 300px"
      @search="onSearch"
    />
    <a-button shape="round" type="primary" ghost @click="openAdd">
      <template #icon><plus-outlined /></template>添加课程
    </a-button>
    <a-modal
      v-model:visible="visibleAdd"
      title="添加课程"
      @ok="addCourse"
      okText="添加"
      cancelText="取消"
      class="add-modal"
    >
      <div class="add-item">
        <span>课程名称</span>
        <a-input placeholder="请输入课程名" v-model:value="addCourseName" />
      </div>
      <div class="add-item">
        <span>授课教师</span>
        <a-input
          placeholder="请输入授课教师"
          v-model:value="addCourseTeacher"
        />
      </div>
      <div class="add-item">
        <span>课程价格</span>
        <a-input
          type="number"
          placeholder="请输入课程价格"
          v-model:value="addCoursePrice"
        />
      </div>
      <div class="add-item">
        <span>是否停课</span>
        <span class="add-switch">
          <a-switch
            v-model:checked="addCourseState"
            checked-children="是"
            un-checked-children="否"
          />
        </span>
      </div>
    </a-modal>
    <a-table
      :columns="columns"
      :data-source="courseData"
      size="small"
      :pagination="{ pageSize: 9, total: total }"
      :loading="loading"
    >
      <template #isStop="{record}">
        <a-popconfirm
          title="确定要更改课程状态吗？"
          ok-text="确定"
          cancel-text="取消"
          @confirm="updateCourseState(record)"
          @cancel="() => {}"
        >
          <a-switch
            checked-children="是"
            un-checked-children="否"
            :checked="record.isStop"
          />
        </a-popconfirm>
      </template>
      <template #action="{record}">
        <a-button size="small" @click="openEdit(record)">编辑</a-button>
      </template>
    </a-table>
    <a-modal
      v-model:visible="visibleEdit"
      title="修改课程信息"
      @ok="editCourse"
      okText="保存"
      cancelText="取消"
      class="add-modal"
    >
      <div class="add-item">
        <span>课程名称</span>
        <a-input placeholder="请输入课程名" v-model:value="editCourseName" />
      </div>
      <div class="add-item">
        <span>授课教师</span>
        <a-input
          placeholder="请输入授课教师"
          v-model:value="editCourseTeacher"
        />
      </div>
      <div class="add-item">
        <span>课程价格</span>
        <a-input
          type="number"
          placeholder="请输入课程价格"
          v-model:value="editCoursePrice"
        />
      </div>
      <div class="add-item">
        <span>是否停课</span>
        <span class="add-switch">
          <a-switch
            v-model:checked="editCourseState"
            checked-children="是"
            un-checked-children="否"
          />
        </span>
      </div>
    </a-modal>
  </div>
</template>

<script>
import './index.less';
import { onMounted } from 'vue';
import { PlusOutlined } from '@ant-design/icons-vue';
import request from '../../api';
import warnning from '../../utils/warnning';
import useSearch from '../../composables/useSearch';
import { message } from 'ant-design-vue';
import useCourseTable from './useCourseTable';
import useAddCourse from './useAddCourse';
import useEditCourse from './useEditCourse';

export default {
  components: {
    PlusOutlined,
  },
  setup() {
    const { total, courseData, columns, loading } = useCourseTable();

    const requestData = async () => {
      loading.value = true;
      const adapter = (data) => ({
        key: data.id,
        name: data.name,
        teacher: data.teacher,
        price: data.price,
        isStop: data.is_stop,
      });
      const result = await request({
        url: 'course',
        method: 'get',
      });
      loading.value = false;
      if (result.code === 200) {
        total.value = result.data.length;
        courseData.value = result.data.map(adapter);
        return;
      }
      warnning('错误', result.message);
    };

    onMounted(() => {
      requestData();
    });

    const updateCourseState = async (course) => {
      const result = await request({
        url: `course/${course.key}`,
        method: 'put',
        data: {
          name: course.name,
          teacher: course.teacher,
          price: course.price,
          is_stop: !course.isStop,
        },
      });
      if (result.code === 200) {
        message.success('修改成功');
        requestData();
        return;
      }
      message.error(result.message);
    };

    return {
      ...useSearch(courseData, 'name', requestData, total),
      total,
      courseData,
      columns,
      loading,
      updateCourseState,
      ...useAddCourse(requestData),
      ...useEditCourse(requestData),
    };
  },
};
</script>

<style></style>
