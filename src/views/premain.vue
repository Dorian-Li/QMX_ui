<template>
  <div class="background" :height="fullHeight" :width="fullWidth">
    <img :src="mainBg" :width="fullWidth"    alt=""/>
    <div class="front">
      <el-container style="height: 100%;">
        <el-header  style="font-size: 1vw; height: 7vh ">
          <el-row>
            <el-col :span="5">
              <div class="grid-content bg-clear"></div>
            </el-col>
            <el-col :span="12">
              <!--Logo 标题   -->
              <div class="logo-title-container">
                <img :src="bbmgLogo" class="logo" alt="" />

              </div>
            </el-col>
            <el-col :span="5"><div class="grid-content-time">
              {{nowTime}}
            </div></el-col>

            <el-col :span="1">
              <div class="grid-content bg-clear">
                <div class="parent-element">
                  <div class="user" @click="showDialog = true">
                    <i class="el-icon-s-custom"></i>
                  </div>

                  <!-- el-dialog 组件放置在 user 图标所在的父元素内 -->
                  <el-dialog class="custom-dialog"
                             :visible.sync="showDialog"
                             center
                             :modal="false"> <!-- 禁用模态框效果 -->
                    <p class="user-name">姓名：{{getAccountName()}}</p>
                    <p class="user-name">账号：{{ accountName }}</p>
                    <el-button  class="custom-button" @click="changeCode">修改密码</el-button>
                    <!-- 节能监测按钮 -->
                    <el-button  class="custom-button" @click="logout">退出登录</el-button>
                  </el-dialog>
                  <!-- 重置密码弹窗    -->
                  <el-dialog title="重置密码"
                             :visible.sync="showchangeCodeDialog"
                             :modal="false"
                             class="changCode-dialog">
                    <form @submit="handleSubmit" >
                      <div >
                        <div class="form-row">
                          <label for="username" class="changCodelabel">用户名:</label>
                          <input type="text" id="username" v-model="username" required>
                        </div>
                        <div class="form-row">
                          <label for="password" class="changCodelabel">新密码:</label>
                          <input type="password" id="password" v-model="password" required>
                        </div>
                        <div class="form-row">
                          <label for="confirmPassword" class="changCodelabel" >确认密码:</label>
                          <input type="password" id="confirmPassword" v-model="confirmPassword" required>
                        </div>
                        <div class="form-row">
                          <button type="submit" >确认</button></div>
                      </div>
                    </form>

                  </el-dialog>
                </div>
              </div>
            </el-col>
          </el-row>
        </el-header>

        <el-container style="height: 90%;">
          <el-aside class="aside1" :style="{ height: '93vh', width:'30%'}">
            <!--  建筑信息卡片-->
            <el-card class="box-card2" :style="{ height: '22vh',position: 'relative' }">
              <div slot="header" class="clearfix">
                <span> 建筑信息</span>
              </div>
              <el-row style="margin-left: 2vw">
                <el-col :span="5"><div class="Tep-icon2 bg-clear"></div></el-col>
                <el-col :span="4">
                  <div class="info-text1">公建</div>
                </el-col>
                <el-col :span="6"><div class="grid-content bg-clear info_building1">
                  <div class="info-num">2 <span class="top-unit">个</span></div>
                </div></el-col>
                <el-col :span="6"><div class="grid-content bg-clear info_building1">
                  <div class="info-num">2091 <span class="top-unit">㎡</span></div>
                </div></el-col>
              </el-row>
              <el-row style="margin-left: 2vw">
                <el-col :span="5"><div class="Tep-icon bg-clear"></div></el-col>
                <el-col :span="4"><div class="grid-content bg-clear">
                  <div class="info-text11">居建</div>
                </div></el-col>
                <el-col :span="6"><div class="grid-content bg-clear info_building1">
                  <div class="info-num">1 <span class="top-unit">个</span></div>
                </div></el-col>
                <el-col :span="6"><div class="grid-content bg-clear info_building1">
                  <div class="info-num">5792 <span class="top-unit">㎡</span></div>
                </div></el-col>
              </el-row>
            </el-card>
            <!-- 室外环境-->
            <el-card class="box-card-outdoor" :style="{ height: '30vh',position: 'relative' }">
              <div slot="header" class="clearfix" >
                <span> 室外环境</span>
              </div>
              <el-row style="margin-left: 2vw;margin-top:1vh" >
                <el-col :span="3"><div class="shidu-icon bg-clear" ></div></el-col>
                <el-col :span="3"><div class="grid-content bg-clear info_building" >
                  <div class="outdoor-num">{{this.outdoors.tem}}&nbsp;<span class="top-unit">℃</span></div>
                  <div class="info-text12">温度</div>
                </div></el-col>
                <el-col :span="3"><div class="wendu-icon bg-clear"></div></el-col>
                <el-col :span="4"><div class="grid-content bg-clear info_building">
                  <div class="outdoor-num">{{this.outdoors.humidity}}&nbsp;<span class="top-unit">%</span></div>
                  <div class="info-text13">湿度</div>
                </div></el-col>
                <el-col :span="3"><div class="pm25-icon bg-clear"></div></el-col>
                <el-col :span="6"><div class="grid-content bg-clear info_building">
                  <div class="outdoor-num">{{this.outdoors.pm25}}&nbsp;<span class="top-unit">μg/m³</span></div>
                  <div class="info-text14">PM2.5</div>
                </div></el-col>
              </el-row>
              <el-row style="margin-left:2vw">
                <el-col :span="3"><div class="aqi-icon bg-clear" ></div></el-col>
                <el-col :span="3"><div class="grid-content bg-clear info_building">
                  <div class="outdoor-num">{{this.outdoors.aqi}}&nbsp;<span class="top-unit">&nbsp;</span></div>
                  <div class="info-text12">AQI</div>
                </div></el-col>
                <el-col :span="3"><div class="zwx-icon bg-clear"></div></el-col>
                <el-col :span="4"><div class="grid-content bg-clear info_building">
                  <div class="outdoor-num1">{{this.outdoors.uv}}&nbsp;</div>
                  <div class="info-text13">紫外线强度</div>
                </div></el-col>
                <el-col :span="3"><div class="feng-icon bg-clear"></div></el-col>
                <el-col :span="6"><div class="grid-content bg-clear info_building">
                  <div class="outdoor-num1">{{this.outdoors.win}}{{this.outdoors.win_speed}}级</div>
                  <div class="info-text14">风向风力</div>
                </div></el-col>
              </el-row>
            </el-card>
            <!-- 室内环境卡片 -->
            <el-card class="box-card3" :style="{ height: '35vh', position: 'relative'}">
              <div slot="header" class="clearfix" >
                <span > 室内环境</span>
              </div>
              <el-row style="margin-top: 1vh">
                <el-col :span="6"><div class="grid-content bg-clear"></div></el-col>
                <el-col :span="4">
                  <div class="grid-content bg-clear left-buttons">
                    <button class="qiehuan-button-left" @click="switchBuildingLeft">
                      <i class="el-icon-caret-left"></i>
                    </button>
                  </div></el-col>
                <el-col :span="4"><div class="bdName grid-content bg-clear">
                  {{environsData.Name}}
                </div></el-col>
                <el-col :span="4">
                  <div class="grid-content bg-clear right-buttons">
                    <button class="qiehuan-button-right" @click="switchBuildingright">
                      <i class="el-icon-caret-right"></i>
                    </button>
                  </div></el-col>
                <el-col :span="6"><div class="grid-content bg-clear"></div></el-col>
              </el-row>
              <el-row>
                <el-col :span="6"><div class="Tep-circle grid-content bg-clear ">
                  <div class="info-num1">
                    <span style="display: block;text-align: center;">{{environsData.temp}}</span>
                    <span style="display: block; font-size: 0.6vw; text-align: center;" >℃</span>
                  </div>
                </div></el-col>
                <el-col :span="6"><div class="Hum-circle grid-content bg-clear ">
                  <div class="info-num1">
                    <span style="display: block;text-align: center;">{{environsData.hum}}</span>
                    <span style="display: block; font-size: 0.6vw; text-align: center;" >%</span>
                  </div>
                </div></el-col>
                <el-col :span="6"><div class="CO2-circle grid-content bg-clear ">
                  <div class="info-num1">
                    <span style="display: block;text-align: center;">{{environsData.co2}}</span>
                    <span style="display: block; font-size: 0.6vw; text-align: center;" >ppm</span>
                  </div>
                </div></el-col>
                <el-col :span="6"><div class="Pm25-circle grid-content bg-clear ">
                  <div class="info-num1">
                    <span style="display: block;text-align: center;">{{environsData.pm25}}</span>
                    <span style="display: block; font-size: 0.6vw; text-align: center;" >μg/m³</span>
                  </div>
                </div></el-col>
              </el-row>
              <el-row>
                <el-col :span="6"><div class="grid-content bg-clear info-name">
                  <div >温度</div>
                </div></el-col>
                <el-col :span="6"><div class="grid-content bg-clear info-name">
                  <div >湿度</div>
                </div></el-col>
                <el-col :span="6"><div class="grid-content bg-clear info-name">
                  <div >CO₂</div>
                </div></el-col>
                <el-col :span="6"><div class="grid-content bg-clear info-name">
                  <div >PM2.5</div>
                </div></el-col>
              </el-row>
            </el-card>
          </el-aside>
          <el-container>
            <el-main>
              <!--   平台切换按钮   -->
              <el-row :gutter="2" style="margin-top: 1vh">
                <el-col :span="8">
                  <el-button class="top-button" @click="Jump2">金海燕办公楼</el-button>
                </el-col>
                <el-col :span="8">
                  <el-button class="top-button" @click="Jump1">兴发展厅</el-button>

                </el-col>
                <el-col :span="8">
                  <el-button class="top-button" @click="Jump3">西砂公寓</el-button>

                </el-col>
              </el-row>
              <el-row :gutter="2" style="margin-top: 2vh;">
                <el-col :span="8">
                  <div class="top-text1">
                    <span class="top-name">今日能耗:</span>
                    <span class="top-number">{{diansData2.totalPowerJHY}} </span><span class="top-unit">kWh</span>
                  </div>
                </el-col>
                <el-col :span="8">
                  <div class="top-text1">
                    <span class="top-name">今日能耗:</span>
                    <span class="top-number">{{diansData2.totalPowerXF}} </span><span class="top-unit">kWh</span>
                  </div>

                </el-col>
                <el-col :span="8">
                  <div class="top-text1">
                    <span class="top-name">今日能耗:</span>
                    <span class="top-number">{{diansData2.totalPowerXS}} </span><span class="top-unit">kWh</span>
                  </div>

                </el-col>
              </el-row>
              <el-row :gutter="2" >
                <el-col :span="8">
                  <div class="grid-content bg-clear">
                    <div class="top-text">
                      <span class="top-name">昨日同期环比：</span>
                      <span v-if="diansData2.ratioJHY !== '— —'" class="top-number1">{{diansData2.ratioJHY}}<span class="top-unit">%</span>
                        <i v-if="diansData2.ratioJHY < 0" class="el-icon-caret-bottom green-arrow"></i>
                        <i v-else-if="diansData2.ratioJHY > 0" class="el-icon-caret-top red-arrow"></i>
                      </span>
                      <span v-else class="top-number1">
                          {{ diansData2.ratioJHY }}
                      </span>
                    </div>
                  </div>
                </el-col>
                <el-col :span="8">
                  <div class="grid-content bg-clear">
                    <div class="top-text">
                      <span class="top-name">昨日同期环比：</span>
                      <span v-if="diansData2.ratioXF !== '— —'" class="top-number1">
                        {{ diansData2.ratioXF }} <span class="top-unit">%</span>
                        <i v-if="diansData2.ratioXF < 0" class="el-icon-caret-bottom green-arrow"></i>
                        <i v-else-if="diansData2.ratioXF > 0" class="el-icon-caret-top red-arrow"></i>
                      </span>
                      <span v-else class="top-number1">
                          {{ diansData2.ratioXF }}
                      </span>
                    </div>
                  </div>
                </el-col>
                <el-col :span="8">
                  <div class="grid-content bg-clear">
                    <div class="top-text">
                      <span class="top-name">昨日同期环比：</span>
                      <span v-if="diansData2.ratioXS !== '— —'" class="top-number1">{{diansData2.ratioXS}}<span class="top-unit">%</span>
                        <i v-if="diansData2.ratioXS < 0" class="el-icon-caret-bottom green-arrow"></i>
                        <i v-else-if="diansData2.ratioXS > 0" class="el-icon-caret-top red-arrow"></i>
                      </span>
                      <span v-else class="top-number1">
                          {{ diansData2.ratioXS }}
                      </span>
                    </div>
                  </div>
                </el-col>
              </el-row>
              <!--   主页地图   -->
              <div class="mapContainer" :style="{ height: '70%', width:'36%'}">
                <img :src="mapBeijing"    alt=""/>
              </div>

            </el-main>
          </el-container>
          <el-aside class="aside2" :style="{ height: '100%', width:'30%'}">
            <!--  能耗监测卡片-->
            <el-card class="box-card-right1" :style="{ height: '24vh',position: 'relative' }">
              <div slot="header" class="clearfix" >
                <span>能耗监测</span>
                <div class="header-button">
                  <el-image :src="sheZhi" @click="toggleContent"></el-image>
                </div>
              </div>
              <!--  能耗显示-->
              <div v-if="!showSettings">
                <el-row>
                  <el-col :span="6"><div class="grid-content bg-clear"></div></el-col>
                  <el-col :span="4">
                    <div class="grid-content bg-clear left-buttons">
                      <button class="qiehuan-button-left" @click="switchBuildingLeft">
                        <i class="el-icon-caret-left"></i>
                      </button>
                    </div></el-col>
                  <el-col :span="4"><div class="bdName grid-content bg-clear">
                    {{ diansData.Name }}
                  </div></el-col>
                  <el-col :span="4">
                    <div class="grid-content bg-clear right-buttons">
                      <button class="qiehuan-button-right" @click="switchBuildingright">
                        <i class="el-icon-caret-right"></i>
                      </button>

                    </div></el-col>
                  <el-col :span="6"><div class="grid-content bg-clear"></div></el-col>
                </el-row>
                <el-row :gutter="2" style="margin-left:2vw">
                  <el-col :span="9"><div class="dianName grid-content bg-clear">
                    年累计电量
                  </div></el-col>
                  <el-col :span="7"><div class="dianName grid-content bg-clear">
                    碳排
                  </div></el-col>
                  <el-col :span="7"><div class="dianName grid-content bg-clear">
                    标煤
                  </div></el-col>
                </el-row>
                <el-row :gutter="2" style="margin-left: 2vw">
                  <el-col :span="9">
                    <div class="grid-content bg-clear">
                      <div class="top-text2">
                        <div class="numName">{{ diansData.dian }}<span class="top-unit">kWh</span></div>
                      </div>
                    </div>
                  </el-col>
                  <el-col :span="7">
                    <div class="grid-content bg-clear">
                      <div class="top-text2">
                        <div class="numName2">{{ diansData.co2 }}<span class="top-unit">kg</span></div>

                      </div>
                    </div>
                  </el-col>
                  <el-col :span="7">
                    <div class="grid-content bg-clear">
                      <div class="top-text2">
                        <div class="numName1">{{ diansData.mei }} <span class="top-unit">kg</span></div>
                      </div>
                    </div>
                  </el-col>
                </el-row>
              </div>
              <!--   能耗因子设置-->
              <div v-else>
                <el-row style="margin-top: 1vh">
                  <el-col :span="4">
                    <div class="grid-content bg-clear"></div>
                  </el-col>
                  <el-col :span="4">
                    <div class="grid-content bg-clear factor_set">
                      <div class="factor-label">标煤因子</div>
                    </div>
                  </el-col>
                  <el-col :span="1">
                    <div class="grid-content bg-clear"></div>
                  </el-col>
                  <el-col :span="8">
                    <div class="grid-content bg-gray">
                      <el-input placeholder="请输入" v-model="inputMei"></el-input>
                    </div>
                  </el-col>
                </el-row>
                <el-row :gutter="2">
                  <el-col :span="4">
                    <div class="grid-content bg-clear"></div>
                  </el-col>
                  <el-col :span="4">
                    <div class="grid-content bg-clear factor_set">
                      <div class="factor-label">碳排因子</div>
                    </div>
                  </el-col>
                  <el-col :span="1">
                    <div class="grid-content bg-clear"></div>
                  </el-col>
                  <el-col :span="8">
                    <div class="grid-content bg-gray">
                      <el-input placeholder="请输入" v-model="inputCo2"></el-input>
                    </div>
                  </el-col>
                </el-row>

                <el-row :gutter="2">
                  <el-col :span="24">
                    <div class="grid-content bg-clear confirm-text-right">
                      <el-button @click="confirmSettings">确认</el-button>
                    </div>
                  </el-col>
                </el-row>
              </div>
            </el-card>
            <el-card class="box-card-right2" :style="{ height:' 30vh',position: 'relative' }">
              <div slot="header" class="clearfix" >
                <span> 节能统计</span>
              </div>
              <div class="draw-picture-pie" id="dian-part-pie"  style="width: 95%;height: 100%;" alt=""/>
            </el-card>
            <el-card class="box-card-right3" :style="{ height: '30vh',position: 'relative' }">
              <div slot="header" class="clearfix" >
                <span > 用能趋势</span>
              </div>
              <div class="draw-picture-pie" id="dian-fiveDay"  style="width: 95%;height: 100%;" alt=""/>

            </el-card>
          </el-aside>
        </el-container>
      </el-container>
    </div>
  </div>


