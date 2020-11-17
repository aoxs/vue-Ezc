<template>
  <div class="dashboard-editor-container">
    <div style="background-color: #fff;border: 1px solid #DADADA;">
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
           class="sigMian">
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
        <div style="width:100%; padding:0px 10px; position: relative;">
          <p style="text-align:center;margin:0px;margin-top:10px;margin-bottom:20px;font-size:24px">英联E征拆签约平台</p>
          <svg-icon style="font-size:16px;position: absolute;top:15px;right: 0px;"
                    icon-class="fullscreen"
                    id="full_screen" />
          <div class="infoDiv">
            <!-- <el-row :gutter="20">
            <el-col :span="8"> -->

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
              <!-- <img style="position: absolute;top:0px;left:0px;width: 100%;" src="./images/bnt.png" alt=""> -->
              <span style="font-weight: 800">已签约 &nbsp;<span class="sigNum">{{b}}/{{a}}</span></span>
            </div>
            <!-- </el-col>
            <el-col :span="8"> -->
            <div class="timeDiv">
              <span class="timeCss">{{nowDateArr[0]}}</span>
              <span class="timeCss">{{nowDateArr[1]}}</span>
              <span class="timeCss">{{nowDateArr[2]}}</span>
              <span class="timeCss">{{nowDateArr[3]}}</span>
              <span class="timeCss">年</span>
              <span class="timeCss">{{nowDateArr[4]}}</span>
              <span class="timeCss">{{nowDateArr[5]}}</span>
              <span class="timeCss">月</span>
              <span class="timeCss">{{nowDateArr[6]}}</span>
              <span class="timeCss">{{nowDateArr[7]}}</span>
              <span class="timeCss">日</span>
              <br>
              <span class="timeCss">{{nowDateArr[8]}}</span>
              <span class="timeCss">{{nowDateArr[9]}}</span>
              <span class="timeCss">:</span>
              <span class="timeCss">{{nowDateArr[10]}}</span>
              <span class="timeCss">{{nowDateArr[11]}}</span>
              <span class="timeCss">:</span>
              <span class="timeCss">{{nowDateArr[12]}}</span>
              <span class="timeCss">{{nowDateArr[13]}}</span>
              &nbsp;
              <span class="timeCss">星</span>
              <span class="timeCss">期</span>
              <span class="timeCss">{{nowDateArr[14]}}</span>
            </div>

            <!-- </el-col>
            <el-col :span="8"> -->
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
              占比：50%
            </div>
            <!-- </el-col>
          </el-row> -->
          </div>
        </div>
        <!-- header end -->

        <!-- 数据 -->
        <el-row :gutter="20">

          <el-col :span="10">
            <div class="sigDiv">
              <img src="./images/ksh42.png"
                   style="position: absolute;top: -2px;left:-2px"
                   alt="">
              <img src="./images/ksh43.png"
                   style="position: absolute;top: -2px;right:-2px"
                   alt="">
              <img src="./images/ksh44.png"
                   style="position: absolute;bottom: -2px;right:-2px"
                   alt="">
              <img src="./images/ksh45.png"
                   style="position: absolute;bottom: -2px;left:-2px"
                   alt="">
              <div class="sigTitle">
                <span>签约实时统计图</span>
                <img src="./images/ksh31.png"
                     alt=""
                     class="chartsIMG">
              </div>
              <div id="charts1"
                   :style="{
                width: '100%',
                height: '400px',}"></div>
            </div>

          </el-col>
          <el-col :span="14"
                  :offset="0">
            <div class="sigDiv">

              <img src="./images/ksh42.png"
                   style="position: absolute;top: -2px;left:-2px"
                   alt="">
              <img src="./images/ksh43.png"
                   style="position: absolute;top: -2px;right:-2px"
                   alt="">
              <img src="./images/ksh44.png"
                   style="position: absolute;bottom: -2px;right:-2px"
                   alt="">
              <img src="./images/ksh45.png"
                   style="position: absolute;bottom: -2px;left:-2px"
                   alt="">
              <div class="sigTitle">
                <span>签约实时统计表</span>
                <img src="./images/ksh33.png"
                     alt=""
                     class="tablesIMG">
              </div>
              <el-table :data="tableData"
                        border
                        height="250"
                        style="margin:10px auto;width:98%; height: 300px;">
                <el-table-column prop="sigTeam"
                                 label="小组"
                                 min-width="65"
                                 align="center">
                </el-table-column>
                <el-table-column prop="sigPeople"
                                 label="协议编号"
                                 min-width="80"
                                 align="center">
                </el-table-column>
                <el-table-column prop="sigPeople"
                                 label="权利人"
                                 min-width="80"
                                 align="center">
                </el-table-column>
                <el-table-column prop="sigDate"
                                 label="签约时间"
                                 min-width="170"
                                 align="center">
                </el-table-column>
                <el-table-column prop="sigPhoto"
                                 label="签约照片"
                                 min-width="180"
                                 align="center">
                  <template slot-scope="scope">
                    <el-image :src="scope.row.sigPhoto"
                              :preview-src-list="scope.row.sigPhotoBig"
                              fit="contain"
                              :lazy="true"
                              style="width:150px;max-height:60px"></el-image>
                  </template>
                </el-table-column>
                <el-table-column prop="sigRanking"
                                 label="排名"
                                 min-width="70"
                                 align="center">
                </el-table-column>

              </el-table>
            </div>

          </el-col>

        </el-row>
        <!-- 数据end -->
        <!-- </div> -->

      </div>
      <!-- 全屏内容end   -->
    </div>
  </div>
