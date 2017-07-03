<template>
  <div id="resumeEditor">
    <nav>
      <ol>
        <li v-for="(item,index) in resumeConfig"
            :class="{active: item.field === selected}"
            @click="selected = item.field">
            <svg class="icon">
              <use :xlink:href="`#icon-${item.icon}`"></use>
            </svg>
        </li>
      </ol>
    </nav>
    <ol class="panels">
      <li v-for="item in resumeConfig" v-show="item.field === selected">
        <div v-if="item.type === 'array'">
          <h2>{{ $t(`resume.${item.field}._`) }}</h2>
          <div class="subitem" v-for="(subitem,i) in resume[item.field]">
            <button class="button remove" @click="removeResumeSubfield(item.field,i)">删除</button>
            <div class="resumeField" v-for="(value,key) in subitem">
              <label>{{ $t(`resume.${item.field}.${key}`) }}</label>
              <input type="text" :value="value"
                @input="changeResumeField(`${item.field}.${i}.${key}`,$event.target.value)">
            </div>
            <hr>
          </div>
          <button class="button add" @click="addResumeSubfield(item.field)">新增</button>
        </div>
        <div v-else class="resumeField" v-for="(xxx,key) in resume[item.field]">
          <label>{{ $t(`resume.profile.${key}`) }}</label>
          <input type="text" :value="xxx"
            @input="changeResumeField(`${item.field}.${key}`,$event.target.value)">
        </div>
      </li>
    </ol>
  </div>
</template>

<script>
  export default {
    name: 'ResumeEditor',
    computed: {
      selected: { 
        get(){
          return this.$store.state.selected
        },
        set(value) {
          return this.$store.commit('switchTab',value)
        }
      },
      resume(){
        return this.$store.state.resume
      },
      resumeConfig(){
        return this.$store.state.resumeConfig
      }
    },
    methods: {
      changeResumeField(path,xxx){
        this.$store.commit('updateResume',{
          path,
          xxx
        })
      },
      addResumeSubfield(field){
        this.$store.commit('addResumeSubfield',{field})
      },
      removeResumeSubfield(field,index){
        this.$store.commit('removeResumeSubfield',{field,index})
      }
    }
  }
</script>

<style lang="scss" scoped>
  #resumeEditor {
    min-width: 35%;
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
      svg.icon {
        width: 24px;
        height: 24px;
      }
    }
    > .panels {
      flex-grow: 1;
      >li {
        padding: 24px;       
        .subitem {
          position: relative;
          margin-top: 10px;
          .button.remove {
            position: absolute;
            top: -3px;
            right: 0;
          }
        }
        .resumeField {
          > label {
            display: block;
          }
          input[type=text]{
            margin: 16px 0;
            border: 1px solid #ddd;
            box-shadow: inset 0 1px 3px 0 rgba(0,0,0,0.25);
            width: 100%;
            height: 40px;
            padding: 0 8px;
          }
        }
        .add {
          margin-top: 20px;
        }
      }
    }
    ol {
      list-style: none;
    }    
    hr {
      border: none;
      border-top: 1px solid #ddd;
      margin: 24px 0;
    }
  }
 
</style>



