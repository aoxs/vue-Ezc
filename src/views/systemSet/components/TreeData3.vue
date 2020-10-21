<template>
  <div>
    <el-header height="56px"
               style=""
               class="tabHeader">
      <!-- Header content -->
      <div style="display:flex;justify-content: space-around;">
        <p style="padding: 0;margin: 0;line-height: 36px;">上传文件分类</p>
        <el-button type="danger"
                   @click="determine">
          <i class="el-icon-check" />
          <!--  点击确定按钮获取所有被选中的tree节点 -->
          确定
        </el-button>
      </div>
    </el-header>

    <el-tree :data="roleTreeData2"
             ref="tree"
             show-checkbox
             node-key="id"
             default-expand-all
             :default-checked-keys="checkedKeys1"
             :props="defaultProps">
    </el-tree>

  </div>
</template>

<script>
export default {
  data() {
    return {
      roleTreeData2: [
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
    }
  },
  methods: {
    determine() {

      console.log(this.$refs.tree.getCheckedKeys().concat(this.$refs.tree.getHalfCheckedKeys()))
    },
  }
}
</script>

<style scoped>
.tabHeader {
  background-color: #f5f5f5;
  padding: 10px 10px;
  border-bottom: 1px solid #a5a5a5;
}
</style>