<template>
  <div>
     <div class="page">
      <header>
        <Topbar />
      </header>
      <main>
        <ResumeEditor />
        <ResumePreview />
      </main>    
    </div>
  </div>
</template>

<script>
  import Topbar from './components/Topbar'
  import ResumeEditor from './components/ResumeEditor'
  import ResumePreview from './components/ResumePreview'

  export default {
    name: 'Resume'
    components: {Topbar, ResumeEditor, ResumePreview},
    created(){

    }
  }
</script>

<style lang="scss">

</style>