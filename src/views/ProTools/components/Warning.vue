<template>
  <aside>
    keep-alive不能缓存创建和编辑页面，因为keep-alive include当前不支持基于路由的缓存，因此当前基于组件名称来缓存。如果要实现类似的缓存效果，可以使用浏览器缓存方案，例如localStorage。或者不要使用保持活动包含直接缓存所有页面。查看详细
    <a
      href="https://panjiachen.github.io/vue-element-admin-site/guide/essentials/tags-view.html"
      target="_blank"
    >资料</a>
  </aside>
</template>

