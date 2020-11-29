<template>
  <div class="dashboard-editor-container">
    <div style="background-color: #fff; border: 1px solid #dadada">
      <!-- 顶部搜索 -->
      <div style="
          display: flex;
          justify-content: flex-start;
          background: #f5f5f5;
          padding: 10px 20px;
          border-bottom: 1px solid #dadada;
        ">
        <div style="width: 50%; display: flex; justify-content: flex-start">
          <el-input slot=""
                    v-model="checkTempName"
                    placeholder="请输入名称"
                    style="width: 45%"
                    clearable>
            <template slot="prepend"> 模板名称 </template>
          </el-input>

          <div class="selectCheck">
            <span class="check_font"
                  style="">所属项目</span>
            <el-select v-model="dataSelect"
                       placeholder="请选择"
                       style="width: 70%"
                       clearable>
              <el-option v-for="item in dataOption"
                         :key="item.id"
                         :label="item.label"
                         :value="item.id" />
            </el-select>
          </div>
        </div>
        <div>
          <el-button type="info"
                     size="small"
                     plain
                     @click="changeClick"><i class="el-icon-search" />查询</el-button>
          <el-button type="info"
                     size="small"
                     plain
                     @click="resetClick"><i class="el-icon-refresh" />重置</el-button>
        </div>

      </div>
      <!-- 顶部搜索end -->

      <div style="
          width: 100%;
          padding-top: 10px;
          padding-bottom: 20px;
          white-space: nowrap;
        ">
        <!-- 按钮 -->
        <div style="padding: 5px 10px">
          <div class="pagRight"
               style="padding-right: 20px">
            <div style="">
              <el-button type="primary"
                         size="small"
                         style=""
                         @click="tempAdd">
                <i class="el-icon-plus"
                   style="font-weight: 1000" />
                新建
              </el-button>
              <el-button type="primary"
                         size="small"
                         style=""
                         @click="tempShow">
                <i class="el-icon-plus"
                   style="font-weight: 1000" />
                查看详情
              </el-button>
              <el-button type="primary"
                         size="small"
                         @click="tempDel">
                <i class="el-icon-delete-solid" />
                删除
              </el-button>
              <!-- <el-button type="primary"
                         size="small"
                         @click="proScopeClick">
                <i class="el-icon-thumb" />
                项目范围
              </el-button> -->
            </div>
          </div>
        </div>
        <!-- 按钮end -->
        <!-- 增改 弹窗 -->

        <el-dialog :visible.sync="tempDialogVisible"
                   :title="dialogType"
                   width="90%"
                   :before-close="handleClose"
                   top="10px">
          <el-form :model="temp"
                   label-width="100px"
                   label-position="right">
            <el-row :gutter="20">
              <el-col :span="8"
                      :offset="0">
                <el-form-item label="模板名称:">
                  <el-input v-model="temp.TemplateName"
                            placeholder="模板名称" />
                </el-form-item>
              </el-col>
              <el-col :span="8"
                      :offset="0">
                <el-form-item label="模板类型:">
                  <!-- <el-input v-model="tempData.ProjectId"
                            placeholder="所属项目" /> -->
                  <el-select v-model="temp.TemplateType"
                             placeholder="请选择"
                             style="width: 100%">
                    <el-option v-for="item in TypeOption"
                               :key="item.ID"
                               :label="item.Name"
                               :value="item.ID" />
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="8"
                      :offset="0">
                <el-form-item label="所属项目:">
                  <!-- <el-input v-model="tempData.ProjectId"
                            placeholder="所属项目" /> -->
                  <el-select v-model="temp.Sid"
                             placeholder="请选择"
                             style="width: 100%">
                    <el-option v-for="item in dataOption"
                               :key="item.id"
                               :label="item.label"
                               :value="item.id" />
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="24"
                      :offset="0">
                <el-form-item label="模板内容:">
                  <tinymce v-if="tempDialogVisible"
                           v-model="temp.TemplateContent"
                           :height="350" />
                </el-form-item>
              </el-col>

            </el-row>

          </el-form>
          <div style="text-align: right"
               v-show="isLook">
            <el-button type="info"
                       @click="backTemp">取消</el-button>
            <el-button type="primary"
                       @click="confirmTemp">保存</el-button>
          </div>
        </el-dialog>

        <!-- 增改 弹窗end -->

        <!-- 表格 -->
        <el-table v-loading="tcTableLoading"
                  :data="tempData"
                  style="width: 95%;margin: 0 auto;margin-top: 10px;border-radius: 8px;"
                  stripe
                  border
                  tooltip-effect="dark"
                  @selection-change="handleSelectionChange">
          <el-table-column type="selection"
                           width="55"
                           align="center" />
          <el-table-column prop="TemplateName"
                           label="模板名称"
                           width="" />
          <el-table-column prop="TemplateType"
                           label="模板类型"
                           width="" />
          <el-table-column prop="Sid"
                           label="所属项目"
                           width="" />
          <!-- <el-table-column prop="TemplateContent"
                           label="模板内容"
                           width="" /> -->
          <el-table-column align="center">
            <div slot-scope="scope">
              <el-button size="mini"
                         @click="tempEdit(scope)">编辑</el-button>
            </div>
          </el-table-column>
        </el-table>
      </div>

    </div>
  </div>
