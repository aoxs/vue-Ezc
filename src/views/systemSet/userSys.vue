<template>
  <div>
    <!-- 下拉框 -->

    <!-- 下拉框end -->
    <!-- 组织结构表 -->
    <el-table
      :data="tableData"
      style="width: 80%; margin: 0 auto; margin-top: 20px"
      stripe
      border
      tooltip-effect="dark"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55" />
      <el-table-column prop="loginName" label="登录名" sortable width="" />
      <el-table-column prop="userName" label="名称" width="" />
      <el-table-column
        prop="group"
        label="所属机构"
        sortable
        width=""
        show-overflow-tooltip
      />

      <el-table-column
        prop="tel"
        label="联系电话"
        width=""
        show-overflow-tooltip
      />
      <el-table-column
        prop="role"
        label="角色"
        sortable
        width=""
        show-overflow-tooltip
      />
      <el-table-column align="center">
        <div slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)"
          >编辑</el-button>
          <el-dialog
            title="提示"
            :visible.sync="centerDialogVisible"
            width="80%"
            :before-close="handleClose"
          >
            <span>点击编辑用户</span>
            <p>登录名为{{ clickUserRes[0] }}</p>
            <span slot="footer">
              <el-button @click="userEupdata()">取消</el-button>
              <el-button type="primary" @click="userEback()">确认</el-button>
            </span>
          </el-dialog>
        </div>
      </el-table-column>
    </el-table>

    <!-- 组织结构表end -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          loginName: 'aoxs01',
          userName: '刘钦求',
          group: '英联不动产',
          tel: '13035707258',
          role: 'web'
        },
        {
          loginName: 'aoxs02',
          userName: '刘钦求',
          group: '英联不动产',
          tel: '13035707258',
          role: 'web'
        },
        {
          loginName: 'aoxs03',
          userName: '刘钦求',
          group: '英联不动产',
          tel: '13035707258',
          role: 'web'
        },
        {
          loginName: 'aoxs04',
          userName: '刘钦求',
          group: '英联不动产',
          tel: '13035707258',
          role: 'web'
        },
        {
          loginName: 'aoxs05',
          userName: '刘钦求',
          group: '英联不动产',
          tel: '13035707258',
          role: 'web'
        },
        {
          loginName: 'aoxs06',
          userName: '刘钦求',
          group: '英联不动产',
          tel: '13035707258',
          role: 'web'
        }
      ],
      centerDialogVisible: false,
      multipleSelection: [],
      clickUserRes: []
    }
  },
  methods: {
    handleSelectionChange(val) {
      this.multipleSelection = val
      //   console.log(val)
    },
    handleEdit(index, row) {
      console.log(index, row)
      this.clickUserRes = []
      this.centerDialogVisible = true
      this.clickUserRes.push(
        row.loginName,
        row.userName,
        row.group,
        row.tel,
        row.role
      )
    },
    userEupdata() {
      this.centerDialogVisible = false
      
    },
    userEback() {
      this.centerDialogVisible = false
     
    },
    handleClose(done) {
      this.$confirm('确定关闭？')
        .then((_) => {
          done()
          console.log(1, done)
          this.centerDialogVisible = false
          
        })

        .catch((_) => {
          console.log(2, done)
          
        })
    }
  }
}
</script>

<style>
</style>
