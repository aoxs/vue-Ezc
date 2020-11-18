<template>
  <div class="dashboard-editor-container">
    <div style="background-color: #fff;border:1px solid #DADADA">
      <!-- 顶部搜索 -->
      <div style="display:flex;justify-content:flex-start;background:#F5F5F5;padding:10px 20px;border-bottom:1px solid #DADADA">

        <div style="width:70%;display:flex;justify-content:flex-start;">

          <el-input
            slot=""
            v-model="proNameValue"
            clearable
            placeholder="请输入名称"
            style="width:30%"
          >
            <template slot="prepend">
              项目名称
            </template>
          </el-input>

          <div class="selectCheck">

            <span
              class="check_font"
              style=""
            >项目类型</span>
            <el-select
              v-model="proTypeListValue"
              clearable
              placeholder="请选择"
              style="width:70%"
            >
              <el-option
                v-for="item in proTypeList"
                :key="item.ID"
                :label="item.Name"
                :value="item.Code"
              />

            </el-select>
          </div>

          <div class="selectCheck">

            <span
              class="check_font"
              style=""
            >项目状态</span>
            <el-select
              v-model="proStatusListValue"
              clearable
              placeholder="请选择"
              style="width:70%"
            >
              <el-option
                v-for="item in proStatusList"
                :key="item.ID"
                :label="item.Name"
                :value="item.Code"
              />
            </el-select>
          </div>

        </div>
        <div>
          <el-button
            size="small"
            plain
            @click="changeClick"
          ><i class="el-icon-search" />查询</el-button>
          <el-button
            size="small"
            plain
            @click="resetClick"
          ><i class="el-icon-refresh" />重置</el-button>
        </div>
      </div>
      <!-- 顶部搜索end -->

      <!-- 信息表操作按钮 -->
      <div style="display:flex;justify-content:flex-end;margin-top:20px;margin-bottom:10px;margin-right:20px">

        <el-button
          type="primary"
          size="small"
          @click="createPro"
        >
          <i class="el-icon-circle-plus" />
          新建
        </el-button>
        <el-button
          type="primary"
          size="small"
          @click="editPro"
        >
          <i class="el-icon-edit-outline" />
          编辑
        </el-button>
        <el-button
          type="primary"
          size="small"
          @click="proDelete"
        >
          <i class="el-icon-delete-solid" />

          删除
        </el-button>
      </div>
      <!-- 信息表操作按钮end -->

      <!-- 弹窗 -->
      <el-dialog
        :visible.sync="dialogProCreate"
        :title="dialogType==='edit'?'编辑项目':'新建项目'"
        :before-close="handleClose"
        width="90%"
        style=""
        top="10px"
      >
        <div style="height:65vh;overflow: auto;padding:10px 10px;margin-bottom:5px">
          <el-form
            :model="pro"
            label-width="110px"
            label-position="right"
            style="white-space: nowrap;"
          >
            <el-row :gutter="10">
              <el-col
                :sm="8"
                :xs="24"
                :offset="0"
              >
                <el-form-item label="项目名称:">
                  <el-input
                    v-model="pro.Project_Name"
                    placeholder="项目名称"
                  />
                </el-form-item>
              </el-col>
              <!-- <el-col :sm="8"
                      :xs="24"
                      :offset="0">
                <el-form-item label="排序顺序:">
                  <el-input placeholder="排序顺序"></el-input>
                </el-form-item>
              </el-col> -->
              <el-col
                :sm="8"
                :xs="24"
                :offset="0"
              >
                <el-form-item label="项目类型:">
                  <!-- <el-input v-model="pro.Project_Type"
                            placeholder="请选择"></el-input> -->
                  <el-select
                    v-model="pro.Project_Type"
                    style="width:100%"
                  >
                    <el-option
                      v-for="item in proTypeList"
                      :key="item.Code"
                      :label="item.Name"
                      :value="item.Code"
                    />
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col
                :sm="8"
                :xs="24"
              >

                <el-form-item label="项目状态:">
                  <!-- <el-input v-model="pro.Status"
                                placeholder="请选择"></el-input> -->
                  <el-select
                    v-model="pro.Status"
                    style="width:100%"
                  >
                    <el-option
                      v-for="item in proStatusList"
                      :key="item.Code"
                      :label="item.Name"
                      :value="item.Code"
                    />
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col
                :sm="8"
                :xs="24"
                :offset="0"
              >
                <el-form-item label="项目图片:">
                  <el-upload
                    class="upload-demo"
                    action=""
                    :on-preview="handlePreview"
                    :on-remove="handleRemove"
                    :file-list="fileList"
                    list-type="picture"
                  >
                    <el-button
                      size="small"
                      type="primary"
                    >上传</el-button>
                    <el-button
                      style="margin-left: 10px;"
                      size="small"
                      type="success"
                      @click="submitUpload"
                    >上传到服务器</el-button>
                    <div
                      slot="tip"
                      class="el-upload__tip"
                    >
                      只能上传jpg/png文件，且不超过500kb
                      <!-- 字段名 Map_Img_Url -->
                    </div>
                  </el-upload>
                </el-form-item>
              </el-col>

              <el-col
                :sm="16"
                :xs="24"
                :offset="0"
              >
                <el-form-item label="节点配置:">
                  <el-select
                    v-model="proProStatus"
                    value-key=""
                    multiple
                    style="width:100%"
                    placeholder="请选择节点配置"
                  >
                    <el-option
                      v-for="item in codeConfig"
                      :key="item.id"
                      :label="item.label"
                      :value="item.id"
                    />
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col
                :sm="24"
                :xs="24"
                :offset="0"
              >
                <el-form-item label="地区选择:">
                  <v-distpicker
                    :province="pro.Province_ID"
                    :city="pro.City_ID"
                    :area="pro.Area_ID"
                    @selected="regionSelect"
                  />
                </el-form-item>
              </el-col>

              <el-col
                :sm="8"
                :xs="24"
                :offset="0"
              >
                <el-form-item label="街道:">
                  <el-input
                    v-model="pro.Street"
                    placeholder=""
                  />
                </el-form-item>
              </el-col>
              <el-col
                :sm="8"
                :xs="24"
                :offset="0"
              >
                <el-form-item label="坐落:">
                  <el-input
                    v-model="pro.Address"
                    placeholder=""
                  />
                </el-form-item>
              </el-col>
              <el-col
                :sm="8"
                :xs="24"
                :offset="0"
              >
                <el-form-item label="位置坐标:">
                  <el-input
                    v-model="pro.Position_Marker"
                    placeholder=""
                  />
                </el-form-item>
              </el-col>
              <el-col
                :sm="8"
                :xs="24"
                :offset="0"
              >
                <el-form-item label="开发商:">
                  <el-input
                    v-model="pro.Developer"
                    placeholder=""
                  />
                </el-form-item>
              </el-col>
              <el-col
                :sm="8"
                :xs="24"
                :offset="0"
              >
                <el-form-item label="征收事务中心:">
                  <el-input
                    v-model="pro.Expropriation"
                    placeholder=""
                  />
                </el-form-item>
              </el-col>
              <el-col
                :sm="8"
                :xs="24"
                :offset="0"
              >
                <el-form-item label="实施单位:">
                  <el-input
                    v-model="pro.ImplementUnit"
                    placeholder=""
                  />
                </el-form-item>
              </el-col>

              <el-col
                :sm="8"
                :xs="0"
                :offset="8"
              />

              <el-col
                :sm="8"
                :xs="24"
                :offset="0"
              >
                <el-form-item label="总户数:">
                  <el-input
                    v-model="pro.Total_Household_Count"
                    placeholder=""
                  />
                </el-form-item>
              </el-col>
              <el-col
                :sm="8"
                :xs="24"
                :offset="0"
              >
                <el-form-item label="总占地面积:">
                  <el-input
                    v-model="pro.Total_Land_Area"
                    placeholder=""
                  >
                    <template slot="append">m²</template>
                  </el-input>
                </el-form-item>
              </el-col>
              <el-col
                :sm="8"
                :xs="24"
                :offset="0"
              >
                <el-form-item label="总建筑面积:">
                  <el-input
                    v-model="pro.Total_Constructure_Area"
                    placeholder=""
                  >
                    <template slot="append">m²</template>
                  </el-input>
                </el-form-item>
              </el-col>
              <el-col
                :sm="8"
                :xs="24"
                :offset="0"
              >
                <el-form-item label="现状容积率:">
                  <el-input
                    v-model="pro.CurrentPlotRatio"
                    placeholder=""
                  />
                </el-form-item>
              </el-col>
              <el-col
                :sm="8"
                :xs="24"
                :offset="0"
              >
                <el-form-item label="规划建设面积:">
                  <el-input
                    v-model="pro.PlanConstructionArea"
                    placeholder=""
                  >
                    <template slot="append">m²</template>
                  </el-input>
                </el-form-item>
              </el-col>
              <el-col
                :sm="8"
                :xs="24"
                :offset="0"
              >
                <el-form-item label="回迁房面积:">
                  <el-input
                    v-model="pro.MoveBackHouseArea"
                    placeholder=""
                  >
                    <template slot="append">m²</template>
                  </el-input>
                </el-form-item>
              </el-col>
              <el-col
                :sm="8"
                :xs="24"
                :offset="0"
              >
                <el-form-item label="保障房面积:">
                  <el-input
                    v-model="pro.SafeguardHouseArea"
                    placeholder=""
                  >
                    <template slot="append">m²</template>
                  </el-input>
                </el-form-item>
              </el-col>
              <el-col
                :sm="8"
                :xs="24"
                :offset="0"
              >
                <el-form-item label="总补偿款:">
                  <el-input
                    v-model="pro.Total_Compensation_Price"
                    placeholder=""
                  >
                    <template slot="append">万元</template>
                  </el-input>
                </el-form-item>
              </el-col>
              <el-col
                :sm="8"
                :xs="24"
                :offset="0"
              >
                <el-form-item label="安置房总数量:">
                  <el-input
                    v-model="pro.Total_Arrange_Room_Count"
                    placeholder=""
                  />
                </el-form-item>
              </el-col>
              <el-col
                :sm="8"
                :xs="24"
                :offset="0"
              >
                <el-form-item label="安置房总面积:">
                  <el-input
                    v-model="pro.Total_Arrange_Room_Area"
                    placeholder=""
                  >
                    <template slot="append">m²</template>
                  </el-input>
                </el-form-item>
              </el-col>
              <el-col
                :span="24"
                :offset="0"
              >
                <!-- <div style="display: table-cell;vertical-align:middle"> -->

                <el-form-item label="项目基本情况:">
                  <tinymce
                    v-if="dialogProCreate"
                    v-model="pro.Description"
                    :height="300"
                  />
                </el-form-item>
                <!-- </div> -->
              </el-col>
            </el-row>
          </el-form>

        </div>
        <div style="text-align:right;">
          <el-button
            type="info"
            @click="dialogProCreate=false;"
          >取消</el-button>
          <el-button
            type="primary"
            @click="updataPro"
          >保存</el-button>
        </div>
      </el-dialog>

      <!-- 弹窗end -->

      <!-- 信息表 -->
      <el-table
        ref="multipleTable"
        v-loading="proLoading"
        :data="InsProject"
        style="margin:10px auto;width:98%"
        tooltip-effect="dark"
        border
        stripe
        @selection-change="handleSelectionChange"
      >

        <el-table-column
          type="selection"
          width="45"
          align="center"
        />
        <!-- <el-table-column prop="proId"
                         label="项目ID"
                         width="65"
                         align="center">
        </el-table-column> -->
        <el-table-column
          prop="Project_Name"
          label="项目名称"
          width=""
        />
        <el-table-column
          prop="Project_Type"
          label="项目类型"
          align="center"
          width=""
          :formatter="Project_Type"
        />
        <el-table-column
          prop="Status"
          label="项目状态"
          align="center"
          width=""
          :formatter="ProStatus"
        />
        <el-table-column
          prop="Province_ID"
          label="省份"
          align="center"
          width=""
        />
        <el-table-column
          prop="City_ID"
          label="城市"
          align="center"
          width=""
        />
        <el-table-column
          prop="Area_ID"
          label="区县"
          align="center"
          width=""
        />
        <el-table-column
          prop="Address"
          label="坐落"
          width=""
        />
        <el-table-column
          prop="Street"
          label="街道"
          width=""
        />
        <el-table-column
          prop="Developer"
          label="开发商"
          width=""
        />
        <!-- <el-table-column prop=""
                         label="政府"
                         width="">
        </el-table-column> -->
        <el-table-column
          prop="Expropriation"
          label="征收事务中心"
          width=""
        />
        <el-table-column
          prop="Total_Household_Count"
          label="总户数"
          align="center"
          width=""
        />
        <el-table-column
          prop="Total_Land_Area"
          label="总占地面积(m²)"
          align="center"
          width=""
          show-overflow-tooltip
        />
        <el-table-column
          prop="Total_Constructure_Area"
          label="总建筑面积(m²)"
          align="center"
          width=""
          show-overflow-tooltip
        />
        <el-table-column
          prop="Total_Arrange_Room_Count"
          label="安置房总数量(套)"
          align="center"
          width=""
          show-overflow-tooltip
        />
        <el-table-column
          prop="Total_Arrange_Room_Area"
          label="安置房总面积(m²)"
          align="center"
          width=""
          show-overflow-tooltip
        />
        <el-table-column
          prop="Total_Compensation_Price"
          label="总补偿款(万元)"
          align="center"
          width=""
          show-overflow-tooltip
        />

      </el-table>
      <!-- 信息表end -->
      <!-- 分页 -->
      <!-- <div class="pagRight">
        <pagination v-show="InsProject.length>=10"
                    :total="InsProject.length"
                    :layout="layout">
        </pagination>
      </div> -->
      <!-- 分页end -->
    </div>
  </div>
