<template>
  <div class="dashboard-editor-container">
    <div style="background-color: #fff; border: 1px solid #dadada">
      <!-- 顶部搜索 -->
      <div style="
          background: #f5f5f5;
          padding: 10px 20px;
          border-bottom: 1px solid #dadada;
        ">
        <div style="display: flex; justify-content: flex-start">
          <el-input slot=""
                    v-model="PartyA"
                    clearable
                    placeholder="请输入名称"
                    style="width: 20%">
            <template slot="prepend"> 甲方： </template>
          </el-input>
          <el-input slot=""
                    v-model="PartyB"
                    clearable
                    placeholder="请输入名称"
                    style="width: 20%">
            <template slot="prepend"> 乙方： </template>
          </el-input>
          <div>
            <el-button size="small"
                       style="margin-left: 10px"
                       plain
                       @click="changeClick"><i class="el-icon-search" />查询</el-button>
            <el-button size="small"
                       style="margin-left: 10px"
                       plain
                       @click="resetClick"><i class="el-icon-refresh" />重置</el-button>
          </div>
        </div>
        <!-- 顶部搜索end -->
        <!-- 报告模板 -->
        <div style="margin-top: 5px; display: flex; justify-content: flex-start">
          <div class="selectCheck">
            <span class="check_font"
                  style="">报告模板：</span>
            <el-select v-model="repTem"
                       clearable
                       placeholder="请选择"
                       style="width: 70%">
              <el-option v-for="item in repTemList"
                         :key="item.ID"
                         :label="item.Name"
                         :value="item.Code" />
            </el-select>
          </div>
          <el-button size="small"
                     style="margin-left: 10px"
                     plain
                     @click="changeClick"><i class="el-icon-printer" />打印</el-button>
        </div>
        <!-- 报告模板end -->
      </div>

      <!-- 按钮 -->
      <div style="
          display: flex;
          justify-content: flex-end;
          margin-top: 20px;
          margin-bottom: 10px;
          margin-right: 20px;
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

      <!-- 编辑/查看弹窗 -->
      <div class="edit">
        <el-dialog :title="dialogType"
                   :visible.sync="dialogSigCreate"
                   width="90%"
                   top="10px"
                   :before-close="handleClose">
          <!-- <el-form :model="sigInfo"
                 label-width="80px"
                 label-position="right">
          <el-form-item label="协议编号:"> -->
          <div class="sigDiaBox">
            <div class="boxHeader">
              基本情况
            </div>
            <div style="width:98%;margin:5px auto;">
              <el-input slot=""
                        v-model="sigInfo.ID"
                        placeholder=""
                        :disabled="eninput"
                        style="width: 100%">
                <template slot="prepend">协议编号 </template>
              </el-input>
              <el-input slot=""
                        v-model="sigInfo.ID"
                        placeholder=""
                        :disabled="eninput"
                        style="width: 50%">
                <template slot="prepend">身份证号 </template>
              </el-input>

              <el-input slot=""
                        v-model="sigInfo.ID"
                        placeholder=""
                        :disabled="eninput"
                        style="width: 50%">
                <template slot="prepend">法定代表人 </template>
              </el-input>

              <el-input slot=""
                        v-model="sigInfo.ID"
                        placeholder=""
                        :disabled="eninput"
                        style="width: 50%">
                <template slot="prepend">房屋地址 </template>
              </el-input>
              <el-input slot=""
                        v-model="sigInfo.ID"
                        placeholder=""
                        :disabled="eninput"
                        style="width: 50%">
                <template slot="prepend">用地面积 </template>
                <template slot="append">m²</template>
              </el-input>
            </div>

          </div>

          <!-- </el-form-item>

        </el-form> -->

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
        <el-table-column prop="PartyB"
                         label="小组"
                         align="center"
                         width="100" />
        <el-table-column prop="PartyB"
                         label="乙方"
                         align="center"
                         width="100" />
        <el-table-column prop="lowReqB"
                         label="身份证号"
                         align="center"
                         width="100"
                         show-overflow-tooltip />
        <el-table-column prop="addressB"
                         label="住址"
                         align="center"
                         width=""
                         show-overflow-tooltip />
        <el-table-column prop="addressB"
                         label="协议编号"
                         align="center"
                         width=""
                         show-overflow-tooltip />
        <el-table-column prop="addressB"
                         label="测绘编号"
                         align="center"
                         width=""
                         show-overflow-tooltip />
        <el-table-column prop="sigPhoto"
                         label="签约照片"
                         min-width="180"
                         align="center">
          <template slot-scope="scope">
            <el-image :src="scope.row.sigPhoto"
                      :preview-src-list="scope.row.sigPhotoBig"
                      fit="contain"
                      :lazy="true"
                      style="width: 150px; max-height: 60px" />
          </template>
        </el-table-column>
        <el-table-column prop="sigDate"
                         label="签约时间"
                         width=""
                         align="center"
                         show-overflow-tooltip />
        <el-table-column prop="sigDate"
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
            <!-- <el-button size="mini" @click="groupEdit(scope)">打印</el-button> -->
          </div>
        </el-table-column>
        <el-table-column align="center">
          <div slot-scope="scope">
            <el-button size="mini"
                       @click="openCamera(scope)"><i class="el-icon-camera" />拍照</el-button>
            <!-- <el-button size="mini" @click="groupEdit(scope)">打印</el-button> -->
          </div>
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
export default {
  data() {
    return {
      PartyA: '',
      PartyB: '',
      repTem: '',
      repTemList: [],
      multipleSelection: [],
      proLoading: false,
      InsSigSys: [{ addressB: 'abc' }],
      dialogSigCreate: false,
      dialogType: '编辑',
      CameraDialog: false,
      sigInfo: {},
      eninput: false,
      cameraBtn: true,
      imgSrc:'',
    }
  },
  mounted() { },
  methods: {
    // 乱七八糟按钮一堆
    changeClick() {
      console.log('甲方:', this.PartyA)
      console.log('乙方:', this.PartyB)
    },
    resetClick() {
      this.PartyA = ''
      this.PartyB = ''
    },
    createSig() {
      this.dialogType = '新建'
      this.eninput = false
      this.dialogSigCreate = true
    },
    editSig() {
      this.dialogType = '编辑'
      this.eninput = false
      this.dialogSigCreate = true
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
            // console.log(this.multipleSelection[0].ID)
            // var delId = this.multipleSelection[0].ID
            // this.axios.get('/delProject?Id=' + delId)
            //   .then((res) => {
            //     if (res.data.code == 1) {
            //       this.$message({
            //         type: 'success',
            //         message: '删除成功。'
            //       })
            //     } else {
            //       this.$message({
            //         type: 'error',
            //         message: '删除失败!'
            //       })
            //     }
            //     this.getTable()
            //   })
          
          })
      }
    },
    // 保存
    sigUp() {
      this.dialogSigCreate = false
    },
    // 取消
    sigCancel() {
      this.dialogSigCreate = false

    },
    openCamera() {
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
      let fileLength = parseInt(strLength - (strLength / 8) * 2)　　　 // 图片尺寸  用于判断
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
      ADOM.download =   new Date().getTime() + '.jpeg'
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
          console.log(1, done)
          this.editDialogVisible = false
        })

        .catch((_) => {
          console.log(2, done)
        })
    }
  },
  destroyed() {
  }
}
</script>
<style lang="scss" scoped>
.sigDiaBox {
  border: 1px solid #5cd1db;
}
.boxHeader {
  background-color: #b0e0e6;
  padding: 10px 5px;
  font-size: 18px;
  color: #fff;
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
  width: 30%;
  // margin-left: 20px;
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
