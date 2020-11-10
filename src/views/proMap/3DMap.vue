<template>
  <div class="dashboard-editor-container">

    <iframe id="aoxs_mian"
            src="http://m.wuceproject.com/wckj/xg/theme/index.html"
            frameborder="0"
            width="100%"
            scrolling="no"
            :height="ifHeight"></iframe>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ifHeight: 0
    }
  },
  methods: {
    changeTableMaxHeight() {
      let height = document.body.offsetHeight // 网页可视区域高度
      // if (this.filterActive) {
      //   this.tableMaxHeight = height - 320
      // } else {
      this.tableMaxHeight = height - 85
      // }
      console.log(this.tableMaxHeight)
      this.ifHeight = this.tableMaxHeight
    }
  },
  created() {

    this.changeTableMaxHeight()

  },
  mounted() {
    window.onresize = () => {
      this.changeTableMaxHeight()
    }
  },
  destroyed() {
    window.onresize = null
  },
}
</script>

<style>
</style>