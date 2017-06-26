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

 
  export default {
    name: 'app',
    data: function(){
      return {
        text: '你好'
      }
    },
    components: {Topbar,ResumeEditor,ResumePreview},
    created(){
      codument.body.insertAdjacentHTML('afterbegin',icons)
    }
  }
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

</style>
