<template>
  <div class="dashboard-editor-container">
    <div style="background-color: #fff">
      <p class="ovHead"
         style="">新闻动态</p>

      <!-- 文章列表 -->
      <ul type="none"
          style="background-color: #fff; padding: 10px 15px">
        <li v-for="(i, key) of NewsData"
            :key="key"
            style=""
            class="NewsList">
          <!-- <el-row :gutter="20"> -->
          <!-- <el-col  :sm="8"  :xs="24" :lg="7" :offset="0"> -->
          <div>
            <img class="newsImg"
                 :src="i.image"
                 alt="" />
          </div>

          <!-- </el-col> -->
          <!-- <el-col :sm="16" :xs="24" :lg="17" :offset="0"> -->
          <div class="d2"
               style="">
            <p class="P_title">{{ i.title }}</p>
            <p class="p2">发布时间：{{ i.date }}</p>
            <p class="p3">{{ i.message }}</p>
            <router-link :to='"/prodyn/NewsDetails/"+i.NewsId'>
              <el-button class="btn"
                         type="danger"
                         size="default">查看详情</el-button>
            </router-link>
          </div>

          <!-- </el-col> -->
          <!-- </el-row> -->
        </li>
      </ul>
      <!-- 文章列表end -->
      <!-- 分页栏 -->
      <div style="width: 100%; padding: 5px 10px">
        <div class="pagRight">
          <el-pagination @size-change="handleSizeChange"
                         @current-change="handleCurrentChange"
                         :current-page="currentPage4"
                         :page-sizes="[5, 10, 20, 30]"
                         :page-size="5"
                         layout="total, sizes, prev, pager, next"
                         :total="NewsData.length"
                         background>
          </el-pagination>
        </div>
      </div>

      <!-- 分页栏end -->
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      NewsData: [
        {
          NewsId: "1",
          image:
            "http://www.inlandchina.com/uploadfile/2020/0921/20200921040225706.jpg",
          title: "英联项目新动态||轨道建设土地整备 英联一直在路上",
          date: "2020-08-02",
          message:
            "点击蓝字 关注英联英联一直在土地整备的路上，除完成过南方科技大学、鹿丹村、光明中山大学、光明科学城等市重大土地整备项目外，在深圳轨",
        },
        {
          NewsId: "2",
          image:
            "http://www.inlandchina.com/uploadfile/2020/0921/20200921040225706.jpg",
          title: "英联项目新动态||轨道建设土地整备 英联一直在路上",
          date: "2020-08-02",
          message:
            "点击蓝字 关注英联英联一直在土地整备的路上，除完成过南方科技大学、鹿丹村、光明中山大学、光明科学城等市重大土地整备项目外，在深圳轨",
        },
        {
          NewsId: "300",
          image:
            "http://www.inlandchina.com/uploadfile/2020/0921/20200921040225706.jpg",
          title: "英联项目新动态||轨道建设土地整备 英联一直在路上",
          date: "2020-08-02",
          message:
            "点击蓝字 关注英联英联一直在土地整备的路上，除完成过南方科技大学、鹿丹村、光明中山大学、光明科学城等市重大土地整备项目外，在深圳轨",
        },
        {
          NewsId: "4000",
          image:
            "http://www.inlandchina.com/uploadfile/2020/0921/20200921040225706.jpg",
          title: "英联项目新动态||轨道建设土地整备 英联一直在路上",
          date: "2020-08-02",
          message:
            "点击蓝字 关注英联英联一直在土地整备的路上，除完成过南方科技大学、鹿丹村、光明中山大学、光明科学城等市重大土地整备项目外，在深圳轨",
        },
        {
          NewsId: "50000",
          image:
            "http://www.inlandchina.com/uploadfile/2020/0921/20200921040225706.jpg",
          title: "英联项目新动态||轨道建设土地整备 英联一直在路上",
          date: "2020-08-02",
          message:
            "点击蓝字 关注英联英联一直在土地整备的路上，除完成过南方科技大学、鹿丹村、光明中山大学、光明科学城等市重大土地整备项目外，在深圳轨",
        },
        {
          NewsId: "60",
          image:
            "http://www.inlandchina.com/uploadfile/2020/0921/20200921040225706.jpg",
          title: "英联项目新动态||轨道建设土地整备 英联一直在路上",
          date: "2020-08-02",
          message:
            "点击蓝字 关注英联英联一直在土地整备的路上，除完成过南方科技大学、鹿丹村、光明中山大学、光明科学城等市重大土地整备项目外，在深圳轨",
        },
      ],
    };
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    openNewsArtivle() {
      console.log();
    },
    // openNewsArticle() {
    //     this.$alert('<strong>Sapiente nobis et cupiditate, totam inventore quis rerum. Debitis maiores praesentium possimus! Ab laudantium fuga quaerat harum nisi animi, dolores soluta numquam nam quos excepturi quas explicabo ea, distinctio deserunt!Sapiente nobis et cupiditate, totam inventore quis rerum. Debitis maiores praesentium possimus! Ab laudantium fuga quaerat harum nisi animi, dolores soluta numquam nam quos excepturi quas explicabo ea, distinctio deserunt!Sapiente nobis et cupiditate, totam inventore quis rerum. Debitis maiores praesentium possimus! Ab laudantium fuga quaerat harum nisi animi, dolores soluta numquam nam quos excepturi quas explicabo ea, distinctio deserunt!Sapiente nobis et cupiditate, totam inventore quis rerum. Debitis maiores praesentium possimus! Ab laudantium fuga quaerat harum nisi animi, dolores soluta numquam nam quos excepturi quas explicabo ea, distinctio deserunt!</strong>', 'HTML 片段', {
    //       dangerouslyUseHTMLString: true
    //     });
    //   }
  },
};
</script>
<style scoped>
ul,
li,
p {
  margin: 0;
  padding: 0;
}

.ovHead {
  margin: 0;
  padding: 0;
  font-size: 22px;
  padding-left: 15px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid #c8c8c8;
}
.NewsList {
  padding: 15px 0px;
  border-bottom: 1px dashed #c8c8c8;
  display: flex;
}
.P_title {
  /* width: 100%; */
  font-size: 18px;
  /* white-space: nowrap; */
  /* text-overflow: ellipsis; */
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
}

.p2 {
  color: #999999;
  font-size: 14px;
}
.p3 {
  color: #666666;
  font-size: 14px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  max-width: 690px;
}
.btn {
  padding: 12px 14px;
  font-size: 16px;
}
.d2 {
  padding-left: 20px;
}
.pagRight {
  /* background-color: #0ff; */
  display: flex;
  flex-direction: row-reverse;
}
@media screen and (min-width: 992px) {
  .newsImg {
    width: 390px;
  }
  .P_title,
  .p2 {
    padding-bottom: 10px;
  }
  .btn {
    margin-top: 40px;
  }
}
@media screen and (min-width: 768px) and (max-width: 991px) {
  .newsImg {
    width: 278px;
  }
  .P_title {
    margin-bottom: 10px;
  }
  .btn {
    margin-top: 15px;
  }
}
@media screen and (max-width: 767px) {
  .newsImg {
    width: 100%;
  }
  .NewsList {
    padding: 15px 0px;
    border-bottom: 1px solid #c8c8c8;
    display: block;
  }

  .d2 {
    padding-left: 0px;
  }
  .p2 {
    margin: 5px 0px;
  }
  .p3 {
    margin-bottom: 10px;
  }
}
</style>