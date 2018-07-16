<template>
  <div v-if="show" class="top" @click="goTop">
    <img src="http://m.jr.jd.com/spe/qyy/main/images/go_top.png" alt="">
  </div>
</template>

<script>
import { throttle, debounce } from 'throttle-debounce';
export default {
  data(){
    return {
      show:false,
    }
  },
  mounted(){
    let action = throttle(300,false,()=>{
      this.show=(document.documentElement.scrollTop||document.body.scrollTop)>400 ?true:false
    })
    window.addEventListener('scroll',action)
  },
  methods:{
    goTop(){
      window.scrollTo(0,0)
    },
  },  
}
</script>

<style lang="scss" scoped>
.top {
  height: 50px;
  width: 50px;
  position: fixed;
  bottom: 72px;
  right: 16px;
  z-index: 10001;
}
</style>