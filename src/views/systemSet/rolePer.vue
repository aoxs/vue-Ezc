<template>
  <div class="dashboard-editor-container">
    <div style="background-color: #fff;padding:10px 10px">
      <!-- 屏幕分成3列 -->
      <el-row :gutter="20">
        <!-- 角色选择 -->

        <el-col :xs="24"
                :sm="8"
                :offset="0">
          <div class="table"
               style="">
            <el-header height="56px"
                       style=""
                       class="tabHeader">
              <!-- Header content -->
              <div style="display:flex">

                <el-input placeholder="请输入内容"
                          v-model="roleSearchInput"
                          @change="">
                  <template slot="prepend">角色名称:</template>
                </el-input>
                <el-button type="primary"
                           size="mini"
                           @click="">查询</el-button>
              </div>
            </el-header>
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
            <el-table :data="roleTableData1"
                      border
                      stripe
                      style="margin:10px auto;width:90%"
                      tooltip-effect="dark"
                      highlight-current-row
                      @row-click="rowClick">
              <el-table-column label
                               width="35">
                <template slot-scope="scope">
                  <el-radio :label="scope.row.title"
                            v-model="radioId"></el-radio>
                </template>
              </el-table-column>
              <el-table-column prop="title"
                               label="角色名称"
                               width="">
              </el-table-column>
            </el-table>
            <div style="width: 100%; padding: 5px 10px">
              <div class="pagRight">
                <el-pagination @size-change="handleSizeChange"
                               @current-change="handleCurrentChange"
                               background
                               :page-size="5"
                               layout="total, prev, pager, next"
                               :total="roleTableData1.length">
                </el-pagination>
              </div>
            </div>
          </div>
        </el-col>
        <!-- 角色选择end -->
        <!-- 功能模块 -->
        <el-col :xs="24"
                :sm="8"
                :offset="0">
          <div class="table">
            <el-header height="56px"
                       style=""
                       class="tabHeader">
              <!-- Header content -->
              <div style="display:flex;justify-content: space-around;">
                <p style="padding: 0;margin: 0;line-height: 36px;">功能模块</p>
                <el-button type="danger">
                  <i class="el-icon-check" />
                  确定
                </el-button>
              </div>
            </el-header>

            <el-tree :data="roleTreeData1"
                     show-checkbox
                     node-key="id"
                     default-expand-all
                     :default-checked-keys="checkedKeys1"
                     :props="defaultProps">
            </el-tree>

          </div>
        </el-col>
        <!-- 功能模块end -->
        <!-- 按钮权限 -->
        <el-col :xs="24"
                :sm="8"
                :offset="0">
          <div class="table">
            <el-header height="56px"
                       style=""
                       class="tabHeader">
              <!-- Header content -->
              <div style="display:flex;justify-content: space-around;">
                <p style="padding: 0;margin: 0;line-height: 36px;">按钮权限</p>
                <el-button type="danger">
                  <i class="el-icon-check" />
                  确定
                </el-button>
              </div>
            </el-header>
            <el-header height="56px"
                       style=""
                       class="tabHeader">
              <!-- Header content -->
              <div style="display:flex;justify-content: space-around;">
                <p style="padding: 0;margin: 0;line-height: 36px;">上传文件分类</p>
                <el-button type="danger">
                  <i class="el-icon-check" />
                  确定
                </el-button>
              </div>
            </el-header>

            <el-tree :data="roleTreeData2"
                     show-checkbox
                     node-key="id"
                     default-expand-all
                     :default-checked-keys="checkedKeys2"
                     :props="defaultProps">
            </el-tree>

          </div>
        </el-col>
        <!-- 按钮权限end -->
      </el-row>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      roleSearchInput: '',
      checkedKeys1: [4, 1, 6],
      checkedKeys2: [1, 2, 3],
      roleTableData1: [
        { title: "abc1" },
        { title: "abc2" },
        { title: "abc3" },
        { title: "abc4" },
        { title: "abc5" },
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
      roleTreeData2: [
        {
          id: 1,
          label: '按钮权限',
          children: [{
            id: 4,
            label: '增',
            },
            {
              id: 9,
              label: '删'
            }, {
              id: 10,
              label: '改'
            }, {
              id: 11,
              label: '查'
            }
            
          ]
        }

      ],
      defaultProps: {
        children: 'children',
        label: 'label'
      },


    }
  },

  methods: {
    rowClick(row) {
      this.radioId = row.title
      console.log(row.title)
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },

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
  /* padding: 5px 5px; */
  overflow: hidden;
}
.tabHeader {
  background-color: #f5f5f5;
  padding: 10px 10px;
  border-bottom: 1px solid #a5a5a5;
}
</style>