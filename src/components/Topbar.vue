<template>
  <div id="topbar">
      <span class="logo">Resumer</span>
      <div class="actions">
        <button class="primary">保存</button>
        <button>预览</button>
      </div>
  </div>
</template>

<script>
  export default {
    name: 'Topbar'
  }
</script>

<style scoped lang="scss">
  #topbar {
    background: #fff;
    box-shadow: 0 1px 3px 0 rgba(0,0,0,0.25); 
    min-width: 1024px;
    max-width: 1440px;
    height: 64px;
    margin: 0 auto;
    padding: 0 16px; 

    .logo {
      font-size: 24px;
      color: #000;
    }
  }
  button {
    width: 72px;
    height: 32px;
    border: none;
    cursor: pointer;
    font-size: 18px;
    background: #ddd;
    color: #222;
    &:hover {
      box-shadow: 1px 1px 1px hsla(0,0,0,0.50);
    }
    &primary {
      background: #02af5f;
      color: #white;
    }
  }
</style>