</template>

<script>
import { deepClone } from '@/utils'
import Tinymce from '@/components/Tinymce'
import Pagination from '@/components/Pagination'
import VDistpicker from 'v-distpicker'

const defaultRole = {
  // "Address": "",
  // "Area_ID": 0,
  // "BelongTo": "",
  // "City_ID": 0,
  // "Create_Date": "",
  // "Create_User_ID": 0,
  // "Create_User_Name": "",
  // "CurrentPlotRatio": 0,
  // "Description": "",
  // "Developer": "",
  // "Expropriation": "",
  // "Government": "",
  // "ImplementUnit": "",
  // "Map_Img_Url": "",
  // "Map_Pro_Url": "",
  // "Modify_Date": "",
  // "Modify_User_ID": 0,
  // "Modify_User_Name": "",
  // "MoveBackHouseArea": 0,
  // "PlanConstructionArea": 0,
  // "PlanPlotRatio": 0,
  // "Position_Marker": "",
  // "Project_ID": 0,
  // "Project_Name": "",
  // "Project_Type": 0,
  // "Province_ID": 0,
  // "SafeguardHouseArea": 0,
  // "SortIndex": 0,
  // "Status": 0,
  // "Street": "",
  // "Total_Arrange_Room_Area": 0,
  // "Total_Arrange_Room_Count": 0,
  // "Total_Compensation_Price": 0,
  // "Total_Constructure_Area": 0,
  // "Total_Household_Count": 0,
  // "Total_Land_Area": 0,
}

