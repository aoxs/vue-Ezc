<template>
  <div class="dashboard-editor-container">
    <!-- <github-corner class="github-corner" /> -->

    <!-- <panel-group @handleSetLineChartData="handleSetLineChartData" /> -->

    <prog-index />

    <el-row>
      <!-- 阶段进度 -->
      <el-col :lg="16" :mb="8" class="Ppro" style="margin-bottom: 20px">
        <div style="height: 576px; background-color: #fff">
          <phase-progress />
        </div>
      </el-col>

      <!-- 每日进度 -->
      <el-col :lg="8" :mb="8" class="Dpro" style="margin-bottom: 20px">
        <div style="height: 576px; background-color: #fff">
          <days-progress />
        </div>
      </el-col>
    </el-row>

    <el-row>
      <!-- 工作照片 -->

      <el-col :lg="14" :mb="8" class="Ppro" style="margin-bottom: 20px">
        <div style=" background-color: #fff">
          <work-jpg></work-jpg>
        </div>
      </el-col>

      <!-- 安置房意愿调查表 -->

      <el-col :lg="10" :mb="8" class="Dpro" style="margin-bottom: 20px">
        <div style=" background-color: #fff">
          
        </div>
      </el-col>
    </el-row>

    <!-- <el-row style="background: #fff; padding: 16px 16px 0; margin-bottom: 32px">
      <line-chart :chart-data="lineChartData" />
    </el-row> -->

    <!-- <el-row :gutter="32">
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
          <raddar-chart />
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
          <pie-chart />
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
          <bar-chart />
        </div>
      </el-col>
    </el-row>

    <el-row :gutter="8">
      <el-col
        :xs="{ span: 24 }"
        :sm="{ span: 24 }"
        :md="{ span: 24 }"
        :lg="{ span: 12 }"
        :xl="{ span: 12 }"
        style="padding-right: 8px; margin-bottom: 30px"
      >
        <transaction-table />
      </el-col>
      <el-col
        :xs="{ span: 24 }"
        :sm="{ span: 12 }"
        :md="{ span: 12 }"
        :lg="{ span: 6 }"
        :xl="{ span: 6 }"
        style="margin-bottom: 30px"
      >
        <todo-list />
      </el-col>
      <el-col
        :xs="{ span: 24 }"
        :sm="{ span: 12 }"
        :md="{ span: 12 }"
        :lg="{ span: 6 }"
        :xl="{ span: 6 }"
        style="margin-bottom: 30px"
      >
        <box-card />
      </el-col>
    </el-row> -->
  </div>
</template>

<script>
import GithubCorner from "@/components/GithubCorner";
import PanelGroup from "./components/PanelGroup";
import LineChart from "./components/LineChart";
import RaddarChart from "./components/RaddarChart";
import PieChart from "./components/PieChart";
import BarChart from "./components/BarChart";
import TransactionTable from "./components/TransactionTable";
import TodoList from "./components/TodoList";
import BoxCard from "./components/BoxCard";
import ProgIndex from "./components/ProgIndex";
import PhaseProgress from "./components/PhaseProgress";
import DaysProgress from "./components/DaysProgress";
import WorkJpg from "./components/WorkJpg";


const lineChartData = {
  newVisitis: {
    expectedData: [100, 120, 161, 134, 105, 160, 165],
    actualData: [120, 82, 91, 154, 162, 140, 145],
  },
  messages: {
    expectedData: [200, 192, 120, 144, 160, 130, 140],
    actualData: [180, 160, 151, 106, 145, 150, 130],
  },
  purchases: {
    expectedData: [80, 100, 121, 104, 105, 90, 100],
    actualData: [120, 90, 100, 138, 142, 130, 130],
  },
  shoppings: {
    expectedData: [130, 140, 141, 142, 145, 150, 160],
    actualData: [120, 82, 91, 154, 162, 140, 130],
  },
};

export default {
  name: "DashboardAdmin",
  components: {
    GithubCorner,
    PanelGroup,
    LineChart,
    RaddarChart,
    PieChart,
    BarChart,
    TransactionTable,
    TodoList,
    BoxCard,
    ProgIndex,
    PhaseProgress,
    DaysProgress,
    WorkJpg,
  },
  data() {
    return {
      lineChartData: lineChartData.newVisitis,
    };
  },
  methods: {
    handleSetLineChartData(type) {
      this.lineChartData = lineChartData[type];
    },
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>

@media screen and (min-width: 1200px) {
  .Ppro {
    padding-right: 10px;
  }
  .Dpro {
    padding-left: 10px;
  }
}
@media screen and (max-width: 1199px) {
  .Ppro {
    padding-right: 0px;
  }
  .Dpro {
    padding-left: 0px;
  }
}

@media (max-width: 1024px) {
  // .chart-wrapper {
  //   padding: 8px;
  // }
}
</style>
