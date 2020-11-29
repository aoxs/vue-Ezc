<template>
  <div class="dashboard-editor-container">
    <div style="background-color: #fff; border: 1px solid #dadada">
      <!-- 内容header -->
      <!-- <div style="padding:20px 30px;background-color:#F5F5F5;display: flex;
  justify-content: flex-end;border-bottom:1px solid #DADADA">
        <i class="el-icon-refresh"
           style="font-size:28px;font-weight: 1000;" />

      </div> -->
      <!-- 内容header end -->

      <!-- partial:index.partial.html -->

      <!-- partial -->

      <!-- 全屏内容   -->
      <div id="signing"
           class="sigMian"
           :style="{height: sigdiv1h}">
        <!-- <svg v-if="PageStarted"
             class="preview"
             xmlns="http://www.w3.org/2000/svg"
             width="300"
             height="300">
          <circle id="arc1"
                  class="circle"
                  cx="150"
                  cy="150"
                  r="120"
                  opacity=".89"
                  fill="none"
                  stroke="#632b26"
                  stroke-width="12"
                  stroke-linecap="square"
                  stroke-opacity=".99213"
                  paint-order="fill markers stroke" />
          <circle id="arc2"
                  class="circle"
                  cx="150"
                  cy="150"
                  r="120"
                  opacity=".49"
                  fill="none"
                  stroke="#632b26"
                  stroke-width="8"
                  stroke-linecap="square"
                  stroke-opacity=".99213"
                  paint-order="fill markers stroke" />
          <circle id="arc3"
                  class="circle"
                  cx="150"
                  cy="150"
                  r="100"
                  opacity=".49"
                  fill="none"
                  stroke="#632b26"
                  stroke-width="20"
                  stroke-linecap="square"
                  stroke-opacity=".99213"
                  paint-order="fill markers stroke" />
          <circle id="arc4"
                  class="circle"
                  cx="150"
                  cy="150"
                  r="120"
                  opacity=".49"
                  fill="none"
                  stroke="#632b26"
                  stroke-width="30"
                  stroke-linecap="square"
                  stroke-opacity=".99213"
                  paint-order="fill markers stroke" />
          <circle id="arc5"
                  class="circle"
                  cx="150"
                  cy="150"
                  r="100"
                  opacity=".89"
                  fill="none"
                  stroke="#632b26"
                  stroke-width="8"
                  stroke-linecap="square"
                  stroke-opacity=".99213"
                  paint-order="fill markers stroke" />
          <circle id="arc6"
                  class="circle"
                  cx="150"
                  cy="150"
                  r="90"
                  opacity=".49"
                  fill="none"
                  stroke="#632b26"
                  stroke-width="16"
                  stroke-linecap="square"
                  stroke-opacity=".99213"
                  paint-order="fill markers stroke" />
          <circle id="arc7"
                  class="circle"
                  cx="150"
                  cy="150"
                  r="90"
                  opacity=".89"
                  fill="none"
                  stroke="#632b26"
                  stroke-width="8"
                  stroke-linecap="square"
                  stroke-opacity=".99213"
                  paint-order="fill markers stroke" />
          <circle id="arc8"
                  class="circle"
                  cx="150"
                  cy="150"
                  r="80"
                  opacity=".79"
                  fill="#4DD0E1"
                  fill-opacity="0"
                  stroke="#632b26"
                  stroke-width="8"
                  stroke-linecap="square"
                  stroke-opacity=".99213"
                  paint-order="fill markers stroke" />
        </svg>
        <div v-else> -->
        <!-- header -->
        <div style="width: 100%; padding: 0px 10px; position: relative">
          <p style="
              text-align: center;
              margin: 0px;
              margin-top: 10px;
              margin-bottom: 10px;
              font-size: 24px;
              font-weight: 700;
            ">
            英联E征拆签约实时统计平台
          </p>
          <svg-icon id="full_screen"
                    style="font-size: 16px; position: absolute; top: 14px; right: 0px"
                    icon-class="fullscreen" />
          <div class="infoDiv">
            <div class="statDiv">
              <div class="sigLabel">
                <img src="./images/ksh34.png"
                     class="sigLabelImg"
                     alt="">
                <img src="./images/ksh34.png"
                     class="sigLabelImg"
                     alt="">
                <img src="./images/ksh34.png"
                     class="sigLabelImg"
                     alt="">
                <img src="./images/ksh34.png"
                     class="sigLabelImg"
                     alt="">

                <el-table :data="statTab"
                          :show-header="false"
                          style="padding-top:28px">
                  <el-table-column prop=""
                                   min-width="80"
                                   align="right"
                                   show-overflow-tooltip>
                    <template slot-scope="scope">
                      <span class="sigNumsp">{{ scope.row.name }}</span>
                    </template>
                  </el-table-column>
                  <el-table-column prop=""
                                   min-width="170"
                                   show-overflow-tooltip>
                    <template slot-scope="scope"><span class="sigNum">{{ scope.row.num }}</span></template>
                  </el-table-column>
                </el-table>
              </div>
            </div>

            <!-- 时钟 -->
            <div class="timeDiv">
              <span class="timeCss">{{ nowDateArr[0] }}</span>
              <span class="timeCss">{{ nowDateArr[1] }}</span>
              <span class="timeCss">{{ nowDateArr[2] }}</span>
              <span class="timeCss">{{ nowDateArr[3] }}</span>
              <span class="timeCss">年</span>
              <span class="timeCss">{{ nowDateArr[4] }}</span>
              <span class="timeCss">{{ nowDateArr[5] }}</span>
              <span class="timeCss">月</span>
              <span class="timeCss">{{ nowDateArr[6] }}</span>
              <span class="timeCss">{{ nowDateArr[7] }}</span>
              <span class="timeCss">日</span>
              <br>
              <span class="timeCss">{{ nowDateArr[8] }}</span>
              <span class="timeCss">{{ nowDateArr[9] }}</span>
              <span class="timeCss">:</span>
              <span class="timeCss">{{ nowDateArr[10] }}</span>
              <span class="timeCss">{{ nowDateArr[11] }}</span>
              <span class="timeCss">:</span>
              <span class="timeCss">{{ nowDateArr[12] }}</span>
              <span class="timeCss">{{ nowDateArr[13] }}</span>
              &nbsp;
              <span class="timeCss">星</span>
              <span class="timeCss">期</span>
              <span class="timeCss">{{ nowDateArr[14] }}</span>
            </div>
            <!-- 时钟end -->
          </div>
        </div>
        <!-- header end -->

        <!-- 数据 -->
        <!-- <el-row :gutter="20">
          <el-col :span="18"
                  :offset="0"> -->
        <div style="display:flex; justify-content: space-between;">
          <div class="sigDiv"
               style="height:30%;width: 80%;">
            <img src="./images/ksh42.png"
                 style="position: absolute; top: -2px; left: -2px"
                 alt="">
            <img src="./images/ksh43.png"
                 style="position: absolute; top: -2px; right: -2px"
                 alt="">
            <img src="./images/ksh44.png"
                 style="position: absolute; bottom: -2px; right: -2px"
                 alt="">
            <img src="./images/ksh45.png"
                 style="position: absolute; bottom: -2px; left: -2px"
                 alt="">
            <div class="sigTitle">
              <span>签约实时统计</span>
              <img src="./images/ksh33.png"
                   alt=""
                   class="tablesIMG">
            </div>
            <el-table :data="sigTableData"
                      v-loading="sigTableLoading"
                      ref="table"
                      border
                      height="203"
                      style="margin: 10px auto; width: 98%;">
              <el-table-column prop="Remake"
                               label="小组"
                               min-width="55"
                               align="center" />
              <el-table-column prop="ContractNum"
                               label="协议编号"
                               min-width="65"
                               align="center"
                               show-overflow-tooltip />
              <el-table-column prop="Obligee"
                               label="权利人"
                               min-width="60"
                               align="center" />
              <el-table-column prop="SignTime"
                               label="签约时间"
                               min-width="150"
                               align="center" />
              <el-table-column prop="Potos"
                               label="签约照片"
                               min-width="153"
                               align="center">
                <template slot-scope="scope">
                  <el-image :src="'http://120.86.117.97:8579/file/'+scope.row.Potos"
                            :preview-src-list="scope.row.PotosBig"
                            fit="contain"
                            :lazy="true"
                            style="width: 150px; max-height: 30px; margin-top: 1px" />
                </template>
              </el-table-column>
              <el-table-column prop="FormWork"
                               label="排名"
                               min-width="55"
                               align="center" />
            </el-table>
          </div>
          <div class="sigDiv"
               style="height:30%;width: 19%;">
            <img src="./images/ksh42.png"
                 style="position: absolute; top: -2px; left: -2px"
                 alt="">
            <img src="./images/ksh43.png"
                 style="position: absolute; top: -2px; right: -2px"
                 alt="">
            <img src="./images/ksh44.png"
                 style="position: absolute; bottom: -2px; right: -2px"
                 alt="">
            <img src="./images/ksh45.png"
                 style="position: absolute; bottom: -2px; left: -2px"
                 alt="">
            <div class="sigTitle">
              <span>剩余补偿面积</span>

            </div>
            <div id="charts2"
                 v-loading="sigPieLoading"
                 :style="{
                  width: '100%',
                  height: '200px',
                }" />
            <!--
            <div class="sigTitle">
              <span>剩余房源</span>
            </div>
            <div>住宅:<span>{{NumType.Housenum}}m²</span></div>
            <div>办公:<span>{{NumType.Officenum}}m²</span></div>
            <div>工业:<span>{{NumType.Factornum}}m²</span></div>
            <div>集中商业:<span>{{NumType.BusinessNum}}m²</span></div>
            <div>底层商铺:<span>{{NumType.Lowsbus}}m²</span></div> -->
          </div>
        </div>
        <div class="sigDiv"
             style="height: 30%;padding-bottom:20px">
          <img src="./images/ksh42.png"
               style="position: absolute; top: -2px; left: -2px"
               alt="">
          <img src="./images/ksh43.png"
               style="position: absolute; top: -2px; right: -2px"
               alt="">
          <img src="./images/ksh44.png"
               style="position: absolute; bottom: -2px; right: -2px"
               alt="">
          <img src="./images/ksh45.png"
               style="position: absolute; bottom: -2px; left: -2px"
               alt="">
          <div class="sigTitle">
            <span>小组进度排名</span>
            <img src="./images/ksh33.png"
                 alt=""
                 class="chartsIMG">
          </div>

          <div id="charts1"
               :style="{
                  width: '100%',
                  height: '100%',
                }"> </div>
        </div>
        <!-- </el-col>
        </el-row> -->

        <!-- 数据end -->
        <!-- </div> -->
      </div>
      <!-- 全屏内容end   -->
    </div>
  </div>
