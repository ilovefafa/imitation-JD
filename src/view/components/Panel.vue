<template>
  <div 
    :style="{paddingBottom:bottom+'px'}"  
    :class="{leftPanel:mode==='left',noPadding:noPadding,leftPanel2:mode==='left2'}" class="Panel">
    <h1 v-if="title" class="Title" >{{ comTitle }}</h1>
    <div 
      v-if="more"  
      class="more">{{ more }}</div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props:[
    'title',
    'more',
    'bottom',
    'mode',
    'noPadding',
  ],
  data(){
    return {
      fontSize:'',
    }
  },
  computed:{
    comTitle(){
      let title 
      title = this.mode==='left' || this.mode==='left2'?this.title:`- ${this.title} -`
      return title
    },
  },
}
</script>

<style lang="scss" scoped>
.Panel {
  box-sizing: border-box;
  width: 100%;
  position: relative;
  background: #ffffff;
  margin-bottom: 10px;
  padding-bottom: 10px;
  .Title {
    text-align: center;
    font-size: 16px;
    font-weight: 700;
    height: 56px;
    line-height: 56px;
  }
  .more {
    position: absolute;
    color: #999;
    height: 56px;
    line-height: 56px;
    padding: 0 16px;
    top: 0px;
    right: 0px;
    background: url("http://m.jr.jd.com/spe/qyy/main/images/icon_arrow1.png")
      center right no-repeat;
    background-size: 9px 14px;
    margin-right: 16px;
  }
}
@mixin leftPanel() {
  padding-left: 15px;
  padding-right: 15px;
  .Title {
    font-size: 17px;
    text-align: left;
  }
  .more {
    font-size: 12px;
    background-size: 8px 10px;
    padding-right: 12px;
  }
}
.leftPanel {
  @include leftPanel();
}
.leftPanel2 {
  @include leftPanel();
  padding-top: 15px;
  padding-left: 0px;
  padding-right: 0px;
  .Title {
    font-size: 15.75px;
    height: 15.75px;
    line-height: 15.75px;
    position: relative;
    padding-left: 10px;
    font-weight: 400;
    margin: 0 auto 15px 13.133px;
    &::before {
      content: "";
      height: 15.75px;
      width: 2.63333px;
      background: url("https://m.jr.jd.com/vip/borrowMoney/css/i/title.png") 0 0
        no-repeat;
      position: absolute;
      top: 0;
      left: 0;
      background-size: contain;
    }
  }
}
.noPadding {
  padding-left: 0;
  padding-right: 0;
  .Title {
    padding-left: 15px;
  }
}
</style>