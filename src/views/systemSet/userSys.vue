<template>
  <div class="dashboard-editor-container">
    <div style="background-color: #fff; border: 1px solid #dadada">
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
      <div
        style="
          display: flex;
          justify-content: flex-start;
          background: #f5f5f5;
          padding: 10px 20px;
          border-bottom: 1px solid #dadada;
        "
      >
        <div style="width: 70%; display: flex; justify-content: flex-start">
          <el-input
            slot=""
            v-model="checkUserName"
            placeholder="请输入名称"
            style="width: 30%"
            clearable
          >
            <template slot="prepend"> 账号 </template>
          </el-input>

          <div class="selectCheck">
            <span class="check_font" style="">所属项目</span>
            <el-select
              v-model="dataSelect"
              placeholder="请选择"
              style="width: 70%"
              clearable
            >
              <el-option
                v-for="item in dataOption"
                :key="item.id"
                :label="item.label"
                :value="item.id"
              />
            </el-select>
          </div>

          <div style="" class="selectCheck">
            <span class="check_font">所属机构</span>
            <el-select
              v-model="groupInsSelect"
              placeholder="请选择"
              style="width: 70%"
              clearable
            >
              <el-option
                v-for="item in groupInsOption"
                :key="item.id"
                :label="item.label"
                :value="item.id"
              />
            </el-select>
          </div>
        </div>
        <div>
          <el-button
            type="info"
            size="small"
            plain
            @click="changeClick"
          ><i class="el-icon-search" />查询</el-button>
          <el-button
            type="info"
            size="small"
            plain
            @click="resetClick"
          ><i class="el-icon-refresh" />重置</el-button>
        </div>
      </div>
      <!-- 顶部搜索end -->

      <div
        style="
          width: 100%;
          padding-top: 10px;
          padding-bottom: 20px;
          white-space: nowrap;
        "
      >
        <!-- 按钮 -->
        <div style="padding: 5px 10px">
          <div class="pagRight" style="padding-right: 20px">
            <div style="">
              <el-button type="primary" size="small" style="" @click="groupAdd">
                <i class="el-icon-plus" style="font-weight: 1000" />
                新建
              </el-button>
              <el-button type="primary" size="small" @click="userDel">
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

        <el-dialog
          :visible.sync="dialogVisible"
          :title="dialogType == 'add' ? '新建用户' : '编辑用户'"
          width="50%"
          :before-close="handleClose"
          top="10px"
        >
          <el-form :model="role" label-width="100px" label-position="right">
            <el-form-item label="登录名:">
              <el-input v-model="role.UserName" placeholder="登录名" />
            </el-form-item>
            <el-form-item label="名称:">
              <el-input v-model="role.Name" placeholder="名称" />
            </el-form-item>
            <el-form-item label="登录密码:">
              <el-input
                v-model="role.Password"
                show-password
                placeholder="设置登录密码"
              />
            </el-form-item>
            <el-form-item label="联系电话:">
              <el-input v-model="role.Tel" placeholder="联系电话" />
            </el-form-item>
            <el-form-item label="所属项目:">
              <el-select
                v-model="role.proScope.id"
                multiple
                placeholder="请选择"
                style="width: 100%"
              >
                <el-option
                  v-for="item in dataOption"
                  :key="item.id"
                  :label="item.label"
                  :value="item.id"
                />
              </el-select>

              <!-- <div style="width:30%">
                <el-checkbox-group v-model="role.proScope">
                  <el-checkbox v-for="item in dataOption"
                               :label="item.label"
                               :key="item.id"
                               style="display:block;">{{item.label}}</el-checkbox>
                </el-checkbox-group>
              </div> -->
            </el-form-item>
            <el-form-item label="所属机构:">
              <!-- <el-cascader v-model="role.groupName.id"
                           :options="testData"
                           ref="casGroup"
                           :props="{ checkStrictly: true , expandTrigger: 'hover'}"
                           @change="handleChange"
                           :show-all-levels="false"
                           clearable></el-cascader> -->
              <el-select
                v-model="role.groupName"
                value-key=""
                placeholder="请选择所属机构"
              >
                <el-option
                  v-for="item in groupInsOption"
                  :key="item.id"
                  :label="item.label"
                  :value="item.id"
                />
              </el-select>
            </el-form-item>
            <el-form-item label="角色:">
              <el-select
                v-model="role.role"
                value-key=""
                placeholder="请选择用户角色"
              >
                <el-option
                  v-for="item in userNameOptions"
                  :key="item.ID"
                  :label="item.Role_Name"
                  :value="item.ID"
                />
              </el-select>
            </el-form-item>
            <el-form-item label="设为小组账号:">
              <el-radio-group v-model="role.IsEnd">
                <el-radio :label="1">是</el-radio>
                <el-radio :label="0">否</el-radio>
              </el-radio-group>
            </el-form-item>
          </el-form>
          <div style="text-align: right">
            <el-button
              type="info"
              @click="dialogVisible = false"
            >取消</el-button>
            <el-button type="primary" @click="confirmRole">保存</el-button>
          </div>
        </el-dialog>

        <!-- 增改 弹窗end -->

        <!-- 表格 -->
        <el-table
          v-loading="userTableLoading"
          :data="userTableList"
          style="
            width: 95%;
            margin: 0 auto;
            margin-top: 10px;
            border-radius: 8px;
          "
          stripe
          border
          tooltip-effect="dark"
          @selection-change="handleSelectionChange"
        >
          <el-table-column type="selection" width="55" />
          <el-table-column prop="UserName" label="登录名" width="" />
          <el-table-column prop="Name" label="名称" width="" />
          <el-table-column
            prop="proScope.label"
            label="所属项目"
            width=""
            show-overflow-tooltip
            :formatter="dataStateFormat"
          />
          <!-- <所属项目> 内容格式化，临时注释 -->
          <!-- :formatter="dataStateFormat" -->
          <el-table-column
            prop="groupName"
            label="所属机构"
            width=""
            show-overflow-tooltip
          />

          <el-table-column
            prop="Tel"
            label="联系电话"
            width=""
            show-overflow-tooltip
            align="center"
          />
          <el-table-column
            align="center"
            prop="role"
            label="角色"
            sortable
            width=""
            show-overflow-tooltip
          />
          <el-table-column
            align="center"
            prop="IsEnd"
            label="小组账号"
            show-overflow-tooltip
            :formatter="stateFormat"
          />

          <el-table-column align="center">
            <div slot-scope="scope">
              <el-button size="mini" @click="groupEdit(scope)">编辑</el-button>
            </div>
          </el-table-column>
        </el-table>
        <!-- 表格end -->
        <!-- 分页 -->
        <div class="pagRight">
          <pagination
            v-show="userTableList.length >= 10"
            :total="userTableList.length"
            :layout="layout"
          />
        </div>
        <!-- 分页end -->
      </div>
      <!-- </div> -->
    </div>
  </div>
