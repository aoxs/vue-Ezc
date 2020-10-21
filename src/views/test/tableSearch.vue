<template>
  <div class="contentpanel-layout">
    <div class="contentview-layout bottom-in">
      <div class="contentview-main"
           style="padding: 10px 0px 10px 10px;">
        <div class="search-box"
             style="width:80%;margin:0 auto;">
          <!-- <el-popover placement="bottom" :width="width" v-model="visible" trigger="manual"> -->
          <div slot="reference">
            <el-input placeholder="请输入内容"
                      v-model="search"
                      @focus="handleFocus"
                      @blur="handleBlur"></el-input>
          </div>
          <el-table :data="list"
                    height=""
                    @row-click="onClickItem"
                    @row-dblclick="onDblClickSelect">
            <el-table-column prop="date"
                             label="日期"></el-table-column>
            <el-table-column prop="name"
                             label="姓名"></el-table-column>
            <el-table-column prop="address"
                             label="地址"></el-table-column>
          </el-table>

          <!-- </el-popover> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      width: 600,
      height: 300,
      visible: false,
      search: "",
      list: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "章小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "李小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        }
      ]
    }
  },
  computed: {
    tables: function () {
      var search = this.search;
      if (search) {
        return this.tableData.filter(function (dataNews) {
          return Object.keys(dataNews).some(function (key) {
            return String(dataNews[key]).toLowerCase().indexOf(search) > -1
          })
        })
      }
      return this.tableData
    }
  },
  methods: {
    handleFocus() {
      // this.visible = true;
    },
    handleBlur() {
      // this.visible = false;
    },
    onClickItem(row) {
      this.search = row.name;
      // this.visible = false;
    }
  }
}
</script>
