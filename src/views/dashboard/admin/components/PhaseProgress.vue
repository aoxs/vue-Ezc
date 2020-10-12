<template>
  <div class="A">
    <div class="pro_div">
      <!-- 头部 -->
      <p class="comTitle">
        <span>阶段进度</span>
        <el-radio-group v-model="ProItems" class="RidioGroup">
          <el-radio-button label="1"> 集体农用地 </el-radio-button>
          <el-radio-button label="2"> 其他物业 </el-radio-button>
          <el-radio-button label="3"> 私人住宅 </el-radio-button>
        </el-radio-group>
      </p>
      <!-- 头部end -->

      <!-- 主体内容 -->
      <div>
        <!-- {{ ProItems }} -->
        <el-row :gutter="0" style="padding:10px 10px">
          <el-col :span="8" :offset="0">
            <div
              id="charts1"
              :style="{
                width: '100%',
                height: '250px',
                border: '1px solid red',
              }"
            ></div>
          </el-col>
          <el-col :span="8" :offset="0">
            <div
              id="charts2"
              :style="{
                width: '100%',
                height: '250px',
                border: '1px solid red',
              }"
            ></div>
          </el-col>
          <el-col :span="8" :offset="0">
            <div
              id="charts3"
              :style="{
                width: '100%',
                height: '250px',
                border: '1px solid red',
              }"
            ></div>
          </el-col>
          <el-col :span="8" :offset="0">
            <div
              id="charts4"
              :style="{
                width: '100%',
                height: '250px',
                border: '1px solid red',
              }"
            ></div>
          </el-col>
          <el-col :span="8" :offset="0">
            <div
              id="charts5"
              :style="{
                width: '100%',
                height: '250px',
                border: '1px solid red',
              }"
            ></div>
          </el-col>
          <el-col :span="8" :offset="0">
            <div
              id="charts6"
              :style="{
                width: '100%',
                height: '250px',
                border: '1px solid red',
              }"
            ></div>
          </el-col>
        </el-row>
      </div>

      <!-- 主体内容end -->
    </div>
  </div>
</template>

<script>
import echarts from "echarts";

export default {
  data() {
    return {
      ProItems: "1",
      ProItemsData: [{}],
    };
  },
  mounted() {
    this.chbb();
  },

  methods: {
    chbb() {
      var myChart1 = echarts.init(document.getElementById("charts1"));
      var myChart2 = echarts.init(document.getElementById("charts2"));
      var myChart3 = echarts.init(document.getElementById("charts3"));
      var myChart4 = echarts.init(document.getElementById("charts4"));
      var myChart5 = echarts.init(document.getElementById("charts5"));
      var myChart6 = echarts.init(document.getElementById("charts6"));
      let option = {
        title: {
          text: "test",
        },
        xAxis: {
          type: "category",

          // data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          axisTick: {
            show: false,
          },
        },
        series: [
          {
            data: [20, 66, 81, 14, 21],
            type: "bar",
            barWidth: 20,
          },
        ],
      };
      myChart1.setOption(option);
      myChart2.setOption(option);
      myChart3.setOption(option);
      myChart4.setOption(option);
      myChart5.setOption(option);
      myChart6.setOption(option);
    },
  },
};
</script>

<style scoped>
.A {
  background-color: #fff;
}

.comTitle {
  margin: 0;
  height: 56px;
  line-height: 36px;
  /* font-size: 18px; */
  padding: 10px 15px;
  border-bottom: 1px solid #d8d8d8;
  position: relative;
}
.comTitle > span {
  /* margin: 0; */
  /* height: 56px; */
  /* line-height: 36px; */
  font-size: 18px;
  /* padding: 10px 15px; */
  /* border-bottom: 1px solid #d8d8d8; */
  /* position: relative; */
}
.RidioGroup {
  position: absolute;
  right: 20px;
}
</style>
