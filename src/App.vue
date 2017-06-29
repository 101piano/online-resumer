<template>
  <div class="page">
    <header>
      <Topbar />
    </header>
    <main>
      <ResumeEditor />
      <ResumePreview />
    </main>    
  </div>
</template>

<script>
  import './assets/reset.css'
  import 'normalize.css/normalize.css'
  
  import Topbar from './components/Topbar'
  import ResumeEditor from './components/ResumeEditor'
  import ResumePreview from './components/ResumePreview'
  import icons from './assets/icons'

  import store from './store/index'
 
  export default {
    name: 'app',
    store,
    components: {Topbar,ResumeEditor,ResumePreview},
    created(){
      document.body.insertAdjacentHTML('afterbegin',icons)//将svg插入到页面中
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
  }
  svg.icon {
      width: 1em;
      height: 1em;
      fill: currentColor;
      vertical-align: -0.1em;
      font-size: 16px;
  }

</style>
