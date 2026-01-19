<template>
  <div class="anqiju" :height="fullHeight" :width="fullWidth">
    <!--  界面标题-->
<!--    <el-header :style="{ height: 'calc(7vh) !important'}">-->
<!--      <el-row>-->
<!--        <el-col :span="8">-->
<!--          <div class="logo-contain" >-->
<!--            <img src="../../assets/anqiju/anqiju_logo.png" class="anqijulogo"></div>-->
<!--        </el-col>-->
<!--        <el-col :span="8">-->
<!--          <div class="grid-content-title">安其居环境智能监控平台</div>-->
<!--        </el-col>-->
<!--        <el-col :span="6">-->
<!--          <div class="grid-content-time">{{ nowTime }}</div>-->
<!--        </el-col>-->
<!--        <el-col :span="2">-->
<!--          <div class="grid-content-user"><i class="el-icon-s-custom"></i></div>-->
<!--        </el-col>-->
<!--      </el-row>-->
<!--    </el-header>-->

      <el-header :style="{ height: 'calc(8vh) !important'}"> <!-- 增加header高度以适应logo -->
        <el-row class="header-row">
          <el-col :span="8">
            <div class="logo-contain">
              <img src="../../assets/anqiju/anqiju_logo.png" class="anqijulogo">
            </div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content-title">安其居环境智能监控平台</div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content-time">{{ nowTime }}</div>
          </el-col>
          <el-col :span="2">
            <div class="grid-content-user"><i class="el-icon-s-custom"></i></div>
          </el-col>
        </el-row>
      </el-header>


    <!-- main 和 aside 区域 -->
    <el-container style="height:92vh;width:100vw">
      <!-- aside 区域 -->
      <el-aside :style="{ width:'10vw',height: '100%'}">
        <!-- 导航栏-->
        <el-menu default-active="1" class="menu-vertical" background-color="rgba(211, 220, 230, 0)"
                 text-color="#fff"
                 active-text-color="#24d8ff"
                 :router="true"
                 @select="handleMenuSelect">
          <el-menu-item index="1" class="custom-menu-item">
            <i class="el-icon-s-home item"></i>
            <span :class="{'title-overlay': true, 'active': activeIndex === '1'}">综合视图</span>
          </el-menu-item>
          <el-menu-item index="2" class="custom-menu-item">
            <i class="el-icon-data-line item"></i>
            <span :class="{'title-overlay': true, 'active': activeIndex === '2'}">环境监测</span>
          </el-menu-item>
          <el-menu-item index="3" class="custom-menu-item">
            <i class="el-icon-help item"></i>
            <span :class="{'title-overlay': true, 'active': activeIndex === '3'}">PMV监控</span>
          </el-menu-item>
          <el-menu-item index="4" class="custom-menu-item">
            <i class="el-icon-connection item"></i>
            <span :class="{'title-overlay': true, 'active': activeIndex === '4'}">知识图谱</span>
          </el-menu-item>
          <el-menu-item index="5" class="custom-menu-item" @click="searchEnviron">
            <i class="el-icon-document item"></i>
            <span :class="{'title-overlay': true, 'active': activeIndex === '5'}">数据报表</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main :style="{ width:'90vw',height: '100%'}">
        <!--综合视图界面-->
        <div v-show="activeIndex === '1'" :style="{height: '100%'}">
          <el-row>
            <!--左-->
            <el-col :span="8">
<!--              &lt;!&ndash; 区域信息卡片&ndash;&gt;-->
<!--              <el-card class="box-card-room" style="height: 19vh">-->
<!--                <div slot="header" class="clearfix"><span>区域信息</span></div>-->
<!--                <el-row style="margin-top: 1vh;margin-left: 2.5vw ">-->
<!--                  <el-col :span="6">-->
<!--                    <div class="roomlogocontainer">-->
<!--                      <img src="../../assets/anqiju/area.png" class="roomlogo">-->
<!--                    </div>-->
<!--                  </el-col>-->
<!--                  <el-col :span="5">-->
<!--                    <div class="room-text" style="color:#75d5ff">区域</div>-->
<!--                  </el-col>-->
<!--                  <el-col :span="4">-->
<!--                    <div class="room-num">6</div>-->
<!--                  </el-col>-->
<!--                  <el-col :span="4">-->
<!--                    <div class="room-unit">个</div>-->
<!--                  </el-col>-->
<!--                </el-row>-->
<!--                <el-row style="margin-top: 1.5vh;margin-left: 2.5vw ">-->
<!--                  <el-col :span="6">-->
<!--                    <div class="roomlogocontainer">-->
<!--                      <img src="../../assets/anqiju/device.png" class="roomlogo">-->
<!--                    </div>-->
<!--                  </el-col>-->

<!--                  <el-col :span="5">-->
<!--                    <div class="room-text" style="color:#6ec12d">设备</div>-->
<!--                  </el-col>-->
<!--                  <el-col :span="4">-->
<!--                    <div class="room-num">55</div>-->
<!--                  </el-col>-->
<!--                  <el-col :span="4">-->
<!--                    <div class="room-unit">个</div>-->
<!--                  </el-col>-->
<!--                </el-row>-->
<!--              </el-card>-->
              <!-- 合并后的区域与环境信息卡片 - 精简文字版 -->
              <el-card class="box-card-combined" style="height: 20vh">
                <div slot="header" class="clearfix"><span>区域与环境信息</span></div>

                <!-- 区域信息部分 -->
                <el-row style="margin-top: 1vh; margin-bottom: 1vh" :gutter="10">
                  <el-col :span="12">
                    <div class="text-item">
                      <span class="label" style="color:#75d5ff">区域：</span>
                      <span class="value">8</span>
                      <span class="unit">个</span>
                    </div>
                  </el-col>
                  <el-col :span="12">
                    <div class="text-item">
                      <span class="label" style="color:#6ec12d">设备：</span>
                      <span class="value">44</span>
                      <span class="unit">个</span>
                    </div>
                  </el-col>
                </el-row>

                <!-- 分隔线 -->
                <el-divider style="margin: 1vh 0"></el-divider>

                <!-- 室外环境部分 -->
                <el-row :gutter="10" style="margin-top: 1vh">
                  <el-col :span="8">
                    <div class="text-item">
                      <span class="label" style="color:#e17311">温度：</span>
                      <span class="value">{{ outdoors.tem }}</span>
                      <span class="unit">℃</span>
                    </div>
                  </el-col>
                  <el-col :span="8">
                    <div class="text-item">
                      <span class="label" style="color:#75d5ff">湿度：</span>
                      <span class="value">{{ outdoors.humidity }}</span>
                      <span class="unit">%</span>
                    </div>
                  </el-col>
                  <el-col :span="8">
                    <div class="text-item">
                      <span class="label" style="color:#6ec12d">PM2.5：</span>
                      <span class="value">{{ outdoors.pm25 }}</span>
                      <span class="unit">μg/m³</span>
                    </div>
                  </el-col>
                </el-row>

                <el-row :gutter="10" style="margin-top: 1.5vh">
                  <el-col :span="8">
                    <div class="text-item">
                      <span class="label" style="color:#e17311">AQI：</span>
                      <span class="value">{{ outdoors.aqi }}</span>
                    </div>
                  </el-col>
                  <el-col :span="8">
                    <div class="text-item">
                      <span class="label" style="color:#75d5ff">紫外线：</span>
                      <span class="value">{{ outdoors.uv }}</span>
                    </div>
                  </el-col>
                  <el-col :span="8">
                    <div class="text-item">
                      <span class="label" style="color:#6ec12d">风力：</span>
                      <span class="value">{{ outdoors.win }} {{ outdoors.win_speed }}级</span>
                    </div>
                  </el-col>
                </el-row>
              </el-card>


<!--              &lt;!&ndash; 室外环境卡片&ndash;&gt;-->
<!--              <el-card class="box-card-outdoor" style="height: 27vh">-->
<!--                <div slot="header" class="clearfix"><span>室外环境</span></div>-->
<!--                <el-row style="margin-top: 1vh;margin-left: 0.5vw">-->
<!--                  <el-col :span="3">-->
<!--                    <div class="outdoorlogo">-->
<!--                      <img src="../../assets/anqiju/temperature.png" class="outdoor-image">-->
<!--                    </div>-->
<!--                  </el-col>-->
<!--                  <el-col :span="3">-->
<!--                    <div class="outdoor">-->
<!--                      <div class="outdoor-num">{{ outdoors.tem }} <span class="outdoor-unit">℃</span></div>-->
<!--                      <div class="outdoor-text" style="color:#e17311">温度</div>-->
<!--                    </div>-->
<!--                  </el-col>-->
<!--                  <el-col :span="1">-->
<!--                    <div class="bg-clear">&nbsp;&nbsp;</div>-->
<!--                  </el-col>-->
<!--                  <el-col :span="3">-->
<!--                    <div class="outdoorlogo">-->
<!--                      <img src="../../assets/anqiju/humidity.png" class="outdoor-image">-->
<!--                    </div>-->
<!--                  </el-col>-->
<!--                  <el-col :span="4">-->
<!--                    <div class="outdoor">-->
<!--                      <div class="outdoor-num">{{ outdoors.humidity }} <span class="outdoor-unit">%</span></div>-->
<!--                      <div class="outdoor-text" style="color:#75d5ff">湿度</div>-->
<!--                    </div>-->
<!--                  </el-col>-->
<!--                  <el-col :span="1">-->
<!--                    <div class="bg-clear">&nbsp;&nbsp;</div>-->
<!--                  </el-col>-->
<!--                  <el-col :span="3">-->
<!--                    <div class="outdoorlogo">-->
<!--                      <img src="../../assets/anqiju/PM25.png" class="outdoor-image">-->
<!--                    </div>-->
<!--                  </el-col>-->
<!--                  <el-col :span="5">-->
<!--                    <div class="outdoor">-->
<!--                      <div class="outdoor-num">{{ outdoors.pm25 }}<span class="outdoor-unit">μg/m³</span></div>-->
<!--                      <div class="outdoor-text" style="color:#6ec12d">PM2.5</div>-->
<!--                    </div>-->
<!--                  </el-col>-->

<!--                </el-row>-->
<!--                <el-row style="margin-top: 1.5vh;margin-left: 0.5vw">-->
<!--                  <el-col :span="3">-->
<!--                    <div class="outdoorlogo">-->
<!--                      <img src="../../assets/anqiju/AQI.png" class="outdoor-image">-->
<!--                    </div>-->
<!--                  </el-col>-->
<!--                  <el-col :span="3">-->
<!--                    <div class="outdoor">-->
<!--                      <div class="outdoor-num">{{ outdoors.aqi }}</div>-->
<!--                      <div class="outdoor-text" style="color:#e17311">AQI</div>-->
<!--                    </div>-->
<!--                  </el-col>-->
<!--                  <el-col :span="1">-->
<!--                    <div class="bg-clear">&nbsp;&nbsp;</div>-->
<!--                  </el-col>-->
<!--                  <el-col :span="3">-->
<!--                    <div class="outdoorlogo">-->
<!--                      <img src="../../assets/anqiju/ultroviolet.png" class="outdoor-image">-->
<!--                    </div>-->
<!--                  </el-col>-->
<!--                  <el-col :span="4">-->
<!--                    <div class="outdoor">-->
<!--                      <div class="outdoor-num">{{ outdoors.uv }}</div>-->
<!--                      <div class="outdoor-text" style="color:#75d5ff">紫外线强度</div>-->
<!--                    </div>-->
<!--                  </el-col>-->
<!--                  <el-col :span="1">-->
<!--                    <div class="bg-clear">&nbsp;&nbsp;</div>-->
<!--                  </el-col>-->
<!--                  <el-col :span="3">-->
<!--                    <div class="outdoorlogo">-->
<!--                      <img src="../../assets/anqiju/wind.png" class="outdoor-image">-->
<!--                    </div>-->
<!--                  </el-col>-->
<!--                  <el-col :span="5">-->
<!--                    <div class="outdoor">-->
<!--                      <div class="outdoor-num">{{ outdoors.win }}{{ outdoors.win_speed }}级</div>-->
<!--                      <div class="outdoor-text" style="color:#6ec12d">风向风力</div>-->
<!--                    </div>-->
<!--                  </el-col>-->

<!--                </el-row>-->
<!--              </el-card>-->
              <!--空调监测卡片-->
              <el-card class="box-card-air" style="height: 34vh;width: 100%">
                <div slot="header" class="clearfix"><span>空调监测</span></div>
                <el-row :gutter="2" style="margin-top:2vh;">
                  <el-col :span="3">
                    <div class="bg-clear"> &nbsp;&nbsp;</div>
                  </el-col>
                  <el-col :span="4">
                    <div class="image-contain">
                      <img src="../../assets/anqiju/zhongyangkongtiao.png" class="kongtiao-image">
                    </div>
                    <div class="air-name">主卧</div>
                  </el-col>
                  <el-col :span="4">
                    <div class="image-contain">
                      <img src="../../assets/anqiju/zhongyangkongtiao.png" class="kongtiao-image">
                    </div>
                    <div class="air-name">客厅</div>
                  </el-col>
                  <el-col :span="4">
                    <div class="image-contain">
                      <img src="../../assets/anqiju/zhongyangkongtiao.png" class="kongtiao-image">
                    </div>
                    <div class="air-name">儿童房</div>
                  </el-col>

                  <el-col :span="4">
                    <div class="image-contain">
                      <img src="../../assets/anqiju/zhongyangkongtiao.png" class="kongtiao-image">
                    </div>
                    <div class="air-name">多功能房</div>
                  </el-col>

                  <el-col :span="4">
                    <div class="image-contain">
                      <img src="../../assets/anqiju/zhongyangkongtiao.png" class="kongtiao-image">
                    </div>
                    <div class="air-name">厨房</div>
                  </el-col>
                </el-row>
                <el-row :gutter="2" style="margin-top: 1vh;margin-left: 0.5vw;margin-right: 0.5vw">
                  <el-col :span="3">
                    <div class="air-text">温度:</div>
                    <div class="air-text">风速:</div>
                    <div class="air-text">模式:</div>
                  </el-col>
                  <el-col :span="4">
                    <div class="air-num">{{ aircondition.masterbedroom.temperature }}<span class="air-unit">℃</span>
                    </div>
                    <div class="air-num">{{ aircondition.masterbedroom.windspeed }}</div>
                    <div class="air-num">{{ aircondition.masterbedroom.mode }}</div>
                  </el-col>
                  <el-col :span="4">
                    <div class="air-num">{{ aircondition.sittingroom.temperature }}<span class="air-unit">℃</span></div>
                    <div class="air-num">{{ aircondition.sittingroom.windspeed }}</div>
                    <div class="air-num">{{ aircondition.sittingroom.mode }}</div>
                  </el-col>
                  <el-col :span="4">
                    <div class="air-num">{{ aircondition.childrenbedroom.temperature }}<span class="air-unit">℃</span>
                    </div>
                    <div class="air-num">{{ aircondition.childrenbedroom.windspeed }}</div>
                    <div class="air-num">{{ aircondition.childrenbedroom.mode }}</div>
                  </el-col>
                  <el-col :span="4">
                    <div class="air-num">{{ aircondition.study.temperature }}<span class="air-unit">℃</span></div>
                    <div class="air-num">{{ aircondition.study.windspeed }}</div>
                    <div class="air-num">{{ aircondition.study.mode }}</div>
                  </el-col>
                  <el-col :span="4">
                    <div class="air-num">{{ aircondition.kitchen.temperature }}<span class="air-unit">℃</span></div>
                    <div class="air-num">{{ aircondition.kitchen.windspeed }}</div>
                    <div class="air-num">{{ aircondition.kitchen.mode }}</div>
                  </el-col>

                </el-row>
              </el-card>

              <!--新风监测卡片-->
              <el-card class="box-card-air" style="height: 34vh;width: 100%">
                <div slot="header" class="clearfix"><span>新风监测</span></div>
                <el-row :gutter="2" style="margin-top:2vh;">
                  <el-col :span="3">
                    <div class="bg-clear"> &nbsp;&nbsp;</div>
                  </el-col>
                  <el-col :span="4">
                    <div class="image-contain">
                      <img src="../../assets/anqiju/vent.png" class="kongtiao-image">
                    </div>
                    <div class="air-name">主卧</div>
                  </el-col>
                  <el-col :span="4">
                    <div class="image-contain">
                      <img src="../../assets/anqiju/vent.png" class="kongtiao-image">
                    </div>
                    <div class="air-name">客厅</div>
                  </el-col>
                  <el-col :span="4">
                    <div class="image-contain">
                      <img src="../../assets/anqiju/vent.png" class="kongtiao-image">
                    </div>
                    <div class="air-name">儿童房</div>
                  </el-col>

                  <el-col :span="4">
                    <div class="image-contain">
                      <img src="../../assets/anqiju/vent.png" class="kongtiao-image">
                    </div>
                    <div class="air-name">多功能房</div>
                  </el-col>

                  <el-col :span="4">
                    <div class="image-contain">
                      <img src="../../assets/anqiju/vent.png" class="kongtiao-image">
                    </div>
                    <div class="air-name">厨房</div>
                  </el-col>
                </el-row>
                <el-row :gutter="2" style="margin-top: 1vh;margin-left: 0.5vw;margin-right: 0.5vw">
                  <el-col :span="3">
<!--                    <div class="air-text">温度:</div>-->
                    <div class="air-text">风速:</div>
                    <div class="air-text">状态:</div>
                  </el-col>
                  <el-col :span="4">
<!--                    <div class="air-num">{{ aircondition.masterbedroom.temperature }}<span class="air-unit">℃</span>-->
<!--                    </div>-->
                    <div class="air-num">{{ vent.masterbedroom.windspeed }}</div>
                    <div class="air-num">{{ vent.masterbedroom.status }}</div>
                  </el-col>
                  <el-col :span="4">
<!--                    <div class="air-num">{{ aircondition.sittingroom.temperature }}<span class="air-unit">℃</span></div>-->
                    <div class="air-num">{{ vent.sittingroom.windspeed }}</div>
                    <div class="air-num">{{ vent.sittingroom.status }}</div>
                  </el-col>
                  <el-col :span="4">
<!--                    <div class="air-num">{{ aircondition.childrenbedroom.temperature }}<span class="air-unit">℃</span>-->
<!--                    </div>-->
                    <div class="air-num">{{ vent.childrenbedroom.windspeed }}</div>
                    <div class="air-num">{{ vent.childrenbedroom.status }}</div>
                  </el-col>
                  <el-col :span="4">
<!--                    <div class="air-num">{{ aircondition.study.temperature }}<span class="air-unit">℃</span></div>-->
                    <div class="air-num">{{ vent.study.windspeed }}</div>
                    <div class="air-num">{{ vent.study.status }}</div>
                  </el-col>
                  <el-col :span="4">
