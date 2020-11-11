<template>
  <div class="dashboard-editor-container">
    <div style="
        background-color: #fff;
        border: 1px solid #dddddd;
        border-radius: 5px;
        overflow: hidden;
      ">
      <div style="width: 95%; margin: 0 auto; padding-top: 20px ">

        <div style="display: flex;justify-content:space-around; align-items: center">
          <div style="
              width: 50%;
              margin: 20px 00px;
              display: flex;
              align-items: center;
            ">
            <el-input v-model="TitleSearch"
                      style="margin: 0 5px" clearable>
              <template slot="prepend"> 标题： </template>
            </el-input>

            <!-- <div style="white-space: nowrap; margin: 0 5px">
              重要程度：
              <el-rate v-model="importance"
                       :max="3"
                       :colors="['#99A9BF', '#F7BA2A', '#FF9900']"
                       :low-threshold="1"
                       :high-threshold="3"
                       style="display: inline-block" />
            </div> -->

            <el-button  @click="newsSearch()"><i class="el-icon-search" />查询</el-button>
            <!-- <el-button @click="newsReset()"><i class="el-icon-refresh" />重置</el-button> -->
          </div>
          <div style="padding-left: 15px; width: 40%">
            <!-- <el-button type="primary" size="mini" @click="createBtn()">
              <i class="el-icon-plus" style="font-weight: 1000" />新建
            </el-button> -->
            <div style="display:flex;  flex-direction: row-reverse;">
              <el-button style="margin-left: 10px;"
                         type="primary"
                         size="mini"
                         @click="chenkBtn()">
                <i class="el-icon-tickets" />查看详情
              </el-button>
              <el-button style="margin-left: 10px;"
                         type="primary"
                         size="mini"
                         @click="delBtn()"
                         icon="el-icon-delete">
                删除
              </el-button>
              <!-- <router-link to="/ProTools/createnews" > -->
                <el-button type="primary"
                           size="mini"
                           icon="el-icon-plus"
                           @click="createBtn" :disabled="CreateDisable">
                  新建
                </el-button>
              <!-- </router-link> -->

            </div>

          </div>

        </div>
        <el-table :data="tableData"
                  style="border-radius: 6px; margin-top: 10px"
                  stripe
                  border
                  tooltip-effect="dark"
                  @selection-change="handleSelectionChange">
          <el-table-column type="selection"
                           width="55"
                           align="center" />
          <el-table-column prop="NewsId"
                           label="ID"
                           width="55"
                           align="center"
                           show-overflow-tooltip />
          <el-table-column prop="title"
                           label="标题"
                           sortable
                           width=""
                           show-overflow-tooltip />
          <el-table-column prop="proDate"
                           label="发布时间"
                           sortable
                           show-overflow-tooltip
                           width="" />
          <el-table-column prop="proStatus"
                           label="发布状态"
                           sortable
                           width=""
                           show-overflow-tooltip />

          <el-table-column prop="howImp"
                           label="重要程度"
                           width=""
                           sortable
                           show-overflow-tooltip />
          <el-table-column prop="createUser"
                           label="创建用户名"
                           sortable
                           width=""
                           show-overflow-tooltip />
          <el-table-column prop="createDate"
                           label="创建时间"
                           sortable
                           width=""
                           show-overflow-tooltip />
          <el-table-column align="center" v-if="editDisable">
            <div slot-scope="scope">
              <router-link :to="'/proMang/editNews/' + scope.row.NewsId">
                <el-button size="mini"
                           @click="handleEdit(scope.$index, scope.row)" >
                           <i class="el-icon-edit-outline" />
                           编辑
                           </el-button>
              </router-link>

              <!-- 
              <el-dialog
                title="提示"
                :visible.sync="centerDialogVisible"
                width="80%"
                :before-close="handleClose"
              >
                <span>点击编辑</span>
                <p>标题为《{{ clickUserRes[0] }}》</p>
                <span slot="footer">
                  <el-button @click="userEupdata()">取消</el-button>
                  <el-button type="primary" @click="userEback()"
                    >确认</el-button
                  >
                </span>
              </el-dialog> -->
            </div>
          </el-table-column>
        </el-table>

        <!-- 组织结构表end -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
  data() {
    return {
      tableData: [
        {
          NewsId: "1",
          title: "1.英联项目新动态||轨道建设土地整备 英联一直在路上",
          proDate: "2020-08-02",
          proStatus: "0",
          howImp: "3",
          createUser: "admin",
          createDate: "2020-08-02",
        },
        {
          NewsId: "2",
          title: "2.英联项目新动态||轨道建设土地整备 英联一直在路上",
          proDate: "2020-08-02",
          proStatus: "0",
          howImp: "2",
          createUser: "admin",
          createDate: "2020-08-02",
        },
        {
          NewsId: "300",
          title: "3.英联项目新动态||轨道建设土地整备 英联一直在路上",
          proDate: "2020-08-02",
          proStatus: "1",
          howImp: "3",
          createUser: "admin",
          createDate: "2020-08-02",
        },
        {
          NewsId: "4000",
          title: "4.英联项目新动态||轨道建设土地整备 英联一直在路上",
          proDate: "2020-08-02",
          proStatus: "1",
          howImp: "1",
          createUser: "admin",
          createDate: "2020-08-02",
        },
        {
          NewsId: "50000",
          title: "5.英联项目新动态||轨道建设土地整备 英联一直在路上",
          proDate: "2020-08-02",
          proStatus: "0",
          howImp: "3",
          createUser: "admin",
          createDate: "2020-08-02",
        },
        {
          NewsId: "60",
          title: "6.英联项目新动态||轨道建设土地整备 英联一直在路上",
          proDate: "2020-08-02",
          proStatus: "0",
          howImp: "3",
          createUser: "admin",
          createDate: "2020-08-02",
        },
      ],
      list: null,
      listLoading: true,
      downloadLoading: false,
      filename: "",
      autoWidth: true,
      bookType: "xlsx",
      centerDialogVisible: false,
      multipleSelection: [],
      clickUserRes: [],
      TitleSearch: "",
      importance: 0,
      // 用户新建权限：true 禁用；false 可用
      CreateDisable: false,
      // 用户编辑权限：true 可用；false 禁用
      editDisable: true,
    };
  },
  created() {
    // this.fetchData(); 
    if(this.$store.getters.roles[0]=='admin'){
        this.CreateDisable = false
        this.editDisable = true
    }else{
      this.CreateDisable = true
      this.editDisable = false
    }
    console.log(this.$store.getters.roles[0])
  },
  methods: {
    newsSearch() {
      console.log(this.TitleSearch);
    },
    
    createBtn() { 
      this.$router.push("/proMang/createnews");
    },
    delBtn() { },
    checkBtn() { },
    fetchData() {
      // this.listLoading = true;
      // fetchList().then((response) => {
      //   this.list = response.data.items;
      //   this.listLoading = false;
      // });
    },
    // handleDownload() {
    //   this.downloadLoading = true;
    //   import("@/vendor/Export2Excel").then((excel) => {
    //     const tHeader = ["登录名", "名称", "所属机构", "联系电话", "角色"];
    //     const filterVal = ["登录名", "名称", "所属机构", "联系电话", "角色"];
    //     const list = this.list;
    //     const data = this.formatJson(filterVal, list);
    //     excel.export_json_to_excel({
    //       header: tHeader,
    //       data,
    //       filename: this.filename,
    //       autoWidth: this.autoWidth,
    //       bookType: this.bookType,
    //     });
    //     this.downloadLoading = false;
    //   });
    // },
    formatJson(filterVal, jsonData) {
      return jsonData.map((v) =>
        filterVal.map((j) => {
          if (j === "timestamp") {
            return parseTime(v[j]);
          } else {
            return v[j];
          }
        })
      );
    },

    /////////////////////////

    handleSelectionChange(val) {
      this.multipleSelection = val;
      console.log(val);
    },
    handleEdit(index, row) {
      console.log(index, row);
      this.clickUserRes = [];
      this.centerDialogVisible = true;
      this.clickUserRes.push(
        row.NewsId,
        row.title,
        row.proDate,
        row.proStatus,
        row.howImp,
        row.createUser,
        row.createDate
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
  },
};
</script>

<style>
</style>