export default {

  components: { Tinymce, Pagination, VDistpicker },
  data() {
    return {
      proLoading: false,
      proNameValue: '',
      proTypeListValue: '',
      proStatusListValue: '',
      proProStatus: [1, 2, 3],
      codeConfig: [
        {
          id: 1,
          label: '权属申报'
        }, {
          id: 2,
          label: '测绘'
        }, {
          id: 3,
          label: '评估'
        }, {
          id: 4,
          label: '确权'
        }, {
          id: 5,
          label: '签约'
        }, {
          id: 6,
          label: '付款'
        }, {
          id: 7,
          label: '房屋移交'
        }, {
          id: 8,
          label: '产权注销'
        }
      ],
      // option1: [
      //   {
      //     id: '1',
      //     label: '城市更新'
      //   }, {
      //     id: '2',
      //     label: '土地整备'
      //   }, {
      //     id: '3',
      //     label: '房屋征收'
      //   }
      // ],
      // option2: [
      //   {
      //     id: '3',
      //     label: '前期'
      //   }, {
      //     id: '4',
      //     label: '中期'
      //   }, {
      //     id: '5',
      //     label: '后期'
      //   }
      // ],
      multipleSelection: [],
      tableData: [
        { proId: 1, ProName: '水乡新城片区首期土地整备', ProType: 4, provinces: '广东省', city: '东莞市', county: '水乡', located: '广东省东莞水乡', developers: '华夏幸福基业股份有限公司', gove: '滨海湾新区管委会、虎门镇人民政府', transaction: '东莞市滨海湾新区威远岛土地整备现场指挥部', houseNum: 2000, coversArea: 1200000, conArea: 1010000, rehousingNum: 0, rehousingArea: 0, compensation: 0, ProStatus: '1', content: '<i>abc</i><br><b>123</b>' },
        { proId: 2, ProName: '水乡新城片区首期土地整备', ProType: 1, provinces: '广东省', city: '东莞市', county: '水乡', located: '广东省东莞水乡', developers: '华夏幸福基业股份有限公司', gove: '滨海湾新区管委会、虎门镇人民政府', transaction: '东莞市滨海湾新区威远岛土地整备现场指挥部', houseNum: 2000, coversArea: 1200000, conArea: 1010000, rehousingNum: 0, rehousingArea: 0, compensation: 0, ProStatus: '5', content: '<i>111</i><br><b>aaa</b>' },
        { proId: 3, ProName: '水乡新城片区首期土地整备', ProType: 0, provinces: '广东省', city: '东莞市', county: '水乡', located: '广东省东莞水乡', developers: '华夏幸福基业股份有限公司', gove: '滨海湾新区管委会、虎门镇人民政府', transaction: '东莞市滨海湾新区威远岛土地整备现场指挥部', houseNum: 2000, coversArea: 1200000, conArea: 1010000, rehousingNum: 0, rehousingArea: 0, compensation: 0, ProStatus: '0', content: '<i>212</i><br><b>asa</b>' }
      ],
      pro: Object.assign({}, defaultRole),
      dialogType: 'edit',
      dialogProCreate: false,
      fileList: [],
      proTypeList: [],
      proStatusList: [],
      InsProject: []
    }
  },
  mounted() {
    // 筛查：项目类型
    this.axios.get('/ProjectTS?code=BUSINESS_PROJECT_TYPE').then((res) => {
      // console.log(res.data.list)
      this.proTypeList = res.data.list
    })
    // 筛查：项目状态
    this.axios.get('/ProjectTS?code=BUSINESS_PROJECT_STATUS').then((res) => {
      // console.log(res.data.list)
      this.proStatusList = res.data.list
    })
    // 请求表数据
    this.getTable()
  },
  methods: {
    // 地区选择
    regionSelect(data) {
      console.log(data, 1111)
      this.pro.Province_ID = data.province.value
      this.pro.City_ID = data.city.value
      this.pro.Area_ID = data.area.value
    },

    // 加载表数据
    getTable() {
      this.InsProject = []
      this.proLoading = true
      this.axios({
        method: 'post',
        url: '/queryProject',
        data: {
          'ProjectName': '',
          'ProjectType': '0',
          'ProjectStatus': '0'
        }
      })
        // .post('/queryProject',this.qs.stringify(obj))
        .then((res) => {
          this.InsProject = res.data
          this.proLoading = false
        })
    },

    // 查询/重置 按钮
    changeClick() {
      // this.$alert('开发中', "提示", {
      //   confirmButtonText: '确认',
      //   type: 'info'
      // })
      // let obj = {
      //   "ProjectName": this.proNameValue,
      //   "ProjectType": this.proTypeListValue,
      //   "ProjectStatus": this.proStatusListValue
      // }
      // if (this.proNameValue == '' && this.proTypeListValue == '' && this.proStatusListValue == '') {

      // }
      console.log(this.proNameValue)
      console.log(this.proTypeListValue)
      console.log(this.proStatusListValue)

      var proN = this.proNameValue
      var proT = this.proTypeListValue
      var proS = this.proStatusListValue
      if (this.proNameValue == '') {
        var proN = ''
      }
      if (this.proTypeListValue == '') {
        var proT = '0'
      }
      if (this.proStatusListValue == '') {
        var proS = '0'
      }

      this.InsProject = []
      this.axios({
        method: 'post',
        url: '/queryProject',
        data: {
          'ProjectName': proN,
          'ProjectType': proT,
          'ProjectStatus': proS
        }
      })
        // .post('/queryProject',this.qs.stringify(obj))
        .then((res) => {
          console.log(res.data)
          if (res.data.length == 0) {
            this.InsProject = []
          } else {
            this.InsProject = res.data
          }
        })
      // .cath((Error) => {
      //   console.log(Error)
      // })
    },
    resetClick() {
      this.proNameValue = ''
      this.proTypeListValue = ''
      this.proStatusListValue = ''
      this.getTable()
    },
    // 勾选
    handleSelectionChange(val) {
      this.multipleSelection = val

      console.log(this.multipleSelection)
    },
    // 表格 格式化内容
    Project_Type(row, column) {
      if (row.Project_Type == 1) {
        return '房屋征收'
      } else if (row.Project_Type == 2) {
        return '城市更新'
      } else if (row.Project_Type == 3) {
        return '土地整备'
      } else if (row.Project_Type == 4) {
        return '棚户区改造'
      } else if (row.Project_Type == 5) {
        return '其它'
      } else {
        return '-'
      }
    },
    ProStatus(row, column) {
      if (row.Status == 1) {
        return '前期阶段'
      } else if (row.Status == 2) {
        return '确权阶段'
      } else if (row.Status == 3) {
        return '签约阶段'
      } else if (row.Status == 4) {
        return '移交房屋阶段'
      } else if (row.Status == 5) {
        return '拆除阶段'
      } else if (row.Status == 6) {
        return '产权注销阶段'
      } else if (row.Status == 7) {
        return '档案整理阶段'
      } else if (row.Status == 8) {
        return '已完成'
      } else {
        return '-'
      }
    },

    // 增删改按钮
    createPro() {
      this.pro = Object.assign({}, defaultRole)
      console.log(this.pro)
      this.dialogProCreate = true

      this.dialogType = 'add'
      // this.$alert('跳转-新增项目', "提示", {
      //   confirmButtonText: '确认',
      //   type: 'info'
      // })
    },
    // 编辑
    editPro() {
      if (this.multipleSelection.length == 0) {
        this.$alert('未选中项目', '提示', {
          confirmButtonText: '确认',
          type: 'info'
        })
      } else if (this.multipleSelection.length > 1) {
        this.$alert('很抱歉,一次只能选择一条记录', '提示', {
          confirmButtonText: '确认',
          type: 'info'
        })
      } else {
        this.dialogType = 'edit'
        this.dialogProCreate = true
        this.pro = deepClone(this.multipleSelection[0])
        console.log(this.pro)
      }
    },
    // 保存
    updataPro() {
      console.log(this.pro.Province_ID)
      var d = new Date()
      var year = d.getFullYear()
      var month = d.getMonth() + 1
      month = month < 10 ? '0' + month : month
      var date = d.getDate()
      date = date < 10 ? '0' + date : date
      var hours = d.getHours()
      var minutes = d.getMinutes()
      minutes = minutes < 10 ? '0' + minutes : minutes
      var seconds = d.getSeconds()
      seconds = seconds < 10 ? '0' + seconds : seconds
      var Milliseconds = d.getMilliseconds()
      if (!this.pro.Create_Date) {
        this.pro.Create_Date = year + '-' + month + '-' + date + 'T' + hours + ':' + minutes + ':' + seconds + '.' + Milliseconds
        this.pro.Modify_Date = year + '-' + month + '-' + date + 'T' + hours + ':' + minutes + ':' + seconds + '.' + Milliseconds
      } else {
        this.pro.Modify_Date = year + '-' + month + '-' + date + 'T' + hours + ':' + minutes + ':' + seconds + '.' + Milliseconds
      }

      if (!this.pro.Project_Name) {
        this.$message({
          type: 'error',
          message: '项目名称不能为空!'
        })
      } else {
        console.log(this.pro)
        this.axios.post('/InsProject', this.pro)
          .then((res) => {
            console.log(res.data)
            this.$message({
              type: 'success',
              message: '编辑成功。'
            })
            this.getTable()
          })
        this.dialogProCreate = false

        this.pro = []
      }
    },
    handleClose(done) {
      this.$confirm('确定关闭？')
        .then((_) => {
          done()
          this.editDialogVisible = false
        })
        .catch((_) => {

        })
    },
    // 删除
    proDelete() {
      if (this.multipleSelection.length == 0) {
        this.$alert('未选中项目', '删除', {
          confirmButtonText: '确认',
          type: 'info'
        })
      } else if (this.multipleSelection.length > 1) {
        this.$alert('最多只能同时执行一条', '删除', {
          confirmButtonText: '确认',
          type: 'info'
        })
      } else {
        this.$confirm('确认删除?', '警告', {
          confirmButtonText: '确认',
          cancelButtonText: '取消',
          type: 'warning'
        })
          .then(() => {
            console.log(this.multipleSelection[0].ID)
            var delId = this.multipleSelection[0].ID
            this.axios.get('/delProject?Id=' + delId)
              .then((res) => {
                if (res.data.code == 1) {
                  this.$message({
                    type: 'success',
                    message: '删除成功。'
                  })
                } else {
                  this.$message({
                    type: 'error',
                    message: '删除失败!'
                  })
                }
                this.getTable()
              })
            // let j = this.multipleSelection.length
            // for (var i = 0; i < j; i++) {
            //   let id = this.multipleSelection[i].proId
            //   let _InsProject = this.InsProject.find(x => x.proId == id)
            //   console.log(_InsProject)
            //   this.InsProject.splice(this.InsProject.indexOf(_InsProject), 1)
            // }
            // this.rolesList.splice($index, 1)
          })
      }
    },

    // 图片上传
    submitUpload() {
      this.$refs.upload.submit()
    },
    handlePreview(file) {
      console.log(file)
    },
    handleRemove(file, fileList) {
      console.log(file, fileList)
    }
  }
}
</script>

<style lang="scss" scoped>
::v-deep .selectCheck .el-input__inner {
  border: 0px !important;
  border-radius: 0px;
}
.el-form-item {
  margin-bottom: 5px;
}
.selectCheck {
  width: 30%;
  margin-left: 20px;
  display: flex;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  overflow: hidden;
}
.check_font {
  display: block;
  width: 35%;
  padding: 10px 10px;
  font-size: 14px;
  color: #909399;
  background-color: #f5f7fa;
  border-right: 1px solid #dcdfe6;
  white-space: nowrap;
  text-align: center;
}
</style>