<!--                    <div class="air-num">{{ aircondition.kitchen.temperature }}<span class="air-unit">℃</span></div>-->
                    <div class="air-num">{{ vent.kitchen.windspeed }}</div>
                    <div class="air-num">{{ vent.kitchen.status }}</div>
                  </el-col>

                </el-row>
              </el-card>


            </el-col>

            <!--房间图片容器-->
            <el-col :span="8">
              <div class="room-picture"
                   style="margin-left:-0.5vw;margin-top: 2vh;margin-right:-0.5vw;height: 80vh"></div>
            </el-col>
            <!--右-->
            <el-col :span="8">
              <!--  能耗监测卡片   -->
              <el-card class="box-card-energy" style="height: 24vh">
                <div slot="header" class="clearfix"><span>能耗监测</span>
                  <div class="header-button">
                    <el-image :src="qieHuan" @click="toggleenergy"></el-image>
                  </div>
                </div>
                <!--  总能耗     -->
                <div v-show="showenergy">
                  <el-row :gutter="2" style="margin-left: 1vw;margin-top: 1vh">
                    <el-col :span="8">
                      <div class="energy-text">
                        | 日能耗
                      </div>
                    </el-col>
                    <el-col :span="8">
                      <div class="energy-text">
                        | 月能耗
                      </div>
                    </el-col>
                    <el-col :span="8">
                      <div class="energy-text">
                        | 年能耗
                      </div>
                    </el-col>
                  </el-row>

                  <el-row :gutter="2" style="margin-left: 1vw;margin-top: 1vh">
                    <el-col :span="8">
                      <div class="energy-num">{{ dianMonitoringData.day }} <span
                        class="energy-uint">kWh</span></div>
                    </el-col>
                    <el-col :span="8">
                      <div class="energy-num">{{ dianMonitoringData.month  }}<span
                        class="energy-uint">kWh</span></div>
                    </el-col>
                    <el-col :span="8">
                      <div class="energy-num">{{ dianMonitoringData.year }}<span
                        class="energy-uint">kWh</span></div>
                    </el-col>
                  </el-row>

                  <el-row :gutter="2" style="margin-left: 1vw;">
                    <el-col :span="8">
                      <div style="margin-top: 1vh">
                        <span class="top-unit">同比: </span>
                        <span class="top-number-white" v-if="dianMonitoringData.dayTongbi !== '— —'">
                          {{ dianMonitoringData.dayTongbi }}%
                          <i v-if="dianMonitoringData.dayTongbi < 0" class="el-icon-caret-bottom green-arrow"></i>
                          <i v-else-if="dianMonitoringData.dayTongbi > 0" class="el-icon-caret-top red-arrow"></i>
                        </span>
                        <span v-else class="top-number-white">
                          {{ dianMonitoringData.dayTongbi }}
                        </span>
                      </div>
                      <div style="margin-top: 1vh">
                        <span class="top-unit">环比: </span>
                        <span class="top-number-white" v-if="dianMonitoringData.dayHuanbi !== '— —'">
                          {{ dianMonitoringData.dayHuanbi }}%
                          <i v-if="dianMonitoringData.dayHuanbi < 0" class="el-icon-caret-bottom green-arrow"></i>
                          <i v-else-if="dianMonitoringData.dayHuanbi > 0" class="el-icon-caret-top red-arrow"></i>
                        </span>
                        <span v-else class="top-number-white">
                          {{ dianMonitoringData.dayHuanbi }}
                        </span>
                      </div>
                    </el-col>
                    <el-col :span="8">
                      <div style="margin-top: 1vh">
                        <span class="top-unit">同比: </span>
                        <span class="top-number-white" v-if="dianMonitoringData.monthTongbi !== '— —'">
                          {{dianMonitoringData.monthTongbi }}%
                          <i v-if="dianMonitoringData.monthTongbi < 0" class="el-icon-caret-bottom green-arrow"></i>
                          <i v-else-if="dianMonitoringData.monthTongbi > 0" class="el-icon-caret-top red-arrow"></i>
                        </span>
                        <span v-else class="top-number-white">
                          {{dianMonitoringData.monthTongbi }}
                        </span>
                      </div>
                      <div style="margin-top: 1vh">
                        <span class="top-unit">环比: </span>
                        <span class="top-number-white" v-if="dianMonitoringData.monthHuanbi !== '— —'">
                          {{dianMonitoringData.monthHuanbi }}%
                          <i v-if="dianMonitoringData.monthHuanbi < 0" class="el-icon-caret-bottom green-arrow"></i>
                          <i v-else-if="dianMonitoringData.monthHuanbi > 0" class="el-icon-caret-top red-arrow"></i>
                        </span>
                        <span v-else class="top-number-white">
                          {{dianMonitoringData.monthHuanbi }}
                        </span>
                      </div>
                    </el-col>
                    <el-col :span="8">
                      <div style="margin-top: 1vh">
                        <span class="top-unit">同比: </span>
                        <span class="top-number-white" v-if="dianMonitoringData.yearTongbi !== '— —'">
                          {{ dianMonitoringData.yearTongbi }}%
                          <i v-if="dianMonitoringData.yearTongbi < 0" class="el-icon-caret-bottom green-arrow"></i>
                          <i v-else-if="dianMonitoringData.yearTongbi > 0" class="el-icon-caret-top red-arrow"></i>
                        </span>
                        <span v-else class="top-number-white">
                          {{ dianMonitoringData.yearTongbi }}
                        </span>
                      </div>
                      <div style="margin-top: 1vh">
                        <span class="top-unit">环比: </span>
                        <span class="top-number-white" v-if="dianMonitoringData.yearHuanbi!== '— —'">
                          {{ dianMonitoringData.yearHuanbi }}%
                          <i v-if="dianMonitoringData.yearHuanbi < 0" class="el-icon-caret-bottom green-arrow"></i>
                          <i v-else-if="dianMonitoringData.yearHuanbi > 0" class="el-icon-caret-top red-arrow"></i>
                        </span>
                        <span v-else class="top-number-white">
                          {{ dianMonitoringData.yearHuanbi }}
                        </span>
                      </div>
                    </el-col>
                  </el-row>
                </div>
                <!--     能耗分项           -->
                <div v-show="!showenergy" ref="dianPartBar" style="width:24vw; height: 18vh;margin-left: 0.5vw;margin-right: 0.5vw"></div>
                <!--                <div v-if="!showenergy">-->
                <!--                  <el-row :gutter="2" style="margin-left: 1vw;margin-top: 4vh">-->
                <!--                    <el-col :span="10">-->
                <!--                      <div class="energy-text">-->
                <!--                        | 年累计耗电量-->
                <!--                      </div>-->
                <!--                    </el-col>-->
                <!--                    <el-col :span="7">-->
                <!--                      <div class="energy-text">-->
                <!--                        | 碳排-->
                <!--                      </div>-->
                <!--                    </el-col>-->
                <!--                    <el-col :span="7">-->
                <!--                      <div class="energy-text">-->
                <!--                        | 标煤-->
                <!--                      </div>-->
                <!--                    </el-col>-->
                <!--                  </el-row>-->

                <!--                  <el-row :gutter="2" style="margin-left: 1vw;margin-top: 1vh">-->
                <!--                    <el-col :span="10">-->
                <!--                      <div class="energy-num">{{ (totalElectricity / ri).toFixed(2) }}<span-->
                <!--                        class="energy-uint">kWh</span></div>-->
                <!--                    </el-col>-->
                <!--                    <el-col :span="7">-->
                <!--                      <div class="energy-num">{{ (totalCarbonEmissions / 1000).toFixed(2) }}<span-->
                <!--                        class="energy-uint">kg</span></div>-->
                <!--                    </el-col>-->
                <!--                    <el-col :span="7">-->
                <!--                      <div class="energy-num">{{ (totalStandardCoal / 1000).toFixed(2) }}<span-->
                <!--                        class="energy-uint">kg</span></div>-->
                <!--                    </el-col>-->
                <!--                  </el-row>-->
                <!--                </div>-->


              </el-card>
              <!--    用能趋势          -->
              <el-card class="box-card-outdoor" style="height: 28vh">
                <div slot="header" class="clearfix"><span>用能趋势</span>
                  <el-select class="select_dianPart"
                             :popper-append-to-body="false"
                             v-model="valueDianMainType" @change="drawdianchart"
                             style="margin-left: auto;margin-right:8%;width:10vw;height:5vh"
                             placeholder="请选择">
                    <el-option
                      v-for="item in optionsDianMainType"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>

                </div>
                <div ref="drawDianchart" style="width: 100%; height:22vh;"></div>
              </el-card>
              <!--  室内环境卡片        -->
              <el-card class="box-card-indoor" style="height: 28vh">
                <div slot="header" class="clearfix"><span>室内环境</span>
                  <div class="header-button">
                    <el-image :src="qieHuan" @click="toggleLineChart"></el-image>
                  </div>
                </div>
                <div ref="environBar" style="width: 100%; height:22vh;"></div>
              </el-card>

            </el-col>
          </el-row>
        </div>
        <!--环境监测界面-->
        <div v-show="activeIndex === '2'" :style="{height: '100%'}">
          <el-card class="box-card-environPart">
            <div slot="header" class="clearfix">
              <span> 环境监测</span>
            </div>
            <el-row :gutter="2" style="margin-top: 1vh;margin-left: 1.5vw">
              <el-col :span="12">
                <!-- 温度环境监测卡片                  -->
                <el-card class="box-card-environLine">
                  <div slot="header" class="clearfix1">
                    <i class="iconfont icon-wendu" style="font-size:2vw;color: #00C9FF;margin-right: 0.8vw "></i>
                    <span> 温度</span>
                  </div>
                  <div ref="environTemp" style="width: 40vw;height: 31vh "></div>
                </el-card>
              </el-col>
              <el-col :span="12">
                <div class="grid-content">
                  <!-- 湿度环境监测卡片                  -->
                  <el-card class="box-card-environLine">
                    <div slot="header" class="clearfix1">
                      <i class="iconfont icon-shidu" style="font-size:2vw;color: #00C9FF;margin-right: 0.8vw "></i>
                      <span> 湿度</span>
                    </div>
                    <div ref="environHum" style="width:40vw;height: 31vh"></div>
                  </el-card>
                </div>
              </el-col>
            </el-row>

            <el-row :gutter="2" style="margin-top: 0.5vh;margin-left: 1.5vw">
              <el-col :span="12">
                <div class="grid-content">
                  <!-- CO2环境监测卡片                  -->
                  <el-card class="box-card-environLine">
                    <div slot="header" class="clearfix1">
                      <i class="iconfont icon-CO2nongdu" style="font-size:2vw;color: #00C9FF;margin-right: 0.8vw "></i>
                      <span> CO₂</span>
                    </div>
                    <div ref="environCO2" style="width: 40vw;height:  31vh"></div>
                  </el-card>
                </div>
              </el-col>
              <el-col :span="12">
                <div class="grid-content">
                  <!-- PM环境监测卡片                  -->
                  <el-card class="box-card-environLine">
                    <div slot="header" class="clearfix1">
                      <i class="iconfont icon-a-PM25" style="font-size:2vw;color: #00C9FF;margin-right: 0.8vw "></i>
                      <span> PM2.5/PM10</span>
                      <div class="header-button">
                        <el-image :src="qieHuan" @click="QiehuanPMLineChart"></el-image>
                      </div>
                    </div>
                    <div ref="environPM25" style="width:40vw;height: 31vh"></div>
                  </el-card>
                </div>
              </el-col>
            </el-row>

          </el-card>
        </div>
        <!--PMV界面-->
        <div v-show="activeIndex === '3'" :style="{height: '100%'}">
          <el-row :gutter="10">
            <el-col :span="12">
              <div>
                <!--人员设置卡片 -->
                <el-card class="box-card-Person" :style="{ height: 'calc(40vh) !important'}">
                  <div slot="header" class="clearfix">
                    <span>人员信息</span>
                  </div>
                  <div style="margin-left: 5vw;margin-top: 2.5vh">
                    <!-- 使用 el-input 选择人数 -->
                    <el-form>
                      <el-form-item label="请输入人数 (1-3 人):">
                        <el-input-number v-model="personCount" :min="1" :max="3" @change="generateForms"
                                         style="width: 8vw"></el-input-number>
                      </el-form-item>
                    </el-form>
                    <div style="height: 14vh; overflow-y: auto;margin-right: 10vw">
                      <!-- 动态生成的人员表单 -->
                      <el-form v-for="(person, index) in persons" :key="index" :inline="true" label-width="4vw">
                        <div style="font-size: 1.1vw;font-weight: bold;margin-top: 0.5vh;margin-bottom: 0.5vh">人员
                          {{ index + 1 }}
                        </div>

                        <!-- 性别输入 -->
                        <el-form-item label="性别">
                          <el-select class=" selectgender" v-model="person.gender" placeholder="请选择"
                                     style="width: 6vw;">
                            <el-option label="男" value=1></el-option>
                            <el-option label="女" value=0></el-option>
                          </el-select>
                        </el-form-item>

                        <!-- 年龄输入 -->
                        <el-form-item label="年龄">
                          <el-input v-model="person.age" placeholder="请输入年龄" style="width: 8vw;"></el-input>
                        </el-form-item>
                      </el-form>
                      <!-- 提交按钮 -->
                    </div>
                    <div class="confirm-text-right ">
                      <el-button @click="submitData">提交</el-button>
                    </div>
                    <!-- 提交后的数据展示 -->
                  </div>
                </el-card>
              </div>
              <div>
                <!--  PMV推荐卡片  -->
                <el-card class="box-card-ACSet" :style="{ height: 'calc(44vh) !important'}">
                  <div slot="header" class="clearfix">
                    <span>PMV推荐</span>
                  </div>
                  <div style="width: 100%">
                    <el-row :gutter="20" style="margin-left: 1vw;margin-top: 2vh">
                      <el-col :span="3">
                        <div><i class="iconfont icon-wendu AClogo"></i></div>
                      </el-col>
                      <el-col :span="3">
                        <div class="ACSet-num" style="">{{ ACSet.tem }} ℃</div>
                        <div class="ACSet-text" style="color:#75d5ff;">推荐温度</div>
                      </el-col>
                      <el-col :span="1">
                        <div class="text-info">&nbsp;&nbsp;</div>
                      </el-col>
                      <el-col :span="3">
                        <div><i class="iconfont icon-fengsu AClogo" style=""></i></div>
                      </el-col>
                      <el-col :span="3">
                        <div class="ACSet-num" style="">{{ aircondition.childrenbedroom.windspeed }}</div>
                        <div class="ACSet-text">推荐风速</div>
                      </el-col>
                      <el-col :span="1">
                        <div class="text-info">&nbsp;&nbsp;</div>
                      </el-col>
                      <el-col :span="3">
                        <div><i class="iconfont icon-kongtiaomoshi AClogo"></i></div>
                      </el-col>
                      <el-col :span="3">
                        <div class="ACSet-num">{{ aircondition.childrenbedroom.mode }}</div>
                        <div class="ACSet-text">推荐模式</div>
                      </el-col>
                      <el-col :span="1">
                        <div class="text-info">&nbsp;&nbsp;</div>
                      </el-col>
                    </el-row>

                  </div>
                  <div ref="ACSETTemp" style="width: 40vw; height:28vh;"></div>
                </el-card>
              </div>

            </el-col>
            <el-col :span="12">
              <div>
                <!--  空调监测卡片  -->
                <el-card class="box-card-ACRun" :style="{ height: 'calc(40vh) !important'}">
                  <div slot="header" class="clearfix">
                    <span>空调状态</span>
                  </div>
                  <el-row :gutter="20" style="margin-left: 2vw;margin-top: 2vh">
                    <el-col :span="3">
                      <div><i class="iconfont icon-wendu AClogo"></i></div>
                    </el-col>
                    <el-col :span="3">
                      <div class="ACSet-num" style="">{{ACactual.tem }} ℃</div>
                      <div class="ACSet-text">温度</div>
                    </el-col>
                    <el-col :span="1">
                      <div class="text-info"></div>
                    </el-col>
                    <el-col :span="3">
                      <div><i class="iconfont icon-fengsu AClogo" style=""></i></div>
                    </el-col>
                    <el-col :span="3">
                      <div class="ACSet-num" style="">{{  aircondition.childrenbedroom.windspeed}}</div>
                      <div class="ACSet-text">风速</div>
                    </el-col>
                    <el-col :span="1">
                      <div class="text-info"></div>
                    </el-col>
                    <el-col :span="3">
                      <div><i class="iconfont icon-kongtiaomoshi AClogo"></i></div>
                    </el-col>
                    <el-col :span="3">
                      <div class="ACSet-num">{{ aircondition.childrenbedroom.mode }}</div>
                      <div class="ACSet-text">模式</div>
                    </el-col>
                    <el-col :span="1">
                      <div class="text-info"></div>
                    </el-col>
                  </el-row>
                  <div ref="ACTemp" style="width: 38vw; height:26vh;"></div>
                </el-card>

              </div>

              <div>
                <!--  环境监测卡片  -->
                <el-card class="box-card-ACRun" :style="{ height: 'calc(44vh) !important'}">
                  <div slot="header" class="clearfix">
                    <span>环境监测</span>
                  </div>
                  <el-row :gutter="2" style="margin-left: 2vw;margin-top: 1vh">
                    <el-col :span="2">
                      <div class="text-info"></div>
                    </el-col>
                    <el-col :span="3">
                      <div><i class="iconfont icon-wendu AClogo"></i></div>
                    </el-col>
                    <el-col :span="3">
                      <div class="ACSet-num" style="">{{ temperature[2] }}℃</div>
                      <div class="ACSet-text">温度</div>
                    </el-col>
                    <el-col :span="2">
                      <div class="text-info"></div>
                    </el-col>
                    <el-col :span="3">
                      <div><i class="iconfont icon-shidu AClogo"></i></div>
                    </el-col>
                    <el-col :span="3">
                      <div class="ACSet-num" style="">{{ humidity[2] }}%</div>
                      <div class="ACSet-text">湿度</div>
                    </el-col>
                    <el-col :span="2">
                      <div class="text-info"></div>
                    </el-col>

                  </el-row>
                  <div ref="THLine" style="width: 38vw; height:30vh;"></div>
                </el-card>
              </div>
            </el-col>
          </el-row>
        </div>
        <!-- 知识图谱界面     -->
        <div v-show="activeIndex === '4'" :style="{height: '100%'}">
          <el-card class="box-card-zhishi" >
            <div slot="header" class="clearfix"><span>知识图谱</span></div>
            <div class="zhishi_info" style="margin-top: 1vh;margin-left: 2vw">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;知识图谱是结构化的语义知识库，主要由节点和边组成，节点代表实体或概念，边则表示实体间的属性或关系。
              它是用图谱模型来描述知识和建模世界万物之间的关联关系的技术方法，旨在将复杂的知识领域通过数据挖掘、
              信息处理、知识计量和图形绘制显示出来，揭示知识领域的动态发展规律。
            </div>
            <el-row :gutter="2" style="margin-left:5vw;margin-top:3.5vh">
              <el-col :span="12">

                <div class="Picture_contain">
                  <div
                    style="width: 100%;height:4vh;margin-left:3vw;font-size: 1.2vw;display: flex;align-items: flex-start;">
                    <span style="line-height: 4vh;margin-top: 0.2vh">PMV</span>
                  </div>
                  <div class="zhishi_info1" style="margin-top:2vh;margin-left:1.5vw;width: 30vw;">

                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;个性化PMV知识图谱是一个关于人体、环境、空调系统调控的综合展示
                    ，通过复杂的网络结构，将各个概念和实体相互连接，清晰地展示了它们之间的关联性和相互影响，为我们提供了一个全面、
                    系统的视角来理解和分析用户与环境之间的交互关系， 以及如何通过个性化PMV算法调控空调系统来实现人体舒适度和节能的双重目标。
                  </div>
                  <div
                    style="display: flex; justify-content: center; align-items: center; height: 38vh;margin-top:2vh;">
                    <img src="../../assets/anqiju/PMV.png" style="width:65%;height: 100%">
                  </div>
                </div>

              </el-col>
              <el-col :span="12">
                <div class="Picture_contain">
                  <div
                    style="width: 100%;height:4vh;margin-left:3vw;font-size: 1.2vw;display: flex;align-items: flex-start;"><span
                    style="line-height: 4vh;margin-top: 0.2vh">{{
                      selectedLabel
                    }}</span>
                    <el-select class="select_dianPart"
                               :popper-append-to-body="false"
                               v-model="valueRoomMainType"
                               @change="selectRoom"
                               style="margin-left: 10vw;margin-top:-1vh;margin-bottom:5vh;width:10vw;height:5vh"
                               placeholder="请选择">


                      <el-option
                        v-for="item in optionsRoomMainType"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>

                  </div>
                  <div v-show="selectedLabel=== '主卧'">
                    <div class="zhishi_info1" style="margin-top: 2vh;margin-left:1.5vw;width: 30vw;height: 15vh">

                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;主卧知识图谱展示了主卧的智能家居系统，主要由环境探测器、智慧屏和智能灯等设备组成，这些设备通过WiFi连接，实现全屋环境监测等功能，
                      此外，用户可通过阅读模式操作系统控制窗帘、智能灯等家居设备，体现了智能家居主卧的便捷性和智能化水平。
                    </div>
                    <div
                      style="display: flex; justify-content: center; align-items: center; height: 35vh;margin-top:2vh;">
                      <img src="../../assets/anqiju/masterbedroom.png" style="width:60%;height: 100%">
                    </div>
                  </div>

                  <div v-show="selectedLabel=== '客餐厅'">
                    <div class="zhishi_info1" style="margin-top: 2vh;margin-left:1.5vw;width: 30vw;height: 15vh">

                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;客餐厅知识图谱涵盖了环境监控、智能调控、橱柜收纳等功能，通过中心的集成系统，智能灯、窗帘电机等设备实现全屋智能调控，
                      整个图谱展示了智能家居客餐厅的全方位智能化，旨在提升客餐厅等家庭区域的生活质量和便利性。
                    </div>
                    <div
                      style="display: flex; justify-content: center; align-items: center; height: 35vh;margin-top:2vh;">
                      <img src="../../assets/anqiju/sittingroom.png" style="width:60%;height: 100%">
                    </div>
                  </div>

                  <div v-show="selectedLabel=== '儿童房'">
                    <div class="zhishi_info1" style="margin-top: 2vh;margin-left:1.5vw;width: 30vw;height: 15vh">

                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;儿童房知识图谱以儿童房为核心，通过配备多个智能设备包括摄像头、智能灯、智能门锁等实现了智能监控与唤醒模式等功能。
                      此外，全屋WiFi提供了全面的网络覆盖功能，提高了家庭的安全性和便利性，通过自动化控制实现儿童房的智能化管理。
                    </div>
                    <div
                      style="display: flex; justify-content: center; align-items: center; height: 35vh;margin-top:2vh;">
                      <img src="../../assets/anqiju/childrenroom.png" style="width:60%;height: 100%">
                    </div>
                  </div>
                  <div v-show="selectedLabel=== '玄关'">
                    <div class="zhishi_info1" style="margin-top: 2vh;margin-left:1.5vw;width: 30vw;height: 15vh">

                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;玄关知识图谱展示了智能家居玄关系统的组成部分和交互方式，涵盖了摄像头、智慧门锁、计量空开、全屋WiFi等多种智能设备、提供了能耗总控以及玄关离家归家等功能，
                      各元素协同工作，旨在提供智能化居住环境，实现自动化管理和节能。
                    </div>
                    <div
                      style="display: flex; justify-content: center; align-items: center; height: 35vh;margin-top:2vh;">
                      <img src="../../assets/anqiju/hallway.png" style="width:60%;height: 100%">
                    </div>
                  </div>
                  <div v-show="selectedLabel=== '卫生间'">
                    <div class="zhishi_info1" style="margin-top:2vh;margin-left:1.5vw;width: 30vw;height: 15vh">

                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;卫生间知识图谱展示了卫生间智能家居系统的多个组成部分，图谱中的节点包括环境监控、智能调控、智能如厕、环境探测器、空气净化器、
                      人体传感器等，通过它们之间的相互作用提升了卫生间的智能化水平，提供了舒适、便捷的使用体验。
                    </div>
                    <div
                      style="display: flex; justify-content: center; align-items: center; height: 35vh;margin-top:2vh;">
                      <img src="../../assets/anqiju/bathroom.png" style="width:60%;height: 100%">
                    </div>
                  </div>
                  <div v-show="selectedLabel=== '厨房'">
                    <div class="zhishi_info1" style="margin-top: 2vh;margin-left:1.5vw;width: 30vw;height: 15vh">

                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;厨房知识图谱详细展示了厨房智能系统的各个组成部分及其功能，涵盖了燃气、水浸等安全监测功能，通过“一键报警”实现快速提醒，同时强调了智能设备在厨房中的应用，
                      如智能烹饪调控、智能抽油烟机、智能灯光等，提升了智能家居厨房系统的智能化水平。
                    </div>
                    <div
                      style="display: flex; justify-content: center; align-items: center; height: 35vh;margin-top:2vh;">
                      <img src="../../assets/anqiju/kitchen.png" style="width:60%;height: 100%">
                    </div>
                  </div>
                </div>
              </el-col>
            </el-row>
          </el-card>


        </div>

        <div v-show="activeIndex === '5'" :style="{height: '100%'}">
          <el-row :gutter="20">
            <el-col :span="24">
              <div class="grid-content">
                <el-card class="box-card-energyHistory">
                  <div slot="header" class="clearfix"><span> 历史数据</span>
                    <el-form class="excelform" ref="form" :model="queryEnvironData"
                             label-width="0px"
                             style="display: flex; flex-wrap: wrap; margin-left:35%;margin-top: 1vh">
                      <el-form-item>
                        <el-cascader class="objectselect"
                                     v-model="queryEnvironData.item"
                                     :options="optionsHistory"
                                     style="margin-left: auto;width: 10vw"
                                     placeholder="请选择数据项"
                                     @change="searchEnviron">
                        </el-cascader>
                      </el-form-item>
                      <el-form-item>
                        <template>
                          <el-date-picker class="dateselect"
                                          v-model="queryEnvironData.dateRange[0]"
                                          type="date"
                                          style="margin-left: 2vw;width: 15vw"
                                          :picker-options="pickerOptionsEnvironHistory"
                                          placeholder="开始日期"
                                          @change="searchEnviron"
                          ></el-date-picker>
                          <el-date-picker class="dateselect"
                                          v-model="queryEnvironData.dateRange[1]"
                                          type="date"
                                          style="margin-left:2vw;width: 15vw"
                                          :picker-options="pickerOptionsEnvironHistory"
                                          placeholder="结束日期"
                                          @change="searchEnviron"
                          ></el-date-picker>
                        </template>
                      </el-form-item>
                    </el-form>
                  </div>
                  <div style="height: 70vh; display: flex; flex-direction: column;">
                  <!--Table:表格组件-->
