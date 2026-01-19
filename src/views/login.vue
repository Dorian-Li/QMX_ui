<template>
  <div class="background" :height="fullHeight" :width="fullWidth">
    <img :src="Bg" :width="fullWidth"  alt=""/>
    <div class="front">
      <el-container>
        <el-header :style="{height:'7vh'} ">
          <div class="logo-title-container" style="width: 100%; height: 100%;">
            <img :src="bbmgLogo" class="logo"  alt="" />
          </div>
        </el-header>
        <el-main>
          <!--  用户登录容器        -->
          <div class="loginBackground" :style="{ width: '20vw', height: '40vh', position: 'relative' }">
            <!--背景  -->
            <img :src="loginbox"  alt="" />
            <span style="font-size:2vw ;">用&nbsp;&nbsp;&nbsp;户&nbsp;&nbsp;&nbsp;登&nbsp;&nbsp;&nbsp;录</span>
            <!-- 输入框+登录按钮           -->
            <div class="loginfront2" style="width: 100%; height: 80%; margin-left: 0%; margin-top: 0%; font-size: 1.2vw">
              <el-form ref="form"
                       :model="form"
                       :rules="rules"
                       class="formBox"
                       id="selectForm"
                       @keyup.enter.native="submitForm('form')">
                <el-form-item prop="name">
                  <el-input prefix-icon="el-icon-user" type="text" placeholder="用户名" v-model="form.name"
                            style="margin-top: 5%;">
                  </el-input>
                </el-form-item>

                <el-form-item prop="password">
                  <el-input prefix-icon="el-icon-lock" type="password" placeholder="密码" v-model="form.password"
                            style="margin-top: 1%;">
                  </el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary"
                             @click="submitForm('form')"
                             style="width: 90%; height: 100%; margin-left: 5%; margin-top: 0%; font-size: 1.2vw;padding: 1vw;">
                    <span style="margin-top: -5%">登 录</span>
                  </el-button>
                </el-form-item>
              </el-form>
            </div>
            <!-- 记住密码           -->
            <div class="loginfront3" style="width: 80%; height: 20%">
              <el-checkbox v-model="rememberPassword">记住密码</el-checkbox>
              <el-link type="info"  :underline="false"
                       @click="handleForgotPassword" style="font-size: 0.7vw; margin-left: 5%">忘记密码？</el-link>
            </div>
          </div>
        </el-main>

      </el-container>
    </div>
  </div>
</template>

