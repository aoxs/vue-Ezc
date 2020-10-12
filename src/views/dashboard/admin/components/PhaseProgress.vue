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
        <!-- <div id="c1" style="height: 70px; width: 100px" /> -->
        {{ProItems}}
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
  methods: {
    
  },
};
</script>

<style scoped>
.A {
  background-color: #fff;
}
.pro_div {
  /* marign:10px 10px; */
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