<!--                  <el-table :data="showEnvironData"-->
<!--                            style="width: 100%;margin-top: 1.5vh;height: 70vh"-->
                    <el-table :data="showEnvironData"
                              style="width: 100%;margin-top: 1.5vh;"
                              height="70vh"

                            :header-cell-style="{textAlign: 'center', fontSize: '0.85vw',lineHeight: '4vh',Height:'4vh'}"
                            :cell-style="{ textAlign: 'center', fontSize: '0.85vw',lineHeight: '4vh',Height:'4vh' }">


                    <!-- 环境报表的表头 -->
                    <template v-if="queryEnvironData.item[0] == '1'">
                      <el-table-column prop="time" label="时间" :formatter="formatTimeHistoryShow"></el-table-column>
                      <el-table-column prop="devName" label="房间" :formatter="formatRoomName"></el-table-column>
                      <el-table-column prop="temperature" label="温度(℃)"
                                       :formatter="formatTemperature"></el-table-column>
                      <el-table-column prop="humidity" label="湿度(%)" :formatter="formatHumidity"></el-table-column>
                      <el-table-column prop="co2" label="CO2(PPM)"></el-table-column>
                      <el-table-column prop="pm25" label="PM2.5(μg/m³)"></el-table-column>
                      <el-table-column prop="pm10" label="PM10(μg/m³)"></el-table-column>
                    </template>
                    <!-- 用电分项的表头 -->
                    <template v-else-if="queryEnvironData.item[0] == '0'">
                      <el-table-column prop="time" label="时间"
                                       :formatter="formatTimeHistoryShow"></el-table-column>
                      <el-table-column prop="allPower" label="总电量"></el-table-column>
                      <el-table-column prop="lightPower" label="照明" :formatter="formatNA"></el-table-column>
<!--                      <el-table-column prop="socketPower" label="插座" :formatter="formatNA"></el-table-column>-->
                      <el-table-column prop="airconditionPower" label="空调" :formatter="formatNA"></el-table-column>
                      <el-table-column prop="freshPower" label="新风" :formatter="formatNA"></el-table-column>
                    </template>


                      <!-- 空调的表头 -->
                    <template v-else-if="queryEnvironData.item[0] == '2'">
                      <el-table-column prop="time" label="时间" :formatter="formatTimeHistoryShow"></el-table-column>
                      <el-table-column prop="devName" label="房间" :formatter="formatACName"></el-table-column>
                      <el-table-column prop="status" label="状态" :formatter="formatStatus"></el-table-column>
                      <el-table-column prop="temperature" label="温度(℃)" :formatter="formatNA"></el-table-column>
                      <el-table-column prop="windSpeed" label="风速" :formatter="formatWindspeed"></el-table-column>
                      <el-table-column prop="mode" label="模式" :formatter="formatMode"></el-table-column>
                    </template>

                      <!-- 新风的表头 -->
                      <template v-else-if="queryEnvironData.item[0] == '3'">
                        <el-table-column prop="time" label="时间" :formatter="formatTimeHistoryShow"></el-table-column>
                        <el-table-column prop="devName" label="房间" :formatter="formatXFName"></el-table-column>
                        <el-table-column prop="status" label="状态" :formatter="formatStatus"></el-table-column>
                        <el-table-column prop="windSpeed" label="风速" :formatter="formatWindspeed"></el-table-column>
                      </template>


                  </el-table>
                  </div>
                  <div style="display: flex; justify-content: right;margin-top: 2vh;">
                    <!-- 分页组件 -->
                    <el-pagination
                      background
                      @size-change="handleSizeChangeEnviron"
                      @current-change="handleCurrentChangeEnviron"
                      :current-page="queryEnvironData.currentPage"
                      :page-sizes="[15, 30, 45, 60]"
                      :page-size="queryEnvironData.pageSize"
                      layout="total, sizes, prev, pager, next, jumper"
                      :total="tableEnvironDataHistory.length">
                    </el-pagination>
                  </div>
                </el-card>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-main>
    </el-container>

  </div>
</template>

