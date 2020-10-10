<template>
  <div>

 <transition name="sidebarLogoFade">
<div v-if="collapse" key="collapse"></div>
    <div  v-else key="collapse" class="user_info">
      <img
        class="head_img"
        :src="image"
        alt=""
      />
      <h3>欢迎使用</h3>
      <p><i class="el-icon-success" style="color: #22af47" />{{username}}</p>
    </div>

</transition>

  </div>
</template>

<script>
export default {
  name: 'SidebarLogo',
  props: {
    collapse: {
      type: Boolean,
      required: true
    }
  },
  data(){
    return{
      image: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aoxs/6345f080-0aad-11eb-b680-7980c8a877b8.jpg',
      username: 'Admin'
    }
  }
};
</script>

<style scoped>
.user_info {
  /* background-color: #ff0; */
  width: 100%;
  /* height: 200px; */
  font-size: 16px;
}
.head_img {
  width: 80px;
  height: 80px;
  display: block;
  margin: 20px auto;
  border-radius: 50%;
  border: 2px solid #fff;
}
p,
h3 {
  font-weight: 400;
  color: #fff;
  margin: 0;
  padding: 0;
  text-align: center;
}
p{
  font-size: 14px;
  margin-top: 5px;
  margin-bottom: 20px;
}

</style>