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
    resumeConfig: [
      { field: 'profile', icon: 'id', keys: ['姓名','城市','应聘岗位','生日']},
      { field: '工作经历', icon: 'work', type: 'array', keys:['公司','描述'] },
      { field: '项目经验', icon: 'heart', type: 'array', keys: ['项目名称','描述'] },
      { field: '教育经历', icon: 'book', type: 'array', keys: ['学校','描述'] },   
      { field: '奖项荣誉', icon: 'cup', type: 'array', keys: ['奖项','描述'] },
      { field: '联系方式', icon: 'phone', type: 'array', keys: ['联系方式', 'content']}
    ],
    resume: {

    }
  },
  mutations: {
    initState(state,payload){
      state.resumeConfig.map((item) => {
        if(item.type === 'array') {
          //state.resume[item.field] = []//这样写Vue无法监听属性变化
          Vue.set(state.resume,item.field,[])
        }else{
          Vue.set(state.resume,item.field,{})
          item.keys.map((key) => {
            Vue.set(state.resume[item.field],key,'')
          })
        }
      })
      Object.assign(state.payload)
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
    },
    addResumeSubfield(state,{field}) {
      let empty = {}
      state.resume[field].push(empty)
      state.resumeConfig.filter((i) => i.field === field)[0].keys.map((key) => {
        Vue.set(empty,key,'')
      })
    }
  }
})