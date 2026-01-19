<template>
  <div class="not-found">
    <h1>404 Not Found</h1>
    <p>对不起，您访问的页面不存在。</p>
  </div>
</template>

<script>
export default {
  name: 'notFound'
}
</script>

<style scoped>
.not-found {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

h1 {
  font-size: 5rem;
  color: #f00;
}

p {
  font-size: 2rem;
  margin-top: 2rem;
}
</style>
