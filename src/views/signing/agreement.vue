<template>
  <div class="dashboard-editor-container">
    <div style="background-color: #fff; border: 1px solid #dadada">
      <!-- 顶部 -->
      <div style="
          background: #f5f5f5;
          padding: 10px 20px;
          border-bottom: 1px solid #dadada;

        ">
        <div style="display:flex;justify-content: space-between;">

          <!-- 顶部搜索 -->
          <div style="display: flex; justify-content: flex-start;">
            <!-- <el-input slot=""
                    v-model="PartyA"
                    clearable
                    placeholder="请输入名称"
                    style="width: 20%">
            <template slot="prepend"> 小组： </template>
          </el-input> -->

            <div class="selectCheck">
              <span class="check_font"
                    style="">小组：</span>
              <el-select v-model="repTem"
                         clearable
                         placeholder="请选择"
                         style="width: 80%">
                <el-option v-for="item in repTemList"
                           :key="item.id"
                           :label="item.label"
                           :value="item.id" />
              </el-select>
            </div>
            <el-input slot=""
                      v-model="PartyB"
                      clearable
                      placeholder="请输入名称"
                      style="width:35%;margin-left:5px;">
              <template slot="prepend"> 乙方： </template>
            </el-input>
            <div>
              <el-button size="small"
                         style="margin-left: 10px"
                         plain
                         @click="changeClick"><i class="el-icon-search" />查询</el-button>
              <el-button size="small"
                         style="margin-left: 5px"
                         plain
                         @click="resetClick"><i class="el-icon-refresh" />重置</el-button>
            </div>
          </div>
          <!-- 按钮 -->
          <div style="display: flex;justify-content: flex-end; margin-right: 5px;
        ">
            <el-button type="primary"
                       size="small"
                       @click="createSig">
              <i class="el-icon-circle-plus" />
              新建
            </el-button>
            <el-button type="primary"
                       size="small"
                       @click="editSig">
              <i class="el-icon-edit-outline" />
              编辑
            </el-button>
            <el-button type="primary"
                       size="small"
                       @click="showSig">
              <i class="el-icon-edit-outline" />
              查看详情
            </el-button>
            <el-button type="primary"
                       size="small"
                       @click="delSig">
              <i class="el-icon-delete-solid" />

              删除
            </el-button>
          </div>
          <!-- 按钮end -->
        </div>
        <!-- 顶部搜索end -->
        <div class="shengyuDiv"
             style="color:#909399;margin-right:5px;min-width: 265px;margin-top: 5px">
          <div>住宅:<span>{{NumType.Housenum}}</span></div>
          <div>办公:<span>{{NumType.Officenum}}</span></div>
          <div>厂房:<span>{{NumType.Factornum}}</span></div>
          <el-button type="success"
                     style="padding:5px 5px;font-size:16px;font-weight:600;margin-left: 10px"
                     size="small"
                     @click="resetNumType"><i class="el-icon-refresh-right" /></el-button>

        </div>

        <!-- 报告模板 -->
        <!-- <div class="selectCheck">
            <span class="check_font"
                  style="">报告模板：</span>
            <el-select v-model="repTem"
                       clearable
                       placeholder="请选择"
                       style="width: 70%">
              <el-option v-for="item in repTemList"
                         :key="item.id"
                         :label="item.label"
                         :value="item.id" />
            </el-select>
          </div>
          <el-button size="small"
                     style="margin-left: 5px;margin-right:10px"
                     plain
                     @click="printClick"><i class="el-icon-printer" />打印</el-button> -->
        <!-- <div class="selectCheck">
            <span class="check_font"
                  style="">补偿方式：</span>
            <el-select v-model="repTem"
                       clearable
                       placeholder="请选择"
                       style="width: 70%">
              <el-option v-for="item in repTemList"
                         :key="item.id"
                         :label="item.label"
                         :value="item.id" />
            </el-select>
          </div>
          <el-button size="small"
                     style="margin-left: 5px"
                     plain
                     @click="fillClick"><i class="el-icon-printer" />确定</el-button> -->

        <!-- 报告模板end -->
      </div>
      <!-- 顶部end -->
      <!-- 报告模板弹窗 -->
      <div class="dialogTemp">
        <el-dialog :title="dialogType"
                   :visible.sync="dialogSigTemp"
                   width="80%"
                   top="10px"
                   :before-close="handleClose">
          <div>
            <tinymce v-model="content"
                     id="tiny"
                     ref="editorName"
                     :height="350" />
          </div>
          <span slot="footer">
            <el-button @click="dialogSigTemp = false">取消</el-button>
            <el-button type="primary"
                       @click="">打印</el-button>
          </span>
        </el-dialog>

      </div>

      <!-- 编辑/查看弹窗 -->
      <div class="edit">
        <el-dialog :title="dialogType"
                   :visible.sync="dialogSigCreate"
                   width="50%"
                   top="10px"
                   :before-close="handleClose">
          <el-form :model="sigInfo"
                   label-width="100px"
                   label-position="right">
            <el-form-item label="小组:">
              <el-select v-model="sigInfo.GroupId"
                         placeholder="小组"
                         style="width: 100%">

                <el-option v-for="item in repTemList"
                           :key="item.id"
                           :label="item.label"
                           :value="item.id" />
              </el-select>

            </el-form-item>
            <!-- <el-form-item label="补偿方式：">
              <el-select v-model="comp"
                         multiple
                         placeholder="选择补偿方式"
                         style="">
                <el-option v-for="item in repTemList"
                           :key="item.id"
                           :label="item.label"
                           :value="item.id" />
              </el-select>

              <el-button style="margin-left:5px"
                         type="primary"
                         size="small"
                         @click="compBtn">十</el-button>
              <ul>
                <li v-for="(t,i) of sigInfocomp"
                    :key="i"
                    :task="t"
                    :i="i">{{i+1}} {{task}} <a href="javascript:;">×</a></li>

              </ul>

            </el-form-item> -->

            <el-form-item label="乙方:">
              <el-input v-model="sigInfo.Obligee"
                        placeholder="乙方" />
            </el-form-item>
            <el-form-item label="身份证号:">
              <el-input v-model="sigInfo.IDCard"
                        placeholder="身份证号" />
            </el-form-item>
            <el-form-item label="住址:">
              <el-input v-model="sigInfo.Adress"
                        placeholder="住址" />
            </el-form-item>
            <el-form-item label="可选房源/套:">
              <el-input v-model="sigInfo.FormWork"
                        placeholder="可选房源/套" />
            </el-form-item>

            <el-form-item label="协议编号:">
              <el-input v-model="sigInfo.ContractNum"
                        placeholder="协议编号" />
            </el-form-item>
            <el-form-item label="测绘编号:">
              <el-input v-model="sigInfo.SurveyNum"
                        placeholder="测绘编号" />
            </el-form-item>

          </el-form>
          <span slot="footer">
            <el-button @click="sigCancel">取消</el-button>
            <el-button type="primary"
                       @click="sigUp">保存</el-button>
          </span>
        </el-dialog>
      </div>
      <!-- 编辑/查看弹窗end -->

      <!-- 签约信息表 -->
      <el-table ref="multipleTable"
                v-loading="proLoading"
                :data="InsSigSys"
                style="margin: 10px auto; width: 98%"
                tooltip-effect="dark"
                border
                stripe
                @selection-change="handleSelectionChange">
        <el-table-column type="selection"
                         width="45"
                         align="center" />
        <el-table-column prop="Remake"
                         label="小组"
                         align="center"
                         width="80"
                         show-overflow-tooltip />
        <el-table-column prop="Obligee"
                         label="乙方"
                         align="center"
                         width="80"
                         show-overflow-tooltip />
        <el-table-column prop="IDCard"
                         label="身份证号"
                         align="center"
                         width="80"
                         show-overflow-tooltip />
        <el-table-column prop="Adress"
                         label="住址"
                         align="center"
                         width="100"
                         show-overflow-tooltip />
        <el-table-column prop="FormWork"
                         label="可选房源/套"
                         align="center"
                         width="95"
                         show-overflow-tooltip />
        <el-table-column prop="ContractNum"
                         label="协议编号"
                         align="center"
                         width=""
                         show-overflow-tooltip />
        <el-table-column prop="SurveyNum"
                         label="测绘编号"
                         align="center"
                         width=""
                         show-overflow-tooltip />
        <el-table-column label="选房"
                         align="center">
          <el-table-column prop="HouseNum"
                           label="住宅/套"
                           min-width="90"
                           align="center">
            <template slot-scope="scope">
              <el-select v-model="scope.row.HouseNum"
                         collapse-tags
                         clearable
                         @change="zhuzhaiChange(scope)"
                         placeholder="请选择"
                         style="width: 100%">
                <el-option v-for="item in numList"
                           :key="item.id"
                           :label="item.id"
                           :value="item.id" />
              </el-select>
            </template>
          </el-table-column>
          <el-table-column prop="FactoryNum"
                           label="厂房/套"
                           min-width="90"
                           align="center">
            <template slot-scope="scope">
              <el-select v-model="scope.row.FactoryNum"
                         collapse-tags
                         clearable
                         @change="changfangChange(scope)"
                         placeholder="请选择"
                         style="width: 100%">
                <el-option v-for="item in numList"
                           :key="item.id"
                           :label="item.id"
                           :value="item.id" />
              </el-select>
            </template>
          </el-table-column>
          <el-table-column prop="OfficeNum"
                           label="办公/套"
                           min-width="90"
                           align="center">
            <template slot-scope="scope">
              <el-select v-model="scope.row.OfficeNum"
                         collapse-tags
                         clearable
                         @change="bangongChange(scope)"
                         placeholder="请选择"
                         style="width: 100%">
                <el-option v-for="item in numList"
                           :key="item.id"
                           :label="item.id"
                           :value="item.id" />
              </el-select>
            </template>
          </el-table-column>
        </el-table-column>
        <el-table-column prop="Moban"
                         label="签约模板"
                         min-width="90"
                         align="center">
          <template slot-scope="scope">
            <el-select v-model="scope.row.Moban"
                       collapse-tags
                       placeholder="请选择"
                       style="width: 100%">
              <el-option v-for="item in SelectFormWork"
                         :key="item.ID"
                         :label="item.Name"
                         :value="item.ID" />
            </el-select>
          </template>
        </el-table-column>
        asd
        <el-table-column align="center"
                         width="">
          <template slot-scope="scope">
            <el-button size="mini"
                       @click="SigPrint(scope)"> <i class="el-icon-printer" />打印</el-button>

          </template>
        </el-table-column>

        <el-table-column prop="Potos"
                         label="签约照片"
                         min-width="180"
                         align="center">
          <template slot-scope="scope">
            <el-image :src="scope.row.Potos"
                      :preview-src-list="scope.row.PotosBig"
                      fit="contain"
                      style="width: 150px; max-height: 60px" />
          </template>
        </el-table-column>
        <el-table-column prop="SignTime"
                         label="签约时间"
                         width="200"
                         align="center"
                         show-overflow-tooltip />
        <!-- <el-table-column prop="sigDate"
                         label="补偿方式"
                         width=""
                         align="center"
                         show-overflow-tooltip />
        <el-table-column prop="sigDate"
                         label="协议模板"
                         width=""
                         align="center"
                         show-overflow-tooltip />
        <el-table-column align="center"
                         width="120">
          <div slot-scope="scope">
            <el-button size="mini"
                       @click="SigPrint(scope)"> <i class="el-icon-printer" />预览/打印</el-button>
          
          </div>
        </el-table-column> -->
        <el-table-column align="center">
          <template slot-scope="scope">
            <el-button size="mini"
                       @click="openCamera(scope)"><i class="el-icon-camera" />拍照</el-button>
            <!-- <el-button size="mini" @click="groupEdit(scope)">打印</el-button> -->
          </template>
        </el-table-column>
      </el-table>
      <!-- 签约信息表end -->

      <!-- 拍照弹窗 -->
      <div class="camera">
        <el-dialog title="拍摄照片"
                   :visible.sync="CameraDialog"
                   width="640px"
                   top="30px"
                   :before-close="handleClose"
                   style="border: 1px solid red;">
          <video ref="video"
                 width="640"
                 height="480"
                 autoplay></video>
          <canvas v-show="!cameraBtn"
                  class="CamCanvas"
                  ref="canvas"
                  width="640"
                  height="480"></canvas>
          <span slot="footer">
            <el-button v-if="cameraBtn"
                       @click="cameraCancel">取消</el-button>
            <el-button v-if="!cameraBtn"
                       type="danger"
                       @click="resetKaca">重拍</el-button>
            <el-button v-if="cameraBtn"
                       type="danger"
                       @click="kaca">拍照</el-button>
            <el-button v-if="!cameraBtn"
                       type="primary"
                       @click="cameraUp">保存</el-button>
          </span>
        </el-dialog>
      </div>
      <!-- 拍照弹窗end -->

    </div>
  </div>
