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
  import Topbar from './Topbar'
  import ResumeEditor from './ResumeEditor'
  import ResumePreview from './ResumePreview'

  export default {
    name: 'Resume',
    components: { Topbar, ResumeEditor, ResumePreview },
    created(){

    }
  }
</script>

<style lang="scss" scoped>
 
</style>