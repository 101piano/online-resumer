<template>
  <div id="topbar">
      <span class="logo">Resumer</span>
  </div>
</template>

<script>
  export default {
    name: 'Topbar'
  }
</script>

<style>
  #topbar {
    background: #fff;
    box-shadow: 0 1px 3px 0 rgba(0,0,0,0.25); 
    min-width: 1024px;
    max-width: 1440px;
    height: 64px;
    margin: 0 auto;
    padding: 0 16px; 
  }

  #topbar .logo {
    font-size: 24px;
    color: #000;
  }
</style>