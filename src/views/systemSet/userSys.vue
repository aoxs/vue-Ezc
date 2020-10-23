<template>
  <div class="dashboard-editor-container">
    <div style="background-color:#fff">

      <!-- <div style="display:flex"> -->
        <!-- 树形 组织机构 -->
        <!-- <user-group></user-group> -->
        <!-- 树形 组织机构end -->
        <!-- 组织结构表 -->
        <!-- <el-button :loading="downloadLoading"
                 style="margin: 0 0 20px 20px"
                 type="primary"
                 icon="el-icon-document"
                 @click="handleDownload">
        导出Excel
      </el-button> -->
        <div style="width:100%;padding-top:20px;white-space: nowrap; ">
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
                <el-button type="primary"
                           size="small"
                           @click="proScope">
                  <i class="el-icon-thumb" />
                  数据范围
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
          <!-- 增改 弹窗 -->
          <el-dialog :visible.sync="dialogVisible"
                     :title="dialogType==='edit'?'编辑组织结构':'新建组织结构'">
            <el-form :model="multipleSelection"
                     label-width="80px"
                     label-position="left">
              <el-form-item label="">

              </el-form-item>
              <el-form-item label="">

              </el-form-item>

            </el-form>
            <div style="text-align:right;">
              <el-button type="info"
                         @click="dialogVisible=false">取消</el-button>
              <el-button type="primary"
                         @click="confirmRole">保存</el-button>
            </div>
          </el-dialog>

          <!-- 数据范围 弹窗 -->
          <el-dialog :visible.sync="dialogData"
                     title="选择项目范围"
                     :before-close="handleClose">

            <div style="text-align:right;">
              <el-button type="info"
                         @click="proFback">取消</el-button>
              <el-button type="primary"
                         @click="proFupdata">保存</el-button>
            </div>
          </el-dialog>
          <!-- 按钮end -->
          <!-- 表格 -->
          <el-table :data="tableData"
                    style="width: 95%;margin:0 auto;margin-top:20px;border-radius: 8px;"
                    stripe
                    border
                    tooltip-effect="dark"
                    @selection-change="handleSelectionChange">
            <el-table-column type="selection"
                             width="55" />
            <el-table-column prop="loginName"
                             label="登录名"
                             
                             width="" />
            <el-table-column prop="userName"
                             label="名称"
                             width="" />
            <el-table-column prop="proScope"
                             label="数据范围"
                             width=""
                             :formatter="dataStateFormat"
                             show-overflow-tooltip />
            <el-table-column prop="groupName"
                             label="所属机构"
                             
                             width=""
                             show-overflow-tooltip />

            <el-table-column prop="tel"
                             label="联系电话"
                             width=""
                             show-overflow-tooltip />
            <el-table-column prop="role"
                             label="角色"
                             sortable
                             width=""
                             show-overflow-tooltip />
            <el-table-column align="center"
                             prop="isEnable"
                             label="是否启用"
                             
                             show-overflow-tooltip
                             :formatter="stateFormat" />

            <el-table-column align="center">
              <div slot-scope="scope">
                <el-button size="mini"
                           @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                <el-dialog title="提示"
                           :visible.sync="centerDialogVisible"
                           width="80%"
                           :before-close="handleClose">
                  <span>点击编辑用户</span>
                  <p>登录名为{{ clickUserRes[0] }}</p>
                  <span slot="footer">
                    <el-button @click="userEupdata()">取消</el-button>
                    <el-button type="primary"
                               @click="userEback()">确认</el-button>
                  </span>
                </el-dialog>
              </div>
            </el-table-column>
          </el-table>
        </div>
        <!-- 组织结构表end -->
      <!-- </div> -->
    </div>
  </div>
</template>

