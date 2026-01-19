<!--html 画框-->
<template>
  <div class="anqiju" :height="fullHeight" :width="fullWidth">

      <el-header :style="{ height: 'calc(8vh) !important'}"> <!-- 增加header高度以适应logo -->
        <el-row class="header-row">
          <el-col :span="8">
            <div class="logo-contain">
<!--              <img src="../../assets/anqiju/anqiju_logo.png" class="anqijulogo">-->
            </div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content-title">阳极炭块喷涂监控平台</div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content-time">{{ nowTime }}</div>
          </el-col>
          <el-col :span="2">
            <div class="grid-content-user">
              <i class="el-icon-s-custom user-icon" @click="openConfigDialog"></i>
              <i class="el-icon-document report-icon" @click="openHistoryDialog"></i>
            </div>
          </el-col>
        </el-row>
      </el-header>



      <el-main :style="{ width:'100vw',height: '100%'}">
        <!--综合视图界面-->
        <div v-show="activeIndex === '1'" :style="{height: '100%'}">
          <el-row>
            <!--左-->
            <el-col :span="8">

                  <!-- 炭块喷涂完成情况-->
<!--              <el-card class="box-card-combined" style="height: 24vh" >-->
<!--                <div slot="header" class="clearfix"><span>炭块喷涂情况</span></div>-->

<!--                &lt;!&ndash; 第一行：共计已完成和当前工作效率 &ndash;&gt;-->
<!--                <el-row style="margin-top: 2vh; margin-bottom: 2vh" :gutter="10">-->
<!--                  <el-col :span="12">-->
<!--                    <div class="text-item">-->
<!--                      <span class="label" style="color:#75d5ff">共计已完成：</span>-->
<!--                      &lt;!&ndash; 后端接口数据位置：{{ sprayData.totalCompleted }} &ndash;&gt;-->
<!--                      <span class="value">63254</span>-->
<!--                      <span class="unit" style="color:#75d5ff">块</span>-->
<!--                    </div>-->
<!--                  </el-col>-->
<!--                  <el-col :span="12">-->
<!--                    <div class="text-item">-->
<!--                      <span class="label" style="color:#75d5ff">当前工作效率：</span>-->
<!--                      &lt;!&ndash; 后端接口数据位置：{{ sprayData.currentEfficiency }} &ndash;&gt;-->
<!--                      <span class="value">60</span>-->
<!--                      <span class="unit" style="color:#75d5ff">块/小时</span>-->
<!--                    </div>-->
<!--                  </el-col>-->
<!--                </el-row>-->


<!--                &lt;!&ndash; 第二行：缺陷炭块数量和喷涂质量不达标数量 &ndash;&gt;-->
<!--                <el-row :gutter="10" style="margin-top: 2vh">-->
<!--                  <el-col :span="12">-->
<!--                    <div class="text-item">-->
<!--                      <span class="label" style="color:#75d5ff">缺陷炭块数量：</span>-->
<!--                      &lt;!&ndash; 后端接口数据位置：{{ sprayData.defectCount }} &ndash;&gt;-->
<!--                      <span class="value">2</span>-->
<!--                      <span class="unit" style="color:#75d5ff">块</span>-->
<!--                    </div>-->
<!--                  </el-col>-->
<!--                  <el-col :span="12">-->
<!--                    <div class="text-item">-->
<!--                      <span class="label" style="color:#75d5ff">喷涂质量不达标数量：</span>-->
<!--                      &lt;!&ndash; 后端接口数据位置：{{ sprayData.nonStandardCount }} &ndash;&gt;-->
<!--                      <span class="value">0</span>-->
<!--                      <span class="unit" style="color:#75d5ff">块</span>-->
<!--                    </div>-->
<!--                  </el-col>-->
<!--                </el-row>-->

<!--                &lt;!&ndash; 第三行：本班次目标数量和本班次已完成数量 &ndash;&gt;-->
<!--                <el-row :gutter="10" style="margin-top: 2vh">-->
<!--                  <el-col :span="12">-->
<!--                    <div class="text-item">-->
<!--                      <span class="label" style="color:#75d5ff">本班次目标数量：</span>-->
<!--                      &lt;!&ndash; 后端接口数据位置：{{ sprayData.shiftTarget }} &ndash;&gt;-->
<!--                      <span class="value">300</span>-->
<!--                      <span class="unit" style="color:#75d5ff">块</span>-->
<!--                    </div>-->
<!--                  </el-col>-->
<!--                  <el-col :span="12">-->
<!--                    <div class="text-item">-->
<!--                      <span class="label" style="color:#75d5ff">本班次已完成数量：</span>-->
<!--                      &lt;!&ndash; 后端接口数据位置：{{ sprayData.shiftCompleted }} &ndash;&gt;-->
<!--                      <span class="value">244</span>-->
<!--                      <span class="unit" style="color:#75d5ff">块/班</span>-->
<!--                    </div>-->
<!--                  </el-col>-->
<!--                </el-row>-->
<!--              </el-card>-->
              <el-card class="box-card-combined" style="height: 26vh">
                <div slot="header" class="clearfix output-header">
                  <span>炭块喷涂情况</span>
                  <el-select v-model="outputChartMode"
                             size="mini"
                             class="output-mode-select"
                             :popper-append-to-body="false"
                             @change="handleOutputModeChange">
                    <el-option label="日产量" value="daily" />
                    <el-option label="周产量" value="weekly" />
                  </el-select>
                </div>
                <el-row :gutter="10" style="height: 100%">
                  <!-- 产量柱状图 -->
                  <el-col :span="16" style="text-align: center;">
                    <div style="height: 24vh; margin-top: 10px;">
                      <div ref="outputCombinedChart" style="width: 100%; height: 100%;"></div>
                    </div>
                  </el-col>

<!--                  <el-col :span="8" style="text-align: center; display: flex; flex-direction: column; justify-content: center;">-->
<!--                    &lt;!&ndash; 增加标题与进度条之间的间距 &ndash;&gt;-->
<!--                    <div style="color: #75d5ff; margin-bottom: 20px; font-size: 16px; font-weight: bold;">本班次进度</div>-->

<!--                    <el-progress-->
<!--                      type="circle"-->
<!--                      :percentage="81"-->
<!--                      :stroke-width="8"-->
<!--                      color="#75d5ff"-->
<!--                      :width="80">  &lt;!&ndash; 增加进度条尺寸 &ndash;&gt;-->
<!--                      &lt;!&ndash; 自定义显示内容，放大数字 &ndash;&gt;-->
<!--                      <template #default="{ percentage }">-->
<!--                        <div style="text-align: center;">-->
<!--                          <span style="font-size: 24px; font-weight: bold; color: white; display: block;">-->
<!--                            {{ percentage }}%-->
<!--                          </span>-->
<!--                        </div>-->
<!--                      </template>-->
<!--                    </el-progress>-->

                  <!-- 效率和质量 -->
                  <el-col :span="8">
                    <div style="margin-bottom: 24px;">
                      <div style="color: #75d5ff; margin-top: 15px; font-size: 18px;">工作效率</div>
                      <div style="margin-bottom: 12px"> </div>
                      <!-- <el-progress :percentage="hourlyOutputPercent" color="#75d5ff" :show-text="false"> </el-progress> -->
                      <div style="margin-bottom: 12px"> </div>
                      <span style="color: white; font-size: 18px;">50块/小时</span>
                    </div>
                    <div>
                      <div style="color: #75d5ff; font-size: 18px;">喷涂质量检测结果</div>
                      <div style="margin-top: 12px;">
                        <span
                          class="status-tag"
                          :class="qualityResultStatus"
                          style="padding: 2px 12px; border-radius: 12px; font-size: 18px;">
                          {{ qualityResultText }}
                        </span>
                      </div>
                    </div>
                  </el-col>
                </el-row>
              </el-card>


              <!--  炭块锁定系统-->
