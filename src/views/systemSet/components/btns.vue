<template>
  <div style="">
    <!-- 按钮 -->
    <div style=" padding: 5px 10px">
      <div class="pagRight"
           style="padding-right:20px">
        <div style="">
          <el-button type="primary"
                     size="small"
                     style=""
                     @click="groupAdd">
            <i class="el-icon-plus"
               style="font-weight:1000;" />
            新增
          </el-button>
          <!-- <el-button type="primary"
               size="small"
               @click="groupEdit">
      <i class="el-icon-edit" />
      编辑
    </el-button> -->
          <el-button type="primary"
                     size="small"
                     @click="groupDel">
            <i class="el-icon-delete-solid" />
            删除
          </el-button>
          <!-- <el-button type="primary"
                     size="small"
                     @click="groupCheck">
            <i class="el-icon-tickets" />
            查看详情
          </el-button> -->
        </div>
      </div>
    </div>
    <!-- 弹窗 -->
    <el-dialog :visible.sync="dialogVisible"
               :title="dialogType==='edit'?'编辑组织结构':'新建组织结构'">
      <!-- <el-form :model="multipleSelection"
               label-width="80px"
               label-position="left">
        <el-form-item label="">

        </el-form-item>
        <el-form-item label="">

        </el-form-item>

      </el-form> -->
      <div style="text-align:right;">
        <el-button type="info"
                   @click="dialogVisible=false">取消</el-button>
        <el-button type="primary"
                   @click="confirmRole">保存</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: false,
      dialogType: 'add',
    }
  },
  methods: {
    groupAdd() {
      this.dialogType = 'add'
      this.dialogVisible = true
    },
    groupEdit() {
      this.dialogType = 'edit'
      this.dialogVisible = true
    },
    groupDel() {
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
      }
    },
    confirmRole(){
      this.dialogVisible = false
    },
    groupCheck() {

    },
  },
}
</script>

<style scoped>
.pagRight {
  display: flex;
  flex-direction: row-reverse;
  /* justify-content: flex-end; */
}
</style>