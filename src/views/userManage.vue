<template>
  <div>
    <h1>重置密码</h1>
    <form @submit="handleSubmit">
      <label for="username">用户名</label>
      <input type="text" id="username" v-model="username" required>

      <label for="password">新密码</label>
      <input type="password" id="password" v-model="password" required>

      <label for="confirmPassword">确认密码</label>
      <input type="password" id="confirmPassword" v-model="confirmPassword" required>

      <button type="submit">确认</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "userManage",
  data() {
    return {
      username: '',
      password: '',
      confirmPassword: ''
    };
  },
  methods: {
    handleSubmit(event) {
      event.preventDefault();

      if (this.password !== this.confirmPassword) {
        alert('新密码和确认密码不一致');
        return;
      }

      const url = 'http://123.60.218.16:7777/user/updatePassword';
      const logoutUrl = 'http://123.60.218.16:7777/user/logout';

      const requestData = {
        userAccount: this.username,
        userPassword: this.password,
        checkPassword: this.confirmPassword
      };

      const accessToken = sessionStorage.getItem('accessTokenFind');
      console.log('token是', accessToken);

      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
          'Authorization': `Bearer ${accessToken}`
        },
        body: JSON.stringify(requestData)
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('请求失败');
          }

          // Send the logout request to clear the login state on the server
          return fetch(logoutUrl, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json; charset=UTF-8',
              'Authorization': `Bearer ${accessToken}`
            }
          });
        })
        .then(() => {
          // Remove the access token from sessionStorage
          sessionStorage.removeItem('accessTokenFind');

          alert('密码修改成功');
          this.username = '';
          this.password = '';
          this.confirmPassword = '';
          setTimeout(() => {
            this.$router.push('/login');
          }, 3000);
        })
        .catch(error => {
          alert('密码修改失败：' + error.message);
        });
    },
  }
}
</script>

<style scoped>

</style>