<script>
import CryptoJS from 'crypto-js';
export default {
  name: "login",
  data(){
    return {
      //获取背景图片
      Bg: require('../assets/login/bg2.png'),
      //获取视宽和视高
      fullWidth:document.documentElement.clientWidth,
      fullHeight:document.documentElement.clientHeight,

      bbmgLogo:require('../assets/dataVis/logo.png'),
      loginbox:require('../assets/login/loginbox.png'),

      //登录表单绑定的数据
      form:{
        name:'',
        password:''
      },
      //表单项验证规则
      rules:{
        name:[
          {required:true, message:'请输入用户名', trigger:'blur'},
        ],
        password:[
          {required:true, message:'请输入密码', trigger:'blur'},
        ],
      },
      // 新增：记住密码的状态

      rememberPassword: false,
    }
  },
  mounted() {
    //监听页面+禁用滚轮缩放
    document.addEventListener('keydown', function (event) {
      if ((event.ctrlKey === true || event.metaKey === true)
        && (event.which === 61 || event.which === 107
          || event.which === 173 || event.which === 109
          || event.which === 187 || event.which === 189)) {
        event.preventDefault();
      }
    }, false);

    window.addEventListener('mousewheel', function (event) {
      if (event.ctrlKey === true || event.metaKey) {
        event.preventDefault();
      }
    }, { passive: false });

    window.addEventListener('DOMMouseScroll', function (event) {
      if (event.ctrlKey === true || event.metaKey) {
        event.preventDefault();
      }
    }, { passive: false });


    // 检查localStorage是否有保存的用户名和密码
    const savedUsername = localStorage.getItem('username');
    const savedPassword = localStorage.getItem('password');
    if (savedUsername && savedPassword) {
      this.form.name = savedUsername;
      this.form.password = savedPassword;
      this.rememberPassword = true; // 勾选“记住密码”
    }
  },
  methods:{
    //提交表单
    async submitForm(formName) {
      try {
        const response = await fetch('http://123.60.218.16:7777/user/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ userAccount: this.form.name, userPassword: this.form.password })
        });
        console.log('发送请求了',{ userAccount: this.form.name, userPassword: this.form.password })
        if (response.ok) {
          const data = await response.json();
          console.log(data)
          if (data.code === 200) {
            // 登录成功，保存token并跳转到主页
            sessionStorage.setItem('accessToken', data.data.accessToken);
            //localStorage.setItem

            // 根据rememberPassword来决定是否保存用户名和密码到localStorage
            if (this.rememberPassword) {
              localStorage.setItem('username', this.form.name);
              localStorage.setItem('password', this.form.password);
            } else {
              // 如果不选择记住密码，则清除localStorage中保存的用户名和密码
              localStorage.removeItem('username');
              localStorage.removeItem('password');
            }

            localStorage.setItem('accountName', this.form.name);
            this.$router.push({ name: 'premain', params: { accountName: this.form.name } });

          } else {
            // 显示错误消息
            this.$message({
              message:'用户名或密码错误',
              type:'warning'
            })
          }
        } else {
          // 显示错误消息
          alert('登录失败，请稍后重试');
        }
      } catch (error) {
        // 显示错误消息
        alert('登录失败，请稍后重试');
        console.error(error);
      }
    },
    //忘记密码
    handleForgotPassword() {
      // Step 1: Enter username
      this.$prompt('请输入用户名', '找回密码', {
        confirmButtonText: '下一步',
        cancelButtonText: '取消',
        inputErrorMessage: '用户名不能为空',
      })
        .then(({ value: username }) => {
          // Step 2: Send request with username
          const url = 'http://123.60.218.16:7777/user/findPassword';
          const data = {
            userAccount: username,
          };

          return fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          })
            .then(response => {
              if (!response.ok) {
                throw new Error('请求失败');
              }
              return response.json();
            })
            .then(() => {
              // Step 3: Enter verification code
              return this.$prompt('请输入邮箱中收到的验证码', '找回密码', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                inputPattern: /^[A-Za-z0-9]{6}$/,
                inputErrorMessage: '验证码格式不正确',
              });
            })
            .then(({ value: verificationCode }) => {
              // Step 4: Verify the verification code
              const url = 'http://123.60.218.16:7777/user/checkCode';
              const data = {
                userAccount: username,
                code: verificationCode,
              };

              return fetch(url, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
              })
                .then(response => {
                  if (!response.ok) {
                    this.$message.error('验证码验证失败');
                    throw new Error('验证失败');
                  }
                  return response.json();
                })
                .then(responseData => {
                  if (responseData.code === 200) {
                    // Verification code is valid, navigate to a new page to enter a new password
                    sessionStorage.setItem('accessTokenFind', responseData.data.accessToken);
                    this.$router.push('/userManage');
                  } else {
                    // Verification code is invalid
                    this.$message.error('验证码验证失败');
                    throw new Error('验证码验证失败');
                  }
                });
            })
            .catch((error) => {
              console.error(error);
              //this.$router.push('/userManage');
            });
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入',
          });
        });
    },

  }
}
</script>

<style lang="scss" scoped>
.background {
  //height: 100vh;
  height: 56.25vh; /* 9/16 的视窗高度 */
  overflow-y: auto; /* 如果内容超过屏幕高度，添加垂直滚动条 */
}
img{
  //position: fixed; /* 固定图片位置 */
  position: absolute; /* 修改为绝对定位 */
  top: 0; /* 图片距离顶部的位置 */
  left: 0; /* 图片距离左侧的位置 */
  width: 100%; /* 图片宽度占满父元素 */
  height: 100%; /* 图片高度占满父元素 */
}


