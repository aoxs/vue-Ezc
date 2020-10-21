<template>
  <div class="dashboard-editor-container">
    <div style="background-color: #fff">
      <!-- 树形结构框 -->
      <div style="display:flex">

        <div style=""
             class="groupTree">
          <el-tree :data="groupData"
                   :props="defaultProps"
                   :expand-on-click-node="false"
                   @node-click="handleNodeClick"></el-tree>
        </div>

        <!-- 树形结构框end -->

        <!-- 增删改查按钮 -->
        <div style="width:78%;padding-top:20px;white-space: nowrap;">
          <el-button type="primary"
                     size="small"
                     style="margin-left:25px"
                     @click="groupAdd">
            <i class="el-icon-plus"
               style="font-weight:1000;" />
            新增
          </el-button>
          <el-button type="primary"
                     size="small"
                     @click="groupEdit">
            <i class="el-icon-edit" />
            编辑
          </el-button>
          <el-button type="primary"
                     size="small"
                     @click="groupDel">
            <i class="el-icon-delete-solid" />
            删除
          </el-button>
          <el-button type="primary"
                     size="small"
                     @click="groupCheck">
            <i class="el-icon-tickets" />
            查看详情
          </el-button>
          <!-- 增删改查按钮end -->
          <!-- 增删改查 弹窗 -->

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
          </el-table>
          <!-- 组织结构表end -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      groupData: [
        {
          id: 1,
          label: '英联公司',
          children: [
            {
              id: 2,
              label: '谈判小组',
              children: [
                {
                  id: 3,
                  label: '望牛墩指挥部',
                },
                {
                  id: 4,
                  label: '洪梅指挥部',
                }
              ]
            }
          ]

        }
      ],
      // tableData: YLData,
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

      multipleSelection: [],
      dialogVisible: false,
      dialogType: 'add',
    }
  },
  methods: {
    handleNodeClick(data) {
      console.log(data.id);
    },
    handleSelectionChange(val) {
      this.multipleSelection = val
      console.log(val)
    },
    groupAdd() {
      this.dialogType = 'add'
      this.dialogVisible = true
    },
    groupEdit() {
      this.dialogType = 'edit'
      this.dialogVisible = true
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
  }
}
</script>

<style>
.groupTree {
  width: 180px;
  height: 530px;
  border-right: 2px solid #F0F2F5;
  padding: 10px;
  padding-top: 20px;
}
</style>
