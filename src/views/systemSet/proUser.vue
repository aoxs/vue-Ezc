<template>
  <div class="dashboard-editor-container">
    <div style="background-color: #fff;padding:10px 10px">
      <div class="pro_select">
        <el-select v-model="proCheck"
                   @change="checkClick"
                   style="">
          <el-option v-for="item in proNames"
                     :key="item.value"
                     :label="item.title"
                     :value="item.id">
          </el-option>
        </el-select>
        <!-- 下拉框查询按钮
    <el-button type="primary" size="small" @click="checkClick">查询</el-button>
     -->
        <el-button type="primary"
                   size="small"
                   @click="proScope">
          <i class="el-icon-thumb" />
          数据范围
        </el-button>
        <!-- 数据范围 弹窗 -->
        <el-dialog :visible.sync="dialogVisible"
                   title="选择项目范围"
                   :before-close="handleClose">

          <div style="text-align:right;">
            <el-button type="info"
                       @click="proFback">取消</el-button>
            <el-button type="primary"
                       @click="proFupdata">保存</el-button>
          </div>
        </el-dialog>
      </div>

      <!-- 项目用户账户表 -->
      <el-table :data="proUserData"
                border
                fit
                highlight-current-row
                style="width: 100%;margin:15px auto; border-radius:8px;"
                @selection-change="handleSelectionChange">
        <el-table-column type="selection"
                         width="55" />
        <el-table-column 
                         prop="loginName"
                         label="用户名称"
                         width=""
                         sortable
                         show-overflow-tooltip />

        <el-table-column 
                         prop="userName"
                         label="真实姓名"
                         width=""
                         sortable
                         show-overflow-tooltip />
        <el-table-column 
                         prop="groupName"
                         label="组织机构"
                         width=""
                         sortable
                         show-overflow-tooltip />
        <el-table-column align="center"
                         prop="tel"
                         label="电话"
                         width=""
                         sortable
                         show-overflow-tooltip />
        <!-- <el-table-column align="center"
                         prop="tel"
                         label="电话"
                         width=""
                         sortable
                         show-overflow-tooltip />
                         <el-table-column align="center"
                         :prop='isEnable==0?"否":"是"'
                         label="是否启用"
                         width=""
                         sortable
                         show-overflow-tooltip /> -->

        <el-table-column align="center"
                         prop="isEnable"
                         label="是否启用"
                         sortable
                         show-overflow-tooltip
                         :formatter="stateFormat">

        </el-table-column>
        <!-- <el-table-column min-width="300px"
                         label="Title">
          <template slot-scope="{row}">
            <template v-if="row.edit">
              <el-input v-model="row.title"
                        class="edit-input"
                        size="small" />
              <el-button class="cancel-btn"
                         size="small"
                         icon="el-icon-refresh"
                         type="warning"
                         @click="cancelEdit(row)">
                cancel
              </el-button>
            </template>
            <span v-else>{{ row.title }}</span>
          </template>
        </el-table-column> -->

        <!-- <el-table-column align="center"
                         label=""
                         width="120">
          <template slot-scope="{row}">
            <el-button v-if="row.edit"
                       type="success"
                       size="small"
                       icon="el-icon-circle-check-outline"
                       @click="confirmEdit(row)">
              Ok
            </el-button>
            <el-button v-else
                       type="primary"
                       size="small"
                       icon="el-icon-edit"
                       @click="row.edit=!row.edit">
              Edit
            </el-button>
          </template>
        </el-table-column> -->

        <el-table-column align="center">
          <div slot-scope="scope">
            <el-button size="mini"
                       @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-dialog title="提示"
                       :visible.sync="editDialogVisible"
                       width="80%"
                       :before-close="handleClose">
              <span>点击编辑项目用户账户</span>
              <p>用户名称为{{ userSet[1] }}</p>
              <span slot="footer">
                <el-button @click="proEback()">取消</el-button>
                <el-button type="primary"
                           @click="proEupdata()">确认</el-button>
              </span>
            </el-dialog>
          </div>
        </el-table-column>

      </el-table>
      <!-- 项目用户账户表end -->

    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      proCheck: "",
      proNames: [
        { id: 1, title: "滨海湾新区威远岛土地整备" },
        { id: 2, title: "水乡新城片区首期土地整备" },
        { id: 3, title: "黄江项目" },
        { id: 4, title: "公明轨道13号线及沿线(含车辆段)项目" },
      ],
      proUserData: [
        { PId: 1, loginName: "汤姆", userName: '张三', groupName: "xxx分组", tel: "13035707258", isEnable: 1 },
        { PId: 2, loginName: "杰瑞", userName: '张三', groupName: "xxx分组", tel: "13035707258", isEnable: 0 },
        { PId: 3, loginName: "泰菲", userName: '张三', groupName: "xxx分组", tel: "13035707258", isEnable: 1 },
        { PId: 4, loginName: "布奇", userName: '张三', groupName: "xxx分组", tel: "13035707258", isEnable: 0 },
        { PId: 5, loginName: "斯派克", userName: '张三', groupName: "xxx分组", tel: "13035707258", isEnable: 0 },
        { PId: 6, loginName: "泰克", userName: '张三', groupName: "xxx分组", tel: "13035707258", isEnable: 1 },

      ],
      dialogVisible: false,
      userSet: [],
      editDialogVisible: false,
      multipleSelection: [],// table 选择的信息添加到数组
    };

  },
  created() {
    // this.proCheck = this.proNames[0].title
  },
  methods: {
    stateFormat(row, column) {
      if (row.isEnable == 0) {
        return '禁用'
      } else {
        return '启用'
      }
    },
    checkClick() {
      // 下拉框,选择触发

      console.log(this.proCheck)
    },
    // 项目范围按钮
    proScope() {
      this.dialogVisible = true
    },
    proFupdata() {
      // 保存按钮
      this.dialogVisible = false;
    },
    proFback() {
      // 取消按钮
      this.dialogVisible = false;
    },



    // 表格change触发
    handleSelectionChange(val) {
      this.multipleSelection = val
      console.log(val)
    },
    // 表格编辑按钮事件
    handleEdit(index, row) {
      console.log(index, row);
      this.userSet = [];
      this.editDialogVisible = true;
      this.userSet.push(
        row.PId,
        row.loginName,
        row.userName,
        row.groupName,
        row.tel,
        row.isEnable
      );
    },
    // 弹窗按钮
    proEupdata() {
      this.editDialogVisible = false;
    },
    proEback() {
      this.editDialogVisible = false;
    },
    handleClose(done) {
      this.$confirm("确定关闭？")
        .then((_) => {
          done();
          console.log(1, done);
          this.editDialogVisible = false;
        })

        .catch((_) => {
          console.log(2, done);
        });
    },
  }
}
</script>

<style scoped>
.pro_select {
  /* float: left; */
  display: flex;
  justify-content: space-around;
  width: 320px;
  /* margin-top: 7px; */
}
</style>