<script>
  import * as echarts from 'echarts';
  import axios from "axios";

  export default {
    name: "dataView_anqiju",
    data() {
      return {
        //获取视宽和视高
        fullWidth: document.documentElement.clientWidth,
        fullHeight: document.documentElement.clientHeight,
        //图片来源
        qieHuan: require('../../assets/anqiju/qiehuan.png'),

        //右上角显示实时时间
        nowTime: '',

        //选择子菜单显示
        activeIndex: '1',

        // 室外环境
        outdoors: {
          tem: '25',
          humidity: '78',
          pm25: '72',
          aqi: '97',
          uv: '最弱',
          win: '东南风',
          win_speed: '2'
        },

        //累计能耗相关数据（耗电量、碳排、标煤）
        totalElectricity: 42353,
        totalCarbonEmissions: 546,
        totalStandardCoal: 378,
        //用电量显示
        showenergy: true,
        //能耗因子设置内容
        input1Co2: '0.5703',
        input1Mei: '0.1229',
        //能耗分项数据
        EnergyDistribution: {
          aircondition: null,//空调
          socket: null,//插座
          light:null,//照明
          airfresh:null,//新风

        },

        //五个空调状态
        aircondition: {
          masterbedroom: {
            temperature: 27,
            mode: "制冷",
            windspeed: "中风",
          },
          childrenbedroom: {
            temperature: 27,
            mode: "制冷",
            windspeed: "中风",
          },
          study: {
            temperature: 27,
            mode: "制冷",
            windspeed: "中风",
          },
          sittingroom: {
            temperature: 27,
            mode: "制冷",
            windspeed: "中风",
          },
          kitchen: {
            temperature: 27,
            mode: "制冷",
            windspeed: "中风",
          },
        },
        //五个新风状态
        vent: {
          masterbedroom: {
            status: "运行中",
            windspeed: "中风",
          },
          childrenbedroom: {
            status: "运行中",
            windspeed: "中风",
          },
          study: {
            status: "运行中",
            windspeed: "",
          },
          sittingroom: {
            status: "运行中",
            windspeed: "中风",
          },
          kitchen: {
            status: "运行中",
            windspeed: "中风",
          },
        },

        //
        // //  儿童房新风系统
        // xinfeng2: {
        //   mode: "强净",
        //   windspeed: "中风",
        // },
        // //  主卧空调系统
        // air1: {
        //   mode: "制冷",
        //   tem: "26",
        //   windspeed: "中风",
        // },
        // //  儿童房空调系统
        // air2: {
        //   mode: "强净",
        //   tem: "26",
        //   windspeed: "中风",
        // },

        //主页室内环境监测折线图切换
        showTemperatureHumidity: true,
        //主页室内环境柱状图，当前12个环境表数据
        environAllNowData: {},
        temperature: [],
        humidity: [],

        // 切换环境监测PM图表显示
        showPM25: true,

        // 能耗监测页的(日能耗,月能耗,年能耗)
        dianMonitoringData: {
          day: '',
          dayTongbi: '',
          dayHuanbi: '',
          month: '',
          monthTongbi: '',
          monthHuanbi: '',
          year: '',
          yearTongbi: '',
          yearHuanbi: '',

        },


        //用电趋势
        valueDianMainType: '1',
        optionsDianMainType: [{
          value: '1',
          label: '日耗电'
        }, {
          value: '2',
          label: '周耗电'
        },
          {
            value: '3',
            label: '月耗电'
          },],
        personCount: 3, // 默认显示1人
        persons: [],    // 存储人员信息
        submitted: false,// 用于展示提交后的信息

        // 空调设置
        ACSet: {
          mode: "制冷",
          tem: "0",
          windspeed: "中风",
        },
        // 空调实际值
        ACactual: {
          mode: "制冷",
          tem: "22",
          windspeed: "中风",
        },
        //空调实际值变化
        // ACtemperatureList:[0,0,0,0,0,0,0,0,0,0],
        ACtemperatureList: new Array(30).fill(null),
        ACSETtemperatureList: new Array(30).fill(null),
        //显示知识图谱
        showPMV: true,
        selectedLabel: '主卧',
        valueRoomMainType: '1',
        optionsRoomMainType: [{
          value: '1',
          label: '主卧'
        }, {
          value: '2',
          label: '客餐厅'
        },
          {
            value: '3',
            label: '儿童房'
          },
          {
            value: '4',
            label: '厨房'
          },
          {
            value: '5',
            label: '卫生间'
          },
          {
            value: '6',
            label: '玄关'
          }],


        // 查询的报表数据

        tableEnvironDataHistory: [],
        showEnvironData: [],
        totalRowsEnviron: 0,
        queryEnvironData: {
          item: ['1', '环境探测器主卧'],
          dateRange: [],
          currentPage: 1, // 当前页
          pageSize: 15, // 每页显示的数据条数
        },
        optionsHistory: [{
          value: '0',
          label: '电量数据',
        }, {
          value: '1',
          label: '环境数据',
          children: [{
            value: '环境探测器客厅',
            label: '客厅'
          }, {
            value: '环境探测器主卧',
            label: '主卧'
          }, {
            value: '环境探测器儿童房',
            label: '儿童房'
          }, {
            value: '环境探测器浴室',
            label: '卫生间'
          },]
        }, {
          value: '2',
          label: '空调数据',
          children: [{
            value: '空调客厅',
            label: '客厅'
          }, {
            value: '空调主卧',
            label: '主卧'
          }, {
            value: '空调儿童房',
            label: '儿童房'
          }, {
            value: '空调多功能房',
            label: '多功能房'
          },
            {
              value: '空调厨房',
              label: '厨房'
            },
          ]
        },{
          value: '3',
          label: '新风数据',
          children: [{
            value: '新风客厅',
            label: '客厅'
          }, {
            value: '新风主卧',
            label: '主卧'
          }, {
            value: '新风儿童房',
            label: '儿童房'
          }, {
            value: '新风多功能房',
            label: '多功能房'
          },
            {
              value: '新风厨房',
              label: '厨房'
            },
          ]}

        ],
        pickerOptionsEnvironHistory: {
          disabledDate(time) { // 禁用当前时间以后的日期
            return time.getTime() > Date.now();
          }
        },


      }


    },
    mounted() {
      // 禁用浏览器中的缩放操作
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
      }, {passive: false});
      window.addEventListener('DOMMouseScroll', function (event) {
        if (event.ctrlKey === true || event.metaKey) {
          event.preventDefault();
        }
      }, {passive: false});

      //获取当前时间
      this.getNowTime();
      //获取室外环境
      this.getOutdoor();
      //用能趋势图表
      this.drawdianchart();
      //累计能耗
      this.getTotalEnergyMetric();
      //能耗分项
      this.drawDianPartNowBar();
      //  获得能耗环比同比
      this.getDayDianDataRatio();
      this.getMonthDianDataRatio();
      this.getYearDianDataRatio();

      //绘制室内环境柱状图
      this.drawEnvironmentBar();
      //绘制温度折线图
      this.drawEnvironmentTemperatureLine();
      //  绘制湿度折线图
      this.drawEnvironmentHumidityLine();
      //  绘制Co2折线图
      this.drawEnvironmentCo2Line();
      //  绘制PM折线图
      this.drawEnvironPMLine();

      //获取五个空调状态
      this.getAirConditionStatus();
      //获取空调推荐值
      this.searchACSET();
      //获取空调实际值
      this.searchACActual();
      setInterval(() => {
        this.searchACSET();
        this.searchACActual();
      }, 5000); // 每5秒调

      this.drawPMVTemandHum();
      // 页面加载时初始化表单
      this.generateForms();

      setInterval(() => {
        //获取室外环境
        this.getOutdoor();
        //累计能耗
        this.getTotalEnergyMetric();
        //能耗分项
        this.drawDianPartNowBar();
        // 用能趋势图表
        this.drawdianchart();
        //绘制室内环境柱状图
        this.drawEnvironmentBar();
        //绘制温度折线图
        this.drawEnvironmentTemperatureLine();
        //  绘制湿度折线图
        this.drawEnvironmentHumidityLine();
        //  绘制Co2折线图
        this.drawEnvironmentCo2Line();
        //  绘制PM折线图
        this.drawEnvironPMLine();
        //绘制被控房间温湿度
        this.drawPMVTemandHum();
        //  获得能耗环比同比
        this.getDayDianDataRatio();
        this.getMonthDianDataRatio();
        this.getYearDianDataRatio();
        this.drawdianchart();
        //获取五个空调状态
        this.getAirConditionStatus();
      }, 15 * 60 * 1000); // 每15分钟刷新
    },


    // updated() {
    //   this.$nextTick(() => {
    //     if (this.drawEnvironmentBar) {
    //       this.$nextTick(() => {
    //         this.drawEnvironmentBar.resize();
    //       });
    //     }
    //     if (this.drawEnvironmentTemperatureLine) {
    //       this.$nextTick(() => {
    //         this.drawEnvironmentTemperatureLine.resize();
    //       });
    //     }
    //     if (this.drawEnvironmentHumidityLine) {
    //       this.$nextTick(() => {
    //         this.drawEnvironmentHumidityLine.resize();
    //       });
    //     }
    //     if (this.drawEnvironmentCo2Line) {
    //       this.$nextTick(() => {
    //         this.drawEnvironmentCo2Line.resize()
    //       });
    //     }
    //     if ( this.drawEnvironPMLine) {
    //       this.$nextTick(() => {
    //         this.drawEnvironPMLine.resize();
    //       });
    //     }
    //   });
    // },

    methods: {
      // 计算视口宽度高度并转换为像素值
      calculateFontSize(vw) {
        return (vw / 100) * document.documentElement.clientWidth;
      },
      calculateFontSize1(vh) {
        return (vh / 100) * document.documentElement.clientHeight;
      },

      //右上角更新时间（一秒一次）
      getNowTime() {
        let speed = 1000
        let that = this
        let theNowTime = function () {
          that.nowTime = that.timeNumber()
        }
        setInterval(theNowTime, speed)
      },
      //获取当前时间的字符串表示
      timeNumber() {
        let today = new Date()
        let date = today.getFullYear() + '-' + this.twoDigits(today.getMonth() + 1) + '-' + this.twoDigits(today.getDate())
        let time = this.twoDigits(today.getHours()) + ':' + this.twoDigits(today.getMinutes()) + ':' + this.twoDigits(today.getSeconds())
        return date + '  ' + time
      },
      // 时间格式为两位数，确保数值小于 10 时前面补零
      twoDigits(val) {
        if (val < 10) return '0' + val
        return val
      },

      //切换导航菜单栏
      handleMenuSelect(index) {
        this.activeIndex = index
      },

      //获取室外环境
      //我的key是f8763456718a4392a15abb900608c618
      getOutdoor() {
        console.log('准备发送室外天气请求')
        //获取室外空气指数AQI和pm2.5
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
        //获取室外温湿度和风速风向
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
        //获取室外紫外线强度
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
      //能耗监测切换
      toggleenergy() {
        this.showenergy = !this.showenergy
      },
      // 获取累计能耗
      async getTotalEnergyMetric() {
        try {
          const response = await axios.get(`http://localhost:8080/getYearlyConsumptionAndGrowthRates`, {
            headers: {
              'Content-Type': 'application/json; charset=UTF-8',
            }
          });
          this.totalElectricity = parseFloat(response.data.total_consumption_this_year);
          console.log("累计能耗", response.data.total_consumption_this_year)
          this.totalCarbonEmissions = parseFloat((this.totalElectricity * this.input1Co2).toFixed(0));
          this.totalStandardCoal = parseFloat((this.totalElectricity * this.input1Mei).toFixed(0));

        } catch (error) {
          console.error(error);
        }
      },

      //  获取主卧空调运行状态
      async getMasterbedroomAC() {
        try {
          const response = await axios.get(`http://127.0.0.1:8080/getLastAC?devName=%E7%A9%BA%E8%B0%83%E4%B8%BB%E5%8D%A7`, {
            headers: {
              'Content-Type': 'application/json; charset=UTF-8',
            }
          });
          //设定温度
          const MasterbedroomACData = response.data;
          this.aircondition.masterbedroom.temperature = MasterbedroomACData.temperature;
          //风速
          if (MasterbedroomACData.windSpeed == 1) {
            this.aircondition.masterbedroom.windspeed = "高风";
          } else if (MasterbedroomACData.windSpeed == 2) {
            this.aircondition.masterbedroom.windspeed = "中风";
          } else if (MasterbedroomACData.windSpeed == 4) {
            this.aircondition.masterbedroom.windspeed = "低风";
          } else if (MasterbedroomACData.windSpeed == 0) {
            this.aircondition.masterbedroom.windspeed = "N/A";
          }

          //模式
          if (MasterbedroomACData.mode == '8') {
            this.aircondition.masterbedroom.mode = "制热";
          } else if (MasterbedroomACData.mode == '1') {
            this.aircondition.masterbedroom.mode = "制冷";
          } else if (MasterbedroomACData.mode == '4') {
            this.aircondition.masterbedroom.mode = "送风";
          } else if (MasterbedroomACData.mode == '2') {
            this.aircondition.masterbedroom.mode = "除湿";
          }

        } catch (error) {
          console.error(error);
        }

      },
      //  获取儿童房空调运行状态
      async getChildrenroomAC() {
        try {
          const response = await axios.get(`http://127.0.0.1:8080/getLastAC?devName=%E7%A9%BA%E8%B0%83%E5%84%BF%E7%AB%A5%E6%88%BF`, {
            headers: {
              'Content-Type': 'application/json; charset=UTF-8',
            }
          });
          //设定温度
          const ChildrenroomACData = response.data;
          this.aircondition.childrenbedroom.temperature = ChildrenroomACData.temperature;
          //风速
          if (ChildrenroomACData.windSpeed == 4) {
            this.aircondition.childrenbedroom.windspeed = "低风";
          } else if (ChildrenroomACData.windSpeed == 2) {
            this.aircondition.childrenbedroom.windspeed = "中风";
          } else if (ChildrenroomACData.windSpeed == 1) {
            this.aircondition.childrenbedroom.windspeed = "高风";
          } else if (ChildrenroomACData.windSpeed == 0) {
            this.aircondition.childrenbedroom.windspeed = "N?A";
          }

          //模式
          if (ChildrenroomACData.mode == '8') {
            this.aircondition.childrenbedroom.mode = "制热";
          } else if (ChildrenroomACData.mode == '1') {
            this.aircondition.childrenbedroom.mode = "制冷";
          } else if (ChildrenroomACData.mode == '4') {
            this.aircondition.childrenbedroom.mode = "送风";
          } else if (ChildrenroomACData.mode == '2') {
            this.aircondition.childrenbedroom.mode = "除湿";
          }

        } catch (error) {
          console.error(error);
        }

      },
      //  获取多功能房空调运行状态
      async getStudyAC() {
        try {
          const response = await axios.get(`http://127.0.0.1:8080/getLastAC?devName=%E7%A9%BA%E8%B0%83%E4%B9%A6%E6%88%BF`, {
            headers: {
              'Content-Type': 'application/json; charset=UTF-8',
            }
          });
          //设定温度
          const StudyACData = response.data;
          this.aircondition.study.temperature = StudyACData.temperature;
          //风速
          if (StudyACData.windSpeed == 4) {
            this.aircondition.study.windspeed = "低风";
          } else if (StudyACData.windSpeed == 2) {
            this.aircondition.study.windspeed = "中风";
          } else if (StudyACData.windSpeed == 1) {
            this.aircondition.study.windspeed = "高风";
          } else if (StudyACData.windSpeed == 0) {
            this.aircondition.study.windspeed = "N/A";
          }

          //模式
          if (StudyACData.mode == '8') {
            this.aircondition.study.mode = "制热";
          } else if (StudyACData.mode == '1') {
            this.aircondition.study.mode = "制冷";
          } else if (StudyACData.mode == '4') {
            this.aircondition.study.mode = "送风";
          } else if (StudyACData.mode == '2') {
            this.aircondition.study.mode = "除湿";
          }
        } catch (error) {
          console.error(error);
        }

      },
      //  获取客厅空调运行状态
      async getSittingroomAC() {
        try {
          const response = await axios.get(`http://127.0.0.1:8080/getLastAC?devName=%E7%A9%BA%E8%B0%83%E5%AE%A2%E5%8E%85`, {
            headers: {
              'Content-Type': 'application/json; charset=UTF-8',
            }
          });
          //设定温度
          const SittingroomACData = response.data;
          this.aircondition.sittingroom.temperature = SittingroomACData.temperature;
          //风速
          if (SittingroomACData.windSpeed == 4) {
            this.aircondition.sittingroom.windspeed = "低风";
          } else if (SittingroomACData.windSpeed == 2) {
            this.aircondition.sittingroom.windspeed = "中风";
          } else if (SittingroomACData.windSpeed == 1) {
            this.aircondition.sittingroom.windspeed = "高风";
          } else if (SittingroomACData.windSpeed == 0) {
            this.aircondition.sittingroom.windspeed = "N/A";
          }

          //模式
          if (SittingroomACData.mode == '8') {
            this.aircondition.sittingroom.mode = "制热";
          } else if (SittingroomACData.mode == '1') {
            this.aircondition.sittingroom.mode = "制冷";
          } else if (SittingroomACData.mode == '4') {
            this.aircondition.sittingroom.mode = "送风";
          } else if (SittingroomACData.mode == '2') {
            this.aircondition.sittingroom.mode = "除湿";
          }

        } catch (error) {
          console.error(error);
        }

      },
      //  获取厨房空调运行状态
      async getKitchenAC() {
        try {
          const response = await axios.get(`http://127.0.0.1:8080/getLastAC?devName=%E7%A9%BA%E8%B0%83%E5%8E%A8%E6%88%BF`, {
            headers: {
              'Content-Type': 'application/json; charset=UTF-8',
            }
          });
          //设定温度
          const KitchenACData = response.data;
          this.aircondition.kitchen.temperature = KitchenACData.temperature;
          //风速
          if (KitchenACData.windSpeed == 4) {
            this.aircondition.kitchen.windspeed = "低风";
          } else if (KitchenACData.windSpeed == 2) {
            this.aircondition.kitchen.windspeed = "中风";
          } else if (KitchenACData.windSpeed == 1) {
            this.aircondition.kitchen.windspeed = "高风";
          } else if (KitchenACData.windSpeed == 0) {
            this.aircondition.kitchen.windspeed = "N/A";
          }

          //模式
          if (KitchenACData.mode == '8') {
            this.aircondition.kitchen.mode = "制热";
          } else if (KitchenACData.mode == '1') {
            this.aircondition.kitchen.mode = "制冷";
          } else if (KitchenACData.mode == '4') {
            this.aircondition.kitchen.mode = "送风";
          } else if (KitchenACData.mode == '2') {
            this.aircondition.kitchen.mode = "除湿";
          }

        } catch (error) {
          console.error(error);
        }

      },
      //获取五个房间空调的最新状态
      getAirConditionStatus() {
        this.getKitchenAC();
        this.getChildrenroomAC();
        this.getMasterbedroomAC();
        this.getSittingroomAC();
        this.getStudyAC();
        this.getKitchenXF();
        this.getChildrenroomXF();
        this.getMasterbedroomXF();
        this.getSittingroomXF();
        this.getStudyXF();
      },

      async getKitchenXF() {
        try {
          const response = await axios.get(`http://127.0.0.1:8080/getLastXF?devName=%E6%96%B0%E9%A3%8E%E5%8E%A8%E6%88%BF`, {
            headers: {
              'Content-Type': 'application/json; charset=UTF-8',
            }
          });
          const kitchenData = response.data;
          console.log('厨房新风返回的数据', kitchenData);

          // 风速处理
          if (kitchenData.windSpeed == 4) {
            this.vent.kitchen.windspeed = "低风";
          } else if (kitchenData.windSpeed == 2) {
            this.vent.kitchen.windspeed = "中风";
          } else if (kitchenData.windSpeed == 1) {
            this.vent.kitchen.windspeed = "高风";
          } else if (kitchenData.windSpeed == 0) {
            this.vent.kitchen.windspeed = "N/A";
          } else {
            this.vent.kitchen.windspeed = "未知"; // 处理其他可能的值
          }

          // 状态处理
          if (kitchenData.status == 0) {
            this.vent.kitchen.status = "已暂停";
          } else if (kitchenData.status == 1) {
            this.vent.kitchen.status = "工作中";
          } else {
            this.vent.kitchen.status = "未知状态";
          }

        } catch (error) {
          console.error("厨房新风数据获取错误:", error);
          this.vent.kitchen.windspeed = "获取失败";
          this.vent.kitchen.status = "数据错误";
        }
      },

      async getChildrenroomXF() {
        try {
          const response = await axios.get(`http://127.0.0.1:8080/getLastXF?devName=%E6%96%B0%E9%A3%8E%E5%84%BF%E7%AB%A5%E6%88%BF`, {
            headers: {
              'Content-Type': 'application/json; charset=UTF-8',
            }
          });
          const childrenroomData = response.data;
          console.log('儿童房新风返回的数据', childrenroomData);

          // 风速处理
          if (childrenroomData.windSpeed == 4) {
            this.vent.childrenbedroom.windspeed = "低风";
          } else if (childrenroomData.windSpeed == 2) {
            this.vent.childrenbedroom.windspeed = "中风";
          } else if (childrenroomData.windSpeed == 1) {
            this.vent.childrenbedroom.windspeed = "高风";
          } else if (childrenroomData.windSpeed == 0) {
            this.vent.childrenbedroom.windspeed = "N/A";
          } else {
            this.vent.childrenbedroom.windspeed = "未知";
          }

          // 状态处理
          if (childrenroomData.status == 0) {
            this.vent.childrenbedroom.status = "已暂停";
          } else if (childrenroomData.status == 1) {
            this.vent.childrenbedroom.status = "工作中";
          } else {
            this.vent.childrenbedroom.status = "未知状态";
          }

        } catch (error) {
          console.error("儿童房新风数据获取错误:", error);
          this.vent.childrenbedroom.windspeed = "获取失败";
          this.vent.childrenbedroom.status = "数据错误";
        }
      },

      async getMasterbedroomXF() {
        try {
          const response = await axios.get(`http://127.0.0.1:8080/getLastXF?devName=%E6%96%B0%E9%A3%8E%E4%B8%BB%E5%8D%A7`, {
            headers: {
              'Content-Type': 'application/json; charset=UTF-8',
            }
          });
          const masterbedroomData = response.data;
          console.log('主卧新风返回的数据', masterbedroomData);

          // 风速处理
          if (masterbedroomData.windSpeed == 4) {
            this.vent.masterbedroom.windspeed = "低风";
          } else if (masterbedroomData.windSpeed == 2) {
            this.vent.masterbedroom.windspeed = "中风";
          } else if (masterbedroomData.windSpeed == 1) {
            this.vent.masterbedroom.windspeed = "高风";
          } else if (masterbedroomData.windSpeed == 0) {
            this.vent.masterbedroom.windspeed = "N/A";
          } else {
            this.vent.masterbedroom.windspeed = "未知";
          }

          // 状态处理
          if (masterbedroomData.status == 0) {
            this.vent.masterbedroom.status = "已暂停";
          } else if (masterbedroomData.status == 1) {
            this.vent.masterbedroom.status = "工作中";
          } else {
            this.vent.masterbedroom.status = "未知状态";
          }

        } catch (error) {
          console.error("主卧新风数据获取错误:", error);
          this.vent.masterbedroom.windspeed = "获取失败";
          this.vent.masterbedroom.status = "数据错误";
        }
      },

      async getSittingroomXF() {
        try {
          const response = await axios.get(`http://127.0.0.1:8080/getLastXF?devName=%E6%96%B0%E9%A3%8E%E5%AE%A2%E5%8E%85`, {
            headers: {
              'Content-Type': 'application/json; charset=UTF-8',
            }
          });
          const sittingroomData = response.data;
          console.log('客厅新风返回的数据', sittingroomData);

          // 风速处理
          if (sittingroomData.windSpeed == 4) {
            this.vent.sittingroom.windspeed = "低风";
          } else if (sittingroomData.windSpeed == 2) {
            this.vent.sittingroom.windspeed = "中风";
          } else if (sittingroomData.windSpeed == 1) {
            this.vent.sittingroom.windspeed = "高风";
          } else if (sittingroomData.windSpeed == 0) {
            this.vent.sittingroom.windspeed = "N/A";
          } else {
            this.vent.sittingroom.windspeed = "未知";
          }

          // 状态处理
          if (sittingroomData.status == 0) {
            this.vent.sittingroom.status = "已暂停";
          } else if (sittingroomData.status == 1) {
            this.vent.sittingroom.status = "工作中";
          } else {
            this.vent.sittingroom.status = "未知状态";
          }

        } catch (error) {
          console.error("客厅新风数据获取错误:", error);
          this.vent.sittingroom.windspeed = "获取失败";
          this.vent.sittingroom.status = "数据错误";
        }
      },

      //  获取多功能房新风运行状态
      async getStudyXF() {
        try {
          const response = await axios.get(`http://127.0.0.1:8080/getLastXF?devName=%E6%96%B0%E9%A3%8E%E5%A4%9A%E5%8A%9F%E8%83%BD%E6%88%BF`, {
            headers: {
              'Content-Type': 'application/json; charset=UTF-8',
            }
          });
          //设定温度
          const StudyXFData = response.data;

          console.log('书房新风返回的数是', response.data)

          if (StudyXFData.windSpeed == 4) {
            this.vent.study.windspeed = "低风";
          } else if (StudyXFData.windSpeed == 2) {
            this.vent.study.windspeed = "中风";
          } else if (StudyXFData.windSpeed == 1) {
            this.vent.study.windspeed = "高风";
          } else if (StudyXFData.windSpeed == 0) {
            this.vent.study.windspeed = "N/A";
          }

          //模式
          if (StudyXFData.status == 0) {
            this.vent.study.status = "已暂停";
          } else if (StudyXFData.status == 1) {
            this.vent.study.status = "工作中";
          }
        }

        catch (error) {
          console.error(error);
        }

      },


      //室内环境柱状图切换
      toggleLineChart() {
        this.showTemperatureHumidity = !this.showTemperatureHumidity;
        this.drawEnvironmentBar();
      },
      //绘制室内环境柱状图
      async drawEnvironmentBar() {
        try {
          const response = await axios.get(`http://localhost:8080/getAllLastENV`, {
            headers: {
              'Content-Type': 'application/json; charset=UTF-8',
            }
          });

          // 请求成功，更新数据
          console.log('实时监测的环境表返回的数是', response)
          this.environAllNowData = response.data;
          console.log('实时监测的环境表返回的数是', this.environAllNowData);

          //环境探测器名称列表
          // const devNames = ['环境探测器客厅', '环境探测器主卧', '环境探测器儿童房', '环境探测器浴室'];
          const devNames = ['环境探测器客厅', '环境探测器主卧', '环境探测器儿童房'];             //卫生间没有环境监测

          //初始化温度数据
          let temperatureData = Array(devNames.length).fill(null);

          //填充温度数据
          this.environAllNowData.forEach(item => {
            let index = devNames.indexOf(item.devName);
            if (index !== -1) {
              // temperatureData[index] = Math.floor(item.temperature / 100);
              temperatureData[index] = parseFloat((item.temperature / 100).toFixed(0));
            }
          });
          this.temperature = temperatureData;
          //初始化湿度数据
          let humidityData = Array(devNames.length).fill(null);
          //填充湿度数据
          this.environAllNowData.forEach(item => {
            let index = devNames.indexOf(item.devName);
            if (index !== -1) {
              // humidityData[index] = Math.floor(item.humidity / 100);
              humidityData[index] = parseFloat((item.humidity / 100).toFixed(0));

            }
          });
          this.humidity = humidityData;
          //初始化CO2数据
          let co2Data = Array(devNames.length).fill(null);
          //填充CO2数据
          this.environAllNowData.forEach(item => {
            let index = devNames.indexOf(item.devName);
            if (index !== -1) {
              co2Data[index] = item.co2;
            }
          });
          //初始化PM10数据
          let pm10Data = Array(devNames.length).fill(null);
          //填充PM10数据
          this.environAllNowData.forEach(item => {
            let index = devNames.indexOf(item.devName);
            if (index !== -1) {
              pm10Data[index] = item.pm10;
            }
          });

          //初始化PM25数据
          let pm25Data = Array(devNames.length).fill(null);
          //填充PM10数据
          this.environAllNowData.forEach(item => {
            let index = devNames.indexOf(item.devName);
            if (index !== -1) {
              pm25Data[index] = item.pm25;
            }
          });

          //绘制柱状图
          this.environBarChart = echarts.init(this.$refs.environBar);

          // 清除旧的图表实例
          this.environBarChart.clear();
          // 绘制温湿度柱状图
          if (this.showTemperatureHumidity) {
            this.environBarChart.setOption({
              //x轴设置
              xAxis: {
                type: 'category',
                // data: ['客厅', '主卧', '儿童房', '卫生间'],
                data: ['客厅', '主卧', '儿童房'],
                axisLabel: {
                  interval: 0, // 设置全部显示
                  margin: 10,  // 标签与轴线之间的距离
                  textStyle: {
                    color: 'honeydew',
                    fontSize: this.calculateFontSize(0.8),
                  }
                },
                axisLine: {
                  lineStyle: {
                    color: 'honeydew'
                  }
                }
              },
              //网格设置
              grid: {
                // top:'30%',
                left: '5%',
                right: '10%',
                bottom: '2%',
                containLabel: true
              },
              //图例
              legend: {
                // data: ['温度', '湿度'],
                textStyle: {
                  color: 'honeydew',
                  fontSize: this.calculateFontSize(0.8),

                },
                right: 200,
              },
              //y轴
              yAxis: [
                {
                  type: 'value',
                  name: '温度(℃)',
                  axisTick: {show: false},
                  axisLine: {
                    lineStyle: {
                      color: '#20E5FF'
                    }
                  },
                  splitLine: {
                    show: true,
                    lineStyle: {
                      color: 'rgba(255,255,255,0.3)'
                    }
                  },
                  axisLabel: {
                    formatter: '{value}',
                    fontSize: this.calculateFontSize(0.8),
                  },
                  nameTextStyle: {
                    // color: 'honeydew',
                    fontSize: this.calculateFontSize(0.8),
                  }
                },
                {
                  type: 'value',
                  name: '湿度(%)',
                  axisTick: {show: false},
                  splitLine: {
                    show: false
                  },
                  axisLine: {
                    lineStyle: {
                      color: 'rgba(253,207,110)'
                    }
                  },
                  axisLabel: {
                    formatter: '{value}',
                    fontSize: this.calculateFontSize(0.8),
                  },
                  nameTextStyle: {
                    // color: 'honeydew',
                    fontSize: this.calculateFontSize(0.8),
                  }
                },
              ],

              //提示框内容
              tooltip: {
                trigger: 'axis',
                textStyle: {
                  align: 'left'
                }
              },
              //
              series: [
                {
                  name: '温度',
                  type: 'bar',
                  barWidth: this.calculateFontSize(1.2),
                  yAxisIndex: 0,
                  // data:[24,25,26,28,27],
                  data: temperatureData,
                  itemStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                      {offset: 0, color: '#20E5FF'}, // 开始颜色
                      {offset: 1, color: 'rgba(32,229,255,0.1)'} // 透明颜色
                    ]),
                  },
                },
                {
                  name: '湿度',
                  type: 'bar',
                  barWidth: this.calculateFontSize(1.2),
                  yAxisIndex: 1,
                  // data:[40,45,46,48,49],
                  data: humidityData,
                  itemStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                      {offset: 0, color: '#91CC75'}, // 开始颜色
                      {offset: 1, color: 'rgba(145,204,117,0.1)'} // 透明颜色
                    ]),
                  },
                },

              ]
            });
          }
          //绘制CO2，PM2.5，PM10柱状图
          else {
            this.environBarChart.setOption({
              xAxis: {
                type: 'category',
                data: ['客厅', '主卧', '儿童房'],
                data: ['客厅', '主卧', '儿童房'],
                axisLabel: {
                  interval: 0, // 设置全部显示
                  //rotate: 20, // 旋转角度
                  margin: 10,   // 标签与轴线之间的距离
                  fontSize: this.calculateFontSize(0.8),
                },
                axisLine: {
                  lineStyle: {
                    color: 'honeydew'
                  }
                }
              },
              grid: {
                left: '5%',
                right: '8%',
                bottom: '5%',
                containLabel: true
              },
              legend: {
                data: ['CO₂', 'PM10', 'PM2.5'],
                textStyle: {
                  color: 'honeydew',
                  fontSize: this.calculateFontSize(0.8),
                },
                right: 200,
              },
              yAxis: [
                {
                  type: 'value',
                  name: 'CO₂(ppm)',
                  axisTick: {show: false},
                  axisLine: {
                    lineStyle: {
                      color: '#20E5FF'
                    }
                  },
                  splitLine: {
                    show: true,
                    lineStyle: {
                      color: 'rgba(255,255,255,0.3)'
                    }
                  },
                  axisLabel: {
                    formatter: '{value}',
                    fontSize: this.calculateFontSize(0.8),
                  },
                  nameTextStyle: {
                    fontSize: this.calculateFontSize(0.8),
                  }
                },
                {
                  type: 'value',
                  name: 'PM2.5/PM10(μg/m³)',
                  axisTick: {show: false},
                  splitLine: {
                    show: false
                  },
                  axisLine: {
                    lineStyle: {
                      color: 'rgba(253,207,110)',
                    }
                  },
                  axisLabel: {
                    formatter: '{value}',
                    fontSize: this.calculateFontSize(0.8),
                  },
                  nameTextStyle: {
                    fontSize: this.calculateFontSize(0.8),
                  }
                },
              ],

              tooltip: {
                trigger: 'axis',
                textStyle: {
                  align: 'left'
                }
              },
              series: [
                {
                  name: 'CO₂',
                  type: 'bar',
                  barWidth: this.calculateFontSize(1),
                  yAxisIndex: 0,
                  data: co2Data,
                  // data:[40,45,46,48,49],
                  itemStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                      {offset: 0, color: '#3595F6'}, // 开始颜色
                      {offset: 1, color: 'rgba(53,149,246,0.1)'} // 透明颜色
                    ]),
                  },
                },
                {
                  name: 'PM10',
                  type: 'bar',
                  barWidth: this.calculateFontSize(1),
                  yAxisIndex: 1,
                  data: pm10Data,
                  // data:[40,45,46,48,49],
                  itemStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                      {offset: 0, color: '#F0C01E'}, // 开始颜色
                      {offset: 1, color: 'rgba(240,192,30,0.1)'} // 透明颜色
                    ]),
                  },
                },
                {
                  name: 'PM2.5',
                  type: 'bar',
                  barWidth: this.calculateFontSize(1),
                  yAxisIndex: 1,
                  data: pm25Data,
                  // data:[40,45,46,48,49],
                  itemStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                      {offset: 0, color: '#F67F0B'}, // 开始颜色
                      {offset: 1, color: 'rgba(246,127,11,0.1)'} // 透明颜色
                    ]),
                  },
                },
              ]
            });
          }

        } catch (error) {
          console.log(error)
        }

      },

      // 绘制室内环境温度折线图
      async drawEnvironmentTemperatureLine() {
        try {
          const response = await axios.get('http://localhost:8080/getLast24HoursTemperature', {
            headers: {
              'Content-Type': 'application/json; charset=UTF-8',
            }
          });
          var EnvironmentTemperatureData = response.data;
          console.log('环境监测温度24小时数据返回的数是', EnvironmentTemperatureData);
          //温度数据按房间分组筛选
          const MasterbedroomEnvironmentTemperatureData0 = EnvironmentTemperatureData.filter(item => item.devName === '环境探测器主卧');
          const ChildrenroomEnvironmentTemperatureData0 = EnvironmentTemperatureData.filter(item => item.devName === '环境探测器儿童房');
          const SittingroomEnvironmentTemperatureData0 = EnvironmentTemperatureData.filter(item => item.devName === '环境探测器客厅');
          // const BathroomEnvironmentTemperatureData0 = EnvironmentTemperatureData.filter(item => item.devName === '环境探测器浴室');

          // X轴24小时
          const hours = Array.from({length: 24}, (_, i) => i);
          //主卧温度数据处理
          var MasterbedroomEnvironmentTemperatureData = Array(24).fill(null);
          MasterbedroomEnvironmentTemperatureData0.forEach(item => {
            var hour = new Date(item.time).getHours();
            // MasterbedroomEnvironmentTemperatureData[hour] = Math.floor(item.temperature / 100);
            MasterbedroomEnvironmentTemperatureData[hour] = parseFloat((item.temperature / 100).toFixed(0));

          });

          //儿童房温度数据处理
          var ChildrenroomEnvironmentTemperatureData = Array(24).fill(null);
          ChildrenroomEnvironmentTemperatureData0.forEach(item => {
            var hour = new Date(item.time).getHours();
            // ChildrenroomEnvironmentTemperatureData[hour] = Math.floor(item.temperature / 100);
            ChildrenroomEnvironmentTemperatureData[hour] = parseFloat((item.temperature / 100).toFixed(0));

          });
          //客厅温度数据处理
          var SittingroomEnvironmentTemperatureData = Array(24).fill(null);
          SittingroomEnvironmentTemperatureData0.forEach(item => {
            var hour = new Date(item.time).getHours();
            // SittingroomEnvironmentTemperatureData[hour] = Math.floor(item.temperature / 100);
            SittingroomEnvironmentTemperatureData[hour] = parseFloat((item.temperature / 100).toFixed(0));
          });
          //卫生间温度数据处理
          // var BathroomEnvironmentTemperatureData = Array(24).fill(null);
          // BathroomEnvironmentTemperatureData0.forEach(item => {
          //   var hour = new Date(item.time).getHours();
          //   // BathroomEnvironmentTemperatureData[hour] = Math.floor(item.temperature / 100);
          //   BathroomEnvironmentTemperatureData[hour] = parseFloat((item.temperature / 100).toFixed(0));
          // });

          //绘制所有房间温度折线图
          this.environTempChart = echarts.init(this.$refs.environTemp);
          this.environTempChart.setOption({
            xAxis: {
              type: 'category',
              data: hours,
              axisLabel: {
                interval: 0, // 设置全部显示
                rotate: 0, // 旋转角度
                margin: 10,   // 标签与轴线之间的距离
                fontSize: this.calculateFontSize(0.8),
              },
              axisLine: {
                lineStyle: {
                  color: 'honeydew'
                }
              },
              name: '时', // 设置纵坐标轴标题为 "月"
              nameLocation: 'end',
              nameGap: this.calculateFontSize(0.2),
              nameTextStyle: { // 标题样式
                color: 'honeydew',// 标题颜色
                fontSize: this.calculateFontSize(0.8),
              }
            },
            grid: {
              left: '5%',
              right: '5%',
              bottom: '0%',
              // top: '20%',
              containLabel: true
            },
            legend: {
              top: '5%',
              right: '5%',
              textStyle: {
                color: 'honeydew',
                fontSize: this.calculateFontSize(0.8),
              }
            },
            yAxis: [
              {
                type: 'value',
                name: '温度(℃)',
                axisTick: {show: false},
                axisLine: {
                  lineStyle: {
                    color: '#20E5FF'
                  }
                },
                splitLine: {
                  show: true,
                  lineStyle: {
                    color: 'rgba(255,255,255,0.3)'
                  }
                },
                axisLabel: {
                  formatter: '{value}',
                  fontSize: this.calculateFontSize(0.8),
                },
                nameTextStyle: {
                  // color: 'honeydew',
                  fontSize: this.calculateFontSize(0.8),
                }
              },
            ],
            tooltip: {},
            series: [
              //主卧温度
              {
                name: '主卧',
                type: 'line',
                data: MasterbedroomEnvironmentTemperatureData,
                lineStyle: {
                  color: '#E0DB5B'
                },
                itemStyle: {
                  color: '#E0DB5B' // 设置曲线上的点颜色
                }
              },
              //老人房温度
              {
                name: '儿童房',
                type: 'line',
                data: ChildrenroomEnvironmentTemperatureData,
                lineStyle: {
                  color: '#78FDE7'
                },
                itemStyle: {
                  color: '#78FDE7' // 设置曲线上的点颜色
                }
              },
              //客厅温度
              {
                name: '客厅',
                type: 'line',
                data: SittingroomEnvironmentTemperatureData,
                lineStyle: {
                  color: '#E37411'
                },
                itemStyle: {
                  color: '#E37411' // 设置曲线上的点颜色
                }
              },

              //  卫生间温度
              // {
              //   name: '卫生间',
              //   type: 'line',
              //   data: BathroomEnvironmentTemperatureData,
              //   lineStyle: {
              //     color: '#3142f1'
              //   },
              //   itemStyle: {
              //     color: '#3142f1' // 设置曲线上的点颜色
              //   }
              // },
            ]
          });
        } catch (error) {
          console.error()
        }

      },

      // 绘制室内环境湿度折线图
      async drawEnvironmentHumidityLine() {
        try {
          const response = await axios.get('http://localhost:8080/getLast24HoursHumidity', {
            headers: {
              'Content-Type': 'application/json; charset=UTF-8',
            }
          });
          var EnvironmentHumidityData = response.data;
          console.log('环境监测湿度24小时数据返回的数是', EnvironmentHumidityData);
          //温度数据按房间分组筛选
          const MasterbedroomEnvironmentHumidityData0 = EnvironmentHumidityData.filter(item => item.devName === '环境探测器主卧');
          const ChildrenroomEnvironmentHumidityData0 = EnvironmentHumidityData.filter(item => item.devName === '环境探测器儿童房');
          const SittingroomEnvironmentHumidityData0 = EnvironmentHumidityData.filter(item => item.devName === '环境探测器客厅');
          // const BathroomEnvironmentHumidityData0 = EnvironmentHumidityData.filter(item => item.devName === '环境探测器浴室');

          // X轴24小时
          const hours = Array.from({length: 24}, (_, i) => i);
          //主卧数据处理
          var MasterbedroomEnvironmentHumidityData = Array(24).fill(null);
          MasterbedroomEnvironmentHumidityData0.forEach(item => {
            var hour = new Date(item.time).getHours();
            // MasterbedroomEnvironmentHumidityData[hour] = Math.floor(item.humidity / 100);
            MasterbedroomEnvironmentHumidityData[hour] = parseFloat((item.humidity / 100).toFixed(0));

          });
          //儿童房数据处理
          var ChildrenroomEnvironmentHumidityData = Array(24).fill(null);
          ChildrenroomEnvironmentHumidityData0.forEach(item => {
            var hour = new Date(item.time).getHours();
            // ChildrenroomEnvironmentHumidityData[hour] = Math.floor(item.humidity / 100);
            ChildrenroomEnvironmentHumidityData[hour] = parseFloat((item.humidity / 100).toFixed(0));

          });
          //客厅数据处理
          var SittingroomEnvironmentHumidityData = Array(24).fill(null);
          SittingroomEnvironmentHumidityData0.forEach(item => {
            var hour = new Date(item.time).getHours();
            // SittingroomEnvironmentHumidityData[hour] = Math.floor(item.humidity / 100);
            SittingroomEnvironmentHumidityData[hour] = parseFloat((item.humidity / 100).toFixed(0));

          });
          //卫生间数据处理
          // var BathroomEnvironmentHumidityData = Array(24).fill(null);
          // BathroomEnvironmentHumidityData0.forEach(item => {
          //   var hour = new Date(item.time).getHours();
          //   // BathroomEnvironmentHumidityData[hour] = Math.floor(item.humidity / 100);
          //   BathroomEnvironmentHumidityData[hour] = parseFloat((item.humidity / 100).toFixed(0));
          //
          // });
          //绘制湿度折线图
          this.environHumChart = echarts.init(this.$refs.environHum);
          this.environHumChart.setOption({
            xAxis: {
              type: 'category',
              data: hours,
              axisLabel: {
                interval: 0, // 设置全部显示
                rotate: 0, // 旋转角度
                margin: 10,   // 标签与轴线之间的距离
                fontSize: this.calculateFontSize(0.8),
              },
              axisLine: {
                lineStyle: {
                  color: 'honeydew'
                }
              },
              name: '时', // 设置纵坐标轴标题为 "月"
              nameLocation: 'end',
              nameGap: this.calculateFontSize(0.2),
              nameTextStyle: { // 标题样式
                color: 'honeydew',// 标题颜色
                fontSize: this.calculateFontSize(0.8),
              }
            },
            grid: {
              // top: '20%',
              left: '5%',
              right: '5%',
              bottom: '0%',
              containLabel: true
            },
            legend: {
              top: '5%',
              right: '5%',
              textStyle: {
                color: 'honeydew',
                fontSize: this.calculateFontSize(0.8),
              }
            },
            yAxis: [
              {
                type: 'value',
                name: '湿度(%)',
                axisTick: {show: false},
                axisLine: {
                  lineStyle: {
                    color: '#20E5FF'
                  }
                },
                splitLine: {
                  show: true,
                  lineStyle: {
                    color: 'rgba(255,255,255,0.3)'
                  }
                },
                axisLabel: {
                  formatter: '{value}',
                  fontSize: this.calculateFontSize(0.8),
                },
                nameTextStyle: {
                  // color: 'honeydew',
                  fontSize: this.calculateFontSize(0.8),
                }
              },
            ],
            tooltip: {},
            series: [
              //主卧温度
              {
                name: '主卧',
                type: 'line',
                data: MasterbedroomEnvironmentHumidityData,
                lineStyle: {
                  color: '#E0DB5B'
                },
                itemStyle: {
                  color: '#E0DB5B' // 设置曲线上的点颜色
                }
              },
              //儿童房温度
              {
                name: '儿童房',
                type: 'line',
                data: ChildrenroomEnvironmentHumidityData,
                lineStyle: {
                  color: '#78FDE7'
                },
                itemStyle: {
                  color: '#78FDE7' // 设置曲线上的点颜色
                }
              },
              //客厅温度
              {
                name: '客厅',
                type: 'line',
                data: SittingroomEnvironmentHumidityData,
                lineStyle: {
                  color: '#E37411'
                },
                itemStyle: {
                  color: '#E37411' // 设置曲线上的点颜色
                }
              },
              //  卫生间温度
              // {
              //   name: '卫生间',
              //   type: 'line',
              //   data: BathroomEnvironmentHumidityData,
              //   lineStyle: {
              //     color: '#3142f1'
              //   },
              //   itemStyle: {
              //     color: '#3142f1' // 设置曲线上的点颜色
              //   }
              // },
            ]
          });
        } catch (error) {
          console.error()
        }

      },

      // 绘制室内环境Co2折线图
      async drawEnvironmentCo2Line() {
        try {
          const response = await axios.get('http://localhost:8080/getLast24HoursCo2', {
            headers: {
              'Content-Type': 'application/json; charset=UTF-8',
            }
          });
          var EnvironmentCo2Data = response.data;
          console.log('环境监测Co224小时数据返回的数是', EnvironmentCo2Data);
          //温度数据按房间分组筛选
          const MasterbedroomEnvironmentCo2Data0 = EnvironmentCo2Data.filter(item => item.devName === '环境探测器主卧');
          const ChildrenroomEnvironmentCo2Data0 = EnvironmentCo2Data.filter(item => item.devName === '环境探测器儿童房');
          const SittingroomEnvironmentCo2Data0 = EnvironmentCo2Data.filter(item => item.devName === '环境探测器客厅');
          // const BathroomEnvironmentCo2Data0 = EnvironmentCo2Data.filter(item => item.devName === '环境探测器浴室');

          // X轴24小时
          const hours = Array.from({length: 24}, (_, i) => i);
          //主卧数据处理
          var MasterbedroomEnvironmentCo2Data = Array(24).fill(null);
          MasterbedroomEnvironmentCo2Data0.forEach(item => {
            var hour = new Date(item.time).getHours();
            MasterbedroomEnvironmentCo2Data[hour] = item.co2;
          });

          //老人房数据处理
          var ChildrenroomEnvironmentCo2Data = Array(24).fill(null);
          ChildrenroomEnvironmentCo2Data0.forEach(item => {
            var hour = new Date(item.time).getHours();
            ChildrenroomEnvironmentCo2Data[hour] = item.co2;
          });
          //客厅数据处理
          var SittingroomEnvironmentCo2Data = Array(24).fill(null);
          SittingroomEnvironmentCo2Data0.forEach(item => {
            var hour = new Date(item.time).getHours();
            SittingroomEnvironmentCo2Data[hour] = item.co2;
          });
          //卫生间数据处理
          // var BathroomEnvironmentCo2Data = Array(24).fill(null);
          // BathroomEnvironmentCo2Data0.forEach(item => {
          //   var hour = new Date(item.time).getHours();
          //   BathroomEnvironmentCo2Data[hour] = item.co2;
          // });
          //绘制湿度折线图
          this.environCO2Chart = echarts.init(this.$refs.environCO2);
          this.environCO2Chart.setOption({
            xAxis: {
              type: 'category',
              data: hours,
              axisLabel: {
                interval: 0, // 设置全部显示
                rotate: 0, // 旋转角度
                margin: 10,   // 标签与轴线之间的距离
                fontSize: this.calculateFontSize(0.8),
              },
              axisLine: {
                lineStyle: {
                  color: 'honeydew'
                }
              },
              name: '时', // 设置纵坐标轴标题为 "月"
              nameLocation: 'end',
              nameGap: this.calculateFontSize(0.2),
              nameTextStyle: { // 标题样式
                color: 'honeydew',// 标题颜色
                fontSize: this.calculateFontSize(0.8),
              }
            },
            grid: {
              top: '20%',
              left: '5%',
              right: '5%',
              bottom: '0%',
              containLabel: true
            },
            legend: {
              top: '5%',
              right: '5%',
              textStyle: {
                color: 'honeydew',
                fontSize: this.calculateFontSize(0.8),
              }
            },
            yAxis: [
              {
                type: 'value',
                name: 'CO₂(ppm)',
                axisTick: {show: false},
                axisLine: {
                  lineStyle: {
                    color: '#20E5FF'
                  }
                },
                splitLine: {
                  show: true,
                  lineStyle: {
                    color: 'rgba(255,255,255,0.3)'
                  }
                },
                axisLabel: {
                  formatter: '{value}',
                  fontSize: this.calculateFontSize(0.8),
                },
                nameTextStyle: {
                  // color: 'honeydew',
                  fontSize: this.calculateFontSize(0.8),
                }
              },
            ],
            tooltip: {},
            series: [
              //主卧温度
              {
                name: '主卧',
                type: 'line',
                data: MasterbedroomEnvironmentCo2Data,
                lineStyle: {
                  color: '#E0DB5B'
                },
                itemStyle: {
                  color: '#E0DB5B' // 设置曲线上的点颜色
                }
              },
              //儿童房温度
              {
                name: '儿童房',
                type: 'line',
                data: ChildrenroomEnvironmentCo2Data,
                lineStyle: {
                  color: '#78FDE7'
                },
                itemStyle: {
                  color: '#78FDE7' // 设置曲线上的点颜色
                }
              },
              //客厅温度
              {
                name: '客厅',
                type: 'line',
                data: SittingroomEnvironmentCo2Data,
                lineStyle: {
                  color: '#E37411'
                },
                itemStyle: {
                  color: '#E37411' // 设置曲线上的点颜色
                }
              },
              //  卫生间温度
              // {
              //   name: '卫生间',
              //   type: 'line',
              //   data: BathroomEnvironmentCo2Data,
              //   lineStyle: {
              //     color: '#3142f1'
              //   },
              //   itemStyle: {
              //     color: '#3142f1' // 设置曲线上的点颜色
              //   }
              // },
            ]
          });


        } catch (error) {
          console.error()
        }

      },

      //PM图切换
      QiehuanPMLineChart() {
        this.showPM25 = !this.showPM25;
        this.drawEnvironPMLine();
      },

      //绘制室内环境PM折线图
      async drawEnvironPMLine() {
        this.EnvironmentPMChart = echarts.init(this.$refs.environPM25);
        if (this.showPM25) {
          const response = await axios.get('http://localhost:8080/getLast24HoursPm25', {
            headers: {
              'Content-Type': 'application/json; charset=UTF-8',
            }
          });
          var EnvironmentPM25Data = response.data;
          console.log('环境监测PM2.524小时数据返回的数是', EnvironmentPM25Data);
          //温度数据按房间分组筛选
          const MasterbedroomEnvironmentPM25Data0 = EnvironmentPM25Data.filter(item => item.devName === '环境探测器主卧');
          const ChildrenroomEnvironmentPM25Data0 = EnvironmentPM25Data.filter(item => item.devName === '环境探测器儿童房');
          const SittingroomEnvironmentPM25Data0 = EnvironmentPM25Data.filter(item => item.devName === '环境探测器客厅');
          // const BathroomEnvironmentPM25Data0 = EnvironmentPM25Data.filter(item => item.devName === '环境探测器浴室');

          // X轴24小时
          const hours = Array.from({length: 24}, (_, i) => i);
          //主卧数据处理
          var MasterbedroomEnvironmentPM25Data = Array(24).fill(null);
          MasterbedroomEnvironmentPM25Data0.forEach(item => {
            var hour = new Date(item.time).getHours();
            MasterbedroomEnvironmentPM25Data[hour] = item.pm25;
          });
          //儿童房数据处理
          var ChildrenroomEnvironmentPM25Data = Array(24).fill(null);
          ChildrenroomEnvironmentPM25Data0.forEach(item => {
            var hour = new Date(item.time).getHours();
            ChildrenroomEnvironmentPM25Data[hour] = item.pm25;
          });
          //客厅数据处理
          var SittingroomEnvironmentPM25Data = Array(24).fill(null);
          SittingroomEnvironmentPM25Data0.forEach(item => {
            var hour = new Date(item.time).getHours();
            SittingroomEnvironmentPM25Data[hour] = item.pm25;
          });
          //卫生间数据处理
          // var BathroomEnvironmentPM25Data = Array(24).fill(null);
          // BathroomEnvironmentPM25Data0.forEach(item => {
          //   var hour = new Date(item.time).getHours();
          //   BathroomEnvironmentPM25Data[hour] = item.pm25;
          // });
          //绘制PM折线图
          this.EnvironmentPMChart.setOption({
            xAxis: {
              type: 'category',
              data: hours,
              axisLabel: {
                interval: 0, // 设置全部显示
                rotate: 0, // 旋转角度
                margin: 10,   // 标签与轴线之间的距离
                fontSize: this.calculateFontSize(0.8),
              },
              axisLine: {
                lineStyle: {
                  color: 'honeydew'
                }
              },
              name: '时', // 设置纵坐标轴标题为 "月"
              nameLocation: 'end',
              nameGap: this.calculateFontSize(0.2),
              nameTextStyle: { // 标题样式
                color: 'honeydew',// 标题颜色
                fontSize: this.calculateFontSize(0.8),
              }
            },
            grid: {
              // top: '20%',
              left: '5%',
              right: '5%',
              bottom: '0%',
              containLabel: true
            },
            legend: {
              top: '5%',
              right: '5%',
              textStyle: {
                color: 'honeydew',
                fontSize: this.calculateFontSize(0.8),
              }
            },
            yAxis: [
              {
                type: 'value',
                name: 'PM2.5(μg/m³)',
                axisTick: {show: false},
                axisLine: {
                  lineStyle: {
                    color: '#20E5FF'
                  }
                },
                splitLine: {
                  show: true,
                  lineStyle: {
                    color: 'rgba(255,255,255,0.3)'
                  }
                },
                axisLabel: {
                  formatter: '{value}',
                  fontSize: this.calculateFontSize(0.8),
                },
                nameTextStyle: {
                  // color: 'honeydew',
                  fontSize: this.calculateFontSize(0.8),
                }
              },
            ],
            tooltip: {},
            series: [
              //主卧温度
              {
                name: '主卧',
                type: 'line',
                data: MasterbedroomEnvironmentPM25Data,
                lineStyle: {
                  color: '#E0DB5B'
                },
                itemStyle: {
                  color: '#E0DB5B' // 设置曲线上的点颜色
                }
              },
              //儿童房温度
              {
                name: '儿童房',
                type: 'line',
                data: ChildrenroomEnvironmentPM25Data,
                lineStyle: {
                  color: '#78FDE7'
                },
                itemStyle: {
                  color: '#78FDE7' // 设置曲线上的点颜色
                }
              },
              //客厅温度
              {
                name: '客厅',
                type: 'line',
                data: SittingroomEnvironmentPM25Data,
                lineStyle: {
                  color: '#E37411'
                },
                itemStyle: {
                  color: '#E37411' // 设置曲线上的点颜色
                }
              },

              //  卫生间温度
              // {
              //   name: '卫生间',
              //   type: 'line',
              //   data: BathroomEnvironmentPM25Data,
              //   lineStyle: {
              //     color: '#3142f1'
              //   },
              //   itemStyle: {
              //     color: '#3142f1' // 设置曲线上的点颜色
              //   }
              // },
            ]
          });

        } else {
          const response = await axios.get('http://localhost:8080/getLast24HoursPm10', {
            headers: {
              'Content-Type': 'application/json; charset=UTF-8',
            }
          });
          var EnvironmentPM10Data = response.data;
          console.log('环境监测PM1024小时数据返回的数是', EnvironmentPM10Data);
          //温度数据按房间分组筛选
          const MasterbedroomEnvironmentPM10Data0 = EnvironmentPM10Data.filter(item => item.devName === '环境探测器主卧');
          const ChildrenroomEnvironmentPM10Data0 = EnvironmentPM10Data.filter(item => item.devName === '环境探测器儿童房');
          const SittingroomEnvironmentPM10Data0 = EnvironmentPM10Data.filter(item => item.devName === '环境探测器客厅');
          // const BathroomEnvironmentPM10Data0 = EnvironmentPM10Data.filter(item => item.devName === '环境探测器浴室');

          // X轴24小时
          const hours = Array.from({length: 24}, (_, i) => i);
          //主卧数据处理
          var MasterbedroomEnvironmentPM10Data = Array(24).fill(null);
          MasterbedroomEnvironmentPM10Data0.forEach(item => {
            var hour = new Date(item.time).getHours();
            MasterbedroomEnvironmentPM10Data[hour] = item.pm10;
          });

          //儿童房数据处理
          var ChildrenroomEnvironmentPM10Data = Array(24).fill(null);
          ChildrenroomEnvironmentPM10Data0.forEach(item => {
            var hour = new Date(item.time).getHours();
            ChildrenroomEnvironmentPM10Data[hour] = item.pm10;
          });
          //客厅数据处理
          var SittingroomEnvironmentPM10Data = Array(24).fill(null);
          SittingroomEnvironmentPM10Data0.forEach(item => {
            var hour = new Date(item.time).getHours();
            SittingroomEnvironmentPM10Data[hour] = item.pm10;
          });
          //餐厅数据处理
          // var BathroomEnvironmentPM10Data = Array(24).fill(null);
          // BathroomEnvironmentPM10Data0.forEach(item => {
          //   var hour = new Date(item.time).getHours();
          //   BathroomEnvironmentPM10Data[hour] = item.pm10;
          // });
          //绘制湿度折线图
          this.EnvironmentPMChart.setOption({
            xAxis: {
              type: 'category',
              data: hours,
              axisLabel: {
                interval: 0, // 设置全部显示
                rotate: 0, // 旋转角度
                margin: 10,   // 标签与轴线之间的距离
                fontSize: this.calculateFontSize(0.8),
              },
              axisLine: {
                lineStyle: {
                  color: 'honeydew'
                }
              },
              name: '时', // 设置纵坐标轴标题为 "月"
              nameLocation: 'end',
              nameGap: this.calculateFontSize(0.2),
              nameTextStyle: { // 标题样式
                color: 'honeydew',// 标题颜色
                fontSize: this.calculateFontSize(0.8),
              }
            },
            grid: {
              top: '20%',
              left: '5%',
              right: '5%',
              bottom: '0%',
              containLabel: true
            },
            legend: {
              top: '5%',
              right: '5%',
              textStyle: {
                color: 'honeydew',
                fontSize: this.calculateFontSize(0.8),
              }
            },
            yAxis: [
              {
                type: 'value',
                name: 'PM10(μg/m³)',
                axisTick: {show: false},
                axisLine: {
                  lineStyle: {
                    color: '#20E5FF'
                  }
                },
                splitLine: {
                  show: true,
                  lineStyle: {
                    color: 'rgba(255,255,255,0.3)'
                  }
                },
                axisLabel: {
                  formatter: '{value}',
                  fontSize: this.calculateFontSize(0.8),
                },
                nameTextStyle: {
                  fontSize: this.calculateFontSize(0.8),
                }
              },
            ],
            tooltip: {},
            series: [
              //主卧温度
              {
                name: '主卧',
                type: 'line',
                data: MasterbedroomEnvironmentPM10Data,
                lineStyle: {
                  color: '#E0DB5B'
                },
                itemStyle: {
                  color: '#E0DB5B' // 设置曲线上的点颜色
                }
              },
              //儿童房温度
              {
                name: '儿童房',
                type: 'line',
                data: ChildrenroomEnvironmentPM10Data,
                lineStyle: {
                  color: '#78FDE7'
                },
                itemStyle: {
                  color: '#78FDE7' // 设置曲线上的点颜色
                }
              },
              //客厅温度
              {
                name: '客厅',
                type: 'line',
                data: SittingroomEnvironmentPM10Data,
                lineStyle: {
                  color: '#E37411'
                },
                itemStyle: {
                  color: '#E37411' // 设置曲线上的点颜色
                }
              },
              // 餐厅温度
              // {
              //   name:'餐厅',
              //   type: 'line',
              //   data:DiningroomEnvironmentPM10Data,
              //   lineStyle: {
              //     color: '#f63606'
              //   },
              //   itemStyle: {
              //     color: '#f63606' // 设置曲线上的点颜色
              //   }
              // },
              //  卫生间温度
              // {
              //   name: '卫生间',
              //   type: 'line',
              //   data: BathroomEnvironmentPM10Data,
              //   lineStyle: {
              //     color: '#3142f1'
              //   },
              //   itemStyle: {
              //     color: '#3142f1' // 设置曲线上的点颜色
              //   }
              // },
            ]
          });


        }
      },

      //获取能耗监测数据
      async getDayDianDataRatio() {
        try {
          const response = await axios.get(`http://localhost:8080/compare_hour`, {
            headers: {
              'Content-Type': 'application/json; charset=UTF-8',
            }
          });
          console.log('获取当前电表日能耗以及同比环比', response.data);
          this.dianMonitoringData.day = response.data.total_consumption.toFixed(2);
          //同比
          if (response.data.year_on_year_growth == '-1000') {
            this.dianMonitoringData.dayTongbi = '— —'
          } else {
            this.dianMonitoringData.dayTongbi = response.data.year_on_year_growth.toFixed(2);
            console.log('日同比值:', response.data.year_on_year_growth)
            console.log('显示的日同比值:',this.dianMonitoringData.dayTongbi )
          }
          //环比
          if (response.data.day_on_day_growth == '-1000') {
            this.dianMonitoringData.dayHuanbi = '— —'
          } else {
            this.dianMonitoringData.dayHuanbi = response.data.day_on_day_growth.toFixed(2);
            console.log('日环比值:', response.data.day_on_day_growth)
            console.log('显示的日环比值:',this.dianMonitoringData.dayHuanbi)
          }
        } catch (error) {
          console.log(error);
        }
      },
      //假的显示
      // async getDayDianDataRatio() {
      //   try {
      //     // const response = await axios.get(`http://localhost:8080/getConsumptionAndGrowthRates`, {
      //     const response = await axios.get(`http://localhost:8080/compare_day?day=2025-09-01`, {
      //       headers: {
      //         'Content-Type': 'application/json; charset=UTF-8',
      //       }
      //     });
      //     console.log('获取当前电表日能耗以及同比环比', response.data);
      //     this.dianMonitoringData.day = response.data.total_consumption;
      //     //同比
      //     if (response.data.year_on_year_growth == '-1000') {
      //       this.dianMonitoringData.dayTongbi = '— —'
      //     } else {
      //       this.dianMonitoringData.dayTongbi = response.data.TB_growth;
      //       console.log('日同比值:', response.data.TB_growth)
      //       console.log('显示的日同比值:',this.dianMonitoringData.dayTongbi )
      //     }
      //     //环比
      //     if (response.data.day_on_day_growth == '-1000') {
      //       this.dianMonitoringData.dayHuanbi = '— —'
      //     } else {
      //       this.dianMonitoringData.dayHuanbi = response.data.HB_growth;
      //       console.log('日环比值:', response.data.HB_growth)
      //       console.log('显示的日环比值:',this.dianMonitoringData.dayHuanbi)
      //     }
      //   } catch (error) {
      //     console.log(error);
      //   }
      // },

      async getMonthDianDataRatio() {
        try {
          const response = await axios.get(`http://localhost:8080/compare_month`, {
            headers: {
              'Content-Type': 'application/json; charset=UTF-8',
            }
          });
          console.log('获取当前电表月能耗以及同比环比', response.data);
          this.dianMonitoringData.month = response.data.total_consumption.toFixed(2);
          //同比
          if (response.data.year_on_year_growth == '-1000') {
            this.dianMonitoringData.monthTongbi = '— —'
          } else {
            this.dianMonitoringData.monthTongbi = response.data.year_on_year_growth.toFixed(2);
            console.log('月同比值:', response.data.year_on_year_growth)
            console.log('显示的月同比值:',this.dianMonitoringData.monthTongbi )
          }
          //环比
          if (response.data.day_on_day_growth == '-1000') {
            this.dianMonitoringData.monthHuanbi = '— —'
          } else {
            this.dianMonitoringData.monthHuanbi = response.data.month_on_month_growth.toFixed(2);
            console.log('月环比值:', response.data.month_on_month_growth)
            console.log('显示的月环比值:',this.dianMonitoringData.monthHuanbi)
          }
        } catch (error) {
          console.log(error);
        }
      },

      async getYearDianDataRatio() {
        try {
          // const response = await axios.get(`http://localhost:8080/getConsumptionAndGrowthRates`, {
          const response = await axios.get(`http://localhost:8080/compare_year`, {
            headers: {
              'Content-Type': 'application/json; charset=UTF-8',
            }
          });
          console.log('获取当前电表年能耗以及同比环比', response.data);
          this.dianMonitoringData.year = response.data.total_consumption.toFixed(2);
          //同比
          if (response.data.year_on_year_growth == '-1000') {
            this.dianMonitoringData.yearTongbi = '— —'
          } else {
            this.dianMonitoringData.yearTongbi = response.data.year_on_year_growth.toFixed(2);
            console.log('年同比值:', response.data.year_on_year_growth)
            console.log('显示的年同比值:',this.dianMonitoringData.yearTongbi )
          }
          //环比
          if (response.data.day_on_day_growth == '-1000') {
            this.dianMonitoringData.yearHuanbi = '— —'
          } else {
            this.dianMonitoringData.yearHuanbi = response.data.year_on_year_growth.toFixed(2);
            console.log('年环比值:', response.data.year_on_year_growth)
            console.log('显示的年环比值:',this.dianMonitoringData.yearHuanbi)
          }
        } catch (error) {
          console.log(error);
        }
      },

      // async getMonthDianDataRatio() {
      //   try {
      //     const response = await axios.get(`http://localhost:8080/getMonthlyConsumptionAndGrowthRates`, {
      //       headers: {
      //         'Content-Type': 'application/json; charset=UTF-8',
      //       }
      //     });
      //
      //     console.log('获取当前电表月能耗以及同比环比', response.data);
      //     this.dianMonitoringData.month = response.data.total_consumption_this_month.toFixed(2);
      //     if (response.data.year_on_year_growth == '-1000') {
      //       this.dianMonitoringData.monthTongbi = '— —'
      //     } else {
      //       this.dianMonitoringData.monthTongbi =response.data.year_on_year_growth.toFixed(2);
      //     }
      //     if (response.data.month_on_month_growth == '-1000') {
      //       this.dianMonitoringData.monthHuanbi = '— —'
      //     } else {
      //       this.dianMonitoringData.monthHuanbi = response.data.month_on_month_growth.toFixed(2);
      //     }
      //   } catch (error) {
      //     console.log(error);
      //   }
      // },
      // async getYearDianDataRatio() {
      //   try {
      //     const response = await axios.get(`http://localhost:8080/getYearlyConsumptionAndGrowthRates`, {
      //       headers: {
      //         'Content-Type': 'application/json; charset=UTF-8',
      //       }
      //     });
      //
      //     console.log('获取当前电表年能耗以及同比环比', response.data);
      //     this.dianMonitoringData.year = response.data.total_consumption_this_year.toFixed(2);
      //     if (response.data.year_on_year_growth == '-1000') {
      //       this.dianMonitoringData.yearTongbi = '— —'
      //     } else {
      //       this.dianMonitoringData.yearTongbi = response.data.year_on_year_growth.toFixed(2);
      //     }
      //     if (response.data.year_on_year_growth == '-1000') {
      //       this.dianMonitoringData.yearHuanbi = '— —'
      //     } else {
      //       this.dianMonitoringData.yearHuanbi = response.data.year_on_year_growth.toFixed(2);
      //     }
      //   } catch (error) {
      //     console.log(error);
      //   }
      // },
      //能耗分项
      async drawDianPartNowBar() {
        try {
          const response = await axios.get(`http://localhost:8080/getTodayConsumption`, {
            headers: {
              'Content-Type': 'application/json; charset=UTF-8',
            }
          });
          const data = response.data
          console.log('取出来能耗分项数据是：', data)
          this.EnergyDistribution.light = parseFloat(data.lightConsumptionToday).toFixed(2);
          this.EnergyDistribution.socket = parseFloat(data.socketConsumptionToday).toFixed(2);
          this.EnergyDistribution.aircondition = parseFloat(data.airconditionConsumptionToday).toFixed(2);
          this.EnergyDistribution.airfresh = parseFloat(data.freshConsumptionToday).toFixed(2);




          // 对数据进行排序
          const sortedData = [
            {name: '照明', score: this.EnergyDistribution.light},
            // {name: '插座', score: this.EnergyDistribution.socket},  //先把配电当弱电用
            {name: '空调', score:  this.EnergyDistribution.aircondition},
            {name: '新风', score:  this.EnergyDistribution.airfresh},

          ];

          // 对数据进行排序
          sortedData.sort((a, b) => a.score - b.score);

          // 初始化并绘制柱状图
          this.dianPartcharts = echarts.init(this.$refs.dianPartBar)
          this.dianPartcharts.setOption({
            tooltip: {},
            grid: {
              left: '5%', // 调整左边空间
              right: '18%', // 调整右边空间
              bottom: '0%', // 调整底部空间
              top: '5%',
              containLabel: true,
            },
            yAxis: {
              type: 'category',
              data: sortedData.map(item => item.name),
              axisLine: {
                lineStyle: {
                  color: 'honeydew'
                }
              },
              axisLabel: {
                textStyle: {
                  // fontSize: 16, // 设置文字大小为18px
                  fontSize: this.calculateFontSize(0.9),
                  color: 'honeydew'    // 可选，设置文字颜色为黑色
                }
              },
              axisTick: {
                show: false
              },
            },
            xAxis: {
              type: 'value',
              splitLine: {
                show: false
              },
              axisTick: {
                show: false
              },
              axisLine: {
                lineStyle: {
                  color: 'honeydew'
                }
              },
              axisLabel: {
                show: false // 不显示刻度数值
              }
            },
            series: [
              {
                data: sortedData.map(item => item.score),
                type: 'bar',
                barWidth: this.calculateFontSize1(3), // 调整柱子宽度，可以根据需要进行调整
                itemStyle: {
                  color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                    {offset: 0, color: 'rgba(6,15,32,0.6)'},
                    {offset: 1, color: '#33A6D6'}
                  ])
                },
                emphasis: {
                  itemStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                      {offset: 0, color: '#33A6D6'},
                      {offset: 1, color: 'rgba(6,15,32,0.6)'}
                    ])
                  }
                },
                label: {
                  show: true, // 显示标签
                  position: 'right', // 标签位置，可根据需要调整
                  color: 'honeydew', // 标签颜色
                  fontSize: this.calculateFontSize(0.8),
                  formatter: '{c} kWh', // 标签内容，这里使用默认的数值显示
                }
              }
            ]
          });

        } catch (error) {
          console.log(error)
        }
      },

      //  获得日能耗监测数据
      async drawDayDianLine() {
        try {
          const response = await axios.get(`http://localhost:8080/getHourlyConsumption`, {
            headers: {
              'Content-Type': 'application/json; charset=UTF-8',
            }
          });
          const HourlyConsumption = response.data
          console.log('获取当天每小时能耗', response.data);
          // X轴24小时
          const hours = Array.from({length: 24}, (_, i) => i);
          //日能耗数据处理
          var HourConsumptionData = Array(24).fill(null);
          HourlyConsumption.forEach(item => {
            var hour = new Date(item.hour).getHours();
            HourConsumptionData[hour] = parseFloat(item.hourly_consumption.toFixed(2));
          });
          console.log("绘制日能耗:", HourConsumptionData)
          this.dianLinecharts = echarts.init(this.$refs.drawDianchart);
          this.dianLinecharts.setOption({
            grid: {
              left: '5%',
              right: '10%',
              bottom: '0%', // 调整底部空间
              top: '20%',
              containLabel: true
            },

            xAxis: {
              type: 'category',
              data: hours, // 根据条件设置横坐标
              //data: formattedTimeArray,
              axisLabel: { // 横坐标轴标签样式
                color: 'honeydew',
                fontSize: this.calculateFontSize(0.8),
              },
              name: '时', // 设置纵坐标轴标题
              nameLocation: 'end',
              nameGap: this.calculateFontSize(0.2),
              nameTextStyle: { // 标题样式
                color: 'honeydew',// 标题颜色
                fontSize: this.calculateFontSize(0.8),
              }
            },
            yAxis: {
              type: 'value',
              axisLabel: { // 纵坐标轴标签样式
                color: 'honeydew',
                fontSize: this.calculateFontSize(0.8),
              },
              splitLine: { // 刻度线样式
                show: true, // 不显示刻度线
                lineStyle: {
                  color: 'rgba(255,255,255,0.3)'
                }

              },
              name: 'kWh', // 设置纵坐标轴标题为 "kWh"
              nameTextStyle: { // 标题样式
                color: 'honeydew',// 标题颜色
                fontSize: this.calculateFontSize(0.8),
              }
            },
            tooltip: {
              trigger: 'axis', // 设置触发类型为轴线
            },
            series: [
              {
                //data: [820, 932, 690, 934, 690, 1330, 120],
                data: HourConsumptionData,
                type: 'line', // 根据条件设置 type
                areaStyle: {
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [ // 渐变颜色设置
                    {offset: 0, color: 'rgba(32,229,255,0.8)'}, // 开始颜色，透明度为0.8
                    {offset: 1, color: 'rgba(102, 205, 170, 0)'} // 结束颜色，透明度为0
                  ])
                },
                lineStyle: { // 折线样式
                  color: '#20E5FF' // 折线颜色
                },
                itemStyle: {
                  color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                    {offset: 0, color: 'rgba(6,15,32,0.6)'},
                    {offset: 1, color: '#33A6D6'}
                  ])
                },
              }
            ]
          });

        } catch (error) {
          console.log(error);
        }
      },
      //获取月能耗监测数据
      async drawMonthDianEchart() {
        try {
          const response = await axios.get(`http://localhost:8080/getMonthlyConsumption`, {
            headers: {
              'Content-Type': 'application/json; charset=UTF-8',
            }
          });
          const MonthlyConsumption = response.data
          console.log('获取每月能耗', response.data);
          // X轴
          const months = Array.from({length: 12}, (_, i) => i + 1);
          //
          var MonthConsumptionData = Array(12).fill(null);
          MonthlyConsumption.forEach(item => {
            var month = new Date(item.month).getMonth() + 1;
            MonthConsumptionData[month] = parseFloat(item.monthly_consumption.toFixed(2));

          });
          console.log("绘制每月能耗:", MonthConsumptionData)
          this.diancharts = echarts.init(this.$refs.drawDianchart);
          this.diancharts.setOption({
            grid: {
              left: '5%',
              right: '10%',
              bottom: '0%', // 调整底部空间
              top: '20%',
              containLabel: true
            },
            xAxis: {
              type: 'category',
              data: months, // 根据条件设置横坐标
              //data: formattedTimeArray,
              axisLabel: { // 横坐标轴标签样式
                color: 'honeydew',
                fontSize: this.calculateFontSize(0.8),
              },
              name: '月', // 设置纵坐标轴标题为 "月"
              nameLocation: 'end',
              nameGap: this.calculateFontSize(0.2),
              nameTextStyle: { // 标题样式
                color: 'honeydew',// 标题颜色
                fontSize: this.calculateFontSize(0.8),
              }
            },
            yAxis: {
              type: 'value',
              axisLabel: { // 纵坐标轴标签样式
                color: 'honeydew',
                fontSize: this.calculateFontSize(0.8),
              },
              splitLine: { // 刻度线样式
                show: true, // 不显示刻度线
                lineStyle: {
                  color: 'rgba(255,255,255,0.3)'
                }

              },
              name: 'kWh', // 设置纵坐标轴标题为 "kWh"
              nameTextStyle: { // 标题样式
                color: 'honeydew',// 标题颜色
                fontSize: this.calculateFontSize(0.8),
              }
            },
            tooltip: {
              trigger: 'axis', // 设置触发类型为轴线
            },
            series: [
              {
                //data: [820, 932, 690, 934, 690, 1330, 120],
                data: MonthConsumptionData,
                type: 'bar', // 根据条件设置 type
                barWidth: this.calculateFontSize(1.8),
                itemStyle: {
                  color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                    {offset: 0, color: 'rgba(6,15,32,0.6)'},
                    {offset: 1, color: '#33A6D6'}
                  ])
                },
              }
            ]
          });

        } catch (error) {
          console.log(error);
        }
      },

      //  获得周能耗监测数据
      async drawWeekDianLine() {
        try {
          const response = await axios.get(`http://localhost:8080/getDailyConsumptionLast7Days`, {
            headers: {
              'Content-Type': 'application/json; charset=UTF-8',
            }
          });
          const DailyConsumption = response.data
          console.log('获取七天能耗', response.data);

          // 生成当前日期及之前7天的日期数组
          function getLast7Days() {
            const days = [];
            const now = new Date();
            for (let i = 0; i < 8; i++) {
              const day = new Date(now);
              day.setDate(now.getDate() - i);
              const formattedDay = day.toISOString().split('T')[0]; // 格式为 YYYY-MM-DD
              days.unshift(formattedDay); // 添加到数组的前面
            }
            return days;
          }

          // 生成包含所有天数的完整数据，并补齐缺失的数据
          function completeData(backendData) {
            const days = getLast7Days();
            const completeData = days.map(day => {
              const dataForDay = backendData.find(item => item.day === day);
              return {
                day,
                daily_consumption: dataForDay ?  parseFloat(dataForDay.daily_consumption.toFixed(2)): null // 如果没有数据，则为 null
              };
            });
            return completeData;
          }

          const fullData = completeData(DailyConsumption);
          // 准备 x 轴和 y 轴数据
          const DateDatas = fullData.map(item => item.day.slice(5)); // 只取月日部分
          const DayConsumptionData = fullData.map(item => item.daily_consumption);

          console.log("日期", DateDatas);
          console.log("绘制天能耗:", DayConsumptionData);
          this.weekdianLinecharts = echarts.init(this.$refs.drawDianchart);
          this.weekdianLinecharts.setOption({
            grid: {
              left: '5%',
              right: '10%',
              bottom: '0%', // 调整底部空间
              top: '20%',
              containLabel: true
            },

            xAxis: {
              type: 'category',
              data: DateDatas, // 根据条件设置横坐标
              //data: formattedTimeArray,
              axisLabel: { // 横坐标轴标签样式
                color: 'honeydew',
                fontSize: this.calculateFontSize(0.8),
              },
              name: '日', // 设置纵坐标轴标题为 "月"
              nameLocation: 'end',
              nameGap: this.calculateFontSize(0.2),
              nameTextStyle: { // 标题样式
                color: 'honeydew',// 标题颜色
                fontSize: this.calculateFontSize(0.8),
              }
            },
            yAxis: {
              type: 'value',
              axisLabel: { // 纵坐标轴标签样式
                color: 'honeydew',
                fontSize: this.calculateFontSize(0.8),
              },
              splitLine: { // 刻度线样式
                show: true, // 不显示刻度线
                lineStyle: {
                  color: 'rgba(255,255,255,0.3)'
                }

              },
              name: 'kWh', // 设置纵坐标轴标题为 "kWh"
              nameTextStyle: { // 标题样式
                color: 'honeydew',// 标题颜色
                fontSize: this.calculateFontSize(0.8),
              }
            },
            tooltip: {
              trigger: 'axis', // 设置触发类型为轴线
            },
            series: [
              {
                //data: [820, 932, 690, 934, 690, 1330, 120],
                data: DayConsumptionData,
                type: 'line', // 根据条件设置 type
                areaStyle: {
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [ // 渐变颜色设置
                    {offset: 0, color: 'rgba(32,229,255,0.8)'}, // 开始颜色，透明度为0.8
                    {offset: 1, color: 'rgba(102, 205, 170, 0)'} // 结束颜色，透明度为0
                  ])
                },
                lineStyle: { // 折线样式
                  color: '#20E5FF' // 折线颜色
                },
                itemStyle: {
                  color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                    {offset: 0, color: 'rgba(6,15,32,0.6)'},
                    {offset: 1, color: '#33A6D6'}
                  ])
                },
              }
            ]
          });
        } catch (error) {
          console.log(error);
        }
      },

      // 绘制用能趋势图表
      async drawdianchart() {
        if (this.valueDianMainType == '1') {
          this.drawDayDianLine();
        } else if (this.valueDianMainType == "2") {
          this.drawWeekDianLine();
        } else if (this.valueDianMainType == "3") {
          this.drawMonthDianEchart();
        }

      },

      // 根据输入的personCount生成表单
      generateForms() {
        this.persons = [];
        for (let i = 0; i < this.personCount; i++) {
          this.persons.push({
            gender: null, // 默认性别
            age: null,
            pmv: 0,// 默认年龄为空
          });
        }
      },
