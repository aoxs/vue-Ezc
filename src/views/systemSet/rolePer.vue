<template>
  <div class="dashboard-editor-container">
    <div style="background-color: #fff;padding:10px 10px">
      <!-- 屏幕分成3列 -->
      <el-row :gutter="20">

        <el-col :xs="24"
                :sm="8"
                :offset="0">
          <!-- 角色选择 -->
          <role-group></role-group>
          <!-- 角色选择end -->
        </el-col>

        <!-- 功能模块 -->
        <el-col :xs="24"
                :sm="8"
                :offset="0">
          <tree-data1></tree-data1>
          
        </el-col>
        <!-- 功能模块end -->

        <!-- 权限3 -->
        <el-col :xs="24"
                :sm="8"
                :offset="0">
          <div class="table">
            <!-- 按钮权限 -->

            <tree-data2></tree-data2>

            <!-- <div style="margin:10px 10px;">
              <el-checkbox-group v-model="checkboxBottom">
                <el-checkbox-button v-for="city in cities"
                                    :label="city"
                                    :key="city">{{city}}</el-checkbox-button>
              </el-checkbox-group>
            </div> -->

            <!-- 按钮权限end -->

            <!-- 上传文件分类 -->
            <tree-data3></tree-data3>
            <!-- 上传文件分类end -->
          </div>
        </el-col>
        <!-- 权限3end -->
      </el-row>

    </div>
  </div>
</template>

<script>
import RoleGroup from './components/RoleGroup'
import TreeData1 from './components/TreeData1'
import TreeData2 from './components/TreeData2'
import TreeData3 from './components/TreeData3'
export default {
  components: { RoleGroup, TreeData1, TreeData2, TreeData3 },
  data() {
    return {

      checkedKeys1: [4, 1, 6],
      checkedKeys2: [1, 2, 3],

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
      // checkboxBottom: ['上海'],
      // cities: ['新增', '修改', '删除', '查看详情'],
      checkboxBottom: {
        type: [],
      }
    }
  },

  methods: {
    // onSubmit() {
    //   console.log(this.checkboxBottom.type);
    // },
    // rowClick(row) {
    //   this.radioId = row.title
    //   console.log(row.title)
    // },
    // handleSizeChange(val) {
    //   console.log(`每页 ${val} 条`);
    // },
    // handleCurrentChange(val) {
    //   console.log(`当前页: ${val}`);
    // },

  },
  mounted() {

  }
}
</script>


<style scoped>
.pagRight {
  /* background-color: #0ff; */
  display: flex;

  flex-direction: row-reverse;
}
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
  border-bottom: 1px solid #a5a5a5;
}
</style>