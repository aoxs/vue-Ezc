<template>
  <div class="A">
    <!-- <div class="pjTotal" style="background-color: #fff">
      <div style="padding: 5px 10px; padding-top: 20px">
        {{ porjectT.title }} {{ porjectT.pro }}%
      </div>

      <el-progress
        style="padding: 0px 10px"
        type="line"
        :percentage="porjectT.pro"
        :status="porjectT.pro == 100 ? 'success' : ''"
      ></el-progress>
    </div> -->
    <div class="pjctPro">
      <div id="pjPro" class="proUl">
        <div v-for="(i, key) of projectPro" :key="key" class="proLi">
          <div class="proBig">
            <div class="proDiv" style="">
              <p>{{ i.title }}</p>
              <el-progress
                type="circle"
                :percentage="i.pro"
                :status="i.pro == 100 ? 'success' : ''"
                width="40"
              />
              <p class="p2">{{ i.date }}</p>
            </div>
            <div class="divSpan" style="" />
          </div>
        </div>
        <div class="pjTotal">
          <!-- <div class="proBig"> -->
          <div class="pjTdiv" style="">
            <p>{{ porjectT.title }}</p>
            <el-progress
              type="circle"
              :percentage="porjectT.pro"
              :status="porjectT.pro == 100 ? 'success' : ''"
              color="#f00"
              width="40"
            />
            <p class="p2">{{ porjectT.date }}</p>

            <!-- </div> -->
          </div>
        </div>
      </div>
    </div>

    <!-- test end -->

    <!-- <div class="pjTotal" style="background-color: #fff">
      <div style="padding: 5px 10px; padding-top: 20px">
        {{ porjectT.title }} {{ porjectT.pro }}%
      </div>

      <el-progress
        style="padding: 0px 10px"
        type="line"
        :percentage="porjectT.pro"
        :status="porjectT.pro == 100 ? 'success' : ''"
      ></el-progress>
    </div> -->
    <!-- <div class="pjctPro">
      <ul id="pjPro" class="proUl">
        <li v-for="(i, key) of projectPro" :key="key" class="proLi">
          <div class="proDiv" style="">
            <p>{{ i.title }}</p>
            <el-progress
              type="circle"
              :percentage="i.pro"
              :status="i.pro == 100 ? 'success' : ''"
              width="40"
            ></el-progress>
            <p class="p2">{{ i.date }}</p>
          </div>
        </li>
      </ul>
    </div> -->

    <!-- <div class="pjctPro">
      <div style="padding: 10px 10px">
        <el-steps :active="4" align-center="">
          <el-step
            v-for="item in projectPro"
            :key="item.key"
            :title="item.title"
            :description="item.date"
          >
          </el-step>
        </el-steps>
      </div>
    </div> -->
    <!-- <div class="pjctPro">
      <ul type="none" class="proUl">
        <li class="proLi">
          <div class="proDiv">
            <p>未批未建集体农用地</p>

            <el-progress
              type="circle"
              :percentage="100"
              status="success"
              width="40"
            ></el-progress>
            <p class="p2">2020/7/1 0:00:00-2020/7/31 23:59:00</p>
          </div>
        </li>
        <li class="lispan"></li>
        <li class="proLi">
          <div class="proDiv">
            <p>私人住宅</p>

            <el-progress
              type="circle"
              :percentage="60"
              width="40"
            ></el-progress>
            <p class="p2">2020/7/1 0:00:00-2020/7/31 23:59:00</p>
          </div>
        </li>
        <li class="lispan"></li>
        <li class="proLi">
          <div class="proDiv">
            <p>其他土地及物业</p>
            <el-progress type="circle" :percentage="0" width="40"></el-progress>
            <p class="p2">2020/7/1 0:00:00-2020/7/31 23:59:00</p>
          </div>
        </li>
      </ul>
    </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      porjectT: {
        title: '土地整备总进度',
        pro: '55',
        date: '2020/07/01 0:00:00 - 2020/07/31 23:59:00'
      },
      projectPro: [
        {
          pid: '1',
          title: '未批未建集体农用地',
          pro: '100',
          date: '2020/07/01 0:00:00 - 2020/07/31 23:59:00'
        },
        {
          pid: '2',
          title: '私人住宅',
          pro: '10',
          date: '2020/07/01 0:00:00 - 2020/07/31 23:59:00'
        },
        {
          pid: '3',
          title: '其它土地及物业',
          pro: '16',
          date: '2020/07/01 0:00:00 - 2020/07/31 23:59:00'
        }
      ]
    }
  },
  mounted() {},
  methods: {
    // fromat(percentage) {
    //   return percentage == 100 ? ' ' : ' '
    // }
  }
}
</script>

<style scoped>
.A {
  background-color: #ff0;
}
.pjctPro {
  width: 100%;
  background-color: #fff;
  margin-bottom: 20px;
}
p {
  margin: 5px 0px;
  text-align: center;
  line-height: 16px;
  /* transform: translate(-25%, 0px); */
  font-size: 16px;
  /* display:none; */
  /* position: absolute; */
  /* bottom: 8px; */
}
.p2 {
  width: 150px;
  font-size: 12px;
  color: #a1a1a1;
  white-space: normal;
}
.pjTotal {
  width: 40px;
  display: inline-block;
  /* border-radius: 50%; */
  /* border: 2px solid #000; */
  vertical-align: middle;
  border: 0px;
}
.proUl {
  /* position: relative; */
  /* width: 100%; */
  margin-top: 0px;

  /* height: 80px; */
  white-space: nowrap;
  overflow: hidden;
  /* background-color: #fff; */
  padding: 10px 20px;
  text-align: center;
}
.proLi {
  width: 17%;
  display: inline-block;
  /* border-radius: 50%; */
  /* border: 2px solid #000; */
  vertical-align: middle;
  border: 0px;
}
.proDiv {
  width: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.pjTdiv {
  width: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.proBig {
  width: 100%;
  margin-right: 0px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.divSpan {
  width: 100%;
  height: 0px;
  padding: 3px;
  background-color: #20a0ff;
  display: inline-block;
  transform: translate(0px, -8px);

}
.lispan {
  /* width: 40px; */
  display: inline-block;
  /* border-radius: 50%; */
  /* border: 2px solid #000; */
  vertical-align: middle;
  border: 0px;
  width: 30%;
  padding: 2px;
  background-color: #20a0ff;
  /* transform: translate(0px, -8px); */
}
</style>
