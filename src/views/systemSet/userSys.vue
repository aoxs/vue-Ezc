<template>
  <div class="dashboard-editor-container">
    <div style="background-color:#fff;border:1px solid #DADADA">

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

      <!-- 顶部搜索 -->
      <div style="display:flex;justify-content:flex-start;background:#F5F5F5;padding:10px 20px;border-bottom:1px solid #DADADA">

        <div style="width:70%;display:flex;justify-content:flex-start;">

          <el-input v-model="checkUserName"
                    placeholder="请输入名称"
                    style="width:30%"
                    slot="">
            <template slot="prepend">
              账号:
            </template>
          </el-input>

          <div class="selectCheck">
            <span class="check_font"
                  style="">所属项目:</span>
            <el-select v-model="dataSelect"
                       placeholder="请选择"
                       style="width:70%">
              <el-option v-for="item in dataOption"
                         :key="item.id"
                         :label="item.label"
                         :value="item.id">

              </el-option>

            </el-select>
          </div>

          <div style=""
               class="selectCheck">

            <span class="check_font">所属机构:</span>
            <el-select v-model="groupInsSelect"
                       placeholder="请选择"
                       style="width:70%">
              <el-option v-for="item in groupInsOption"
                         :key="item.id"
                         :label="item.label"
                         :value="item.id"></el-option>
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

      <div style="width:100%;padding-top:20px;padding-bottom:20px;white-space: nowrap; ">
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
                新建
              </el-button>

              <!-- <el-button type="primary"
               size="small"
               @click="groupEdit">
      <i class="el-icon-edit" />
      编辑
    </el-button> -->
              <el-button type="primary"
                         size="small"
                         @click="userDel">
                <i class="el-icon-delete-solid" />
                删除
              </el-button>
              <el-button type="primary"
                         size="small"
                         @click="proScopeClick">
                <i class="el-icon-thumb" />
                项目范围
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
                   title="编辑用户"
                   width="50%"
                   :before-close="handleClose"
                   top="10px">
          <el-form :model="role"
                   label-width="80px"
                   label-position="right">
            <el-form-item label="登录名:">
              <el-input v-model="role.loginName"
                        placeholder="登录名"></el-input>

            </el-form-item>
            <el-form-item label="真实姓名:">
              <el-input v-model="role.userName"
                        placeholder="真实姓名"></el-input>
            </el-form-item>
            <el-form-item label="登录密码:">
              <el-input v-model="role.password"
                        show-password
                        placeholder="设置登录密码"></el-input>
            </el-form-item>
            <el-form-item label="联系电话:">
              <el-input v-model="role.tel"
                        placeholder="联系电话"></el-input>
            </el-form-item>
            <el-form-item label="所属项目:">
              <div style="width:30%">
                <el-checkbox-group v-model="role.proScope">
                  <el-checkbox v-for="city in role.proScope"
                               :label="city"
                               :key="city"
                               style="display:block;">{{city}}</el-checkbox>
                </el-checkbox-group>
              </div>
            </el-form-item>
            <el-form-item label="所属机构:">
              <!-- <el-input v-model="role.groupName"
                        placeholder="所属机构"></el-input> -->
              <!-- <el-select v-model="role.groupName"
                         value-key=""
                         placeholder="所属机构">
                <el-option v-for="item in userNameOptions"
                           :key="item.value"
                           :label="item.label"
                           :value="item.value">
                </el-option>
              </el-select> -->
              <el-cascader v-model="role.groupName.id"
                           :options="testData"
                           ref="casGroup"
                           :props="{ checkStrictly: true , expandTrigger: 'hover'}"
                           @change="handleChange"
                           :show-all-levels="false"
                           clearable></el-cascader>
              <!-- <el-tree ref="tree"
                       @check-change="handleCheck"
                       :data="testData"
                       node-key="id"
                       show-checkbox
                       :check-strictly="true">
              </el-tree> -->
            </el-form-item>
            <el-form-item label="角色:">
              <el-select v-model="role.role"
                         value-key=""
                         placeholder="请选择用户角色">
                <el-option v-for="item in userNameOptions"
                           :key="item.value"
                           :label="item.label"
                           :value="item.value">
                </el-option>
              </el-select>

            </el-form-item>
            <el-form-item label="是否启用:">
              <el-radio-group v-model="role.isEnable">
                <el-radio :label="0">禁用</el-radio>
                <el-radio :label="1">启用</el-radio>
              </el-radio-group>

            </el-form-item>

          </el-form>
          <div style="text-align:right;">
            <el-button type="info"
                       @click="dialogVisible=false">取消</el-button>
            <el-button type="primary"
                       @click="confirmRole">保存</el-button>
          </div>
        </el-dialog>
        <el-dialog :visible.sync="dialogVisible2"
                   title="新建用户"
                   width="50%"
                   :before-close="handleClose"
                   top="10px">
          <el-form :model="role"
                   label-width="80px"
                   label-position="right">
            <el-form-item label="登录名:">
              <el-input v-model="role.loginName"
                        placeholder="登录名"></el-input>

            </el-form-item>
            <el-form-item label="真实姓名:">
              <el-input v-model="role.userName"
                        placeholder="真实姓名"></el-input>
            </el-form-item>
            <el-form-item label="登录密码:">
              <el-input v-model="role.password"
                        show-password
                        placeholder="设置登录密码"></el-input>
            </el-form-item>
            <el-form-item label="联系电话:">
              <el-input v-model="role.tel"
                        placeholder="联系电话"></el-input>
            </el-form-item>
            <el-form-item label="所属项目:">
              <div style="width:30%">
                <el-checkbox-group v-model="role.proScope">
                  <el-checkbox v-for="city in role.proScope"
                               :label="city"
                               :key="city"
                               style="display:block;">{{city}}</el-checkbox>
                </el-checkbox-group>
              </div>
            </el-form-item>
            <el-form-item label="所属机构:">
              <!-- <el-input v-model="role.groupName"
                        placeholder="所属机构"></el-input> -->
              <!-- <el-select v-model="role.groupName"
                         value-key=""
                         placeholder="所属机构">
                <el-option v-for="item in userNameOptions"
                           :key="item.value"
                           :label="item.label"
                           :value="item.value">
                </el-option>
              </el-select> -->
              <el-cascader v-model="role.groupName"
                           :options="testData"
                           ref="casGroup"
                           :props="{ checkStrictly: true , expandTrigger: 'hover'}"
                           @change="handleChange"
                           :show-all-levels="false"
                           clearable></el-cascader>
              <!-- <el-tree ref="tree"
                       @check-change="handleCheck"
                       :data="testData"
                       node-key="id"
                       show-checkbox
                       :check-strictly="true">
              </el-tree> -->
            </el-form-item>
            <el-form-item label="角色:">
              <el-select v-model="role.role"
                         value-key=""
                         placeholder="请选择用户角色">
                <el-option v-for="item in userNameOptions"
                           :key="item.value"
                           :label="item.label"
                           :value="item.value">
                </el-option>
              </el-select>

            </el-form-item>
            <el-form-item label="是否启用:">
              <el-radio-group v-model="role.isEnable">
                <el-radio :label="0">禁用</el-radio>
                <el-radio :label="1">启用</el-radio>
              </el-radio-group>

            </el-form-item>

          </el-form>
          <div style="text-align:right;">
            <el-button type="info"
                       @click="dialogVisible2=false">取消</el-button>
            <el-button type="primary"
                       @click="confirmRole">保存</el-button>
          </div>
        </el-dialog>

        <!-- 增改 弹窗end -->

        <!-- 所属项目 弹窗 -->
        <el-dialog :visible.sync="dialogData"
                   title="选择所属项目"
                   :before-close="handleClose"
                   top="10px">

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
                           label="所属项目"
                           width=""
                           :formatter="dataStateFormat"
                           show-overflow-tooltip />
          <el-table-column prop="groupName.content"
                           label="所属机构"
                           width=""
                           show-overflow-tooltip />

          <el-table-column prop="tel"
                           label="联系电话"
                           width=""
                           show-overflow-tooltip />
          <el-table-column align="center"
                           prop="role"
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
                         @click="groupEdit(scope)">编辑</el-button>
              <!-- <el-dialog title="提示"
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
              </el-dialog> -->
            </div>
          </el-table-column>
        </el-table>
        <!-- 表格end -->
        <!-- 分页 -->
        <div class="pagRight">
          <pagination v-show="tableData.length>=10"
                      :total="tableData.length"
                      :layout="layout">

          </pagination>

        </div>
        <!-- 分页end -->
      </div>
      <!-- </div> -->
    </div>
  </div>