<!--              <el-card class="box-card-air" style="height: 30vh;width: 100%">-->
<!--                <div slot="header" class="clearfix" ><span>炭块锁定系统</span></div>-->
<!--                <el-row :gutter="10" style="margin-top: 2vh">-->
<!--                  <el-col :span="12">-->
<!--                    <div class="text-item">-->
<!--                      <span class="label" style="color:#75d5ff">停止器工作状态：</span>-->
<!--                      &lt;!&ndash; 后端接口数据位置：{{ sprayData.shiftTarget }} &ndash;&gt;-->
<!--                      <span class="value">工作中</span>-->
<!--&lt;!&ndash;                      <span class="unit" style="color:#75d5ff">块</span>&ndash;&gt;-->
<!--                    </div>-->
<!--                  </el-col>-->
<!--                  <el-col :span="12">-->
<!--                    <div class="text-item">-->
<!--                      <span class="label" style="color:#75d5ff">夹杆工作状态：</span>-->
<!--                      &lt;!&ndash; 后端接口数据位置：{{ sprayData.shiftCompleted }} &ndash;&gt;-->
<!--                      <span class="value">故障</span>-->
<!--&lt;!&ndash;                      <span class="unit" style="color:#75d5ff">块/班</span>&ndash;&gt;-->
<!--                    </div>-->
<!--                  </el-col>-->
<!--                </el-row>-->
<!--              </el-card>-->
              <el-card class="box-card-air" style="height: 26vh;width: 100%">
                <div slot="header" class="clearfix"><span>炭块锁定系统</span></div>
                <el-row :gutter="20" style="text-align: center; margin-top: 20px; margin-left: 1.5px;">
                  <el-col :span="6">
                    <div class="status-indicator">
                      <div class="indicator-icon" :class="lockStatuses.stopper1">
                        <i class="el-icon-lock"></i>
                      </div>
                      <div style="color: #75d5ff; margin-top: 10px; font-size: 20px; margin-left: 1.5px;">停止器1</div>
                      <div style="margin-bottom: 8px" />
                      <div style="color: white; font-size: 18px;">{{ lockStatusText('stopper1') }}</div>
                    </div>
                  </el-col>

                  <el-col :span="6">
                    <div class="status-indicator">
                      <div class="indicator-icon" :class="lockStatuses.stopper2">
                        <i class="el-icon-lock"></i>
                      </div>
                      <div style="color: #75d5ff; margin-top: 10px; font-size: 20px;margin-left: 1.5px;">停止器2</div>
                      <div style="margin-bottom: 8px" />
                      <div style="color: white; font-size: 18px;">{{ lockStatusText('stopper2') }}</div>
                    </div>
                  </el-col>

                  <el-col :span="6">
                    <div class="status-indicator">
                      <div class="indicator-icon" :class="lockStatuses.lock1">
                        <i class="el-icon-c-scale-to-original"></i>
                      </div>
                      <div style="color: #75d5ff; margin-top: 10px; font-size: 20px;">锁定机构1</div>
                      <div style="margin-bottom: 8px" />
                      <div style="color: white; font-size: 18px;">{{ lockStatusText('lock1') }}</div>
                    </div>
                  </el-col>

                  <el-col :span="6">
                    <div class="status-indicator">
                      <div class="indicator-icon" :class="lockStatuses.lock2">
                        <i class="el-icon-c-scale-to-original"></i>
                      </div>
                      <div style="color: #75d5ff; margin-top: 10px; font-size: 20px;">锁定机构2</div>
                      <div style="margin-bottom: 8px" />
                      <div :style="{ color: lockStatuses.lock2 === 'normal' ? 'white' : '#F56C6C', fontSize: '18px' }">
                        {{ lockStatusText('lock2') }}
                      </div>
                    </div>
                  </el-col>
                </el-row>
              </el-card>

              <!-- 喷涂房系统卡片-->
<!--              <el-card class="box-card-paintroom" style="height: 24vh">-->
<!--                <div slot="header" class="clearfix">-->
<!--                  <span>喷涂房系统</span>-->
<!--                </div>-->
<!--                <el-row style="margin-top: 2vh; margin-bottom: 2vh" :gutter="10">-->
<!--                  <el-col :span="8">-->
<!--                    <div class="text-item">-->
<!--                      <span class="label" style="color:#75d5ff">供排风系统：</span>-->
<!--                      &lt;!&ndash; 后端接口数据位置：{{ sprayData.totalCompleted }} &ndash;&gt;-->
<!--                      <span class="value">正常</span>-->
<!--                    </div>-->
<!--                  </el-col>-->
<!--                  <el-col :span="8">-->
<!--                    <div class="text-item">-->
<!--                      <span class="label" style="color:#75d5ff">过滤器系统：</span>-->
<!--                      &lt;!&ndash; 后端接口数据位置：{{ sprayData.currentEfficiency }} &ndash;&gt;-->
<!--                      <span class="value">正常</span>-->
<!--                    </div>-->
<!--                  </el-col>-->
<!--                  <el-col :span="8">-->
<!--                    <div class="text-item">-->
<!--                      <span class="label" style="color:#75d5ff">自动门系统：</span>-->
<!--                      &lt;!&ndash; 后端接口数据位置：{{ sprayData.currentEfficiency }} &ndash;&gt;-->
<!--                      <span class="value">正常</span>-->
<!--                    </div>-->
<!--                  </el-col>-->
<!--                </el-row>-->


<!--                <el-row style="margin-top: 2vh; margin-bottom: 2vh" :gutter="10">-->
<!--                  <el-col :span="8">-->
<!--                    <div class="text-item">-->
<!--                      <span class="label" style="color:#75d5ff">进料门：</span>-->
<!--                      &lt;!&ndash; 后端接口数据位置：{{ sprayData.totalCompleted }} &ndash;&gt;-->
<!--                      <span class="value">关闭</span>-->
<!--                    </div>-->
<!--                  </el-col>-->
<!--                  <el-col :span="8">-->
<!--                    <div class="text-item">-->
<!--                      <span class="label" style="color:#75d5ff">出料门：</span>-->
<!--                      &lt;!&ndash; 后端接口数据位置：{{ sprayData.currentEfficiency }} &ndash;&gt;-->
<!--                      <span class="value">关闭</span>-->
<!--                    </div>-->
<!--                  </el-col>-->
<!--                  <el-col :span="8">-->
<!--                    <div class="text-item">-->
<!--                      <span class="label" style="color:#75d5ff">是否有人员进入：</span>-->
<!--                      &lt;!&ndash; 后端接口数据位置：{{ sprayData.currentEfficiency }} &ndash;&gt;-->
<!--                      <span class="value">无</span>-->
<!--                    </div>-->
<!--                  </el-col>-->
<!--                </el-row>-->
<!--                <el-row :gutter="2" style="margin-top:2vh;"></el-row>-->
<!--              </el-card>-->
              <el-card class="box-card-paintroom" style="height: 24vh">
                <div slot="header" class="clearfix"><span>喷涂房系统</span></div>
                <el-row :gutter="10" style="height: 100%; margin-top: 20px;">
                  <el-col :span="6" v-for="system in roomSystems" :key="system.name" style="text-align: center;">
                    <div class="system-status">
                      <div class="system-icon" :class="system.status">
                        <i :class="system.icon"></i>
                      </div>
                      <div style="color: #75d5ff; font-size: 20px; margin-top: 5px;">{{system.name}}</div>
                      <div style="color: white; font-size: 18px;">{{system.value}}</div>
                    </div>
                  </el-col>
                </el-row>
              </el-card>
            </el-col>
            <!--房间图片-->

            <el-col :span="10">
              <el-card class="box-card-room" style="height: 30vh;margin-top: 1vh;margin-left:1.5vw;width: 100%">
                <!--喷涂压力状态-->
                <div slot="header" class="clearfix"><span>喷涂压力状态</span></div>
                <el-row :gutter="20" style="text-align: center; margin-top: 20px;">
                  <el-col :span="6">
                    <div class="status-indicator">
                      <div class="indicator-icon" :class="sprayPressureStatuses.spray1">
                        <i class="el-icon-brush"></i>
                      </div>
                      <div style="color: #75d5ff; margin-top: 10px; font-size: 20px;">喷涂机1</div>
                      <div style="margin-bottom: 8px"/>
                      <div style="color: white; font-size: 18px;">{{ sprayPressureTexts.spray1 }}</div>
                    </div>
                  </el-col>

                  <el-col :span="6">
                    <div class="status-indicator">
                      <div class="indicator-icon" :class="sprayPressureStatuses.spray2">
                        <i class="el-icon-brush"></i>
                      </div>
                      <div style="color: #75d5ff; margin-top: 10px; font-size: 20px;">喷涂机2</div>
                      <div style="margin-bottom: 8px"/>
                      <div style="color: white; font-size: 18px;">{{ sprayPressureTexts.spray2 }}</div>
                    </div>
                  </el-col>

                  <el-col :span="6">
                    <div class="status-indicator">
                      <div class="indicator-icon" :class="sprayPressureStatuses.pipe1">
                        <i class="el-icon-odometer"></i>
                      </div>
                      <div style="color: #75d5ff; margin-top: 10px; font-size: 20px;">喷涂管路1</div>
                      <div style="margin-bottom: 8px"/>
                      <div style="color: white; font-size: 18px;">{{ sprayPressureTexts.pipe1 }}</div>
                    </div>
                  </el-col>

                  <el-col :span="6">
                    <div class="status-indicator">
                      <div class="indicator-icon" :class="sprayPressureStatuses.pipe2">
                        <i class="el-icon-odometer"></i>
                      </div>
                      <div style="color: #75d5ff; margin-top: 10px; font-size: 20px;">喷涂管路2</div>
                      <div style="margin-bottom: 8px"/>
                      <div style="color: white; font-size: 18px;">{{ sprayPressureTexts.pipe2 }}</div>
                    </div>
                  </el-col>


                </el-row>


                <el-row :gutter="2" style="margin-top:2vh;"></el-row>

              </el-card>

              <div class="room-picture"
                   style="margin-left:-1.5vw;margin-top: -6vh;margin-right:-0vw;height: 50vh"></div>

            </el-col>


            <!--右-->
            <el-col :span="6">
            <!-- 上料系统-->
<!--              <el-card class="box-card-combined" style="height: 30vh;width: 100%">-->
<!--                <div slot="header" class="clearfix" ><span>上料系统</span></div>-->
<!--                <el-row :gutter="10" style="margin-top: 2vh; margin-left: 4vh">-->

