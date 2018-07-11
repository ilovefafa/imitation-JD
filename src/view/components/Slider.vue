<template>
  <swiper :options="swiperOption" :class="[modeClass]"> 
    <swiper-slide 
      v-for="item in slideData" 
      :key="item.url">
      <div style="overflow:hidden">
        <div class="width"><img :src="item.url"></div>
        <p v-if="item.desc">{{ item.desc }}</p>
      </div>
    </swiper-slide>
    <div 
      slot="pagination" 
      class="swiper-pagination" 
    ></div>
  </swiper>
</template>

<script>
import 'swiper/dist/css/swiper.css';
import { swiper, swiperSlide } from 'vue-awesome-swiper';
export default {
  components: {
    swiper,
    swiperSlide,
  },
  props: ['slideData', 'width', 'height', 'mode'],
  data() {
    return {
      modeClass: this.mode,
      com:100,
      swiperOption:'',
    };
  },
  computed: {
   
  },
  created(){
    let option;
    switch (this.modeClass) {
    case 'vertical':
      option = {
        direction: 'vertical',
        height:this.com,
        speed: 1000,
        autoplay: {
          disableOnInteraction: false,
        },
        loop: 'true',
      };
      break;
    case 'freeMode':
      option = {
        freeMode: true,
        slidesPerView: 2.5,
        spaceBetween: 12,
        slidesOffsetBefore: 12,
        slidesOffsetAfter: 12,
      };
      break;
    default:
      option = {
        speed: 1000,
        autoplay: {
          disableOnInteraction: false,
        },
        loop: 'true',
        pagination: {
          el: '.swiper-pagination',
        }, 
      };
      break;
    }
    this.swiperOption=option;
  },
};
</script>

<style lang="scss" scoped>
img {
  width: 100%;
  display: block;
}
</style>
