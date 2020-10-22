<template>
  <div>

 <transition name="sidebarLogoFade">
<div v-if="collapse" key="collapse"></div>
    <div  v-else key="collapse" class="user_info">
      <div class="head_div">
        <img
        class="head_img"
        src="@/assets/layout_images/fad75e554327e62c8d707cd54e37f53.png"
        alt=""
      />
      </div>
      
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
      image: '',
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
.head_div{
width: 80px;
  height: 80px;
  margin: 20px auto;
  overflow: hidden;
  border-radius: 50%;
  border: 2px solid #fff;
}
.head_img {
  width: 100%;
  transition: all .3s;
}
.head_img:hover{
    transform: scale(1.2);
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