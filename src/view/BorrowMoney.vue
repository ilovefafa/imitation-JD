<template>
  <div class="BM">
    <div class="top">
      <div class="goldWarp">
        <div class="gold">
          <img src="https://m.jr.jd.com/vip/borrowMoney/widget/jdGold/i/goldCard.png" alt="">
          <p class="desc">最高可借</p>
          <p class="value">300,000</p>
          <p class="btn">立即登录</p>
        </div>
      </div>
    </div>
    <slider
      :slide-data="[
        { 
          url:'https://img12.360buyimg.com/jrpmobile/jfs/t19981/94/2526705437/26645/d84ac200/5b46f6dfN13dd0f43.png?width=690&height=154'
        },
        {
          url:'https://img12.360buyimg.com/jrpmobile/jfs/t20314/109/2103794097/17167/cb7226ba/5b46f6d3N43a905da.png?width=690&height=154'
        },
        {
          url:'https://img12.360buyimg.com/jrpmobile/jfs/t21706/64/2062793494/19557/ba49cbe/5b46f6fdN5c7b2bba.png?width=690&height=154'
        }
      ]"
      mode="train">
    </slider>
    <panel
      title="有车有钱"
      mode="left2"
      class="haveMoney">
      <img src="https://img12.360buyimg.com/jrpmobile/jfs/t22336/343/1857693704/77761/86fae46f/5b39bf53Nf43770cd.png?width=375&height=233" alt="">
      <img src="https://img12.360buyimg.com/jrpmobile/jfs/t14215/140/1757206721/24186/81b4e53c/5a56c877Nee6cfc4d.jpg?width=375&height=233" alt="">
      <slider
        :slide-data="haveMoneySlider"
        custom="ture"
        class="slider"
        mode="navBar" > 
        <div slot-scope="props" class="row-nav">
          <div v-for="(item,index) in props.data" :key="index">
            <img :src="item.url" alt="">
            <p >{{ item.name }}</p>
          </div>
        </div>
      </slider>
    </panel>
    <panel
      title="白条服务"
      mode="left2"
      class="whiteBar">
      <div class="left">
        <img src="https://m.jr.jd.com/vip/borrowMoney/widget/bannerAndCar/i/whiteCard.png" alt="">
      </div>
      <div class="right">
        <img src="https://m.jr.jd.com/vip/borrowMoney/widget/bannerAndCar/i/whiteCircle.png" alt="">
      </div>
    </panel>
  </div>
</template>

<script>
import Slider from './components/Slider.vue';
import Panel from './components/Panel.vue';
export default {
  components: {
    Slider,
    Panel,
  }, 
  data(){
    return {
      haveMoneySlider:[
        [
          {
            url:'https://img12.360buyimg.com/jrpmobile/jfs/t22912/282/79473391/6583/7174d493/5b247539N4854a034.png?width=90&height=90',
            name:'机票',
          },
          {
            url:'https://img12.360buyimg.com/jrpmobile/jfs/t22912/282/79473391/6583/7174d493/5b247539N4854a034.png?width=90&height=90',
            name:'机票',
          },
          {
            url:'https://img12.360buyimg.com/jrpmobile/jfs/t22912/282/79473391/6583/7174d493/5b247539N4854a034.png?width=90&height=90',
            name:'机票',
          },
          {
            url:'https://img12.360buyimg.com/jrpmobile/jfs/t22912/282/79473391/6583/7174d493/5b247539N4854a034.png?width=90&height=90',
            name:'机票',
          },
          {
            url:'https://img12.360buyimg.com/jrpmobile/jfs/t22912/282/79473391/6583/7174d493/5b247539N4854a034.png?width=90&height=90',
            name:'机票',
          },
        ],
        [
          {
            url:'https://img12.360buyimg.com/jrpmobile/jfs/t22912/282/79473391/6583/7174d493/5b247539N4854a034.png?width=90&height=90',
            name:'机票',
          },
          {
            url:'https://img12.360buyimg.com/jrpmobile/jfs/t22912/282/79473391/6583/7174d493/5b247539N4854a034.png?width=90&height=90',
            name:'机票',
          },
          {
            url:'https://img12.360buyimg.com/jrpmobile/jfs/t22912/282/79473391/6583/7174d493/5b247539N4854a034.png?width=90&height=90',
            name:'机票',
          },
          {
            url:'https://img12.360buyimg.com/jrpmobile/jfs/t22912/282/79473391/6583/7174d493/5b247539N4854a034.png?width=90&height=90',
            name:'机票',
          },
          {
            url:'https://img12.360buyimg.com/jrpmobile/jfs/t22912/282/79473391/6583/7174d493/5b247539N4854a034.png?width=90&height=90',
            name:'机票',
          },
        ],
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
@import "./scss/mixin.scss";
.BM {
  background: url("~@images/bj.png") 0 0 no-repeat;
  background-size: 100% auto;
  .top {
    .goldWarp {
      box-sizing: border-box;
      padding: 23.6333px 13.1333px 0;
      color: white;
      .gold {
        position: relative;
        .desc {
          position: absolute;
          top: 18%;
          left: 10%;
        }
        .value {
          position: absolute;
          left: 10%;
          top: 30%;
          font-size: 37.633px;
          text-shadow: 0 0.3125rem 0.3125rem rgba(63, 39, 0, 0.2);
          font-family: "DIN--BOLD";
        }
        .btn {
          position: absolute;
          font-size: 12.25px;
          left: 10%;
          top: 56%;
          background: url("https://m.jr.jd.com/vip/borrowMoney/widget/jdGold/i/btnBj.png")
            50% no-repeat;
          background-size: contain;
          text-align: center;
          line-height: 28.433px;
          font-weight: 500;
          height: 28.433px;
          width: 90.133px;
        }
      }
    }
  }
  .haveMoney {
    font-size: 0;
    img {
      box-sizing: border-box;
      width: 50%;
      display: inline-block;
    }
  }
  .slider {
    padding: 15px 0;
    .row-nav {
      @include rowNav($imgWidth: 38.5px, $imgHeight: 38.5px, $fontSize: 10.5px);
      padding: 0 13.1333px;
    }
  }
  .whiteBar {
    font-size: 0px;
    width: 100%;
    .left {
      display: inline-block;
      width: 63.5%;
      box-sizing: border-box;
      padding-left: 6.5666px;
    }
    .right {
      padding-right: 6.5666px;
      display: inline-block;
      box-sizing: border-box;
      width: 36%;
    }
  }
}
</style>