</template>

<script>
import Tinymce from '@/components/Tinymce'

export default {
  components: { Tinymce },
  data() {
    return {
      tcTableLoading: false,
      isLook: true,
      checkTempName: '',
      dataSelect: '',
      dataOption: [],
      TypeOption: [],
      temp: {},
      tempDialogVisible: false,
      dialogType: '查看详情',
      tempData: []
    }
  },
  mounted() {

    // 所属项目下拉
    this.axios.get('/ProjectQuery').then((res) => {
      this.dataOption = res.data
    });
    // 模板类型下拉
    this.axios.get('/SelectFormwork').then((res) => {
      this.TypeOption = res.data
    });
    // 获取模板列表
    this.getFormworklist()
  },
  methods: {
    // 获取模板列表
    getFormworklist() {
      this.tcTableLoading = true
      if (!this.dataSelect) {
        var Sid = 0
      } else {
        var Sid = this.dataSelect
      }
      this.axios.get('/SelectFormworklist?Sid=' + Sid + '&TemplateName=' + this.checkTempName).then((res) => {
      this.tcTableLoading = false
        console.log(res.data)
        this.tempData = res.data
      })
    },

    // 又是一堆按钮
    changeClick() {
      console.log(this.checkTempName)
      console.log(this.dataSelect)
    },
    resetClick() {
      this.checkTempName = ''
      this.dataSelect = ''
      this.getFormworklist()
    },
    tempAdd() {
      this.tempDialogVisible = true
      this.dialogType = "新建模板"
      this.temp = {}
      this.isLook = true

    },
    tempDel() {

    },
    tempEdit(scope) {
      this.isLook = true
      this.tempDialogVisible = true
      this.dialogType = "编辑模板"
      console.log(scope.row)
      this.temp = scope.row
    },
    tempShow() {
      if (this.multipleSelection.length == 0) {
        this.$alert('未选中', '查看', {
          confirmButtonText: '确认',
          type: 'info'
        })
      } else if (this.multipleSelection.length > 1) {
        this.$alert('最多只能同时执行一条', '查看', {
          confirmButtonText: '确认',
          type: 'info'
        })
      } else {
        this.tempDialogVisible = true
        this.dialogType = "查看模板"
        this.temp = this.multipleSelection[0]
        this.isLook = false
      }
    },
    confirmTemp() {
      this.tempDialogVisible = false
      console.log(this.temp)
      this.axios.post('/FormWorkIns', this.temp).then((res) => {
        console.log(res.data)
        this.temp = {}
        if (res.data.code == 1) {
          this.$message({
            type: 'success',
            message: "更新成功。"
          })
          this.getFormworklist()

        } else {
          this.$message({
            type: 'error',
            message: "更新失败，请重试！"
          })
        }
      })

    },
    backTemp() {
      this.tempDialogVisible = false
      this.temp = {}

    },
    // 勾选
    handleSelectionChange(val) {
      this.multipleSelection = val
      console.log(val)
    },

    handleClose(done) {

      // this.$confirm('确定关闭？')
      //   .then((_) => {
      done()

      //   })
      //   .catch((_) => {

      //   })
    }
  },
}
 </script>
<style lang="scss" scoped>
::v-deep .selectCheck .el-input__inner {
  border: 0px !important;
  border-radius: 0px;
}
.selectCheck {
  width: 45%;
  margin-left: 20px;
  display: flex;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  overflow: hidden;
}
.check_font {
  display: block;
  width: 40%;
  padding: 10px 10px;
  font-size: 14px;
  color: #909399;
  background-color: #f5f7fa;
  border-right: 1px solid #dcdfe6;
  white-space: nowrap;
  text-align: center;
}
</style>