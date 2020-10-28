<template>
  <div class="table"
       style="">
    <el-header height="56px"
               style=""
               class="tabHeader">
      <!-- Header content -->
      <!-- <div style="display:flex">

        <el-input placeholder="请输入内容"
                  v-model="roleSearchInput"
                  @change="">
          <template slot="prepend">角色名称:</template>
        </el-input>
        <el-button type="primary"
                   size="mini"
                   @click="roleNameCheck">查询</el-button>
      </div> -->
      <div style="display:flex;justify-content: space-between;">
        <p style="padding: 0;margin: 0;line-height: 36px;">角色</p>
        <div>
          <el-button type="success"
                     size="small"
                     @click="determine">
            <i class="el-icon-plus" />
            新建
          </el-button>
          <el-button type="danger"
                     size="small"
                     @click="determine">
            <i class="el-icon-delete" />
            删除
          </el-button>
        </div>

      </div>

    </el-header>
    <!--                
            <div style="display:flex">

              <el-input placeholder="请输入内容"
                        v-model="roleSearchInput"
                        @change="">
                <template slot="prepend">角色名称:</template>
              </el-input>
              <el-button type="mini"
                         size="default"
                         @click="">查询</el-button>
            </div> -->
    <el-table :data="roleTableData1"
              border
              stripe
              style="margin:10px auto;width:90%"
              tooltip-effect="dark"
              highlight-current-row
              @row-click="rowClick">
      <el-table-column label
                       width="35">
        <template slot-scope="scope">
          <el-radio :label="scope.row.title"
                    v-model="radioId"></el-radio>
        </template>
      </el-table-column>
      <el-table-column prop="title"
                       label="角色名称"
                       width="">
      </el-table-column>
    </el-table>
    <div style="width: 100%; padding: 5px 10px">
      <div class="pagRight">
        <el-pagination @size-change="handleSizeChange"
                       @current-change="handleCurrentChange"
                       background
                       :page-size="5"
                       layout="total, prev, pager, next"
                       :total="roleTableData1.length">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RoleGroup',
  data() {
    return {
      
      roleTableData1: [
        { title: "abc1" },
        { title: "abc2" },
        { title: "abc3" },
        { title: "abc4" },
        { title: "abc5" },
        { title: "abc6" },
        { title: "abc7" }
      ],
    }
  },
  methods: {
    roleNameCheck() {
      console.log(this.roleSearchInput)
    },
    rowClick(row) {
      this.radioId = row.title
      console.log(row.title)
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    
  }
}
</script>

<style scoped>
.pagRight {
  /* background-color: #0ff; */
  display: flex;

  flex-direction: row-reverse;
}
.table {
  border-radius: 10px;
  border: 1px solid #dddddd;
  padding-bottom: 40px;
  /* padding: 5px 5px; */
  overflow: hidden;
}
.tabHeader {
  background-color: #f5f5f5;
  padding: 10px 10px;
  padding-left: 20px;
  border-bottom: 1px solid #a5a5a5;
  font-size: 16px;
  font-weight: 700;
}
</style>