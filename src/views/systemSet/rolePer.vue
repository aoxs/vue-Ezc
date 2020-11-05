<template>
  <div class="dashboard-editor-container">
    <div style="background-color: #fff;padding:10px 10px">
      <!-- 屏幕分成3列 -->
      <el-row :gutter="20">

        <el-col :xs="24"
                :sm="8"
                :offset="0">
          <!-- 角色选择 -->
          <!-- <role-group></role-group> -->
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
                  <el-button type="primary"
                             size="small"
                             @click="roleCreate">
                    <i class="el-icon-edit-outline" />

                    新建
                  </el-button>
                  <el-button type="danger"
                             size="small"
                             @click="delCreate">
                    <i class="el-icon-delete" />
                    删除
                  </el-button>
                </div>

              </div>

            </el-header>
            <el-dialog title="新建角色"
                       :visible.sync="newRole"
                       width="30%"
                       :before-close="handleClose"
                       top="10px">
              <span></span>
              <el-input v-model="roleName"
                        placeholder="请输入角色名称"
                        @focus="focusRole"
                        @blur="blurRole">
                <template slot="prepend">角色名称:</template>

              </el-input>
              <p>*只能包含字母、数字、中文和()</p>
             
              <span slot="footer">
                <el-button @click="roleCreateBack">取消</el-button>
                <el-button type="primary"
                           @click="roleCreateUp">新建</el-button>
              </span>
            </el-dialog>

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
            <el-table :data="roleList"
                      border
                      stripe
                      style="margin:10px auto;width:90%"
                      tooltip-effect="dark"
                      highlight-current-row
                      @row-click="rowClick">
              <el-table-column label
                               width="35">
                <template slot-scope="scope">
                  <el-radio :label="scope.row.ID"
                            v-model="radioId"></el-radio>
                </template>
              </el-table-column>
              <el-table-column prop="Role_Name"
                               label="角色名称"
                               width="">
              </el-table-column>
            </el-table>
            <div style="width: 100%; padding: 5px 10px">
              <div class="pagRight">
                <pagination v-show="roleList.length>=10"
                            :total="roleList.length"
                            :small="true"
                            :layout="layout">

                </pagination>

              </div>
            </div>
          </div>
          <!-- 角色选择end -->
        </el-col>

        <!-- 功能模块 -->
        <el-col :xs="24"
                :sm="8"
                :offset="0">
          <!-- <tree-data1></tree-data1> -->
          <div class="table">
            <el-header height="56px"
                       style=""
                       class="tabHeader">
              <!-- Header content -->
              <div style="display:flex;justify-content: space-between;">
                <p style="padding: 0;margin: 0;line-height: 36px;">功能模块</p>
                <el-button type="primary"
                           size="small"
                           @click="determine">
                  <i class="el-icon-check" />
                  确定
                </el-button>
              </div>
            </el-header>

            <el-tree :data="roleTreeData1"
                     ref="tree"
                     show-checkbox
                     node-key="id"
                     default-expand-all
                     :default-checked-keys="checkedKeys"
                     :props="defaultProps"
                     @node-click="handleNodeClick">
            </el-tree>

          </div>
        </el-col>
        <!-- 功能模块end -->

        <!-- 权限3 -->
        <el-col :xs="24"
                :sm="8"
                :offset="0">
          <div class="table">
            <!-- 按钮权限 -->

            <!-- <tree-data2></tree-data2> -->
            <el-form v-model="checkboxBottom"
                     ref="checkboxBottom"
                     :inline="false"
                     size="normal">
              <el-form-item style="margin:0px;padding:0px;">
                <el-header height="56px"
                           style=""
                           class="tabHeader">

                  <div style="display:flex;justify-content: space-between;">
                    <p style="padding: 0;margin: 0;line-height: 36px;">按钮权限</p>
                    <el-button type="primary"
                               size="small"
                               @click="onSubmit">
                      <i class="el-icon-check" />
                      确定
                    </el-button>
                  </div>
                </el-header>
              </el-form-item>
              <el-form-item style="margin:0px;padding:0px;">
                <el-checkbox-group size="small"
                                   v-model="checkboxBottom"
                                   style="padding:10px;">
                  <el-checkbox border
                               style="margin:5px;padding:5px 5px 5px 5px"
                               label="新建"
                               name="type">
                  </el-checkbox>
                  <el-checkbox border
                               style="margin:5px;padding:5px 5px 5px 5px"
                               label="编辑"
                               name="type">
                  </el-checkbox>
                  <el-checkbox border
                               style="margin:5px;padding:5px 5px 5px 5px"
                               label="删除"
                               name="type">
                  </el-checkbox>
                  <el-checkbox border
                               style="margin:5px;padding:5px 5px 5px 5px"
                               label="查看详情"
                               name="type">
                  </el-checkbox>
                </el-checkbox-group>

              </el-form-item>
            </el-form>
            <!-- <div style="margin:10px 10px;">
              <el-checkbox-group v-model="checkboxBottom">
                <el-checkbox-button v-for="city in cities"
                                    :label="city"
                                    :key="city">{{city}}</el-checkbox-button>
              </el-checkbox-group>
            </div> -->

            <!-- 按钮权限end -->

            <!-- 上传文件分类 -->
            <!-- <tree-data3></tree-data3> -->
            <!-- 上传文件分类end -->
          </div>
        </el-col>
        <!-- 权限3end -->
      </el-row>

    </div>
  </div>
</template>

<script>
// import RoleGroup from './components/RoleGroup'
// import TreeData1 from './components/TreeData1'
// import TreeData2 from './components/TreeData2'
// import TreeData3 from './components/TreeData3'
import Pagination from '@/components/Pagination'