</template>

<script >
import * as echarts from 'echarts'
import axios from "axios";

export default {
  name: "premian",
  data(){
    const yesterday = new Date(); // 获取当前日期
    yesterday.setDate(yesterday.getDate() - 1); // 设置为前一日日期
    return{
      accountName: '',
      outdoors:{},
      showSettings: false, // 默认不显示设置因子内容
      inputCo2:'0.5703',
      inputMei:'0.1229',

      selectedDate: yesterday, // 默认选择前一日日期
      pickerOptions: {
        disabledDate(time) {
          // 禁止选择今日及以后的日期
          return time.getTime() > Date.now();
        }
      },
      showDialog:false,  //用户信息框
      totalCarbon:0,
      xingfaCarbon:0,
      jinhaiyanCarbon:0,
      xishaCarbon:0,
      BASE_URL: "http://123.60.218.16:7777/index/",
      fullWidth:document.documentElement.clientWidth,
      fullHeight:document.documentElement.clientHeight,
      //bgSrc:require('../assets/login/background.png'),
      headerBg:require('../assets/dataVisualization/headerBg2.png'),
      mapBeijing: require('../assets/dataVis/mapBeijing5.png'),
      mainBg:require('../assets/dataVis/bgClearLow.jpg'),
      // bbmgLogo:require('../assets/login/BBMG.png'),
      bbmgLogo:require('../assets/dataVis/logo.png'),
      sheZhi:require('../assets/premain/sheZhi.png'),
      mainBox:require('../assets/premain/mainBox.png'),
      carouselIndex:0,
      intervalTime:10,
      nowTime:'',


      isInfoWindowOpen: false,
      infoWindowPosition: { lng: 0, lat: 0 },
      infoWindowTitle: '',
      infoWindowContent: '',
      //重置密码
      showchangeCodeDialog: false,
      username: '',
      password: '',
      confirmPassword: '',
      //环境表信息
      environsData:{},
      countQiehuan: 999,
      //电表信息
      diansData:{},
      countQiehuan2: 999,
      //中间的电表每日信息 以及箭头情况
      diansData2:{
        totalPowerJHY:121,
        totalPowerXS:116,
        totalPowerXF:118.1,
        ratioJHY:16,
        ratioXS:-8,
        ratioXF:33
      },
      barChart: null, //柱状图图例
      //电表信息   饼图
      energyData:{},
      pieChart: null, //柱状图图例


    }
  },
  created(){
    window.addEventListener('resize', this.handleResize);
    if (this.$route.params.accountName) {
      // 如果存在账号名参数，直接使用该参数
      this.accountName = this.$route.params.accountName;
    } else {
      // 否则，尝试从 localStorage 中获取保存的账号名
      const storedAccountName = localStorage.getItem('accountName');
      if (storedAccountName) {
        this.accountName = storedAccountName;
      }
    }

  },
  beforeDestroy: function () {
    window.removeEventListener('resize', this.handleResize)
  },
  mounted() {

    window.addEventListener('resize', this.handleResize);

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


    let that = this
    this.timer = setInterval(function (){
      that.newDate = new Date().toLocaleString()
    })
    this.drawBar('light-bar')
    this.drawPie('dian-part-pie')
    this.drawBarFiveDay('dian-fiveDay')
    this.getNowTime();
    this.switchBuildingLeft();
    this.switchBuildingright();
    this.switchBuilding3();
    this.getOutdoor();
    // 每隔15分钟更新一次柱状图和饼图
    setInterval(() => {
      this.drawBar('light-bar')
      this.drawPie('dian-part-pie')
      this.drawBarFiveDay('dian-fiveDay')
      this.switchBuilding3();
    }, 15 * 60 * 1000);





  },
  watch: {
    selectedDate(newVal, oldVal) {
      this.handleDateClick(newVal); // 在选择日期变化时触发处理函数
    }
  },
  methods: {
    // 添加 resize 事件监听器以确保在窗口大小改变时更新图表
    handleResizeEcharts() {
      if (this.pieChart) {
        this.pieChart.resize();
      }
    },

    getAccountName() {
      if (this.accountName === 'admin') {
        return '一级管理员';
      } else if (this.accountName === 'C') {
        return '普通用户';
      } else {
        return '二级管理员';
      }
    },
    //我的key是f8763456718a4392a15abb900608c618
    getOutdoor(){
      console.log('准备发送室外天气请求')
      axios.get(`https://devapi.qweather.com/v7/air/now?location=101010100&key=cf386d2b7df444e6b29e8487c49106f0`, {
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
        }
      }).then(response => {
        console.log('室外天气数据是', response.data);
        this.outdoors.aqi = response.data.now.aqi;
        this.outdoors.pm25 = response.data.now.pm2p5;
      }).catch(error => {
        console.error(error);
      });
      axios.get(`https://devapi.qweather.com/v7/weather/now?location=101010100&key=cf386d2b7df444e6b29e8487c49106f0`, {
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
        }
      }).then(response => {
        console.log('室外天气数据是', response.data);
        this.outdoors.humidity = response.data.now.humidity;
        this.outdoors.tem = response.data.now.temp;
        this.outdoors.win = response.data.now.windDir;
        this.outdoors.win_speed = response.data.now.windScale;
      }).catch(error => {
        console.error(error);
      });
      axios.get(`https://devapi.qweather.com/v7/indices/1d?location=101010100&key=cf386d2b7df444e6b29e8487c49106f0&type=5`, {
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
        }
      }).then(response => {
        console.log('室外天气数据是', response.data);
        this.outdoors.uv = response.data.daily[0].category;
      }).catch(error => {
        console.error(error);
      });
    },
    //修改密码
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


    toggleContent() {
      this.showSettings = !this.showSettings;
    },
    // 计算视口宽度高度并转换为像素值
    calculateFontSize(vw) {return (vw / 100) * document.documentElement.clientWidth;},
    calculateFontSize1(vh) {return (vh / 100) * document.documentElement.clientHeight;
    },
    confirmSettings() {
      this.switchBuildingright();
      //this.drawDianYesterdayBar();
      // ...
      this.showSettings = false; // 隐藏设置因子内容
    },
    //获取实时环境数据
    async getEnvironsData() {
        const accessToken = sessionStorage.getItem('accessToken');
        const response = await axios.get(`${this.BASE_URL}environs`, {
          headers: {
            'Content-Type': 'application/json; charset=UTF-8',
            'Authorization': `Bearer ${accessToken}`
          }
        });
        if (response.status === 200) {
          const data = response.data;
          if (data.code === 200) {
            console.log('获取当前环境表信息的数', data.data);
            for (let i = 0; i < data.data.length; i++) {
              const item = data.data[i];
              if (item.projectName === 'jinhaiyan') {
                this.environsData.NameJHY = '金海燕';
                this.environsData.tempJHY = item.temperature;
                this.environsData.humJHY = item.humidity;
                this.environsData.pm25JHY = item.pm25;
                this.environsData.co2JHY = item.co2;
              } else if (item.projectName === 'xingfa') {
                this.environsData.NameXF = '兴发';
                this.environsData.tempXF = item.temperature;
                this.environsData.humXF = item.humidity;
                this.environsData.pm25XF = item.pm25;
                this.environsData.co2XF = item.co2;
              } else if (item.projectName === 'xisha') {
                this.environsData.NameXS = '西砂';
                this.environsData.tempXS = item.temperature;
                this.environsData.humXS = item.humidity;
                this.environsData.pm25XS = item.pm25;
                this.environsData.co2XS = item.co2;
              }
            }
          } else if (data.code === 40102) {
            this.$router.push('/403'); // 返回HTTP状态码403
          } else {
            console.log('获取分项用电量失败:', response.data.msg);
          }
        }
      },
    //获取实时能耗数据
    async getPowerData() {
        const accessToken = sessionStorage.getItem('accessToken');
        const response = await axios.get(`${this.BASE_URL}curYearElect`, {
          headers: {
            'Content-Type': 'application/json; charset=UTF-8',
            'Authorization': `Bearer ${accessToken}`
          }
        });
        if (response.status === 200) {
          const data = response.data;
          if (data.code === 200) {
            for (let i = 0; i < data.data.length; i++) {
              const item = data.data[i];
              if (item.projectName === 'jinhaiyan') {
                this.diansData.NameJHY = '金海燕';
                this.diansData.totalPowerJHY = Math.round(item.totalPower);
              } else if (item.projectName === 'xingfa') {
                this.diansData.NameXF = '兴发';
                this.diansData.totalPowerXF = item.totalPower;
              } else if (item.projectName === 'xisha') {
                this.diansData.NameXS = '西砂';
                this.diansData.totalPowerXS = item.totalPower;
              }
            }
          } else if (data.code === 40102) {
            this.$router.push('/403'); // 返回HTTP状态码403
          } else {
            console.log('获取分项用电量失败:', response.data.msg);
          }
        }
      },
    updateData() {
      if (this.countQiehuan % 3 === 0) {
        this.environsData.Name = this.environsData.NameJHY;
        this.environsData.temp = this.environsData.tempJHY;
        this.environsData.hum = this.environsData.humJHY;
        this.environsData.pm25 = this.environsData.pm25JHY;
        this.environsData.co2 = this.environsData.co2JHY;
        this.diansData.Name = this.diansData.NameJHY;
        this.diansData.dian = this.diansData.totalPowerJHY;
      } else if (this.countQiehuan % 3 === 1) {
        this.environsData.Name = this.environsData.NameXF;
        this.environsData.temp = this.environsData.tempXF;
        this.environsData.hum = this.environsData.humXF;
        this.environsData.pm25 = this.environsData.pm25XF;
        this.environsData.co2 = this.environsData.co2XF;
        this.diansData.Name = this.diansData.NameXF;
        this.diansData.dian = this.diansData.totalPowerXF;
      } else if (this.countQiehuan % 3 === 2) {
        this.environsData.Name = this.environsData.NameXS;
        this.environsData.temp = this.environsData.tempXS;
        this.environsData.hum = this.environsData.humXS;
        this.environsData.pm25 = this.environsData.pm25XS;
        this.environsData.co2 = this.environsData.co2XS;
        this.diansData.Name = this.diansData.NameXS;
        this.diansData.dian = this.diansData.totalPowerXS;
      }
      this.diansData.mei = Math.round(this.diansData.dian * this.inputMei);
      this.diansData.co2 = Math.round(this.diansData.dian * this.inputCo2);
    },
    async switchBuildingLeft() {
        this.countQiehuan -= 1;
        try {
          await Promise.all([this.getEnvironsData(), this.getPowerData()]);
          this.updateData();
        } catch (error) {
          console.log(error);
        }
      },
    async switchBuildingright() {
      this.countQiehuan += 1;
      try {
        await Promise.all([this.getEnvironsData(), this.getPowerData()]);
        this.updateData();
      } catch (error) {
        console.log(error);
      }
    },

    async switchBuilding3(){
      // console.log('222222222222222调用检查');
      try {
        const accessToken = sessionStorage.getItem('accessToken');
        const response = await axios.get(`${this.BASE_URL}electsDifByHour`, {
          headers: {
            'Content-Type': 'application/json; charset=UTF-8',
            'Authorization': `Bearer ${accessToken}`
          }
        });
        // console.log('222222222222222发请求检查');
        // console.log('222222222222222发请求检查',response);
        if (response.status === 200){
          if (response.data.code === 200) {
            for (let i = 0; i < response.data.data.length; i++) {
              const item = response.data.data[i];
              console.log('222222222222222222222222222222222',response.data)
              if (item.projectName=='jinhaiyan'){
                this.diansData2.totalPowerJHY = Math.round(item.curElect);
                if (item.ratio == '-1000' ){
                  this.diansData2.ratioJHY = '— —'
                } else{
                  this.diansData2.ratioJHY = (item.ratio * 100).toFixed(2);
                }
                //this.diansData2.ratioJHY = (item.ratio * 100).toFixed(2);



              } else if(item.projectName=='xingfa'){
                this.diansData2.totalPowerXF = Math.round(item.curElect);
                if (item.ratio == '-1000' ){
                  this.diansData2.ratioXF = '— —'
                } else{
                  this.diansData2.ratioXF = (item.ratio * 100).toFixed(2);
                }
                //this.diansData2.ratioXF = (item.ratio * 100).toFixed(2);
              }else if(item.projectName=='xisha'){
                this.diansData2.totalPowerXS = Math.round(item.curElect);
                if (item.ratio == '-1000' ){
                  this.diansData2.ratioXS = '— —'
                } else{
                  this.diansData2.ratioXS = (item.ratio * 100).toFixed(2);
                }
                //this.diansData2.ratioXS = (item.ratio * 100).toFixed(2);
              }
            }
          } else if (data.code === 40102){
            this.$router.push('/403'); // 返回HTTP状态码403
          } else{
            console.log('获取分项用电量失败:', response.data.msg);
          }
        }
      } catch (error) {
        console.log(error);
      }

    },
    logout() {
      // 执行退出登录操作
      // 使用Vue Router进行页面跳转到登录页面
      this.$router.push({ path: '/login' });
    },
    changeCode() {
      this.showchangeCodeDialog=true;
    },
    handler({BMap,map}){
      map.setMapStyleV2({
        //styleId: 'c7fd01e0271dd6a7d6acadce994329bf'  //绿野仙踪
        styleId:'fa29a58b0d38dbe4a14036204a0e9c9c'     //深色模式

      })
    },
    showMarkerInfoWindow(position, title, content) {
      this.isInfoWindowOpen = true;
      this.infoWindowPosition = position;
      this.infoWindowTitle = title;
      this.infoWindowContent = content;
    },
    hideMarkerInfoWindow() {
      this.isInfoWindowOpen = false;
    },

    handleResize (event) {
      this.fullWidth = document.documentElement.clientWidth
      this.fullHeight = document.documentElement.clientHeight
    },
    Jump1 () {
      //this.$router.push('https://www.wanjunshijie.com/demo/zhihuigongyeyuan/#/')
      //this.$router.push({name:'dataVisualization',params:{name:this.form.name}});
      this.$message('跳转到 兴发 监控界面' );
      this.$router.push('/dataVis/dataVisualization/1')
    },
    Jump2 () {
      //this.$router.push('https://www.wanjunshijie.com/demo/zhihuigongyeyuan/#/')
      //this.$router.push({name:'dataVisualization',params:{name:this.form.name}});
      this.$message('跳转到 金海燕 监控界面' );
      this.$router.push('/dataVis/dataVisJinhy/1')
    },
    Jump3 () {
      //this.$router.push('https://www.wanjunshijie.com/demo/zhihuigongyeyuan/#/')
      //this.$router.push({name:'dataVisualization',params:{name:this.form.name}});
      this.$message('跳转到 西砂 监控界面' );
      this.$router.push('/dataVis/dataVisXisha/1')
    },
    getNowTime () {
      let speed = 1000
      let that = this
      let theNowTime = function () {
        that.nowTime = that.timeNumber()
      }
      setInterval(theNowTime, speed)
    },
    timeNumber () {
      let today = new Date()
      let date = today.getFullYear() + '-' + this.twoDigits(today.getMonth() + 1) + '-' + this.twoDigits(today.getDate())
      let time = this.twoDigits(today.getHours()) + ':' + this.twoDigits(today.getMinutes()) + ':' + this.twoDigits(today.getSeconds())
      return date + '  ' + time
    },
    twoDigits (val) {
      if (val < 10) return '0' + val
      return val
    },
    handleDateClick(date) {
      console.log('点击了');
      if (this.disableDates(date)) {
        return;
      }
      this.selectedDate = date;
      // 将选中的日期传给后端
      console.log('获取日期是', this.formatDate(this.selectedDate));
      this.drawPie('dian-part-pie');
    },
    disableDates(date) {
      const today = new Date().setHours(0, 0, 0, 0);
      return date >= today;
    },
    formatDate(date) {
      const year = date.getFullYear();
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      const day = date.getDate().toString().padStart(2, '0');
      return `${year}-${month}-${day}`;
    },
    //获取三个典型房间的环境表信息函数
    async drawBar(id){
      try {
        const accessToken = sessionStorage.getItem('accessToken');
        const response = await axios.get(`${this.BASE_URL}environs`, {
          headers: {
            'Content-Type': 'application/json; charset=UTF-8',
            'Authorization': `Bearer ${accessToken}`
          }
        });
        if (response.status === 200){
          const data = response.data
          if (data.code === 200) {
            console.log('获取当前环境表信息的数',data.data);
            // 更新分项用电量数据
            this.environsData.tempJHY = data.data.jinhaiyanCur.temperature;
            this.environsData.humJHY = data.data.jinhaiyanCur.humidity;
            this.environsData.pm25JHY = data.data.jinhaiyanCur.pm25;
            this.environsData.co2JHY = data.data.jinhaiyanCur.co2;
            this.environsData.tempXF = data.data.xingfaCur.temperature;
            this.environsData.humXF = data.data.xingfaCur.humidity;
            this.environsData.pm25XF = data.data.xingfaCur.pm25;
            this.environsData.tempXS = data.data.xishaCur.temperature;
            this.environsData.humXS = data.data.xishaCur.humidity;
            this.environsData.pm25XS = data.data.xishaCur.pm25;

          } else if (data.code === 40102){
            this.$router.push('/403'); // 返回HTTP状态码403
          } else{
            console.log('获取分项用电量失败:', response.data.msg);
          }
        }
      } catch (error) {
        console.log(error);
      }

    },
    async drawPie(id){
      try {
        const accessToken = sessionStorage.getItem('accessToken');
        const response = await axios.get(`${this.BASE_URL}energySave`, {
          headers: {'Content-Type': 'application/json; charset=UTF-8',
            'Authorization': `Bearer ${accessToken}`}
        });
        let energySaveData = {};
        if (response.status === 200){
          const data = response.data
          console.log('获取节能率返回的数：',response.data)
          if (data.code === 200) {
            energySaveData.jinhaiyanSave = response.data.data[0].energySave;
            energySaveData.xingfaSave = response.data.data[1].energySave;
            energySaveData.xishaSave = response.data.data[2].energySave;
            energySaveData.jinhaiyanSaveRatio = response.data.data[0].energySaveRatio;
            energySaveData.xingfaSaveRatio = response.data.data[1].energySaveRatio;
            energySaveData.xishaSaveRatio = response.data.data[2].energySaveRatio;

          } else if (data.code === 40102){
            this.$router.push('/403'); // 返回HTTP状态码403
          } else{
            console.log('获取分项用电量失败:', response.data.msg);
          }
        }
        this.pieChart = echarts.init(document.getElementById(id))
        this.pieChart.setOption({
          grid: {
            bottom: '10%',
            // left:'10%',
            containLabel: true,
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              crossStyle: {
                color: 'rgba(153,153,153,0.2)'
              }
            },
            textStyle:{
              align:'left'
            }
          },
          legend: {
            data: ['节能量', '节能率'],
            textStyle: {
              color: 'honeydew',
              fontSize:this.calculateFontSize(0.75),
            },
            right: '10%' // 设置right属性为相应的值
          },
          xAxis: [
            {
              type: 'category',
              data: ['金海燕', '兴发', '西砂'],
              axisPointer: {
                type: 'shadow'
              },
              axisLabel: {
                textStyle: {
                  color: 'honeydew',
                  fontSize:this.calculateFontSize(0.8),
                }
              }
            }
          ],
          yAxis: [
            {
              type: 'value',
              name: '节能量(kWh)',
              splitLine: {
                show: true,
                lineStyle: {
                  color: 'rgba(255,255,255,0.3)'
                }
              },
              axisLabel: {
                formatter: '{value}',
                textStyle: {
                  color: 'honeydew',
                  fontSize:this.calculateFontSize(0.75),
                }
              },
              nameTextStyle: {
                color: 'honeydew',
                fontSize:this.calculateFontSize(0.8),
              }
            },
            {
              type: 'value',
              name: '节能率(%)',
              axisLine: {
                show: false
              },
              splitLine: {
                show: false
              },
              axisLabel: {
                formatter: '{value}',
                textStyle: {
                  color: 'honeydew',
                  fontSize:this.calculateFontSize(0.75)
                }
              },
              nameTextStyle: {
                color: 'honeydew',
                fontSize:this.calculateFontSize(0.8)
              }
            }
          ],
          series: [
            {
              name: '节能量',
              type: 'bar',
              barWidth: 20, // 设置柱子的宽度   #1D78F9
              itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: '#00FFFF' }, // 开始颜色
                  { offset: 1, color: 'rgba(0,255,255,0.1)' } // 透明颜色
                ]),
              },
              tooltip: {
                valueFormatter: function (value) {
                  return value + ' kWh';
                }
              },
              // data: [
              //   (energySaveData.jinhaiyanSave / 1000).toFixed(2),
              //   (energySaveData.xingfaSave / 1000).toFixed(2),
              //   (energySaveData.xishaSave / 1000).toFixed(2)
              // ]
              data:
                [energySaveData.jinhaiyanSave, energySaveData.xingfaSave, energySaveData.xishaSave]
            },
            {
              name: '节能率',
              type: 'bar',
              barWidth: 20, // 设置柱子的宽度
              // label: {
              //   show: true, // 显示标签
              //   position: 'top', // 标签显示在柱子顶部
              //   //formatter: '{c} %', // 标签的格式化字符串，{c} 表示数据值
              //   formatter: '{c}', // 标签的格式化字符串，{c} 表示数据值
              //   textStyle: {
              //     color: 'honeydew'
              //   }
              // },
              itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: '#F0C01E' }, // 开始颜色
                  { offset: 1, color: 'rgba(240,192,30,0.1)' } // 透明颜色
                ])
              },
              yAxisIndex: 1,
              tooltip: {
                valueFormatter: function (value) {
                  return value + ' %';
                }
              },
              data: [
                //53.68, 56.45, 60
                (energySaveData.jinhaiyanSaveRatio * 100).toFixed(2),
                (energySaveData.xingfaSaveRatio * 100).toFixed(2),
                (energySaveData.xishaSaveRatio * 100).toFixed(2)
              ]
            },
          ]
        })
      } catch (error) {
        console.log(error);
      }

      // 初始化图表后调用 this.handleResize()，确保图表能够正确调整大小
      this.handleResizeEcharts();
    },
    async drawBarFiveDay(id){
      try {

        const accessToken = sessionStorage.getItem('accessToken');
        const response = await axios.get(`${this.BASE_URL}electsDifByDays`, {
          headers: {'Content-Type': 'application/json; charset=UTF-8',
            'Authorization': `Bearer ${accessToken}`}
        });

        let energyTime = [];
        const currentDate = new Date(); // 获取当前日期
        for (let i = 7; i >= 1; i--) {
          const date = new Date(currentDate);
          date.setDate(date.getDate() - i);
          const month = (date.getMonth() + 1).toString().padStart(2, '0');
          const day = date.getDate().toString().padStart(2, '0');
          const formattedTime = `${month}-${day}`;
          energyTime.push(formattedTime);
        }
        let energyJinhaiyanDian = [];
        let energyJinhaiyanTime = [];
        let energyXingfaDian = [];
        let energyXingfaTime = [];
        let energyXishaDian = [];
        let energyXishaTime = [];
        if (response.status === 200){
          const data = response.data
          console.log('获取5天电量返回的数：',response.data)
          if (data.code === 200) {
            for (let i = 0; i < data.data.length; i++) {
              const item = data.data[i];
              console.log('获取5天电量返回的数,看看item',item)
              if (item.projectName=='jinhaiyan'){
                energyJinhaiyanDian.push(Number(item.totalPower));
                const date = new Date(item.collectionTime);
                const month = (date.getMonth() + 1).toString().padStart(2, '0');
                const day = date.getDate().toString().padStart(2, '0');
                const formattedTime = `${month}-${day}`;
                energyJinhaiyanTime.push(formattedTime);
              } else if(item.projectName=='xingfa'){
                energyXingfaDian.push(Number(item.totalPower));
                const date = new Date(item.collectionTime);
                const month = (date.getMonth() + 1).toString().padStart(2, '0');
                const day = date.getDate().toString().padStart(2, '0');
                const formattedTime = `${month}-${day}`;
                energyXingfaTime.push(formattedTime);
              }else if(item.projectName=='xisha'){
                energyXishaDian.push(Number(item.totalPower));
                // Format the date to "月-日" (month-day)
                const date = new Date(item.collectionTime);
                const month = (date.getMonth() + 1).toString().padStart(2, '0');
                const day = date.getDate().toString().padStart(2, '0');
                const formattedTime = `${month}-${day}`;
                energyXishaTime.push(formattedTime);
              }
            }

            if (energyXingfaDian.length !== energyTime.length) {
              let temp = [...Array(energyTime.length)].map(() => 0);  // 创建一个与energyTime等长的全 0 数组
              for (let i = 0; i < energyTime.length; i++) {
                const index = energyXingfaTime.indexOf(energyTime[i]);
                if (index !== -1) {
                  temp[i] = energyXingfaDian[index];  // 在找到匹配的位置上将energyXingfaDian中的值赋给temp
                }
              }
              energyXingfaDian = temp;  // 用处理完的temp覆盖原来的energyXingfaDian
            }
            if (energyJinhaiyanDian.length !== energyTime.length) {
              let temp = [...Array(energyTime.length)].map(() => 0);  // 创建一个与energyTime等长的全 0 数组
              for (let i = 0; i < energyTime.length; i++) {
                const index = energyJinhaiyanTime.indexOf(energyTime[i]);
                if (index !== -1) {
                  temp[i] = energyJinhaiyanDian[index];  // 在找到匹配的位置上将energyXingfaDian中的值赋给temp
                }
              }
              energyJinhaiyanDian = temp;  // 用处理完的temp覆盖原来的energyXingfaDian
            }
            if (energyXishaDian.length !== energyTime.length) {
              let temp = [...Array(energyTime.length)].map(() => 0);  // 创建一个与energyTime等长的全 0 数组
              for (let i = 0; i < energyTime.length; i++) {
                const index = energyXishaTime.indexOf(energyTime[i]);
                if (index !== -1) {
                  temp[i] = energyXishaDian[index];  // 在找到匹配的位置上将energyXingfaDian中的值赋给temp
                }
              }
              energyXishaDian = temp;  // 用处理完的temp覆盖原来的energyXingfaDian
            }

          } else if (data.code === 40102){
            this.$router.push('/403'); // 返回HTTP状态码403
          } else{
            console.log('获取分项用电量失败:', response.data.msg);
          }
        }
        this.pieChart = echarts.init(document.getElementById(id))
        this.pieChart.setOption({
          grid: {
            bottom: '15%',
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              crossStyle: {
                color: 'rgba(153,153,153,0.2)'
              }
            },
            textStyle:{
              align:'left'
            }
          },
          legend: {
            data: ['金海燕', '兴发','西砂'],
            textStyle: {
              color: 'honeydew',
              fontSize: this.calculateFontSize(0.75),
            },
            right: '10%' // 设置right属性为相应的值
          },
          xAxis: [
            {
              type: 'category',
              data: energyTime,
              axisPointer: {
                type: 'shadow'
              },
              axisLabel: {
                textStyle: {
                  color: 'honeydew',
                  fontSize: this.calculateFontSize(0.8),
                }
              }
            }
          ],
          yAxis: [
            {
              type: 'value',
              name: '日用电(kWh)',
              splitLine: {
                show: true,
                lineStyle: {
                  color: 'rgba(255,255,255,0.3)'
                }
              },
              axisLabel: {
                formatter: '{value}',
                textStyle: {
                  color: 'honeydew',
                  fontSize: this.calculateFontSize(0.75),
                }
              },
              nameTextStyle: {
                color: 'honeydew',
                fontSize: this.calculateFontSize(0.8),
              }
            },
          ],
          series: [
            {
              name: '金海燕',
              type: 'bar',
              barWidth: 12, // 设置柱子的宽度   #11E8A6
              itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: '#00FFFF' }, // 开始颜色
                  { offset: 1, color: 'rgba(0,255,255,0.2)' } // 透明颜色
                ])
              },
              data: energyJinhaiyanDian,
            },
            {
              name: '兴发',
              type: 'bar',
              barWidth: 12, // 设置柱子的宽度
              // label: {
              //   show: true, // 显示标签
              //   position: 'top', // 标签显示在柱子顶部
              //   formatter: '{c}', // 标签的格式化字符串，{c} 表示数据值
              //   textStyle: {
              //     color: 'honeydew'
              //   }
              // },
              itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: '#F0C01E' }, // 开始颜色
                  { offset: 1, color: 'rgba(240,192,30,0.2)' } // 透明颜色
                ])
              },
              data: energyXingfaDian,
            },
            {
              name: '西砂',
              type: 'bar',
              barWidth: 12, // 设置柱子的宽度
              // label: {
              //   show: true, // 显示标签
              //   position: 'top', // 标签显示在柱子顶部
              //   formatter: '{c}', // 标签的格式化字符串，{c} 表示数据值
              //   textStyle: {
              //     color: 'honeydew'
              //   }
              // },
              itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: '#FF7B10' }, // 开始颜色
                  { offset: 1, color: 'rgba(255,123,16,0.2)' } // 透明颜色
                ])
              },

              data: energyXishaDian,
            },
          ]
        })
      } catch (error) {
        console.log(error);
      }
    },



  }

}
</script>

