<template>
  <div class="pro_select">
    <el-select v-model="proCheck" style="width: 100%" @change="checkClick">
      <el-option
        v-for="item in proNames"
        :key="item.value"
        :label="item.label"
        :value="item.id"
      />
    </el-select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      proCheck: '',
      proNames: []
    }
  },
  created() {},
  mounted() {
    this.axios.get('/ProjectQuery').then((res) => {
      this.proNames = res.data
      this.proCheck = this.proNames[0].label
    })
  },
  methods: {
    checkClick() {
      // 下拉框,选择触发
      console.log(this.proCheck)
      if (this.proCheck == 136) {

      }
    }
  }
}
</script>

<style scoped>
.pro_select {
  float: left;
  width: 20%;
  margin-top: 7px;
}
</style>