</template>

<script>
import { deepClone } from '@/utils'
// import btns from './components/btns'
// import UserGroup from './components/UserGroup'
import Pagination from '@/components/Pagination'

const defaultRole = {
  IsEnd: '',
  UserName: '',
  Name: '',
  Password: '',
  Tel: '',
  proScope: [],
  groupName: '',
  role: ''
}

export default {
  name: 'UserSys',
  components: { Pagination },
  data() {
    return {
      userTableLoading: false,
      checkUserName: '',
      dataSelect: '',
      groupInsSelect: '',
      groupInsOption: [],
      dataOption: [],
      // dataOption: [
      //   {
      //     id: '1',
      //     label: '滨海湾新区威远岛土地整备'
      //   }, {
      //     id: '2',
      //     label: '水乡新城片区首期土地整备'
      //   }, {
      //     id: '3',
      //     label: '黄江项目'
      //   }, {
      //     id: '4',
      //     label: '公明轨道13号线及沿线(含车辆段)项目'
      //   }
      // ],
      // groupInsOption: [
      //   {
      //     id: '3',
      //     label: '政府部门'
      //   }, {
      //     id: '4',
      //     label: '实施主体'
      //   }, {
      //     id: '5',
      //     label: '服务机构'
      //   }, {
      //     id: '6',
      //     label: '单位业主'
      //   }
      // ],
      tableData: [
        {
          PId: 1,
          loginName: '汤姆',
          userName: '张三',
          proScope: [
            '滨海湾新区威远岛土地整备',
            '水乡新城片区首期土地整备',
            '黄江项目',
            '公明轨道13号线及沿线(含车辆段)项目'
          ],
          groupName: { id: [4999], content: '实施主体' },
          tel: '13035707258',
          role: '管理员',
          isEnable: 1
        },
        {
          PId: 2,
          loginName: '杰瑞',
          userName: '张三',
          proScope: [
            '滨海湾新区威远岛土地整备',
            '水乡新城片区首期土地整备',
            '黄江项目',
            '公明轨道13号线及沿线(含车辆段)项目'
          ],
          groupName: { id: [3, 124, 5123, 7654], content: '望牛墩指挥部' },
          tel: '13035707258',
          role: '游客',
          isEnable: 0
        },
        {
          PId: 3,
          loginName: '泰菲',
          userName: '张三',
          proScope: [
            '滨海湾新区威远岛土地整备',
            '水乡新城片区首期土地整备',
            '黄江项目',
            '公明轨道13号线及沿线(含车辆段)项目'
          ],
          groupName: { id: [3, 124, 5123], content: '谈判小组' },
          tel: '13035707258',
          role: '管理员',
          isEnable: 1
        },
        {
          PId: 4,
          loginName: '布奇',
          userName: '张三',
          proScope: [
            '滨海湾新区威远岛土地整备',
            '水乡新城片区首期土地整备',
            '黄江项目',
            '公明轨道13号线及沿线(含车辆段)项目'
          ],
          groupName: { id: [3, 124, 5123, 245], content: '洪梅指挥部' },
          tel: '13035707258',
          role: '管理员',
          isEnable: 0
        },
        {
          PId: 5,
          loginName: '斯派',
          userName: '张三',
          proScope: [
            '滨海湾新区威远岛土地整备',
            '水乡新城片区首期土地整备',
            '黄江项目',
            '公明轨道13号线及沿线(含车辆段)项目'
          ],
          groupName: { id: [3, 124, 5123, 245], content: '洪梅指挥部' },
          tel: '13035707258',
          role: '管理员',
          isEnable: 0
        },
        {
          PId: 6,
          loginName: '泰克',
          userName: '张三',
          proScope: [
            '滨海湾新区威远岛土地整备',
            '水乡新城片区首期土地整备',
            '黄江项目',
            '公明轨道13号线及沿线(含车辆段)项目'
          ],
          groupName: { id: [3, 124, 5123, 7654], content: '望牛墩指挥部' },
          tel: '13035707258',
          role: '管理员',
          isEnable: 1
        }
      ],
      // abc:[
      //   { "PId": "6", "loginName": "泰克", "userName": '张三', "proScope": "['滨海湾新区威远岛土地整备', '水乡新城片区首期土地整备', '黄江项目', '公明轨道13号线及沿线(含车辆段)项目']", "groupName": "{ id: [3, 124, 5123, 7654], content: '望牛墩指挥部' }", "tel": "13035707258", "role": "管理员", "isEnable": "1" },
      // ],
      testData: [
        {
          value: 4988,
          label: '政府部门',
          children: [{}]
        },
        {
          value: 4999,
          label: '实施主体',
          children: [{}]
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
                      label: '望牛墩指挥部'
                    },
                    {
                      value: 245,
                      label: '洪梅指挥部'
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
          children: [{}]
        }
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
      dialogType: 'add',
      role: Object.assign({}, defaultRole),
      userTableList: [
        // {
        //   "UserName": "Admin",
        //   "Name": "管理员",
        //   "Tel": "13035707258",
        //   "IsEnd": 0,
        //   "proScope": {
        //     id: [134, 137, 136],
        //     label: ["水乡新城片区首期土地整备", "果林项目", "黄江项目"]
        //   },
        //   "groupName": "实施主体",
        //   "role": "系统管理员"
        // },
      ]
    }
  },
  created() {
    // this.fetchData()
  },
  mounted() {
    this.getUserList()

    // 获取下拉框数据
    // 所属项目
    this.axios.get('/ProjectQuery').then((res) => {
      this.dataOption = res.data
    })

    // 所属机构
    this.axios.get('/OrgQuery').then((res) => {
      this.groupInsOption = res.data
    })

    // 角色列表
    this.axios.get('/Roles').then((res) => {
      this.userNameOptions = res.data
    })
  },
  methods: {
    // 加载用户表
    getUserList(userN = '', userD = 0, userG = 0) {
      this.userTableList = []
      this.userTableLoading = true
      this.axios({
        method: 'post',
        url: '/UserQuery',
        data: {
          UersName: userN,
          ProjectId: userD,
          mechanismId: userG
        }
      })
        // .post('/queryProject',this.qs.stringify(obj))
        .then((res) => {
          console.log(res.data)
          this.userTableList = res.data.data
          this.userTableLoading = false
        })
    },

    // 级联选择事件
    handleChange() {
      // 选择所属机构后，修改role中的数据
      this.role.groupName.content = this.$refs[
        'casGroup'
      ].getCheckedNodes()[0].label
    },
    // 查询/重置 按钮
    changeClick() {
      console.log(this.checkUserName)
      console.log(this.dataSelect)
      console.log(this.groupInsSelect)
      var userN = this.checkUserName
      var userD = this.dataSelect
      var userG = this.groupInsSelect
      if (this.checkUserName == '') {
        var userN = ''
      }
      if (this.dataSelect == '') {
        var userD = '0'
      }
      if (this.groupInsSelect == '') {
        var userG = '0'
      }

      this.getUserList(userN, userD, userG)

      // this.$alert('开发中', "提示", {
      //   confirmButtonText: '确认',
      //   type: 'info'
      // })
    },
    // 重置
    resetClick() {
      this.checkUserName = ''
      this.dataSelect = ''
      this.groupInsSelect = ''
      this.getUserList()
    },
    // 增删改查按钮
    groupAdd() {
      console.log(this.role)
      this.dialogVisible = true
      this.dialogType = 'add'

      this.role = Object.assign({}, defaultRole)
      console.log(this.dataOption)
    },
    groupEdit(scope) {
      console.log(scope.row)
      // this.clickUserRes = [];
      this.dialogType = 'edit'
      this.dialogVisible = true
      this.role = deepClone(scope.row)
      console.log(this.dataOption)
    },
    // 保存
    confirmRole() {
      this.role.proScope = this.role.proScope.id
      console.log(this.role)
      this.axios.post('/UserEnd', this.role).then((res) => {
        console.log(res.data)
        this.getUserList()
      })

      this.dialogVisible = false
      // 最后重置this.role
      this.role = Object.assign({}, defaultRole)
    },
    // 删除
    userDel() {
      if (this.multipleSelection.length == 0) {
        this.$alert('未选中项目', '提示', {
          confirmButtonText: '确认',
          type: 'info'
        })
      } else if (this.multipleSelection.length > 1) {
        this.$alert('最多只能同时执行一条', '提示', {
          confirmButtonText: '确认',
          type: 'info'
        })
      } else {
        this.$confirm('确认删除?', '警告', {
          confirmButtonText: '确认',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          // console.log(this.multipleSelection[0].ID)
          var delID = this.multipleSelection[0].Id
          this.axios.get('/DelUser?Userid=' + delID).then((res) => {
            this.getUserList()
            if (res.data.code == 1) {
              this.$message({
                type: 'success',
                message: '删除成功。'
              })
            } else {
              this.$message({
                type: 'error',
                message: '删除失败！'
              })
            }
          })
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
    groupCheck() {},
    // 项目范围
    // proScopeClick() {
    //   if (this.multipleSelection.length == 0) {
    //     this.$alert('未选中项目', "提示", {
    //       confirmButtonText: '确认',
    //       type: 'info'
    //     })
    //   } else if (this.multipleSelection.length > 1) {
    //     this.$alert('很抱歉,一次只能选择一条记录', "提示", {
    //       confirmButtonText: '确认',
    //       type: 'info'
    //     })
    //   } else {
    //     this.dialogData = true
    //   }
    // },

    // 增删改查按钮end

    // table内容格式化
    stateFormat(row, column) {
      if (row.IsEnd == 1) {
        return '是'
      } else if (row.IsEnd == 0) {
        return '否'
      } else {
        return '未设置'
      }
    },
    dataStateFormat(row, column) {
      return row.proScope.label.join('，')
    },
    // 如果为空格式化为-
    // TelFormat(row, column) {
    //   if (row.Tel == null) {
    //     return '-'
    //   }
    // },

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
          if (j === 'timestamp') {
            return parseTime(v[j])
          } else {
            return v[j]
          }
        })
      )
    },

    // ///////////////////////

    handleSelectionChange(val) {
      this.multipleSelection = val
      console.log(val)
    },
    handleEdit(scope) {
      console.log(scope.row)
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
      this.$confirm('确定关闭？')
        .then((_) => {
          done()

        })
        .catch((_) => {

        })
    }
  }
}
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
::v-deep .el-form-item {
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
