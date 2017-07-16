<template>
  <div id="resumePreview">
    <button class="button" @click="save">保存</button>
    <router-link class="button preview" to="/preview">预览</router-link>
    <div class="myPreview">
      <div class="information">
        <section data-name="profile" v-if="resume.profile && resume.profile.name">
          <h1>{{ resume.profile.name }}</h1>
          <h3>{{ resume.profile.title }}</h3>
          <p>
            <small>{{ resume.profile.city }}</small>
            <small>{{ resume.profile.birthday }}</small>
          </p>
        </section>
        <section data-name="contacts" v-if="resume.contacts && resume.contacts.length > 0">
          <h2>联系方式</h2>
          <table>
            <tr v-for="item in resume.contacts">
              <td>{{ item.contact }}</td>
              <td v-show="item.details">{{ item.details}}</td>
            </tr>
          </table>
        </section>
      </div>
      <div class="pro">
         <section data-name="workHistory" v-if="resume.workHistory && resume.workHistory.length > 0">
          <h2>工作经历</h2>
          <ol>
            <li v-for="item in resume.workHistory">
              <h3>{{ item.company }}</h3>
              <p v-show="item.details">{{ item.details }}</p>
            </li>
          </ol>
        </section>
        <section data-name="projects" v-if="resume.projects && resume.projects.length > 0">
          <h2>项目经验</h2>
          <ol> 
            <li v-for="item in resume.projects">
              <h3>{{ item.name }}</h3>
              <p v-show="item.details">{{ item.details }}</p>     
            </li>
          </ol>
        </section>
        <section data-name="education" v-if="resume.education && resume.education.length > 0">
          <h2>教育经历</h2>
          <ol> 
            <li v-for="item in resume.education">
              <h3>{{ item.school }}</h3>
              <p v-show="item.details">-{{ item.details }}</p>
            </li>
          </ol>
        </section>
        <section data-name="awards" v-if="resume.awards &&　resume.awards.length > 0">
          <h2>获奖荣誉</h2>
          <ol>
            <li v-for="item in resume.awards">
              <h3>{{ item.name}}</h3>
              <p v-show="item.details">{{ item.details }}</p>
            </li>
          </ol>
        </section>
      </div>     
    </div>  
  </div>
 </template>
 
<script>
  export default {
    name: 'ResumePreview',
    computed: {
      resume(){
        return this.$store.state.resume
      }
    },
    methods: {
      save(){
        this.$store.dispatch('saveResume')
      }
    }
  }
</script>
 
<style lang="scss" scoped>
  #resumePreview { 
    flex-grow: 1;
    margin-left: 16px;
    background: #fff;
    box-shadow: 0 1px 3px 0 rgba(0,0,0,0.25);
    padding: 2em;
    color: #333;
    line-height: 1.2;
    overflow: auto;
    * {
      box-sizing: border-box;
      font-variant: normal;
      font-weight: normal; 
    }
    ol {
      list-style: none;
    }
    section + section {
      margin-top: 2em;
    }
    p {
      white-space: pre-line;
    }
    .button {
      margin-bottom: 10px;
    }
    .preview {
      line-height: 32px;
    }
    section {
      > h2:first-child {
     
        display: liline-block;
        padding: .2em;
        margin-bottom: .5em;
      }
    }
    section[data-name="profile"] {
      > h1 {
        margin: .1em 0;
        font-size: 30px;
      }
    }
    section[data-name="workHistory"],
    section[data-name="projects"],
    section[data-name="awards"] {
      li + li {
        margin-top: 1em;
      }
      li {
        h3 {
          border-bottom: 1px solid #999;
          padding-bottom: .3em;
          margin-bottom: .3em;
        }
      }
    }
    section[data-name="education"] {
      li {
        line-height: 1.5;
      }
    }
    section[data-name="contacts"] {
      h2 {
        background: transparent;
      }
      td:first-child {
        padding-right: 1em;
      }
    }
    .myPreview {
      width: 100%;
      display: flex;
      .information {
        background: #ccc;
        color: #000;
        padding-left: 10px;
        width: 30%;
        height: 100vh;
        h2 {
          font-size: 20px;
        }
        h3 {
          font-size: 15px;
        }
      }
      .pro {
        width: 70%;
        background: #12A8D4;
        padding-left: 20px;
        padding-right: 20px;
        color: #fff;
        h2 {
          margin-top: 0;
        }
        p {
          line-height: 1.5;
        }
      }
    }
    
  }
</style>