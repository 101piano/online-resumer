<template>
  <div id="topbar">
      <span class="logo">在线简历</span>
      <div class="actions">
        <div v-if="logined" class="userActions">
          <span class="welcome">你好，{{ user.username }}</span>
          <a class="button" href="#" @click.prevent="signOut">退出</a>
        </div>
        <div v-else class="userActions">
          <a class="button primary" href="#" @click.prevent="signUpDialogVisible = true">注册</a>
          <a class="button" href="#" @click.prevent="signInDialogVisible = true">登录</a>
        </div> 
      </div>
      <MyDialog title="注册" :visible="signUpDialogVisible" @close="signUpDialogVisible = false">
        <SignUpForm @success="signIn($event)" />
      </MyDialog>      
      <MyDialog title="登录" :visible="signInDialogVisible"
        @close="signInDialogVisible = false">
        <signInForm @success="signIn($event)"/>
      </MyDialog>
  </div>
</template>

<script>
  import MyDialog from './MyDialog'
  import SignUpForm from './SignUpForm'
  import SignInForm from './SignInForm'
  import AV from '../lib/leancloud'

  export default {
    name: 'Topbar',
    data(){
      return {
        signUpDialogVisible: false,
        signInDialogVisible: false
      }
    },
    computed: {
      user(){
        return this.$store.state.user
      },
      logined(){
        return this.user.id
      }
    },
    components: {
      MyDialog,SignUpForm,SignInForm
    },
    methods: {
      signOut(){
        AV.User.logOut()
        this.$store.commit('removeUser')
      },
      signIn(user){
        this.signUpDialogVisible = false
        this.signInDialogVisible = false
        this.$store.commit('setUser',user)
        this.$store.dispatch('fetchResume')
      }
    }
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
    padding: 0 20px; 
    display: flex;
    justify-content: space-between;
    align-items: center;

    .logo {
      font-size: 24px;
      color: #000;
      display: block;
    }

    .actions {
      display: flex;
      .userActions{
        .welcome {
          margin-right: .5em;
        }
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
        align-items: center;
        vertical-align: middle;
        &:hover {
          box-shadow: 1px 1px 1px hsla(0,0,0,0.50);
        }
        &.primary {
          background: #02af5f;
          color: white;
        }
      }    
    }
  }
</style>