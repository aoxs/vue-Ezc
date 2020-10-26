import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/* Router Modules */
import componentsRouter from './modules/components'
// import chartsRouter from './modules/charts'
// import tableRouter from './modules/table'
// import nestedRouter from './modules/nested'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    noCache: true                if set true, the page will no be cached(default is false)
    affix: true                  if set true, the tag will affix in the tags-view
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */


// 发送请求获取用户名数组，以控制页面权限
const admin = ['admin']
const all = ['admin', 'editor']

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/auth-redirect',
    component: () => import('@/views/login/auth-redirect'),
    hidden: true
  },
  // {
  //   path: '/404',
  //   component: () => import('@/views/error-page/404'),
  //   hidden: true
  // },
  {
    path: '/401',
    component: () => import('@/views/error-page/401'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        name: 'Dashboard',
        meta: { title: '项目首页', icon: 'chart', affix: true }
      }
    ]
  },
  {
    path: '/overview',
    component: Layout,
    // redirect: '/index',
    children: [
      {
        path: 'overview',
        component: () => import('@/views/Overview/index'),
        name: 'Overview',
        meta: { title: '项目概述', icon: 'documentation', affix: true }
      }
    ]
  },
  {
    path: '/prodyn',
    component: Layout,
    // redirect: '/prodyn/index',
    name: 'prodyn',
    meta: {
      title: '项目动态',
      icon: 'component'
    },
    children: [
      {
        path: 'proNews',
        component: () => import('@/views/prodyn/proNews'),
        name: 'proNews',
        meta: { title: '项目新闻' }
      }, {
        path: 'NewsDetails/:id(\\d+)',
        component: () => import('@/views/prodyn/NewsDetails'),
        name: 'NewsDetails',
        meta: { title: '新闻详情', noCache: true, activeMenu: '/prodyn/proNews' },
        hidden: true
      }, {
        path: 'proPolicy',
        component: () => import('@/views/prodyn/proPolicy'),
        name: 'proPolicy',
        meta: { title: '相关政策' }
      }, {
        path: 'proInfo',
        component: () => import('@/views/prodyn/proInfo'),
        name: 'proInfo',
        meta: { title: '项目资料' }
      },



    ]
  },
  {
    path: '/proMap',
    component: Layout,
    // redirect: '/index',
    children: [
      {
        path: 'proMap',
        component: () => import('@/views/proMap/index'),
        name: 'proMap',
        meta: { title: '项目地图', icon: 'international', affix: true }
      }
    ]
  },
  {
    path: '/statistical',
    component: Layout,
    name: 'statistical',
    meta: { title: '统计分析', icon: 'education' },
    children: [
      {
        path: 'survey',
        component: () => import('@/views/statistical/survey'),
        name: 'survey',
        meta: { title: '意愿调查' },
      },
      {
        path: 'MadeBy',
        component: () => import('@/views/statistical/MadeBy'),
        name: 'MadeBy',
        meta: { title: '确权统计' },
      },
      {
        path: 'signing',
        component: () => import('@/views/statistical/signing'),
        name: 'signing',
        meta: { title: '签约统计' },
      },
      {
        path: 'payment',
        component: () => import('@/views/statistical/payment'),
        name: 'payment',
        meta: { title: '付款统计' },
      },
      {
        path: 'demolition',
        component: () => import('@/views/statistical/demolition'),
        name: 'demolition',
        meta: { title: '移交拆除' },
      },
    ]
  },
  {
    path: '/info',
    component: Layout,
    name: 'info',
    meta: {
      title: '基础信息',
      icon: 'clipboard'
    },
    children: [
      {
        path: 'owner',
        component: () => import('@/views/info/owner'),
        name: 'owner',
        meta: { title: '权利人' }
      },
      {
        path: 'houseMang',
        component: () => import('@/views/info/hoseMang'),
        name: 'houseMang',
        meta: { title: '房屋管理' }
      },
      {
        path: 'soilMang',
        component: () => import('@/views/info/soilMang'),
        name: 'soilMang',
        meta: { title: '土地管理' }
      },
      {
        path: 'affiliated',
        component: () => import('@/views/info/affiliated'),
        name: 'affiliated',
        meta: { title: '附属物' }
      },
    ]
  },
  {
    path: '/EarlyStage',
    component: Layout,
    name: 'EarlyStage',
    meta: {
      title: '前期阶段',
      icon: 'table'
    },
    children: [
      {
        path: 'farmersTab',
        component: () => import('@/views/EarlyStage/farmersTab'),
        name: 'farmersTab',
        meta: { title: '农用地信息' }
      },
      {
        path: 'farmersPro',
        component: () => import('@/views/EarlyStage/farmersPro'),
        name: 'farmersPro',
        meta: { title: '农用地进度管理' }
      },
      {
        path: 'Green',
        component: () => import('@/views/EarlyStage/Green'),
        name: 'Green',
        meta: { title: '青苗、构筑附属物' }
      },
      {
        path: 'privHomePro',
        component: () => import('@/views/EarlyStage/privHomePro'),
        name: 'privHomePro',
        meta: { title: '私宅及其他进度' }
      },
      {
        path: 'privHomeTab',
        component: () => import('@/views/EarlyStage/privHomeTab'),
        name: 'privHomeTab',
        meta: { title: '私人住宅信息表' }
      },
    ]
  },
  {
    path: '/infoCheck',
    component: Layout,
    name: 'infoCheck',
    meta: {
      title: '信息核查',
      icon: 'nested'
    },
    children: [
      {
        path: 'check',
        component: () => import('@/views/infoCheck/check'),
        name: 'check',
        meta: { title: '信息核查' }
      },
      {
        path: 'indeedPer',
        component: () => import('@/views/infoCheck/indeedPer'),
        name: 'indeedPer',
        meta: { title: '确权' }
      },
    ]
  },
  {
    path: '/signing',
    component: Layout,
    name: 'signing',
    meta: {
      title: '签约管理',
      icon: 'form'
    },
    children: [
      {
        path: 'negotiations',
        component: () => import('@/views/signing/negotiations'),
        name: 'negotiations',
        meta: { title: '评估谈判' }
      },
      {
        path: 'agreement',
        component: () => import('@/views/signing/agreement'),
        name: 'agreement',
        meta: { title: '签订协议' }
      }

    ]
  },
  {
    path: '/delivery',
    component: Layout,
    name: 'delivery',
    meta: {
      title: '支付移交',
      icon: 'skill'
    },
    children: [
      {
        path: 'compensation',
        component: () => import('@/views/delivery/compensation'),
        name: 'compensation',
        meta: { title: '补偿支付' }
      },
      {
        path: 'demolition',
        component: () => import('@/views/delivery/demolition'),
        name: 'demolition',
        meta: { title: '移交拆除' }
      },
      {
        path: 'cancellation',
        component: () => import('@/views/delivery/cancellation'),
        name: 'cancellation',
        meta: { title: '产权注销' }
      }

    ]
  },

  {
    path: '/fileMang',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/fileMang/index'),
        name: 'fileMang',
        meta: { title: '档案管理', icon: 'excel', noCache: true }
      }
    ]
  },
  {
    path: '/ProTools',
    component: Layout,
    name: 'ProTools',
    meta: {
      title: '工具箱',
      icon: 'bug'
    },
    children: [
      {
        path: 'NewsTools',
        component: () => import('@/views/ProTools/NewsTools'),
        name: 'NewsTools',
        meta: { title: '新闻管理' }
      },
      // {
      //   path: 'index',
      //   component: () => import('@/views/ProTools/index'),
      //   name: 'fileMang',
      //   meta: { title: '档案管理' }
      // },
      {
        path: 'createnews',
        component: () => import('@/views/ProTools/createnews'),
        name: 'CreateNews',
        meta: { title: '新建新闻', noCache: true, activeMenu: '/ProTools/NewsTools' },
        hidden: true
      },
      {
        path: 'editNews/:id(\\d+)',
        component: () => import('@/views/ProTools/editNews'),
        name: 'EditNews',
        meta: { title: '新闻编辑', noCache: true, activeMenu: '/ProTools/NewsTools' },
        hidden: true
      },
      {
        path: 'relevantData',
        component: () => import('@/views/ProTools/relevantData'),
        name: 'relevantData',
        meta: { title: '相关资料' }
      },
    ]
  },
  {
    path: '/proMang',
    component: Layout,
    name: 'proMang',
    meta: {
      title: '项目管理',
      icon: 'tree'
    },
    children: [
      // {
      //   path: 'proCreate',
      //   component: () => import('@/views/proMang/proCreate'),
      //   name: 'proCreate',
      //   meta: { title: '新建项目' }
      // },
      {
        path: 'tempConfig',
        component: () => import('@/views/proMang/tempConfig'),
        name: 'tempConfig',
        meta: { title: '模板配置' }
      },
      {
        path: 'perMang',
        component: () => import('@/views/proMang/perMang'),
        name: 'perMang',
        meta: { title: '权限管理' }
      },

    ]
  },


  /* 

  {
    path: '/documentation',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/documentation/index'),
        name: 'Documentation',
        meta: { title: 'Documentation', icon: 'documentation', affix: true }
      }
    ]
  },
  {
    path: '/guide',
    component: Layout,
    redirect: '/guide/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/guide/index'),
        name: 'Guide',
        meta: { title: 'Guide', icon: 'guide', noCache: true }
      }
    ]
  },
  {
    path: '/profile',
    component: Layout,
    redirect: '/profile/index',
    hidden: true,
    children: [
      {
        path: 'index',
        component: () => import('@/views/profile/index'),
        name: 'Profile',
        meta: { title: 'Profile', icon: 'user', noCache: true }
      }
    ]
  }
  
  */

]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = [




  {
    path: '/systemSet',
    component: Layout,
    // redirect: '/systemSet/index',
    name: 'systemSet',
    meta: {
      title: '系统管理',
      icon: 'user'
    },
    children: [
      {
        path: 'proCreate',
        component: () => import('@/views/systemSet/proCreate'),
        name: 'proCreate',
        meta: { title: '新建项目' }
      },
      {
        path: 'groupIns',
        component: () => import('@/views/systemSet/groupIns'),
        name: 'groupIns',
        meta: { title: '组织结构' }
      }, {
        path: 'userSys',
        component: () => import('@/views/systemSet/userSys'),
        name: 'userSys',
        meta: { title: '账号管理' }
      }, 
      // {
      //   path: 'proUser',
      //   component: () => import('@/views/systemSet/proUser'),
      //   name: 'proUser',
      //   meta: { title: '项目用户账户' }
      // }, 
      {
        path: 'rolePer',
        component: () => import('@/views/systemSet/rolePer'),
        name: 'rolePer',
        meta: { title: '角色权限' }
      }
    ]
  },


  /*
  {
    path: '/permission',
    component: Layout,
    redirect: '/permission/page',
    alwaysShow: true, // will always show the root menu
    name: 'Permission',
    meta: {
      title: 'Permission',
      icon: 'lock',
      roles: ['admin', 'editor'] // you can set roles in root nav
    },
    children: [
      {
        path: 'page',
        component: () => import('@/views/permission/page'),
        name: 'PagePermission',
        meta: {
          title: 'Page Permission',
          roles: ['admin'] // or you can only set roles in sub nav
        }
      },
      {
        path: 'directive',
        component: () => import('@/views/permission/directive'),
        name: 'DirectivePermission',
        meta: {
          title: 'Directive Permission'
          // if do not set roles, means: this page does not require permission
        }
      },
      {
        path: 'role',
        component: () => import('@/views/permission/role'),
        name: 'RolePermission',
        meta: {
          title: 'Role Permission',
          roles: ['admin']
        }
      }
    ]
  },
*/



  /** when your routing map is too long, you can split it into small modules **/
  /* 当您的路由映射太长时，您可以将其分割为小模块 */
  // componentsRouter,
  // chartsRouter,
  // nestedRouter,
  // tableRouter,


  // {
  //   path: '/example',
  //   component: Layout,
  //   redirect: '/example/list',
  //   name: 'Example',
  //   meta: {
  //     title: 'Example',
  //     icon: 'el-icon-s-help'
  //   },
  //   children: [
  //     {
  //       path: 'create',
  //       component: () => import('@/views/example/create'),
  //       name: 'CreateArticle',
  //       meta: { title: 'Create Article', icon: 'edit' }
  //     },
  //     {
  //       path: 'edit/:id(\\d+)',
  //       component: () => import('@/views/example/edit'),
  //       name: 'EditArticle',
  //       meta: { title: 'Edit Article', noCache: true, activeMenu: '/example/list' },
  //       hidden: true
  //     },
  //     {
  //       path: 'list',
  //       component: () => import('@/views/example/list'),
  //       name: 'ArticleList',
  //       meta: { title: 'Article List', icon: 'list' }
  //     }
  //   ]
  // },
  /*
    {
      path: '/tab',
      component: Layout,
      children: [
        {
          path: 'index',
          component: () => import('@/views/tab/index'),
          name: 'Tab',
          meta: { title: 'Tab', icon: 'tab' }
        }
      ]
    },
  
    {
      path: '/error',
      component: Layout,
      redirect: 'noRedirect',
      name: 'ErrorPages',
      meta: {
        title: 'Error Pages',
        icon: '404'
      },
      children: [
        {
          path: '401',
          component: () => import('@/views/error-page/401'),
          name: 'Page401',
          meta: { title: '401', noCache: true }
        },
        {
          path: '404',
          component: () => import('@/views/error-page/404'),
          name: 'Page404',
          meta: { title: '404', noCache: true }
        }
      ]
    },
  
    {
      path: '/error-log',
      component: Layout,
      children: [
        {
          path: 'log',
          component: () => import('@/views/error-log/index'),
          name: 'ErrorLog',
          meta: { title: 'Error Log', icon: 'bug' }
        }
      ]
    },
  
    {
      path: '/excel',
      component: Layout,
      redirect: '/excel/export-excel',
      name: 'Excel',
      meta: {
        title: 'Excel',
        icon: 'excel'
      },
      children: [
        {
          path: 'export-excel',
          component: () => import('@/views/excel/export-excel'),
          name: 'ExportExcel',
          meta: { title: 'Export Excel' }
        },
        {
          path: 'export-selected-excel',
          component: () => import('@/views/excel/select-excel'),
          name: 'SelectExcel',
          meta: { title: 'Export Selected' }
        },
        {
          path: 'export-merge-header',
          component: () => import('@/views/excel/merge-header'),
          name: 'MergeHeader',
          meta: { title: 'Merge Header' }
        },
        {
          path: 'upload-excel',
          component: () => import('@/views/excel/upload-excel'),
          name: 'UploadExcel',
          meta: { title: 'Upload Excel' }
        }
      ]
    },
  
    {
      path: '/zip',
      component: Layout,
      redirect: '/zip/download',
      alwaysShow: true,
      name: 'Zip',
      meta: { title: 'Zip', icon: 'zip' },
      children: [
        {
          path: 'download',
          component: () => import('@/views/zip/index'),
          name: 'test',
          meta: { title: 'test' }
        }
      ]
    },
  
    {
      path: '/pdf',
      component: Layout,
      redirect: '/pdf/index',
      children: [
        {
          path: 'index',
          component: () => import('@/views/pdf/index'),
          name: 'PDF',
          meta: { title: 'PDF', icon: 'pdf' }
        }
      ]
    },
    {
      path: '/pdf/download',
      component: () => import('@/views/pdf/download'),
      hidden: true
    },
  
    {
      path: '/theme',
      component: Layout,
      children: [
        {
          path: 'index',
          component: () => import('@/views/theme/index'),
          name: 'Theme',
          meta: { title: 'Theme', icon: 'theme' }
        }
      ]
    },
  
    {
      path: '/clipboard',
      component: Layout,
      children: [
        {
          path: 'index',
          component: () => import('@/views/clipboard/index'),
          name: 'ClipboardDemo',
          meta: { title: 'Clipboard', icon: 'clipboard' }
        }
      ]
    },
  
    {
      path: 'external-link',
      component: Layout,
      children: [
        {
          path: 'https://github.com/PanJiaChen/vue-element-admin',
          meta: { title: 'External Link', icon: 'link' }
        }
      ]
    },
  */


  {
    path: '/test',
    component: Layout,
    // redirect: '/systemSet/index',
    name: 'test',
    meta: {
      title: '测试路由',
      icon: 'eye'
    },
    children: [

      {
        path: 'directive',
        component: () => import('@/views/test/directive'),
        name: 'directivePermission',
        meta: {
          title: '权限设置  (完成)',
          roles: all // or you can only set roles in sub nav
        }
      },
      {
        path: 'role',
        component: () => import('@/views/test/role'),
        name: 'RolePermission',
        meta: {
          title: '用户管理',
          roles: admin
        }
      },
      {
        path: 'editor',
        component: () => import('@/views/test/editoraa'),
        name: 'editor',
        meta: { title: '所有用户可查看', roles: all },

      },
      {
        path: 'tableSearch',
        component: () => import('@/views/test/tableSearch'),
        name: 'tableSearch',
        meta: { title: '表格筛查', roles: all },

      },
    ]
  },










  {
    path: '/icon',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/icons/index'),
        name: 'Icons',
        meta: { title: 'Icons', icon: 'icon', noCache: true }
      }
    ]
  },


  // 404 page must be placed at the end !!!
  // { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