</template>

<script>
import Tinymce from '@/components/Tinymce'
import { deepClone } from '@/utils'

const defaultSig = { ProjectId: 143 }
export default {
  name: 'agreement',
  components: { Tinymce },
  data() {
    return {

      PartyA: '',
      PartyB: '',
      repTem: '',
      sigQuery: {},
      NumType: {},
      shengyuzhuzhai: 123,
      shengyubangong: 888,
      shengyuchangfang: 230,
      repTemList: [],
      numList: [
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
        { id: 5 },
        { id: 6 },
        { id: 7 },
        { id: 8 },
        { id: 9 },
        { id: 10 }
      ],
      SelectFormWork: [],
      multipleSelection: [],
      proLoading: false,
      InsSigSys: [{ xiaozu: "一组", PartyB: '乙方', shenfenID: "441622111133330000", addressB: '广东省深圳市福田区紫竹七道1号', lowReqB: "3", xieyi: "xyz-7788", cehui: 'qwe_0026', zhuzhai: 0, bangong: 0, changfang: 0, zhaopian: "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aoxs/4eec6c80-0aa9-11eb-b244-a9f5e5565f30.png", zhaopianBig: ["https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aoxs/4eec6c80-0aa9-11eb-b244-a9f5e5565f30.png"], sigDate: '2020-11-21 14:06:51.789' }],
      moban: '',
      dialogSigCreate: false,
      dialogType: '编辑',
      CameraDialog: false,
      sigInfo: Object.assign({}, defaultSig),
      eninput: false,
      cameraBtn: true,
      imgSrc: '',
      dialogSigTemp: false,
      content: '',
      comp: '',
      sigInfocomp: [],

    }
  },
  mounted() {
    // this.shengyuTime()
    this.getNumType()
    this.getSelSignGroup()
    this.getQuerySign()
    this.getSelectFormWork()
    this.$nextTick(function () {
      this.setColSpan();
    })
  },
  beforeDestroy() {
    // if (this.getNumType) {
    //   clearInterval(this.getNumType)

    // }
  },
  methods: {
    // // 定时获取剩余房源数量
    // shengyuTime() {
    //   setInterval(this.getNumType, 1000)
    // },
    // 获取签约模板下拉
    getSelectFormWork() {
      this.axios.get('/SelectFormWork').then((res) => {
        this.SelectFormWork = res.data
      })
    },

    // 获取签约协议表
    getQuerySign() {
      if (!this.repTem && !this.PartyB) {
        this.sigQuery = {
          "ProjectId": 143
        }
      } else if (!this.repTem) {
        this.sigQuery = {
          "Obligee": this.PartyB,
          "ProjectId": 143
        }
      } else if (!this.PartyB) {
        this.sigQuery = {
          "GroupId": this.repTem,
          "ProjectId": 143
        }
      } else {
        this.sigQuery = {
          "GroupId": this.repTem,
          "Obligee": this.PartyB,
          "ProjectId": 143
        }
      }
      this.axios.post('/QuerySign', this.sigQuery).then((res) => {
        console.log(res.data)
        this.InsSigSys = res.data
      })
    },

    // 获取小组下拉
    getSelSignGroup() {
      this.axios.get('/SelSignGroup?id=143').then((res) => {
        this.repTemList = res.data
      })
    },
    // 刷新房源数量
    resetNumType() {
      this.getNumType()
    },
    // 获取剩余房源数量
    getNumType() {
      this.axios.get('/NumType?id=143').then((res) => {
        console.log(res.data)
        this.NumType = res.data[0]
        console.log(this.NumType)
      })
    },
    setColSpan() {
      // console.log(document.getElementsByClassName("el-table__header"))
      // 获取表头的所有单元格
      var x = document.getElementsByClassName("el-table__header")[0].rows[0].cells
      // 将第二列表头单元格的colSpan设为2
      x[9].colSpan = 2
      // 将第三列表头单元格的display设为none
      x[10].style.display = 'none'
    },


    // 乱七八糟按钮一堆
    changeClick() {
      this.getQuerySign()
      console.log('小组:', this.repTem)
      console.log('乙方:', this.PartyB)
    },
    resetClick() {
      this.repTem = ''
      this.PartyB = ''
      this.getQuerySign()
    },
    zhuzhaiChange(scope) {
      if (Number(scope.row.HouseNum) > Number(this.NumType.Housenum)) {
        this.$alert('剩余房源不足', "提示", {
          confirmButtonText: '确认',
          type: 'info'
        }).then(() => {

        })
        scope.row.HouseNum = 0
      } else if (Number(scope.row.HouseNum) + Number(scope.row.FactoryNum) + Number(scope.row.OfficeNum) > Number(scope.row.FormWork)) {
        this.$alert('所选数量不能大于可选房源', "提示", {
          confirmButtonText: '确认',
          type: 'info'
        }).then(() => {

        })
        scope.row.HouseNum = 0
        scope.row.FactoryNum = 0
        scope.row.OfficeNum = 0
      } else {
        console.log(scope.row)
        //  请求接口
        this.axios.post('/InsSign', scope.row).then((res) => {
          if (res.data.code != 1) {
            this.$message({
              type: 'warning',
              message: '修改失败，请刷新页面后重试'
            })
          } else {
            this.$message({
              type: 'success',
              message: '修改成功'
            })
            this.getQuerySign()
          }
        })
      }


    },
    bangongChange(scope) {

      if (Number(scope.row.OfficeNum) > Number(this.NumType.Officenum)) {
        this.$alert('剩余房源不足', "提示", {
          confirmButtonText: '确认',
          type: 'info'
        }).then(() => {

        })
        scope.row.OfficeNum = 0
      } else if (Number(scope.row.HouseNum) + Number(scope.row.FactoryNum) + Number(scope.row.OfficeNum) > Number(scope.row.FormWork)) {
        this.$alert('所选数量不能大于可选房源', "提示", {
          confirmButtonText: '确认',
          type: 'info'
        }).then(() => {

        })
        scope.row.HouseNum = 0
        scope.row.FactoryNum = 0
        scope.row.OfficeNum = 0
      } else {
        //  请求接口
        this.axios.post('/InsSign', scope.row).then((res) => {
          if (res.data.code != 1) {
            this.$message({
              type: 'warning',
              message: '修改失败，请刷新页面后重试'
            })
          } else {
            this.$message({
              type: 'success',
              message: '修改成功'
            })
            this.getQuerySign()
          }
        })
      }


    },
    changfangChange(scope) {
      if (Number(scope.row.FactoryNum) > Number(this.NumType.Factornum)) {
        this.$alert('剩余房源不足', "提示", {
          confirmButtonText: '确认',
          type: 'info'
        }).then(() => {

        })
        scope.row.FactoryNum = 0
      } else if (Number(scope.row.HouseNum) + Number(scope.row.FactoryNum) + Number(scope.row.OfficeNum) > Number(scope.row.FormWork)) {
        this.$alert('所选数量不能大于可选房源', "提示", {
          confirmButtonText: '确认',
          type: 'info'
        }).then(() => {

        })
        scope.row.HouseNum = 0
        scope.row.FactoryNum = 0
        scope.row.OfficeNum = 0
      } else {
        //  请求接口
        this.axios.post('/InsSign', scope.row).then((res) => {
          if (res.data.code != 1) {
            this.$message({
              type: 'warning',
              message: '修改失败，请刷新页面后重试'
            })
          } else {
            this.$message({
              type: 'success',
              message: '修改成功'
            })
            this.getQuerySign()
          }
        })
      }
    },

    // fillClick() {

    // },
    createSig() {
      this.dialogType = '新建'
      this.eninput = false
      this.dialogSigCreate = true
    },
    editSig() {
      if (this.multipleSelection.length == 0) {
        this.$alert('未选中项目', '编辑', {
          confirmButtonText: '确认',
          type: 'info'
        })
      } else if (this.multipleSelection.length > 1) {
        this.$alert('最多只能同时执行一条', '编辑', {
          confirmButtonText: '确认',
          type: 'info'
        })
      } else {
        this.dialogType = '编辑'
        this.eninput = false
        this.dialogSigCreate = true
        this.sigInfo = deepClone(this.multipleSelection[0])
        console.log(this.sigInfo, this.multipleSelection[0])

      }
    },
    showSig() {
      this.dialogType = '查看'
      this.dialogSigCreate = true
      this.eninput = true
      console.log('click showSig!')
    },
    delSig() {
      console.log('click delSig!')

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

          })
      }
    },

    compBtn() {
      console.log(typeof (this.comp), this.comp)
      var arr = []
      for (let i in this.comp) {
        this.sigInfocomp.push(this.comp[i])
        console.log("this.sigInfocomp:", this.sigInfocomp)
        console.log("this.comp[i]", this.comp[i])

      }
      this.comp = []
    },
    // 保存
    sigUp() {
      this.dialogSigCreate = false
      console.log(this.sigInfo)
      this.axios.post('/InsSign', this.sigInfo).then((res) => {
        if (res.data.code != 1) {
          this.$message({
            type: 'warning',
            message: '修改失败，请刷新页面后重试'
          })
        } else {
          this.$message({
            type: 'success',
            message: '修改成功'
          })
          this.getQuerySign()
        }
      })
      this.sigInfo = Object.assign({}, defaultRole)
    },
    // 取消
    sigCancel() {
      this.dialogSigCreate = false
      this.sigInfo = Object.assign({}, defaultRole)

    },
    SigPrint(scope) {
      console.log(scope.row)
      console.log(scope.row.Moban)
      if (!scope.row.Moban) {
        this.$alert('请选择报告模板', '提示', {
          confirmButtonText: '确认',
          type: 'info'
        })
      } else {
        this.dialogType = '打印模板'
        this.dialogSigTemp = true
        console.log(scope.row)
        console.log(scope.row.Moban)
      }


    },
    openCamera(scope) {
      console.log(scope.row)
      this.CameraDialog = true
      this.callCamera()
    },
    // 打开摄像头
    callCamera() {
      // H5调用电脑摄像头API
      navigator.mediaDevices.getUserMedia({
        video: true
      }).then(success => {
        // 摄像头开启成功
        this.$refs.video.srcObject = success
        // 实时拍照效果
        this.$refs.video.play()
        //重置按钮
        this.cameraBtn = true

      }).catch(error => {
        console.error('摄像头开启失败，请检查摄像头是否可用！')
      })
    },
    // 关闭摄像头
    closeCamera() {
      if (!this.$refs.video.srcObject) return
      let stream = this.$refs.video.srcObject
      let tracks = stream.getTracks()
      tracks.forEach(track => {
        track.stop()
      })
      this.$refs.video.srcObject = null
    },

    cameraCancel() {
      this.closeCamera()
      this.closeCamera()
      this.closeCamera()
      this.cameraBtn = true
      this.CameraDialog = false
    },
    resetKaca() {
      this.cameraBtn = true
    },
    kaca() {
      // this.closeCamera()

      let ctx = this.$refs.canvas.getContext('2d')
      // 把当前视频帧内容渲染到canvas上
      ctx.drawImage(this.$refs.video, 0, 0, 640, 480)
      // 转base64格式、图片格式转换、图片质量压缩
      let imgBase64 = this.$refs.canvas.toDataURL('image/jpeg', 0.7)

      // 由字节转换为KB 判断大小
      let str = imgBase64.replace('data:image/jpeg;base64,', '')
      let strLength = str.length
      let fileLength = parseInt(strLength - (strLength / 8) * 2)　　　 // 图片尺寸
      let size = (fileLength / 1024).toFixed(2)
      console.log(size + 'kB') 　　  // 上传拍照信息  调用接口上传图片 .........

      this.imgSrc = imgBase64




      this.cameraBtn = false
    },
    cameraUp() {
      this.closeCamera()
      this.cameraBtn = true
      this.CameraDialog = false


      // 保存到本地
      let ADOM = document.createElement('a')
      // ADOM.href = this.headImgSrc
      ADOM.href = this.imgSrc
      ADOM.download = new Date().getTime() + '.jpeg'
      ADOM.click()
    },


    // 信息表
    // 勾选
    handleSelectionChange(val) {
      this.multipleSelection = val
      console.log(this.multipleSelection)
    },


    // 关闭弹窗
    handleClose(done) {
      this.$confirm('确定关闭？')
        .then((_) => {
          done()
        })

        .catch((_) => {

        })
    }
  },
  destroyed() {
  }
}
</script>
<style lang="scss" scoped>
.shengyuDiv {
  display: flex;

  justify-content: flex-start;
}
.shengyuDiv div {
  margin-left: 20px;
  // border: 1px solid green;

  font-weight: 800;
}
.shengyuDiv span {
  color: #5cd1db;
  font-size: 20px;
  font-weight: 600;
}
.sigDiaBox {
  border: 1px solid #5cd1db;
}
.boxHeader {
  background-color: #b0e0e6;
  padding: 10px 5px;
  font-size: 18px;
  color: #fff;
}
.dialogTemp {
  ::v-deep .el-dialog__body {
    // padding: 0px 20px;
  }
}
.camera {
  ::v-deep .el-dialog__body {
    padding: 0px 0px;
    position: relative;
  }
}
.CamCanvas {
  position: absolute;
  top: 0px;
  left: 0px;
}
.edit {
  ::v-deep .el-dialog__body {
    padding: 0px 20px;
  }
}
::v-deep .selectCheck .el-input__inner {
  border: 0px !important;
  border-radius: 0px;
}
// .el-form-item {
//   margin-bottom: 5px;
// }
.selectCheck {
  width: 35%;
  height: 36px;
  // margin-left: 20px;
  display: flex;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  overflow: hidden;
}
.check_font {
  display: block;
  // justify-content: space-between;
  width: 83px;
  padding: 10px 10px;
  font-size: 14px;
  color: #909399;
  background-color: #f5f7fa;
  border-right: 1px solid #dcdfe6;
  white-space: nowrap;
  text-align: center;
}
::v-deep .el-form-item {
  margin-bottom: 5px;
}
</style>
