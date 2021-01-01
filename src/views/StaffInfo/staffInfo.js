/*
 * @Author: lts
 * @Date: 2020-12-30 22:47:49
 * @LastEditTime: 2021-01-01 10:22:41
 * @FilePath: \sale-achievement-admin\src\views\StaffInfo\staffInfo.js
 */
import { message } from 'ant-design-vue';
import { ref, onMounted } from 'vue';
import axios from '../../api'
const columns = [
    {
        title: "头像",
        dataIndex: "avatar_url",
        key: "avatar_url",
        width: '20%',
        slots: { title: "customTitle", customRender: "avatar_url" },
    },
    {
        title: "姓名",
        dataIndex: "name",
        key: "name",
        slots: { title: "customTitle", customRender: "name" },
    },
    {
        title: "工号",
        dataIndex: "id",
        key: "id",
    },
    {
        title: "微信昵称",
        dataIndex: "nickname",
        key: "nickname",
    },
    {
        title: "管理",
        key: "action",
        slots: { customRender: "action" },
    },
];

const staffInfo = () => {
    let data = ref([])
    let myData = ref([])
    let loading = ref(true)
    let visible = ref(false)
    let confirmLoading = ref(false)
    let staffId = ref('')
    let userName = ref('')
    let total = ref(1)
    const getInfo = async () => {
        const res = await axios('staff')
        if (res.code === 200) {
            res.data.forEach((item, index) => {
                item.key = (index + 1).toString()
                delete item.password
                delete item.openid
            });
            data.value = res.data
            myData.value = res.data
            loading.value = false
            total.value = data.value.length
        }
    }
    onMounted(() => {
        getInfo()

    })
    const showModal = () => {
        visible.value = true
    }
    const handleOk = async () => {
        if (userName.value.length > 0) {
            confirmLoading.value = true
            const res = await axios.post('/staff/register', { name: userName.value })
            if (res.code === 200) {
                confirmLoading.value = false
                visible.value = false
                message.success('注册成功')
                getInfo()
            } else {
                confirmLoading.value = false
                visible.value = false
                message.error('error')
            }
        } else {
            message.error('必须输入姓名')
        }

    }
    const search = () => {
        console.log(staffId.value)
        if (staffId.value.length > 0) {
            const item = myData.value.find(item => item.id == staffId.value)
            item &&  (data.value = [item])
            !item && message.error('工号不存在')
        } else {
            getInfo()
        }
    }
    const del = (record) => {
        console.log(record.id)
        const index = data.value.findIndex(item => item.id === record.id)
        data.value.splice(index, 1)
    }
    return {
        data,
        columns,
        pagination: {
            pageSize: 7,
            // total,
            showQuickJumper: true
        },
        loading,
        del,
        visible,
        showModal,
        confirmLoading,
        handleOk,
        userName,
        search,
        staffId
    }
}
export default staffInfo