<style  scoped>
/*背景容器*/
.background {
  height: 56.25vh; /* 9/16 的视窗高度 */
//overflow-y: auto; /* 如果内容超过屏幕高度，添加垂直滚动条 */
  overflow: hidden; /* 隐藏溢出内容，避免出现滚动条 */
}
/*背景图*/
img{
  position: absolute; /* 修改为绝对定位 */
  top: 0; /* 图片距离顶部的位置 */
  left: 0; /* 图片距离左侧的位置 */
  width: 100%; /* 图片宽度占满父元素 */
  height: 100%; /* 图片高度占满父元素 */
}

.mapTest{
  background-image: url("../assets/dataVis/mapBeijing3.png");
  background-position: center;
  background-repeat: no-repeat;
//background-size: 100% auto; /* 使用百分比来控制背景图片的缩放 */
  margin: 0px;
  padding: 0px;
}
.front{
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 0;
  position: absolute;
  display: flex;
  background-color: rgba(192, 42, 42, 0);
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;

}

.bg-clear{
  background-color: rgba(2,2,2,0);
}

.el-container {
  height: 100%;
}
.el-header {
  background-color: rgba(2,2,2,0);
  color: #349af5;
  text-align: center;
  background-image: url("../assets/dataVis/header.png");
  background-size: 100% 100%;
  font-size: 1vw;
}
/*标题Logo容器*/
.logo-title-container {
  height:6vh;
  display: flex;
  justify-content:center ;
}

