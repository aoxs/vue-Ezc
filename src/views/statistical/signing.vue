<template>
  <div class="dashboard-editor-container">
    <div style="background-color: #fff">
      <div style="padding:20px 10px;display:flex;justify-content: space-around">
        <div>英联E征拆签约实时统计</div>
        <div>{{ nowDate }}</div>
        <div>已签约：xx/xx</div>
        <div>占比：50%</div>
      </div>
    <el-button type="primary" size="default" @click="aaa">确定</el-button>
    
    
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      nowDate: "", // 当前日期
    };
  },
  methods: {
    aaa(){
      var dd = new Date();
      console.log(dd)
      console.log(this.nowDate)
    },
    currentTime() {
      setInterval(this.formatDate, 100);
    },
    formatDate() {

      let date = new Date();
      
      let year = date.getFullYear(); // 年
      let month = date.getMonth() + 1; // 月
      let day = date.getDate(); // 日
      let week = date.getDay(); // 星期
      let weekArr = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
      let hour = date.getHours();
      hour = hour < 10 ? "0" + hour : hour; //补零
      let minute = date.getMinutes();
      minute = minute < 10 ? "0" + minute : minute; //补零
      let second = date.getSeconds();
      second = second < 10 ? "0" + second : second; //补零
      this.nowDate = `${year}/${month}/${day} ${hour}:${minute}:${second} ${weekArr[week]}`;
    }
  },
  created() {
    
  },
  mounted() {
    this.currentTime();

  },
  // 销毁定时器
  beforeDestroy() {
    if (this.formatDate) {
      clearInterval(this.formatDate); // 在Vue实例销毁前，清除时间定时器
    }
  }
}
 </script>
<style lang="scss" scoped>
</style>