<template>
  <div>
    <div class="memberRow">
      <div class="icon">
        <img src="https://img12.360buyimg.com/jrpmobile/jfs/t2644/238/1420176553/1442/96e2885/573d96deN06201af5.png" alt="">
      </div>
      <div class="name"></div>
      <div class="desc">
        <span>会员福利</span><img src="http://m.jr.jd.com/spe/qyy/main/images/icon_arrow1.png" alt="">
      </div>
    </div>
    <img style="margin-bottom:10px;" src="https://img12.360buyimg.com/jrpmobile/jfs/t17458/106/2515774543/37592/beef5db/5af952b3N0a4eb5ea.jpg?width=750&height=280" alt="">
    <div class="row">
      <div class="icon">
        <img src="https://img12.360buyimg.com/jrpmobile/jfs/t8971/199/1863233880/2035/56d04776/59cb5fbdNa7c682c3.png?width=70&height=70" alt="">
      </div>
      <div class="name">我的资产</div>
      <div class="desc">
        <span>查看全部资产</span><img src="http://m.jr.jd.com/spe/qyy/main/images/icon_arrow1.png" alt="">
      </div>
    </div>
    <div class="row">
      <div class="icon">
        <img src="https://img12.360buyimg.com/jrpmobile/jfs/t8836/18/2342020923/2120/a9b7a8ff/59cb6124N31cb2889.png?width=70&height=70" alt="">
      </div>
      <div class="name">我的优惠券</div>
      <div class="desc">
        <span>查看全部</span><img src="http://m.jr.jd.com/spe/qyy/main/images/icon_arrow1.png" alt="">
      </div>
    </div>
    <div class="row">
      <div class="icon">
        <img src="https://img12.360buyimg.com/jrpmobile/jfs/t8836/18/2342020923/2120/a9b7a8ff/59cb6124N31cb2889.png?width=70&height=70" alt="">
      </div>
      <div class="name">我的优惠券</div>
      <div class="desc">
        <span>查看全部</span><img src="http://m.jr.jd.com/spe/qyy/main/images/icon_arrow1.png" alt="">
      </div>
    </div>
    <div class="row">
      <div class="icon">
        <img src="https://img12.360buyimg.com/jrpmobile/jfs/t8836/18/2342020923/2120/a9b7a8ff/59cb6124N31cb2889.png?width=70&height=70" alt="">
      </div>
      <div class="name">我的优惠券</div>
      <div class="desc">
        <span>查看全部</span><img src="http://m.jr.jd.com/spe/qyy/main/images/icon_arrow1.png" alt="">
      </div>
    </div>
    <div class="rowSimple">
      <div class="icon">
        <img src="https://img12.360buyimg.com/jrpmobile/jfs/t8836/18/2342020923/2120/a9b7a8ff/59cb6124N31cb2889.png?width=70&height=70" alt="">
      </div>
      <div class="name">我的优惠券</div>
      <div class="desc">
        <span>查看全部</span><img src="http://m.jr.jd.com/spe/qyy/main/images/icon_arrow1.png" alt="">
      </div>
    </div>
    <div class="rowSimple" style="margin:10px 0;">
      <div class="icon">
        <img src="https://img12.360buyimg.com/jrpmobile/jfs/t8836/18/2342020923/2120/a9b7a8ff/59cb6124N31cb2889.png?width=70&height=70" alt="">
      </div>
      <div class="name">实名认证</div>
      
    </div>
    <div class="rowSimple" style="margin:10px 0;">
      <div class="icon">
        <img src="https://img12.360buyimg.com/jrpmobile/jfs/t8836/18/2342020923/2120/a9b7a8ff/59cb6124N31cb2889.png?width=70&height=70" alt="">
      </div>
      <div class="name">帮助中心</div>
    </div>
  </div>
</template>

<script>
export default {
        
}
</script>

<style lang="scss" scoped>
@mixin row($line: "") {
  display: flex;
  background: #fff;
  position: relative;
  height: 56px;
  &::before {
    content: $line;
    position: absolute;
    bottom: 0px;
    left: 56px;
    height: 1px;
    transform: scaleY(0.5);
    background: #eee;
    width: 100%;
  }
  .icon {
    width: 24px;
    margin: 16px 16px 0;
  }
  .name {
    height: 56px;
    line-height: 56px;
    font-size: 16px;
  }
  .desc {
    position: absolute;
    height: 30px;
    line-height: 30px;
    margin-top: -15px;
    right: 16px;
    top: 50%;
    font-size: 14px;
    color: #999;
    img {
      width: 7px;
      display: inline-block;
      margin-left: 10px;
      vertical-align: middle;
    }
  }
}
.memberRow {
  display: flex;
  background: #fff;
  position: relative;
  height: 70px;
  margin-bottom: 10px;
  .icon {
    width: 50px;
    margin: 10px 16px 0;
  }
  .desc {
    position: absolute;
    height: 30px;
    line-height: 30px;
    margin-top: -15px;
    right: 16px;
    top: 50%;
    font-size: 14px;
    color: #999;
    img {
      width: 7px;
      display: inline-block;
      margin-left: 10px;
      vertical-align: middle;
    }
  }
}
.row {
  @include row();
}
.rowSimple {
  @include row($line: none);
}
</style>