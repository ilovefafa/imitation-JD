<template>
  <div class="index">
    <div class="login-header-fixed">
      <div class="login-header">
        <ul>
          <li>注册</li>
          <li>登录</li>
        </ul>
        <div class="img"></div>
        <div class="btn">APP下载</div>
      </div>
    </div>
    <slider 
      :swiper-option="sliderOption" 
      :slide-data="sliderData"
    ></slider>
    <div class="iconic-nav">
      <div class="iconic-nav-child">
        <img src="https://img12.360buyimg.com/jrpmobile/jfs/t3991/64/2521945388/12110/93c0139/58d1e462Ncf294123.png?width=132&height=132" >
        <p>优惠券</p>
        <p>100-99卷</p>
      </div>
      <div class="iconic-nav-child">
        <img src="https://img12.360buyimg.com/jrpmobile/jfs/t5590/252/875247023/17343/946aa72c/59224650N0f7ffc92.png?width=132&height=132" >
        <p>领红包</p>
      </div>
      <div class="iconic-nav-child">
        <img src="https://img12.360buyimg.com/jrpmobile/jfs/t4393/329/2180608902/13217/c88c0cec/58ec9dcdN1534e2d7.png?width=132&height=132" >
        <p style="color:red;">抢钢镚</p>
      </div>
      <div class="iconic-nav-child">
        <img src="https://img12.360buyimg.com/jrpmobile/jfs/t5488/298/1036263348/12073/b4f4de97/590ac8e8Ne9def22e.png?width=135&height=135" >
        <p>白条提额</p>
      </div>
      <div>
        <img src="https://img12.360buyimg.com/jrpmobile/jfs/t23095/339/640414013/48531/7d7396cf/5b39e732N85f572ea.jpg?width=750&height=246">
      </div>
    </div>
    <panel 
      title="理财精选" 
    >
      <div class="finance-product">
        <div class="single">
          <div class="title">
            <p > 京渤随享盈</p>
            <span>90天可抵押</span>
          </div>
          <p class="value">5.50%</p>
          <p class="desc">历史年化收益率</p>
        </div>
        <div class="single">
          <div class="title">
            <p>年年盈</p>
            <span>理财推荐</span>
          </div>
          <p class="value">5.10%</p>
          <p class="desc">综合年化收益率</p>
        </div>
        <div class="single">
          <div class="title">
            <p> 建信养老飞益鑫</p>
            <!-- <span>90天可抵押</span> -->
          </div>
          <p class="value">4.72%</p>
          <p class="desc">近7日年化收益</p>
        </div>
        <div class="single">
          <div class="title">
            <p>小白基金</p>
            <span>超短期</span>
          </div>
          <p class="value">4.50%</p>
          <p class="desc">7日年化收益率</p>
        </div>
      </div>
    </panel>
    <panel
      title="众筹新品"
      more="更多尖货"
      bottom="20">
      <slider
        :swiper-option="sliderOptionFunding"
        :slide-data="sliderDataFunding"
      ></slider>
    </panel>
    <panel 
      title="保险保障"
      bottom="20">
      <slider
        :swiper-option="sliderOptionInsurance"
        :slide-data="sliderDataInsurance"
      ></slider>
    </panel>
    <panel 
      title="有车有钱" 
      class="have-money">
      <section class="banner">
        <div class="single">
          <img src="https://img12.360buyimg.com/jrpmobile/jfs/t22336/343/1857693704/77761/86fae46f/5b39bf53Nf43770cd.png?width=375&height=233">
        </div>
        <div class="single">
          <img src="https://img12.360buyimg.com/jrpmobile/jfs/t14215/140/1757206721/24186/81b4e53c/5a56c877Nee6cfc4d.jpg?width=375&height=233" >
        </div>
      </section>
      <nav class="nav">
        <div>
          <img  
            src="https://img12.360buyimg.com/jrpmobile/jfs/t12799/50/704102454/5247/19eac80a/5a4f2622Nc4aca701.png?width=90&height=90"  
            alt="">
          <p>旅游</p>
        </div>
        <div>
          <img 
            src="https://img12.360buyimg.com/jrpmobile/jfs/t16033/196/1306232362/4705/4c678227/5a4f265bN66ef5ae8.png?width=90&height=90" 
            alt="">
          <p>医美</p>
        </div>
        <div>
          <img 
            src="https://img12.360buyimg.com/jrpmobile/jfs/t13051/63/2559290659/4702/e4068917/5a4f2693N937f1905.png?width=88&height=88" 
            alt="">
          <p>房抵贷</p>
        </div>
        <div>
          <img 
            src="https://img12.360buyimg.com/jrpmobile/jfs/t15133/16/1440686097/5786/1b038e03/5a4f26bfN03ed1f66.png?width=90&height=90" 
            alt="">
          <p>驾校</p>
        </div>
        <div>
          <img 
            src="https://img12.360buyimg.com/jrpmobile/jfs/t14896/125/1435676873/3668/a8b392f7/5a4f26edN6cdfda66.png?width=88&height=88" 
            alt="">
          <p>分期用</p>
        </div>
      </nav>
    </panel>
    <div class="footer">
      <img src="https://img12.360buyimg.com/jrpmobile/jfs/t2842/350/3035567089/14791/5f6ff93d/577cf395N31e76288.png?width=1125&height=252" >
      <div class="view-pattern">
        <div>
          <img src="https://img12.360buyimg.com/jrpmobile/jfs/t2971/333/1297567079/898/f2d2e00d/577dc28dNe5138337.png?width=108&height=108" >
          <p>客户端</p>
        </div>
        <div>
          <img src="https://img12.360buyimg.com/jrpmobile/jfs/t2824/256/2966087355/831/188bfa25/577cf3dcN18aadbf2.png?width=108&height=108" >
          <p>触屏版</p>
        </div>
        <div>
          <img src="https://img12.360buyimg.com/jrpmobile/jfs/t2920/282/1283157010/1040/23f1430b/577cf3e5N53f740b8.png?width=108&height=108" >
          <p>电脑版</p>
        </div>
      </div>
      <div class="desc">
        <p>Copyright © 2004-2018 京东JD.com 版权所有</p>
        <p>投资有风险，购买需谨慎</p>
        <p>京东金融平台服务协议</p>
        <p>京东金融隐私政策</p>
      </div>
    </div>
  </div>
  
