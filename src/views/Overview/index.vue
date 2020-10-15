<template>
  <div class="dashboard-editor-container">
    <div style="background-color: #fff">
      <div style="width: 100%">
        <p class="ovHead" style="">基本信息</p>
        <el-table
          :data="tableData"
          style="width: 70%; background-color: red; margin-left: 20px"
          class="el-table"
        >
          <el-table-column prop="icon" label="" width="40"></el-table-column>
          <el-table-column prop="title" label="" width="180"> </el-table-column>
          <el-table-column prop="date" label="" width=""> </el-table-column>
        </el-table>
      </div>

      <div class="row" style="background-color: #fff; margin-top: 20px">
        <div
          class="col-lg-12 mb-4 articleCon"
          style="font-size: 18px;padding-bottom:20px"
          v-html="articleContent"
        >
          <!-- {{articleContent}} -->
        </div>
      </div>
    </div>

    <div style="background-color: #fff;margin-top:20px;">
      <p class="ovHead">项目组织</p>
      <img
        src="./images/组织架构_20200918143307.png"
        style="width: 100%; padding: 10px 20px"
        alt=""
      />
    </div>

    <!-- <div style="background-color: #fff; padding: 20px">
      <div v-for="(i, key) in tableData" :key="key">
        <span>{{ i.date }}</span>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        { icon: "", title: "位置：", date: "东莞市虎门镇威远岛" },
        {
          icon: "",
          title: "实施单位：",
          date: "滨海湾新区管委会、虎门镇人民政府",
        },
        {
          icon: "",
          title: "临时指挥部：",
          date: "东莞市滨海湾新区威远岛土地整备现场指挥部",
        },
        { icon: "", title: "综合服务商：", date: "华夏幸福基业股份有限公司" },
        {
          icon: "",
          title: "社区居民委员会：",
          date:
            "北面社区居民委员会、武山沙社区居民委员会、南面社区居民委员会、九门寨社区居民委员会",
        },
        { icon: "", title: "总户数：", date: "2000户" },
        { icon: "", title: "总亩数：", date: "1200000.00亩" },
        { icon: "", title: "现状总建筑面积：", date: "1010000.00平方米" },
        { icon: "", title: "规划建设面积：", date: "0平方米" },
        { icon: "", title: "回迁房面积：", date: "950000平方米" },
        { icon: "", title: "保障房面积：", date: "0平方米" },
        { icon: "", title: "安置房总数量：", date: "0套" },
      ],
      articleContent: ` <div style="width: 90%; margin-left: 5%">
          <p style="text-align: center;margin:0;margin-top:5px">
            <span style="font-family: SimHei"
              ><strong
                ><span style="font-size: 24px; color: #663333"
                  >威远岛项目介绍</span
                ></strong
              ></span
            >
          </p>
          <span style="font-family: FangSong_GB2312; font-size: 18px"
            >滨海湾新区于2017年正式挂牌成立,作为新时期东莞参与粤港澳大湾区建设和对外开放的战略平台，新区肩负着抢抓港澳大湾区建设机遇,全面打造粤港澳大湾区协同发展特色平台、珠三角核心区融合发展战略节点、东莞高质量发展创新引擎和滨海生活宜居智慧新城的的重要历史使命。</span
          ><br />
          <p style="margin:0">
            <span style="font-family: FangSong_GB2312; font-size: 18px"
              >威远岛是滨海湾新区“一廊两轴三板块”空间格局的重要组成部分，全面推进威远岛土地整备工作，是贯彻落实市委市政府战略部署的大局担当，是抢抓发展机遇的必然要求，是强化招商引资、加快项目建设的根本保障，是提升城市品质、造福市民群众的重要举措，是加速推动新区高质量发展和区镇融合发展的重要措施，也是全面实现威远岛城市品质根本性提升的关键保障。</span
            >
          </p>
          <p style="text-align: center;margin:0;margin-top:5px">
            <span
              style="
                font-family: FangSong_GB2312;
                font-size: 24px;
                color: #663333;
              "
              >威远岛土地整备基本情况</span
            >
          </p>
          <p style="margin:0">
            <span style="font-family: FangSong_GB2312; font-size: 18px"
              >威远岛处于粤港澳大湾区几何中心，位于东莞市西南部珠江口东岸、滨海湾新区西北端，是新区三大板块之一，拥有优越的自然条件和连片的土地开发空间。</span
            >
          </p>
          <p style="margin:0">
            <span style="font-family: FangSong_GB2312; font-size: 18px"
              >当前威远岛土地整备工作已按“整岛整备”思路启动实施，纳入整备范围土地约9460亩。</span
            >
          </p>
          <p style="margin:0">
            <span style="font-family: FangSong_GB2312; font-size: 18px"
              >纳入整备范围土地包括四大部分：</span
            >
          </p>
          <p style="margin:0">
            <span style="font-family: FangSong_GB2312; font-size: 18px"
              >1.&nbsp;大湾区大学范围内:土地整备范围面积约2100亩,其中建成区约840亩,建筑量约22.6万m²(其中,私宅467宗、约14.5万m²;工业厂房约8.1万m²)</span>
          </p>
          <p style="margin:0">
            <span style="font-family: FangSong_GB2312; font-size: 18px"
              >2.大湾区大学范围外的集体农用地:土地整备范围面积约5894亩;土储债地块1102亩,其中570亩与集体农用地重合。</span
            >
          </p>
          <p style="margin:0">
            <span style="font-family: FangSong_GB2312; font-size: 18px"
              >3.大湾区大学范围外的私宅:2188宗、约835亩,总建筑面积约78.5万m²。</span
            >
          </p>
          <p style="margin:0">
            <span style="font-family: FangSong_GB2312; font-size: 18px"
              >4.道路建设涉及的其他土地和物业:约129.3亩,包括①海战馆路北延线涉及已供未用鸿鑫花园的商住用地约31.3亩(20853m²),②东湾大道涉及滩涂围垦区约98亩。</span
            >
          </p>
          <p style="margin:0">
            <span style="font-family: FangSong_GB2312; font-size: 18px"
              >以上数据以最终测绘成果为准。</span
            >
          </p>
          <p style="text-align: center;margin:0;margin-top:5px">
            <strong
              ><span
                style="
                  font-family: FangSong_GB2312;
                  font-size: 24px;
                  color: #663333;
                "
                >全面推进威远岛土地整备工作</span
              ></strong
            >
          </p>
          <p style="margin:0">
            <span style="font-family: FangSong_GB2312; font-size: 18px"
              >2018年,滨海湾新区管委会与平安集团签署了战略合作协议,共同合作推进威远岛整岛开发。紧紧围绕这一目标,双方提出了土地收储、城市更新、基础设施建设、产业培育四大核心任务。华夏幸福（深圳）城市更新管理有限公司作为平安集团下属企业,具体承担了威远岛整岛开发的策划、执行工作。</span
            >
          </p>
          <p style="margin:0">
            <span style="font-family: FangSong_GB2312; font-size: 18px"
              >目前，威远岛土地整备现场指挥部会同华夏幸福基业股份有限公司，依照“整岛统筹、分段实施、量力而行、滚动发展”总体思路和“征拆、安置土地开发联动推进”的操作模式，参考了其它土地整备项目的成功经验，梳理了一系列工作制度，制定了三年工作总计划。</span
            >
          </p>
          <p style="margin:0">
            <span style="font-family: FangSong_GB2312; font-size: 18px"
              >接下来将把土地整备工作分为四大方面推进，分别是大湾区大学用地整备、集体农用地收储、核心地块的现状私宅征收、道路等重点公配基建设施用地征收。</span
            >
          </p>
          <p style="text-align: center;margin:0;margin-top:5px">
            <strong
              ><span
                style="
                  font-family: FangSong_GB2312;
                  font-size: 24px;
                  color: #663333;
                "
                >威远岛的未来</span
              ></strong
            >
          </p>
          <p style="margin:0">
            <span style="font-family: FangSong_GB2312; font-size: 18px"
              >威远岛背倚青山面朝大海，使这里拥有极佳的自然环境；虎门大桥跨岛而过，广深沿江高速将广州深圳两个一线城市与威远密切相连，使这里拥有极佳的交通环境；面对南沙自贸区，牵手深圳前海，使这里拥有极佳的发展潜能。今天，沉寂多年的威远岛正在迎来一次脱胎换骨的发展机遇，一个以金融科技为引领的、更可持续的智慧产业新城、更现代化的国际化城区以及民族复兴的精神地标将在这片土地上诞生。</span
            >
          </p>
          <p style="margin:0">
            <span style="font-family: FangSong_GB2312; font-size: 18px"
              >未来的威远岛上，将有人才辈出的湾区大学，将有风景优美的森林公园......高水平产业、高素质人口，高品质的设施必定给威远人民带来高质量的生活与丰厚的汇报。那时，威远岛将成为珠水之滨一颗璀璨的明珠，而“威远人”将成为一个令许多人羡慕的称号。</span
            >
          </p>
        </div>`,
    };
  },
};
</script>
<style scoped>

.ovHead {
  margin: 0;
  padding: 0;
  font-size: 22px;
  padding-left: 15px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-bottom:1px solid #c8c8c8;
}
</style>