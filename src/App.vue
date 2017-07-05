<template>
  <div >
   <router-view></router-view>
  </div> 
</template>

<script>
  import './assets/reset.css'
  import 'normalize.css/normalize.css'
  import icons from './assets/icons'
  import './assets/ui.scss'
 
  import AV from './lib/leancloud'
  import getAVUser from './lib/getAVUser'

  document.body.insertAdjacentHTML('afterbegin',icons)//将svg插入到页面中
 
  export default {
    name: 'app',
    created(){     
      this.$store.commit('initState')//初始化resume结构
      let user = getAVUser()
      this.$store.commit('setUser', user)
      if(user.id) {
        this.$store.dispatch('fetchResume').then(() => {
          this.restoreResumeFromLocalStorage()
        })
      }else {
        this.restoreResumeFromLocalStorage()
      }   
    },
    methods: {
      restoreResumeFromLocalStorage() {
        let resume = localStorage.getItem('resume')
        if(resume) {
          this.$store.commit('setResume', JSON.parse(resume))
        }
      }
    }
  }
  /*insertAdjacentHTML将指定的文本解析为html或xml，
   *并将结果节点插入到DOM树中指定的位置。
   *afterbegin：插入元素内部的第一个子节点之前
   */
</script>

<style lang="scss" scoped>
 
</style>
