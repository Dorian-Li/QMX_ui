<template>
  <div class="forbidden">
    <h1>403 Forbidden</h1>
    <p>对不起，您没有访问此页面的权限。</p>
    <el-button type="primary" @click="redirectToLogin">去登录</el-button>
  </div>
</template>

<script>
export default {
  name: 'Forbidden',
  methods: {
    redirectToLogin() {
      // 使用this.$router.push路由跳转到登录页面
      this.$router.push('/login');
    }
  }
}
</script>

<style scoped>
.forbidden {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-image: url('../assets/login/bg.jpg');
  /* 设置背景图片的其他样式，如重复、大小等 */
  background-repeat: no-repeat;
  background-size: cover;
}

h1 {
  font-size: 5rem;
  color: #f00;
}

p {
  font-size: 2rem;
  margin-top: 2rem;
  color: honeydew;
}
</style>
