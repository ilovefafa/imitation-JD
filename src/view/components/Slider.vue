<template>
  <swiper :options="swiperOption" > 
    <swiper-slide 
      v-for="item in slideData" 
      :key="item.url"><img 
        :src="item.url"  
        alt=""></swiper-slide>
    <div 
      slot="pagination" 
      class="swiper-pagination" 
    ></div>
  </swiper>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  components: {
    swiper,
    swiperSlide,
  },
  props:[
    'swiperOption',
    'slideData',
  ],
  data(){
    return {
   
    }
  },
  computed:{
    
  },
  mounted(){
  },
}
</script>

<style lang="scss" scoped>
img {
  width: 100%;
  display: block;
}
</style>