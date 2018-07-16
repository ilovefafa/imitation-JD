<template>
  <div class="make-money">
    <Panel class="banner">
      <div class="fixed-img">
        <img src="https://img12.360buyimg.com/jrpmobile/jfs/t21946/193/1465725809/15772/5f47e465/5b2a3b82N6a3aec1d.png?width=750&height=120" alt="">
      </div>
      <slider 
        :slide-data="sliderData"
        class="slider" 
      ></slider>
      <div class="sign-in">
        <div class="up-box">
          <div class="memberButton">会员等级</div>
          <div class="desc">立即登录 马上赚钱！</div>
          <div class="signinButton">签到</div>
        </div>
      </div>
      <div class="row-nav">
        <div>
          <img src="https://img12.360buyimg.com/jrpmobile/jfs/t21823/209/1497811121/5076/dfe2d74f/5b2a56b8Nf044e64a.png?width=90&height=90" alt="">
          <p>领红包</p>
        </div>
        <div>
          <img src="https://img12.360buyimg.com/jrpmobile/jfs/t22465/87/248883325/5159/f8133cd6/5b2a56c7N4c04f536.png?width=90&height=90" alt="">
          <p>领福利</p>
        </div>
        <div>
          <img src="https://img12.360buyimg.com/jrpmobile/jfs/t19951/84/1939351464/4169/de69ccb0/5b2a56d2Ne7f7eae3.png?width=90&height=90" alt="">
          <p>领卷</p>
          <span>领现金</span>
        </div>
        <div>
          <img src="https://img12.360buyimg.com/jrpmobile/jfs/t22084/101/1500577052/4856/13f8bcb9/5b2a56d9Ne622413c.png?width=90&height=90" alt="">
          <p>支付抽奖</p>
        </div>
        <div>
          <img src="https://img12.360buyimg.com/jrpmobile/jfs/t22060/186/1461366163/3943/bed46aef/5b2a56e2Na4227ae7.png?width=90&height=90" alt="">
          <p>全部</p>
        </div>
      </div>
      <img style="margin-top:7px;" src="https://img12.360buyimg.com/jrpmobile/jfs/t22375/348/1946619980/53612/5abf594/5b3dfb59N84b22aab.jpg?width=750&height=280" alt="">
      <div class="recommend">
        <div class="margin">
          <div class="left">
            <p>13.99%</p>
            <p>近一年涨跌幅</p>
            <p>立即购买</p>
          </div> 
        </div>
        <div class="right">
          <div class="background">
            <VerticalSlider :data="columnSliderData">
            </VerticalSlider>
            <div class="icon">
              为你推荐
            </div>
          </div>
        </div>
      </div>
      <img style="margin:15px 0;" src="https://img12.360buyimg.com/jrpmobile/jfs/t20377/234/1512692244/37538/71f03c74/5b2b878cN1b0824ee.jpg?width=750&height=246" alt="">
    </Panel>
    <panel class="xjk"
           title="小金库"
           more="更多理财产品"
           mode="left">
      <div class="wrap">
        <p class="benefit">4.9930%</p>
        <p class="title">七日年化收益</p>
        <p class="desc">支付/缴费/优质理财/大额理财</p>
        <div class="btn">开启送礼包</div>
      </div>
      <div class="group">
        <p class="group-title">稳健灵活 小白精选</p>
        <slider
          :slide-data="choicenessData"
          :space-between="8"
          mode="freeMode"
          custom="true"
        >
          <div slot-scope="props" class="slider-item">
            <p class="title">{{ props.data.title }}</p>
            <p class="label">{{ props.data.label }}</p>
            <p class="value">{{ props.data.value }}</p>
            <p class="desc">{{ props.data.desc }}</p>
          </div>
        </slider>
      </div>
      <div class="group">
        <p class="group-title">银行+ 银行服务精选</p>
        <slider
          :slide-data="bankData"
          mode="freeMode"
        ></slider>
      </div>
    </panel>
    <panel
      title="京东众筹"
      more="好生活 享品质"
      mode="left">
      <left-right
        :data="crowdFundingData"
        mode="recommand">
      </left-right>
    </panel>
    <panel
      title="保险保障"
      mode="left">
      <left-right
        :data="insuranceData"
        mode="recommand">
      </left-right>
      <img style="margin-left:-4.6875vw;width:100vw" src="https://img12.360buyimg.com/jrpmobile/jfs/t23077/226/690093553/30932/c921216b/5b3df33fN6a7676ea.jpg?width=750&height=200" alt="">
      <div class="group">
        <p class="group-title">热销保险</p>
        <slider
          :slide-data="
            [
              {
                url:'https://img12.360buyimg.com/jrpmobile/jfs/t21862/243/1993479769/20002/1d5ca6c5/5b440d1fNca3be19a.jpg?width=210&height=260'
              },
              {
                url:'https://img12.360buyimg.com/jrpmobile/jfs/t23614/362/828401890/12518/35712ec5/5b440d34Ncf587248.jpg?width=210&height=260'
              },
              {
                url:'https://img12.360buyimg.com/jrpmobile/jfs/t21445/320/1086137013/19781/786cbe42/5b1f9a3bN7f56be28.jpg?width=210&height=260'
              }
          ]"
          mode="freeMode"
        ></slider>
      </div>
      <img style="width:100vw;margin-left:-4.6875vw;margin-top:3.125vw" src="https://img12.360buyimg.com/jrpmobile/jfs/t19756/137/1902911799/17823/e19ffe7b/5add9511Nf6984e89.jpg?width=750&height=200" alt="">
    </panel>
    <panel
      more="年轻不留白"
      title="白条"
      mode="left">
      <left-right
        :data="whiteBarData"
        mode="circle"
      >
      </left-right>
      <img class="img-adjust" src="https://img12.360buyimg.com/jrpmobile/jfs/t20746/93/1719082958/12040/306a2296/5b31b40dNeefe4c3c.png?width=750&height=200" alt="">
    </panel>
    <panel
      :bottom="0"
      title="特色推荐"
      mode="left"  
      no-padding="true">
      <merchandise
        :data="merchandiseData"></merchandise>
      <p class="statement">-   京东金融出品  -</p>

    </panel>
    <div class="ghost-btn">
      <img src="https://img12.360buyimg.com/jrpmobile/jfs/t22375/177/2057445461/7391/824012b3/5b45a8e9Nfb312099.gif?width=150&height=150" alt="">
    </div>
  </div>
