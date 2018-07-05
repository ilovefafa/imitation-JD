<template>
  <div v-if="show" class="top" @click="goTop">
    <img src="//m.jr.jd.com/spe/qyy/main/images/go_top.png" alt="">
  </div>
</template>

<script>
export default {
  data(){
    return {
      show:false,
    }
  },
  mounted(){
    window.addEventListener('scroll',()=>{
      this.show=document.documentElement.scrollTop||document.body.scrollTop>400 ?true:false
    })
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