<!--                </el-row>-->
<!--                <el-row :gutter="2" style="margin-top: 1vh;margin-left: 0.5vw;margin-right: 0.5vw">-->
<!--                <el-col :span="8">-->
<!--                    <div class="text-item">-->
<!--                      <span class="air-text" style="color:#75d5ff">设备名称：</span>-->
<!--                    </div>-->
<!--                  </el-col>-->
<!--                  <el-col :span="8">-->
<!--                    <div class="image-contain">-->
<!--                      <img src="../../assets/anqiju/vent.png" class="kongtiao-image">-->
<!--                    </div>-->
<!--                    <div class="air-name">原料罐</div>-->
<!--                  </el-col>-->
<!--                  <el-col :span="8">-->
<!--                    <div class="image-contain">-->
<!--                      <img src="../../assets/anqiju/vent.png" class="kongtiao-image">-->
<!--                    </div>-->
<!--                    <div class="air-name">储料罐</div>-->
<!--                  </el-col>-->
<!--                </el-row>-->

<!--                <el-row :gutter="2" style="margin-top: 1vh;margin-left: 0.5vw;margin-right: 0.5vw">-->

<!--                  <el-col :span="8">-->
<!--                    <div class="text-item">-->
<!--                      <span class="air-text" style="color:#75d5ff">料罐液位：</span>-->
<!--                    </div>-->
<!--                  </el-col>-->

<!--                  <el-col :span="8">-->
<!--                    <div class="air-num">49</div>-->
<!--                  </el-col>-->

<!--                  <el-col :span="8">-->
<!--                    <div class="air-num">50</div>-->
<!--                  </el-col>-->

<!--                  <el-col :span="8">-->
<!--                    <div class="text-item">-->
<!--                      <span class="air-text" style="color:#75d5ff">运行状态：</span>-->
<!--                    </div>-->
<!--                  </el-col>-->

<!--                  <el-col :span="8">-->
<!--                    <div class="air-num">正常</div>-->
<!--                  </el-col>-->

<!--                  <el-col :span="8">-->
<!--                    <div class="air-num">正常</div>-->
<!--                  </el-col>-->
<!--                </el-row>-->
<!--              </el-card>-->
              <el-card class="box-card-combined" style="height: 28vh;width: 100%">
                <div slot="header" class="clearfix"><span>上料系统</span></div>
                <el-row :gutter="10" style="margin-top: 1vh; margin-left:1.5vw; margin-right:1.5vw;">
                  <el-col :span="24" v-for="tank in materialTanks" :key="tank.name" style="margin-bottom: 6px;">
                    <div class="tank-container-new">
                      <div class="tank-header">
                        <div class="tank-name">{{ tank.name }}</div>
                        <div class="tank-status-tag" :class="tank.status">
                          {{ tank.statusText }}
                        </div>
                      </div>
                      <div class="tank-main">
                        <div class="tank-value">
                          <div class="tank-value-number">{{ tank.level }}</div>
                        </div>
                        <div class="tank-bar-wrapper">
                          <div class="tank-bar-bg">
                            <div class="tank-bar-fill" :style="{ width: tank.levelPercent + '%' }"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </el-col>
                </el-row>
              </el-card>



                <!--喷涂系统-->
              <el-card class="box-card-combined" style="height: 20vh;width: 100%">
                <div slot="header" class="clearfix">
                  <span>喷涂系统</span>
                </div>
                <el-row :gutter="2" style="margin-top: 0.5vh; margin-bottom: 2vh; margin-left: 1.5vw; margin-right: 0.5vw">
                  <el-col :span="12">
                    <div style="color: #75d5ff; font-size: 20px;">机器人1</div>
                    <div style="margin-bottom: 4px"></div>
                    <div style="color: white; font-size: 18px;">{{ robotStatusTexts.robot1 }}</div>
                    <div style="margin-top: 12px; color: #75d5ff; font-size: 20px;">机器人2</div>
                    <div style="margin-bottom: 4px"></div>
                    <div style="color: white; font-size: 18px;">{{ robotStatusTexts.robot2 }}</div>
                  </el-col>
                  <el-col :span="12">
                    <div style="color: #75d5ff; font-size: 20px;">喷枪1</div>
                    <div style="margin-bottom: 4px"></div>
                    <div style="color: white; font-size: 18px;">{{ gunStatusTexts.gun1 }}</div>
                    <div style="margin-top: 12px; color: #75d5ff; font-size: 20px;">喷枪2</div>
                    <div style="margin-bottom: 4px"></div>
                    <div style="color: white; font-size: 18px;">{{ gunStatusTexts.gun2 }}</div>
                  </el-col>
                </el-row>
              </el-card>
              <el-card class="box-card-combined" style="height: 32vh;width: 100%">
                <div slot="header" class="clearfix">
                  <span>喷枪实时压力</span></div>
                <div style="height: 30vh; margin-left: 0.5vw; margin-right: 0.5vw;">
                  <div ref="gunPressureChart" style="width: 100%; height: 100%;"></div>
                </div>
              </el-card>




            </el-col>
          </el-row>
        </div>

        <el-dialog
          title="参数配置权限验证"
          :visible.sync="configAuthDialogVisible"
          width="30vw"
          append-to-body>
          <el-form :model="configAuthForm" label-width="6vw">
            <el-form-item label="用户名">
              <el-input
                v-model="configAuthForm.username"
                autocomplete="off">
              </el-input>
            </el-form-item>
            <el-form-item label="密码">
              <el-input
                v-model="configAuthForm.password"
                type="password"
                show-password
                autocomplete="off">
              </el-input>
            </el-form-item>
          </el-form>
          <span slot="footer" class="dialog-footer">
            <el-button @click="configAuthDialogVisible = false">取消</el-button>
            <el-button type="primary" :loading="configAuthLoading" @click="submitConfigAuth">确认</el-button>
          </span>
        </el-dialog>

        <el-dialog
          title="设备参数配置"
          :visible.sync="configDialogVisible"
          width="40vw"
          append-to-body>
          <el-form :model="configForm" label-width="14vw" class="config-form">
            <el-form-item label="涂料泵及管路一键清洗模式">
              <el-select v-model="configForm.mode01" placeholder="请选择">
                <el-option label="0-关" :value="0"></el-option>
                <el-option label="1-开" :value="1"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="枪头清洗控制">
              <el-select v-model="configForm.mode02" placeholder="请选择">
                <el-option label="0-关" :value="0"></el-option>
                <el-option label="1-开" :value="1"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="搅拌器1控制">
              <el-select v-model="configForm.mode03" placeholder="请选择">
                <el-option label="0-关" :value="0"></el-option>
                <el-option label="1-开" :value="1"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="搅拌器2控制">
              <el-select v-model="configForm.mode04" placeholder="请选择">
                <el-option label="0-关" :value="0"></el-option>
                <el-option label="1-开" :value="1"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="供料桶切换">
              <el-select v-model="configForm.mode05" placeholder="请选择">
                <el-option label="0-桶1" :value="0"></el-option>
                <el-option label="1-桶2" :value="1"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="现场运行控制">
              <el-select v-model="configForm.mode06" placeholder="请选择">
                <el-option label="1-启动" :value="1"></el-option>
                <el-option label="2-暂停" :value="2"></el-option>
                <el-option label="3-急停" :value="3"></el-option>
