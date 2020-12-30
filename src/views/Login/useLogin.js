/*
 * @Author: Mengyu Xu
 * @Date: 2020-12-30 14:26:14
 * @LastEditTime: 2020-12-30 14:37:25
 * @FilePath: \admin\src\views\Login\useLogin.js
 */
import { ref } from 'vue';
import request from '../../api';
import { useRouter } from 'vue-router';
import warnning from '../../utils/warnning';

const useLogin = () => {
  const router = useRouter();
  const staffId = ref('');
  const password = ref('');
  const loading = ref(false);

  const handleLogin = async () => {
    if (staffId.value === '' || password.value === '') {
      warnning('错误', '请填写工号和密码');
      return;
    }

    loading.value = true;
    const result = await request({
      url: 'staff/login',
      method: 'post',
      data: {
        id: staffId.value,
        password: password.value,
      },
    });
    loading.value = false;

    if (result.code === 200) {
      window.sessionStorage.setItem('token', result.token);
      window.sessionStorage.setItem('userInfo', JSON.stringify(result.data));
      router.replace('/');
      return;
    }
  };

  return { staffId, password, loading, handleLogin };
};

export default useLogin;