</template>

<script>
import Slider from './components/Slider.vue';
import Panel from './components/Panel.vue';
import VerticalSlider from './components/VerticalSlider.vue';
import leftRight from './components/leftRight.vue';
import merchandise from './components/merchandise.vue';

export default {
  components: {
    Slider,
    Panel,
    VerticalSlider,
    leftRight,
    merchandise,
  },
  data() {
    return {
      sliderData: [
        {
          url:
            'https://img12.360buyimg.com/jrpmobile/jfs/t22306/42/1889159364/23446/c9bcb521/5b3cac91N83129631.jpg?width=750&height=400',
        },
        {
          url:
            'https://img12.360buyimg.com/jrpmobile/jfs/t22540/4/681331733/36581/d3894ef4/5b3cac98N548a33e8.jpg?width=750&height=400',
        },
        {
          url:
            'https://img12.360buyimg.com/jrpmobile/jfs/t19969/137/2363070307/49761/22a7445b/5b3cac9fN92e4d8d8.jpg?width=750&height=400',
        },
      ],
      columnSliderData: [
        { 
          url:
            'https://img12.360buyimg.com/jrpmobile/jfs/t21733/190/1884563179/11215/e8d7ee16/5b3c71abN86934de2.jpg?width=160&height=160',
          desc: '268元买赠 限量爱心项链',
        },
        {
          url:
            'https://img12.360buyimg.com/jrpmobile/jfs/t23332/309/677724777/11456/92585555/5b3c717cN0692697e.jpg?width=160&height=160',
          desc: '28元起低价抢 世界杯纪念品',
        },
        {
          url:
            'https://img12.360buyimg.com/jrpmobile/jfs/t24571/345/671210253/11995/f8d2bd94/5b3c719dN30776011.jpg?width=160&height=160',
          desc: '58元超值抢 健康精品柿房茶',
        },
      ],
      choicenessData:[
        {
          title:'月月盈1',
          label:'金融专享',
          value:'4.70%',
          desc:'近七日年化收益率',
        },
        {
          title:'月月盈2',
          label:'金融专享',
          value:'4.70%',
          desc:'近七日年化收益率',
        },
        {
          title:'月月盈3',
          label:'金融专享',
          value:'4.70%',
          desc:'近七日年化收益率',
        },
        {
          title:'月月盈4',
          label:'金融专享',
          value:'4.70%',
          desc:'近七日年化收益率',
        },
      ],
      bankData:[
        {
          url:'https://img12.360buyimg.com/jrpmobile/jfs/t20638/45/788293331/14111/511b55b0/5b17a30dN687a4335.png?width=210&height=260',
        },
        {
          url:'https://img12.360buyimg.com/jrpmobile/jfs/t20938/65/1799990374/14680/89fc64f3/5b3618ddNe01d7d8d.png?width=210&height=260',
        },
        {
          url:'https://img12.360buyimg.com/jrpmobile/jfs/t20842/183/774592744/14888/e33804ee/5b17a32aN2482a649.png?width=210&height=260',
        },
      ],
      crowdFundingData:{
        value:'0.01元',
        desc:'抢好物',
        button:'立即抢购',
        icon:[
          {
            url:'https://img12.360buyimg.com/jrpmobile/jfs/t9739/355/2223965438/3092/b3cc4062/59f2fef3Nc2363e64.png?width=56&height=56',
            desc:'京东出众',
          },
          {
            url:'https://img12.360buyimg.com/jrpmobile/jfs/t10882/187/2325566882/2968/e64c911c/59f2ff2cNd85eb522.png?width=56&height=56',
            desc:'手机优惠',
          },
          {
            url:'https://img12.360buyimg.com/jrpmobile/jfs/t11674/229/560588342/2307/d88f9fd7/59f2ff5eNcac8d195.png?width=56&height=56',
            desc:'领神券',
          },
          {
            url:'https://img12.360buyimg.com/jrpmobile/jfs/t10018/213/2260133396/2902/107476f0/59f2ff70N35c5d0bb.png?width=56&height=56',
            desc:'智能首发',
          },
          {
            url:'https://img12.360buyimg.com/jrpmobile/jfs/t7552/255/3352153359/2695/fc610922/59f2ff88N95232a40.png?width=56&height=56',
            desc:'舌尖美味',
          },
          {
            url:'https://img12.360buyimg.com/jrpmobile/jfs/t9523/348/2258037555/2792/9e8e1a80/59f2ff9fNf9648450.png?width=56&height=56',
            desc:'轻时尚',
          },
        ],
      },
      insuranceData:{
        value:'135万',
        desc:'健康意外财产',
        button:'免费领取',
        icon:[
          {
            url:'https://img12.360buyimg.com/jrpmobile/jfs/t8881/304/1359242815/2540/5ef07179/59b90050N62f41061.png?width=56&height=56',
            desc:'京东出众',
          },
          {
            url:'https://img12.360buyimg.com/jrpmobile/jfs/t9040/57/2313007861/3024/82c36c44/59ca556eNb605e901.png?width=56&height=56',
            desc:'手机优惠',
          },
          {
            url:'https://img12.360buyimg.com/jrpmobile/jfs/t9283/283/1383600733/3117/82a51164/59b900cfNe88db318.png?width=56&height=56',
            desc:'领神券',
          },
          {
            url:'https://img12.360buyimg.com/jrpmobile/jfs/t8929/33/1393593833/1749/1e115bd7/59b900e6N73c7b311.png?width=56&height=56',
            desc:'智能首发',
          },
          {
            url:'https://img12.360buyimg.com/jrpmobile/jfs/t8902/275/1411242449/2807/a2cc902a/59b90111N4e88098c.png?width=56&height=56',
            desc:'舌尖美味',
          },
          {
            url:'https://img12.360buyimg.com/jrpmobile/jfs/t8962/170/1384497943/2594/aa2a2ad9/59b9011bNf3b01bea.png?width=56&height=56',
            desc:'轻时尚',
          },
        ],
      },
      whiteBarData:{
        desc:'小白信用分',
        button:'登录查看',
        icon:[
          {
            url:'https://img12.360buyimg.com/jrpmobile/jfs/t8803/130/802395570/1891/103bedf1/59af980eN987fd5c2.png?width=56&height=56',
            desc:'白条',
          },
          {
            url:'https://img12.360buyimg.com/jrpmobile/jfs/t9373/154/878445473/2758/410dc92d/59b901f5Nc93edaac.png?width=56&height=56',
            desc:'手机优惠',
          },
          {
            url:'https://img12.360buyimg.com/jrpmobile/jfs/t9391/169/1385525558/2762/2d29f1d5/59b90214N4f745107.png?width=56&height=56',
            desc:'领神券',
          },
          {
            url:'https://img12.360buyimg.com/jrpmobile/jfs/t7246/167/3036813324/1578/d4ae001e/59b90228Nd61b6465.png?width=56&height=56',
            desc:'智能首发',
          },
          {
            url:'https://img12.360buyimg.com/jrpmobile/jfs/t8422/203/1374629409/2823/430e740d/59b90230N09140aba.png?width=56&height=56',
            desc:'舌尖美味',
          },
          {
            url:'https://img12.360buyimg.com/jrpmobile/jfs/t7618/313/3082994165/3330/e1692006/59b90247Nac3c9ebe.png?width=56&height=56',
            desc:'轻时尚',
          },
        ],
      },
      merchandiseData:[
        {
          url:'http://img30.360buyimg.com/cf/jfs/t22861/119/752192056/87303/fd6501a4/5b3f47f3Na600befd.jpg!q70.dpg',
          title:'狼人杀官方卡牌2018',
          price:'48.00',
          progressValue:'109',
        },
        {
          url:'http://img30.360buyimg.com/cf/jfs/t21241/263/1943181480/40184/638a58a3/5b42d4ccN30853b05.jpg!q70.dpg',
          title:'唯生活3万透气孔超干爽内裤',
          price:'99.00',
          progressValue:'9999',
        },
        {
          url:'http://img30.360buyimg.com/cf/jfs/t20068/277/1805261234/84298/4d082d3/5b271407Nda85af5b.jpg!q70.dpg',
          title:'1布去车漆刮痕-划痕传奇布',
          price:'48.00',
          progressValue:'65',
        },
        {
          url:'http://img30.360buyimg.com/cf/jfs/t21226/276/389169737/65406/752a3c16/5b0bb9b7N25a30e47.jpg!q70.dpg',
          title:'手机膜法传奇-1擦秒变新机',
          price:'48.00',
          progressValue:'65',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "./scss/mixin.scss";
.make-money {
  overflow: hidden;
  .fixed-img {
    position: fixed;
    top: 45px;
    z-index: 99999;
    width: 100%;
  }
  .banner {
    .slider {
      img {
        width: 320px;
        height: 400px;
      }
    }
    .sign-in {
      height: 65px;
      position: relative;
      .up-box {
        width: 288px;
        height: 65px;
        background: #ffffff;
        position: relative;
        top: -5px;
        margin: 0 auto;
        border-radius: 2px;
        box-shadow: 0 0 10px 0.5px rgba(101, 118, 155, 0.15);
        z-index: 99;
        .memberButton {
          position: absolute;
          left: 10px;
          top: 15px;
          height: 33px;
          line-height: 33px;
          border-radius: 2px;
          box-shadow: 0 3px 4px 0 hsla(41, 44%, 63%, 0.51);
          width: 46px;
          text-align: center;
          font-size: 9px;
          color: #fff;
          background: url(data:image/png;base64,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);
          background-size: 100%;
        }
        .signinButton {
          text-align: center;
          position: absolute;
          right: 10px;
          top: 15px;
          height: 33px;
          line-height: 33px;
          font-size: 12px;
          color: #fff;
          width: 70px;
          background: url(data:image/png;base64,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);
          background-position: 50%;
          background-repeat: no-repeat;
          background-size: cover;
          box-shadow: 0 4px 6px 0 hsla(40, 41%, 61%, 0.41);
          border-radius: 15px;
        }
        .desc {
          height: 65px;
          line-height: 65px;
          text-align: center;
          color: #c6a76f;
          font-size: 14px;
        }
      }
    }
    .row-nav {
      @include rowNav(10px);
    }
    .recommend {
      width: 100%;
      overflow: hidden;
      .margin {
        padding-left: 15px;
        width: 36%;
        box-sizing: border-box;
        float: left;
        height: 100px;
        .left {
          background: url(data:image/png;base64,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);
          color: #fff;
          height: 100px;

          padding: 10px;
          p {
            &:nth-child(1) {
              font-family: "DIN--BOLD";
              font-size: 25px;
              padding-bottom: 10px;
            }
            &:nth-child(2) {
              position: relative;
              font-size: 10px;
              padding-bottom: 6px;
              margin-bottom: 6px;
              &::after {
                position: absolute;
                width: 100%;
                left: 0;
                bottom: 0;
                // margin: 5px 0;
                content: "";
                height: 0.4px;
                background: hsla(0, 0%, 100%, 0.3);
              }
            }
            &:nth-child(3) {
              font-size: 13px;
              font-weight: 500;
            }
          }
        }
      }
      .right {
        position: relative;
        padding: 0 15px 0 8px;
        width: 64%;
        float: left;
        box-sizing: border-box;
        .background {
          background: url(data:image/png;base64,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);
          background-position: 50%;
          background-repeat: no-repeat;
          background-size: cover;
        }
        .icon {
          position: absolute;
          bottom: 12px;
          left: 108px;
          font-size: 12px;
          color: #fff;
          &::after {
            content: "";
          }
        }
      }
    }
  }
  .xjk {
    .wrap {
      color: #fff;
      height: 100px;
      padding-left: 14px;
      position: relative;
      background: url("~@images/xjk.png") 50% no-repeat;
      background-size: cover;
      font-size: 12px;
      .benefit {
        font-family: "DIN--BOLD";
        font-size: 30px;
        padding-top: 12px;
        height: 36px;
        line-height: 36px;
        position: relative;
        width: 140px;
        &::before {
          content: "";
          position: absolute;
          height: 1px;
          bottom: 0;
          left: 0;
          display: block;
          background: #fff;
          width: 100%;
          transform: scaleY(0.5);
          opacity: 0.3;
        }
      }
      .title {
        padding: 4px 0 2px 0;
        height: 17px;
        line-height: 17px;
      }
      .desc {
        opacity: 0.6;
        height: 17px;
        line-height: 17px;
      }
      .btn {
        position: absolute;
        height: 100px;
        width: 166px;
        top: 0;
        right: 0;
        background: url("https://m.jr.jd.com/spe/qyy/hzq/ac3595803ef2dfd8530f13be01cbdead.png")
          50% no-repeat;
        background-size: contain;
        line-height: 100px;
        text-align: center;
      }
    }
  }
  .group {
    .group-title {
      height: 50px;
      line-height: 50px;
      font-size: 14px;
      background: #fff;
    }
    .swiper-slide {
      width: 105px !important;
      height: 130px !important;
    }
    .slider-item {
      margin: -2px 0;
      padding: 2px 15px;
      box-sizing: border-box;
      height: 130px;
      box-shadow: 0 0 0.625rem 0.03125rem rgba(101, 118, 155, 0.15);
      // background: #fff;
      // width: 105px;

      .title {
        font-size: 16px;
        font-family: PingFangSC-Semibold;
        padding: 19px 0 5px 0;
        border-radius: 2px;
      }
      .label {
        color: #fff;
        font-size: 10px;
        border-radius: 11px;
        background-image: linear-gradient(#5e8fff, #2f6fff);
        min-width: 50px;
        text-align: center;
        display: inline-block;
        height: 16px;
        line-height: 16px;
      }
      .value {
        font-size: 25px;
        font-family: "DIN--BOLD";
        height: 30px;
        line-height: 30px;
        color: red;
      }
      .desc {
        font-size: 10px;
        color: #999;
        padding-top: 4px;
      }
    }
  }
}
.img-adjust {
  width: 100vw;
  margin-left: -4.6875vw;
  margin-top: 3.125vw;
}
.statement {
  text-align: center;
  height: 50px;
  line-height: 50px;
  font-size: 10px;
  color: #b1b4bb;
  background: #f3f5f7;
}
.ghost-btn {
  height: 50px;
  width: 50px;
  position: fixed;
  right: 16px;
  bottom: 138px;
  z-index: 999;
}
</style>
