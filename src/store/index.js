import Vuex from 'vuex'
import Vue from 'vue'
import objectPath from 'object-path'
import AV from '../lib/leancloud'
import getAVUser from '../lib/getAVUser'

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
      { field: 'profile', icon: 'id', keys: ['name', 'city', 'title', 'birthday'] },
      { field: 'workHistory', icon: 'work', type: 'array', keys:['company', 'details'] },
      { field: 'projects', icon: 'heart', type: 'array', keys: ['name', 'details'] },
      { field: 'education', icon: 'book', type: 'array', keys: ['school', 'details'] },   
      { field: 'awards', icon: 'cup', type: 'array', keys: ['name', 'details'] },
      { field: 'contacts', icon: 'phone', type: 'array', keys: ['contact', 'details'] }
    ],
    resume: {
      id: ''
    }
  },
  mutations: {
    initState(state,payload) {
      state.resumeConfig.map((item) => {
        if(item.type === 'array') {
          //state.resume[item.field] = []//这样写Vue无法监听属性变化
          Vue.set(state.resume, item.field, [])
         
        }else{
          Vue.set(state.resume, item.field, {})
          item.keys.map((key) => {
            Vue.set(state.resume[item.field], key, '')
          })
        }
      })
      if(payload) {
        Object.assign(state, payload)
      }
      
    },
    switchTab(state,payload) {//payload也可以为对象
      state.selected = payload 
    },
    updateResume(state,{ path,xxx }) {
      objectPath.set(state.resume,path,xxx)/*设置对象state.resume的path为xxx，类似于state.resume[field][subfield] = xxx
                                            * 但后者Vue无法监听属性变化*/
       localStorage.setItem('resume',JSON.stringify(state.resume))
    },
    setUser(state,payload) {
      Object.assign(state.user, payload)
    },
    removeUser(state) {
      state.user.id = ''
    },
    addResumeSubfield(state, { field }) {
      let empty = {}   
      state.resume[field].push(empty)
      var arr = state.resumeConfig.filter((i) => i.field === field)
      state.resumeConfig.filter((i) => i.field === field)[0].keys.map((key) => {
        Vue.set(empty, key, '')
      })
    },
    removeResumeSubfield(state, { field,index }){
      state.resume[field].splice(index, 1)
    },
    setResumeId(state, { id }) {
      state.resume.id = id
    },
    setResume(state, resume) {
      state.resumeConfig.map(({ field }) => {
        Vue.set(state.resume, field, resume[field])
      })
      state.resume.id = resume.id
    }
  },
  actions: {
    saveResume({ state, commit }, payload){
      if(!state.user.username) {
        alert('请先登录')
        return
      }
      var Resume = AV.Object.extend('Resume')
      var resume = new Resume()
  
      if(state.resume.id) {
        resume.id = state.resume.id
      }
       
      resume.set('profile', state.resume.profile)
      resume.set('workHistory', state.resume.workHistory)
      resume.set('projects', state.resume.projects)
      resume.set('education', state.resume.education)
      resume.set('awards', state.resume.awards)
      resume.set('contacts', state.resume.contacts)
      resume.set('owner_id',getAVUser().id)

      var acl = new AV.ACL()
      acl.setPublicReadAccess(true)
      acl.setWriteAccess(AV.User.current(), true)
     

      resume.setACL(acl)
      resume.save().then(function(response) {
        if(!state.resume.id) {
          commit('setResumeId', { id: respnse.id })
        }
      }).catch(function(error) {
        console.log(error)
      }) 
    },
    fetchResume({ commit }, payload) {
      var query = new AV.Query('Resume');
      query.equalTo('owner_id', getAVUser().id) 
      query.first().then((resume => {
        if(resume) {
          commit('setResume', { id: resume.id, ...resume.attributes})
        }
      }))
    }
  }
})


