<template>
 <div class="exportExcel">
  <div class="excel-header">
   <!--导出文件名称-->
   <div class="filename">
    <label class="radio-label" style="padding-left:0;">文件名称:</label>
    <el-input
     v-model="filename"
     placeholder="请输入导出文件名"
     style="width:340px;"
    prefix-icon="el-icon-document" />
   </div>
   <!--设置表格导出的宽度是否自动-->
   <div class="autoWidth">
    <label class="radio-label">自动宽度:</label>
    <el-radio-group v-model="autoWidth">
     <el-radio :label="true" border>是</el-radio>
     <el-radio :label="false" border>否</el-radio>
    </el-radio-group>
   </div>
   <!--导出文件后缀类型-->
   <div class="bookType">
    <label class="radio-label">导出文件类型:</label>
    <el-select v-model="bookType" style="width:120px;">
     <el-option v-for="item in options" :key="item" :label="item" :value="item"/>
    </el-select>
   </div>
   <!--导出文件-->
   <div class="download">
    <el-button
     :loading="downloadLoading"
     type="primary"
     icon="document"
    @click="handleDownload">export Excel</el-button>
   </div>
  </div>

  <el-table
  style="width: 80%; margin: 50px auto; margin-top: 20px"
   v-loading="listLoading"
   :data="list"
   element-loading-text="拼命加载中"
   border
   fit
   highlight-current-row
   height="390px"
  >
   <!-- <el-table-column align="center" label="序号" width="95">
    <template slot-scope="scope">{{ scope.$index }}</template>
   </el-table-column> -->
   <el-table-column label="登录名" width="230">
    <template slot-scope="scope">{{ scope.row.loginName }}</template>
   </el-table-column>
   <el-table-column label="名称" align="center">
    <template slot-scope="scope">{{ scope.row.userName }}</template>
   </el-table-column>
   <el-table-column label="所属机构" width="110" align="center">
    <template slot-scope="scope">
     <el-tag>{{ scope.row.group }}</el-tag>
    </template>
   </el-table-column>
   <el-table-column label="电话" width="115" align="center">
    <template slot-scope="scope">{{ scope.row.tel }}</template>
   </el-table-column>
   <el-table-column align="center" label="角色" width="220">
    <template slot-scope="scope">
     <!-- <i class="el-icon-time"/> -->
     <span>{{ scope.row.role }}</span>
    </template>
   </el-table-column>
  </el-table>
 </div>