<script>
import btns from './components/btns'
import UserGroup from './components/UserGroup'
export default {
  name: 'userSys',
  components: { btns, UserGroup },
  data() {
    return {
      tableData: [
        { PId: 1, loginName: "汤姆", userName: '张三', proScope:['滨海湾新区威远岛土地整备', '水乡新城片区首期土地整备', '黄江项目', '公明轨道13号线及沿线(含车辆段)项目'], groupName: "xxx分组", tel: "13035707258", role: "管理员", isEnable: 1 },
        { PId: 2, loginName: "杰瑞", userName: '张三', proScope:['滨海湾新区威远岛土地整备', '水乡新城片区首期土地整备', '黄江项目', '公明轨道13号线及沿线(含车辆段)项目'], groupName: "xxx分组", tel: "13035707258", role: "管理员", isEnable: 0 },
        { PId: 3, loginName: "泰菲", userName: '张三',proScope:['滨海湾新区威远岛土地整备', '水乡新城片区首期土地整备', '黄江项目', '公明轨道13号线及沿线(含车辆段)项目'], groupName: "xxx分组", tel: "13035707258", role: "管理员", isEnable: 1 },
        { PId: 4, loginName: "布奇", userName: '张三',proScope:['滨海湾新区威远岛土地整备', '水乡新城片区首期土地整备', '黄江项目', '公明轨道13号线及沿线(含车辆段)项目'], groupName: "xxx分组", tel: "13035707258", role: "管理员", isEnable: 0 },
        { PId: 5, loginName: "斯派", userName: '张三',proScope:['滨海湾新区威远岛土地整备', '水乡新城片区首期土地整备', '黄江项目', '公明轨道13号线及沿线(含车辆段)项目'], groupName: "xxx分组", tel: "13035707258", role: "管理员", isEnable: 0 },
        { PId: 6, loginName: "泰克", userName: '张三',proScope:['滨海湾新区威远岛土地整备', '水乡新城片区首期土地整备', '黄江项目', '公明轨道13号线及沿线(含车辆段)项目'], groupName: "xxx分组", tel: "13035707258", role: "管理员", isEnable: 1 },
      ],
      list: null,
      listLoading: true,
      downloadLoading: false,
      filename: "",
      autoWidth: true,
      bookType: "xlsx",
      dialogData: false,
      centerDialogVisible: false,
      multipleSelection: [],
      clickUserRes: [],
      dialogVisible: false,
      dialogType: 'add',
    };
  },
  created() {
    this.fetchData()
  },
  methods: {
    // 增删改查按钮
    groupAdd() {
      this.dialogType = 'add'
      this.dialogVisible = true
    },
    groupEdit() {
      this.dialogType = 'edit'
      this.dialogVisible = true
    },
     confirmRole(){
      this.dialogVisible = false
    },
    groupDel() {
      this.$confirm('确定要删除所选中的信息吗？', '警告', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
    },
    groupCheck() {

    },
    proScope() {
      this.dialogData = true
    },
    proFupdata() {
      // 保存按钮
      this.dialogData = false;
    },
    proFback() {
      // 取消按钮
      this.dialogData = false;
    },
    // 增删改查按钮end

    stateFormat(row, column) {
      if (row.isEnable == 0) {
        return '禁用'
      } else {
        return '启用'
      }
    },
    dataStateFormat(row, column){
      return row.proScope.join('，')
    },
    fetchData() {
      this.listLoading = true;
      fetchList().then((response) => {
        this.list = response.data.items;
        this.listLoading = false;
      });
    },
    // 导出excel表格
    // handleDownload() {
    //   this.downloadLoading = true;
    //   import("@/vendor/Export2Excel").then((excel) => {
    //     const tHeader = ["登录名", "名称", "所属机构", "联系电话", "角色"];
    //     const filterVal = ["登录名", "名称", "所属机构", "联系电话", "角色"];
    //     const list = this.list;
    //     const data = this.formatJson(filterVal, list);
    //     excel.export_json_to_excel({
    //       header: tHeader,
    //       data,
    //       filename: this.filename,
    //       autoWidth: this.autoWidth,
    //       bookType: this.bookType,
    //     });
    //     this.downloadLoading = false;
    //   });
    // },
    formatJson(filterVal, jsonData) {
      return jsonData.map((v) =>
        filterVal.map((j) => {
          if (j === "timestamp") {
            return parseTime(v[j]);
          } else {
            return v[j];
          }
        })
      );
    },

    /////////////////////////

    handleSelectionChange(val) {
      this.multipleSelection = val;
      //   console.log(val)
    },
    handleEdit(index, row) {
      console.log(index, row);
      this.clickUserRes = [];
      this.centerDialogVisible = true;
      this.clickUserRes.push(
        row.loginName,
        row.userName,
        row.group,
        row.tel,
        row.role
      );
    },
    userEupdata() {
      this.centerDialogVisible = false;
    },
    userEback() {
      this.centerDialogVisible = false;
    },
    handleClose(done) {
      this.$confirm("确定关闭？")
        .then((_) => {
          done();
          console.log(1, done);
          this.centerDialogVisible = false;
        })

        .catch((_) => {
          console.log(2, done);
        });
    },
  },
};
</script>

<style scoped>
.pagRight {
  display: flex;
  flex-direction: row-reverse;
  /* justify-content: flex-end; */
}
</style>
