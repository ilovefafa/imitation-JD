<template>
  <swiper :options="swiperOption" :class="[modeClass]" :style="{overflow:'visible'}"> 
    <swiper-slide 
      v-for="(item,index) in slideData" 
      :key="index">
      <div v-if="!custom" style="overflow:hidden">
        <div class="width"><img :src="item.url"></div>
        <p v-if="item.desc">{{ item.desc }}</p>
      </div>
      <slot v-if="custom" :data="slideData[index]"></slot>
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
  props:{
    slideData:Array,
    width:String,
    height:String,
    mode:String,
    custom:[String,Boolean],
    spaceBetween:{
      type:Number,
      default:12,
    },
  },
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
        spaceBetween: this.spaceBetween,
        // slidesOffsetBefore: 8,
        // slidesOffsetAfter: 8,
      };
      break;
    case 'train':
      option = {
        speed: 3000,
        autoplay: {
          disableOnInteraction: false,
        },
        loop: 'true',
        pagination: {
          el: '.swiper-pagination',
          bulletClass : 'train-bullet',
          bulletActiveClass: 'train-bullet-active',
          modifierClass : 'train-',
        }, 
      };
      break;
    case 'navBar':
      option = {
        speed: 1000,
        pagination: {
          el: '.swiper-pagination',
          bulletClass : 'train-bullet',
          bulletActiveClass: 'train-bullet-active',
          modifierClass : 'train-',
        }, 
      };
      break;
    case 'number':
      option = { 
        speed: 1000,
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction',
          bulletClass : 'number-bullet',
          bulletActiveClass: 'number-bullet-active',
          modifierClass : 'number-',
        }, 
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

<style lang="scss">
.train-bullets {
  bottom: 4px;
  left: 0;
  right: 0;
  .train-bullet {
    background-color: #ececec;
    opacity: 1;
    width: 5px;
    height: 5px;
    display: inline-block;
    margin: 0 4px;
    border-radius: 100%;
  }
  .train-bullet-active {
    background-color: #c7c4c4;
  }
}
.number-fraction {
  color: #ccc;
  right: 16px;
  bottom: 10px;
  .swiper-pagination-current {
    color: #fff;
  }
  .swiper-pagination-total {
    color: #ccc;
  }
}
</style>
