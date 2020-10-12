<template>
  <div class="A">
    <p class="comTitle">每日进度</p>

    <div>
      <el-table
        :data="daysProData"
        style="width: 100%; margin: 0 auto"
        stripe
        tooltip-effect="dark"
      >
        <el-table-column prop="title" label="" width="" show-overflow-tooltip />
        <el-table-column
          prop="a"
          label="农用地"
          width=""
          align="center"
          show-overflow-tooltip
        />
        <el-table-column
          prop="b"
          label="其他"
          width=""
          align="center"
          show-overflow-tooltip
        />
        <el-table-column
          prop="c"
          label="私宅"
          width=""
          align="center"
          show-overflow-tooltip
        />
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      daysProData: [
        { title: "权属登记", a: "0", b: "0", c: "0" },
        { title: "测绘清点", a: "0", b: "0", c: "0" },
        { title: "评估报告", a: "0", b: "0", c: "0" },
        { title: "签约", a: "0", b: "0", c: "0" },
        { title: "移交", a: "0", b: "0", c: "0" },
        { title: "补偿款支付", a: "0", b: "0", c: "0" },
        { title: "清场移交", a: "0", b: "0", c: "0" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.A {
  background-color: #fff;
}
.comTitle {
  margin: 0;
  font-size: 18px;
  padding: 10px 15px;
  border-bottom: 1px solid #d8d8d8;
}
</style>