</template>
<script>
export default {
 
 name: "exportExcelDialog",
 data() {
  return {
   // 列表内容
   list: null,
   // loding窗口状态
   listLoading: true,
   // 下载loding窗口状态
   downloadLoading: false,
   // 导出文件名称
   filename: "",
   // 导出表格宽度是否auto
   autoWidth: true,
   // 导出文件格式
   bookType: "xlsx",
   // 默认导出文件后缀类型
   options: ["xlsx", "csv", "txt"]
  };
 },
 methods: {
  // 导出Excel表格
  handleDownload() {
   this.downloadLoading = true;
   // 懒加载该用法
   import("@/vendor/Export2Excel").then(excel => {
    // 设置导出表格的头部
    const tHeader = ["序号", "订单号", "菜品", "收银员", "金额", "时间"];
    // 设置要导出的属性
    const filterVal = [
     "id",
     "title",
     "foods",
     "author",
     "pageviews",
     "display_time"
    ];
    // 获取当前展示的表格数据
    const list = this.list;
    // 将要导出的数据进行一个过滤
    const data = this.formatJson(filterVal, list);
    // 调用我们封装好的方法进行导出Excel
    excel.export_json_to_excel({
     // 导出的头部
     header: tHeader,
     // 导出的内容
     data,
     // 导出的文件名称
     filename: this.filename,
     // 导出的表格宽度是否自动
     autoWidth: this.autoWidth,
     // 导出文件的后缀类型
     bookType: this.bookType
    });
    this.downloadLoading = false;
   });
  },
  // 对要导出的内容进行过滤
  formatJson(filterVal, jsonData) {
   return jsonData.map(v =>
    filterVal.map(j => {
     if (j === "timestamp") {
      return this.parseTime(v[j]);
     } else {
      return v[j];
     }
    })
   );
  },
  // 过滤时间
  parseTime(time, cFormat) {
   if (arguments.length === 0) {
    return null;
   }
   const format = cFormat || "{y}-{m}-{d} {h}:{i}:{s}";
   let date;
   if (typeof time === "object") {
    date = time;
   } else {
    if (typeof time === "string" && /^[0-9]+$/.test(time)) {
     time = parseInt(time);
    }
    if (typeof time === "number" && time.toString().length === 10) {
     time = time * 1000;
    }
    date = new Date(time);
   }
   const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
   };
   const timeStr = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    let value = formatObj[key];
    // Note: getDay() returns 0 on Sunday
    if (key === "a") {
     return ["日", "一", "二", "三", "四", "五", "六"][value];
    }
    if (result.length > 0 && value < 10) {
     value = "0" + value;
    }
    return value || 0;
   });
   return timeStr;
  }
 },
 mounted() {
  // 模拟获取数据
  setTimeout(() => {
   this.tableData = [
        {
          loginName: "aoxs01",
          userName: "刘钦求",
          group: "英联不动产",
          tel: "13035707258",
          role: "web",
        },
        {
          loginName: "aoxs02",
          userName: "刘钦求",
          group: "英联不动产",
          tel: "13035707258",
          role: "web",
        },
        {
          loginName: "aoxs03",
          userName: "刘钦求",
          group: "英联不动产",
          tel: "13035707258",
          role: "web",
        },
        {
          loginName: "aoxs04",
          userName: "刘钦求",
          group: "英联不动产",
          tel: "13035707258",
          role: "web",
        },
        {
          loginName: "aoxs05",
          userName: "刘钦求",
          group: "英联不动产",
          tel: "13035707258",
          role: "web",
        },
        {
          loginName: "aoxs06",
          userName: "刘钦求",
          group: "英联不动产",
          tel: "13035707258",
          role: "web",
        },
      ],
   this.listLoading = false;
  }, 2000);
 },
 filters: {
  // 过滤时间
  parseTime(time, cFormat) {
   if (arguments.length === 0) {
    return null;
   }
   const format = cFormat || "{y}-{m}-{d} {h}:{i}:{s}";
   let date;
   if (typeof time === "object") {
    date = time;
   } else {
    if (typeof time === "string" && /^[0-9]+$/.test(time)) {
     time = parseInt(time);
    }
    if (typeof time === "number" && time.toString().length === 10) {
     time = time * 1000;
    }
    date = new Date(time);
   }
   const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
   };
   const timeStr = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    let value = formatObj[key];
    // Note: getDay() returns 0 on Sunday
    if (key === "a") {
     return ["日", "一", "二", "三", "四", "五", "六"][value];
    }
    if (result.length > 0 && value < 10) {
     value = "0" + value;
    }
    return value || 0;
   });
   return timeStr;
  }
 }
}


