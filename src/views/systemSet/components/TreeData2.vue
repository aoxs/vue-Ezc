<template>

  <el-form v-model="checkboxBottom"
           ref="checkboxBottom"
           :inline="false"
           size="normal">
    <el-form-item style="margin:0px;padding:0px;">
      <el-header height="56px"
                 style=""
                 class="tabHeader">

        <div style="display:flex;justify-content: space-around;">
          <p style="padding: 0;margin: 0;line-height: 36px;">按钮权限</p>
          <el-button type="danger"
                     @click="onSubmit">
            <i class="el-icon-check" />
            确定
          </el-button>
        </div>
      </el-header>
    </el-form-item>
    <el-form-item style="margin:0px;padding:0px;">
      <el-checkbox-group size="small"
                         v-model="checkboxBottom"
                         style="padding:10px;">
        <el-checkbox border
                     style="margin:5px;padding:5px 5px 5px 5px"
                     label="新建"
                     name="type">
        </el-checkbox>
        <el-checkbox border
                     
                     style="margin:5px;padding:5px 5px 5px 5px"
                     label="编辑"
                     name="type">
        </el-checkbox>
        <el-checkbox border
                     
                     style="margin:5px;padding:5px 5px 5px 5px"
                     label="删除"
                     name="type">
        </el-checkbox>
        <el-checkbox border
                     
                     style="margin:5px;padding:5px 5px 5px 5px"
                     label="查看详情"
                     name="type">
        </el-checkbox>
      </el-checkbox-group>

    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      checkboxBottom:['新建','删除']
    }
  },
  methods: {
    onSubmit() {
      console.log(this.checkboxBottom)
    }
  }
}
</script>

<style scoped>
.tabHeader {
  background-color: #f5f5f5;
  padding: 10px 10px;
  border-bottom: 1px solid #a5a5a5;
}
</style>