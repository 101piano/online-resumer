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
      { field: 'profile', icon: 'id', keys: ['name','city','title','birthday']},
      { field: 'workHistory', icon: 'work', type: 'array', keys:['company','details'] },
      { field: 'projects', icon: 'heart', type: 'array', keys: ['name','details'] },
      { field: 'education', icon: 'book', type: 'array', keys: ['school','details'] },   
      { field: 'awards', icon: 'cup', type: 'array', keys: ['name','details'] },
      { field: 'contacts', icon: 'phone', type: 'array', keys: ['contact', 'content']}
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
      objectPath.set(state.resume,path,xxx)/*设置对象state.resume的path为xxx，类似于state.resume[field][subfield] = xxx
                                            * 但后者不能*/
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
      var arr = state.resumeConfig.filter((i) => i.field === field)
      console.log(arr)
      state.resumeConfig.filter((i) => i.field === field)[0].keys.map((key) => {
        Vue.set(empty,key,'')
      })
    }
  }
})