</template>
<script>
// import './css/signing.css'
import screenfull from 'screenfull'
import echarts from 'echarts'
import { color } from 'echarts/lib/export'
// require('echarts/theme/macarons') // echarts theme
// import resize from './mixins/resize'


export default {
  data() {
    return {
      sigPieLoading: false,
      sigBarLoading: false,
      sigTableLoading: false,
      a: 600,
      b: 320,
      windowWidth: document.documentElement.clientWidth,  //实时屏幕宽度
      windowHeight: document.documentElement.clientHeight,   //实时屏幕高度
      sigdiv1h: '',
      NumType: {},
      PageStarted: true,
      sigChartsTotal: 80,
      sigAccounted: 60,
      sigChartsname: [],
      sigChartsData: [],
      srcList: [],
      isFullscreen: false,
      Server_Date: '',
      nowDate: '', // 当前日期时间
      nowDateArr: [],
      statTab: [
        { name: '已签约:', num: '320/600' },
        { name: '占比:', num: '70%' }
      ],
      shengyuTable: [
        { name: "住宅", num: 800 },
        { name: "厂房", num: 800 },
        { name: "办公", num: 800 },
      ],
      tableData: [
        {
          sigTeam: '一组',
          sigPeople: '张三',
          sigDate: '2020/11/13 17:24:09',
          sigPhoto:
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605265475394&di=cc189a0837db9dd2cc43a148d08cb440&imgtype=0&src=http%3A%2F%2Fimg.douyucdn.cn%2Fdata%2Fyuba%2Fdefault%2Fc8%2F71%2Fc8713a3e8bb567790cd742af3b981e71831bd1c7e6eb.jpg',
          sigPhotoBig: [
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605265475394&di=cc189a0837db9dd2cc43a148d08cb440&imgtype=0&src=http%3A%2F%2Fimg.douyucdn.cn%2Fdata%2Fyuba%2Fdefault%2Fc8%2F71%2Fc8713a3e8bb567790cd742af3b981e71831bd1c7e6eb.jpg'
          ],
          sigRanking: 23
        },
        {
          sigTeam: '一组',
          sigPeople: '张三',
          sigDate: '2020/11/13 17:24:09',
          sigPhoto:
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605265475394&di=cc189a0837db9dd2cc43a148d08cb440&imgtype=0&src=http%3A%2F%2Fimg.douyucdn.cn%2Fdata%2Fyuba%2Fdefault%2Fc8%2F71%2Fc8713a3e8bb567790cd742af3b981e71831bd1c7e6eb.jpg',
          sigPhotoBig: [
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605265475394&di=cc189a0837db9dd2cc43a148d08cb440&imgtype=0&src=http%3A%2F%2Fimg.douyucdn.cn%2Fdata%2Fyuba%2Fdefault%2Fc8%2F71%2Fc8713a3e8bb567790cd742af3b981e71831bd1c7e6eb.jpg'
          ],
          sigRanking: 23
        },
        {
          sigTeam: '一组',
          sigPeople: '张三',
          sigDate: '2020/11/13 17:24:09',
          sigPhoto:
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605265475394&di=cc189a0837db9dd2cc43a148d08cb440&imgtype=0&src=http%3A%2F%2Fimg.douyucdn.cn%2Fdata%2Fyuba%2Fdefault%2Fc8%2F71%2Fc8713a3e8bb567790cd742af3b981e71831bd1c7e6eb.jpg',
          sigPhotoBig: [
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605265475394&di=cc189a0837db9dd2cc43a148d08cb440&imgtype=0&src=http%3A%2F%2Fimg.douyucdn.cn%2Fdata%2Fyuba%2Fdefault%2Fc8%2F71%2Fc8713a3e8bb567790cd742af3b981e71831bd1c7e6eb.jpg'
          ],
          sigRanking: 23
        },
        {
          sigTeam: '一组',
          sigPeople: '张三',
          sigDate: '2020/11/13 17:24:09',
          sigPhoto:
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605265475394&di=cc189a0837db9dd2cc43a148d08cb440&imgtype=0&src=http%3A%2F%2Fimg.douyucdn.cn%2Fdata%2Fyuba%2Fdefault%2Fc8%2F71%2Fc8713a3e8bb567790cd742af3b981e71831bd1c7e6eb.jpg',
          sigPhotoBig: [
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605265475394&di=cc189a0837db9dd2cc43a148d08cb440&imgtype=0&src=http%3A%2F%2Fimg.douyucdn.cn%2Fdata%2Fyuba%2Fdefault%2Fc8%2F71%2Fc8713a3e8bb567790cd742af3b981e71831bd1c7e6eb.jpg'
          ],
          sigRanking: 23
        },
        {
          sigTeam: '二组',
          sigPeople: '李四',
          sigDate: '2020/11/13 17:24:09',
          sigPhoto:
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605265502127&di=3f5c2aed2b54d5ea04990dfa0abb8162&imgtype=0&src=http%3A%2F%2Fpic.rmb.bdstatic.com%2Fd71c42fe1838bedcb40463db99b7c944.jpeg',
          sigPhotoBig: [
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605265502127&di=3f5c2aed2b54d5ea04990dfa0abb8162&imgtype=0&src=http%3A%2F%2Fpic.rmb.bdstatic.com%2Fd71c42fe1838bedcb40463db99b7c944.jpeg'
          ],
          sigRanking: 22
        },
        {
          sigTeam: '二组',
          sigPeople: '李四',
          sigDate: '2020/11/13 17:24:09',
          sigPhoto:
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605265502127&di=3f5c2aed2b54d5ea04990dfa0abb8162&imgtype=0&src=http%3A%2F%2Fpic.rmb.bdstatic.com%2Fd71c42fe1838bedcb40463db99b7c944.jpeg',
          sigPhotoBig: [
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605265502127&di=3f5c2aed2b54d5ea04990dfa0abb8162&imgtype=0&src=http%3A%2F%2Fpic.rmb.bdstatic.com%2Fd71c42fe1838bedcb40463db99b7c944.jpeg'
          ],
          sigRanking: 22
        },
        {
          sigTeam: '二组',
          sigPeople: '李四',
          sigDate: '2020/11/13 17:24:09',
          sigPhoto:
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605265502127&di=3f5c2aed2b54d5ea04990dfa0abb8162&imgtype=0&src=http%3A%2F%2Fpic.rmb.bdstatic.com%2Fd71c42fe1838bedcb40463db99b7c944.jpeg',
          sigPhotoBig: [
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605265502127&di=3f5c2aed2b54d5ea04990dfa0abb8162&imgtype=0&src=http%3A%2F%2Fpic.rmb.bdstatic.com%2Fd71c42fe1838bedcb40463db99b7c944.jpeg'
          ],
          sigRanking: 22
        },
        {
          sigTeam: '二组',
          sigPeople: '李四',
          sigDate: '2020/11/13 17:24:09',
          sigPhoto:
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605265475394&di=cc189a0837db9dd2cc43a148d08cb440&imgtype=0&src=http%3A%2F%2Fimg.douyucdn.cn%2Fdata%2Fyuba%2Fdefault%2Fc8%2F71%2Fc8713a3e8bb567790cd742af3b981e71831bd1c7e6eb.jpg',
          sigPhotoBig: [
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605265475394&di=cc189a0837db9dd2cc43a148d08cb440&imgtype=0&src=http%3A%2F%2Fimg.douyucdn.cn%2Fdata%2Fyuba%2Fdefault%2Fc8%2F71%2Fc8713a3e8bb567790cd742af3b981e71831bd1c7e6eb.jpg'
          ],
          sigRanking: 22
        },
        {
          sigTeam: '二组',
          sigPeople: '李四',
          sigDate: '2020/11/13 17:24:09',
          sigPhoto:
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605265475394&di=cc189a0837db9dd2cc43a148d08cb440&imgtype=0&src=http%3A%2F%2Fimg.douyucdn.cn%2Fdata%2Fyuba%2Fdefault%2Fc8%2F71%2Fc8713a3e8bb567790cd742af3b981e71831bd1c7e6eb.jpg',
          sigPhotoBig: [
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605265475394&di=cc189a0837db9dd2cc43a148d08cb440&imgtype=0&src=http%3A%2F%2Fimg.douyucdn.cn%2Fdata%2Fyuba%2Fdefault%2Fc8%2F71%2Fc8713a3e8bb567790cd742af3b981e71831bd1c7e6eb.jpg'
          ],
          sigRanking: 22
        },
        {
          sigTeam: '二组',
          sigPeople: '李四',
          sigDate: '2020/11/13 17:24:09',
          sigPhoto:
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605265475394&di=cc189a0837db9dd2cc43a148d08cb440&imgtype=0&src=http%3A%2F%2Fimg.douyucdn.cn%2Fdata%2Fyuba%2Fdefault%2Fc8%2F71%2Fc8713a3e8bb567790cd742af3b981e71831bd1c7e6eb.jpg',
          sigPhotoBig: [
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605265475394&di=cc189a0837db9dd2cc43a148d08cb440&imgtype=0&src=http%3A%2F%2Fimg.douyucdn.cn%2Fdata%2Fyuba%2Fdefault%2Fc8%2F71%2Fc8713a3e8bb567790cd742af3b981e71831bd1c7e6eb.jpg'
          ],
          sigRanking: 22
        }
      ],
      sigTableData: [],
    }
  },
  watch: {

    windowHeight(val) {
      let than = this
      than.sigdiv1h = than.windowHeight + 'px'

      console.log("实时屏幕高度：", val, than.windowHeight);
    },
    windowWidth(val) {
      let than = this

      console.log("实时屏幕宽度：", val, than.windowWidth);
    }
  },
  created() {
    // this.play()
    // setTimeout( ()=>{
    //  this.PageStarted = false
    //  },3000 )
    let than = this

    than.sigdiv1h = than.windowHeight + 'px'
    this.getChartsData()
  },
  mounted() {
    this.getNumType()
    this.getsigTableData()
    let than = this

    window.addEventListener('resize', () => {
      return (() => {
        window.fullHeight = document.documentElement.clientHeight;
        window.fullWidth = document.documentElement.clientWidth;
        than.windowHeight = window.fullHeight;  // 高
        than.windowWidth = window.fullWidth; // 宽
      })()
    });

    // 控制表格高度
    // this.$nextTick(function () {
    //   this.tableHeight = window.innerHeight - this.$refs.table.$el.offsetTop - 347;

    //   // 监听窗口大小变化
    //   let self = this;
    //   window.addEventListener('resize', () => {

    //     self.tableHeight = window.innerHeight - self.$refs.table.$el.offsetTop - 347
    //     console.log('888aaa', self.tableHeight)
    //   })
    // })
    // <!--把window.onresize事件挂在到mounted函数上-->
    // window.onresize = () => {

    //     window.fullHeight = document.documentElement.clientHeight;
    //     window.fullWidth = document.documentElement.clientWidth;
    //     this.windowHeight = window.fullHeight;  // 高
    //     this.windowWidth = window.fullWidth; // 宽

    // };
    //  window.onresize = () => {
    //       return (() => {
    //         window.screenWidth = document.body.clientWidth
    //         that.screenWidth = window.screenWidth
    //         console.log(that.screenWidth)
    //       })()
    //     }

    this.currentTime()
    const element = document.getElementById('signing')
    document.getElementById('full_screen').addEventListener('click', () => {
      if (screenfull.enabled) {
        screenfull.request(element) // 元素全屏

      }
    })
    this.sigCharts()
  },

  beforeDestroy() {
    // if (this.formatDate) {
    clearInterval(this.formatDate) // 清除时间定时器
    // }
    // window.removeEventListener('resize', this.measure1(), false)

  },
  methods: {
    // 获取统计表
    getsigTableData() {
      this.sigTableLoading = true
      this.axios.get('/QuerySignRile?Id=143').then((res) => {
        console.log(res.data)
        this.sigTableData = res.data
        for (var i in this.sigTableData) {
          this.sigTableData[i].PotosBig = []
          var potosBig = 'http://120.86.117.97:8579/file/' + this.sigTableData[i].Potos
          this.sigTableData[i].PotosBig.push(potosBig)
        }
        this.sigTableLoading = false
      })
    },
    // 获取剩余房源数量
    getNumType() {
      this.sigPieLoading = true
      this.axios.get('/NumType?id=143').then((res) => {
        console.log(res.data)
        this.sigPieLoading = false
        this.NumType = res.data[0]
        console.log(this.NumType)
        this.sigPieCharts()
      })
    },
    // 获取小组进度排名图表
    getChartsData() {
      this.sigBarLoading = true
      this.axios.get('/Census?Id=143').then((res) => {
        console.log(res.data)
              this.sigBarLoading = false
 
        for (var i in res.data) {
          console.log(i, res.data[i])
          this.sigChartsname.push(res.data[i].GroupName)
          this.sigChartsData.push(res.data[i].MustNum)
        }
        console.log(this.sigChartsname)
        console.log(this.sigChartsData)
        this.sigCharts()

      })
    },

    // change() {
    //   this.tableData.push(this.tableData[0]);//把第一条数据插入数组最有一条
    //   this.tableData.shift();//删除数组中第一条数据
    // },
    // paly() {
    //   setInterval(this.change(), 2000);//每两秒执行一次插入删除操作
    // },
    // load() {
    //   // this.$message.success('加载下一页');
    //   this.tableData = this.tableData.concat(exampleData);
    // },
    currentTime() {
      setInterval(this.formatDate, 200)
    },
    formatDate() {
      const date = new Date()
      const year = date.getFullYear() // 年
      const month = date.getMonth() + 1 // 月
      const day = date.getDate() // 日
      const week = date.getDay() // 星期
      const weekArr = ['日', '一', '二', '三', '四', '五', '六']
      let hour = date.getHours()
      hour = hour < 10 ? '0' + hour : hour // 补零
      let minute = date.getMinutes()
      minute = minute < 10 ? '0' + minute : minute // 补零
      let second = date.getSeconds()
      second = second < 10 ? '0' + second : second // 补零
      this.nowDate = `${year}${month}${day}${hour}${minute}${second}${weekArr[week]}`
      this.nowDateArr = this.nowDate.split('')

    },
    sigPieCharts() {
      var sigPieChart = echarts.init(document.getElementById('charts2'))
      var pieData = [{
        name: '住宅',
        value: this.NumType.Housenum
      }, {
        name: '办公',
        value: this.NumType.Officenum
      }, {
        name: '集中商业',
        value: this.NumType.BusinessNum
      },
      {
        name: '工业',
        value: this.NumType.Factornum
      }, {
        name: '底层商铺',
        value: this.NumType.Lowsbus
      },];

      const optionPie = {
        // title: [{
        //   text: '剩余补偿面积'
        // }, 
        // {
        //   subtext: 'alignTo: "edge"',
        //   // left: '83.33%',
        //   // top: '75%',
        //   textAlign: 'center',

        // }
        // ],
        // grid: [
        //   {
        //     top: '30%',
        //     left: '0%',
        //     right: '0%',
        //     bottom: '0%',
        //     containLabel: true
        //   },
        // ],

        series: [{
          type: 'pie',
          radius: '80%',
          hoverAnimation: true,
          center: ['50%', '50%'],
          data: pieData,
          animation: true,
          itemStyle: {
            // normal: {
            label: {
              show: true,
              postion: 'inner',
              formatter: '{b}',
              textStyle: {
                fontWeight: 500,
                fontSize: 14
              }
            },
            labelLine: {
              show: false
            },
          },

          // left: '0%',
          // right: 0,
          // top: 0,
          // bottom: 0
        }],
        tooltip: {                    //提示框样式，鼠标悬浮交互时的信息提示
          trigger: 'item',
          formatter: "{b} : {c}m² ({d}%)"
        },
        color: ['#c487ee', '#deb140', '#49dff0', '#6f81da', '#00ffb4'],

      }
      sigPieChart.setOption(optionPie)


      window.addEventListener('resize', () => sigPieChart.resize())
    },

    sigCharts() {
      var sigChart = echarts.init(document.getElementById('charts1'))

      const optionBar = {
        // title: {
        //   text: "签约统计",
        //   textStyle: {
        //       color: "#fff"
        //     },
        //   left: "center",
        // },
        // legend:{
        //   testStyle:{
        //     color: '#fff'
        //   }
        // },
        grid: [
          {
            top: '4%',
            left: '3%',
            right: '4%',
            bottom: '8%',
            containLabel: true
          },
        ],
        xAxis: {
          type: 'category',
          data: this.sigChartsname,
          axisLabel: {
            show: true,
            interval: 0,
            rotate: 40,
            textStyle: {
              color: '#fff'
            }
          },
          axisLine: {
            lineStyle: {
              color: '#fff'
            }
          }
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            show: true,
            textStyle: {
              color: '#fff'
            }
          },
          axisLine: {
            lineStyle: {
              color: '#fff'
            }
          }
        },
        series: [
          {
            type: 'bar',
            data: this.sigChartsData,

            label: {
              show: true,
              position: 'insideBottom',
              formatter:
                '已签约\n{c}/' +
                this.sigChartsTotal +
                '\n\n占比\n' +
                this.sigAccounted +
                '%'
            },
            itemStyle: {
              // 通常情况下：
              normal: {
                // 每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组中的颜色
                color: function (params) {
                  var colorList = [
                    '#C1232B',
                    '#B5C334',
                    '#FCCE10',
                    '#E87C25',
                    '#27727B',
                    '#FE8463',
                    '#9BCA63',
                    '#FAD860',
                    '#F3A43B',
                    '#60C0DD',
                    '#D7504B',
                    '#C6E579',
                    '#F4E001',
                    '#F0805A',
                    '#26C0C0',
                    '#C1232B',
                    '#B5C334',
                    '#FCCE10',
                    '#E87C25',
                    '#27727B',
                    '#FE8463',
                    '#9BCA63',
                    '#FAD860',
                    '#F3A43B',
                  ]
                  return colorList[params.dataIndex]
                }
              }
            }
          }
        ],

        tooltip: {
          show: true
        }
        // 工具栏提示
        // toolbox: {
        //   show: true,
        //   feature: {
        //     saveAsImage: {
        //       show: true
        //     }
        //   }
        // }
      }
      sigChart.setOption(optionBar)
      window.addEventListener('resize', () => sigChart.resize())

    }
  }
}
</script>
<style lang="scss" scoped>
// 入场效果
/*
.sigMian {
  background: #000000;
  background-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"%3E%3Cg fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.4"%3E%3Cpath opacity=".5" d="M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z"/%3E%3Cpath d="M6 5V0H5v5H0v1h5v94h1V6h94V5H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E');
}

.preview {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
.preview circle {
  stroke: #4DD0E1;
}

.circle {
  transform-origin: center;
}
#arc1 {
  stroke-dasharray: 30;
  stroke-dashoffset: 18;
  animation: 10s -2s rota infinite linear;
}
#arc3 {
  stroke-dasharray: 400;
  stroke-dashoffset: 400;
  animation: 16s 1s rota infinite linear;
}
#arc4 {
  stroke-dasharray: 400;
  stroke-dashoffset: 400;
  animation: 6s 1s rota infinite linear reverse;
}
#arc5 {
  stroke-dasharray: 400;
  stroke-dashoffset: 400;
  animation: 4s 1s rota infinite linear;
}
#arc6 {
  stroke-dasharray: 400;
  stroke-dashoffset: 400;
  animation: 8s 1s rota infinite linear alternate;
}
#arc7 {
  stroke-dasharray: 400;
  stroke-dashoffset: 400;
  animation: 4s 1s rota infinite linear reverse;
}
text {
  fill: #ffffff;
  font: bold 24px sans-serif;
}
@keyframes rota {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
*/
// 入场效果end

