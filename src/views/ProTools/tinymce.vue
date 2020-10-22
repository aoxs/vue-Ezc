<template>
  <div class="components-container">
    <!-- <aside>
      富文本是管理后台的一个核心功能，但同时也是一个有很多漏洞的地方。在选择丰富文本的过程中，我也走了很多弯路。市场上常见的丰富文本已经基本使用，最终我选择了Tinymce。请参阅更详细的富文本比较和介绍。
      <a target="_blank" class="link-type" href="https://panjiachen.github.io/vue-element-admin-site/feature/component/rich-editor.html">Documentation</a>
    </aside> -->
    <div>
      <tinymce v-model="content" :height="300" />
    </div>
    <div class="editor-content" v-html="content" />
  </div>
</template>

<script>
import Tinymce from '@/components/Tinymce'

export default {
  name: 'TinymceDemo',
  components: { Tinymce },
  data() {
    return {
      content:
      `<p style="text-align: center;"><span style="font-size: 24px; color: #663333; font-family: 微软雅黑;"><strong>威远岛项目介绍</strong></span></p>
<p><span style="font-family: 微软雅黑; font-size: 18px;">&nbsp; &nbsp; &nbsp; 滨海湾新区于2017年正式挂牌成立,作为新时期东莞参与粤港澳大湾区建设和对外开放的战略平台，新区肩负着抢抓港澳大湾区建设机遇,全面打造粤港澳大湾区协同发展特色平台、珠三角核心区融合发展战略节点、东莞高质量发展创新引擎和滨海生活宜居智慧新城的的重要历史使命。</span></p>
<p><span style="font-family: 微软雅黑; font-size: 18px;">&nbsp; &nbsp; &nbsp; 威远岛是滨海湾新区&ldquo;一廊两轴三板块&rdquo;空间格局的重要组成部分，全面推进威远岛土地整备工作，是贯彻落实市委市政府战略部署的大局担当，是抢抓发展机遇的必然要求，是强化招商引资、加快项目建设的根本保障，是提升城市品质、造福市民群众的重要举措，是加速推动新区高质量发展和区镇融合发展的重要措施，也是全面实现威远岛城市品质根本性提升的关键保障。</span></p>
<p style="text-align: center;"><span style="color: #663333; font-size: 24px; font-family: 微软雅黑;">威远岛土地整备基本情况</span></p>
<p><span style="font-family: 微软雅黑; font-size: 18px;">&nbsp; &nbsp; &nbsp; 威远岛处于粤港澳大湾区几何中心，位于东莞市西南部珠江口东岸、滨海湾新区西北端，是新区三大板块之一，拥有优越的自然条件和连片的土地开发空间。</span></p>
<p><span style="font-family: 微软雅黑; font-size: 18px;">&nbsp; &nbsp; &nbsp; 当前威远岛土地整备工作已按&ldquo;整岛整备&rdquo;思路启动实施，纳入整备范围土地约9460亩。</span></p>
<p><span style="font-family: 微软雅黑; font-size: 18px;">纳入整备范围土地包括四大部分：</span></p>
<p><span style="font-family: 微软雅黑; font-size: 18px;">1.&nbsp;大湾区大学范围内:土地整备范围面积约2100亩,其中建成区约840亩,建筑量约22.6万m&sup2;(其中,私宅467宗、约14.5万m&sup2;;工业厂房约8.1万m&sup2;)</span></p>
<p><span style="font-family: 微软雅黑; font-size: 18px;">2.大湾区大学范围外的集体农用地:土地整备范围面积约5894亩;土储债地块1102亩,其中570亩与集体农用地重合。</span></p>
<p><span style="font-family: 微软雅黑; font-size: 18px;">3.大湾区大学范围外的私宅:2188宗、约835亩,总建筑面积约78.5万m&sup2;。</span></p>
<p><span style="font-family: 微软雅黑; font-size: 18px;">4.道路建设涉及的其他土地和物业:约129.3亩,包括①海战馆路北延线涉及已供未用鸿鑫花园的商住用地约31.3亩(20853m&sup2;),②东湾大道涉及滩涂围垦区约98亩。</span></p>
<p><span style="font-family: 微软雅黑; font-size: 18px;">以上数据以最终测绘成果为准。</span></p>
<p style="text-align: center;"><span style="font-size: 24px; color: #663333; font-family: 微软雅黑;"><strong>全面推进威远岛土地整备工作</strong></span></p>
<p><span style="font-family: 微软雅黑; font-size: 18px;">&nbsp; &nbsp; &nbsp; 2018年,滨海湾新区管委会与平安集团签署了战略合作协议,共同合作推进威远岛整岛开发。紧紧围绕这一目标,双方提出了土地收储、城市更新、基础设施建设、产业培育四大核心任务。华夏幸福（深圳）城市更新管理有限公司作为平安集团下属企业,具体承担了威远岛整岛开发的策划、执行工作。</span></p>
<p><span style="font-family: 微软雅黑; font-size: 18px;">&nbsp; &nbsp; &nbsp; 目前，威远岛土地整备现场指挥部会同华夏幸福基业股份有限公司，依照&ldquo;整岛统筹、分段实施、量力而行、滚动发展&rdquo;总体思路和&ldquo;征拆、安置土地开发联动推进&rdquo;的操作模式，参考了其它土地整备项目的成功经验，梳理了一系列工作制度，制定了三年工作总计划。</span></p>
<p><span style="font-family: 微软雅黑; font-size: 18px;">接下来将把土地整备工作分为四大方面推进，分别是大湾区大学用地整备、集体农用地收储、核心地块的现状私宅征收、道路等重点公配基建设施用地征收。</span></p>
<p style="text-align: center;"><span style="font-family: 微软雅黑; font-size: 24px; color: #663333;"><strong>威远岛的未来</strong></span></p>
<p><span style="font-family: 微软雅黑; font-size: 18px;">&nbsp; &nbsp; &nbsp; 威远岛背倚青山面朝大海，使这里拥有极佳的自然环境；虎门大桥跨岛而过，广深沿江高速将广州深圳两个一线城市与威远密切相连，使这里拥有极佳的交通环境；面对南沙自贸区，牵手深圳前海，使这里拥有极佳的发展潜能。今天，沉寂多年的威远岛正在迎来一次脱胎换骨的发展机遇，一个以金融科技为引领的、更可持续的智慧产业新城、更现代化的国际化城区以及民族复兴的精神地标将在这片土地上诞生。</span></p>
<p><span style="font-family: 微软雅黑; font-size: 18px;">&nbsp; &nbsp; &nbsp; 未来的威远岛上，将有人才辈出的湾区大学，将有风景优美的森林公园......高水平产业、高素质人口，高品质的设施必定给威远人民带来高质量的生活与丰厚的汇报。那时，威远岛将成为珠水之滨一颗璀璨的明珠，而&ldquo;威远人&rdquo;将成为一个令许多人羡慕的称号。</span></p>`
    }
  }
}
</script>

<style scoped>
.editor-content{
  margin-top: 20px;
}
</style>

