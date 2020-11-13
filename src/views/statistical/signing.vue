<template>
  <div class="dashboard-editor-container">
    <i class="el-icon-s-platform" id="full_screen" />
    <div style="background-color: #fff;border: 1px solid #DADADA;"
         id="signing">
      <div style="padding:20px 10px;display:flex;justify-content: space-around;background-color:#F5F5F5;border-bottom:1px solid #DADADA">
        <div>英联E征拆签约实时统计</div>
        <div>{{ nowDate }}</div>
        <div>已签约：xx/xx</div>
        <div>占比：50%</div>
      </div>
      <!-- <el-button type="primary" size="default" @click="aaa">确定</el-button> -->
      <el-table :data="tableData"
                border
                stripe
                style="margin:10px auto;width:98%">
        <el-table-column prop="sigTeam"
                         label="小组"
                         width="">
        </el-table-column>
        <el-table-column prop="sigPeople"
                         label="权利人"
                         width="">
        </el-table-column>
        <el-table-column prop="sigDate"
                         label="签约时间"
                         width="">
        </el-table-column>
        <el-table-column prop="sigPhoto"
                         label="签约照片"
                         width="">
          <template slot-scope="scope">
            　　　　<img :src="scope.row.sigPhoto"
                 width="100%" />
            　　</template>
        </el-table-column>
        <el-table-column prop="sigRanking"
                         label="排名"
                         width="">
        </el-table-column>

      </el-table>

    </div>
  </div>
</template>
<script>
import screenfull from "screenfull"; 
export default {
  
  data() {
    return {
      isFullscreen: false,
      Server_Date: '',
      nowDate: "", // 当前日期
      tableData: [
        { sigTeam: '一组', sigPeople: "张三", sigDate: "这里是上传时间", sigPhoto: "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aoxs/4eec6c80-0aa9-11eb-b244-a9f5e5565f30.png", sigRanking: 23 },
        { sigTeam: '二组', sigPeople: "李四", sigDate: "这里是上传时间", sigPhoto: "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aoxs/4eec6c80-0aa9-11eb-b244-a9f5e5565f30.png", sigRanking: 22 },
      ],
    };
  },
  methods: {
    currentTime() {
      setInterval(this.formatDate, 100);
    },
    formatDate() {
      let date = new Date()
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
    const element = document.getElementById('signing');
    document.getElementById('full_screen').addEventListener('click', () => {
     
      if (screenfull.enabled) {
        screenfull.request(element); // 元素全屏
      }
    });

  },

  beforeDestroy() {
    if (this.formatDate) {
      clearInterval(this.formatDate); //清除时间定时器
    }
  }
}
 </script>
<style lang="scss" scoped>

</style>