<!--                <el-option label="4-离开" :value="4"></el-option>-->
              </el-select>
            </el-form-item>
            <el-form-item label="枪头清洗模式">
              <el-select v-model="configForm.mode08" placeholder="请选择">
                <el-option label="0-手动" :value="0"></el-option>
                <el-option label="2-定时" :value="2"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="机器人喷涂速度">
              <el-input-number
                v-model="configForm.speed07"
                :min="0"
                :max="100"
                :step="0.01"
                :precision="2"
                style="width: 12vw"
              ></el-input-number>
            </el-form-item>
            <el-form-item label="定时清洗间隔">
              <el-input-number
                v-model="configForm.time09"
                :min="0"
                :step="0.01"
                :precision="2"
                style="width: 12vw"
              ></el-input-number>
            </el-form-item>
            <el-form-item label="喷涂管路1压力报警阈值">
              <el-input-number
                v-model="configForm.pressure10"
                :min="0"
                :step="0.01"
                :precision="2"
                style="width: 12vw"
              ></el-input-number>
            </el-form-item>
            <el-form-item label="喷涂管路2压力报警阈值">
              <el-input-number
                v-model="configForm.pressure11"
                :min="0"
                :step="0.01"
                :precision="2"
                style="width: 12vw"
              ></el-input-number>
            </el-form-item>
            <el-form-item label="搅拌器1转速">
              <el-input-number
                v-model="configForm.freq12"
                :min="0"
                :step="0.01"
                :precision="2"
                style="width: 12vw"
              ></el-input-number>
            </el-form-item>
            <el-form-item label="搅拌器2转速">
              <el-input-number
                v-model="configForm.freq13"
                :min="0"
                :step="0.01"
                :precision="2"
                style="width: 12vw"
              ></el-input-number>
            </el-form-item>
          </el-form>
          <span slot="footer" class="dialog-footer">
            <el-button @click="configDialogVisible = false">取消</el-button>
            <el-button type="primary" @click="submitConfig">发送</el-button>
          </span>
        </el-dialog>

        <el-dialog
          title="历史数据"
          :visible.sync="historyDialogVisible"
          width="90vw"
          top="5vh"
          append-to-body>
          <el-card class="box-card-history">
            <div slot="header" class="clearfix">
              <span>历史数据</span>
              <el-form
                class="excelform"
                :model="queryEnvironData"
                label-width="0px"
                style="display: flex; flex-wrap: wrap; align-items: center; margin-left: 30%; margin-top: 1vh">
                <el-form-item>
                  <el-cascader
                    class="objectselect"
                    v-model="queryEnvironData.item"
                    :options="optionsHistory"
                    style="margin-left: auto; width: 10vw"
                    placeholder="请选择数据项"
                    @change="searchEnviron">
                  </el-cascader>
                </el-form-item>
                <el-form-item>
                  <el-date-picker
                    class="dateselect"
                    v-model="queryEnvironData.dateRange[0]"
                    type="date"
                    style="margin-left: 2vw; width: 15vw"
                    :picker-options="pickerOptionsEnvironHistory"
                    placeholder="开始日期"
                    @change="searchEnviron">
                  </el-date-picker>
                  <el-date-picker
                    class="dateselect"
                    v-model="queryEnvironData.dateRange[1]"
                    type="date"
                    style="margin-left: 2vw; width: 15vw"
                    :picker-options="pickerOptionsEnvironHistory"
                    placeholder="结束日期"
                    @change="searchEnviron">
                  </el-date-picker>
                </el-form-item>
                <el-form-item>
                  <el-button
                    type="primary"
                    size="mini"
                    @click="exportHistoryToXlsx">
                    导出
                  </el-button>
                </el-form-item>
              </el-form>
            </div>
            <div style="height: 70vh; display: flex; flex-direction: column;">
              <el-table
                :data="showEnvironData"
                style="width: 100%; margin-top: 1.5vh"
                height="70vh"
                :header-cell-style="{ textAlign: 'center', fontSize: '0.85vw', lineHeight: '4vh', Height: '4vh' }"
                :cell-style="{ textAlign: 'center', fontSize: '0.85vw', lineHeight: '4vh', Height: '4vh' }">
                <template v-if="queryEnvironData.item[0] == '1'">
                  <el-table-column prop="time" label="时间" :formatter="formatTimeHistoryShow"></el-table-column>
                  <el-table-column prop="devName" label="房间" :formatter="formatRoomName"></el-table-column>
                  <el-table-column prop="temperature" label="温度(℃)" :formatter="formatTemperature"></el-table-column>
                  <el-table-column prop="humidity" label="湿度(%)" :formatter="formatHumidity"></el-table-column>
                  <el-table-column prop="co2" label="CO2(PPM)"></el-table-column>
                  <el-table-column prop="pm25" label="PM2.5(μg/m³)"></el-table-column>
                  <el-table-column prop="pm10" label="PM10(μg/m³)"></el-table-column>
                </template>
                <template v-else-if="queryEnvironData.item[0] == '0'">
                  <el-table-column prop="time" label="时间" :formatter="formatTimeHistoryShow"></el-table-column>
                  <el-table-column prop="allPower" label="总电量"></el-table-column>
                  <el-table-column prop="lightPower" label="照明" :formatter="formatNA"></el-table-column>
                  <el-table-column prop="airconditionPower" label="空调" :formatter="formatNA"></el-table-column>
                  <el-table-column prop="freshPower" label="新风" :formatter="formatNA"></el-table-column>
                </template>
                <template v-else-if="queryEnvironData.item[0] == '2'">
                  <el-table-column prop="time" label="时间" :formatter="formatTimeHistoryShow"></el-table-column>
                  <el-table-column prop="devName" label="房间" :formatter="formatACName"></el-table-column>
                  <el-table-column prop="status" label="状态" :formatter="formatStatus"></el-table-column>
                  <el-table-column prop="temperature" label="温度(℃)" :formatter="formatNA"></el-table-column>
                  <el-table-column prop="windSpeed" label="风速" :formatter="formatWindspeed"></el-table-column>
                  <el-table-column prop="mode" label="模式" :formatter="formatMode"></el-table-column>
                </template>
                <template v-else-if="queryEnvironData.item[0] == '3'">
                  <el-table-column prop="time" label="时间" :formatter="formatTimeHistoryShow"></el-table-column>
                  <el-table-column prop="devName" label="房间" :formatter="formatXFName"></el-table-column>
                  <el-table-column prop="status" label="状态" :formatter="formatStatus"></el-table-column>
                  <el-table-column prop="windSpeed" label="风速" :formatter="formatWindspeed"></el-table-column>
                </template>
              </el-table>
            </div>
            <div style="display: flex; justify-content: right; margin-top: 2vh;">
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
        </el-dialog>
      </el-main>
  </div>


</template>