</script>

 name: "exportExcelDialog",
 data() {
  return {
   // 列表内容
   list: null,
   // loding窗口状态
   listLoading: true,
   // 下载loding窗口状态
   downloadLoading: false,
   // 导出文件名称
   filename: "",
   // 导出表格宽度是否auto
   autoWidth: true,
   // 导出文件格式
   bookType: "xlsx",
   // 默认导出文件后缀类型
   options: ["xlsx", "csv", "txt"]
  };
 },
 methods: {
  // 导出Excel表格
  handleDownload() {
   this.downloadLoading = true;
   // 懒加载该用法
   import("@/vendor/Export2Excel").then(excel => {
    // 设置导出表格的头部
    const tHeader = ["序号", "订单号", "菜品", "收银员", "金额", "时间"];
    // 设置要导出的属性
    const filterVal = [
     "id",
     "title",
     "foods",
     "author",
     "pageviews",
     "display_time"
    ];
    // 获取当前展示的表格数据
    const list = this.list;
    // 将要导出的数据进行一个过滤
    const data = this.formatJson(filterVal, list);
    // 调用我们封装好的方法进行导出Excel
    excel.export_json_to_excel({
     // 导出的头部
     header: tHeader,
     // 导出的内容
     data,
     // 导出的文件名称
     filename: this.filename,
     // 导出的表格宽度是否自动
     autoWidth: this.autoWidth,
     // 导出文件的后缀类型
     bookType: this.bookType
    });
    this.downloadLoading = false;
   });
  },
  // 对要导出的内容进行过滤
  formatJson(filterVal, jsonData) {
   return jsonData.map(v =>
    filterVal.map(j => {
     if (j === "timestamp") {
      return this.parseTime(v[j]);
     } else {
      return v[j];
     }
    })
   );
  },
  // 过滤时间
  parseTime(time, cFormat) {
   if (arguments.length === 0) {
    return null;
   }
   const format = cFormat || "{y}-{m}-{d} {h}:{i}:{s}";
   let date;
   if (typeof time === "object") {
    date = time;
   } else {
    if (typeof time === "string" && /^[0-9]+$/.test(time)) {
     time = parseInt(time);
    }
    if (typeof time === "number" && time.toString().length === 10) {
     time = time * 1000;
    }
    date = new Date(time);
   }
   const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
   };
   const timeStr = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    let value = formatObj[key];
    // Note: getDay() returns 0 on Sunday
    if (key === "a") {
     return ["日", "一", "二", "三", "四", "五", "六"][value];
    }
    if (result.length > 0 && value < 10) {
     value = "0" + value;
    }
    return value || 0;
   });
   return timeStr;
  }
 },
 mounted() {
  // 模拟获取数据
  setTimeout(() => {
   this.list = [
    {
     timestamp: 1432179778664,
     author: "Charles",
     comment_disabled: true,
     content_short: "mock data",
     display_time: "1994-05-25 23:37:25",
     foods: "鸡翅、萝卜、牛肉、红烧大闸蟹、红烧鸡翅",
     id: 1,
     image_uri:
      "https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3",
     importance: 3,
     pageviews: 2864,
     platforms: ["a-platform"],
     reviewer: "Sandra",
     status: "published",
     title: "O20190407135010000000001",
     type: "CN"
    },
    {
     timestamp: 1432179778664,
     author: "Charles",
     comment_disabled: true,
     content_short: "mock data",
     display_time: "1994-05-25 23:37:25",
     foods: "鸡翅、萝卜、牛肉、红烧大闸蟹、红烧鸡翅",
     id: 1,
     image_uri:
      "https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3",
     importance: 3,
     pageviews: 2864,
     platforms: ["a-platform"],
     reviewer: "Sandra",
     status: "published",
     title: "O20190407135010000000001",
     type: "CN"
    },
    {
     timestamp: 1432179778664,
     author: "Charles",
     comment_disabled: true,
     content_short: "mock data",
     display_time: "1994-05-25 23:37:25",
     foods: "鸡翅、萝卜、牛肉、红烧大闸蟹、红烧鸡翅",
     id: 1,
     image_uri:
      "https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3",
     importance: 3,
     pageviews: 2864,
     platforms: ["a-platform"],
     reviewer: "Sandra",
     status: "published",
     title: "O20190407135010000000001",
     type: "CN"
    },
    {
     timestamp: 1432179778664,
     author: "Charles",
     comment_disabled: true,
     content_short: "mock data",
     display_time: "1994-05-25 23:37:25",
     foods: "鸡翅、萝卜、牛肉、红烧大闸蟹、红烧鸡翅",
     id: 1,
     image_uri:
      "https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3",
     importance: 3,
     pageviews: 2864,
     platforms: ["a-platform"],
     reviewer: "Sandra",
     status: "published",
     title: "O20190407135010000000001",
     type: "CN"
    },
    {
     timestamp: 1432179778664,
     author: "Charles",
     comment_disabled: true,
     content_short: "mock data",
     display_time: "1994-05-25 23:37:25",
     foods: "鸡翅、萝卜、牛肉、红烧大闸蟹、红烧鸡翅",
     id: 1,
     image_uri:
      "https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3",
     importance: 3,
     pageviews: 2864,
     platforms: ["a-platform"],
     reviewer: "Sandra",
     status: "published",
     title: "O20190407135010000000001",
     type: "CN"
    },
    {
     timestamp: 1432179778664,
     author: "Charles",
     comment_disabled: true,
     content_short: "mock data",
     display_time: "1994-05-25 23:37:25",
     foods: "鸡翅、萝卜、牛肉、红烧大闸蟹、红烧鸡翅",
     id: 1,
     image_uri:
      "https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3",
     importance: 3,
     pageviews: 2864,
     platforms: ["a-platform"],
     reviewer: "Sandra",
     status: "published",
     title: "O20190407135010000000001",
     type: "CN"
    },
    {
     timestamp: 1432179778664,
     author: "Charles",
     comment_disabled: true,
     content_short: "mock data",
     display_time: "1994-05-25 23:37:25",
     foods: "鸡翅、萝卜、牛肉、红烧大闸蟹、红烧鸡翅",
     id: 1,
     image_uri:
      "https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3",
     importance: 3,
     pageviews: 2864,
     platforms: ["a-platform"],
     reviewer: "Sandra",
     status: "published",
     title: "O20190407135010000000001",
     type: "CN"
    },
    {
     timestamp: 1432179778664,
     author: "Charles",
     comment_disabled: true,
     content_short: "mock data",
     display_time: "1994-05-25 23:37:25",
     foods: "鸡翅、萝卜、牛肉、红烧大闸蟹、红烧鸡翅",
     id: 1,
     image_uri:
      "https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3",
     importance: 3,
     pageviews: 2864,
     platforms: ["a-platform"],
     reviewer: "Sandra",
     status: "published",
     title: "O20190407135010000000001",
     type: "CN"
    },
    {
     timestamp: 1432179778664,
     author: "Charles",
     comment_disabled: true,
     content_short: "mock data",
     display_time: "1994-05-25 23:37:25",
     foods: "鸡翅、萝卜、牛肉、红烧大闸蟹、红烧鸡翅",
     id: 1,
     image_uri:
      "https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3",
     importance: 3,
     pageviews: 2864,
     platforms: ["a-platform"],
     reviewer: "Sandra",
     status: "published",
     title: "O20190407135010000000001",
     type: "CN"
    }
   ];
   this.listLoading = false;
  }, 2000);
 },
 filters: {
  // 过滤时间
  parseTime(time, cFormat) {
   if (arguments.length === 0) {
    return null;
   }
   const format = cFormat || "{y}-{m}-{d} {h}:{i}:{s}";
   let date;
   if (typeof time === "object") {
    date = time;
   } else {
    if (typeof time === "string" && /^[0-9]+$/.test(time)) {
     time = parseInt(time);
    }
    if (typeof time === "number" && time.toString().length === 10) {
     time = time * 1000;
    }
    date = new Date(time);
   }
   const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
   };
   const timeStr = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    let value = formatObj[key];
    // Note: getDay() returns 0 on Sunday
    if (key === "a") {
     return ["日", "一", "二", "三", "四", "五", "六"][value];
    }
    if (result.length > 0 && value < 10) {
     value = "0" + value;
    }
    return value || 0;
   });
   return timeStr;
  }
 }
}

