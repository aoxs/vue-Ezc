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
                         :disabled="disSelect"
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

        <!-- 剩余显示 -->
        <!-- <div style="margin-top:5px">
          <el-popover :ref=""
                      placement="top"
                      title="剩余数量"
                      width="150"
                      trigger="hover">
            <div>住宅:<span>{{NumType.Housenum}}m²</span></div>
            <div>办公:<span>{{NumType.Officenum}}m²</span></div>
            <div>工业:<span>{{NumType.Factornum}}m²</span></div>
            <div>集中商业:<span>{{NumType.BusinessNum}}m²</span></div>
            <div>底层商铺:<span>{{NumType.Lowsbus}}m²</span></div>
            <el-button slot="reference">剩余补偿面积：</el-button>
          </el-popover>

        </div> -->

        <div class="shengyuDiv"
             style="color:#909399;margin-right:5px;min-width: 265px;margin-top: 5px">
          <div>住宅:<span>{{NumType.Housenum}}m²</span></div>
          <div>办公:<span>{{NumType.Officenum}}m²</span></div>
          <div>工业:<span>{{NumType.Factornum}}m²</span></div>
          <div>集中商业:<span>{{NumType.BusinessNum}}m²</span></div>
          <div>底层商铺:<span>{{NumType.Lowsbus}}m²</span></div>
          <el-button type="success"
                     style="padding:5px 5px;font-size:16px;font-weight:600;margin-left: 10px"
                     size="small"
                     @click="resetNumType"><i class="el-icon-refresh-right" /></el-button>

        </div>
        <!-- 剩余显示end -->
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
            <tinymce v-if="dialogSigTemp"
                     v-model="TempPrint.TemplateContent"
                     id="tiny"
                     ref="editorName"
                     :height="350" />
          </div>
          <!-- <span slot="footer">
            <el-button @click="dialogSigTemp = false">取消</el-button>
            <el-button type="primary"
                       @click="">打印</el-button>
          </span> -->
        </el-dialog>

      </div>

      <!-- 编辑/查看弹窗 -->
      <div class="edit">
        <el-dialog :title="dialogType"
                   
                   :visible.sync="dialogSigCreate"
                   width="90%"
                   top="10px"
                   :before-close="handleClose">
          <el-form :model="sigInfo"
                   label-width="110px"
                   label-position="right"
                   style="">

            <div style="border: 1px solid #5CD1DB; margin-bottom:5px">
              <div class="dialogBox">基本信息</div>
              <el-row :gutter="10">
                <el-col :span="8"
                        :offset="0">
                  <el-form-item label="小组:">
                    <el-select v-model="sigInfo.GroupId"
                               placeholder="小组"
                               :disabled="disSelect"
                               style="width: 100%">
                      <el-option v-for="item in repTemList"
                                 :key="item.id"
                                 :label="item.label"
                                 :value="item.id" />
                    </el-select>

                  </el-form-item>
                </el-col>

                <el-col :xs="24"
                        :sm="8"
                        :offset="0">
                  <el-form-item label="甲方:">
                    <el-input v-model="sigInfo.ManA"
                              placeholder="甲方(实施单位)" />
                  </el-form-item>
                </el-col>
                <el-col :xs="24"
                        :sm="8"
                        :offset="0">
                  <el-form-item label="地址:">
                    <el-input v-model="sigInfo.ManAadress"
                              placeholder="甲方地址" />
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="10">
                <el-col :xs="24"
                        :sm="8"
                        :offset="0">
                  <el-form-item label="乙方:">
                    <el-input v-model="sigInfo.Obligee"
                              placeholder="乙方(被搬迁人)" />
                  </el-form-item>
                </el-col>
                <el-col :xs="24"
                        :sm="8"
                        :offset="0">
                  <el-form-item label="身份证号:">
                    <el-input v-model="sigInfo.IDCard"
                              placeholder="身份证号" />
                  </el-form-item>
                </el-col>
                <el-col :xs="24"
                        :sm="8"
                        :offset="0">
                  <el-form-item label="住址:">
                    <el-input v-model="sigInfo.Adress"
                              placeholder="住所/经常居所" />
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="10">
                <el-col :xs="24"
                        :sm="8"
                        :offset="0">
                  <el-form-item label="丙方:">
                    <el-input v-model="sigInfo.ManB"
                              placeholder="丙方(股份合作公司)" />
                  </el-form-item>
                </el-col>

                <el-col :xs="24"
                        :sm="8"
                        :offset="0">
                  <el-form-item label="地址:">
                    <el-input v-model="sigInfo.ManBadress"
                              placeholder="丙方地址" />
                  </el-form-item>
                </el-col>
                <el-col :xs="24"
                        :sm="8"
                        :offset="0">
                  <el-form-item label="协议编号:">
                    <el-input v-model="sigInfo.ContractNum"
                              placeholder="协议编号" />
                  </el-form-item>
                </el-col>

              </el-row>
            </div>

            <div style="border: 1px solid #5CD1DB; margin-bottom:5px">
              <div class="dialogBox">被搬迁房信息</div>
              <el-row :gutter="20">
                <el-col :xs="24"
                        :sm="8"
                        :offset="0">
                  <el-form-item label="街道:">
                    <el-input v-model="sigInfo.Street"
                              placeholder="街道" />
                  </el-form-item>
                </el-col>
                <el-col :xs="24"
                        :sm="8"
                        :offset="0">
                  <el-form-item label="社区:">
                    <el-input v-model="sigInfo.Community"
                              placeholder="社区" />
                  </el-form-item>
                </el-col>
                <el-col :xs="24"
                        :sm="8"
                        :offset="0">
                  <el-form-item label="测绘编号:">
                    <el-input v-model="sigInfo.SurveyNum"
                              placeholder="测绘编号" />
                  </el-form-item>
                </el-col>
                <el-col :xs="24"
                        :sm="8"
                        :offset="0">
                  <el-form-item label="私房:">
                    <el-input v-model="sigInfo.PrivateArm"
                              placeholder="私房面积" />
                  </el-form-item>
                </el-col>
                <el-col :xs="24"
                        :sm="8"
                        :offset="0">
                  <el-form-item label="砖瓦结构:">
                    <el-input v-model="sigInfo.HalfTimberHouseArea"
                              placeholder="砖瓦结构住宅面积" />
                  </el-form-item>
                </el-col>
                <el-col :xs="24"
                        :sm="8"
                        :offset="0">
                  <el-form-item label="祖屋:">
                    <el-input v-model="sigInfo.GrandpasroomArea"
                              placeholder="祖屋面积" />
                  </el-form-item>
                </el-col>
                <el-col :xs="24"
                        :sm="8"
                        :offset="0">
                  <el-form-item label="单元式住宅:">
                    <el-input v-model="sigInfo.LoftHouseArea"
                              placeholder="单元式住宅楼面积" />
                  </el-form-item>
                </el-col>
                <el-col :xs="24"
                        :sm="8"
                        :offset="0">
                  <el-form-item label="类型:">
                    <el-radio-group v-model="sigInfo.Ishouse">
                      <el-radio :label="0">住宅</el-radio>
                      <el-radio :label="1">非住宅</el-radio>
                    </el-radio-group>
                  </el-form-item>
                </el-col>
                <el-col :xs="24"
                        :sm="24"
                        :offset="0">
                  <el-form-item label="补偿方式:">
                    <el-radio-group v-model="sigInfo.Compensationmode">
                      <el-radio :label="1">①产权调换</el-radio>
                      <el-radio :label="2">②产权调换+货币补偿</el-radio>
                    </el-radio-group>
                  </el-form-item>
                </el-col>

                <el-col :xs="24"
                        :sm="24"
                        :offset="0">

                </el-col>

              </el-row>

            </div>

            <div style="border: 1px solid #5CD1DB; margin-bottom:5px">
              <div class="dialogBox">经过产权登记的房屋信息</div>
              <el-row :gutter="10">
                <el-col :xs="24"
                        :sm="24"
                        :offset="0">
                  <el-form-item label="附属测绘编号:">
                    <el-input v-model="sigInfo.AffNum"
                              placeholder="临时建筑物、构筑（附属）物及其他地上附着物等测绘编号为" />
                  </el-form-item>
                </el-col>
                <el-col :xs="24"
                        :sm="6"
                        :offset="0">
                  <el-form-item label="测绘编号:">
                    <el-input v-model="sigInfo.TemporaryArea1"
                              placeholder="测绘编号" />
                  </el-form-item>
                </el-col>
                <el-col :xs="24"
                        :sm="6"
                        :offset="0">
                  <el-form-item label="号:">
                    <el-input v-model="sigInfo.TNum1"
                              placeholder="号" />
                  </el-form-item>
                </el-col>
                <el-col :xs="24"
                        :sm="6"
                        :offset="0">
                  <el-form-item label="证书:">
                    <el-input v-model="sigInfo.TCer1"
                              placeholder="证书" />
                  </el-form-item>
                </el-col>
                <el-col :xs="24"
                        :sm="6"
                        :offset="0">
                  <el-form-item label="证载面积:">
                    <el-input v-model="sigInfo.TArea1"
                              placeholder="证载面积" />
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="10">
                <el-col :xs="24"
                        :sm="6"
                        :offset="0">
                  <el-form-item label="测绘编号:">
                    <el-input v-model="sigInfo.TemporaryArea2"
                              placeholder="测绘编号" />
                  </el-form-item>
                </el-col>
                <el-col :xs="24"
                        :sm="6"
                        :offset="0">
                  <el-form-item label="号:">
                    <el-input v-model="sigInfo.TNum2"
                              placeholder="号" />
                  </el-form-item>
                </el-col>
                <el-col :xs="24"
                        :sm="6"
                        :offset="0">
                  <el-form-item label="证书:">
                    <el-input v-model="sigInfo.TCer2"
                              placeholder="证书" />
                  </el-form-item>
                </el-col>
                <el-col :xs="24"
                        :sm="6"
                        :offset="0">
                  <el-form-item label="证载面积:">
                    <el-input v-model="sigInfo.TArea2"
                              placeholder="证载面积" />
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="10">
                <el-col :xs="24"
                        :sm="6"
                        :offset="0">
                  <el-form-item label="测绘编号:">
                    <el-input v-model="sigInfo.TemporaryArea3"
                              placeholder="测绘编号" />
                  </el-form-item>
                </el-col>
                <el-col :xs="24"
                        :sm="6"
                        :offset="0">
                  <el-form-item label="号:">
                    <el-input v-model="sigInfo.TNum3"
                              placeholder="号" />
                  </el-form-item>
                </el-col>
                <el-col :xs="24"
                        :sm="6"
                        :offset="0">
                  <el-form-item label="证书:">
                    <el-input v-model="sigInfo.TCer3"
                              placeholder="证书" />
                  </el-form-item>
                </el-col>
                <el-col :xs="24"
                        :sm="6"
                        :offset="0">
                  <el-form-item label="证载面积:">
                    <el-input v-model="sigInfo.TArea3"
                              placeholder="证载面积" />
                  </el-form-item>
                </el-col>
              </el-row>
            </div>

            <div style="border: 1px solid #5CD1DB; margin-bottom:5px">
              <div class="dialogBox">过渡期临时安置费的支付</div>
              <el-row :gutter="20">
                <el-col :xs="24"
                        :sm="8"
                        :offset="0">
                  <el-form-item label="账户名:">
                    <el-input v-model="sigInfo.UserNames"
                              placeholder="账户名" />
                  </el-form-item>
                </el-col>
                <el-col :xs="24"
                        :sm="8"
                        :offset="0">
                  <el-form-item label="开户行:">
                    <el-input v-model="sigInfo.OpeningBank"
                              placeholder="开户行" />
                  </el-form-item>
                </el-col>
                <el-col :xs="24"
                        :sm="8"
                        :offset="0">
                  <el-form-item label="账号:">
                    <el-input v-model="sigInfo.AccountNum"
                              placeholder="账号" />
                  </el-form-item>
                </el-col>
              </el-row>

            </div>
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

            <!-- <el-form-item label="总面积/m²:">
              <el-input v-model="sigInfo.FormWork"
                        placeholder="总面积/m²" />
            </el-form-item> -->

            <div style="border: 1px solid #5CD1DB; margin-bottom:5px">
              <div class="dialogBox">测绘面积</div>
              <el-form-item label="住宅:">
                <el-input v-model="sigInfo.ZzArea"
                          placeholder="住宅/m²" />
              </el-form-item>
              <el-form-item label="办公:">
                <el-input v-model="sigInfo.BgArea"
                          placeholder="办公/m²" />
              </el-form-item>
              <el-form-item label="工业:">
                <el-input v-model="sigInfo.GyArea"
                          placeholder="工业/m²" />
              </el-form-item>
              <el-form-item label="集中商业:">
                <el-input v-model="sigInfo.JzArea"
                          placeholder="集中商业/m²" />
              </el-form-item>
              <el-form-item label="底层商铺:">
                <el-input v-model="sigInfo.DcArea"
                          placeholder="底层商铺/m²" />
              </el-form-item>
            </div>

          </el-form>
          <span slot="footer"
                v-show="isLook">
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
                :row-class-name="sigTableClassName"
                tooltip-effect="dark"
                border
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

        <el-table-column prop="Ishouse"
                         label="类型"
                         align="center"
                         width="80"
                         :formatter="itemFormat"
                         show-overflow-tooltip />
        <!-- <el-table-column prop="Adress"
                         label="住址"
                         align="center"
                         width="100"
                         show-overflow-tooltip /> -->
        <el-table-column prop="FormWork"
                         label="总面积/m²"
                         align="center"
                         width="85"
                         show-overflow-tooltip />
        <el-table-column prop="ContractNum"
                         label="协议编号"
                         align="center"
                         width=""
                         show-overflow-tooltip />
        <!-- <el-table-column prop="SurveyNum"
                         label="测绘编号"
                         align="center"
                         width=""
                         show-overflow-tooltip /> -->

        <el-table-column label="补偿面积/m²"
                         align="center">

          <el-table-column prop="HouseNum"
                           label="住宅"
                           min-width="90"
                           align="center">
            <template slot-scope="scope">
              <!-- <el-select v-model="scope.row.HouseNum"
                         collapse-tags
                         clearable
                         @change="zhuzhaiChange(scope)"
                         placeholder="请选择"
                         style="width: 100%">
                <el-option v-for="item in numList"
                           :key="item.id"
                           :label="item.id"
                           :value="item.id" />
              </el-select> -->
              <el-input v-model="scope.row.HouseNum"
                        @change="zhuzhaiChange(scope)"
                        @input=""
                        :disabled="scope.row.Potos ? true :false"></el-input>

            </template>
          </el-table-column>

          <el-table-column prop="OfficeNum"
                           label="办公"
                           min-width="90"
                           align="center">
            <template slot-scope="scope">
              <!-- <el-select v-model="scope.row.OfficeNum"
                         collapse-tags
                         clearable
                         @change="bangongChange(scope)"
                         placeholder="请选择"
                         style="width: 100%">
                <el-option v-for="item in numList"
                           :key="item.id"
                           :label="item.id"
                           :value="item.id" />
              </el-select> -->
              <el-input v-model="scope.row.OfficeNum"
                        @change="bangongChange(scope)"
                        @input=""
                        :disabled="scope.row.Potos ? true :false"></el-input>
            </template>
          </el-table-column>

          <el-table-column prop="FactoryNum"
                           label="工业"
                           min-width="90"
                           align="center">
            <template slot-scope="scope">
              <!-- <el-select v-model="scope.row.FactoryNum"
                         collapse-tags
                         clearable
                         @change="changfangChange(scope)"
                         placeholder="请选择"
                         style="width: 100%">
                <el-option v-for="item in numList"
                           :key="item.id"
                           :label="item.id"
                           :value="item.id" />
              </el-select> -->
              <el-input v-model="scope.row.FactoryNum"
                        @change="changfangChange(scope)"
                        @input=""
                        :disabled="scope.row.Potos ? true :false"></el-input>

            </template>
          </el-table-column>

          <el-table-column prop="BusinessNum"
                           label="集中商业"
                           min-width="90"
                           align="center">
            <template slot-scope="scope">
              <!-- <el-select v-model="scope.row.BusinessNum"
                         collapse-tags
                         clearable
                         @change="BusinessChange(scope)"
                         placeholder="请选择"
                         style="width: 100%">
                <el-option v-for="item in numList"
                           :key="item.id"
                           :label="item.id"
                           :value="item.id" />
              </el-select> -->
              <el-input v-model="scope.row.BusinessNum"
                        @change="BusinessChange(scope)"
                        @input=""
                        :disabled="scope.row.Potos ? true :false"></el-input>

            </template>
          </el-table-column>

          <el-table-column prop="Lowsbus"
                           label="底层商铺"
                           min-width="90"
                           align="center">
            <template slot-scope="scope">
              <!-- <el-select v-model="scope.row.Lowsbus"
                         collapse-tags
                         clearable
                         @change="LowsbusChange(scope)"
                         placeholder="请选择"
                         style="width: 100%">
                <el-option v-for="item in numList"
                           :key="item.id"
                           :label="item.id"
                           :value="item.id" />
              </el-select> -->
              <el-input v-model="scope.row.Lowsbus"
                        @change="LowsbusChange(scope)"
                        @input=""
                        :disabled="scope.row.Potos ? true :false"></el-input>

            </template>
          </el-table-column>
        </el-table-column>

        <!-- 签约模板 -->
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
                         :key="item.Id"
                         :label="item.TemplateName"
                         :value="item.Id" />
            </el-select>
          </template>
        </el-table-column>

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
            <el-image :src="'http://120.86.117.97:8579/file/'+scope.row.Potos"
                      :preview-src-list="scope.row.PotosBig"
                      fit="contain"
                      style="width: 150px; max-height: 60px"
                      v-show="scope.row.Potos" />
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
                       :disabled="scope.row.Potos ? true :false"
                       @click="openCamera(scope)"><i class="el-icon-camera" />签约</el-button>
            <!-- <el-button size="mini" @click="groupEdit(scope)">打印</el-button> -->
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页 -->
      <div class="pagRight">
        <pagination ref="pagination"
                    @pagination="pagination"
                    v-show="tabTotal >= 10"
                    :total="tabTotal" />
      </div>
      <!-- 分页end -->

      <!-- 签约信息表end -->

      <!-- 拍照弹窗 -->
      <!-- 弹窗2 -->
      <el-dialog title="拍照上传"
                 :visible.sync="CameraDialog"
                 @close="onCancel"
                 top="20px"
                 width="1065px">
        <div class="box">
          <video id="videoCamera"
                 class="canvas"
                 :width="videoWidth"
                 :height="videoHeight"
                 autoPlay></video>
          <canvas id="canvasCamera"
                  class="canvas"
                  :width="videoWidth"
                  :height="videoHeight"></canvas>
        </div>
        <div slot="footer">
          <el-button @click="drawImage"
                     icon="el-icon-camera"
                     size="small">
            拍照
          </el-button>
          <el-button v-if="open"
                     @click="getCompetence"
                     icon="el-icon-video-camera"
                     size="small">
            打开摄像头
          </el-button>
          <el-button v-else
                     @click="stopNavigator"
                     icon="el-icon-switch-button"
                     size="small">
            关闭摄像头
          </el-button>
          <el-button @click="resetCanvas"
                     icon="el-icon-refresh"
                     size="small">
            重置
          </el-button>
          <el-button @click="onCancel"
                     icon="el-icon-circle-close"
                     size="small">
            取消
          </el-button>
          <el-button @click="onUpload"
                     :loading="loading"
                     type="primary"
                     icon="el-icon-upload2"
                     size="small">
            上传
          </el-button>
        </div>
      </el-dialog>

      <!-- 弹窗1 -->
      <!-- <div class="camera">
        <el-dialog title="拍摄照片"
                   :visible.sync="CameraDialogxxx"
                   width="640px"
                   top="10px"
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
      </div> -->
      <!-- 拍照弹窗end -->

    </div>
  </div>