<!--js 方法-->
<script>
  import * as echarts from 'echarts';
  import axios from "axios";
  import request from '../../utils/request';
  import XLSX from 'xlsx';
  import FileSaver from 'file-saver';

  export default {
    name: "dataView_anqiju",
    data() {
      return {
        roomSystems: [
          { name: '搅拌器1', value: '正常', status: 'normal', icon: 'el-icon-refresh' },
          { name: '搅拌器2', value: '正常', status: 'normal', icon: 'el-icon-refresh' },
          { name: '进料门', value: '开启', status: 'normal', icon: 'el-icon-download' },
          { name: '出料门', value: '关闭', status: 'normal', icon: 'el-icon-upload2' }
        ],
        configAuthDialogVisible: false,
        configAuthLoading: false,
        configAuthPassed: false,
        configAuthForm: {
          username: '',
          password: ''
        },
        configDialogVisible: false,
        configForm: {
          mode01: null,
          mode02: null,
          mode03: null,
          mode04: null,
          mode05: null,
          mode06: null,
          speed07: null,
          mode08: null,
          time09: null,
          pressure10: null,
          pressure11: null,
          freq12: null,
          freq13: null
        },
        originalConfigForm: null,
        materialTanks: [
          { name: '涂料桶1', level: 0, levelPercent: 0, status: 'normal', statusText: '正常'},
          { name: '涂料桶2', level: 0, levelPercent: 0, status: 'normal', statusText: '正常' }
        ],

        lockStatuses: {
          stopper1: 'normal',
          stopper2: 'normal',
          lock1: 'normal',
          lock2: 'normal'
        },
        lockStatusTimer: null,
        lockStatusTexts: {
          stopper1: '',
          stopper2: '',
          lock1: '',
          lock2: ''
        },

        sprayPressureStatuses: {
          spray1: 'normal',
          spray2: 'normal',
          pipe1: 'normal',
          pipe2: 'normal'
        },
        sprayPressureTexts: {
          spray1: '',
          spray2: '',
          pipe1: '',
          pipe2: ''
        },
        robotStatusTexts: {
          robot1: '',
          robot2: ''
        },
        gunStatusTexts: {
          gun1: '',
          gun2: ''
        },
        gunPressureTimes: [],
        gun1Pressure: [],
        gun2Pressure: [],
        outputChartMode: 'daily',
        hourlyOutputTimes: [],
        hourlyOutputValues: [],
        weeklyOutputTimes: [],
        weeklyOutputValues: [],
        weeklyOutputCurrent: 0,
        weeklyOutputTotal: 2240,
        weeklyOutputPercent: 0,
        hourlyOutputCurrent: 0,
        hourlyOutputTotal: 50,
        hourlyOutputPercent: 0,
        qualityResultPercentage: 0,
        qualityResultText: '',
        qualityResultColor: '#67C23A',
        qualityResultStatus: 'normal',
        configLoading: false,
        historyDialogVisible: false,

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
        alarmEventSource: null,
      }


    },
    mounted() {
      this.fetchDashboardOverview();
      this.fetchProductWeekHistory();
      this.fetchProductHourlyHistory();
      this.fetchQualityResult();
      this.initAlarmStream();

      // 开始拉取锁定系统、喷涂压力状态、涂料桶液位和搅拌器状态
      this.fetchLockSystemStatus();
      this.fetchSprayPressureStatus();
      this.fetchMaterialTanks();
      this.fetchMixerStatus();
      this.fetchRobotAndGunStatus();
      this.fetchGunPressureHistory();
      this.lockStatusTimer = setInterval(() => {
        this.fetchLockSystemStatus();
        this.fetchSprayPressureStatus();
        this.fetchMaterialTanks();
        this.fetchMixerStatus();
        this.fetchRobotAndGunStatus();
        this.fetchGunPressureHistory();
      }, 5000);





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
        this.getAirConditionStatus();
        this.fetchDashboardOverview();
        this.fetchProductWeekHistory();
        this.fetchProductHourlyHistory();
        this.fetchQualityResult();
      }, 15 * 60 * 1000); // 每15分钟刷新
    },

    beforeDestroy() {
      if (this.lockStatusTimer) {
        clearInterval(this.lockStatusTimer);
        this.lockStatusTimer = null;
      }
      if (this.alarmEventSource) {
        this.alarmEventSource.close();
        this.alarmEventSource = null;
      }
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
      initAlarmStream() {
        if (this.alarmEventSource) {
          this.alarmEventSource.close();
          this.alarmEventSource = null;
        }
        if (typeof window === 'undefined' || !('EventSource' in window)) {
          console.error('当前环境不支持SSE报警流');
          return;
        }
        const url = 'http://localhost:8080/getAlarmStream';
        const es = new EventSource(url);
        es.onmessage = (event) => {
          if (!event || !event.data) {
            return;
          }
          let payload = null;
          try {
            payload = JSON.parse(event.data);
          } catch (e) {
            console.error('解析报警数据失败', e, event.data);
            return;
          }
          this.handleAlarmMessage(payload);
        };
        es.onerror = (err) => {
          console.error('报警流连接出错', err);
          es.close();
          this.alarmEventSource = null;
          setTimeout(() => {
            this.initAlarmStream();
          }, 5000);
        };
        this.alarmEventSource = es;
      },

      handleAlarmMessage(payload) {
        if (!payload) {
          return;
        }
        const device = payload.device || payload.devName || payload.name || payload.deviceName || '未知设备';
        const index = payload.index;
        const unitId = payload.unitId;
        const hasDeviceName = !!(payload.device || payload.devName || payload.name || payload.deviceName);
        const hasIndexOrUnit = (index !== undefined && index !== null) || (unitId !== undefined && unitId !== null);
        if (!hasDeviceName && !hasIndexOrUnit) {
          console.log('收到非报警SSE消息，忽略', payload);
          return;
        }
        const timestampRaw = payload.timestamp;
        let timestampText = '';
        if (timestampRaw !== undefined && timestampRaw !== null) {
          const str = String(timestampRaw).trim();
          if (str) {
            const num = Number(str);
            if (!Number.isNaN(num) && str.length >= 11) {
              const d = new Date(num);
              if (!Number.isNaN(d.getTime())) {
                const y = d.getFullYear();
                const m = String(d.getMonth() + 1).padStart(2, '0');
                const day = String(d.getDate()).padStart(2, '0');
                const hh = String(d.getHours()).padStart(2, '0');
                const mm = String(d.getMinutes()).padStart(2, '0');
                const ss = String(d.getSeconds()).padStart(2, '0');
                timestampText = `${y}-${m}-${day} ${hh}:${mm}:${ss}`;
              } else {
                timestampText = str;
              }
            } else {
              timestampText = str;
            }
          }
        }
        const lines = [];
        lines.push(`设备：${device}`);
        if (index !== undefined && index !== null) {
          lines.push(`报警索引：${index}`);
        }
        if (unitId !== undefined && unitId !== null) {
          lines.push(`单元ID：${unitId}`);
        }
        if (timestampText) {
          lines.push(`时间：${timestampText}`);
        }
        const message = lines.join('<br/>');
        if (this.$notify) {
          this.$notify({
            title: '设备报警',
            message,
            type: 'error',
            dangerouslyUseHTMLString: true,
            duration: 0,
            position: 'top-right'
          });
        } else if (this.$message) {
          this.$message.error(lines.join('，'));
        } else {
          alert(lines.join('\n'));
        }
      },

      async openConfigDialog() {
        if (this.configAuthPassed) {
          await this.openConfigDialogInner();
          return;
        }
        this.configAuthForm.username = '';
        this.configAuthForm.password = '';
        this.configAuthDialogVisible = true;
      },

      async openConfigDialogInner() {
        this.configDialogVisible = true;
        await this.loadConfig();
      },

      async submitConfigAuth() {
        if (!this.configAuthForm.username || !this.configAuthForm.password) {
          this.$message.error('请输入用户名和密码');
          return;
        }
        this.configAuthLoading = true;
        try {
          const res = await axios.post('http://localhost:8080/checkConfigAuth', {
            username: this.configAuthForm.username,
            password: this.configAuthForm.password
          }, {
            headers: {
              'Content-Type': 'application/json; charset=UTF-8'
            },
            timeout: 10000
          });
          const body = res && res.data ? res.data : {};
          if (body.ok === false) {
            this.$message.error(body.msg || '权限验证失败');
            return;
          }
          this.configAuthPassed = true;
          this.configAuthDialogVisible = false;
          await this.openConfigDialogInner();
        } catch (e) {
          console.error('权限验证失败', e);
          this.$message.error('权限验证失败');
        } finally {
          this.configAuthLoading = false;
        }
      },

      async loadConfig() {
        this.configLoading = true;
        try {
          const res = await axios.get('http://localhost:8080/getConfigData', {
            headers: {
              'Content-Type': 'application/json; charset=UTF-8'
            },
            timeout: 10000
          });
          const body = res && res.data ? res.data : {};
          if (body.ok === false) {
            this.$message.error(body.msg || '加载配置失败');
            return;
          }
          const cfg = body.data || body;
          const keys = [
            'mode01',
            'mode02',
            'mode03',
            'mode04',
            'mode05',
            'mode06',
            'speed07',
            'mode08',
            'time09',
            'pressure10',
            'pressure11',
            'freq12',
            'freq13'
          ];
          const snap = {};
          keys.forEach(k => {
            if (Object.prototype.hasOwnProperty.call(cfg, k) && cfg[k] !== undefined && cfg[k] !== null) {
              this.configForm[k] = cfg[k];
              snap[k] = cfg[k];
            }
          });
          this.originalConfigForm = snap;
        } catch (e) {
          console.error('加载配置失败', e);
          this.$message.error('加载配置失败');
        } finally {
          this.configLoading = false;
        }
      },
      mapStatusClass(status) {
        // 将服务端状态统一映射为前端类：normal / error
        const okValues = ['OK', 'WORKING', 'NORMAL', 'RUNNING', 'ONLINE', 1, true, '正常', '工作中'];
        return okValues.includes(status) ? 'normal' : 'error';
      },

      lockStatusText(key) {
        return this.lockStatusTexts[key] || '';
      },

      mapLockStatus(type, code) {
        const c = String(code);
        if (type === 'stopper') {
          if (c === '0') return { text: '复位', cls: 'normal' };
          if (c === '1') return { text: '启动', cls: 'normal' };
          return { text: '异常', cls: 'error' };
        }
        const map = {
          '1': '已锁定',
          '2': '正在锁定',
          '3': '归位中',
          '4': '已归位'
        };
        if (map[c]) {
          return { text: map[c], cls: 'normal' };
        }
        return { text: '异常', cls: 'error' };
      },

      async fetchLockSystemStatus() {
        const names = ['停止器1', '停止器2', '锁定机构1', '锁定机构2'];
        const keys = ['stopper1', 'stopper2', 'lock1', 'lock2'];

        try {
          const params = new URLSearchParams();
          names.forEach(name => params.append('devNames', name));
          const res = await axios.get('http://localhost:8080/getBatchLatestStatus', {
            params,
            timeout: 5000
          });
          const list = (res && res.data) || [];
          const map = {};
          list.forEach(item => {
            if (item && item.devName) {
              map[item.devName] = item;
            }
          });

          names.forEach((name, idx) => {
            const item = map[name];
            if (!item) return;
            const key = keys[idx];
            const type = idx < 2 ? 'stopper' : 'lock';
            const mapped = this.mapLockStatus(type, item.status);
            this.$set(this.lockStatuses, key, mapped.cls);
            this.$set(this.lockStatusTexts, key, mapped.text);
          });
        } catch (e) {
          console.error('获取锁定系统状态失败', e);
        }
      },

      mapSprayPressureStatus(code) {
        const c = String(code);
        if (c === '1') {
          return { text: '正常', cls: 'normal' };
        }
        if (c === '2') {
          return { text: '异常', cls: 'warning' };
        }
        if (c === '3') {
          return { text: '报警', cls: 'error' };
        }
        return { text: '异常', cls: 'error' };
      },

      mapRobotStatus(code) {
        const c = String(code);
        if (c === '1') return '关闭';
        if (c === '2') return '启动';
        if (c === '3') return '暂停';
        if (c === '4') return '喷涂作业中';
        if (c === '5') return '清洗';
        return '';
      },

      mapGunStatus(code) {
        const c = String(code);
        if (c === '1') return '开';
        if (c === '0') return '关';
        return '';
      },

      mapQualityResult(code) {
        const c = String(code);
        if (c === '1') {
          return { text: '合格', percentage: 100, color: '#67C23A', status: 'normal' };
        }
        if (c === '0') {
          return { text: '不合格', percentage: 0, color: '#F56C6C', status: 'error' };
        }
        return { text: '未知', percentage: 0, color: '#E6A23C', status: 'warning' };
      },

      mapMixerStatus(code) {
        const c = String(code);
        if (c === '1') {
          return { text: '运行', status: 'normal' };
        }
        if (c === '0') {
          return { text: '停止', status: 'warning' };
        }
        return { text: '停止', status: 'warning' };
      },

      mapDoorStatus(code) {
        const c = String(code);
        if (c === '1') {
          return { text: '打开', status: 'normal' };
        }
        if (c === '2') {
          return { text: '关闭', status: 'normal' };
        }
        if (c === '3') {
          return { text: '开启中', status: 'warning' };
        }
        if (c === '4') {
          return { text: '关闭中', status: 'warning' };
        }
        return { text: '关闭', status: 'warning' };
      },

      async submitConfig() {
        const params = [];
        const pushParam = (dataId, key, value) => {
          if (value === null || value === undefined || value === '') return;
          if (this.originalConfigForm && Object.prototype.hasOwnProperty.call(this.originalConfigForm, key)) {
            const oldVal = this.originalConfigForm[key];
            if (String(oldVal) === String(value)) return;
          }
          params.push({
            dataId,
            value
          });
        };
        pushParam(0x01, 'mode01', this.configForm.mode01);
        pushParam(0x02, 'mode02', this.configForm.mode02);
        pushParam(0x03, 'mode03', this.configForm.mode03);
        pushParam(0x04, 'mode04', this.configForm.mode04);
        pushParam(0x05, 'mode05', this.configForm.mode05);
        pushParam(0x06, 'mode06', this.configForm.mode06);
        pushParam(0x07, 'speed07', this.configForm.speed07);
        pushParam(0x08, 'mode08', this.configForm.mode08);
        pushParam(0x09, 'time09', this.configForm.time09);
        pushParam(0x0A, 'pressure10', this.configForm.pressure10);
        pushParam(0x0B, 'pressure11', this.configForm.pressure11);
        pushParam(0x0C, 'freq12', this.configForm.freq12);
        pushParam(0x0D, 'freq13', this.configForm.freq13);
        if (!params.length) {
          this.configDialogVisible = false;
          return;
        }
        const req = {
          unitId: 1,
          functionCode: 0x10,
          params
        };
        try {
          const res = await axios.post('http://localhost:8080/sendConfigDataV2', req, {
            headers: {
              'Content-Type': 'application/json; charset=UTF-8'
            },
            timeout: 10000
          });
          const data = res && res.data ? res.data : {};
          if (data.ok === false) {
            this.$message.error(data.msg || '发送失败');
          } else {
            this.$message.success(data.msg || '发送成功');
            this.configDialogVisible = false;
          }
        } catch (e) {
          console.error('发送配置失败', e);
          this.$message.error('发送配置失败');
        }
      },

      async fetchMaterialTanks() {
        const names = ['涂料桶1', '涂料桶2'];
        const capacities = {
          '涂料桶1': 1000,
          '涂料桶2': 300
        };

        try {
          const params = new URLSearchParams();
          names.forEach(name => params.append('devNames', name));
          const res = await axios.get('http://localhost:8080/getBatchLatestSensor', {
            params,
            timeout: 5000
          });
          const list = (res && res.data) || [];
          const map = {};
          list.forEach(item => {
            if (item && item.devName) {
              map[item.devName] = item;
            }
          });

          const updated = names.map((name) => {
            const sensor = map[name];
            const rawVal = sensor && sensor.value;
            let level = 0;
            if (typeof rawVal === 'number') {
              level = rawVal;
            } else if (rawVal != null && !isNaN(parseFloat(rawVal))) {
              level = parseFloat(rawVal);
            }
            if (level < 0) level = 0;

            const capacity = capacities[name] || 100;
            let levelPercent = 0;
            if (capacity > 0) {
              levelPercent = (level / capacity) * 100;
            }
            if (levelPercent > 100) levelPercent = 100;

            const lowThreshold = capacity * 0.2;

            let status = 'normal';
            let statusText = '正常';
            if (level <= lowThreshold) {
              status = 'error';
              statusText = '低液位';
            }

            return {
              name,
              level,
              levelPercent,
              status,
              statusText
            };
          });

          this.materialTanks = updated;
        } catch (e) {
          console.error('获取涂料桶传感器数据失败', e);
        }
      },

      async fetchMixerStatus() {
        const names = ['搅拌器1', '搅拌器2', '进料门', '出料门'];

        try {
          const params = new URLSearchParams();
          names.forEach(name => params.append('devNames', name));
          const res = await axios.get('http://localhost:8080/getBatchLatestStatus', {
            params,
            timeout: 5000
          });
          const list = (res && res.data) || [];
          const map = {};
          list.forEach(item => {
            if (item && item.devName) {
              map[item.devName] = item;
            }
          });

          const updatedSystems = this.roomSystems.map(system => {
            if (!names.includes(system.name)) {
              return system;
            }
            const item = map[system.name];
            if (!item) {
              return system;
            }

            let mapped;
            if (system.name === '搅拌器1' || system.name === '搅拌器2') {
              mapped = this.mapMixerStatus(item.status);
            } else {
              mapped = this.mapDoorStatus(item.status);
            }

            return Object.assign({}, system, {
              status: mapped.status,
              value: mapped.text
            });
          });

          this.roomSystems = updatedSystems;
        } catch (e) {
          console.error('获取搅拌器状态失败', e);
        }
      },

      async fetchSprayPressureStatus() {
        const names = ['喷涂机1', '喷涂机2', '喷涂管路1', '喷涂管路2'];
        const keys = ['spray1', 'spray2', 'pipe1', 'pipe2'];

        try {
          const params = new URLSearchParams();
          names.forEach(name => params.append('devNames', name));
          const res = await axios.get('http://localhost:8080/getBatchLatestStatus', {
            params,
            timeout: 5000
          });
          const list = (res && res.data) || [];
          const map = {};
          list.forEach(item => {
            if (item && item.devName) {
              map[item.devName] = item;
            }
          });

          names.forEach((name, idx) => {
            const item = map[name];
            if (!item) return;
            const key = keys[idx];
            const mapped = this.mapSprayPressureStatus(item.status);
            this.$set(this.sprayPressureStatuses, key, mapped.cls);
            this.$set(this.sprayPressureTexts, key, mapped.text);
          });
        } catch (e) {
          console.error('获取喷涂压力状态失败', e);
        }
      },

      async fetchRobotAndGunStatus() {
        const names = ['机器人1', '机器人2', '喷枪1', '喷枪2'];
        try {
          const params = new URLSearchParams();
          names.forEach(name => params.append('devNames', name));
          const res = await axios.get('http://localhost:8080/getBatchLatestStatus', {
            params,
            timeout: 5000
          });
          const list = (res && res.data) || [];
          const map = {};
          list.forEach(item => {
            if (item && item.devName) {
              map[item.devName] = item;
            }
          });

          const r1 = map['机器人1'];
          const r2 = map['机器人2'];
          const g1 = map['喷枪1'];
          const g2 = map['喷枪2'];

          this.robotStatusTexts.robot1 = r1 ? this.mapRobotStatus(r1.status) : '';
          this.robotStatusTexts.robot2 = r2 ? this.mapRobotStatus(r2.status) : '';
          this.gunStatusTexts.gun1 = g1 ? this.mapGunStatus(g1.status) : '';
          this.gunStatusTexts.gun2 = g2 ? this.mapGunStatus(g2.status) : '';
        } catch (e) {
          console.error('获取机器人和喷枪状态失败', e);
        }
      },

      async fetchGunPressureHistory() {
        try {
          const res = await axios.get('http://localhost:8080/getGunPressureLast15Minutes', {
            timeout: 5000
          });
          const data = res && res.data ? res.data : {};
          const gun1List = Array.isArray(data.gun1) ? data.gun1 : [];
          const gun2List = Array.isArray(data.gun2) ? data.gun2 : [];
          const len = Math.max(gun1List.length, gun2List.length);
          const times = [];
          const gun1 = [];
          const gun2 = [];
          for (let i = 0; i < len; i += 1) {
            const s1 = gun1List[i];
            const s2 = gun2List[i];
            const rawTime = (s1 && (s1.time || s1.collectionTime || s1.timestamp)) || (s2 && (s2.time || s2.collectionTime || s2.timestamp));
            if (rawTime) {
              const d = new Date(rawTime);
              const hh = d.getHours().toString().padStart(2, '0');
              const mm = d.getMinutes().toString().padStart(2, '0');
              times.push(`${hh}:${mm}`);
            } else {
              times.push(String(i + 1));
            }
            const extractValue = sensor => {
              if (!sensor) return null;
              const v = sensor.value != null ? sensor.value : (sensor.pressure != null ? sensor.pressure : sensor.sensorValue);
              if (typeof v === 'number') return v;
              if (v != null && !isNaN(parseFloat(v))) return parseFloat(v);
              return null;
            };
            const v1 = extractValue(s1);
            const v2 = extractValue(s2);
            gun1.push(v1);
            gun2.push(v2);
          }
          this.gunPressureTimes = times;
          this.gun1Pressure = gun1;
          this.gun2Pressure = gun2;
          this.drawGunPressureChart();
        } catch (e) {
          console.error('获取喷枪压力历史数据失败', e);
        }
      },

      async fetchDashboardOverview() {
        try {
          const res = await axios.get('http://localhost:8080/getDashboardOverview', {
            timeout: 5000
          });
          const data = (res && res.data) || {};
          const weeklyCurrent = Number(data.latestWeeklyOutput) || 0;
          const weeklyTotal = 2240;
          const hourlyCurrent = Number(data.latestHourlyOutput) || 0;
          const hourlyTotal = 50;

          this.weeklyOutputCurrent = weeklyCurrent;
          this.weeklyOutputTotal = weeklyTotal;
          this.weeklyOutputPercent = weeklyTotal > 0 ? Math.min(100, Math.max(0, (weeklyCurrent / weeklyTotal) * 100)) : 0;

          this.hourlyOutputCurrent = hourlyCurrent;
          this.hourlyOutputTotal = hourlyTotal;
          this.hourlyOutputPercent = hourlyTotal > 0 ? Math.min(100, Math.max(0, (hourlyCurrent / hourlyTotal) * 100)) : 0;
        } catch (e) {
          console.error('获取炭块喷涂周/小时产量数据失败', e);
        }
      },

              async fetchProductHourlyHistory(limit = 24) {
                try {
                  const res = await axios.get('http://localhost:8080/getProductHourlyOnHourHistory', {
                    params: { limit },
                    timeout: 5000
                  });
                  const list = Array.isArray(res && res.data) ? res.data : [];
                  const now = new Date();
                  const times = [];
                  const hourStamps = [];
                  for (let i = limit - 1; i >= 0; i--) {
                    const d = new Date(now.getTime() - i * 60 * 60 * 1000);
                    const truncated = new Date(d.getFullYear(), d.getMonth(), d.getDate(), d.getHours());
                    hourStamps.push(truncated.getTime());
                    const hh = truncated.getHours().toString().padStart(2, '0');
                    times.push(`${hh}:00`);
                  }
                  const values = Array(limit).fill(0);
                  list.forEach(item => {
                    if (!item) return;
                    const rawTime = item.time;
                    if (!rawTime) return;
                    const d = new Date(rawTime);
                    const truncated = new Date(d.getFullYear(), d.getMonth(), d.getDate(), d.getHours());
                    const stamp = truncated.getTime();
                    const idx = hourStamps.indexOf(stamp);
                    if (idx === -1) return;
                    let v = null;
                    if (item != null) {
                      if (item.numHourly != null) v = item.numHourly;
                      else if (item.value != null) v = item.value;
                      else if (item.num != null) v = item.num;
                    }
                    const n = Number(v);
                    values[idx] = Number.isNaN(n) ? 0 : n;
                  });
                  this.hourlyOutputTimes = times;
                  this.hourlyOutputValues = values;
                  this.hourlyOutputCurrent = values.length > 0 ? values[values.length - 1] : 0;
                  this.drawOutputCombinedChart();
                } catch (e) {
                  console.error('获取小时产量历史失败', e);
                }
              },

              async fetchProductWeekHistory(limit = 7) {
                try {
                  const res = await axios.get('http://localhost:8080/getProductDailyAtMidnightHistory', {
                    params: { limit },
                    timeout: 5000
                  });
                  const list = Array.isArray(res && res.data) ? res.data : [];
                  const today = new Date();
                  const times = [];
                  const dayStamps = [];
                  for (let i = limit - 1; i >= 0; i--) {
                    const d = new Date(today.getFullYear(), today.getMonth(), today.getDate() - i);
                    const truncated = new Date(d.getFullYear(), d.getMonth(), d.getDate());
                    dayStamps.push(truncated.getTime());
                    const m = (truncated.getMonth() + 1).toString().padStart(2, '0');
                    const day = truncated.getDate().toString().padStart(2, '0');
                    times.push(`${m}-${day}`);
                  }
                  const values = Array(limit).fill(0);
                  list.forEach(item => {
                    if (!item) return;
                    const rawTime = item.time;
                    if (!rawTime) return;
                    const d = new Date(rawTime);
                    const truncated = new Date(d.getFullYear(), d.getMonth(), d.getDate());
                    const stamp = truncated.getTime();
                    const idx = dayStamps.indexOf(stamp);
                    if (idx === -1) return;
                    let v = null;
                    if (item != null) {
                      if (item.numDaily != null) v = item.numDaily;
                      else if (item.numWeekly != null) v = item.numWeekly;
                      else if (item.value != null) v = item.value;
                      else if (item.num != null) v = item.num;
                    }
                    const n = Number(v);
                    values[idx] = Number.isNaN(n) ? 0 : n;
                  });
                  this.weeklyOutputTimes = times;
                  this.weeklyOutputValues = values;
                  this.weeklyOutputCurrent = values.length > 0 ? values[values.length - 1] : 0;
                  this.drawOutputCombinedChart();
                } catch (e) {
                  console.error('获取周产量历史失败', e);
                }
              },

      async fetchQualityResult() {
        try {
          const res = await axios.get('http://localhost:8080/getLatestQualityResult', {
            timeout: 5000
          });
          const data = res && res.data;
          let code = null;
          if (data && typeof data === 'object') {
            if (Object.prototype.hasOwnProperty.call(data, 'result')) {
              code = data.result;
            } else if (Object.prototype.hasOwnProperty.call(data, 'status')) {
              code = data.status;
            } else if (Object.prototype.hasOwnProperty.call(data, 'value')) {
              code = data.value;
            }
          } else {
            code = data;
          }

          const mapped = this.mapQualityResult(code);
          this.qualityResultPercentage = mapped.percentage;
          this.qualityResultText = mapped.text;
          this.qualityResultColor = mapped.color;
          this.qualityResultStatus = mapped.status;
        } catch (e) {
          console.error('获取喷涂质量检测结果失败', e);
        }
              },

              handleOutputModeChange(mode) {
                this.outputChartMode = mode;
                if (mode === 'daily') {
                  this.fetchProductHourlyHistory();
                } else if (mode === 'weekly') {
                  this.fetchProductWeekHistory();
                }
              },

              drawOutputCombinedChart() {
                const el = this.$refs.outputCombinedChart;
                if (!el) return;

                const isDailyMode = this.outputChartMode === 'daily';

                const labelInterval = isDailyMode
                  ? (this.hourlyOutputTimes && this.hourlyOutputTimes.length > 0
                    ? Math.max(0, Math.floor(this.hourlyOutputTimes.length / 6))
                    : 0)
                  : 0;

                // 日产量：展示一天内多个小时的数据，对应 hourlyOutput*
                // 周产量：展示最近几天的数据，对应 weeklyOutput*
                let xData = isDailyMode ? (this.hourlyOutputTimes || []) : (this.weeklyOutputTimes || []);
                let values = isDailyMode ? (this.hourlyOutputValues || []) : (this.weeklyOutputValues || []);
                if (!xData.length || !values.length) {
                  xData = ['无数据'];
                  values = [0];
                }

                const yAxis = {
                  type: 'value',
                  name: '产量(块)',
                  nameTextStyle: {
                    color: 'honeydew',
                    fontSize: this.calculateFontSize(0.8)
                  },
                  axisLabel: {
                    color: 'honeydew',
                    fontSize: this.calculateFontSize(0.8)
                  },
                  axisLine: {
                    lineStyle: {
                      color: '#75d5ff'
                    }
                  },
                  splitLine: {
                    lineStyle: {
                      color: 'rgba(255,255,255,0.2)'
                    }
                  }
                };

                const seriesName = isDailyMode ? '日产量' : '周产量';

                const chart = echarts.init(el);
                chart.setOption({
                  grid: {
                    left: '8%',
                    right: '8%',
                    top: '18%',
                    bottom: '22%',
                    containLabel: true
                  },
                  tooltip: {
                    trigger: 'axis'
                  },
                  legend: {
                    show: false
                  },
                  xAxis: {
                    type: 'category',
                    data: xData,
                    axisLabel: {
                      color: 'honeydew',
                      fontSize: this.calculateFontSize(0.7),
                      interval: labelInterval
                    },
                    axisLine: {
                      lineStyle: {
                        color: '#75d5ff'
                      }
                    }
                  },
                  yAxis,
                  series: [
                    {
                      name: seriesName,
                      type: 'bar',
                      data: values,
                      barWidth: '40%',
                      itemStyle: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                          { offset: 0, color: isDailyMode ? '#ffd85c' : '#24d8ff' },
                          { offset: 1, color: isDailyMode ? '#f2a93b' : '#007aff' }
                        ])
                      }
                    }
                  ]
                });
              },

      drawGunPressureChart() {
        const el = this.$refs.gunPressureChart;
        if (!el) return;
        const chart = echarts.init(el);
        chart.setOption({
          grid: {
            left: '8%',
            right: '6%',
            top: '18%',
            bottom: '18%',
            containLabel: true
          },
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data: ['喷枪1', '喷枪2'],
            right: '5%',        // 距离左边 2%
            top: '5%',     
            orient: 'horizontal',// 横向排列
            textStyle: {
              color: '#75d5ff',
              fontSize: this.calculateFontSize(0.8)
            }
          },
          xAxis: {
            type: 'category',
            data: this.gunPressureTimes,
            axisLabel: {
              color: 'honeydew',
              fontSize: this.calculateFontSize(1.0)
            },
            axisLine: {
              lineStyle: {
                color: '#75d5ff'
              }
            }
          },
          yAxis: {
            type: 'value',
            name: '压力(Pa)',
            nameTextStyle: {
              color: 'honeydew',
              fontSize: this.calculateFontSize(1.0)  // 数字越大字越大，也可以直接写 14
            },
            nameLocation: 'end',
            nameGap: 20,
            axisLabel: {
              color: 'honeydew',
              fontSize: this.calculateFontSize(1.0)
            },
            axisLine: {
              lineStyle: {
                color: '#75d5ff'
              }
            },
            splitLine: {
              lineStyle: {
                color: 'rgba(255,255,255,0.2)'
              }
            }
          },
        series: [
          {
            name: '喷枪1',
            type: 'line',
            data: this.gun1Pressure,
            lineStyle: {
              color: '#20E5FF'
            },
              itemStyle: {
                color: '#20E5FF'
              }
            },
          {
            name: '喷枪2',
            type: 'line',
            data: this.gun2Pressure,
            lineStyle: {
              color: '#91CC75'
            },
              itemStyle: {
                color: '#91CC75'
              }
            }
          ]
        });
      },

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

      openHistoryDialog() {
        if (!this.queryEnvironData.dateRange || this.queryEnvironData.dateRange.length !== 2) {
          const end = new Date();
          const start = new Date();
          start.setDate(end.getDate() - 7);
          this.queryEnvironData.dateRange = [start, end];
        }
        this.historyDialogVisible = true;
        this.searchEnviron();
      },

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

      exportHistoryToXlsx() {
        if (!this.tableEnvironDataHistory || this.tableEnvironDataHistory.length === 0) {
          if (this.$message) {
            this.$message.warning('当前没有可导出的数据');
          }
          return;
        }

        const type = this.queryEnvironData.item[0];
        let sheetData = [];

        if (type === '1') {
          sheetData = this.tableEnvironDataHistory.map(row => ({
            '时间': this.formatTimeHistoryShow(row),
            '房间': this.formatRoomName(row),
            '温度(℃)': this.formatTemperature(row),
            '湿度(%)': this.formatHumidity(row),
            'CO2(PPM)': row.co2,
            'PM2.5(μg/m³)': row.pm25,
            'PM10(μg/m³)': row.pm10,
          }));
        } else if (type === '0') {
          sheetData = this.tableEnvironDataHistory.map(row => ({
            '时间': this.formatTimeHistoryShow(row),
            '总电量': row.allPower,
            '照明': this.formatNA(row, { property: 'lightPower' }),
            '空调': this.formatNA(row, { property: 'airconditionPower' }),
            '新风': this.formatNA(row, { property: 'freshPower' }),
          }));
        } else if (type === '2') {
          sheetData = this.tableEnvironDataHistory.map(row => ({
            '时间': this.formatTimeHistoryShow(row),
            '房间': this.formatACName(row),
            '状态': this.formatStatus(row),
            '温度(℃)': this.formatNA(row, { property: 'temperature' }),
            '风速': this.formatWindspeed(row),
            '模式': this.formatMode(row),
          }));
        } else if (type === '3') {
          sheetData = this.tableEnvironDataHistory.map(row => ({
            '时间': this.formatTimeHistoryShow(row),
            '房间': this.formatXFName(row),
            '状态': this.formatStatus(row),
            '风速': this.formatWindspeed(row),
          }));
        }

        const worksheet = XLSX.utils.json_to_sheet(sheetData);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, '数据报表');
        const wbout = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
        const blob = new Blob([wbout], { type: 'application/octet-stream' });

        const typeTextMap = {
          '0': '电量数据',
          '1': '环境数据',
          '2': '空调数据',
          '3': '新风数据',
        };

        const now = new Date();
        const datePart = [
          now.getFullYear(),
          String(now.getMonth() + 1).padStart(2, '0'),
          String(now.getDate()).padStart(2, '0'),
        ].join('');

        const filename = `历史${typeTextMap[type] || '数据'}_${datePart}.xlsx`;
        FileSaver.saveAs(blob, filename);
      },
    },
  }
