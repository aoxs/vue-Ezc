<template>
  <div class="dashboard-editor-container">
    <div style="background-color: #fff">

      <div style="display:flex">
        <!-- 树形结构框 -->
        <user-group></user-group>

        <!-- 树形结构框end -->

        <div style="width:78%;padding-top:20px;white-space: nowrap;">
          <!-- 增删改查按钮 -->
          <btns />
          <!-- 增删改查 弹窗end -->
          <!-- 组织结构表 -->
          <el-table :data="YLData"
                    :key="reflush"
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
                           @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                <el-dialog title="提示"
                           :visible.sync="centerDialogVisible"
                           width="80%"
                           :before-close="handleClose">
                  <span>点击编辑用户</span>
                  <p>登录名为{{ groupSet[0] }}</p>
                  <span slot="footer">
                    <el-button @click="userEupdata()">取消</el-button>
                    <el-button type="primary"
                               @click="userEback()">确认</el-button>
                  </span>
                </el-dialog>
              </div>
            </el-table-column>
          </el-table>
          <!-- 组织结构表end -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserGroup from './components/UserGroup'
import btns from './components/btns'
export default {
  name: 'groupIns',
  components: { UserGroup, btns },
  data() {
    return {

      YLData: [
        {
          groupName: '谈判小组',
          serviceType: '谈判',
          serviceContent: '谈判',
          principal: '王萧',
          tel: '13011112222',
          children: [
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
          ]
        },
      ],
      multipleSelection: [],// table 选择的信息添加到数组
      centerDialogVisible: false,
      groupSet: [],// 存放 点击编辑的数据
    }
  },
  methods: {
    handleSelectionChange(val) {
      this.multipleSelection = val
      console.log(val)
    },
    handleEdit(index, row) {
      console.log(index, row);
      this.groupSet = [];
      this.centerDialogVisible = true;
      this.groupSet.push(
        row.groupName,
        row.serviceType,
        row.serviceContent,
        row.principal,
        row.tel
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
  }
}
</script>

<style>
</style>