.logo {
  margin-top: 1vh;
  width: 38%;
  height:4.5vh;
  margin-left: 30%;

}
/*右上角时间容器*/
.grid-content-time {
  height: 7vh;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 1vw;
  /*margin-top: 5%;*/
  background: #24d8ff;
  -webkit-background-clip: text;
  color: transparent;
  font-family: Arial;
  font-weight: bolder;
  text-align: right;
}
/*用户容器*/
.user{
  height: 7vh;
  margin-top: 0%;
  display: flex;
  justify-content:center;
  align-items: center;
  font-size: 2vw;
  color: #349af5;
}
.user:hover {
  font-size: 3vw; /* 鼠标悬停时增加字体大小 */
  transform: scale(1.1); /* 鼠标悬停时增加尺寸 */
}


/*用户对话框样式*/
.custom-dialog {
  /*position: absolute;*/
  top: -10%;
  left: 85%;
  line-height:2vh;
  width: 18vw; /* 自定义宽度 */
  height:auto; /* 自动调整高度 */
  background-color: transparent; /* 设置背景色为透明 */
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15); /* 添加阴影效果 */
}


/* 使用 /deep/ 深度选择器 */
/deep/ .el-dialog {
  background: rgba(0, 21, 41, 0.9);
  -webkit-box-sizing: border-box;
}
/deep/ .el-dialog--center {
  text-align: center;
  background-color: rgba(0, 21, 41, 0.9);
}