</template>

<script>
import Slider from './components/Slider.vue'
import Panel from './components/Panel.vue'
export default {
  components:{
    Slider,
    Panel,
  },
  data(){
    return {
      sliderOption:{
        speed:1000,
        autoplay:{
          disableOnInteraction:false,
        },
        loop:'true',
        pagination: 
             {
               el: '.swiper-pagination',
             }, 
      },
      sliderOptionFunding:{
        freeMode:true,
        slidesPerView : 2.5,
        spaceBetween : 12,
        slidesOffsetBefore : 12,
        slidesOffsetAfter : 12,
      },
      sliderOptionInsurance:{
        freeMode:true,
        slidesPerView : 2.5,
        spaceBetween : 12,
        slidesOffsetBefore : 12,
        slidesOffsetAfter : 12,
      },
      sliderDataFunding:[
        {
          url:"https://img12.360buyimg.com/jrpmobile/jfs/t20368/53/1699227456/59616/e6a80ca4/5b30a580N130c8dfc.jpg?width=335&height=421",
        },
        {
          url:"https://img12.360buyimg.com/jrpmobile/jfs/t23338/182/473320295/44592/4835b8d8/5b30a593N32e80321.jpg?width=335&height=421",
        },
        {
          url:"https://img12.360buyimg.com/jrpmobile/jfs/t23323/199/462493049/28263/3d0f7cbf/5b30a5a5N3dec8fdc.jpg?width=335&height=421",
        },
      ],
      sliderDataInsurance:[
        {
          url:"https://img12.360buyimg.com/jrpmobile/jfs/t12355/171/849656870/29064/92c9bc12/5a153643N04efba6e.jpg?width=210&height=260",
        },
        {
          url:'https://img12.360buyimg.com/jrpmobile/jfs/t9697/338/291348712/12737/27e1204/59cb6304Naef85042.jpg?width=210&height=260',
        },
        {
          url:'https://img12.360buyimg.com/jrpmobile/jfs/t10360/347/311063647/10881/14a5cd40/59cb632fNcac82571.jpg?width=210&height=260',
        },
        {
          url:'https://img12.360buyimg.com/jrpmobile/jfs/t13927/226/2090083878/14208/2746192a/5a31dde6Nbba7f26c.png?width=210&height=260',
        },
        {
          url:'https://img12.360buyimg.com/jrpmobile/jfs/t9703/119/296348375/11253/b9bc3ce7/59cb637dNf25b0dff.jpg?width=210&height=260',
        },
      ],
      sliderData:[
        {
          url:"https://img12.360buyimg.com/jrpmobile/jfs/t20758/100/1927641061/42355/56c96026/5b3cb490N65d71875.jpg?width=750&height=320",

        },
        {
          url:"https://img12.360buyimg.com/jrpmobile/jfs/t22828/316/643081491/38351/aeacfb66/5b3a0166N5b9aaef2.jpg?width=750&height=320",
        },
        {
          url:"https://img12.360buyimg.com/jrpmobile/jfs/t22648/2/639513559/47403/beab48b1/5b3a01a3Naf2f7390.jpg?width=750&height=320",
        },
      ],
    }
  },
}
</script>

