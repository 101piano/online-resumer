import Vuex from 'vuex'
import Vue from 'vue'
import objectPath from 'object-path'

Vue.use(Vuex)

//创建一个store
export default new Vuex.Store({
  state: {
    selected: 'profile',
    user: {
      id: '',
      username: ''
    },
    resume: {
      config: [
        { field: 'profile', icon: 'id', keys: ['姓名','城市','应聘岗位','生日']},
        { field: 'workHistory', icon: 'work', type: 'array', keys:['公司','描述'] },
        { field: 'education', icon: 'book', type: 'array', keys: ['学校','描述'] },
        { field: 'projects', icon: 'heart', type: 'array', keys: ['项目名称','描述'] },
        { field: 'awards', icon: 'cup', type: 'array', keys: ['奖项','描述'] },
        { field: 'contacts', icon: 'phone', type: 'array', keys: ['联系方式', 'content']}
      ],
      profile: {},
      'workHistory': [],
      education: [],
      projects: [ ],
      awards: [],
      contacts: []
    }
  },
  mutations: {
    initState(state,payload){
      Object.assign(state,payload)//Object.assign(target,...sources)将所有属性的值复制到目标对象，返回目标对象
    },
    switchTab(state,payload){//payload也可以为对象
      state.selected = payload 
      localStorage.setItem('state',JSON.stringify(state))
    },
    updateResume(state,{path,xxx}){
      //state.resume[field][subfield] = xxx
      objectPath.set(state.resume,path,xxx)//objectPath.set()??????
      localStorage.setItem('state',JSON.stringify(state))
    },
    setUser(state,payload){
      Object.assign(state.user,payload)
    },
    removeUser(state) {
      state.user.id = null
    }
  }
})