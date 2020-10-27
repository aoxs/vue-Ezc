<template>
  <div class="table">
    <el-header height="56px"
               style=""
               class="tabHeader">
      <!-- Header content -->
      <div style="display:flex;justify-content: space-between;">
        <p style="padding: 0;margin: 0;line-height: 36px;">功能模块</p>
        <el-button type="success"
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
             :default-checked-keys="checkedKeys1"
             :props="defaultProps"
             @node-click="handleNodeClick">
    </el-tree>

  </div>
</template>

<script>
export default {
  name: 'TreeData1',
  data() {
    return {
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
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      checkedKeys1: [4, 1, 6],


    }
  },
  methods: {
    determine() {
      // 点击确定按钮获取所有被选中的tree节点
      console.log(this.$refs.tree.getCheckedKeys().concat(this.$refs.tree.getHalfCheckedKeys()))
    },
    // handleCheckChange(data, checked, indeterminate) {
    //   console.log(data.id, checked);
    // },
    handleNodeClick() {
      // 点击后treedata3中 切换请求地址，请求对应按钮权限
    }
  }

}
</script>

<style  scoped>
.table {
  border-radius: 10px;
  border: 1px solid #dddddd;
  padding-bottom: 40px;
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
</style>