/deep/ .el-dialog__header {
  padding: 10px 20px 10px;
  background-color: transparent;
}

/deep/ .el-dialog--center .el-dialog__body {
  text-align: initial;
  padding: 0px 10px 10px;
  color: honeydew;
  background-color: transparent;
  font-size: 0.9vw;
}

/deep/ .el-dialog__title{
  font-size: 1.2vw;
  color: honeydew;
}
.changCode-dialog{
  margin-left: 15vw;
  margin-top: 20vh;
  width:60vw;
  height: auto;
  line-height:2vh;
  background-color: transparent; /* 设置背景色为透明 */
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15); /* 添加阴影效果 */
}
.changCodelabel{
  text-align: right; /* 文字右对齐 */
  margin-right: 1vw; /* 可选：右边距 */
  font-size: 1.1vw; /* 设置字体大小 */
  color: honeydew;; /* 设置文字颜色 */

}
.form-row{
  margin-right:5vw;
  display: flex;
  align-items: center; /* 垂直居中对齐标签和输入框 */
  justify-content: flex-end; /* 水平居中对齐 */
  margin-bottom: 1.5vh; /* 设置行之间的间距 */
}
input {
  /* 设置背景颜色 */
  background-color: rgba(69, 70, 73, 0.2);; /* 设置背景颜色为灰色 */
  /*border:0.1vw solid #989595;*/
  border:0.1vw solid #6e6a6a;
  border-radius: 5px;
  color: #ffffff;
  /* 设置字体大小 */
  font-size: 1vw; /* 设置字体大小为 16 像素 */
}
/*修改密码确认键*/
button{
  margin-top: 1vh;
  border:0.1vw solid #6e6a6a;
  font-size: 0.8vw;
  line-height:2vh;
  margin-left:5%;
  background-color: rgba(11, 241, 234, 0);
  color: honeydew;
  padding-bottom: 4px;
  padding-top: 2px;
}

