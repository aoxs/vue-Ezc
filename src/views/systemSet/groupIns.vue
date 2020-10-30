<template>
  <div class="dashboard-editor-container">
    <div style="background-color: #fff">

      <div style="display:flex">
        <!-- 树形结构框 -->
        <user-group @childFn="parentFn"></user-group>

        <!-- 树形结构框end -->

        <div style="width:78%;padding-top:20px;white-space: nowrap;">
          <!-- {{tableData}} -->
          <!-- 增删改查按钮 -->
          <!-- <btns /> -->
          <div style="display:flex;justify-content:flex-end ;">
            <!-- 按钮 -->
            <div style=" padding: 5px 10px">
              <div class="pagRight"
                   style="padding-right:20px">
                <div style="">

                  <el-button type="primary"
                             size="small"
                             style=""
                             @click="groupAdd">
                    <i class="el-icon-circle-plus" />
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
            <el-dialog :visible.sync="dialogGroup"
                       :title="dialogType==='edit'?'编辑组织结构':'新建组织结构'"
                       top="10px">
              <el-form :model="group"
                       label-width="80px"
                       label-position="right">
                <el-form-item label="机构名称:">
                  <el-input v-model="group.groupName"
                            placeholder="机构名称"></el-input>
                </el-form-item>
                <el-form-item label="服务类型:">
                  <el-input v-model="group.serviceType"
                            placeholder="服务类型"></el-input>
                </el-form-item>
                <el-form-item label="服务内容:">
                  <el-input v-model="group.serviceContent"
                            placeholder="服务内容"></el-input>
                </el-form-item>
                <el-form-item label="负责人:">
                  <el-input v-model="group.principal"
                            placeholder="负责人姓名"></el-input>
                </el-form-item>
                <el-form-item label="联系电话:">
                  <el-input v-model="group.tel"
                            placeholder="联系电话"></el-input>
                </el-form-item>
              </el-form>
              <div style="text-align:right;">
                <el-button type="info"
                           @click="dialogGroup=false">取消</el-button>
                <el-button type="primary"
                           @click="confirmRole">保存</el-button>
              </div>
            </el-dialog>
          </div>
          <!-- 增删改查 弹窗end -->
          <!-- 组织结构表 -->
          <!-- <el-button type="primary"
                     size="default"
                     @click="abcdd1">test1</el-button>
          <el-button type="primary"
                     size="default"
                     @click="abcdd2">test2</el-button>
                     <p>abc{{tableData}}</p> -->

          <el-table :data="tableData"
                    style="width:95%;margin:0 auto;margin-top:20px;border-radius: 8px;"
                    stripe
                    border
                    tooltip-effect="dark"
                    @selection-change="handleSelectionChange">
            <el-table-column type="selection"
                             width="55" />
            <el-table-column prop="groupName"
                             label="机构名称"
                             width=""
                             sortable
                             show-overflow-tooltip />
            <el-table-column prop="serviceType"
                             label="服务类型"
                             width=""
                             sortable
                             show-overflow-tooltip />
            <el-table-column prop="serviceContent"
                             label="服务内容"
                             width=""
                             sortable
                             show-overflow-tooltip />
            <el-table-column prop="principal"
                             label="负责人"
                             width=""
                             sortable
                             show-overflow-tooltip />
            <el-table-column prop="tel"
                             label="联系电话"
                             width=""
                             show-overflow-tooltip />
            <el-table-column align="center">
              <div slot-scope="scope">
                <el-button size="mini"
                           @click="groupEdit(scope)">编辑</el-button>
                <!-- <el-dialog title="提示"
                           :visible.sync="editDialogVisible"
                           width="80%"
                           :before-close="handleClose">
                  <span>点击编辑用户</span>
                  <p>登录名为{{ groupSet[0] }}</p>
                  <span slot="footer">
                    <el-button @click="userEback()">取消</el-button>
                    <el-button type="primary"
                               @click="userEupdata()">确认</el-button>
                  </span>
                </el-dialog> -->
              </div>
            </el-table-column>
          </el-table>
          <!-- 组织结构表end -->
          <!-- 分页 -->
          <div class="pagRight">
            <pagination v-show="YLData.length>=10"
                        :total="YLData.length"
                        :layout="layout">

            </pagination>

          </div>
          <!-- 分页end -->

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { deepClone } from '@/utils';
import UserGroup from './components/UserGroup'
// import btns from './components/btns'
import Pagination from '@/components/Pagination'


const defaultGroup = {

  children: [],
  groupName: "",
  principal: "",
  serviceContent: "",
  serviceType: "",
  tel: "",
}

export default {
  name: 'groupIns',
  components: { UserGroup, Pagination },
  data() {
    return {

      YLData: [
        {
          groupName: '谈判小组',
          serviceType: '谈判',
          serviceContent: '谈判',
          principal: '王萧',
          tel: '13011112222',
        },
      ],
      testData: [
        {
          groupName: '望牛墩指挥部',
          serviceType: '望牛墩',
          serviceContent: '指挥部',
          principal: '王彬彬',
          tel: '13022223333'
        },
        {
          groupName: '洪梅指挥部',
          serviceType: '洪梅',
          serviceContent: '指挥部',
          principal: '方海军',
          tel: '13033331111'
        },
      ],
      multipleSelection: [],// table 选择的信息添加到数组
      editDialogVisible: false,
      dialogType: 'add',
      dialogGroup: false,
      group: Object.assign({}, defaultGroup),
      tableData: '',
      // groupSet: [],// 存放 点击编辑的数据
    }
  },
  methods: {
    // test 传值
    parentFn(payload) {
      this.tableData = this[payload];
    },
    // test按钮
    abcdd1() {
      this.tableData = this.testData
    },
    abcdd2() {
      this.tableData = this.YLData
    },


    // 增删改 按钮
    groupAdd() {
      this.dialogType = 'add'
      this.dialogGroup = true
      this.group = {}
    },
    groupEdit(scope) {
      console.log(scope.row)
      this.dialogType = 'edit'
      this.dialogGroup = true
      this.group = deepClone(scope.row)

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
    // 保存
    confirmRole() {
      this.dialogGroup = false

      console.log(this.group)
    },

    //增删改 按钮end


    // table事件
    handleSelectionChange(val) {
      this.multipleSelection = val
      console.log(val)
    },
    handleEdit(index, row) {
      console.log(index, row);
      // this.groupSet = [];
      this.editDialogVisible = true;
    },
    // userEupdata() {
    //   this.editDialogVisible = false;
    // },
    // userEback() {
    //   this.editDialogVisible = false;
    // },
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

<style lang="scss" scoped>
// .pagRight {
//   display: flex;
//   flex-direction: row-reverse;
//   /* justify-content: flex-end; */
// }
.el-form-item {
  margin-bottom: 5px;
}
</style>