</template>
<script>
// import './css/signing.css'
import screenfull from "screenfull";
import echarts from 'echarts'
// require('echarts/theme/macarons') // echarts theme
// import resize from './mixins/resize'



// const exampleData = new Array(10).fill({
//   sigTeam: '一组', sigPeople: "张三", sigDate: "2020/11/13 17:24:09", sigPhoto: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605265475394&di=cc189a0837db9dd2cc43a148d08cb440&imgtype=0&src=http%3A%2F%2Fimg.douyucdn.cn%2Fdata%2Fyuba%2Fdefault%2Fc8%2F71%2Fc8713a3e8bb567790cd742af3b981e71831bd1c7e6eb.jpg", sigPhotoBig: ["https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605265475394&di=cc189a0837db9dd2cc43a148d08cb440&imgtype=0&src=http%3A%2F%2Fimg.douyucdn.cn%2Fdata%2Fyuba%2Fdefault%2Fc8%2F71%2Fc8713a3e8bb567790cd742af3b981e71831bd1c7e6eb.jpg"], sigRanking: 23
// });

export default {
  data() {
    return {
      a: 600,
      b: 320,
      windowHeight: document.documentElement.clientHeight,  //实时元素高度
      PageStarted: true,
      sigChartsTotal: 80,
      sigAccounted: 60,
      sigChartsData: [20, 8, 51, 70, 72, 80, 66],
      srcList: [],
      isFullscreen: false,
      Server_Date: '',
      nowDate: "", // 当前日期时间
      nowDateArr: [],
      tableData: [
        {
          sigTeam: '一组', sigPeople: "张三", sigDate: "2020/11/13 17:24:09", sigPhoto: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605265475394&di=cc189a0837db9dd2cc43a148d08cb440&imgtype=0&src=http%3A%2F%2Fimg.douyucdn.cn%2Fdata%2Fyuba%2Fdefault%2Fc8%2F71%2Fc8713a3e8bb567790cd742af3b981e71831bd1c7e6eb.jpg", sigPhotoBig: ["https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605265475394&di=cc189a0837db9dd2cc43a148d08cb440&imgtype=0&src=http%3A%2F%2Fimg.douyucdn.cn%2Fdata%2Fyuba%2Fdefault%2Fc8%2F71%2Fc8713a3e8bb567790cd742af3b981e71831bd1c7e6eb.jpg"], sigRanking: 23
        },
        {
          sigTeam: '二组', sigPeople: "李四", sigDate: "2020/11/13 17:24:09", sigPhoto: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605265502127&di=3f5c2aed2b54d5ea04990dfa0abb8162&imgtype=0&src=http%3A%2F%2Fpic.rmb.bdstatic.com%2Fd71c42fe1838bedcb40463db99b7c944.jpeg",
          sigPhotoBig: ["https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605265502127&di=3f5c2aed2b54d5ea04990dfa0abb8162&imgtype=0&src=http%3A%2F%2Fpic.rmb.bdstatic.com%2Fd71c42fe1838bedcb40463db99b7c944.jpeg"], sigRanking: 22
        },
        {
          sigTeam: '二组', sigPeople: "李四", sigDate: "2020/11/13 17:24:09", sigPhoto: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605265502127&di=3f5c2aed2b54d5ea04990dfa0abb8162&imgtype=0&src=http%3A%2F%2Fpic.rmb.bdstatic.com%2Fd71c42fe1838bedcb40463db99b7c944.jpeg",
          sigPhotoBig: ["https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605265502127&di=3f5c2aed2b54d5ea04990dfa0abb8162&imgtype=0&src=http%3A%2F%2Fpic.rmb.bdstatic.com%2Fd71c42fe1838bedcb40463db99b7c944.jpeg"], sigRanking: 22
        },
        {
          sigTeam: '二组', sigPeople: "李四", sigDate: "2020/11/13 17:24:09", sigPhoto: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605265502127&di=3f5c2aed2b54d5ea04990dfa0abb8162&imgtype=0&src=http%3A%2F%2Fpic.rmb.bdstatic.com%2Fd71c42fe1838bedcb40463db99b7c944.jpeg",
          sigPhotoBig: ["https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605265502127&di=3f5c2aed2b54d5ea04990dfa0abb8162&imgtype=0&src=http%3A%2F%2Fpic.rmb.bdstatic.com%2Fd71c42fe1838bedcb40463db99b7c944.jpeg"], sigRanking: 22
        },
        {
          sigTeam: '二组', sigPeople: "李四", sigDate: "2020/11/13 17:24:09", sigPhoto: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605265475394&di=cc189a0837db9dd2cc43a148d08cb440&imgtype=0&src=http%3A%2F%2Fimg.douyucdn.cn%2Fdata%2Fyuba%2Fdefault%2Fc8%2F71%2Fc8713a3e8bb567790cd742af3b981e71831bd1c7e6eb.jpg",
          sigPhotoBig: ["https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605265475394&di=cc189a0837db9dd2cc43a148d08cb440&imgtype=0&src=http%3A%2F%2Fimg.douyucdn.cn%2Fdata%2Fyuba%2Fdefault%2Fc8%2F71%2Fc8713a3e8bb567790cd742af3b981e71831bd1c7e6eb.jpg"], sigRanking: 22
        },
        {
          sigTeam: '二组', sigPeople: "李四", sigDate: "2020/11/13 17:24:09", sigPhoto: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605265475394&di=cc189a0837db9dd2cc43a148d08cb440&imgtype=0&src=http%3A%2F%2Fimg.douyucdn.cn%2Fdata%2Fyuba%2Fdefault%2Fc8%2F71%2Fc8713a3e8bb567790cd742af3b981e71831bd1c7e6eb.jpg",
          sigPhotoBig: ["https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605265475394&di=cc189a0837db9dd2cc43a148d08cb440&imgtype=0&src=http%3A%2F%2Fimg.douyucdn.cn%2Fdata%2Fyuba%2Fdefault%2Fc8%2F71%2Fc8713a3e8bb567790cd742af3b981e71831bd1c7e6eb.jpg"], sigRanking: 22
        },
        {
          sigTeam: '二组', sigPeople: "李四", sigDate: "2020/11/13 17:24:09", sigPhoto: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605265475394&di=cc189a0837db9dd2cc43a148d08cb440&imgtype=0&src=http%3A%2F%2Fimg.douyucdn.cn%2Fdata%2Fyuba%2Fdefault%2Fc8%2F71%2Fc8713a3e8bb567790cd742af3b981e71831bd1c7e6eb.jpg",
          sigPhotoBig: ["https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605265475394&di=cc189a0837db9dd2cc43a148d08cb440&imgtype=0&src=http%3A%2F%2Fimg.douyucdn.cn%2Fdata%2Fyuba%2Fdefault%2Fc8%2F71%2Fc8713a3e8bb567790cd742af3b981e71831bd1c7e6eb.jpg"], sigRanking: 22
        },
      ],

    };
  },
  watch: {
    // windowWidth(val) {
    //   console.log("宽度", val, this.windowWidth)
    // },
    windowHeight(val) {
      console.log("高度", val, this.windowHeight)
    },
  },
  methods: {


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
      setInterval(this.formatDate, 100);
    },
    formatDate() {
      let date = new Date()
      let year = date.getFullYear(); // 年
      let month = date.getMonth() + 1; // 月
      let day = date.getDate(); // 日
      let week = date.getDay(); // 星期
      let weekArr = ["日", "一", "二", "三", "四", "五", "六"];
      let hour = date.getHours();
      hour = hour < 10 ? "0" + hour : hour; //补零
      let minute = date.getMinutes();
      minute = minute < 10 ? "0" + minute : minute; //补零
      let second = date.getSeconds();
      second = second < 10 ? "0" + second : second; //补零
      this.nowDate = `${year}${month}${day}${hour}${minute}${second}${weekArr[week]}`;
      this.nowDateArr = this.nowDate.split("")
    },

    sigCharts() {

      var sigChart = echarts.init(document.getElementById("charts1"));
      let option = {
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
        xAxis: {
          type: "category",
          data: ['一组', '二组', '三组', '四组', '五组', '六组', '七组'],
          axisLabel: {
            show: true,
            textStyle: {
              color: "#fff"
            }
          },
          axisLine: {
            lineStyle: {
              color: "#fff"
            }
          }
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            show: true,
            textStyle: {
              color: "#fff"
            }
          },
          axisLine: {
            lineStyle: {
              color: "#fff"
            }
          }
        },
        series: [
          {
            type: "bar",
            data: this.sigChartsData,

            label: {
              show: true,
              position: 'insideBottom',
              formatter: '已签约\n{c}/' + this.sigChartsTotal + '\n\n占比\n' + this.sigAccounted + '%'
            },
            itemStyle: {
              //通常情况下：
              normal: {
                //每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组中的颜色
                color: function (params) {
                  var colorList = [
                    '#C1232B', '#B5C334', '#FCCE10', '#E87C25', '#27727B',
                    '#FE8463', '#9BCA63', '#FAD860', '#F3A43B', '#60C0DD',
                    '#D7504B', '#C6E579', '#F4E001', '#F0805A', '#26C0C0'
                  ];
                  return colorList[params.dataIndex];
                },


              },
            },
          },

        ],

        tooltip: {
          show: true
        },
        //工具栏提示
        // toolbox: {
        //   show: true,
        //   feature: {
        //     saveAsImage: {
        //       show: true
        //     }
        //   }
        // }
      };
      sigChart.setOption(option);
      window.onresize = sigChart.resize;
    },

  },
  created() {
    // this.play()
    // setTimeout( ()=>{
    //  this.PageStarted = false
    //  },3000 )

  },
  mounted() {





    // window.onresize = () => {
    //   return (() => {
    //     window.fullHeight = document.getElementById('signing').clientHeight;
    //     window.fullWidth = document.getElementById('signing').clientWidth;
    //     this.windowHeight = window.fullHeight;  // 高
    //     this.windowWidth = window.fullWidth; // 宽
    //   })()
    // };

    this.currentTime();
    const element = document.getElementById('signing');
    document.getElementById('full_screen').addEventListener('click', () => {
      if (screenfull.enabled) {
        screenfull.request(element); // 元素全屏
      }
    });

    this.sigCharts()
  },

  beforeDestroy() {
    if (this.formatDate) {
      clearInterval(this.formatDate); //清除时间定时器
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
  min-height: 750px;
  color: white;
  padding: 10px 30px;
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
  margin-top: 10px;
  padding: 10px 10px;
  border: 1px solid #1890FF;
  border-radius: 5px;
  box-shadow: 0px 0px 10px 3px #1890FF inset;
}
.infoDiv {
  display: flex;
  justify-content: space-between;
}
.sigLabel {
  width: 20%;
  height: 60px;
  line-height: 36px;
  text-align: center;
  border: 1px solid #1890FF;
  padding: 10px 10px;
  margin-top: 10px;
  position: relative;
  box-shadow: 0px 0px 5px 1px #1890FF inset;

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
  width: 320px;
  // width: 55%;
  position: absolute;
  left: 0;
  bottom: 0;
}

.sigNum {
  font-size: 24px;
  font-weight: 1000;
  color: #0796FF;
}
.timeDiv{
  text-align: center;
}
.timeDiv span {
  font-size: 18px;
  font-weight: 700;
  color: #fff;
}
.timeCss {
  display:inline-block;
  border:1px solid #1890FF;
  border-radius: 5px;
  box-shadow: 0px 0px 5px 1px #1890FF inset;
  // box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3) inset;
  margin:5px 1px;
  padding:8px 5px;
  
}

.timeSpanCss {
}
// ::v-deep .el-table{
//   background-color: #061436 !important;
//   color: white
// }
::v-deep .el-table,
::v-deep .el-table__expanded-cell {
  background-color: rgba(255, 255, 255, 0);
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

::v-deep .el-table__body-wrapper::-webkit-scrollbar {
  /*width: 0;宽度为0隐藏*/
  width: 0px;
}
::v-deep .gutter {
  width: 0px !important;
}

// ::v-deep .el-table__body-wrapper::-webkit-scrollbar-thumb {
//   border-radius: 0px;
//   height: 0px;
//   background: #eee;
// }
// ::v-deep .el-table__body-wrapper::-webkit-scrollbar-track {
//   box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
//   border-radius: 0px;
//   background: rgba(0, 0, 0, 0.4);
// }
</style>