.front {
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 0; //设置元素的堆叠顺序为0，即位于堆叠上下文的底部。
  position: absolute;
  display: flex;
  background-color: rgba(34, 34, 34, 0);
}
.el-header{
  background-color: rgba(52, 154, 245, 0);
  background-image: url("../assets/login/header.png") ;
  background-size: 100% 100%;
  color: #333;
  text-align: center;
  //line-height: 60px;
  line-height:6vh;
  font-size: 1vw;
}

.logo-title-container {
  display: flex;
  align-items: center;//子元素沿着交叉轴（默认是垂直轴）居中对齐
  justify-content: center;//该元素的子元素会在水平方向上居中对齐


}

.logo {
  width: 40%;
  //height: auto;
  margin-top: 0.5vh;
  height:4.5vh;
  margin-left: 29%;
  //margin-top: 0%;
  align-items: center;
}

.grid-content-title {
  border-radius: 4px;
  min-height: 36px;
  font-size: 36px;
  background: linear-gradient(to bottom, #ffff, #f8fdff, #acf5ff, #67eeff, #24d8ff);
  -webkit-background-clip: text;
  color: transparent;
  font-family: Arial;
  font-weight: bolder;
  margin-left: 5%;
}
.el-main {
  background-color: rgba(236, 28, 28, 0);
  color: honeydew;
  text-align: left;
  line-height: 30px;
}
.loginBackground{
  top:24%;
  margin-left: 70%;
  position: absolute;
  z-index: 1;
  color: white;
}
.loginBackground span {
  display: flex; /* 将span元素转换为flex容器 */
  justify-content: center; /* 水平居中文本 */
  align-items: center; /* 垂直居中文本 */
  color: honeydew; /* 设置字体颜色为蓝色 */
  padding-top: 5%;
}

.loginfront2{
  top:15%;
  z-index:2;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: transparent;
}
.loginfront3{
  right: 0;
  top: 80%;
  left: 12%; /* 向左移动100px */
  z-index: 2;
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
}
.formBox{
  left: 10%;
  right: 10%;
  top:3%;
  bottom: 0%;
  width:80%;
  height: 100%;
  position: absolute;
}

.iconLogin{
  background-color: transparent;
  color:black;
}
.el-button {
  left: 0;
  width: 100%;
  background: #0070C0;
  position: absolute;
}

.el-button span {
  position: center;
  line-height: 0;
  font-family: 等线;
  //font-size: xx-large;
}
.el-form-item {
  /* margin-bottom: 22px; */
  height: 25%;
  margin-bottom: 5%;
}
#selectForm ::v-deep .el-form-item__label{
  font-size: 1vw;
  color: honeydew;
}

.el-input ::v-deep .el-input__inner{
  background-color: rgba(255,255,255,0);
  //margin-top: 20px;
  //height: 50px;
  //height: 100%;
  color: #00B0F0;
  font-size: 1vw;
}
#selectForm ::v-deep .el-form-item__error{
  font-size: 1vw;
}
#selectForm ::v-deep  .el-form-item__label:before{
  content: '';
}

/*子组件穿透*/
/* 子组件穿透 */
::v-deep .el-checkbox__input.is-checked .el-checkbox__inner,
::v-deep .el-checkbox__input.is-indeterminate .el-checkbox__inner {
  font-size: 0.7vw;
  width: 0.7vw;
  height: 0.7vw;
}

::v-deep .el-checkbox__inner {
  font-size: 0.7vw;
}

::v-deep .el-checkbox__label {
  font-size: 0.7vw;
}

::v-deep .el-checkbox__input.is-checked .el-checkbox__inner,
::v-deep .el-checkbox__input.is-indeterminate .el-checkbox__inner {
  font-size: 0.7vw;
}

::v-deep .el-checkbox__inner:hover {
  font-size: 0.7vw;
}

::v-deep .el-checkbox__input.is-checked + .el-checkbox__label {
  font-size: 0.7vw;
}

::v-deep .el-checkbox__input.is-focus .el-checkbox__inner {
  font-size: 0.7vw;
}


</style>