export default {
  components: { Pagination },
  data() {
    return {
      roleList: [],
      radioId: '',
      focusprompt: false,
      blurprompt: false,
      
      roleInput: 0,
      roleTableData1: [
        { title: "abc1" },
        { title: "abc2" },
        { title: "abc3" },
        { title: "abc4" },
        { title: "abc5" },
        { title: "abc6" },
        { title: "abc6" },
        { title: "abc6" },
        { title: "abc6" },

        { title: "abc7" }
      ],
      roleTreeData1: [
        {
          id: 1,
          label: '一级 1',
          children: [{
            id: 4,
            label: '二级 1-1',
            children: [{
              id: 9,
              label: '三级 1-1-1'
            }, {
              id: 10,
              label: '三级 1-1-2'
            }]
          }]
        },
        {
          id: 2,
          label: '一级 2',
          children: [{
            id: 5,
            label: '二级 2-1'
          }, {
            id: 6,
            label: '二级 2-2'
          }]
        },
        {
          id: 3,
          label: '一级 3',
          children: [{
            id: 7,
            label: '二级 3-1'
          }, {
            id: 8,
            label: '二级 3-2'
          }]
        }
      ],
      checkedKeys: [10, 8, 6],

      defaultProps: {
        children: 'children',
        label: 'label'
      },

      checkboxBottom: ['新建', '删除'],
      // checkboxBottom: ['上海'],
      // cities: ['新增', '修改', '删除', '查看详情'],
      newRole: false,
      roleName: '',
      layout: 'total,  prev, pager, next'
    }
  },

  methods: {
    // 获取角色列表
    getRoleList() {
      this.axios.get("/Roles")
        .then((res) => {
          console.log(res.data)
          this.roleList = res.data
        })
    },

    // 创建角色
    roleCreate() {
      // console.log('新建角色')
      this.newRole = true;
      console.log(this.roleName)
    },

    // 获取/失去焦点
    focusRole() {
      
    },
    blurRole() {
      var regex = /^[\u4e00-\u9fa50-9A-Za-z\(\)、\（\）]+$/;
      var result = regex.test(this.roleName);
      if (result == false) {
        this.roleInput = 0
      } else {
        this.roleInput = 1
      }
    },

    // 保存
    roleCreateUp() {
      if (!this.roleName) {
        // this.$alert("请填写角色名称！")
        this.$alert('请填写角色名称！', "提示", {
          confirmButtonText: '关闭',
          type: 'warning'
        })

      } else {
        // var regex = /^[\u4e00-\u9fa50-9A-Za-z\(\)、\（\）]+$/;
        // var result = regex.test(this.roleName);
        if (this.roleInput == 0) {
          this.$alert('请正确填写角色名称！', "提示", {
            confirmButtonText: '关闭',
            type: 'warning'
          })
        } else {
          this.axios.get("/RotlesIns?rotuleName=" + this.roleName)
            .then((res) => {
              if (res.data.code == 1) {
                this.$message({
                  type: 'success',
                  message: '添加成功'
                })
                this.getRoleList()
              } else {
                this.$message({
                  type: 'error',
                  message: '添加失败，请刷新页面后重试'
                })
              }
            })
          this.newRole = false
          this.roleName = ''
        }

      }
    },
    // 取消
    roleCreateBack() {
      this.newRole = false
      this.roleName = ''
    },
    // 关闭
    handleClose(done) {
      this.$confirm("确定关闭？")
        .then((_) => {
          done();
          this.centerDialogVisible = false;
        })
        .catch((_) => {
        });
    },
    // 删除角色
    delCreate() {
      if (!this.radioId) {
        this.$alert('未选中项目', "提示", {
          confirmButtonText: '确认',
          type: 'info'
        })
      } else {
        this.$confirm('确认删除 \'', '警告', {
          confirmButtonText: '确认',
          cancelButtonText: '取消',
          type: 'warning'
        })
          .then(() => {
            this.axios.get("/RolesDelete?RouteId=" + this.radioId)
              .then((res) => {
                if (res.data.code == 1) {
                  this.$message({
                    type: 'success',
                    message: '删除成功。'
                  })
                  this.radioId = ''
                  this.getRoleList()
                } else {
                  this.$message({
                    type: 'error',
                    message: '删除失败，请刷新页面后重试！'
                  })
                }

              })
          })
      }
    },

    // 角色选择事件
    rowClick(row) {
      this.radioId = row.ID
      console.log(this.radioId)

    },
    // // 每页条数
    // handleSizeChange(val) {
    //   console.log(`每页 ${val} 条`);
    // },
    // // 翻页事件
    // handleCurrentChange(val) {
    //   console.log(`当前页: ${val}`);
    // },

    // 功能模块
    determine() {
      // 点击确定按钮获取所有被选中的tree节点
      console.log(this.$refs.tree.getCheckedKeys().concat(this.$refs.tree.getHalfCheckedKeys()))
      this.$message({
        type: 'success',
        message: '设置成功!'
      })
    },

    // handleCheckChange(data, checked, indeterminate) {
    //   console.log(data.id, checked);
    // },

    handleNodeClick(node, data, value) {
      // 点击后treedata3中 切换请求地址，请求对应按钮权限
      console.log(node)
      console.log(node.id, node.label)

    },

    // 按钮权限
    onSubmit() {
      console.log(this.checkboxBottom)
      this.$message({
        type: 'success',
        message: '设置成功!'
      })
    },


  },

  mounted() {
    // 获取角色列表
    this.getRoleList()




  }
}
</script>


<style scoped>
/* .pagRight {
  display: flex;

  flex-direction: row-reverse;
} */
.table {
  border-radius: 10px;
  border: 1px solid #dddddd;
  /* padding-bottom: 40px; */
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
.el-pager li {
  margin: 0 2px !important;
  padding: 0 0 !important;
}
</style>