</script>

<!--css 格式-->
<style scoped>

/* 使用深度选择器覆盖Element UI默认样式 */
.large-text-progress ::v-deep .el-progress__text {
  font-size: 24px !important;
  font-weight: bold !important;
  color: white !important;
}

.large-percentage ::v-deep(.el-progress__text) {
  font-size: 24px !important;
  font-weight: bold;
}





/* 状态指示灯 */
.status-indicator {
  padding: 10px;
}

.indicator-icon {
  width: 60px;
  height: 60px;
  border-radius: 50%; /* 圆角  */
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  font-size: 30px; /* 图标大小 */
  color: white;
}

.indicator-icon.normal {
  background: linear-gradient(135deg, #67C23A, #85CE61);
  box-shadow: 0 0 10px rgba(103, 194, 58, 0.5);
}

.indicator-icon.error {
  background: linear-gradient(135deg, #F56C6C, #F78989);
  box-shadow: 0 0 10px rgba(245, 108, 108, 0.5);
}

.indicator-icon.warning {
  background: linear-gradient(135deg, #E6A23C, #EBB563);
  box-shadow: 0 0 10px rgba(230, 162, 60, 0.5);
}

/* 系统状态图标 */
.system-status {
  padding: 10px 0;
}

.system-icon {
  width: 80px;
  height: 80px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  font-size: 40px;
  color: white;
  background: rgba(117, 213, 255, 0.2);
  border: 2px solid #75d5ff;
}

.system-icon.normal {
  border-color: #67C23A;
  background: rgba(103, 194, 58, 0.2);
}

.system-icon.warning {
  border-color: #E6A23C;
  background: rgba(230, 162, 60, 0.2);
}

/* 液位计样式 */
.tank-container {
  height: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.tank-icon-box {
  font-size: 50px;
  color: #75d5ff;
  margin-bottom: 10px;
}

.tank-container-new {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  height: 100%;
  padding: 4px 8px;
}

.tank-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4px;
}

.tank-name {
  color: #75d5ff;
  font-size: 18px;
}

.tank-status-tag {
  padding: 6px 10px;
  border-radius: 12px;
  font-size: 16px;
  color: #ffffff;
}

.tank-status-tag.normal {
  background: #67C23A;
}

.tank-status-tag.error {
  background: #F56C6C;
}

.tank-main {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 8px;
}

.tank-value {
  flex: 0 0 70px;
  width: 70px;
  text-align: center;
}

.tank-value-number {
  font-size: 26px;
  font-weight: bold;
  color: #ffffff;
}

.tank-bar-wrapper {
  flex: 1 1 auto;
  margin-left: 12px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.tank-bar-bg {
  width: 100%;
  height: 10px;
  border-radius: 5px;
  background: rgba(117, 213, 255, 0.2);
  overflow: hidden;
}

.tank-bar-fill {
  height: 100%;
  background: linear-gradient(to right, #75d5ff, #24d8ff);
  transition: width 0.5s ease;
}

.status-tag {
  color: #ffffff;
}

.status-tag.normal {
  background: #67C23A;
}

.status-tag.error {
  background: #F56C6C;
}


.config-form /deep/ .el-input__inner {
  background-color: rgba(64, 158, 255, 0.2);
  color: honeydew;
  border: 0;
  border-radius: 0;
  text-align: center;
  font-size: 0.85vw;
}

.config-form /deep/ .el-input-number__decrease,
.config-form /deep/ .el-input-number__increase {
  background-color: rgba(64, 158, 255, 0.2);
  color: honeydew;
  border-color: #005C8E;
}

.config-form /deep/ .el-input-number__decrease:hover,
.config-form /deep/ .el-input-number__increase:hover {
  background-color: #005C8E;
}

.config-form /deep/ .el-form-item {
  background-color: rgba(8, 22, 77, 0.6);
  color: #00E4FF;
  border: 0;
  border-radius: 0;
  line-height: 3vh;
}

.config-form /deep/ .el-form-item__label {
  font-size: 1vw;
  color: honeydew;
  align-items: center;
  line-height: 3vh;
}

.config-form /deep/ .el-form-item__content {
  line-height: 3vh;
  position: relative;
  font-size: 0.8vw;
  margin: 0;
}

.config-form /deep/ .el-select .el-input .el-select__caret {
  font-size: 0.8vw;
  color: #00E4FF;
}

.config-form /deep/ .el-select-dropdown {
  background-color: rgba(8, 22, 77, 0.9);
  margin: 0;
  border: 0;
  border-radius: 0;
}

.config-form /deep/ .el-select-dropdown .el-select-dropdown__item {
  background-color: rgba(8, 22, 77, 0.9);
  color: rgba(240, 255, 240, 0.8);
  font-size: 0.8vw;
}

.config-form /deep/ .el-select-dropdown__item.hover,
.config-form /deep/ .el-select-dropdown__item:hover {
  color: #409eff;
  background-color: rgba(8, 22, 77, 1);
}

.output-header {
  display: flex;
  align-items: center;
}

.output-mode-select {
  margin-left: auto;
  margin-right: 44%;
  width: 6vw;
}

.output-mode-select /deep/ .el-input__inner {
  background-color: transparent;
  border-color: transparent;
  box-shadow: none;
}

.output-mode-select /deep/ .el-select-dropdown {
  background-color: transparent;
  border-color: transparent;
  box-shadow: none;
}

.output-mode-select /deep/ .el-select-dropdown__item {
  background-color: transparent;
}

.output-mode-select /deep/ .el-select-dropdown__item.hover,
.output-mode-select /deep/ .el-select-dropdown__item:hover {
  background-color: rgba(0, 0, 0, 0.3);
}

/deep/ .el-dialog {
  background-color: rgba(8, 22, 77, 0.9);
  border-radius: 0;
  border: 1px solid #00afed;
}

/deep/ .el-dialog__header {
  border-bottom: 1px solid rgba(0, 228, 255, 0.4);
}

/deep/ .el-dialog__title {
  color: honeydew;
  font-size: 1.2vw;
}

/deep/ .el-dialog__headerbtn .el-dialog__close {
  color: #24d8ff;
}

/deep/ .el-dialog__body {
  padding-top: 10px;
}


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
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-left: 15%;
    font-size: 2vw;
    color: #24d8ff;
  }

  .grid-content-user .user-icon,
  .grid-content-user .report-icon {
    cursor: pointer;
  }

  .grid-content-user .report-icon {
    margin-left: 1vw;
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

  .box-card-paintroom /deep/ .el-card__header {
    background-size: cover;
    background-size: 100% 100%; /* 将背景图片宽度设置为卡片头部宽度的五分之一，高度自适应 */
    background-position: 0 0; /* 将背景图片左侧对齐 */
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
    background-image: url("../../assets/anqiju/qimingxing.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
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
    font-weight: 600;
    min-width: 60px;
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