// 提交数据
      submitData() {
        const peopleinfo = {
          numberOfPeople: this.personCount,
          people: this.persons
        };
        console.log('提交的数据: ', peopleinfo);
        axios.post(`http://localhost:8080/setAC`, peopleinfo, {
          headers: {
            'Content-Type': 'application/json; charset=UTF-8',
          }
        })
          .then(response => {
            console.log("提交数据成功", response.data);
            // 使用 $message 显示成功消息
            this.$message({
              message: '人员信息已经成功提交！',
              type: 'success',
              duration: 2000 // 自动关闭提示框的时间，单位是毫秒
            });
          })
          .catch(error => {
            console.error(error);
          });
      },

      //查询空调推荐值
      async searchACSET() {
        try {
          const response = await axios.get('http://localhost:8080/getACSet', {
            headers: {
              'Content-Type': 'application/json; charset=UTF-8',
            }
          });
          this.ACSet.tem = response.data;
          console.log('查询空调推荐值', response.data);

          this.ACSETtemperatureList.shift();
          this.ACSETtemperatureList.push(this.ACSet.tem);

          // // 查询新值并将其添加到数组的最前面
          // this.ACSETtemperatureList.unshift(this.ACSet.tem);

          // // 如果数组的长度超过 30，移除最后的元素
          // if (this.ACSETtemperatureList.length > 30) {
          //   this.ACSETtemperatureList.pop();
          // }
          //绘制温度折线图
          this.ACSETTempChart = echarts.init(this.$refs.ACSETTemp);
          this.ACSETTempChart.setOption({
            xAxis: {
              type: 'category',
              data: this.ACtemperatureList.map((_, index) => `${index + 1}`),
              axisLabel: {
                interval: 0, // 设置全部显示
                rotate: 0, // 旋转角度
                margin: 10,   // 标签与轴线之间的距离
                fontSize: this.calculateFontSize(0.8),
              },
              axisLine: {
                lineStyle: {
                  color: 'honeydew'
                }
              },

            },
            graphic: [
              {
                type: 'text',
                left: 'center', // 居中
                top: '95%',     // 根据实际图表高度调整，保证在横坐标标签下方
                style: {
                  text: '时间 / 5秒',
                  fill: 'honeydew',
                  fontSize: this.calculateFontSize(0.8),
                }
              }
            ],
            grid: {
              left: '5%',
              right: '5%',
              bottom: '8%',
              top: '20%',
              containLabel: true
            },
            // legend: {
            //   top:'5%',
            //   right: '5%',
            //   textStyle: {
            //     color: 'honeydew',
            //     fontSize:this.calculateFontSize(0.8),
            //   }
            // },
            yAxis: [
              {
                type: 'value',
                name: '温度(℃)',
                axisTick: {show: false},
                axisLine: {
                  lineStyle: {
                    color: '#20E5FF'
                  }
                },
                splitLine: {
                  show: true,
                  lineStyle: {
                    color: 'rgba(255,255,255,0.3)'
                  }
                },
                axisLabel: {
                  formatter: '{value}',
                  fontSize: this.calculateFontSize(0.8),
                },
                nameTextStyle: {
                  // color: 'honeydew',
                  fontSize: this.calculateFontSize(0.8),
                }
              },
            ],
            tooltip: {},
            series: [

              {
                name: '温度',
                type: 'line',
                data: this.ACSETtemperatureList,
                lineStyle: {
                  color: '#20E5FF'
                },
                itemStyle: {
                  color: '#20E5FF' // 设置曲线上的点颜色
                }
              },

            ]
          });
        } catch (error) {
          console.error(error);
        }
      },

      //查询空调实际值
      async searchACActual() {
        try {
          const response = await axios.get('http://127.0.0.1:8080/getLastAC?devName=%E7%A9%BA%E8%B0%83%E5%84%BF%E7%AB%A5%E6%88%BF', {
            headers: {
              'Content-Type': 'application/json; charset=UTF-8',
            }
          });
          this.ACactual.tem = response.data.temperature;
          console.log('查询空调实际值', response);
          this.ACtemperatureList.shift();
          this.ACtemperatureList.push(this.ACactual.tem);
          // 查询新值并将其添加到数组的最前面
          // this.ACtemperatureList.unshift(this.ACactual.tem);
          //
          // // 如果数组的长度超过 30，移除最旧的元素
          // if (this.ACtemperatureList.length > 30) {
          //   this.ACtemperatureList.pop();
          // }
          //绘制温度折线图
          this.ACTempChart = echarts.init(this.$refs.ACTemp);
          this.ACTempChart.setOption({
            xAxis: {
              type: 'category',
              data: this.ACtemperatureList.map((_, index) => `${index + 1}`),
              axisLabel: {
                interval: 0, // 设置全部显示
                rotate: 0, // 旋转角度
                margin: 10,   // 标签与轴线之间的距离
                fontSize: this.calculateFontSize(0.8),
              },
              axisLine: {
                lineStyle: {
                  color: 'honeydew'
                }
              }
            },
            graphic: [
              {
                type: 'text',
                left: 'center', // 居中
                top: '95%',     // 根据实际图表高度调整，保证在横坐标标签下方
                style: {
                  text: '时间 / 5秒',
                  fill: 'honeydew',
                  fontSize: this.calculateFontSize(0.8),
                }
              }
            ],
            grid: {
              left: '5%',
              right: '5%',
              bottom: '8%',
              top: '20%',
              containLabel: true
            },
            // legend: {
            //   top:'5%',
            //   right: '5%',
            //   textStyle: {
            //     color: 'honeydew',
            //     fontSize:this.calculateFontSize(0.8),
            //   }
            // },
            yAxis: [
              {
                type: 'value',
                name: '温度(℃)',
                axisTick: {show: false},
                axisLine: {
                  lineStyle: {
                    color: '#20E5FF'
                  }
                },
                splitLine: {
                  show: true,
                  lineStyle: {
                    color: 'rgba(255,255,255,0.3)'
                  }
                },
                axisLabel: {
                  formatter: '{value}',
                  fontSize: this.calculateFontSize(0.8),
                },
                nameTextStyle: {
                  // color: 'honeydew',
                  fontSize: this.calculateFontSize(0.8),
                }
              },
            ],
            tooltip: {},
            series: [

              {
                name: '温度',
                type: 'line',
                data: this.ACtemperatureList,
                lineStyle: {
                  color: '#20E5FF'
                },
                itemStyle: {
                  color: '#20E5FF' // 设置曲线上的点颜色
                }
              },

            ]
          });

        } catch (error) {
          console.error(error);
        }
      },
      //查询被控房间24小时温度和湿度值
      async drawPMVTemandHum() {
        try {
          const response = await axios.get('http://localhost:8080/getLast24HoursTemperature', {
            headers: {
              'Content-Type': 'application/json; charset=UTF-8',
            }
          });
          var EnvironmentTemperatureData = response.data;
          console.log('环境监测温度24小时数据返回的数是', EnvironmentTemperatureData);
          //温度数据按房间分组筛选
          const ElderroomEnvironmentTemperatureData0 = EnvironmentTemperatureData.filter(item => item.devName === '环境探测器儿童房');

          // X轴24小时
          const hours = Array.from({length: 24}, (_, i) => i);
          //主卧温度数据处理
          var ElderroomEnvironmentTemperatureData = Array(24).fill(null);
          ElderroomEnvironmentTemperatureData0.forEach(item => {
            var hour = new Date(item.time).getHours();
            // ElderroomEnvironmentTemperatureData[hour] = Math.floor(item.temperature / 100);
            ElderroomEnvironmentTemperatureData[hour] = parseFloat((item.temperature / 100).toFixed(2));


          });

          const response1 = await axios.get('http://localhost:8080/getLast24HoursHumidity', {
            headers: {
              'Content-Type': 'application/json; charset=UTF-8',
            }
          });
          var EnvironmentHumidityData = response1.data;
          console.log('环境监测湿度24小时数据返回的数是', EnvironmentHumidityData);
          //湿度数据按房间分组筛选
          const ElderroomEnvironmentHumidityData0 = EnvironmentHumidityData.filter(item => item.devName === '环境探测器儿童房');

          //老人房数据处理
          var ElderroomEnvironmentHumidityData = Array(24).fill(null);
          ElderroomEnvironmentHumidityData0.forEach(item => {
            var hour = new Date(item.time).getHours();
            ElderroomEnvironmentHumidityData[hour] = Math.floor(item.humidity / 100);
          });

          this.environTHChart = echarts.init(this.$refs.THLine)
          this.environTHChart.setOption({
            //x轴设置
            xAxis: {
              type: 'category',
              data: hours,
              axisLabel: {
                interval: 0, // 设置全部显示
                margin: 10,  // 标签与轴线之间的距离
                textStyle: {
                  color: 'honeydew',
                  fontSize: this.calculateFontSize(0.8),
                }
              },
              axisLine: {
                lineStyle: {
                  color: 'honeydew'
                }
              }
            },

            graphic: [
              {
                type: 'text',
                left: 'center', // 居中
                top: '95%',     // 根据实际图表高度调整，保证在横坐标标签下方
                style: {
                  text: '时间 / 时',
                  fill: 'honeydew',
                  fontSize: this.calculateFontSize(0.8),
                }
              }
            ],
            //网格设置
            grid: {
              left: '5%',
              right: '5%',
              bottom: '8%',
              containLabel: true
            },
            //图例
            legend: {
              // data: ['温度', '湿度'],
              textStyle: {
                color: 'honeydew',
                fontSize: this.calculateFontSize(0.8),
              },
              right: 50,
            },
            //y轴
            yAxis: [
              {
                type: 'value',
                name: '温度(℃)',
                axisTick: {show: false},
                axisLine: {
                  lineStyle: {
                    color: '#20E5FF'
                  }
                },
                splitLine: {
                  show: true,
                  lineStyle: {
                    color: 'rgba(255,255,255,0.3)'
                  }
                },
                axisLabel: {
                  formatter: '{value}',
                  fontSize: this.calculateFontSize(0.8),
                },
                nameTextStyle: {
                  // color: 'honeydew',
                  fontSize: this.calculateFontSize(0.8),
                }
              },
              {
                type: 'value',
                name: '湿度(%)',
                axisTick: {show: false},
                splitLine: {
                  show: false
                },
                axisLine: {
                  lineStyle: {
                    color: 'rgba(253,207,110)'
                  }
                },
                axisLabel: {
                  formatter: '{value}',
                  fontSize: this.calculateFontSize(0.8),
                },
                nameTextStyle: {
                  // color: 'honeydew',
                  fontSize: this.calculateFontSize(0.8),
                }
              },
            ],

            //提示框内容
            tooltip: {
              trigger: 'axis',
              textStyle: {
                align: 'left'
              }
            },
            //
            series: [
              {
                name: '温度',
                type: 'line',
                barWidth: this.calculateFontSize(1.2),
                yAxisIndex: 0,
                // data:[24,25,26,28,27],
                data: ElderroomEnvironmentTemperatureData,
                lineStyle: {
                  color: '#20E5FF'
                },
                itemStyle: {
                  color: '#20E5FF'
                },
              },
              {
                name: '湿度',
                type: 'line',
                barWidth: this.calculateFontSize(1.2),
                yAxisIndex: 1,
                // data:[40,45,46,48,49],
                data: ElderroomEnvironmentHumidityData,
                lineStyle: {
                  color: 'rgba(253,207,110)',
                },
                itemStyle: {
                  color: 'rgba(253,207,110)',
                },
              },

            ]
          });


        } catch (error) {
          console.error("发生错误:", error);

        }
      },

      //选择房间知识图谱
      selectRoom(value) {
        // 找到选中的 label 并更新 selectedLabel
        const selected = this.optionsRoomMainType.find(item => item.value === value);
        this.selectedLabel = selected ? selected.label : '';
      },
      handleCurrentChange(currentPage) {
        this.currentPage = currentPage; //每次点击分页按钮，当前页发生变化
      },


      // //环境数据
      // searchEnviron() {
      //   axios.get('http://localhost:8080/getLast7DayEnv').then((response) => {
      //     // console.log('数据：', res.data);
      //     this.tableEnvironDataHistory = response.data;
      //     console.log('环境报表', response.data);
      //     this.paginatedEnvironData();
      //   }).catch(error => {
      //     console.log(error);
      //
      //
      //   })
      // },

      searchEnviron() {

        // TODO: 发送查询请求，获取数据
        function formatTime1(dateStr) {
          const date = new Date(dateStr);
          const year = date.getFullYear();
          const month = (date.getMonth() + 1).toString().padStart(2, '0');
          const day = date.getDate().toString().padStart(2, '0');
          return `${year}-${month}-${day} 00:00:00`;
        }

        function formatTime2(dateStr) {
          const date = new Date(dateStr);
          const year = date.getFullYear();
          const month = (date.getMonth() + 1).toString().padStart(2, '0');
          const day = date.getDate().toString().padStart(2, '0');
          return `${year}-${month}-${day} 23:59:59`;
        }

        let url = "";
        let data = {};
        //电量数据
        if (this.queryEnvironData.item[0] == '1') {
          url = `http://127.0.0.1:8080/getEnvByTimeRange`;
          data = {
            deviceName: this.queryEnvironData.item[1],
            endTime: formatTime2(this.queryEnvironData.dateRange[1]),
            startTime: formatTime1(this.queryEnvironData.dateRange[0]),
          };
          console.log('环境报表参数', data);

        } else if (this.queryEnvironData.item[0] == '2') {
          url = `http://127.0.0.1:8080/getACByTimeRange`;
          data = {
            deviceName: this.queryEnvironData.item[1],
            endTime: formatTime2(this.queryEnvironData.dateRange[1]),
            startTime: formatTime1(this.queryEnvironData.dateRange[0]),
          };
          console.log('空调报表参数', data);
        } else if (this.queryEnvironData.item[0] == '0') {
          url = `http://127.0.0.1:8080/getEleByTimeRange`;
          data = {
            deviceName:'',
            endTime: formatTime2(this.queryEnvironData.dateRange[1]),
            startTime: formatTime1(this.queryEnvironData.dateRange[0]),
          };
          console.log('电量报表参数', data);
        }
        else if (this.queryEnvironData.item[0] == '3') {
          url = `http://127.0.0.1:8080/getXFByTimeRange`;
          data = {
            deviceName:this.queryEnvironData.item[1],
            endTime: formatTime2(this.queryEnvironData.dateRange[1]),
            startTime: formatTime1(this.queryEnvironData.dateRange[0]),
          };
          console.log('新风量报表参数', data);
        }


        if (data.startTime !== undefined && data.endTime !== undefined) {
          axios.post(url, data, {
            headers: {'Content-Type': 'application/json; charset=UTF-8'}
          }).then(response => {
            console.log("数据对象", this.queryEnvironData);
            console.log('历史报表参数', data);
            this.tableEnvironDataHistory = response.data;
            console.log('历史报表', response.data);
            this.paginatedEnvironData();
          }).catch(error => {
            // 请求失败，处理错误
            console.log("历史报表错误", error);
          });
        }


      },


      paginatedEnvironData() {
        const start = (this.queryEnvironData.currentPage - 1) * this.queryEnvironData.pageSize;
        const end = start + this.queryEnvironData.pageSize;
        this.showEnvironData = this.tableEnvironDataHistory.slice(start, end);
        console.log("展示数据", this.showEnvironData);

      },

      formatTimeHistoryShow(value) {
        if (!value) return ''; // 处理空值

        const date = new Date(value.time);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); // 月份从0开始
        const day = String(date.getDate()).padStart(2, '0');
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');

        return `${year}-${month}-${day} ${hours}:${minutes}`;
      },
      formatNA(row, column) {
        const value = row[column.property];
        if (value == -1.0) {
          return 'N/A';
        }
        return value;
      },
      formatRoomName(value) {
        if (value.devName === '环境探测器主卧') {
          return '主卧';
        } else if (value.devName === '环境探测器客厅') {
          return '客厅';
        } else if (value.devName === '环境探测器儿童房') {
          return '儿童房';
        } else if (value.devName === '环境探测器卫生间') {
          return '卫生间';
        }
        return value.devName; // 返回原值，如果没有匹配
      },
      formatACName(value) {
        if (value.devName === '空调客厅') {
          return '客厅';
        } else if (value.devName === '空调主卧') {
          return '主卧';
        } else if (value.devName === '空调儿童房') {
          return '儿童房';
        } else if (value.devName === '空调书房') {
          return '书房';
        } else if (value.devName === '空调厨房') {
          return '厨房';
        }
        return value.devName; // 返回原值，如果没有匹配
      },

      formatXFName(value) {
        if (value.devName === '新风客厅') {
          return '客厅';
        } else if (value.devName === '新风主卧') {
          return '主卧';
        } else if (value.devName === '新风儿童房') {
          return '儿童房';
        } else if (value.devName === '新风多功能房') {
          return '多功能房';
        } else if (value.devName === '新风厨房') {
          return '厨房';
        }
        return value.devName; // 返回原值，如果没有匹配
      },


      formatTemperature(value) {
        if (value.temperature != null) {
          return Math.floor(value.temperature / 100); // 除以 100 并取整
        }
        return value.temperature; // 如果值为 null，返回原值
      },
      formatHumidity(value) {
        if (value.humidity != null) {
          return Math.floor(value.humidity / 100); // 除以 100 并取整
        } else if (value == -1.0) {
          return 'N/A';
        }
        return value.humidity; // 如果值为 null，返回原值
      },
      formatWindspeed(value) {
        if (value.windSpeed === 1) {
          return '高风';
        } else if (value.windSpeed === 2) {
          return '中风';
        } else if (value.windSpeed === 4) {
          return '低风';
        } else if (value.windSpeed === 0) {
          return 'N/A';
        }

        return value.windSpeed; // 返回原值，如果没有匹配
      },
      formatMode(value) {
        if (value.mode === '1') {
          return '制冷';
        } else if (value.mode === '8') {
          return '制热';
        } else if (value.mode === '4') {
          return '送风';
        } else if (value.mode === '2') {
          return '除湿';
        }

        return value.mode; // 返回原值，如果没有匹配
      },
      formatStatus(value) {
        if (value.status === 0) {
          return '关';
        } else if (value.status === 1) {
          return '开';
        }
        return value.status; // 返回原值，如果没有匹配
      },

      handleSizeChangeEnviron(val) {
        this.queryEnvironData.pageSize = val;
        this.queryEnvironData.currentPage = 1;
        this.searchEnviron();

      },
      handleCurrentChangeEnviron(val) {
        this.queryEnvironData.currentPage = val;
        this.searchEnviron();
      },
    },
  }