</template>

<script>
import Tinymce from '@/components/disabledTinyMce'
import { deepClone } from '@/utils'
import Pagination from '@/components/Pagination'


const defaultSig = { ProjectId: 143 }
export default {
  name: 'agreement',
  components: { Tinymce, Pagination },
  data() {
    return {
      
      loginUserId: 0,
      disSelect: false,
      tabTotal: 0,
      isGroup: 0,
      TempPrint: {},
      isLook: true,
      page: { page: 1, limit: 10 },
      timerNumType: '',
      tableArr: [],
      imgSrc: "",
      loading: false,//上传按钮加载
      open: false,//控制摄像头开关
      thisVideo: null,
      thisContext: null,
      thisCancas: null,
      videoWidth: 500,
      videoHeight: 400,
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
      InsSigSys: [],
      moban: '',
      dialogSigCreate: false,
      dialogType: '编辑',
      CameraDialog: false,
      sigInfo: Object.assign({}, defaultSig),
      eninput: false,
      cameraBtn: true,
      dialogSigTemp: false,
      content: '',
      comp: '',
      sigInfocomp: [],
      cameraSig: [],
    }
  },
  created() {
  },
  mounted() {
    this.getUserId()

    // this.shengyuTime()
    this.getNumType()
    this.getSelSignGroup()
    // this.getQuerySign()
    this.getSelectFormWork()
    this.getSelectFormworklist()
    this.$nextTick(function () {
      // 表头跨列
      this.setColSpan();
    })
    // 定时刷新剩余补偿面积
    this.timerNumType = setInterval(this.getNumType, 5000)
  },
  beforeDestroy() {
    // if (this.getNumType) {
    clearInterval(this.timerNumType)

    // }
  },
  methods: {

    pagination(val) {
      this.page = val

      this.getQuerySign()
      // this.pages = val
    },
    // 表格 行 状态

    sigTableClassName({ row, rowIndex }) {
      for (var q in this.tableArr) {
        if (rowIndex === this.tableArr[q]) {
          return 'success-row'
        }

      }
      //  if (!row.Potos) {
      //     return 'success-row';
      //   } else{
      //     return '';
      //   }
      //   return '';
    },


    // 类型内容格式化
    itemFormat(row, column) {
      if (row.Ishouse == 1) {
        return '非住宅'
      } else if (row.Ishouse == 0) {
        return '住宅'
      } else {
        return '未设置'
      }
    },

    // 获取签约模板下拉
    getSelectFormWork() {
      this.axios.get('/SelectFormWork').then((res) => {
        // this.SelectFormWork = res.data
      })
    },
    getSelectFormworklist() {
      this.axios.get('/SelectFormworklist?Sid=143&TemplateName=').then((res) => {
        console.log(res.data)
        this.SelectFormWork = res.data
      })

    },
    // 获取当前登录用户的ID
    getUserId() {
      this.axios.get('/UserQueryALLname?UersName=' + this.$store.getters.roles[0]).then((res) => {
        // console.log(res.data)
        // console.log(res.data[0].ID)
        this.loginUserId = res.data.data[0].ID
        this.isGroup = res.data.data[0].Is_Enable
        if (this.isGroup == 1) {
          this.repTem = res.data.data[0].ID
          console.log(1234, this.repTem)
          this.disSelect = true
          this.getQuerySign()
        } else {
          this.disSelect = false
          this.repTem = ''
          this.getQuerySign()
        }

      })
    },
    // 获取签约协议表
    getQuerySign() {

      if (!this.repTem && !this.PartyB) {
        this.sigQuery = {
          "ProjectId": 143,
          "pages": this.page
        }
      } else if (!this.repTem) {
        this.sigQuery = {
          "Obligee": this.PartyB,
          "pages": this.page
        }
      } else if (!this.PartyB) {
        this.sigQuery = {
          "GroupId": this.repTem,
          "ProjectId": 143,
          "pages": this.page
        }
      } else {
        this.sigQuery = {
          "GroupId": this.repTem,
          "Obligee": this.PartyB,
          "ProjectId": 143,
          "pages": this.page
        }
      }
      this.proLoading = true
      this.axios.post('/QuerySign', this.sigQuery).then((res) => {
        console.log(res.data)
        this.proLoading = false
        if (res.data.length == 0) {
          this.InsSigSys = []
          this.tabTotal = 0
        } else {
          this.tabTotal = res.data[0].Total
          this.InsSigSys = res.data
          this.tableArr = []
          for (var i in this.InsSigSys) {
            if (this.InsSigSys[i].Potos) {
              this.tableArr.push(Number(i))
            }
          }
        }



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
        console.log(555555, this.NumType)
      })
    },
    setColSpan() {
      console.log(document.getElementsByClassName("el-table__header"))
      // 获取表头的所有单元格
      var x = document.getElementsByClassName("el-table__header")[0].rows[0].cells
      // 将第二列表头单元格的colSpan设为2
      x[2].colSpan = 2
      // 将第三列表头单元格的display设为none
      x[3].style.display = 'none'
    },


    // 乱七八糟按钮一堆
    changeClick() {
      this.getQuerySign()
      console.log('小组:', this.repTem)
      console.log('乙方:', this.PartyB)
    },
    resetClick() {
      if (this.isGroup == 1) {
        this.repTem = this.loginUserId
      } else {
        this.repTem = ''
      }
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
      } else if (Number(scope.row.HouseNum) + Number(scope.row.FactoryNum) + Number(scope.row.OfficeNum) + Number(scope.row.BusinessNum) + Number(scope.row.Lowsbus) > Number(scope.row.FormWork)) {
        this.$alert('所选数量不能大于可选房源', "提示", {
          confirmButtonText: '确认',
          type: 'info'
        }).then(() => {

        })
        scope.row.HouseNum = 0
        scope.row.FactoryNum = 0
        scope.row.OfficeNum = 0
        scope.row.BusinessNum = 0
        scope.row.Lowsbus = 0
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
      } else if (Number(scope.row.HouseNum) + Number(scope.row.FactoryNum) + Number(scope.row.OfficeNum) + Number(scope.row.BusinessNum) + Number(scope.row.Lowsbus) > Number(scope.row.FormWork)) {
        this.$alert('所选数量不能大于可选房源', "提示", {
          confirmButtonText: '确认',
          type: 'info'
        }).then(() => {

        })
        scope.row.HouseNum = 0
        scope.row.FactoryNum = 0
        scope.row.OfficeNum = 0
        scope.row.BusinessNum = 0
        scope.row.Lowsbus = 0
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
        this.$alert('剩余面积不足', "提示", {
          confirmButtonText: '确认',
          type: 'info'
        }).then(() => {

        })
        scope.row.FactoryNum = 0
      } else if (Number(scope.row.HouseNum) + Number(scope.row.FactoryNum) + Number(scope.row.OfficeNum) + Number(scope.row.BusinessNum) + Number(scope.row.Lowsbus) > Number(scope.row.FormWork)) {
        this.$alert('所选面积不能大于总', "提示", {
          confirmButtonText: '确认',
          type: 'info'
        }).then(() => {

        })
        scope.row.HouseNum = 0
        scope.row.FactoryNum = 0
        scope.row.OfficeNum = 0
        scope.row.BusinessNum = 0
        scope.row.Lowsbus = 0
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

    BusinessChange(scope) {
      if (Number(scope.row.BusinessNum) > Number(this.NumType.Factornum)) {
        this.$alert('剩余面积不足', "提示", {
          confirmButtonText: '确认',
          type: 'info'
        }).then(() => {

        })
        scope.row.BusinessNum = 0
      } else if (Number(scope.row.HouseNum) + Number(scope.row.FactoryNum) + Number(scope.row.OfficeNum) + Number(scope.row.BusinessNum) + Number(scope.row.Lowsbus) > Number(scope.row.FormWork)) {
        this.$alert('所选面积不能大于总', "提示", {
          confirmButtonText: '确认',
          type: 'info'
        }).then(() => {

        })
        scope.row.HouseNum = 0
        scope.row.FactoryNum = 0
        scope.row.OfficeNum = 0
        scope.row.BusinessNum = 0
        scope.row.Lowsbus = 0
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
    LowsbusChange(scope) {
      if (Number(scope.row.Lowsbus) > Number(this.NumType.Factornum)) {
        this.$alert('剩余面积不足', "提示", {
          confirmButtonText: '确认',
          type: 'info'
        }).then(() => {

        })
        scope.row.Lowsbus = 0
      } else if (Number(scope.row.HouseNum) + Number(scope.row.FactoryNum) + Number(scope.row.OfficeNum) + Number(scope.row.BusinessNum) + Number(scope.row.Lowsbus) > Number(scope.row.FormWork)) {
        this.$alert('所选面积不能大于总', "提示", {
          confirmButtonText: '确认',
          type: 'info'
        }).then(() => {

        })
        scope.row.HouseNum = 0
        scope.row.FactoryNum = 0
        scope.row.OfficeNum = 0
        scope.row.BusinessNum = 0
        scope.row.Lowsbus = 0
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
      this.isLook = true
      this.dialogType = '新建'
      this.eninput = false
      this.dialogSigCreate = true
      if (this.isGroup == 1) {
        this.sigInfo.GroupId = this.loginUserId
      }
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
      } else if (this.multipleSelection[0].Potos) {
        this.$alert('已签约项目不允许编辑', '编辑', {
          confirmButtonText: '确认',
          type: 'info'
        })
      } else {
        this.isLook = true
        this.dialogType = '编辑'
        this.eninput = false
        this.dialogSigCreate = true
        this.sigInfo = deepClone(this.multipleSelection[0])
        console.log(this.sigInfo, this.multipleSelection[0])

      }
    },
    showSig() {
      console.log('click showSig!')

      if (this.multipleSelection.length == 0) {
        this.$alert('未选中', '查看', {
          confirmButtonText: '确认',
          type: 'info'
        })
      } else if (this.multipleSelection.length > 1) {
        this.$alert('最多只能同时执行一条', '查看', {
          confirmButtonText: '确认',
          type: 'info'
        })
      } else {

        this.isLook = false
        this.dialogType = '查看'
        this.dialogSigCreate = true
        this.eninput = true
        this.sigInfo = deepClone(this.multipleSelection[0])
      }


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
            this.axios.post('/Dle?Id=' + this.multipleSelection[0].Id).then((res) => {
              console.log(res.data)
              if (res.data.code == 1) {
                this.$message({
                  type: 'success',
                  message: '删除成功。'
                })
                this.getNumType()
                this.getQuerySign()
              } else {
                this.$message({
                  type: 'error',
                  message: '删除失败，请刷新页面后重试！'
                })
              }

            })
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
      this.sigInfo.FormWork = Number(this.sigInfo.ZzArea) + Number(this.sigInfo.BgArea) + Number(this.sigInfo.GyArea) + Number(this.sigInfo.JzArea) + Number(this.sigInfo.DcArea)
      this.sigInfo.HouseNum = Number(this.sigInfo.ZzArea) * 0.9
      this.sigInfo.OfficeNum = Number(this.sigInfo.BgArea) * 0.8
      this.sigInfo.FactoryNum = Number(this.sigInfo.GyArea) * 0.85
      this.sigInfo.BusinessNum = Number(this.sigInfo.JzArea) * 0.7
      this.sigInfo.Lowsbus = Number(this.sigInfo.DcArea) * 0.7
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
      this.sigInfo = Object.assign({}, defaultSig)
    },
    // 取消
    sigCancel() {
      this.dialogSigCreate = false
      this.sigInfo = Object.assign({}, defaultSig)

    },
    SigPrint(scope) {
      if (!scope.row.Moban) {
        this.$alert('请选择报告模板', '提示', {
          confirmButtonText: '确认',
          type: 'info'
        })
      } else {
        this.dialogType = '打印模板'
        this.dialogSigTemp = true
        console.log(scope.row, 654789)
        console.log(scope.row.Id)
        console.log(scope.row.Moban)
        this.axios.get('PrintTemp?Id=' + scope.row.Id + '&pid=' + scope.row.Moban).then((res) => {
          console.log(res.data)
          this.TempPrint = res.data

        })
      }


    },
    openCamera(scope) {
      console.log(scope.row)
      this.cameraSig = scope.row
      this.CameraDialog = true
      // this.callCamera()
      this.getCompetence();
    },

    //-----------------*******拍照111********---------------//
    // 取消
    onCancel() {
      this.CameraDialog = false;
      this.resetCanvas();
      this.stopNavigator();
      this.cameraSig = {}
    },
    // 调用摄像头权限
    getCompetence() {
      //必须在model中render后才可获取到dom节点,直接获取无法获取到model中的dom节点
      this.$nextTick(() => {
        const _this = this;
        this.open = false;//切换成关闭摄像头
        this.thisCancas = document.getElementById('canvasCamera');
        this.thisContext = this.thisCancas.getContext('2d');
        this.thisVideo = document.getElementById('videoCamera');
        // 旧版本浏览器可能根本不支持mediaDevices，我们首先设置一个空对象
        if (navigator.mediaDevices === undefined) {
          navigator.mediaDevices = {}
        }
        // 一些浏览器实现了部分mediaDevices，我们不能只分配一个对象
        // 使用getUserMedia，因为它会覆盖现有的属性。
        // 这里，如果缺少getUserMedia属性，就添加它。
        if (navigator.mediaDevices.getUserMedia === undefined) {
          navigator.mediaDevices.getUserMedia = function (constraints) {
            // 首先获取现存的getUserMedia(如果存在)
            let getUserMedia = navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.getUserMedia;
            // 有些浏览器不支持，会返回错误信息
            // 保持接口一致
            if (!getUserMedia) {
              return Promise.reject(new Error('getUserMedia is not implemented in this browser'))
            }
            // 否则，使用Promise将调用包装到旧的navigator.getUserMedia
            return new Promise(function (resolve, reject) {
              getUserMedia.call(navigator, constraints, resolve, reject)
            })
          }
        }
        const constraints = {
          audio: false,
          video: { width: _this.videoWidth, height: _this.videoHeight, transform: 'scaleX(-1)' }
        };
        navigator.mediaDevices.getUserMedia(constraints).then(function (stream) {
          // 旧的浏览器可能没有srcObject
          if ('srcObject' in _this.thisVideo) {
            _this.thisVideo.srcObject = stream
          } else {
            // 避免在新的浏览器中使用它，因为它正在被弃用。
            _this.thisVideo.src = window.URL.createObjectURL(stream)
          }
          _this.thisVideo.onloadedmetadata = function (e) {
            _this.thisVideo.play()
          }
        }).catch(err => {
          this.$notify({
            title: '警告',
            message: '没有开启摄像头权限或浏览器版本不兼容.',
            type: 'warning'
          });
        });
      });
    },
    //绘制图片
    drawImage() {
      // 点击，canvas画图
      this.thisContext.drawImage(this.thisVideo, 0, 0, this.videoWidth, this.videoHeight);
      // 获取图片base64链接
      let imgBase64 = this.thisCancas.toDataURL('image/jpeg', 0.6);


      // 由字节转换为KB 判断大小
      let str = imgBase64.replace('data:image/jpeg;base64,', '')
      let strLength = str.length
      let fileLength = parseInt(strLength - (strLength / 8) * 2)　　　 // 图片尺寸
      let size = (fileLength / 1024).toFixed(2)
      console.log(size + 'kB') 　　  // 上传拍照信息  调用接口上传图片 .........

      this.imgSrc = imgBase64
      console.log(this.imgSrc)
    },
    // 上传
    onUpload() {
      let file = this.imgSrc;
      let time = (new Date()).valueOf();
      let name = time + '.jpg';
      let conversions = this.dataURLtoFile(file, name);
      let parms = new FormData();
      parms.append('file', conversions);
      this.axios.post('/UploadPhoto', parms, {
        hwaders: {
          'Content-Type': 'multipart/form-data'
        }
      }).then((res) => {
        console.log(res.data.Data)
        if (res.data.StatusCode != 1) {
          this.$message({
            type: 'error',
            message: '图片上传失败，请重试。'
          })
        } else {
          this.cameraSig.Potos = res.data.Data
          console.log(this.cameraSig)

          this.axios.post('/InsSign', this.cameraSig).then((res) => {
            if (res.data.code != 1) {
              this.$message({
                type: 'warning',
                message: '修改失败，请刷新页面后重试'
              })
            } else {
              this.$message({
                type: 'success',
                message: '签约成功。'
              })
              this.CameraDialog = false
              this.getQuerySign()
            }
          })
        }


      })
    },

    //base64转文件流
    dataURLtoFile(dataurl, filename) {
      let arr = dataurl.split(',');
      let mime = arr[0].match(/:(.*?);/)[1];
      let bstr = atob(arr[1]);
      let n = bstr.length;
      let u8arr = new Uint8Array(n);
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n)
      }
      return new File([u8arr], filename, { type: mime })
    },

    //清空画布
    clearCanvas(id) {
      let c = document.getElementById(id);
      let cxt = c.getContext("2d");
      cxt.clearRect(0, 0, c.width, c.height);
    },
    //重置画布
    resetCanvas() {
      this.imgSrc = "";
      this.clearCanvas('canvasCamera');
    },
    //关闭摄像头
    stopNavigator() {
      if (this.thisVideo && this.thisVideo !== null) {
        this.thisVideo.srcObject.getTracks()[0].stop();
        this.open = true;//切换成打开摄像头
      }
    },




    //-------------------*******拍照222********---------------//

    // // 打开摄像头
    // callCamera() {
    //   // H5调用电脑摄像头API
    //   navigator.mediaDevices.getUserMedia({
    //     video: true
    //   }).then(success => {
    //     // 摄像头开启成功
    //     this.$refs.video.srcObject = success
    //     // 实时拍照效果
    //     this.$refs.video.play()
    //     //重置按钮
    //     this.cameraBtn = true

    //   }).catch(error => {
    //     console.error('摄像头开启失败，请检查摄像头是否可用！')
    //   })
    // },
    // // 关闭摄像头
    // closeCamera() {
    //   if (!this.$refs.video.srcObject) return
    //   let stream = this.$refs.video.srcObject
    //   let tracks = stream.getTracks()
    //   tracks.forEach(track => {
    //     track.stop()
    //   })
    //   this.$refs.video.srcObject = null
    // },

    // cameraCancel() {
    //   this.closeCamera()
    //   this.closeCamera()
    //   this.closeCamera()
    //   this.cameraBtn = true
    //   this.CameraDialog = false
    // },
    // resetKaca() {
    //   this.cameraBtn = true
    // },
    // kaca() {
    //   // this.closeCamera()

    //   let ctx = this.$refs.canvas.getContext('2d')
    //   // 把当前视频帧内容渲染到canvas上
    //   ctx.drawImage(this.$refs.video, 0, 0, 640, 480)
    //   // 转base64格式、图片格式转换、图片质量压缩
    //   let imgBase64 = this.$refs.canvas.toDataURL('image/jpeg', 0.7)

    //   // 由字节转换为KB 判断大小
    //   let str = imgBase64.replace('data:image/jpeg;base64,', '')
    //   let strLength = str.length
    //   let fileLength = parseInt(strLength - (strLength / 8) * 2)　　　 // 图片尺寸
    //   let size = (fileLength / 1024).toFixed(2)
    //   console.log(size + 'kB') 　　  // 上传拍照信息  调用接口上传图片 .........

    //   this.imgSrc = imgBase64




    //   this.cameraBtn = false
    // },
    // cameraUp() {
    //   this.closeCamera()
    //   this.cameraBtn = true
    //   this.CameraDialog = false


    //   // 保存到本地
    //   let ADOM = document.createElement('a')
    //   // ADOM.href = this.headImgSrc
    //   ADOM.href = this.imgSrc
    //   ADOM.download = new Date().getTime() + '.jpeg'
    //   ADOM.click()
    // },

    //----------------------------***************---------------------//

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
<style>
.el-table .success-row {
  background: #f0f9eb;
}
.el-table .success-row:hover {
  background: #f0f9eb;
}
</style>
<style lang="scss" scoped>
.dialogBox {
  border: 1px solid #b0e0e6;
  font-size: 18px;
  font-weight: 800;
  background-color: #b0e0e6;
  margin-bottom: 5px;
  padding: 5px 10px;
}
::v-deep .el-table__body tr:hover > td {
  background-color: rgba(255, 255, 0, 0) !important;
}
.box {
  display: flex;
  justify-content: space-between;
}

.canvas {
  border: 1px solid #e8e8e8;
}
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
