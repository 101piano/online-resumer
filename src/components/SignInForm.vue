<template>
  <div class="SignInForm">
    <form @submit.prevent="signIn">
      <div class="row">
        <label>用户名</label>
        <input type="text" v-model="formData.username" required>
      </div>
      <div class="row">
        <label>密码</label>
        <input type="password" v-model="formData.password" required>
      </div>
      <div class="actions">
        <input type="submit" value="提交">
        <span>{{ errorMessage }}</span>
      </div>
    </form>
  </div>
</template>

<script>
  import AV from '../lib/leancloud'
  import getErrorMessage from '../lib/getErrorMessage'
  import getAVUser from '../lib/getAVUser'

  export default {
    name: 'SignInForm',
    data(){
      return{
        formData: {
          username: '',
          password: ''
        },
        errorMessage: ''
      }
    },
    methods: {
      signIn(){
        let {username,password} = this.formData
        AV.User.logIn(username, password).then(() => {
         // this.$store.commit('setUser',getAVUser())
        //  this.$emit.commit('success', getAVUser())
         this.$emit('success', getAVUser())
        },(error) => {
          this.errorMessage = getErrorMessage(error)
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .SignInForm {
    .row {
      margin: 10px;
      display: flex;
      label {
        width: 4em;
        display: block;
        text-align: justify;
      }
    }
    .actions {
      margin: 10px;
      input {
        padding: 5px;
      }
    }
  }
</style>