/*用户名*/
.user-name{
  font-size: 0.8vw;
}
/*用户对话框按钮样式*/
.custom-button {
  margin-top: 1vh;
  border: 1px solid #00E4FF;
  font-size: 0.8vw;
  line-height:2vh;
  /*color: #00E4FF;*/
  margin-left:13%;

}

/*按钮基础样式*/
.el-button{
  background-color: rgba(11, 241, 234, 0);
  border-color:#00afed;
  color: honeydew;
  padding-bottom: 4px;
  padding-top: 2px;
}

.aside1{
  background-color: rgba(34,234,34,0);
  color: #349af5;
  text-align: center;

}
.aside2{
  background-color: rgba(74, 206, 74, 0);
  color: #349af5;
  text-align: center;
  line-height: 200px;

}

.el-main {
  background-color: rgba(236, 28, 28, 0);
  color: honeydew;
  text-align: left;
  line-height: 30px;
}
/*卡片基础样式*/
.el-card {
  border: 1px solid rgba(1,1,1,0);
  background-color: transparent;
  color: #ffffff;
}
.el-card /deep/ .el-card__header {
  height: 5vh;
  font-size: 1.2vw;
  border: none;
  text-align: left;
  background-color: transparent;
  background-image: url('../assets/premain/cardHeader.png');
  background-size: cover;
  background-repeat: no-repeat;

}
.clearfix{
  margin-left: 1vw;
  height: 100%;
  display: flex;
  align-items: center;
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both
}

.el-card /deep/ .el-card__body {
  padding: 0px;
  background-color: rgba(6, 10, 25, 0.3);
  /*background-color: rgb(255, 255, 255);*/
  border-radius: 30px;

}

/*建筑信息卡片*/
.box-card2{
  margin-bottom: 2vh;
}
.box-card2 /deep/ .el-card__header {
  background-size: 70% 100%; /* 将背景图片宽度设置为卡片头部宽度的五分之一，高度自适应 */
  background-position: 0 0; /* 将背景图片左侧对齐 */
  background-repeat: no-repeat;

}
.box-card2 /deep/ .el-card__body {
  padding: 0px;
  margin: 0px;
  height: 85%;
}
/*公建图片*/
.Tep-icon2{
  width: 100%;
  height: 7vh;
  background-image: url("../assets/dataVis/ggjz3.png");
  background-repeat: no-repeat;
  background-position: right;
  background-size: contain; /* 图像适应容器大小 */
  display: flex;
  justify-content: flex-end;
  align-items: center; /* 垂直水平居中 */
  transform: scale(0.7); /* 缩小图像到原始大小的一半 */
}
/*居建图片*/
.Tep-icon{
  width: 100%;
  height: 7vh;
  background-image: url("../assets/dataVis/ggjz4.png");
  background-repeat: no-repeat;
  background-position:right;
  background-size: contain; /* 图像适应容器大小 */
  display: flex;
  justify-content: flex-end;
  align-items: center; /* 垂直水平居中 */
  transform: scale(0.7); /* 缩小图像到原始大小的一半 */
}
/*公建字符*/
.info-text1{
  height: 7vh;
  font-size: 1.1vw;
  display: flex;
  align-items: center; /* 垂直水平居中 */
  text-align: left;
  color: #75D5FF;
}
/*居建字符*/
.info-text11{
  height: 7vh;
  font-size: 1.1vw;
  display: flex;
  align-items: center; /* 垂直水平居中 */
  text-align: left;
  color: #6EC12D;
}

/*建筑信息*/
.info_building1{
  height: 7vh;
  display: flex;
  align-items: center;
  text-align: left;
}

.info-num{
  font-size: 1.5vw;
  color: white;
  font-weight: bolder;

}
.top-unit {
  color: white;
  font-size: 0.8vw;
  font-weight: normal;
}

/*室外环境卡片*/
.box-card-outdoor /deep/ .el-card__header {
  background-size: 70% 100%; /* 将背景图片宽度设置为卡片头部宽度的五分之一，高度自适应 */
  background-position: 0 0; /* 将背景图片左侧对齐 */
  background-repeat: no-repeat;
}
.box-card-outdoor /deep/ .el-card__body{
  height: 85%;
}

