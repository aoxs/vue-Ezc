<template>
<div>
  <div style=""
       class="groupTree">
    <el-tree :data="groupData"
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
    }
  },
  methods: {
    handleNodeClick(data) {
      console.log(data.id);
    },
  }
}
</script>

<style scoped>
.groupTree {
  width: 180px;
  height: 530px;
  border-right: 2px solid #f0f2f5;
  padding: 10px;
  padding-top: 20px;
}
</style>