</script>

<style scoped>
  /*  页面背景容器*/
  .anqiju {
    background-image: url("../../assets/anqiju/background.png");
    background-position: center;
    background-repeat: no-repeat; /* 设置不重复平铺 */
    background-size: cover; /* 设置图片尺寸自适应容器大小 */
    height: 100vh;
  }

  /*页面头组件容器*/
  .el-header {
    background-color: rgba(52, 154, 245, 0);
    background-image: url("../../assets/anqiju/headerbg.png");
    background-position: center;
    background-repeat: no-repeat; /* 设置不重复平铺 */
    background-size: 100% 100%;
    color: #333;
    text-align: center;
  }

  /*标题样式*/
  .grid-content-title {
    margin-bottom: 1.5vh;
    letter-spacing: 0.2vw; /* 设置字间距为2px，可以根据需要调整 */
    font-size: 2vw;
    width: 34vw;
    background: linear-gradient(to bottom, #ffff, #f8fdff, #acf5ff, #67eeff, #24d8ff);
    -webkit-background-clip: text;
    color: transparent;
    font-family: Arial;
    font-weight: bolder;

    font-style: italic;
  }

  /*时间样式*/
  .grid-content-time {
    height: 7vh;
    font-size: 1vw;
    background: #24d8ff;
    -webkit-background-clip: text;
    color: transparent;
    font-family: Arial;
    font-weight: bolder;
    text-align: right;
    display: flex;
    align-items: center;
    justify-content: flex-end;

  }

  /*用户样式*/
  .grid-content-user {
    height: 7vh;
    text-align: left;
    margin-left: 15%;
    font-size: 2vw;
    color: #24d8ff;
    display: flex;
    align-items: center;
  }

  .el-aside {
    background-color: rgba(211, 220, 230, 0);
    color: #333;
    text-align: center;
  }

  /*导航栏*/
  .el-menu {
    height:100%;
    border-right: none !important;
  }

  /*导航栏项样式*/
  .el-menu-item {
    padding-right: 0;
    height: 8vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  /*导航栏选中样式*/
  .el-menu-item:hover {
    background-color: rgba(0, 228, 255, 0.15) !important;
  }

  /*导航栏项背景图*/
  .item {
    font-size: 2vw;
  }

  /*导航栏文字样式*/
  .title-overlay {
    position: absolute;
    top: 50%; /* 文字垂直居中 */
    right: 2.5vw; /* 将 right 设置为 0，使标题文字靠在图片的右侧 */
    transform: translate(30%, -50%);
    color: honeydew; /* 文字颜色 */
    font-size: 1.2vw; /* 字体大小 */
  }

  /*导航栏文字激活状态*/
  .active {
    color: #00E4FF; /* 蓝色 */
  }


  /*卡片基础样式*/
  .el-card {
    border: 1px solid rgba(1, 1, 1, 0);
    background-color: transparent;
    color: #ffffff;
    margin-bottom: 2vh;
  }

  .el-card /deep/ .el-card__header {
    height: 5vh;
    font-size: 1.2vw;
    border: none;
    text-align: left;
    background-color: transparent;
    background-image: url('../../assets/anqiju/cardHeader.png');
    background-repeat: no-repeat;
  }

  .clearfix {
    margin-left: 1.5vw;
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

  /*  区域信息卡片*/
  .box-card-room /deep/ .el-card__header {
    background-size: cover;
    background-size: 90% 100%; /* 将背景图片宽度设置为卡片头部宽度的五分之一，高度自适应 */
    background-position: 0 0; /* 将背景图片左侧对齐 */
  }

  /*区域图片*/
  .roomlogocontainer {
    height: 5vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .roomlogo {
    width: 2.5vw;
  }

  /*文本*/
  .room-text {
    font-size: 1.35vw;
    height: 5vh;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /*信息数值*/
  .room-num {
    font-size: 1.2vw;
    color: honeydew;
    font-weight: bolder;
    height: 5vh;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /*信息单位*/
  .room-unit {
    font-size: 1vw;
    color: honeydew;
    text-align: left;
    height: 5vh;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  /*  室外环境卡片*/
  .box-card-outdoor /deep/ .el-card__header {
    background-size: cover;
    background-size: 90% 100%; /* 将背景图片宽度设置为卡片头部宽度的五分之一，高度自适应 */
    background-position: 0 0; /* 将背景图片左侧对齐 */
  }

  .outdoorlogo {
    height: 9vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .outdoor {
    height: 9vh;
  }

  .outdoor-image {
    width: 2.7vw;
  }

  /*文本*/
  .outdoor-text {
    height: 1.5vh;
    font-size: 0.95vw;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /*信息数值*/
  .outdoor-num {
    height: 6vh;
    font-size: 1.1vw;
    color: honeydew;
    font-weight: bolder;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /*信息单位*/
  .outdoor-unit {
    font-size: 1vw;
    color: honeydew;
    text-align: left;
    font-weight: normal;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }


  /*房间图片*/
  .room-picture {
    background-image: url("../../assets/anqiju/3d_labled.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 70% 100%;
  }

  /*  智能设备卡片*/
  .box-card-air /deep/ .el-card__header {
    background-size: cover;
    background-size: 90% 100%; /* 将背景图片宽度设置为卡片头部宽度的五分之一，高度自适应 */
    background-position: 0 0; /* 将背景图片左侧对齐 */
  }

  .image-contain {
    display: flex;
    align-items: center;
    justify-content: center;
  }


  /*anqiju_logo图片控制*/
  .logo-contain {
    display: flex;
    align-items: center;
    height: 6vh; /* 控制高度为6vh */
    padding: 0 0 0 50px;
  }

  .anqijulogo {
    height: 80%; /* 图片高度填充容器 */
    max-height: 100%; /* 确保不超过容器高度 */
    width: auto; /* 宽度自适应保持比例 */
    object-fit: contain; /* 保持图片比例不变形 */
    /*filter: drop-shadow(0 0 3px rgba(255, 255, 255, 0.5)); !* 添加微妙的白色阴影增强可读性 *!*/
  }

  .kongtiao-image {
    width: 2.9vw;

  }

  .air-name {
    color: #75d5ff;
    font-size: 1vw;
    line-height: 5vh;
    display: flex;
    justify-content: center;

  }

  .air-text {
    font-size: 1vw;
    line-height: 4vh;
    display: flex;
    justify-content: flex-start;
    color: #75d5ff;
  }

  .air-unit {
    font-size: 1vw;
    line-height: 4vh;
    display: flex;
    justify-content: flex-start;
  }

  .air-num {
    font-size: 1vw;
    line-height: 4vh;
    display: flex;
    justify-content: center;
    font-weight: bolder;

  }

  /*  能耗监测卡片*/
  .box-card-energy /deep/ .el-card__header {
    background-size: cover;
    background-size: 90% 100%; /* 将背景图片宽度设置为卡片头部宽度的五分之一，高度自适应 */
    background-position: 0 0; /* 将背景图片左侧对齐 */
  }

  /*能耗名称样式*/
  .energy-text {
    line-height: 4vh;
    font-size: 1.2vw;
    color: #00C9FF;
    text-align: left;
    display: flex;
    align-items: center;
  }

  /*能耗值样式*/
  .energy-num {
    font-size: 1.1vw; /* 设置数字字体大小为24px */
    font-weight: bolder;
    line-height: 4vh;
    text-align: left;
    color: honeydew; /* 设置文本颜色为白色 */
  }

  /*单位样式*/
  .energy-uint {
    margin-left: 0.3vw;
    font-size: 0.9vw; /* 设置 "kg" 字体大小为16px */
    font-weight: normal;
  }

  /*同环比值*/
  .top-number-white {
    font-size: 1vw; /* 设置数字字体大小为24px */
    font-weight: bolder;
    color: honeydew;
  }

  /*单位样式*/
  .top-unit {
    font-size: 0.9vw; /* 设置 "kg" 字体大小为16px */
  }

  /*同环比logo*/
  .red-arrow {
    color: red;
    font-weight: bolder;
    font-size: 0.9vw;
    vertical-align: middle;
  }

  .green-arrow {
    color: #5eef5e;
    font-weight: bolder;
    font-size: 0.9vw; /* 设置 "kg" 字体大小为16px */
    vertical-align: middle;
  }


  /*  室内环境卡片*/
  .box-card-indoor /deep/ .el-card__header {
    background-size: cover;
    background-size: 90% 100%; /* 将背景图片宽度设置为卡片头部宽度的五分之一，高度自适应 */
    background-position: 0 0; /* 将背景图片左侧对齐 */
  }

  /*设置键.切换键容器*/
  .header-button {
    margin-right: 10%;
    margin-left: auto;
    display: flex;
    align-items: center;
  }

  /*设置键.切换键大小*/
  .el-image {
    height: 2.8vh;
    width: 1.5vw;
  }

  /*-环境监测主卡片样式*/
  .box-card-environPart /deep/ .el-card__header {
    background-size: 28% 100%; /* 将背景图片宽度设置为卡片头部宽度的五分之一，高度自适应 */
    background-position: 0 0; /* 将背景图片左侧对齐 */
    background-repeat: no-repeat;
    text-align: left
  }

  .box-card-environPart /deep/ .el-card__body {
    padding: 3px;
    background-color: transparent;
  }

  /*-环境监测曲线卡片*/

  .box-card-environLine /deep/ .el-card__header {
    height: 5vh;
    font-size: 1.2vw;
    border-bottom: 0.2vh solid;
    border-top: 0.2vh solid;
    border-image: linear-gradient(90deg, #00afed 0%, rgba(0, 216, 247, 0) 100%) 2 2 2 2;
    border-radius: 4px;
    background: linear-gradient(to bottom, #ffff, #f8fdff, #acf5ff, #67eeff, #24d8ff);
    -webkit-background-clip: text;
    color: #00C9FF;
    text-align: left;
  }

  .clearfix1 {
    margin-left: 0.5vw;
    height: 100%;
    display: flex;
    align-items: center;
    font-size: 1vw;
  }

  .box-card-environLine /deep/ .el-card__body {
    padding: 3px;
    background-color: transparent;
  }


  /*2-能耗监测卡片和能耗排名*/
  .box-card-energyPart {
    margin-bottom: 2vh;
  }

  .box-card-energyPart /deep/ .el-card__header {
    background-size: 95% 100%; /* 将背景图片宽度设置为卡片头部宽度的五分之一，高度自适应 */
    background-position: 0 0; /* 将背景图片左侧对齐 */
    background-repeat: no-repeat;
  }

  .box-card-energyPart /deep/ .el-card__body {
    padding: 3px;
    margin: 0;
  }

  /*2-能耗对比卡片*/
  .box-card-energyPart2 /deep/ .el-card__header {
    background-size: 40% 100%; /* 将背景图片宽度设置为卡片头部宽度的五分之一，高度自适应 */
    background-position: 0 0; /* 将背景图片左侧对齐 */
    background-repeat: no-repeat;
  }

  .box-card-energyPart2 /deep/ .el-card__body {
    padding: 3px;
    margin: 0;
  }

  .box-card-energyPartday /deep/ .el-card__header {
    background-size: cover;
    background-size: 45% 100%; /* 将背景图片宽度设置为卡片头部宽度的五分之一，高度自适应 */
    background-position: 0 0; /* 将背景图片左侧对齐 */
  }

  /*  人员信息*/
  .box-card-Person /deep/ .el-card__header {
    background-size: cover;
    background-size: 65% 100%; /* 将背景图片宽度设置为卡片头部宽度的五分之一，高度自适应 */
    background-position: 0 0; /* 将背景图片左侧对齐 */
  }

  /*  PMV信息*/
  .box-card-ACSet /deep/ .el-card__header {
    background-size: cover;
    background-size: 65% 100%; /* 将背景图片宽度设置为卡片头部宽度的五分之一，高度自适应 */
    background-position: 0 0; /* 将背景图片左侧对齐 */
  }

  /*  空调控制*/
  .box-card-ACRun /deep/ .el-card__header {
    background-size: cover;
    background-size: 65% 100%; /* 将背景图片宽度设置为卡片头部宽度的五分之一，高度自适应 */
    background-position: 0 0; /* 将背景图片左侧对齐 */
  }

  /*输入框背景*/
  /deep/ .el-input__inner {
    background-color: rgba(64, 158, 255, 0.2);
    /*background-color: rgba(8, 22, 77, 0.1);*/
    color: #00E4FF;
    border: 0px;
    border-radius: 0px;
    text-align: center;
    font-size: 0.85vw;
  }

  /* 设置 el-input-number 加减按钮的背景颜色 */
  /deep/ .el-input-number__decrease,
  /deep/ .el-input-number__increase {
    background-color: rgba(64, 158, 255, 0.2);
    color: honeydew;
    border-color: #005C8E; /* 两侧边框竖线颜色 */
  }

  /* 鼠标悬停时背景颜色 */
  ::v-deep .el-input-number__decrease:hover,
  ::v-deep .el-input-number__increase:hover {
    background-color: #005C8E; /* 悬停时的背景颜色 */
  }

  /deep/ .el-form-item__label {
    font-size: 1vw; /* 设置字体大小 */
    color: honeydew; /* 设置字体颜色 */
    /*display: flex;*/
    align-items: center;
    line-height: 3vh;
  }

  /deep/ .el-form-item {
    background-color: rgba(8, 22, 77, 0.1);
    color: #00E4FF;
    border: 0px;
    border-radius: 0px;
    line-height: 3vh;
  }

  /deep/ .el-form-item__content {
    line-height: 3vh;
    position: relative;
    font-size: 0.8vw;
    margin: 0;

  }

  /*选择框后面的箭头*/
  /deep/ .el-select .el-input .el-select__caret {
    font-size: 0.8vw;
    color: #00E4FF;
  }

  /deep/ .el-select .el-input.is-focus .el-input__inner {
    border: 0px;
  }


  /*下拉框背景色设置+下拉框文本内容居中*/
  /deep/ .el-select-dropdown {
    background-color: rgba(8, 22, 77, 0.6);
    margin: 0px;
    border: 0px;
    border-radius: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
  }


  /deep/ .el-select-dropdown .el-select-dropdown__item {
    background-color: rgba(8, 22, 77, 0.6);
    color: rgba(240, 255, 240, 0.8);
    font-size: 0.8vw;
  }

  /deep/ .el-select-dropdown__item.hover,
  /deep/ .el-select-dropdown__item:hover {
    color: #409eff;
    background-color: rgba(8, 22, 77, 0.9);
  }

  .dateselect /deep/ .el-input__inner {
    background-color: rgba(64, 158, 255, 0);
    color: honeydew;
    border: 0px;
    border-radius: 0px;
    text-align: center;
    font-size: 0.85vw;
  }

  /* 设置时间选择器的输入框字体颜色 */
  .dateselect /deep/ .el-input__inner {
    color: #24d8ff !important; /* 设置字体颜色 */

  }

  /* 设置时间选择器输入框的提示文字颜色 */
  .dateselect /deep/ .el-input__inner::placeholder {
    color: #24d8ff; /* 设置提示文字颜色 */
  }

  .objectselect /deep/ .el-input__inner {
    background-color: rgba(64, 158, 255, 0);
    /*color:#00E4FF;*/
    border: 0px;
    border-radius: 0px;
    text-align: center;
    font-size: 0.85vw;
  }

  .select_dianPart /deep/ .el-input__inner {
    background-color: rgba(64, 158, 255, 0);
  }


  /*设置时间选择器的图标颜色*/
  .dateselect /deep/ .el-input__icon {
    color: #24d8ff;
    font-size: 1vw;
  }


  /*滚动条*/
  ::-webkit-scrollbar {
    width: 8px; /* 垂直滚动条的宽度 */
    height: 8px; /* 水平滚动条的高度 */
  }

  /* 滚动条轨道 */
  ::-webkit-scrollbar-track {
    box-shadow: 0px 1px 3px #071e4a inset; /*滚动条的背景区域的内阴影*/
    background: transparent; /* 轨道的背景颜色 */
    border-radius: 10px; /* 轨道的圆角 */
  }

  /* 滚动条滑块 */
  ::-webkit-scrollbar-thumb {
    box-shadow: 0px 1px 3px #00a0e9 inset; /*滚动条的内阴影*/
    border-radius: 10px; /*滚动条的圆角*/
    background-color: rgba(0, 228, 255, 0.9); /*滚动条的背景颜色*/
  }

  /*确认键容器*/
  .confirm-text-right {
    text-align: right;
    margin-top: 3vh;
    margin-right: 20%;
  }

  /*按钮样式：确认、告警、告警删除*/
  .el-button {
    padding-right: 1vw;
    padding-left: 1vw;
    padding-top: 1vh;
    padding-bottom: 1vh;
    background-color: rgba(255, 255, 0, 0);
    border-color: #00afed;
    color: honeydew;
    line-height: 1vh;
    font-size: 0.8vw;
    text-align: center;
  }

  .AClogo {
    height: 6vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2.5vw;
    color: #75d5ff
  }

  .ACSet-num {
    height: 3vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2vw;
    font-weight: bolder;
  }

  .ACSet-text {
    height: 4vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.95vw;
    color: #75d5ff
  }

  .text-info {
    font-size: 12px;
  / / color: #349af5;
    color: honeydew;
    line-height: 24px;
    text-align: left;
    height: 24px;
    background: rgba(247, 247, 247, 0);
  }

  .button_contain {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2vh;

  }

  /*知识图谱说明卡片*/
  .box-card-zhishi /deep/ .el-card__header {
    background-size: cover;
    background-size: 30% 100%; /* 将背景图片宽度设置为卡片头部宽度的五分之一，高度自适应 */
    background-position: 0 0; /* 将背景图片左侧对齐 */
  }

  .zhishi_info {
    margin-top: 2vh;
    margin-left: 1.5vw;
    margin-right: 1.5vw;
    line-height: 4vh;
    font-size: 1.2vw;
    display: flex;
    justify-content: space-between;
  }

  .zhishi_info1 {
    line-height: 3vh;
    font-size: 0.9vw;
    display: flex;
    justify-content: space-between;
  }

  .Picture_contain {
    background-image: url("../../assets/anqiju/asideBg.png");
    background-size: 100% 100%;
    /*background-size: cover;*/
    background-position: center;
    /*background-position: center top;*/
    /*background-position: center 0.4vh;*/
    background-repeat: no-repeat;
    width: 32vw;
    height: 63vh;

  }

  /*切换按钮的样式*/
  .top-button {
    background-image: url("../../assets/premain/btn.png");
    background-size: 100% 100%; /* 背景图片大小适应按钮大小 */
    background-repeat: no-repeat; /* 禁止背景图片重复 */
    color: honeydew; /* 按钮文字颜色 */
    border: none; /* 移除按钮边框 */
    width: 10vw;
    height: 5vh;
    font-size: 1vw;
    margin: 0 1vw;
  }

  .top-button2 {
    background-image: url("../../assets/premain/btn2.png");
    background-size: 100% 100%; /* 背景图片大小适应按钮大小 */
    background-repeat: no-repeat; /* 禁止背景图片重复 */
    color: honeydew; /* 按钮文字颜色 */
    border: none; /* 移除按钮边框 */
    width: 5vw;
    height: 4vh;
    font-size: 0.8vw;
    align-items: center;
    margin-left: 65vw;
  }

  /*表格基础样式*/
  /deep/ .el-table {
    border: 0px;
  }

  /*悬浮框不显示*/
  /deep/ .el-table--enable-row-hover .el-table__body tr:hover > td {
    background-color: rgba(0, 0, 0, 0) !important;
  }

  /deep/ .el-table--border::after,
  /deep/ .el-table--group::after,
  /deep/ .el-table::before {
    content: '';
    position: absolute;
    background-color: rgba(255, 255, 255, 0);
    z-index: 1;
  }

  /*表头单元格元素*/
  /deep/ .el-table th {
    /*background: rgba(6, 53, 112, 0.5);*/
    background: rgba(6, 53, 112, 0);
    color: #00E4FF;

    font-weight: normal;
  }


  /*表格行元素*/
  /deep/ .el-table tr {
    /*background: rgba(6, 53, 112, 0.2);*/
    background: rgba(6, 53, 112, 0);
    /*color: #93dcfe;*/
    color: honeydew;

  }

  /deep/ .el-table td, .building-top .el-table th.is-leaf {
    /*border-bottom:  1px solid #349af5;*/
    border-bottom: 1px solid rgba(240, 255, 240, 0.3);
  }

  /deep/ .el-table__body-wrapper::-webkit-scrollbar {
    width: 10px; /*滚动条宽度*/
    height: 10px; /*滚动条高度*/
  }

  /*定义滚动条轨道 内阴影+圆角*/
  /deep/ .el-table__body-wrapper::-webkit-scrollbar-track {
    box-shadow: 0px 1px 3px #071e4a inset; /*滚动条的背景区域的内阴影*/
    border-radius: 10px; /*滚动条的背景区域的圆角*/
    /*background-color: #071e4a; !*滚动条的背景颜色*!*/
    background-color: transparent; /*滚动条的背景颜色*/
  }

  /*定义滑块 内阴影+圆角*/
  /deep/ .el-table__body-wrapper::-webkit-scrollbar-thumb {
    box-shadow: 0px 1px 3px #00a0e9 inset; /*滚动条的内阴影*/
    border-radius: 10px; /*滚动条的圆角*/
    background-color: rgba(0, 228, 255, 0.9); /*滚动条的背景颜色*/
  }


  .bg-clear {
    background-color: rgba(2, 2, 2, 0);
    padding: 10px;
    margin: 5px;
    border-radius: 20px;
  }


  /* 精简文字版样式 */
  .text-item {
    display: flex;
    align-items: baseline;
    font-size: 1vw;
  }

  .label {
    font-weight: 600;
    min-width: 60px;
  }

  .value {
    font-weight: 700;
    font-size: 1vw;
    margin: 0 4px;
  }

  .unit {
    font-size: 1.2rem;
    color: #999;
  }

</style>
