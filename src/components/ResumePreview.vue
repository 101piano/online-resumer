<template>
  <div id="resumePreview">
    <h1>你好</h1>
    <section data-name="profile" v-if="resume.profile && resume.profile.name">
      <h1>{{ resume.profile.name }}</h1>
      <h2>{{ resume.profile.title }}</h2>
      <p>
        <small>{{ resume.profile.city }}</small>
        <small>{{ resume.profile.birthday }}</small>
      </p>
    </section>

    <section data-name="workHistory" v-if="resume.workHistory && resume.workHistory > 0">
      <h2>工作经历</h2>
      <ol>
        <li v-for="item in resume.workHistory">
          <h3>{{ item.公司 }}</h3>
          <p v-show="item.描述">{{ item.描述 }}</p>
        </li>
      </ol>
    </section>

    <section data-name="projects" v-if="resume.projects && resume.projects.length > 0">
      <h2>项目经验</h2>
      <ol> 
        <li v-for="item in resume.projects">
          <h3>
            {{ item.项目名称 }}
            <span v-show="item.项目描述">{{ item.项目描述 }}</span>
          </h3>
        </li>
      </ol>
    </section>

    <section data-name="education" v-if="resume.education && resume.education > 0">
      <h2>教育经历</h2>
      <ol> 
        <li v-for="item in resume.education">
          <h3>
            {{ item.学校 }}
            <span v-show="item.描述">-{{ item.描述 }}</span>
          </h3>
        </li>
      </ol>
    </section>

    <section data-name="awards" v-if="resume.awards &&　resume.awards > 0">
      <h2>获奖荣誉</h2>
      <ol>
        <li v-for="item in resume.awards">
          <h3>{{ item.奖项}}</h3>
          <p v-show="item.描述">{{ item.描述 }}</p>
        </li>
      </ol>
    </section>

    <section data-name="contacts" v-if="resume.contacts && resume.contacts > 0">
      <h2>联系方式</h2>
      <table>
        <tr v-for="item in resume.contacts">
          <td>{{ item.联系方式 }}</td>
          <td v-show="item.details">{{ item.details}}</td>
        </tr>
      </table>
    </section>
  </div>
 </template>
 
<script>
  export default {
    name: 'ResumePreview',
    computed: {
      resume(){
        return this.$store.state.resume
      }
    }
  }
</script>
 
<style lang="scss">
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
    section {
      > h2:first-child {
        background: #ddd;
        display: liline-block;
        padding: .2em;
        margin-bottom: .5em;
      }
    }
    section[data-name="profile"] {
      > h1 {
        margin: .1em 0;
        font-size: 4em;
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
      td:first-child {
        padding-right: 1em;
      }
    }
  }
</style>