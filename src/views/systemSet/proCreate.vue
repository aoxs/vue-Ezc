<template>
  <div class="dashboard-editor-container">
    <div style="background-color: #fff;border:1px solid #DADADA">
      <!-- 顶部搜索 -->
      <div style="display:flex;justify-content:flex-start;background:#F5F5F5;padding:10px 20px;border-bottom:1px solid #DADADA">

        <div style="width:70%;display:flex;justify-content:flex-start;">

          <el-input v-model="input1"
                    placeholder="请输入名称"
                    style="width:30%"
                    slot="">
            <template slot="prepend">
              项目名称:
            </template>
          </el-input>

          <div style="margin-left:20px">
            项目类型:
            <el-select v-model="select1"
                       placeholder="请选择"
                       style="width:130px">
              <el-option v-for="item in option1"
                         :key="item.id"
                         :label="item.label"
                         :value="item.id">

              </el-option>

            </el-select>
          </div>

          <div style="margin-left:20px">
            项目状态:
            <el-select v-model="select2"
                       placeholder="请选择"
                       style="width:130px">
              <el-option v-for="item in option2"
                         :key="item.id"
                         :label="item.label"
                         :value="item.id"></el-option>
            </el-select>
          </div>

        </div>
        <div>
          <el-button type="primary"
                     size="small"
                     @click="changeClick"><i class="el-icon-search" />查询</el-button>
          <el-button type="primary"
                     size="small"
                     @click="resetClick"><i class="el-icon-refresh" />重置</el-button>

        </div>
      </div>
      <!-- 顶部搜索end -->

      <!-- 信息表操作按钮 -->
      <div style="display:flex;justify-content:flex-end;margin-top:20px;margin-bottom:10px;margin-right:10px">

        <el-button type="primary"
                   size="small"
                   @click="createPro">
          <i class="el-icon-circle-plus" />
          新增
        </el-button>
        <el-button type="primary"
                   size="small"
                   @click="editPro">
          <i class="el-icon-edit-outline" />
          编辑
        </el-button>
        <el-button type="primary"
                   size="small"
                   @click="proDelete">
          <i class="el-icon-error" />
          删除
        </el-button>
      </div>
      <!-- 信息表操作按钮end -->
      <!-- 信息表 -->
      <el-table :data="tableData"
                ref="multipleTable"
                style="margin:0 auto;width:98%"
                tooltip-effect="dark"
                @selection-change="handleSelectionChange"
                border
                stripe>

        <el-table-column type="selection"
                         width="45"
                         align="center">
        </el-table-column>
        <!-- <el-table-column prop="proId"
                         label="项目ID"
                         width="65"
                         align="center">
        </el-table-column> -->
        <el-table-column prop="ProName"
                         label="项目名称"
                         width="">
        </el-table-column>
        <el-table-column prop="ProType"
                         label="项目类型"
                         align="center"
                         width=""
                         :formatter="ProType">
        </el-table-column>
        <el-table-column prop="provinces"
                         label="省份"
                         width="">
        </el-table-column>
        <el-table-column prop="city"
                         label="城市"
                         width="">
        </el-table-column>
        <el-table-column prop="county"
                         label="区县"
                         width="">
        </el-table-column>
        <el-table-column prop="located"
                         label="坐落"
                         width="">
        </el-table-column>
        <el-table-column prop="developers"
                         label="开发商"
                         width="">
        </el-table-column>
        <el-table-column prop="gove"
                         label="政府"
                         width="">
        </el-table-column>
        <el-table-column prop="transaction"
                         label="征收事务中心"
                         width="">
        </el-table-column>
        <el-table-column prop="houseNum"
                         label="总户数"
                         align="center"
                         width="">
        </el-table-column>
        <el-table-column prop="coversArea"
                         label="总占地面积(m²)"
                         align="center"
                         width="">
        </el-table-column>
        <el-table-column prop="conArea"
                         label="总建筑面积(m²)"
                         align="center"
                         width="">
        </el-table-column>
        <el-table-column prop="rehousingNum"
                         label="安置房总数量(套)"
                         align="center"
                         width="">
        </el-table-column>
        <el-table-column prop="rehousingArea"
                         label="安置房总面积(m²)"
                         align="center"
                         width="">
        </el-table-column>
        <el-table-column prop="compensation"
                         label="总补偿款(万元)"
                         align="center"
                         width="">
        </el-table-column>
        <el-table-column prop="ProStatus"
                         label="项目状态"
                         align="center"
                         width=""
                         :formatter="ProStatus">
        </el-table-column>

      </el-table>
      <!-- 信息表end -->

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input1: '',
      select1: '',
      select2: '',
      option1: [
        {
          id: '1',
          label: '城市更新'
        }, {
          id: '2',
          label: '土地整备'
        }, {
          id: '3',
          label: '房屋征收'
        }
      ],
      option2: [
        {
          id: '3',
          label: '前期'
        }, {
          id: '4',
          label: '中期'
        }, {
          id: '5',
          label: '后期'
        }
      ],
      multipleSelection: [],
      tableData: [
        { proId: 1, ProName: '水乡新城片区首期土地整备', ProType: '1', provinces: '广东省', city: '东莞市', county: '水乡', located: '广东省东莞水乡', developers: '华夏幸福基业股份有限公司', gove: '滨海湾新区管委会、虎门镇人民政府', transaction: "东莞市滨海湾新区威远岛土地整备现场指挥部", houseNum: 2000, coversArea: 1200000, conArea: 1010000, rehousingNum: 0, rehousingArea: 0, compensation: 0, ProStatus: '1' },
        { proId: 2, ProName: '水乡新城片区首期土地整备', ProType: '4', provinces: '广东省', city: '东莞市', county: '水乡', located: '广东省东莞水乡', developers: '华夏幸福基业股份有限公司', gove: '滨海湾新区管委会、虎门镇人民政府', transaction: "东莞市滨海湾新区威远岛土地整备现场指挥部", houseNum: 2000, coversArea: 1200000, conArea: 1010000, rehousingNum: 0, rehousingArea: 0, compensation: 0, ProStatus: '5' },
        { proId: 3, ProName: '水乡新城片区首期土地整备', ProType: '0', provinces: '广东省', city: '东莞市', county: '水乡', located: '广东省东莞水乡', developers: '华夏幸福基业股份有限公司', gove: '滨海湾新区管委会、虎门镇人民政府', transaction: "东莞市滨海湾新区威远岛土地整备现场指挥部", houseNum: 2000, coversArea: 1200000, conArea: 1010000, rehousingNum: 0, rehousingArea: 0, compensation: 0, ProStatus: '0' }
      ]
    }
  },
  methods: {
    // 查询/重置 按钮
    changeClick() {
      console.log(this.input1)
      console.log(this.select1)
      console.log(this.select2)
      this.$alert('开发中', "提示", {
        confirmButtonText: '确认',
        type: 'info'
      })
    },
    resetClick() {
      this.input1 = ''
      this.select1 = ''
      this.select2 = ''
    },
    // 勾选
    handleSelectionChange(val) {
      this.multipleSelection = val;

      console.log(val)
    },
    // 表格 格式化内容
    ProType(row, column) {
      if (row.ProType == 1) {
        return '房屋征收'
      } else if (row.ProType == 2) {
        return '城市更新'
      } else if (row.ProType == 3) {
        return '土地整备'
      } else if (row.ProType == 4) {
        return '棚户区改造'
      } else if (row.ProType == 5) {
        return '其它'
      } else {
        return '-'
      }
    },
    ProStatus(row, column) {
      if (row.ProStatus == 1) {
        return '前期阶段'
      } else if (row.ProType == 2) {
        return '确权阶段'
      } else if (row.ProType == 3) {
        return '签约阶段'
      } else if (row.ProType == 4) {
        return '移交房屋阶段'
      } else if (row.ProType == 5) {
        return '拆除阶段'
      } else if (row.ProType == 6) {
        return '产权注销阶段'
      } else if (row.ProType == 7) {
        return '档案整理阶段'
      } else if (row.ProType == 8) {
        return '已完成'
      } else {
        return '-'
      }
    },

    // 增删改按钮
createPro(){
  this.$alert('跳转-新增项目', "提示", {
          confirmButtonText: '确认',
          type: 'info'
        })
},
editPro(){
  if (this.multipleSelection.length == 0) {
        this.$alert('未选中项目', "提示", {
          confirmButtonText: '确认',
          type: 'info'
        })
      } else if (this.multipleSelection.length > 1) {
        this.$alert('很抱歉,一次只能选择一条记录', "提示", {
          confirmButtonText: '确认',
          type: 'info'
        })
      } else {
        this.$alert('跳转-编辑项目', "提示", {
          confirmButtonText: '确认',
          type: 'info'
        })
      }
},
    proDelete() {
      if (this.multipleSelection.length == 0) {
        this.$confirm('未选中项目', "提示", {
          confirmButtonText: '确认',
          type: 'info'
        })
      } else {
        this.$confirm('确认删除?', '警告', {
          confirmButtonText: '确认',
          cancelButtonText: '取消',
          type: 'warning'
        })
          .then(() => {
            // console.log(this.multipleSelection[0].proId)
            let j = this.multipleSelection.length
            for (var i = 0; i < j; i++) {
              let id = this.multipleSelection[i].proId
              let _tableData = this.tableData.find(x => x.proId == id)
              console.log(_tableData)
              this.tableData.splice(this.tableData.indexOf(_tableData), 1)
            }
            // this.rolesList.splice($index, 1)
            this.$message({
              type: 'success',
              message: '删除成功!'
            })
          })
      }
    }
  }
}
</script>

<style scoped>
</style>