<style lang='scss' scoped>
.index {
  margin-top: 60px;
  .login-header-fixed {
    position: fixed;
    top: 45px;
    left: 0;
    width: 100%;
    z-index: 999;
    .login-header {
      position: relative;
      background: #f9f9f9;
      height: 50px;
      margin-bottom: 10px;
      ul {
        position: absolute;
        top: 16px;
        left: 12px;
        li {
          font-size: 14px;
          color: #666;
          float: left;
          &:nth-child(1) {
            &:before {
              content: "";
              padding-left: 0;
            }
          }
          &:before {
            content: "|";
            padding: 0 5px;
          }
        }
      }
      .img {
        position: absolute;
        background: url("//m.jr.jd.com/spe/qyy/main/images/jr-logo.png")
          no-repeat no-repeat center center;
        background-size: 100%;
        width: 105px;
        height: 30px;
        top: 8px;
        left: 0;
        right: 0;
        margin: 0 auto;
        //   display: block;
      }
      .btn {
        position: absolute;
        right: 12px;
        top: 9px;
        font-size: 12px;
        background: #f04752;
        height: 28px;
        width: 60px;
        color: #ffffff;
        border-radius: 2px;
        line-height: 28px;
        text-align: center;
      }
    }
  }

  .iconic-nav {
    background: #ffffff;
    padding-top: 20px;
    overflow: hidden;
    .iconic-nav-child {
      float: left;
      width: 80px;
      img {
        display: block;
        width: 45px;
        height: 45px;
        margin: 0 auto;
      }
      p {
        text-align: center;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        &:nth-child(2) {
          font-size: 13px;
          color: #666;
          margin-top: 8px;
        }
        &:nth-child(3) {
          color: #ff0000;
          font-size: 11px;
          margin-top: 6px;
        }
      }
    }
  }
  .finance-product {
    overflow: hidden;
    .single {
      width: 50%;
      box-sizing: border-box;
      padding-left: 16px;
      float: left;
      height: 109px;
      border-bottom: 1px solid #eee;
      position: relative;
      &:nth-child(odd) {
        &::after {
          content: "";
          width: 1px;
          height: 68px;
          background-color: #eee;
          transform: rotate(90);
          position: absolute;
          right: 0;
          top: 25px;
        }
      }
      .title {
        overflow: hidden;
        margin: 17px 0 8px;
        position: relative;

        p {
          color: #333;
          font-weight: 700;
          font-size: 15px;
          float: left;
          height: 20px;
          line-height: 20px;
        }
        span {
          float: left;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          display: block;
          height: 17px;
          line-height: 17px;
          border: 1px solid #ff5155;
          color: #ff5155;
          font-size: 11px;
          top: 0;
          position: relative;
          right: -2px;
          padding: 0 4px;
          font-weight: 400;
        }
      }
      p {
        &:nth-child(2) {
          color: #ff5155;
          font-size: 22px;
          font-weight: 700;
          line-height: 29px;
          height: 29px;
        }
        &:nth-child(3) {
          line-height: 17px;
          height: 17px;
          color: #999;
          font-size: 12px;
        }
      }
    }
  }
  .have-money {
    .banner {
      font-size: 0;
      .single {
        width: 50%;
        box-sizing: border-box;
        display: inline-block;
      }
    }
    .nav {
      padding-top: 40px;
      padding-bottom: 5px;
      display: flex;
      text-align: center;
      div {
        img {
          width: 45px;
          height: 45px;
        }
        p {
          font-size: 13px;
          color: #666;
          margin-top: 7px;
        }
        margin: 0 auto;
      }
    }
  }
  .footer {
    margin-bottom: 60px;
    .view-pattern {
      padding-top: 20px;
      display: flex;
      justify-content: space-around;
      margin-bottom: 10px;
      div {
        text-align: center;
        img {
          width: 45px;
          height: 45px;
        }
        p {
          font-size: 13px;
          color: #999999;
          margin-top: 7px;
        }
      }
    }
    .desc {
      text-align: center;
      p {
        position: relative;
        font-size: 12px;
        line-height: 1.6;
        color: #999;
        padding: 12px 0;

        &::before {
          position: absolute;
          left: 0;
          top: 0;
          content: "";
          display: block;
          height: 1px;
          width: 200%;
          left: -50%;
          background-color: #ddd;
          transform: scale(0.5);
        }
      }
    }
  }
}
</style>