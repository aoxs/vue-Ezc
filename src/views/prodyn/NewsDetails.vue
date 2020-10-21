<template>
  <div class="dashboard-editor-container">
    <div style="background-color: #fff">

      <div style="width:95%;margin: 0 auto;padding-top:50px">
        <span style="color:#999999;margin-left:80px">ps:文章id：{{NewsId}}</span>

        <p style="text-align: center;font-size:24px">{{title}}</p>
        <p style="text-align: center;font-size:14px;color: #999999">
          <span>发布时间：{{date}}</span>
          <span style="margin-left: 10px">文章来源：{{source}}</span>
        </p>
        <div v-html="detail"></div>

      </div>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      NewsId: '0',
      title: "英联项目新动态||轨道建设土地整备 英联一直在路上",
      date: '2020-08-02',
      source: '英联不动产集团',
      detail: `<section style="box-sizing: border-box; text-align: justify;">
    <section style="text-align: center; justify-content: center; margin: 10px 0%; transform: translate3d(1px, 0px, 0px); -webkit-transform: translate3d(1px, 0px, 0px); -moz-transform: translate3d(1px, 0px, 0px); -o-transform: translate3d(1px, 0px, 0px); position: static; box-sizing: border-box;" powered-by="xiumi.us">
        <section style="display: inline-block; width: 98%; vertical-align: top; height: auto; background-color: rgb(255, 255, 255); border-style: solid; border-width: 1px; border-radius: 0px; border-color: rgb(52, 191, 234); padding: 5px 0px; box-sizing: border-box;">
            <section style="position: static; box-sizing: border-box;" powered-by="xiumi.us">
                <section style="display: flex; flex-flow: row nowrap; margin: 0px 0%; position: static; box-sizing: border-box;">
                    <section style="display: inline-block; vertical-align: middle; width: auto; flex: 100 100 0%; align-self: center; height: auto; padding: 0px 10px; box-sizing: border-box;">
                        <section style="margin: 0px 0%; position: static; box-sizing: border-box;" powered-by="xiumi.us">
                            <section style="color: rgb(68, 148, 170); letter-spacing: 4px; padding: 0px; box-sizing: border-box;">
                                <p style="margin-top: 0px; margin-bottom: 0px; padding: 0px; box-sizing: border-box;">
                                    英联动态
                                </p>
                            </section>
                        </section>
                    </section>
                    <section style="display: inline-block; vertical-align: bottom; width: auto; flex: 1 1 0%; align-self: flex-end; height: auto; margin: 0px -4px 0px 0px; box-sizing: border-box;">
                        <section style="text-align: left; margin: 0px 0%; font-size: 0px; position: static; box-sizing: border-box;" powered-by="xiumi.us">
                            <section style="display: inline-block; width: 8px; height: 8px; vertical-align: top; overflow: hidden; border-width: 1px; border-radius: 0px; border-style: none; border-color: rgb(206, 175, 151); background-color: rgb(52, 191, 234); box-sizing: border-box;">
                                <section style="text-align: justify; box-sizing: border-box;" powered-by="xiumi.us">
                                    <p style="white-space: normal; margin-top: 0px; margin-bottom: 0px; padding: 0px; box-sizing: border-box;">
                                        <br style="box-sizing: border-box;"/>
                                    </p>
                                </section>
                            </section>
                        </section>
                    </section>
                </section>
            </section>
        </section>
    </section>
    <section style="margin: 10px 0% 4px; position: static; box-sizing: border-box;" powered-by="xiumi.us">
        <section style="display: inline-block; width: 100%; vertical-align: top; border-width: 1px; border-radius: 0px; border-style: solid; border-color: rgb(52, 191, 234); padding: 10px 16px; box-sizing: border-box;">
            <section style="text-align: right; justify-content: flex-end; transform: translate3d(-10px, 0px, 0px); -webkit-transform: translate3d(-10px, 0px, 0px); -moz-transform: translate3d(-10px, 0px, 0px); -o-transform: translate3d(-10px, 0px, 0px); margin: -16px 0% 10px; font-size: 0px; position: static; box-sizing: border-box;" powered-by="xiumi.us">
                <section class="group-empty" style="display: inline-block; width: 11px; height: 11px; vertical-align: top; overflow: hidden; border-style: solid; border-width: 1px; border-radius: 0px; border-color: rgb(52, 191, 234); background-image: linear-gradient(to right, rgba(255, 255, 255, 0) 50%, rgb(255, 255, 255) 50%); box-sizing: border-box;">
                    <svg viewbox="0 0 1 1" style="float:left;line-height:0;width:0;vertical-align:top;"></svg>
                </section>
            </section>
            <section style="margin: 0px 0%; position: static; box-sizing: border-box;" powered-by="xiumi.us">
                <section style="font-size: 14px; color: rgb(62, 62, 62); line-height: 1.8; letter-spacing: 1.8px; padding: 0px; box-sizing: border-box;">
                    <p style="text-indent: 2em; white-space: normal; margin-top: 0px; margin-bottom: 0px; padding: 0px; box-sizing: border-box;">
                        英联一直在土地整备的路上，除完成过南方科技大学、鹿丹村、光明中山大学、光明科学城等市重大土地整备项目外，在深圳轨道交通建设土地整备工作中，英联更是凭借多年的专业服务经验参与了大量深圳轨道交通建设。地铁3号线和深惠路改造项目、广深港客运专线（深圳段、东莞段）项目、厦深铁路龙岗段项目、福田轨道交通三期涉及7号线、9号线、11号线项目、6号线光明段项目、赣深铁路（光明街道段）项目、轨道13号线项目……伴随着轨道交通的不断延伸，英联“红色军团”足迹遍布深圳各个角落。求真务实、攻坚克难，在每一条轨道交通线路上，凝聚着英联人的汗水与智慧。英联，与深圳发展一同前行！
                    </p>
                </section>
            </section>
            <section style="text-align: center; margin-top: 10px; margin-bottom: 10px; position: static; box-sizing: border-box;" powered-by="xiumi.us">
                <section style="max-width: 100%; vertical-align: middle; display: inline-block; line-height: 0; box-sizing: border-box;">
                    <img class="raw-image" style="vertical-align: middle; max-width: 100%; box-sizing: border-box;" data-ratio="0.562963" data-w="1080" src="http://www.inlandchina.com/uploadfile/image/20200921/1600674884127533.jpg" title="1600674884127533.jpg" alt="1.jpg"/>
                </section>
            </section>
        </section>
    </section>
    <section style="text-align: left; justify-content: flex-start; margin: 0px 0% 10px; transform: translate3d(10px, 0px, 0px); -webkit-transform: translate3d(10px, 0px, 0px); -moz-transform: translate3d(10px, 0px, 0px); -o-transform: translate3d(10px, 0px, 0px); font-size: 0px; position: static; box-sizing: border-box;" powered-by="xiumi.us">
        <section style="display: inline-block; width: 50%; vertical-align: top; height: auto; box-sizing: border-box;">
            <section style="margin: 0px 0%; position: static; box-sizing: border-box;" powered-by="xiumi.us">
                <section style="background-color: rgb(52, 191, 234); height: 1px; box-sizing: border-box;">
                    <svg viewbox="0 0 1 1" style="float:left;line-height:0;width:0;vertical-align:top;"></svg>
                </section>
            </section>
        </section>
    </section>
    <section style="text-align: left; justify-content: flex-start; margin: 0px 0% 10px; transform: translate3d(10px, 0px, 0px); -webkit-transform: translate3d(10px, 0px, 0px); -moz-transform: translate3d(10px, 0px, 0px); -o-transform: translate3d(10px, 0px, 0px); font-size: 0px; position: static; box-sizing: border-box;" powered-by="xiumi.us">
        <section style="display: inline-block; width: 50%; vertical-align: top; height: auto; box-sizing: border-box;">
            <section style="margin: 0px 0%; position: static; box-sizing: border-box;" powered-by="xiumi.us">
                <section style="background-color: rgb(52, 191, 234); height: 1px; box-sizing: border-box;">
                    <svg viewbox="0 0 1 1" style="float:left;line-height:0;width:0;vertical-align:top;"></svg>
                </section>
            </section>
        </section>
    </section>
    <section style="text-align: center; justify-content: center; margin: 10px 0%; position: static; box-sizing: border-box;" powered-by="xiumi.us">
        <section style="display: inline-block; width: auto; vertical-align: top; min-width: 10%; max-width: 100%; height: auto; box-sizing: border-box;">
            <section style="margin: 0px 0% 4px; position: static; box-sizing: border-box;" powered-by="xiumi.us">
                <section style="display: inline-block; width: 100%; vertical-align: top; border-width: 1px; border-radius: 0px; border-style: solid; border-color: rgb(52, 191, 234); padding: 0px 16px; box-sizing: border-box;">
                    <section style="margin: 0px 0%; position: static; box-sizing: border-box;" powered-by="xiumi.us">
                        <section style="color: rgb(52, 191, 234); line-height: 1.8; letter-spacing: 1.8px; padding: 0px; box-sizing: border-box;">
                            <p style="margin-top: 0px; margin-bottom: 0px; padding: 0px; box-sizing: border-box;">
                                <strong style="box-sizing: border-box;">地铁16号线二期工程征收项目</strong>
                            </p>
                            <p style="margin-top: 0px; margin-bottom: 0px; padding: 0px; box-sizing: border-box;">
                                <strong style="box-sizing: border-box;">正式启动签约</strong>
                            </p>
                        </section>
                    </section>
                </section>
            </section>
            <section style="text-align: left; justify-content: flex-start; margin: 0px 0%; transform: translate3d(10px, 0px, 0px); -webkit-transform: translate3d(10px, 0px, 0px); -moz-transform: translate3d(10px, 0px, 0px); -o-transform: translate3d(10px, 0px, 0px); font-size: 0px; position: static; box-sizing: border-box;" powered-by="xiumi.us">
                <section style="display: inline-block; width: 50%; vertical-align: top; height: auto; box-sizing: border-box;">
                    <section style="margin: 0px 0%; position: static; box-sizing: border-box;" powered-by="xiumi.us">
                        <section style="background-color: rgb(52, 191, 234); height: 1px; box-sizing: border-box;">
                            <svg viewbox="0 0 1 1" style="float:left;line-height:0;width:0;vertical-align:top;"></svg>
                        </section>
                    </section>
                </section>
            </section>
        </section>
    </section>
    <section style="margin: 10px 0% 4px; position: static; box-sizing: border-box;" powered-by="xiumi.us">
        <section style="display: inline-block; width: 100%; vertical-align: top; border-width: 1px; border-radius: 0px; border-style: solid; border-color: rgb(52, 191, 234); padding: 10px 16px; box-sizing: border-box;">
            <section style="text-align: right; justify-content: flex-end; transform: translate3d(-10px, 0px, 0px); -webkit-transform: translate3d(-10px, 0px, 0px); -moz-transform: translate3d(-10px, 0px, 0px); -o-transform: translate3d(-10px, 0px, 0px); margin: -16px 0% 10px; font-size: 0px; position: static; box-sizing: border-box;" powered-by="xiumi.us">
                <section class="group-empty" style="display: inline-block; width: 11px; height: 11px; vertical-align: top; overflow: hidden; border-style: solid; border-width: 1px; border-radius: 0px; border-color: rgb(52, 191, 234); background-image: linear-gradient(to right, rgba(255, 255, 255, 0) 50%, rgb(255, 255, 255) 50%); box-sizing: border-box;">
                    <svg viewbox="0 0 1 1" style="float:left;line-height:0;width:0;vertical-align:top;"></svg>
                </section>
            </section>
            <section style="margin: 0px 0%; position: static; box-sizing: border-box;" powered-by="xiumi.us">
                <section style="font-size: 14px; color: rgb(62, 62, 62); line-height: 1.8; letter-spacing: 1.8px; padding: 0px; box-sizing: border-box;">
                    <p style="text-indent: 2em; white-space: normal; margin-top: 0px; margin-bottom: 0px; padding: 0px; box-sizing: border-box;">
                        8月1日上午，地铁16号线二期工程征收项目正式启动签约，龙岗区委副书记、区政府党组书记、区长代金涛亲赴地铁16号线二期指挥部参加启动仪式，并到攻坚谈判小组实地调研“大兵团作战”征拆工作模式。区府办、区城市更新和土地整备局、区土地整备事务中心、区轨道办相关负责人，园山街道党工委书记朱云、党工委委员韩雪峰等街道主要领导参加了此次活动。
                    </p>
                </section>
            </section>
            <section style="text-align: center; margin-top: 10px; margin-bottom: 10px; position: static; box-sizing: border-box;" powered-by="xiumi.us">
                <section style="max-width: 100%; vertical-align: middle; display: inline-block; line-height: 0; box-sizing: border-box;">
                    <img class="raw-image" style="vertical-align: middle; max-width: 100%; box-sizing: border-box;" data-ratio="0.6869565" data-w="690" src="http://www.inlandchina.com/uploadfile/image/20200921/1600674891223550.png" title="1600674891223550.png" alt="2.png"/>
                </section>
            </section>
            <section style="text-align: center; margin-top: 10px; margin-bottom: 10px; position: static; box-sizing: border-box;" powered-by="xiumi.us">
                <section style="max-width: 100%; vertical-align: middle; display: inline-block; line-height: 0; box-sizing: border-box;">
                    <img class="raw-image" style="vertical-align: middle; max-width: 100%; box-sizing: border-box;" data-ratio="0.6666667" data-w="750" src="http://www.inlandchina.com/uploadfile/image/20200921/1600674898799100.jpg" title="1600674898799100.jpg" alt="3.jpg"/>
                </section>
            </section>
            <section style="margin: 0px 0%; position: static; box-sizing: border-box;" powered-by="xiumi.us">
                <section style="font-size: 14px; color: rgb(62, 62, 62); line-height: 1.8; letter-spacing: 1.8px; padding: 0px; box-sizing: border-box;">
                    <p style="text-indent: 2em; white-space: normal; margin-top: 0px; margin-bottom: 0px; padding: 0px; box-sizing: border-box;">
                        金涛区长强调，征拆工作事关千家万户，过程相当不易，成绩来之不易，大家艰苦作战的精神值得肯定；希望大家工作过程中将政策沟通、解释到位。通过活用政策，平衡好个体利益与整体利益、短期利益与长期利益的关系，争取各方理解；鼓励大家继续坚守岗位，依法依规，整体推进疫情防控和征地拆迁工作，促进未来发展。同时，金涛区长对促进本次签约工作顺利启动的各服务机构前期工作予以充分肯定，高度评价各服务机构的专业、高效。
                    </p>
                </section>
            </section>
            <section style="text-align: center; margin-top: 10px; margin-bottom: 10px; position: static; box-sizing: border-box;" powered-by="xiumi.us">
                <section style="max-width: 100%; vertical-align: middle; display: inline-block; line-height: 0; box-sizing: border-box;">
                    <img class="raw-image" style="vertical-align: middle; max-width: 100%; box-sizing: border-box;" data-ratio="0.562963" data-w="1080" src="http://www.inlandchina.com/uploadfile/image/20200921/1600674905464355.jpg" title="1600674905464355.jpg" alt="4.jpg"/>
                </section>
            </section>
            <section style="text-align: center; margin-top: 10px; margin-bottom: 10px; position: static; box-sizing: border-box;" powered-by="xiumi.us">
                <section style="max-width: 100%; vertical-align: middle; display: inline-block; line-height: 0; box-sizing: border-box;">
                    <img class="raw-image" style="vertical-align: middle; max-width: 100%; box-sizing: border-box;" data-ratio="0.7493333" data-w="750" src="http://www.inlandchina.com/uploadfile/image/20200921/1600674912386468.jpg" title="1600674912386468.jpg" alt="5.jpg"/>
                </section>
            </section>
            <section style="margin: 0px 0%; position: static; box-sizing: border-box;" powered-by="xiumi.us">
                <section style="font-size: 14px; color: rgb(255, 0, 0); line-height: 1.8; letter-spacing: 1.8px; padding: 0px; box-sizing: border-box;">
                    <p style="text-indent: 2em; white-space: normal; margin-top: 0px; margin-bottom: 0px; padding: 0px; box-sizing: border-box;">
                        <span style="color: rgb(62, 62, 62); box-sizing: border-box;">深圳地铁16号线二期地铁线路全长9.46km，包含8座车站、9个区间和1个停车场，项目征拆涉及建筑物386栋，总建筑面积约34.51万平方米。该线路的建设将加强龙岗、坪山中心区的轨道服务，增加东部组团内部轨道覆盖，促进沿线城市化发展。英联估价顾问在积极推进轨道13号线全程咨询及谈判顾问工作高效开展的同时，又一专业技术团队深入地铁16号线二期工程征收项目的服务工作中，鼓足干劲，全面开启为深圳轨道交通发展助力的新征程。</span>
                    </p>
                </section>
            </section>
            <section style="text-align: center; margin-top: 10px; margin-bottom: 10px; position: static; box-sizing: border-box;" powered-by="xiumi.us">
                <section style="max-width: 100%; vertical-align: middle; display: inline-block; line-height: 0; box-sizing: border-box;">
                    <img class="raw-image" style="vertical-align: middle; max-width: 100%; box-sizing: border-box;" data-ratio="0.75" data-w="1080" src="http://www.inlandchina.com/uploadfile/image/20200921/1600674919309613.jpg" title="1600674919309613.jpg" alt="6.jpg"/>
                </section>
            </section>
        </section>
    </section>
    <section style="text-align: left; justify-content: flex-start; margin: 0px 0% 10px; transform: translate3d(10px, 0px, 0px); -webkit-transform: translate3d(10px, 0px, 0px); -moz-transform: translate3d(10px, 0px, 0px); -o-transform: translate3d(10px, 0px, 0px); font-size: 0px; position: static; box-sizing: border-box;" powered-by="xiumi.us">
        <section style="display: inline-block; width: 50%; vertical-align: top; height: auto; box-sizing: border-box;">
            <section style="margin: 0px 0%; position: static; box-sizing: border-box;" powered-by="xiumi.us">
                <section style="background-color: rgb(52, 191, 234); height: 1px; box-sizing: border-box;">
                    <svg viewbox="0 0 1 1" style="float:left;line-height:0;width:0;vertical-align:top;"></svg>
                </section>
            </section>
        </section>
    </section>
    <section style="text-align: center; justify-content: center; margin: 10px 0%; position: static; box-sizing: border-box;" powered-by="xiumi.us">
        <section style="display: inline-block; width: auto; vertical-align: top; min-width: 10%; max-width: 100%; height: auto; box-sizing: border-box;">
            <section style="margin: 0px 0% 4px; position: static; box-sizing: border-box;" powered-by="xiumi.us">
                <section style="display: inline-block; width: 100%; vertical-align: top; border-width: 1px; border-radius: 0px; border-style: solid; border-color: rgb(52, 191, 234); padding: 0px 16px; box-sizing: border-box;">
                    <section style="margin: 0px 0%; position: static; box-sizing: border-box;" powered-by="xiumi.us">
                        <section style="text-align: justify; color: rgb(52, 191, 234); line-height: 1.8; letter-spacing: 1.8px; padding: 0px; box-sizing: border-box;">
                            <p style="white-space: normal; margin-top: 0px; margin-bottom: 0px; padding: 0px; box-sizing: border-box;">
                                <strong style="box-sizing: border-box;">红色地铁再出发 热情铸就英联梦</strong>
                            </p>
                        </section>
                    </section>
                </section>
            </section>
            <section style="text-align: left; justify-content: flex-start; margin: 0px 0%; transform: translate3d(10px, 0px, 0px); -webkit-transform: translate3d(10px, 0px, 0px); -moz-transform: translate3d(10px, 0px, 0px); -o-transform: translate3d(10px, 0px, 0px); font-size: 0px; position: static; box-sizing: border-box;" powered-by="xiumi.us">
                <section style="display: inline-block; width: 50%; vertical-align: top; height: auto; box-sizing: border-box;">
                    <section style="margin: 0px 0%; position: static; box-sizing: border-box;" powered-by="xiumi.us">
                        <section style="background-color: rgb(52, 191, 234); height: 1px; box-sizing: border-box;">
                            <svg viewbox="0 0 1 1" style="float:left;line-height:0;width:0;vertical-align:top;"></svg>
                        </section>
                    </section>
                </section>
            </section>
        </section>
    </section>
    <section style="margin: 10px 0% 4px; position: static; box-sizing: border-box;" powered-by="xiumi.us">
        <section style="display: inline-block; width: 100%; vertical-align: top; border-width: 1px; border-radius: 0px; border-style: solid; border-color: rgb(52, 191, 234); padding: 10px 16px; box-sizing: border-box;">
            <section style="text-align: right; justify-content: flex-end; transform: translate3d(-10px, 0px, 0px); -webkit-transform: translate3d(-10px, 0px, 0px); -moz-transform: translate3d(-10px, 0px, 0px); -o-transform: translate3d(-10px, 0px, 0px); margin: -16px 0% 10px; font-size: 0px; position: static; box-sizing: border-box;" powered-by="xiumi.us">
                <section class="group-empty" style="display: inline-block; width: 11px; height: 11px; vertical-align: top; overflow: hidden; border-style: solid; border-width: 1px; border-radius: 0px; border-color: rgb(52, 191, 234); background-image: linear-gradient(to right, rgba(255, 255, 255, 0) 50%, rgb(255, 255, 255) 50%); box-sizing: border-box;">
                    <svg viewbox="0 0 1 1" style="float:left;line-height:0;width:0;vertical-align:top;"></svg>
                </section>
            </section>
            <section style="margin: 0px 0%; position: static; box-sizing: border-box;" powered-by="xiumi.us">
                <section style="font-size: 14px; color: rgb(62, 62, 62); line-height: 1.8; letter-spacing: 1.8px; padding: 0px; box-sizing: border-box;">
                    <p style="text-indent: 2em; white-space: normal; margin-top: 0px; margin-bottom: 0px; padding: 0px; box-sizing: border-box;">
                        <strong style="box-sizing: border-box;">夯基垒台，立柱架梁</strong>。为更好地推进项目签约工作，英联估价顾问协助园山街道，加强统筹协调，积极为项目中相关工作的开展谋篇布局，勇于担当，主动作为，以最大合力攻坚克难，全力促进地铁16号线二期工程签约顺利开展！
                    </p>
                </section>
            </section>
            <section style="text-align: center; margin: 10px 0% 5px; position: static; box-sizing: border-box;" powered-by="xiumi.us">
                <section style="max-width: 100%; vertical-align: middle; display: inline-block; line-height: 0; box-sizing: border-box;">
                    <img class="raw-image" style="vertical-align: middle; max-width: 100%; box-sizing: border-box;" data-ratio="0.75" data-w="1080" src="http://www.inlandchina.com/uploadfile/image/20200921/1600674926100870.jpg" title="1600674926100870.jpg" alt="7.jpg"/>
                </section>
            </section>
            <section style="margin: 0px 0% 10px; position: static; box-sizing: border-box;" powered-by="xiumi.us">
                <section style="font-size: 14px; box-sizing: border-box;">
                    <p style="text-align: center; white-space: normal; margin-top: 0px; margin-bottom: 0px; padding: 0px; box-sizing: border-box;">
                        <strong style="box-sizing: border-box;">街道、土整中心领导与英联宋总商讨评估事宜</strong>
                    </p>
                </section>
            </section>
            <section style="text-align: center; margin: 10px 0% 5px; position: static; box-sizing: border-box;" powered-by="xiumi.us">
                <section style="max-width: 100%; vertical-align: middle; display: inline-block; line-height: 0; border-width: 0px; box-sizing: border-box;">
                    <img class="raw-image" style="vertical-align: middle; max-width: 100%; box-sizing: border-box;" data-ratio="0.75" data-w="1080" src="http://www.inlandchina.com/uploadfile/image/20200921/1600674934104614.jpg" title="1600674934104614.jpg" alt="8.jpg"/>
                </section>
            </section>
            <section style="text-align: center; font-size: 14px; box-sizing: border-box;" powered-by="xiumi.us">
                <p style="margin-top: 0px; margin-bottom: 0px; padding: 0px; box-sizing: border-box;">
                    <strong style="box-sizing: border-box;">为签约做攻坚准备</strong>
                </p>
            </section>
            <section style="text-align: center; margin: 10px 0% 5px; position: static; box-sizing: border-box;" powered-by="xiumi.us">
                <section style="max-width: 100%; vertical-align: middle; display: inline-block; line-height: 0; box-sizing: border-box;">
                    <img class="raw-image" style="vertical-align: middle; max-width: 100%; box-sizing: border-box;" data-ratio="0.7506667" data-w="750" src="http://www.inlandchina.com/uploadfile/image/20200921/1600674943350321.png" title="1600674943350321.png" alt="10.png"/>
                </section>
            </section>
            <section style="margin: 0px 0% 10px; position: static; box-sizing: border-box;" powered-by="xiumi.us">
                <section style="text-align: center; font-size: 14px; box-sizing: border-box;">
                    <p style="margin-top: 0px; margin-bottom: 0px; padding: 0px; box-sizing: border-box;">
                        <strong style="box-sizing: border-box;">与业主协商签约事宜</strong>
                    </p>
                </section>
            </section>
            <section style="margin: 0px 0%; position: static; box-sizing: border-box;" powered-by="xiumi.us">
                <section style="font-size: 14px; color: rgb(62, 62, 62); line-height: 1.8; letter-spacing: 1.8px; padding: 0px; box-sizing: border-box;">
                    <p style="text-indent: 2em; white-space: normal; margin-top: 0px; margin-bottom: 0px; padding: 0px; box-sizing: border-box;">
                        <strong style="box-sizing: border-box;">一往无前，日夜兼程</strong>。“七月空台”的酷热里、来不及躲雨的疾风中、万籁俱寂的月色下……到处都有英联评估人奋斗的身影。英联领导人深入一线，鼓舞士气；项目负责人运筹帷幄，以身作则；各位成员满腔热忱，无畏荆棘满途，他们坚信，挥洒的汗水终将浇灌出丰美的果实。
                    </p>
                </section>
            </section>
            <section style="text-align: center; margin: 10px 0% 5px; position: static; box-sizing: border-box;" powered-by="xiumi.us">
                <section style="max-width: 100%; vertical-align: middle; display: inline-block; line-height: 0; box-sizing: border-box;">
                    <img class="raw-image" style="vertical-align: middle; max-width: 100%; box-sizing: border-box;" data-ratio="0.562963" data-w="1080" src="http://www.inlandchina.com/uploadfile/image/20200921/1600674949952766.jpg" title="1600674949952766.jpg" alt="11.jpg"/>
                </section>
            </section>
            <section style="margin: 0px 0%; position: static; box-sizing: border-box;" powered-by="xiumi.us">
                <section style="font-size: 14px; color: rgb(62, 62, 62); line-height: 1.8; letter-spacing: 1.8px; padding: 0px; box-sizing: border-box;">
                    <p style="text-align: center; white-space: normal; margin-top: 0px; margin-bottom: 0px; padding: 0px; box-sizing: border-box;">
                        <strong style="box-sizing: border-box;">宋总给项目人员开展培训</strong>
                    </p>
                </section>
            </section>
            <section style="margin: 10px 0% 5px; position: static; box-sizing: border-box;" powered-by="xiumi.us">
                <section style="display: inline-block; vertical-align: middle; width: 50%; padding: 0px 5px 0px 0px; box-sizing: border-box;">
                    <section style="text-align: center; margin: 0px 0%; position: static; box-sizing: border-box;" powered-by="xiumi.us">
                        <section style="max-width: 100%; vertical-align: middle; display: flex; line-height: 0; box-sizing: border-box;">
                            <img class="raw-image" style="vertical-align: middle; max-width: 100%; box-sizing: border-box;" data-ratio="0.75" data-w="1080" src="http://www.inlandchina.com/uploadfile/image/20200921/1600674956724440.jpg" title="1600674956724440.jpg" alt="12.jpg"/>
                            <img class="raw-image" style="vertical-align: middle; max-width: 100%; box-sizing: border-box;" data-ratio="0.75" data-w="1080" src="http://www.inlandchina.com/uploadfile/image/20200921/1600674962127318.jpg" title="1600674962127318.jpg" alt="13.jpg"/>
                        </section>
                    </section>
                </section>
                
            </section>
            <section style="margin: 0px 0%; position: static; box-sizing: border-box;" powered-by="xiumi.us">
                <section style="font-size: 14px; color: rgb(62, 62, 62); line-height: 1.8; letter-spacing: 1.8px; padding: 0px; box-sizing: border-box;">
                    <p style="text-align: center; white-space: normal; margin-top: 0px; margin-bottom: 0px; padding: 0px; box-sizing: border-box;">
                        <strong style="box-sizing: border-box;">英联团队深夜探讨各项技术问题</strong>
                    </p>
                    <p style="text-align: center; white-space: normal; margin-top: 0px; margin-bottom: 0px; padding: 0px; box-sizing: border-box;">
                        <strong style="box-sizing: border-box;">出具各类项目用表</strong>
                    </p>
                </section>
            </section>
            <section style="text-align: center; margin: 10px 0% 5px; position: static; box-sizing: border-box;" powered-by="xiumi.us">
                <section style="max-width: 100%; vertical-align: middle; display: inline-block; line-height: 0; box-sizing: border-box;">
                    <img class="raw-image" style="vertical-align: middle; max-width: 100%; box-sizing: border-box;" data-ratio="0.75" data-w="1080" src="http://www.inlandchina.com/uploadfile/image/20200921/1600674970118737.jpg" title="1600674970118737.jpg" alt="14.jpg"/>
                </section>
            </section>
            <section style="margin: 0px 0%; position: static; box-sizing: border-box;" powered-by="xiumi.us">
                <section style="font-size: 14px; color: rgb(62, 62, 62); line-height: 1.8; letter-spacing: 1.8px; padding: 0px; box-sizing: border-box;">
                    <p style="text-align: center; white-space: normal; margin-top: 0px; margin-bottom: 0px; padding: 0px; box-sizing: border-box;">
                        <strong style="box-sizing: border-box;">烈日下各处都是工作场</strong>
                    </p>
                </section>
            </section>
            <section style="text-align: center; margin: 10px 0% 5px; position: static; box-sizing: border-box;" powered-by="xiumi.us">
                <section style="max-width: 100%; vertical-align: middle; display: inline-block; line-height: 0; box-sizing: border-box;">
                    <img class="raw-image" style="float:left;line-height:0;width:0;vertical-align:top;" data-ratio="1.0962963" data-w="1080" src="http://www.inlandchina.com/uploadfile/image/20200921/1600675000594139.jpg" box-sizing:="" text-align:="" section="" powered-by="xiumi.us" p="" br="" svg="" viewbox="0 0 1 1" img="" title="1600674980102970.jpg" alt="15.jpg" strong="" span=""/>
                </section>
            </section>
            <section style="margin: 0px 0%; position: static; box-sizing: border-box;" powered-by="xiumi.us">
                <section style="font-size: 14px; color: rgb(62, 62, 62); line-height: 1.8; letter-spacing: 1.8px; padding: 0px; box-sizing: border-box;">
                    <p style="text-align: center; white-space: normal; margin-top: 0px; margin-bottom: 0px; padding: 0px; box-sizing: border-box;">
                        <strong style="box-sizing: border-box;">商讨装修评估事项</strong>
                    </p>
                </section>
            </section>
            <section style="text-align: center; margin: 10px 0% 5px; position: static; box-sizing: border-box;" powered-by="xiumi.us">
                <section style="max-width: 100%; vertical-align: middle; display: inline-block; line-height: 0; box-sizing: border-box;">
                    <img class="raw-image" style="vertical-align: middle; max-width: 100%; box-sizing: border-box;" data-ratio="1.3333333" data-w="1080" src="http://www.inlandchina.com/uploadfile/image/20200921/1600674991607221.jpg" title="1600674991607221.jpg" alt="16.jpg"/>
                </section>
            </section>
            <section style="margin: 0px 0%; position: static; box-sizing: border-box;" powered-by="xiumi.us">
                <section style="font-size: 14px; color: rgb(62, 62, 62); line-height: 1.8; letter-spacing: 1.8px; padding: 0px; box-sizing: border-box;">
                    <p style="text-align: center; white-space: normal; margin-top: 0px; margin-bottom: 0px; padding: 0px; box-sizing: border-box;">
                        <strong style="box-sizing: border-box;">&nbsp;入户开展查勘工作</strong>
                    </p>
                </section>
            </section>
            <section style="text-align: center; margin: 10px 0% 5px; position: static; box-sizing: border-box;" powered-by="xiumi.us">
                <section style="max-width: 100%; vertical-align: middle; display: inline-block; line-height: 0; box-sizing: border-box;">
                    <img class="raw-image" style="vertical-align: middle; max-width: 100%; box-sizing: border-box;" data-ratio="1.0962963" data-w="1080" src="http://www.inlandchina.com/uploadfile/image/20200921/1600675000594139.jpg" title="1600675000594139.jpg" alt="17.jpg"/>
                </section>
            </section>
            <section style="margin: 0px 0% 10px; position: static; box-sizing: border-box;" powered-by="xiumi.us">
                <section style="font-size: 14px; color: rgb(62, 62, 62); line-height: 1.8; letter-spacing: 1.8px; padding: 0px; box-sizing: border-box;">
                    <p style="text-align: center; white-space: normal; margin-top: 0px; margin-bottom: 0px; padding: 0px; box-sizing: border-box;">
                        <strong style="box-sizing: border-box;">红船精神引领下，朝气蓬勃的英联人</strong>
                    </p>
                </section>
            </section>
        </section>
    </section>
    <section style="text-align: left; justify-content: flex-start; margin: 0px 0% 10px; transform: translate3d(10px, 0px, 0px); -webkit-transform: translate3d(10px, 0px, 0px); -moz-transform: translate3d(10px, 0px, 0px); -o-transform: translate3d(10px, 0px, 0px); font-size: 0px; position: static; box-sizing: border-box;" powered-by="xiumi.us">
        <section style="display: inline-block; width: 50%; vertical-align: top; height: auto; box-sizing: border-box;">
            <section style="margin: 0px 0%; position: static; box-sizing: border-box;" powered-by="xiumi.us">
                <section style="background-color: rgb(52, 191, 234); height: 1px; box-sizing: border-box;">
                    <svg viewbox="0 0 1 1" style="float:left;line-height:0;width:0;vertical-align:top;"></svg>
                </section>
            </section>
        </section>
    </section>
</section>
<p>
    <br/>
</p>`
    }
  },

  created() {
    this.NewsId = this.$route.params.id



    // Why need to make a copy of this.$route here?
    // Because if you enter this page and quickly switch tag, may be in the execution of the setTagsViewTitle function, this.$route is no longer pointing to the current page
    // https://github.com/PanJiaChen/vue-element-admin/issues/1221
  },
}
</script>

<style>

</style>