.sigMian {
  // background-color: #061436;
  min-height: 790px;
  color: white;
  padding-top: 10px;
  padding-left: 55px;
  padding-bottom: 30px;
  padding-right: 55px;

  // background-color: #061436;
  background-image: url(./images/bg.jpg);

  // background-repeat: repeat;
  // background-size: cover;
  background-size: 100% 100%;
  // background-position: center center;
}
.sigDiv {
  position: relative;

  // background-color: #13CE66;
  min-height: 285px;
  margin-top: 10px;
  padding: 10px 10px;
  border: 1px solid #1890ff;
  border-radius: 5px;
  box-shadow: 0px 0px 10px 3px #1890ff inset;
}
.infoDiv {
  // border: 1px solid red;
  // display: flex;
  // justify-content: space-between;
  height: 30%;
  border: 1px solid red;

  position: relative;
}
.statDiv {
  width: 20%;

  position: absolute;
  top: 10px;
  left: 15px;
}
.sigLabel {
  height: 96px;
  border: 1px solid #1890ff;
  position: relative;
  box-shadow: 0px 0px 5px 1px #1890ff inset;
}

.sigLabelImg {
  position: absolute;
}
.sigLabelImg:first-of-type {
  top: -2px;
  left: -2px;
}
.sigLabelImg:nth-child(2) {
  top: -2px;
  right: -2px;
}
.sigLabelImg:nth-child(3) {
  bottom: -2px;
  right: -2px;
}
.sigLabelImg:nth-child(4) {
  bottom: -2px;
  left: -2px;
}