.wendu-icon{
  width:90%;
  height: 8.2vh;
  /*margin-left:-25%;*/
  background-image: url("../assets/premain/wendu.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain; /* 图像适应容器大小 */
  margin-top: 0px;
  display: flex;
  justify-content: center;
  align-items: center; /* 垂直水平居中 */
  transform: scale(0.7); /* 缩小图像到原始大小的一半 */

}
.shidu-icon{
  width:90%;
  height: 8.2vh;
  background-image: url("../assets/premain/shidu.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain; /* 图像适应容器大小 */
  margin-top: 0px;
  display: flex;
  justify-content: center;
  align-items: center; /* 垂直水平居中 */
  transform: scale(0.7); /* 缩小图像到原始大小的一半 */

}
.pm25-icon{
  width:90%;
  height: 8.2vh;
  background-image: url("../assets/premain/pm25.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain; /* 图像适应容器大小 */
  margin-top: 0px;
  display: flex;
  justify-content: center;
  align-items: center; /* 垂直水平居中 */
  transform: scale(0.7); /* 缩小图像到原始大小的一半 */

}
.aqi-icon{
  width:90%;
  height: 8.2vh;
  background-image: url("../assets/premain/API.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain; /* 图像适应容器大小 */
  margin-top: 0px;
  display: flex;
  justify-content: center;
  align-items: center; /* 垂直水平居中 */
  transform: scale(0.7); /* 缩小图像到原始大小的一半 */

}
.zwx-icon{
  width:90%;
  height: 8.2vh;
  background-image: url("../assets/premain/zwx.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain; /* 图像适应容器大小 */
  margin-top: 0px;
  display: flex;
  justify-content: center;
  align-items: center; /* 垂直水平居中 */
  transform: scale(0.7); /* 缩小图像到原始大小的一半 */
}
.feng-icon{
  width:90%;
  height: 8.2vh;
  background-image: url("../assets/premain/feng.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain; /* 图像适应容器大小 */
  margin-top: 0px;
  display: flex;
  justify-content: center;
  align-items: center; /* 垂直水平居中 */
  transform: scale(0.7); /* 缩小图像到原始大小的一半 */

}
.info_building{
  height: 8.2vh;
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items: center;
}
.outdoor-num{
  font-size: 1.2vw;
  color: honeydew;
  text-align: left;
  padding-top: 10%;
  padding-bottom: 0px;
  margin-left: 0px;
  font-weight: bolder;
}


.outdoor-num1{
  font-size: 1vw;
  color: honeydew;
  text-align: left;
  padding-top: 10%;
  padding-bottom: 0px;
  margin-left: 0px;
  font-weight: bolder;
}

.info-text12{
  font-size: 0.9vw;
  text-align: left;
  color: #E27411;
}
.info-text13{

  font-size: 0.9vw;
  text-align: left;
  color: #75D5FE;
}
.info-text14{
  font-size: 0.9vw;
  text-align: left;
  color: #75E552;
}
/*室外环境卡片*/
.box-card3 /deep/ .el-card__header {
  background-size: 70% 100%; /* 将背景图片宽度设置为卡片头部宽度的五分之一，高度自适应 */
  background-position: 0 0; /* 将背景图片左侧对齐 */
  background-repeat: no-repeat;

}
.box-card3 /deep/ .el-card__body {
  padding: 0px;
  margin: 0px;
  height: 85%
}

/*切换键*/
.left-buttons {
  height: 4vh;
  display: flex;
  justify-content: flex-end; /* 水平居右 */
  align-items: center; /* 垂直居中 */
  margin-right: 0%;

}
.qiehuan-button-left:hover {
  filter: brightness(1.2);
}
.qiehuan-button-left {
  background-color: transparent;
  border: none;
  padding: 0;
  cursor: pointer;

}
.qiehuan-button-left i {
  font-family: "Element Icons";
  font-size: 1.6vw;
  color: #75D5FE;
}
.right-buttons {
  height: 4vh;
  display: flex;
  justify-content: flex-start; /* 水平居左 */
  align-items: center; /* 垂直居中 */
  margin-right: 0%;

}
.qiehuan-button-right:hover {
  filter: brightness(1.2);
}
.qiehuan-button-right {
  background-color: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
}
.qiehuan-button-right i {
  font-family: "Element Icons";
  font-size: 1.6vw;
  color: #75D5FE;
}
/*名称*/
.bdName{
  height: 4vh;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center; /* 垂直水平居中 */
  font-size: 1.1vw;
  background: linear-gradient(to bottom, #ffff, #f8fdff, #acf5ff, #67eeff, #24d8ff);
  -webkit-background-clip: text;
  color: transparent;
}


.Tep-circle{
  width:100%;
  /*width: 11vw; !* 设置容器的宽度 *!*/
  height: 8vh; /* 设置容器的高度 */
  margin-top: 10%;
  /*margin-left: -30%;*/
  background-image: url("../assets/premain/circle2.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain; /* 图像适应容器大小 */
  display: flex;
  justify-content: center;
  align-items: center; /* 垂直水平居中 */
  transform: scale(1.2); /* 缩小图像到原始大小的一半 */
}
.Hum-circle{
  width:100%; /* 设置容器的宽度 */
  height: 8vh; /* 设置容器的高度 */
  margin-top: 10%;
  /*margin-left: -40%;*/
  background-image: url("../assets/premain/circle3.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain; /* 图像适应容器大小 */
  display: flex;
  justify-content: center;
  align-items: center; /* 垂直水平居中 */
  transform: scale(1.2); /* 缩小图像到原始大小的一半 */
}
.CO2-circle{
  width:100%; /* 设置容器的宽度 */
  height: 8vh; /* 设置容器的高度 */
  margin-top: 10%;
  /*margin-left: -40%;*/
  background-image: url("../assets/premain/circle1.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain; /* 图像适应容器大小 */
  display: flex;
  justify-content: center;
  align-items: center; /* 垂直水平居中 */
  transform: scale(1.2); /* 缩小图像到原始大小的一半 */
}
.Pm25-circle{
  width:100%;/* 设置容器的宽度 */
  height: 8vh; /* 设置容器的高度 */
  margin-top: 10%;
  /*margin-left: -40%;*/
  background-image: url("../assets/premain/circle5.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain; /* 图像适应容器大小 */
  display: flex;
  justify-content: center;
  align-items: center; /* 垂直水平居中 */
  transform: scale(1.2); /* 缩小图像到原始大小的一半 */
}

.info-num1{
  font-size: 1.2vw;
  color: honeydew;
  text-align: left;
  font-weight: bolder;
  display: flex;
  flex-direction: column;
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
}

.info-name{
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center; /* 垂直水平居中 */
  font-size: 0.8vw;
  text-align: center;
}

/*平台切换按钮*/
.top-button {
  width:100%;
  height: 6vh;
  background-color: rgba(255, 255, 0, 0);
  background-image: url("../assets/premain/btn.png");
  background-position: center;
  background-size: 100% 100%; /* 使背景图覆盖整个按钮 */
  text-align: center;
  vertical-align: middle;
  font-size:1.6vw;
  color: honeydew;
  border: none; /* 移除边框样式 */
  padding: 5%;
  display: flex;
  justify-content: center;
  align-items: center; /* 垂直水平居中 */
  transform: scale(0.7); /* 缩小图像到原始大小的一半 */
}

/*能耗监测*/
.top-text1 {
  width: 100%;
  height: 4vh;
  text-align: left;
  color: honeydew; /* 设置文本颜色为白色 */
}

.top-text {
  width: 100%;
  height: 3vh;
  text-align: left;
  color: honeydew; /* 设置文本颜色为白色 */
}

.top-name {
  font-size: 0.9vw;
}

.top-number {
  font-size: 1.4vw; /* 设置数字字体大小为24px */
  font-weight: bolder;
  color: #00FFFF;
}

.top-number1 {
  font-size: 1vw; /* 设置数字字体大小为24px */
  color: honeydew; /* 设置文本颜色为白色 */
}

.red-arrow {
  color: red;
  font-weight: bolder;
  font-size: 1.2vw; /* 设置 "kg" 字体大小为24px */
  vertical-align: middle; /* 或者 vertical-align: bottom; */
}

.green-arrow {
  color: #5eef5e;
  font-weight: bolder;
  font-size: 1.2vw; /* 设置 "kg" 字体大小为24px */
  vertical-align: middle; /* 或者 vertical-align: bottom; */
}

/*主页地图*/
.mapContainer {
  position: absolute;
  bottom: 0;
  transform: translateY(-5%);
}

.mapContainer img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

/*能耗监测卡片*/
.box-card-right1{
  margin-bottom: 2vh;
}
.box-card-right1 /deep/ .el-card__header {
  background-size: 70% 100%; /* 将背景图片宽度设置为卡片头部宽度的五分之一，高度自适应 */
  background-position: 0 0; /* 将背景图片左侧对齐 */
  background-repeat: no-repeat;
}
.box-card-right1 /deep/ .el-card__body {
  padding: 0px;
  margin: 0px;
  /*height: 20vh;*/
}
/*切换键*/
.header-button {
  height:100%;
  margin-left: auto;
  margin-right: 8%;
}


.dianName{
  line-height:1.5vh;
  font-size: 1vw;
  height: 2vh;
  color: honeydew;
  text-align: left;
}
.top-text2 {
  height: 3vh;
  text-align: left;
  color: honeydew; /* 设置文本颜色为白色 */
  display: flex;
  align-items: center;
}

.numName{
  font-size: 1.5vw;
  color: #3595F6;
  text-align:left;
  font-weight: bolder;
}
.numName1{
  font-size: 1.5vw;
  color: #EB6329;
  text-align:left;
  font-weight: bolder;
}
.numName2{
  font-size: 1.5vw;
  color: #F0C01E;
  text-align:left;
  font-weight: bolder;
}
/*因子设置*/
.factor_set{
  height: 1vh;
  display: flex;
  align-items:center;
}
.factor-label {
  font-size: 0.8vw;
  color: honeydew;
}


/*输入框容器背景*/
.bg-gray {
  background-color: rgba(64, 158, 255, 0.2);
  display: flex;
  align-items:center;
  height: 1vh;
}

/deep/ .el-input__inner{
  background-color: rgba(8, 22, 77, 0.1);
  color:honeydew;
  border:0px;
  border-radius:0px;
  text-align: center;
  font-size: 0.8vw;

}

.confirm-text-right {
  margin-right:10%;
  background-color: rgba(255, 255, 0, 0);
  border-color:#00afed;
  color: honeydew;
  line-height: 1vh;
  font-size: 0.8vw;
  text-align: right;
}

.box-card-right2{
  margin-bottom: 2vh;
}

.box-card-right2 /deep/ .el-card__header {
  background-size: 70% 100%; /* 将背景图片宽度设置为卡片头部宽度的五分之一，高度自适应 */
  background-position: 0 0; /* 将背景图片左侧对齐 */
  background-repeat: no-repeat;

}
.box-card-right2 /deep/ .el-card__body {

  height: 85%;

}
.box-card-right3 /deep/ .el-card__header {
  background-size: 70% 100%; /* 将背景图片宽度设置为卡片头部宽度的五分之一，高度自适应 */
  background-position: 0 0; /* 将背景图片左侧对齐 */
  background-repeat: no-repeat;

}
.box-card-right3 /deep/ .el-card__body {

  height: 85%;

}










.button-top{
  font-size:24px ;
  margin-top: 4%;
  background: -webkit-gradient(linear, 0% 0%, 0% 100%,from(rgba(36, 216, 255, 0.5)), to(rgba(255, 255, 255, 0.4)));
  color: honeydew !important;
  font-weight: bold;
  border-color: #349af5 !important;
  border-radius: 4px;
  width: 120px;
  height: 80px;

}

.button-top:active {
  background: rgba(52, 154, 245, 0.6);
  font-weight: bold;
}
/*按钮悬浮*/
.button-top:hover {
  background-color: rgba(52, 154, 245, 0.6);
  color: rgba(52, 154, 245, 1);
  border-color: rgba(52, 154, 245, 0.4);
  cursor: pointer;
}
/*按钮点击*/
.button-top:focus {
  background-color: rgba(52, 154, 245, 0.6);
  color: rgba(52, 154, 245, 1);
  border-color: rgba(52, 154, 245, 0.4);
}









body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}

.el-row {
  margin-bottom: 20px;
&:last-child {
   margin-bottom: 0;
 }
}
.el-col {
  border-radius: 4px;
}

.bg-purple {
  background: #d3dce6;
}


.el-icon-map-location{
  font-size: 60px;
  color: #0bf1ea;
}



.co2-image{
  width: 120px;
  height: auto;
  margin-top: 10px;
  margin-left: -60px;
}
.text-num{
  font-size: 30px;
  color: #20E5FF;
  line-height: 30px;
  align-items: flex-end;
  text-align: left;
  padding-top: 35px;
  padding-bottom: 0px;
  font-weight: bolder;
}
.text-fixed-small{
  line-height: 20px;
  text-align: left;
  color: honeydew;
  font-size: 14px;
}

.text-fixed-middle{
  line-height: 40px;
  text-align:left;
  color:honeydew;
  font-size: 18px;
}
.text-fixed-middle-num{
  line-height: 40px;
  text-align:left;
  font-weight: bolder;
  color: #20E5FF;
  font-size: 16px;
}



.draw-picture{
  background-color: rgba(1,1,1,0);
  margin-top: 20px;
//margin-left: 30px;
}
.draw-picture-pie{
  background-color: rgba(1,1,1,0);
  /*margin-left: 2%;*/
}
.ballbg1{
  height: 100px;
  background-image: url("../assets/premain/paopao4-purple.png");
  background-repeat:no-repeat;
  background-position: center;
  margin-top: 30px;
  align: middle;
}
.ballbg2{
  height: 100px;
  background-image: url("../assets/premain/paopao1-green.png");
  background-repeat:no-repeat;
  background-position: center;
  margin-top: 30px;
}
.ballbg3{
  height: 100px;
  background-image: url("../assets/premain/paopao2-yellow.png");
  background-repeat:no-repeat;
  background-position: center;
  margin-top: 30px;

}
.ball-num{
  font-size: 30px;
  color: #20E5FF;
  line-height: 30px;
//align-items: flex-end;
  text-align: center;
  padding-top: 20px;
  padding-bottom: 0px;
  margin-left: 0px;
  font-weight: bolder;
}
.ball-text{
  line-height: 20px;
  text-align: center;
}






.draw-picture1{
//background-color: rgb(255, 255, 255);
  margin-top: 20px;
//margin-left: 30px;

}

.box-card5 {
  border: 2px solid #20E5FF;
  border-image: radial-gradient( rgba(0, 214, 255, 0.3) 70%, #20E5FF 130%) 2;
  margin:10px;
  background-color: rgba(52, 154, 245, 0);
  color: #ffffff;
}

.box-card5 /deep/ .el-card__header {
  padding: 0px;
  margin: 0px;
  border: 0px solid rgba(1,1,1,0);
  height: 30px;
  font-size: 18px;
  font-weight: bolder;
  color: #36EFB9;
  text-align: left;
  line-height: 30px;
  background: #0F4266;

}
.box-card5 /deep/ .el-card__body {
  padding: 0px;
  margin: 0px;
  height: 80px;
  text-align: left;
  background: rgba(15, 66, 102, 0.6);
}

.info-location{
  line-height: 40px;
  text-align:left;
  color: rgba(240, 255, 240, 0.9);
  font-size: 18px;
}
.info-text{
  line-height: 40px;
  text-align:left;
  color: rgba(240, 255, 240, 0.9);
  font-size: 18px;
}
.el-icon-map-location{
  cursor: pointer;
}


.label {
  display: none;
  position: absolute;
  width: 300px;
  top: -40px;
  left: 20px;
  background-color: rgba(0, 175, 237, 0);
  border: 2px solid #20E5FF;
  border-image: radial-gradient( rgba(0, 214, 255, 0.3) 70%, #20E5FF 130%) 2;
  box-shadow: 0 0 5px rgba(0,0,0,0.5);
}
.label h3 {
  padding: 0px;
  margin: 0px;
  border: 0px solid rgba(1,1,1,0);
  height: 30px;
  font-size: 16px;
  font-weight: bolder;
  color: #36EFB9;
  text-align: left;
  line-height: 30px;
  background: rgba(15, 66, 102, 0.8);
}

.label p {
  font-size: 14px;
  padding: 4px;
  margin: 0px;
  text-align: left;
  background: rgba(15, 66, 102, 0.6);
}
.grid-content-picture-xingfa {
  border-radius: 4px;
  margin-top: 10px;
  height: 150px;
  border: 3px solid #20E5FF;
  border-image: radial-gradient( rgba(0, 214, 255, 0.3) 70%, #20E5FF 130%) 2;
  background-image: url("../assets/dataVis/bgxingfa.png");
  -moz-background-size:100% 100%;
  background-size:100% 100%;
}
.grid-content-picture-xingfa:hover {
  cursor: pointer;
}
.grid-content-picture-jinhaiyan {
  border-radius: 4px;
  margin-top: 10px;
  height: 150px;
  border: 3px solid #20E5FF;
  border-image: radial-gradient( rgba(0, 214, 255, 0.3) 70%, #20E5FF 130%) 2;
  background-image: url("../assets/dataVis/bgjinhaiyan.jpg");
  -moz-background-size:100% 100%;
  background-size:100% 100%;
}
.grid-content-picture-jinhaiyan:hover {
  cursor: pointer;
}
.grid-content-picture-xisha {
  border-radius: 4px;
  margin-top: 10px;
  height: 150px;
  border: 3px solid #20E5FF;
  border-image: radial-gradient( rgba(0, 214, 255, 0.3) 70%, #20E5FF 130%) 2;
  background-image: url("../assets/dataVis/bdxisha.jpg");
  -moz-background-size:100% 100%;
  background-size:100% 100%;
}
.grid-content-picture-xisha:hover {
  cursor: pointer;
}

.map{
  position: relative;
  height:600px;
  border: 5px solid #20E5FF;
  border-image: radial-gradient( rgba(0, 214, 255, 0.3) 70%, #20E5FF 130%) 2;
  margin-top: 0px;
}

.line {
  width: 50%;
  height: 1px;
  margin: 20px auto; /* 设置上方和下方的空间 */
  background: linear-gradient(to right, rgba(0, 0, 255, 0.2), #20E5FF, rgba(0, 0, 255, 0.2));

}


.building-info1{
  height: 5%;
}

.el-calendar-table .el-calendar-day {
  height: 20px;
}







/deep/ .el-select .el-input.is-focus .el-input__inner{
  border:0px;
}
/deep/ .el-select-dropdown{
  background-color: rgba(8, 22, 77, 0.6);
  margin: 0px;
  border:0px;
  border-radius: 0px;
}
/deep/ .el-select-dropdown .el-select-dropdown__item {
  color: rgba(240, 255, 240, 0.8);
}
/deep/ .el-select-dropdown__item.hover,
/deep/ .el-select-dropdown__item:hover{
  color:#409eff;
  background-color: rgba(8, 22, 77, 0.9);
}
/deep/ .el-popper .popper__arrow, .el-popper .popper__arrow::after{
  display: none;
}


.qiehuan-button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
}
.qiehuan-button img {
  width: 40px;
  height: 30px;
  object-fit: cover;
}

.qiehuan-button:hover {
  filter: brightness(1.2);
}
.el-row:first-child .grid-contentKB {
  padding: 1% 0; /* 调整这里的数值以达到所需的行高 */
}
</style>

