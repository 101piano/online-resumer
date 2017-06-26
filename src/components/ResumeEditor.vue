<template>
  <div id="resumeEditor">
    <nav>
      <ol>
      
      </ol>
    </nav>
    <ol class="panels">
    
    </ol>
  </div>
</template>

<script>
  export default {
    name: 'ResumeEditor'
  }
</script>

<style lang="scss">
  #resumeEditor {
    width: 35%;
    box-shadow: 0 1px 3px 0 rgba(0,0,0,0.25);
    background: #fff;
    display: flex;
    flex-direction: row;
    overflow: auto;
    
    > nav {
      width: 80px;
      background: black;
      color: white;
      > ol {
        > li {
          height: 48px;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 16px;
          margin-bottom: 16px;
          &.active {
            background: white;
            color: black;
          }
        }
      }

    }
    ol {
      list-style: none;
    }
  }
</style>