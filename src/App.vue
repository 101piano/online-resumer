<template>
  <div>
   <router-view></router-view>
  </div>
  
</template>

<script>
  import './assets/reset.css'
  import 'normalize.css/normalize.css'
  import icons from './assets/icons'
 
  import AV from './lib/leancloud'
  import getAVUser from './lib/getAVUser'

  document.body.insertAdjacentHTML('afterbegin',icons)//将svg插入到页面中
 
  export default {
    name: 'app',
    created(){     
      this.$store.commit('initState')//初始化resume结构
      let user = getAVUser()
      this.$store.commit('setUser',user)
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
   *afterbegin：插入元素内部的第一个子节点之前*/
</script>

<style lang="scss">
  .page {
    height: 100vh;
    display: flex;
    flex-direction: column;
    background: #eaebec;
    >main {
      min-width: 1024px;
      max-width: 1440px;
      flex-grow: 1;/*让main有高度*/
      margin: 16px 20px;
      display: flex;
      justify-content: space-between;
    }
    svg.icon {
      width: 1em;
      height: 1em;
      fill: currentColor;
      vertical-align: -0.1em;
      font-size: 16px;
    }   
    .button {
      width: 72px;
      height: 32px;
      border: none;
      margin: 0 5px;
      cursor: pointer;
      font-size: 18px;
      background: #ddd;
      color: #222;
      text-decoration: none;
      display: inline-flex;
      justify-content: center;
      align-content: center;
      &:hover {
        box-shadow: 1px 1px 1px hsla(0,0,0,0.50);
      }
      &.primary {
        background: #02af5f;
        color: white;
      }
      &.remove {
        height: 24px;
        font-size: inherit;
        width: auto;
        padding-left: 1em;
        padding-right: 1em;
      }
    }
  }
 

</style>
