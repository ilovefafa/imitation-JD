<template>
  <div class="vertical">
    <div 
      v-for="(item,index) in data" 
      :key="item.url" 
      class="vertical-item"
    >
      <div class="width"><img :src="item.url" alt=""></div>
      <p>{{ item.desc }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props:[
    'data',
  ],
  data(){
    return {
      activeIndex:0,
      active:false,
      timer:'',
      translate:0,
      test:0,
      isActive:false,
    }
  },
  computed:{
offsetWidth(){

}
  },
  watch:{
  
  },

  methods:{
    setTimer(){
      this.timer=setInterval(this.playSlides,3000)
    },   
    playSlides(){
      this.setActiveIndex()
    },
    setActiveIndex(){
      let length = this.data.length-1
      this.activeIndex+=1
      if (this.activeIndex>length){
        this.activeIndex=0  
      }
      this.setItemPosition()
    },
    setItemPosition(){  
      let offsetHeight
      let differenceValue
      let activeIndex = this.activeIndex
      let muti = 0
      let childNodes = Array.from(this.$el.children)
     childNodes.forEach((ele,index)=>{
       if(activeIndex===0 && index === childNodes.length-1) {
          ele.style.transition='0.5s'
           muti=1
        } else if(activeIndex===childNodes.length-1 && index === 0) {
          ele.style.transition='0s'
          muti=-1
        } 
        else if (index===activeIndex-1){
          ele.style.transition='0.5s'
          muti = 1
        } else if (index>activeIndex){
          ele.style.transition='0s'
          muti = -1
        } else if (index === activeIndex){
          ele.style.transition='0.5s'
          muti=0
        } 
        else {
          ele.style.transition='0s'
          muti = 4
        }
        
        offsetHeight = muti*this.$el.offsetHeight
        ele.style.transform=`translateY(${-offsetHeight}px)`
      }) 
    },
  },
    mounted(){
      // this.$nextTick(()=>{
      // console.log(this.$el.offsetHeight)
      // })
    this.setTimer()
    this.setItemPosition()
   var ro = new ResizeObserver( entries => {
  for (let entry of entries) {
  this.setItemPosition()
  }
});
  ro.observe(this.$el);
  },
}

</script>

<style lang='scss' scoped>
.vertical {
  height: 100px;
  position: relative;
  & > div {
    height: 100px;
    position: absolute;
    left: 0;
    top: 0;
  }
  .width {
    width: 50%;
    float: left;
    img {
      padding: 10px;
      height: 80px;
      width: 80px;
    }
  }
  p {
    // text-align: center;
    box-sizing: border-box;
    padding: 10px 3px 0 3px;
    width: 50%;
    float: left;
    font-size: 12px;
    color: #fff;
  }
}
</style>