.sigTitle {
  position: relative;
  height: 35px;
  margin-top: 5px;
  margin-left: 10px;
}
.sigTitle span {
  color: #fff;
  font-size: 18px;
  line-height: 35px;
}
.tablesIMG {
  width: 457px;
  position: absolute;
  left: 0;
  bottom: 0;
}
.chartsIMG {
  width: 500px;
  // width: 55%;
  position: absolute;
  left: 0;
  bottom: 0;
}

.sigNumsp {
  font-size: 18px;
  font-weight: 800;
}
.sigNum {
  font-size: 24px;
  font-weight: 1000;
  color: #0796ff;
}

.timeDiv {
  padding-top: 8px;
  text-align: center;
}
.timeDiv span {
  font-size: 28px;
  font-weight: 800;
  line-height: 28px;
  color: #fff;
}
.timeCss {
  display: inline-block;
  border: 1px solid #1890ff;
  border-radius: 5px;
  box-shadow: 0px 0px 5px 1px #1890ff inset;
  // box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3) inset;
  margin: 5px 1px;
  padding: 6px 5px;
}

.timeSpanCss {
}
// ::v-deep .el-table{
//   background-color: #061436 !important;
//   color: white
// }
.sigLabel {
  ::v-deep .el-table__row > td {
    border: none;
  }
  ::v-deep .el-table::before {
    //去掉最下面的那一条线
    height: 0px;
  }
  ::v-deep .el-table__body-wrapper::-webkit-scrollbar {
    /*width: 0;宽度为0隐藏*/
    width: 0px;
  }
}

