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
      <el-table-column
        prop="groupName"
        label="机构名称"
        width=""
        sortable
        show-overflow-tooltip
      />
      <el-table-column
        prop="serviceType"
        label="服务类型"
        width=""
        sortable
        show-overflow-tooltip
      />
      <el-table-column
        prop="serviceContent"
        label="服务内容"
        width=""
        sortable
        show-overflow-tooltip
      />
      <el-table-column
        prop="principal"
        label="负责人"
        width=""
        sortable
        show-overflow-tooltip
      />
      <el-table-column
        prop="tel"
        label="联系电话"
        width=""
        show-overflow-tooltip
      />
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
          groupName: '水乡',
          serviceType: 'test',
          serviceContent: 'test',
          principal: '张三',
          tel: '13011112222'
        },
        {
          groupName: '水乡',
          serviceType: 'test',
          serviceContent: 'test',
          principal: '张五',
          tel: '13011112222'
        }, {
          groupName: '水乡',
          serviceType: 'test',
          serviceContent: 'test',
          principal: '张二',
          tel: '13011112222'
        }, {
          groupName: '水乡',
          serviceType: 'test',
          serviceContent: 'test',
          principal: '张一',
          tel: '13011112222'
        }, {
          groupName: '水乡',
          serviceType: 'test',
          serviceContent: 'test',
          principal: '张一',
          tel: '13011112222'
        }
      ],
      multipleSelection: []
    }
  },
  methods: {
    handleSelectionChange(val) {
      this.multipleSelection = val
        // console.log(val)
    }
  }
}
</script>

<style>
</style>
