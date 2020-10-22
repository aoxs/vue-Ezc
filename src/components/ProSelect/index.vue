<template>
  <div class="pro_select">
    <el-select  v-model="proCheck"  @change="checkClick" style="width: 100%">
      <el-option
        v-for="item in proNames"
        :key="item.value"
        :label="item.title"
        :value="item.id"
       
      >
      </el-option>
    </el-select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      proCheck: "",
      proNames: [
        { id: 1, title: "滨海湾新区威远岛土地整备" },
        { id: 2, title: "水乡新城片区首期土地整备" },
        { id: 3, title: "黄江项目" },
        { id: 4, title: "公明轨道13号线及沿线(含车辆段)项目" },
      ],
    };
  },
  created() {
    this.proCheck = this.proNames[0].title
  },
  methods:{
     checkClick(){
      // 下拉框,选择触发
      console.log(this.proCheck)
    }
  }
};
</script>

<style scoped>
.pro_select {
  float: left;
  width: 20%;
  margin-top: 7px;
}
</style>