
const tokens = {
  admin: {
    token: 'admin-token'
  },
  editor: {
    token: 'editor-token'
  },
  "wnd-01": {
    token: 'wnd-01-token'
  },
  "LH01": {
    token: 'LH01-token'
  },
  "LH02": {
    token: 'LH02-token'
  },
  "LH03": {
    token: 'LH03-token'
  },
  "LH04": {
    token: 'LH04-token'
  },
  "LH05": {
    token: 'LH05-token'
  },
  "LH06": {
    token: 'LH06-token'
  },
  "LH07": {
    token: 'LH07-token'
  },
  "LH08": {
    token: 'LH08-token'
  },
  "LH09": {
    token: 'LH09-token'
  },
  "LH10": {
    token: 'LH10-token'
  },
  "LH11": {
    token: 'LH11-token'
  },
  "LH12": {
    token: 'LH12-token'
  },
  "LH13": {
    token: 'LH13-token'
  },
  "LH14": {
    token: 'LH14-token'
  },
  "LH15": {
    token: 'LH15-token'
  },
  "LH16": {
    token: 'LH16-token'
  },
  "LH17": {
    token: 'LH17-token'
  },
  "LH18": {
    token: 'LH18-token'
  },
  "LH19": {
    token: 'LH19-token'
  },
  "LH20": {
    token: 'LH20-token'
  },
  "LH-admin": {
    token: 'LH-admin-token'
  },
}

const users = {
  'admin-token': {
    roles: ['admin'],
    introduction: 'I am a super administrator',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Super Admin'
  },
  'editor-token': {
    roles: ['editor'],
    introduction: 'I am an editor',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Normal Editor'
  },
  'wnd-01-token': {
    roles: ['wnd-01'],
    introduction: 'I am an wnd-01',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Normal wnd-01'
  },
  'LH01-token': {
    roles: ['LH01'],
    introduction: 'I am an LH01',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Normal 龙华一组'
  },
  'LH02-token': {
    roles: ['LH02'],
    introduction: 'I am an LH02',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Normal 龙华二组'
  },
  'LH03-token': {
    roles: ['LH03'],
    introduction: 'I am an LH03',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Normal 龙华三组'
  },
  'LH04-token': {
    roles: ['LH04'],
    introduction: 'I am an LH04',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Normal 龙华四组'
  },
  'LH05-token': {
    roles: ['LH05'],
    introduction: 'I am an LH05',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Normal 龙华五组'
  },
  'LH06-token': {
    roles: ['LH06'],
    introduction: 'I am an LH06',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Normal 龙华六组'
  },
  'LH07-token': {
    roles: ['LH07'],
    introduction: 'I am an LH07',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Normal 龙华七组'
  },
  'LH08-token': {
    roles: ['LH08'],
    introduction: 'I am an LH08',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Normal 龙华八组'
  },
  'LH09-token': {
    roles: ['LH09'],
    introduction: 'I am an LH09',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Normal 龙华九组'
  },
  'LH10-token': {
    roles: ['LH10'],
    introduction: 'I am an LH10',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Normal 龙华十组'
  },
  'LH11-token': {
    roles: ['LH11'],
    introduction: 'I am an LH11',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Normal 龙华十一组'
  },
  'LH12-token': {
    roles: ['LH12'],
    introduction: 'I am an LH12',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Normal 龙华十二组'
  },
  'LH13-token': {
    roles: ['LH13'],
    introduction: 'I am an LH13',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Normal 龙华十三组'
  },
  'LH14-token': {
    roles: ['LH14'],
    introduction: 'I am an LH14',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Normal 龙华十四组'
  },
  'LH15-token': {
    roles: ['LH15'],
    introduction: 'I am an LH15',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Normal 龙华十五组'
  },
  'LH16-token': {
    roles: ['LH16'],
    introduction: 'I am an LH16',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Normal 龙华十六组'
  },
  'LH17-token': {
    roles: ['LH17'],
    introduction: 'I am an LH17',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Normal 龙华十七组'
  },
  'LH18-token': {
    roles: ['LH18'],
    introduction: 'I am an LH18',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Normal 龙华十八组'
  },
  'LH19-token': {
    roles: ['LH19'],
    introduction: 'I am an LH19',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Normal 龙华十九组'
  },
  'LH20-token': {
    roles: ['LH20'],
    introduction: 'I am an LH20',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Normal 龙华二十组'
  },
  'LH-admin-token': {
    roles: ['LH-admin'],
    introduction: 'I am an LH-admin',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Normal LH-admin'
  },
}

module.exports = [
  // user login
  {
    url: '/vue-element-admin/user/login',
    type: 'post',
    response: config => {
      const { username } = config.body
      const token = tokens[username]

      // mock error
      if (!token) {
        return {
          code: 60204,
          message: 'Account and password are incorrect.'
        }
      }

      return {
        code: 20000,
        data: token
      }
    }
  },

  // get user info
  {
    url: '/vue-element-admin/user/info\.*',
    type: 'get',
    response: config => {
      const { token } = config.query
      const info = users[token]

      // mock error
      if (!info) {
        return {
          code: 50008,
          message: 'Login failed, unable to get user details.'
        }
      }

      return {
        code: 20000,
        data: info
      }
    }
  },

  // user logout
  {
    url: '/vue-element-admin/user/logout',
    type: 'post',
    response: _ => {
      return {
        code: 20000,
        data: 'success'
      }
    }
  }
]