.sigDiv {
  ::v-deep .el-table__body-wrapper::-webkit-scrollbar {
    height: 0px;
  }
  ::v-deep .el-table__body-wrapper::-webkit-scrollbar-thumb {
    background-color: #dfe6ec;
    border-radius: 10px;
  }
  // ::v-deep .el-table__body-wrapper::-webkit-scrollbar-thumb {
  //   border-radius: 0px;
  //   height: 0px;
  //   background: #eee;
  // }
  // ::v-deep .el-table__body-wrapper::-webkit-scrollbar-track {
  //   box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  //   border-radius: 0px;
  //   background: rgba(0, 0, 0, 0);
  // }
}

::v-deep .el-table .cell {
  line-height: 16px;
}
::v-deep .el-table,
::v-deep .el-table__expanded-cell {
  background-color: rgba(255, 255, 255, 0);
}
::v-deep .el-table .cell {
  padding-left: 0px;
  padding-right: 0px;
}
::v-deep .el-table th,
::v-deep .el-table td {
  padding: 0 0;
}
::v-deep .el-table--border th:first-child .cell,
::v-deep .el-table--border td:first-child .cell {
  padding-left: 0px;
}
::v-deep .el-table--medium th,
::v-deep .el-table--medium td {
  padding: 0 0;
}
::v-deep .el-table th,
::v-deep .el-table tr {
  background-color: rgba(255, 255, 255, 0);
  color: white;
  // font-weight: 1000;
}
::v-deep .el-table tbody tr:hover > td {
  background-color: rgba(255, 255, 255, 0);
}

// ::v-deep .el-table__body-wrapper::-webkit-scrollbar {
//   /*width: 0;宽度为0隐藏*/
//   // width: 0px;
//   background: rgba(255, 255, 255, 0);
// }
::v-deep .gutter {
  // width: 0px !important;
}
</style>
