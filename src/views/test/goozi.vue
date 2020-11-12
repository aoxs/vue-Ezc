<template>
<div class="dashboard-editor-container">
  <div style="background-color: #fff">
    测试页面
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      todos: [],
      allCounts: 0,
      filter: 'all',
      id: 0,
      states: ['all', 'active', 'completed']
    }
  },
  beforeCreate () {
    console.log('==============' + 'beforeCreated' + '===================')
    console.log(this.$el)
    console.log(this.$data)
    console.log(this.filter)
  },
  created () {
    console.log('==============' + 'created' + '===================')
    console.log(this.$el)
    console.log(this.$data)
    console.log(this.filter)
  },
  beforeMount () {
    console.log('==============' + 'beforeMount' + '===================')
    console.log(this.$el)
    console.log(this.$data)
    console.log(this.filter)
  },
  mounted () {
    console.log('==============' + 'mounted' + '===================')
    console.log(this.$el)
    console.log(this.$data)
    console.log(this.filter)
  },
  beforeUpdate () {
    console.log('==============' + 'beforeUpdate' + '===================')
    console.log(this.$el)
    console.log(this.$data)
    console.log(this.filter)
  },
  updated () {
    console.log('==============' + 'updated' + '===================')
    console.log(this.$el)
    console.log(this.$data)
    console.log(this.filter)
  },
  beforeDestroy () {
    console.log('==============' + 'beforeDestroy' + '===================')
    console.log(this.$el)
    console.log(this.$data)
    console.log(this.filter)
  },
  destroyed () {
    console.log('==============' + 'destroyed' + '===================')
    console.log(this.$el)
    console.log(this.$data)
    console.log(this.filter)
  }
 }
 </script>
<style lang="scss" scoped>

 </style>