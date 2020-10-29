<template>
  <div>
    <div style=""
         class="groupTree">
      <el-tree :data="government"
               :expand-on-click-node="false"
               @node-click="handleNodeClick"></el-tree>
      <el-tree :data="impl"
               :expand-on-click-node="false"
               @node-click="handleNodeClick"></el-tree>
      <el-tree :data="consulting"
               :expand-on-click-node="false"
               @node-click="handleNodeClick"></el-tree>
      <el-tree :data="owner"
               :expand-on-click-node="false"
               @node-click="handleNodeClick"></el-tree>
    </div>
  </div>

</template>

<script>
export default {
  name: 'UserGroup',
  data() {
    return {
      government: [
        {
          id: 4988,
          label: '政府部门',
          children: [
            {}
          ]
        }
      ],
      impl: [
        {
          id: 4999,
          label: '实施主体',
          children: [
            {}
          ]
        }
      ],
      consulting: [
        {
          id: 3,
          label: '全程咨询',
          children: [
            {
              id: 124,
              label: '英联公司',
              table: 'YLData',
              children: [
                {
                  id: 5123,
                  label: '谈判小组',
                  table: 'testData',

                  children: [
                    {
                      id: 7654,
                      label: '望牛墩指挥部',
                    },
                    {
                      id: 245,
                      label: '洪梅指挥部',
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      owner: [
        {
          id: 4956,
          label: '单位业主',
          children: [
            {}
          ]
        }
      ],
    }
  },
  methods: {
    handleNodeClick(e) {
      console.log(e.id);
      console.log(e.table);
      this.$emit('childFn', e.table);
    },
  }
}
</script>

<style scoped>
.groupTree {
  width: 190px;
  height: 530px;
  border-right: 2px solid #f0f2f5;
  padding: 10px;
  padding-top: 20px;
}
</style>