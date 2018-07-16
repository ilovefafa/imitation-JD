<template>
  <div class="warp">
    <div class="left">
      <div v-if="mode==='circle'" class="circle">
        <p class="whiteDesc">{{ data.desc }}</p>
      </div>
      <div v-if="mode!=='circle'">
        <p v-if="mode==='recommand'" class="recommand">今日推荐</p>
        <p class="value">{{ data.value }}</p>
        <p class="desc">{{ data.desc }}</p>
      </div>
      <p :class="{circleButton:mode==='circle'}" class="button">{{ data.button }}</p>
    </div>
    <div class="right">
      <div class="right-warp">
        <div v-for="item in data.icon" :key="item.url" class="item">
          <img :src="item.url" alt="">
          <p>{{ item.desc }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:['data','mode','circle'],

}
</script>

<style lang="scss" scoped>
@import "../scss/mixin.scss";
.warp {
  font-size: 0;
  margin-bottom: 8px;
  .left {
    display: inline-block;
    width: 105px;
    height: 130px;
    margin-right: 8px;
    text-align: center;
    box-shadow: 0 0 0.625rem 0.03125rem rgba(101, 118, 155, 0.15);
    position: relative;
    overflow: hidden;
    .circle {
      margin: 8px auto 7px;
      height: 92px;
      width: 92px;
      position: relative;
      background: url("~@images/whiteBar.png") top no-repeat;
      background-size: contain;
      .whiteDesc {
        color: #c4a36c;
        font-size: 12px;
        height: 17px;
        line-height: 17px;
        top: 30px;
        position: absolute;
        left: 0;
        text-align: center;
        width: 100%;
      }
    }
    .recommand {
      position: absolute;
      top: 0;
      left: 0;
      color: #fff;
      background-color: black;
      font-size: 10px;
      height: 16px;
      line-height: 16px;
      padding: 0 6px;
    }
    .value {
      font-size: 25px;
      font-family: "DIN--BOLD";
      margin-top: 31px;
      color: rgb(27, 213, 199);
    }
    .desc {
      font-size: 12px;
      height: 17px;
      line-height: 17px;
      margin-bottom: 12px;
    }
    .button {
      margin: 0 auto;
      color: #fff;
      font-size: 10px;
      height: 25px;
      line-height: 25px;
      width: 70px;
      padding: 0 6px;
      background-color: rgb(27, 213, 199);
      text-align: center;
      border-radius: 15px;
    }
    .circleButton {
      position: relative;
      bottom: 15px;
      left: 0;
      background-color: #d4b575;
    }
  }
  .right {
    @include boxShadow;
    .right-warp {
      @include rowNav(
        $flex-wrap: wrap,
        $imgWidth: 28px,
        $imgHeight: 28px,
        $fontSize: 12px,
        $marginTop: 0,
        $divHeight: 65px,
        $divWidth: 33.33%,
        $imgMarginTop: 10px,
        $imgMarginBottom: 1px,
        $padding: 0
      );
    }
    display: inline-block;
    vertical-align: top;
    height: 130px;
    width: 176px;
  }
}
</style>