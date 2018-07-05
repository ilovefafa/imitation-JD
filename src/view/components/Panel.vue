<template>
  <div 
    :style="{paddingBottom:bottom+'px'}" 
    class="Panel">
    <h1 v-if="title" >- {{ title }} -</h1>
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
  ],
}
</script>

<style lang="scss" scoped>
.Panel {
  width: 100%;
  position: relative;
  background: #ffffff;
  margin-bottom: 10px;
  h1 {
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
    background: url(//m.jr.jd.com/spe/qyy/main/images/icon_arrow1.png) center
      right no-repeat;
    background-size: 9px 14px;
    margin-right: 16px;
  }
}
</style>