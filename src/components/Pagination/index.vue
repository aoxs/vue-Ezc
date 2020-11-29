<template>
  <div :class="{'hidden':hidden}"
       class="pagination-container">
    <el-pagination :background="background"
                   :current-page.sync="currentPage"
                   :page-size.sync="pageSize"
                   :layout="layout"
                   
                   :total="total"
                   :pager-count="5"
                   :small="small"
                   v-bind="$attrs"
                 
                   @current-change="handleCurrentChange" />
                   <!-- :page-sizes="pageSizes" 分页数量 -->
                     <!-- @size-change="handleSizeChange"  -->
  </div>
</template>

<script>
import { scrollTo } from '@/utils/scroll-to'

export default {
  name: 'Pagination',
  props: {
    total: {
      required: true,
      type: Number
    },
    page: {
      type: Number,
      default: 1
    },
    limit: {
      type: Number,
      default: 10
    },
    pageSizes: {
      type: Array,
      default() {
        return [10, 20, 30, 50]
      }
    },
    layout: {
      type: String,
      default: 'total, prev, pager, next'
    },
    background: {
      type: Boolean,
      default: true
    },
    small: {
      type: Boolean,
      default: false
    },
    autoScroll: {
      type: Boolean,
      default: true
    },
    hidden: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    currentPage: {
      get() {
        return this.page
      },
      set(val) {
        this.$emit('update:page', val)
      }
    },
    pageSize: {
      get() {
        return this.limit
      },
      set(val) {
        this.$emit('update:limit', val)
      }
    }
  },
  methods: {
    handleSizeChange(val) {
      console.log("page1:", this.currentPage, "limit:", val)
      this.$emit('pagination', { page: this.currentPage, limit: val })
      if (this.autoScroll) {
        scrollTo(0, 800)
      }
    },
    handleCurrentChange(val) {
      console.log("page2:", val, "limit:", this.pageSize)
      this.$emit('pagination', { page: val, limit: this.pageSize })
      if (this.autoScroll) {
        scrollTo(0, 800)
      }
    }
  }
}
</script>

<style scoped>
.pagination-container {
  background: #fff;
  padding: 32px 16px;
  margin-top: 0px !important;
}
.pagination-container.hidden {
  display: none;
}
</style>
