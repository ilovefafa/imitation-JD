<template>
  <div>
    <slider
      :slide-data="[
        {
          url:'https://img12.360buyimg.com/jrpmobile/jfs/t24463/25/594094712/253799/cfb55277/5b36deedNe1b831e6.png?width=750&height=360'  
        },
        {
          url:'https://img12.360buyimg.com/jrpmobile/jfs/t22729/20/853870952/60883/4513c97b/5b45b528N57c23689.jpg?width=750&height=360'
        },
        {
          url:'https://img12.360buyimg.com/jrpmobile/jfs/t22186/310/2039825348/41025/b9269cb6/5b45d62bN34a1dd72.jpg?width=749&height=360'
        }
      ]" 
      mode="number">
    </slider>
    <div class="gift">
      <img src="https://img12.360buyimg.com/jrpmobile/jfs/t22399/143/1923825163/7813/3c6b8701/5b3b1363N136fafe7.png?width=252&height=150" alt="">
      <img src="https://img12.360buyimg.com/jrpmobile/jfs/t20008/296/2306168403/7620/456359da/5b3ae3dfN9006c9aa.png?width=252&height=150" alt="">
      <img src="https://img12.360buyimg.com/jrpmobile/jfs/t23314/168/554487157/2863/7b6fc7a9/5b35caedN6cd9fa8e.png?width=252&height=150" alt="">
    </div>
    <div class="coupon">
      <img src="https://img12.360buyimg.com/jrpmobile/jfs/t18133/160/2621681499/24042/af1ceea1/5b03d5bcN29ef6416.jpg?width=750&height=480" alt="">
      <img src="https://img12.360buyimg.com/jrpmobile/jfs/t16630/362/2707031119/15173/aa5acde3/5b03d5c7Nccffa23f.jpg?width=750&height=480" alt="">
    </div>
    <panel
      :bottom="0"   
      title="支付优惠" mode="left" class="discount" no-padding="true">
      <img src="https://img12.360buyimg.com/jrpmobile/jfs/t20125/139/377044579/41214/51a08cb6/5b0b947bN916e62ee.jpg?width=1500&height=442" alt="">
      <div class="row2">
        <div class="column1">
          <img src="https://img12.360buyimg.com/jrpmobile/jfs/t21220/114/370135108/16076/707215c1/5b0b957bNcb388c1b.png?width=335&height=420" alt="">
        </div>
        <div class="column2">
          <img src="https://img12.360buyimg.com/jrpmobile/jfs/t19198/45/2659881364/38954/a2c7ccc1/5b0402a7Nc06d77e4.png?width=335&height=210" alt="">
          <img src="https://img12.360buyimg.com/jrpmobile/jfs/t20749/155/372410425/9537/ad7f2a8c/5b0b8b37Nf39a066b.png?width=335&height=210" alt="">
        </div>
      </div>
    </panel>
    <panel
      title="便利生活" 
      mode="left" 
      no-padding="true">
      <div class="navBar" >
        <div v-for="(item,index) in navData" :key="index">
          <img :src="item.url" alt="">
          <p>{{ item.name }}</p>
        </div>
      </div>
    </panel>
    <div class="capsule">
      <img src="https://img12.360buyimg.com/jrpmobile/jfs/t24091/103/334342904/113413/13be9e7e/5b2c6e44N6ec010f7.jpg?width=1500&height=956" alt="">
    </div>
    <panel
      title="众筹好物" 
      mode="left" 
      no-padding="true">
      <div class="merchandise-warp">
        <div v-for="(item,index) in merchandise" :key="index" class="item-warp">
          <div class="item">
            <div class="img-warp">  <img :src="item.url" alt=""></div>
            <p class="desc">{{ item.desc }}</p>
            <p class="valueWarp"><span>￥</span>{{ item.value }}<span>起</span></p>
          </div>
        </div>
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
      navData:[
        {
          url:'https://img12.360buyimg.com/jrpmobile/jfs/t21898/125/1909014739/10638/8e305eda/5b3aefa9N37c2e0cc.png?width=120&height=120',
          name:'机票',
        },
        {
          url:'https://img12.360buyimg.com/jrpmobile/jfs/t21898/125/1909014739/10638/8e305eda/5b3aefa9N37c2e0cc.png?width=120&height=120',
          name:'机票',
        },
        {
          url:'https://img12.360buyimg.com/jrpmobile/jfs/t21898/125/1909014739/10638/8e305eda/5b3aefa9N37c2e0cc.png?width=120&height=120',
          name:'机票',
        },
        {
          url:'https://img12.360buyimg.com/jrpmobile/jfs/t21898/125/1909014739/10638/8e305eda/5b3aefa9N37c2e0cc.png?width=120&height=120',
          name:'机票',
        },
        {
          url:'https://img12.360buyimg.com/jrpmobile/jfs/t21898/125/1909014739/10638/8e305eda/5b3aefa9N37c2e0cc.png?width=120&height=120',
          name:'机票',
        },
      ],
      merchandise:[
        {
          url:'https://img30.360buyimg.com/cf/jfs/t19813/78/562857810/18222/40da28a8/5afe2e1bN99f77cda.jpg!q70.dpg',
          desc:'听声钓鱼 智能夜光鱼漂',
          value:'108.00',
        },
        {
          url:'https://img30.360buyimg.com/cf/jfs/t18154/53/1392583303/18925/ede1f5b2/5acb31c5N81a0fcf6.jpg!q70.dpg',
          desc:'听声钓鱼 智能夜光鱼漂',
          value:'108.00',
        },
        {
          url:'https://img30.360buyimg.com/cf/jfs/t20794/63/448792714/11404/319dd3ea/5b0e3ea7Nf7526f1a.jpg!q70.dpg',
          desc:'听声钓鱼 智能夜光鱼漂',
          value:'108.00',
        },
        {
          url:'https://img30.360buyimg.com/cf/jfs/t19813/78/562857810/18222/40da28a8/5afe2e1bN99f77cda.jpg!q70.dpg',
          desc:'听声钓鱼 智能夜光鱼漂',
          value:'108.00',
        },
        {
          url:'https://img30.360buyimg.com/cf/jfs/t24301/343/502526377/40673/55eb2b3e/5b334347Ne1e2b25b.jpg!q70.dpg',
          desc:'听声钓鱼 智能夜光鱼漂',
          value:'108.00',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
@import "./scss/mixin.scss";
.gift {
  display: flex;
  // height: 100px;
  img {
    height: 100%;
    width: 33.33%;
    &:nth-child(1) {
      background: #fff;
    }
  }
}
.coupon {
  margin-top: 5px;
  display: flex;
  img {
    height: 100%;
    width: 50%;
  }
}
.discount {
  // background: #ccc;
  .row2 {
    display: flex;
    padding: 0 15px;
    background: #f5f5f5;
    .column1 {
      width: 50%;
      box-sizing: border-box;
      padding-right: 2.5px;
      img {
        height: 100%;
      }
    }
    .column2 {
      padding-left: 2.5px;
      width: 50%;
      box-sizing: border-box;
      img {
        &:nth-child(1) {
          padding-bottom: 2px;
        }
        &:nth-child(2) {
          padding-top: 2px;
        }
      }
    }
  }
}
.navBar {
  @include rowNav;
}
.merchandise-warp {
  display: flex;
  flex-wrap: wrap;
  .item-warp {
    box-sizing: border-box;
    width: 50%;
    margin-bottom: 20px;
    &:nth-child(odd) {
      padding-left: 10px;
      padding-right: 5px;
    }
    &:nth-child(even) {
      padding-left: 5px;
      padding-right: 10px;
    }
    .item {
      background: #eef0f2;
      overflow: hidden;
      .img-warp {
        height: 90px;
        width: 90px;
        margin: 22px auto 10px;
      }
      .desc {
        font-size: 14px;
        font-weight: 700;
        color: #444;
        @include singleOmit();
        margin: 0 12px;
      }
      .valueWarp {
        height: 24px;
        line-height: 24px;
        text-align: center;
        margin-bottom: 8px;
        color: #ff3232;
        font-weight: 700;
        font-size: 18px;
        span {
          &:nth-child(1) {
            font-size: 14px;
            font-weight: 400;
          }
          &:nth-child(2) {
            font-size: 10px;
            padding-left: 3px;
            color: #999;
            font-weight: 400;
            position: relative;
            bottom: 1px;
          }
        }
      }
    }
  }
}
</style>