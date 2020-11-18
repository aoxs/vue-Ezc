<template>
  <div class="dashboard-editor-container">
    <div style="background-color: #fff; border: 1px solid #dadada">
      <!-- 顶部搜索 -->
      <div
        style="
          background: #f5f5f5;
          padding: 10px 20px;
          border-bottom: 1px solid #dadada;
        "
      >
        <div style="display: flex; justify-content: flex-start">
          <el-input
            slot=""
            v-model="PartyA"
            clearable
            placeholder="请输入名称"
            style="width: 20%"
          >
            <template slot="prepend"> 甲方： </template>
          </el-input>
          <el-input
            slot=""
            v-model="PartyB"
            clearable
            placeholder="请输入名称"
            style="width: 20%"
          >
            <template slot="prepend"> 乙方： </template>
          </el-input>
          <div>
            <el-button
              size="small"
              style="margin-left: 10px"
              plain
              @click="changeClick"
            ><i class="el-icon-search" />查询</el-button>
            <el-button
              size="small"
              style="margin-left: 10px"
              plain
              @click="resetClick"
            ><i class="el-icon-refresh" />重置</el-button>
          </div>
        </div>
        <!-- 顶部搜索end -->
        <!-- 报告模板 -->
        <div
          style="margin-top: 5px; display: flex; justify-content: flex-start"
        >
          <div class="selectCheck">
            <span class="check_font" style="">报告模板：</span>
            <el-select
              v-model="repTem"
              clearable
              placeholder="请选择"
              style="width: 70%"
            >
              <el-option
                v-for="item in repTemList"
                :key="item.ID"
                :label="item.Name"
                :value="item.Code"
              />
            </el-select>
          </div>
          <el-button
            size="small"
            style="margin-left: 10px"
            plain
            @click="changeClick"
          ><i class="el-icon-print" />打印</el-button>
        </div>
        <!-- 报告模板end -->
      </div>

      <!-- 按钮 -->
      <div
        style="
          display: flex;
          justify-content: flex-end;
          margin-top: 20px;
          margin-bottom: 10px;
          margin-right: 20px;
        "
      >
        <el-button type="primary" size="small" @click="createSig">
          <i class="el-icon-circle-plus" />
          新建
        </el-button>
        <el-button type="primary" size="small" @click="editSig">
          <i class="el-icon-edit-outline" />
          编辑
        </el-button>
        <el-button type="primary" size="small" @click="showSig">
          <i class="el-icon-edit-outline" />
          查看详情
        </el-button>
        <el-button type="primary" size="small" @click="delSig">
          <i class="el-icon-delete-solid" />

          删除
        </el-button>
      </div>
      <!-- 按钮end -->

      <!-- 弹窗 -->
      <!-- 弹窗end -->

      <!-- 签约信息表 -->
      <el-table
        ref="multipleTable"
        v-loading="proLoading"
        :data="InsSigSys"
        style="margin: 10px auto; width: 98%"
        tooltip-effect="dark"
        border
        stripe
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="45" align="center" />
        <el-table-column prop="PartyB" label="小组" align="center" width="100" />
        <el-table-column prop="PartyB" label="乙方" align="center" width="100" />
        <el-table-column
          prop="lowReqB"
          label="身份证号"
          align="center"
          width="100"
        />
        <el-table-column
          prop="addressB"
          label="住址"
          align="center"
          width=""
          show-overflow-tooltip
        />
        <el-table-column
          prop="addressB"
          label="协议编号"
          align="center"
          width=""
          show-overflow-tooltip
        />
        <el-table-column
          prop="addressB"
          label="测绘编号"
          align="center"
          width=""
          show-overflow-tooltip
        />
        <el-table-column
          prop="sigPhoto"
          label="签约照片"
          min-width="180"
          align="center"
        >
          <template slot-scope="scope">
            <el-image
              :src="scope.row.sigPhoto"
              :preview-src-list="scope.row.sigPhotoBig"
              fit="contain"
              :lazy="true"
              style="width: 150px; max-height: 60px"
            />
          </template>
        </el-table-column>
        <el-table-column
          prop="sigDate"
          label="签约时间"
          width=""
          align="center"
          show-overflow-tooltip
        />
        <el-table-column
          prop="sigDate"
          label="补偿方式"
          width=""
          align="center"
          show-overflow-tooltip
        />
        <el-table-column
          prop="sigDate"
          label="协议模板"
          width=""
          align="center"
          show-overflow-tooltip
        />
        <el-table-column align="center">
          <div slot-scope="scope">
            <el-button
              size="mini"
              @click="groupEdit(scope)"
            >预览/打印</el-button>
            <!-- <el-button size="mini" @click="groupEdit(scope)">打印</el-button> -->
          </div>
        </el-table-column>
      </el-table>

      <!-- 签约信息表end -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      PartyA: '',
      PartyB: '',
      repTem: '',
      repTemList: [],
      multipleSelection: [],
      proLoading: false,
      InsSigSys: [{ addressB: 'abc' }],
      dialogSigCreate: false,
      dialogType: 'edit'
    }
  },
  mounted() {},
  methods: {
    // 乱七八糟按钮一堆
    changeClick() {
      console.log('甲方:', this.PartyA)
      console.log('乙方:', this.PartyB)
    },
    resetClick() {
      this.PartyA = ''
      this.PartyB = ''
    },
    createSig() {
      console.log('click createSig!')
    },
    editSig() {
      console.log('click editSig!')
    },
    showSig() {
      console.log('click showSig!')
    },
    delSig() {
      console.log('click delSig!')
    },

    // 信息表
    // 勾选
    handleSelectionChange(val) {
      this.multipleSelection = val
      console.log(this.multipleSelection)
    }
  }
}
</script>
<style lang="scss" scoped>
::v-deep .selectCheck .el-input__inner {
  border: 0px !important;
  border-radius: 0px;
}
// .el-form-item {
//   margin-bottom: 5px;
// }
.selectCheck {
  width: 30%;
  // margin-left: 20px;
  display: flex;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  overflow: hidden;
}
.check_font {
  display: block;
  width: 35%;
  padding: 10px 10px;
  font-size: 14px;
  color: #909399;
  background-color: #f5f7fa;
  border-right: 1px solid #dcdfe6;
  white-space: nowrap;
  text-align: center;
}
</style>
