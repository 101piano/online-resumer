import Vuex from 'vuex'
import Vue from 'vue'
import objectPath from 'object-path'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    selected: 'profile',
    resume: {
      config: [
        { field: 'profile',icon: 'id' },
        { field: 'workHistory',icon: 'work' },
        { field: 'education',icon: 'book' },
        { field: 'projects',icon: 'heart' },
        { field: 'awards',icon: 'cup' },
        { field: 'contacts',icon: 'phone'}
      ],
      profile: {
        name: '成慧',
        city: '武汉',
        title: '前端工程师',
        birthday: ''
      },
      'workHistory': [
        { company: 'AL',content: '我的第二份工作是' },
        { company: 'TX',content: '我的第一份工作是' }
      ],
      education: [
        { school: 'AL',content: '文字' },
        { school: 'TX',content: '文字' }
      ],
      projects: [
        { name: 'project A',content: '文字' },
        { name: 'project B',content: '文字' }
      ],
      awards: [
        { name: 'awards A',content: '文字' },
        { name: 'awards B',content: '文字' }
      ],
      contacts: [
        { contact: 'phone',content: '文字' },
        { contact: 'qq',content: '文字' }
      ]
    }
  },
  mutations: {
    switchTab(state,payload){
      state.selected = payload //?????
    },
    updateResume(state,{path,xxx}){
      //state.resume[field][subfield] = xxx
      objectPath.set(state.resume,path,xxx)
    }
  }
})