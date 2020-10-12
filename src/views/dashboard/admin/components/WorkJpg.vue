<template>
  <div class="A">
    <p class="comTitle">工作照片</p>
    <el-carousel height="446px" style="padding: 5px 10px;">
      <el-carousel-item v-for="i in Jpg" :key="i">
        <!-- content -->
        <img class="" style="width:100%" :src="i" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Jpg: [
        "http://120.86.117.97:8006/img/20200924114759.jpg",
        "http://120.86.117.97:8006/img/20200924114737.jpg",
        "http://120.86.117.97:8006/img/20200924114755.jpg",
      ]
       
      
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