</template>

<script>
import { deepClone } from '@/utils';
// import btns from './components/btns'
// import UserGroup from './components/UserGroup'
import Pagination from '@/components/Pagination'


const defaultRole = {
  PId: 0,
  groupName: { id: [4988], content: '' },
  isEnable: 0,
  loginName: '',
  proScope: [],
  role: "",
  tel: "",
  userName: "",
  password: "",
}

export default {
  name: 'userSys',
  components: { Pagination },
  data() {
    return {
      checkUserName: '',
      dataSelect: '',
      groupInsSelect: '',
      dataOption: [
        {
          id: '1',
          label: '滨海湾新区威远岛土地整备'
        }, {
          id: '2',
          label: '水乡新城片区首期土地整备'
        }, {
          id: '3',
          label: '黄江项目'
        }, {
          id: '4',
          label: '公明轨道13号线及沿线(含车辆段)项目'
        }
      ],
      groupInsOption: [
        {
          id: '3',
          label: '政府部门'
        }, {
          id: '4',
          label: '实施主体'
        }, {
          id: '5',
          label: '服务机构'
        }, {
          id: '6',
          label: '单位业主'
        }
      ],
      tableData: [
        { PId: 1, loginName: "汤姆", userName: '张三', proScope: ['滨海湾新区威远岛土地整备', '水乡新城片区首期土地整备', '黄江项目', '公明轨道13号线及沿线(含车辆段)项目'], groupName: { id: [4999], content: '实施主体' }, tel: "13035707258", role: "管理员", isEnable: 1 },
        { PId: 2, loginName: "杰瑞", userName: '张三', proScope: ['滨海湾新区威远岛土地整备', '水乡新城片区首期土地整备', '黄江项目', '公明轨道13号线及沿线(含车辆段)项目'], groupName: { id: [3, 124, 5123, 7654], content: '望牛墩指挥部' }, tel: "13035707258", role: "游客", isEnable: 0 },
        { PId: 3, loginName: "泰菲", userName: '张三', proScope: ['滨海湾新区威远岛土地整备', '水乡新城片区首期土地整备', '黄江项目', '公明轨道13号线及沿线(含车辆段)项目'], groupName: { id: [3, 124, 5123,], content: '谈判小组' }, tel: "13035707258", role: "管理员", isEnable: 1 },
        { PId: 4, loginName: "布奇", userName: '张三', proScope: ['滨海湾新区威远岛土地整备', '水乡新城片区首期土地整备', '黄江项目', '公明轨道13号线及沿线(含车辆段)项目'], groupName: { id: [3, 124, 5123, 245], content: '洪梅指挥部' }, tel: "13035707258", role: "管理员", isEnable: 0 },
        { PId: 5, loginName: "斯派", userName: '张三', proScope: ['滨海湾新区威远岛土地整备', '水乡新城片区首期土地整备', '黄江项目', '公明轨道13号线及沿线(含车辆段)项目'], groupName: { id: [3, 124, 5123, 245], content: '洪梅指挥部' }, tel: "13035707258", role: "管理员", isEnable: 0 },
        { PId: 6, loginName: "泰克", userName: '张三', proScope: ['滨海湾新区威远岛土地整备', '水乡新城片区首期土地整备', '黄江项目', '公明轨道13号线及沿线(含车辆段)项目'], groupName: { id: [3, 124, 5123, 7654], content: '望牛墩指挥部' }, tel: "13035707258", role: "管理员", isEnable: 1 },
      ],
      testData: [
        {
          value: 4988,
          label: '政府部门',
          children: [
            {}
          ]
        },
        {
          value: 4999,
          label: '实施主体',
          children: [
            {}
          ]
        },
        {
          value: 3,
          label: '服务机构',
          children: [
            {
              value: 124,
              label: '英联公司',
              table: 'YLData',
              children: [
                {
                  value: 5123,
                  label: '谈判小组',
                  table: 'testData',

                  children: [
                    {
                      value: 7654,
                      label: '望牛墩指挥部',
                    },
                    {
                      value: 245,
                      label: '洪梅指挥部',
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          value: 4956,
          label: '单位业主',
          children: [
            {}
          ]
        },
      ],
      // list: null,
      // listLoading: true,
      // downloadLoading: false,
      // filename: "",
      // autoWidth: true,
      // bookType: "xlsx",
      dialogData: false,
      centerDialogVisible: false,
      multipleSelection: [],
      clickUserRes: [],
      dialogVisible: false,
      dialogVisible2: false,
      dialogType: 'add',
      role: Object.assign({}, defaultRole),
    };
  },
  created() {
    // this.fetchData()
  },
  methods: {
    // 级联选择事件
    handleChange() {
      //选择所属机构后，修改role中的数据
      this.role.groupName.content = this.$refs['casGroup'].getCheckedNodes()[0].label

    },
    // 查询/重置 按钮
    changeClick() {
      console.log(this.checkUserName)
      console.log(this.dataSelect)
      console.log(this.groupInsSelect)
      this.$alert('开发中', "提示", {
        confirmButtonText: '确认',
        type: 'info'
      })
    },
    resetClick() {
      this.checkUserName = ''
      this.dataSelect = ''
      this.groupInsSelect = ''
    },
    // 增删改查按钮
    groupAdd() {
      console.log(this.role);
      this.dialogVisible2 = true
      this.role=Object.assign({}, defaultRole)
    },
    groupEdit(scope) {
      console.log(scope.row);
      // this.clickUserRes = [];
      this.dialogType = 'edit'
      this.dialogVisible = true
      this.role = deepClone(scope.row)
    },
    // 保存
    confirmRole() {
      console.log(this.role)
      this.dialogVisible = false
      this.dialogVisible2 = false

      // 最后重置this.role
      this.role=Object.assign({}, defaultRole)

    },
    // 删除
    userDel() {
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
        // .then( () => {
        //   // console.log(this.multipleSelection[0].proId)
        //   let j =  this.multipleSelection.length 
        //   for(var i = 0; i<j ; i++){
        //     let id = this.multipleSelection[i].proId
        //     let _tableData = this.tableData.find( x => x.proId == id )
        //     console.log(_tableData)
        //     this.tableData.splice(this.tableData.indexOf(_tableData), 1 )
        //   }
        //   // this.rolesList.splice($index, 1)
        //   this.$message({
        //     type: 'success',
        //     message: '删除成功!'
        //   })
        // })
      }
    },
    groupCheck() {

    },
    proScopeClick() {
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
        this.dialogData = true
      }
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
    dataStateFormat(row, column) {
      return row.proScope.join('，')
    },
    // fetchData() {
    //   this.listLoading = true;
    //   fetchList().then((response) => {
    //     this.list = response.data.items;
    //     this.listLoading = false;
    //   });
    // },
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
    handleEdit(scope) {
      console.log(scope.row);
      // this.clickUserRes = [];
      this.dialogType = 'edit'
      this.dialogVisible = true
      this.role = deepClone(scope.row)
      // this.clickUserRes.push(
      //   row.loginName,
      //   row.userName,
      //   row.group,
      //   row.tel,
      //   row.role
      // );
    },
    // userEupdata() {
    //   this.centerDialogVisible = false;
    // },
    // userEback() {
    //   this.centerDialogVisible = false;
    // },
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


<style lang="scss" scoped >
::v-deep .selectCheck .el-input__inner {
  border: 0px !important;
  border-radius: 0px;
}
// .pagRight {
//   display: flex;
//   flex-direction: row-reverse;
// }
.el-form-item {
  margin-bottom: 5px;
}
.selectCheck {
  width: 30%;
  margin-left: 20px;
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
