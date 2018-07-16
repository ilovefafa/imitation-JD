<template>
  <div class="warp">
    <div v-for="item in data" :key="item.url" class="item">
      <div class="item-content">
        <img :src="item.url" alt="">
        <p class="title">{{ item.title }}</p>
        <p class="price"><span class="yuan">￥</span>{{ item.price }}<span class="orgin">起</span></p>
        <div class="progress-warp">
          <div class="progress">
            <div :style="{width:(item.progressValue>100?100:item.progressValue)+'%'}" class="progress-inner"></div>
          </div>
          <span>{{ comProgress(item.progressValue) }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:['data'],
  methods:{
    comProgress(progressValue){
      if (progressValue>999){
        progressValue = 999
        return `≥${progressValue}%`
      }
      return progressValue+'%'
    },
  },
}
</script>

<style lang="scss" scoped>
.warp {
  background-color: rgb(243, 245, 247);
  overflow: hidden;
  .item {
    box-sizing: border-box;
    width: 50%;
    float: left;
    margin-bottom: 4px;
    background-color: rgb(243, 245, 247);
    overflow: hidden;
    .item-content {
      background-color: #fff;
      overflow: hidden;
    }
    &:nth-child(odd) {
      padding-right: 2px;
    }
    &:nth-child(even) {
      padding-left: 2px;
    }
    img {
      margin: 22px 0 10px;
      padding: 0 22px;
      box-sizing: border-box;
    }
    .title {
      color: rgb(51, 51, 51);
      font-size: 15px;
      height: 21px;
      line-height: 27px;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      margin: 11px 0 11px 15px;
    }
    .price {
      color: #ff9a1c;
      font-family: "DIN--BOLD";
      margin-bottom: 7px;
      font-size: 17px;
      padding-left: 15px;
      .yuan {
        font-size: 11px;
      }
      .orgin {
        color: rgb(153, 153, 153);
        font-family: STHeitiSC-Medium;
        font-size: 11px;
        margin-left: 5px;
      }
    }
    .progress-warp {
      margin-bottom: 13px;
      padding: 0 15px;
      overflow: hidden;
      .progress {
        width: 70%;
        height: 5px;
        border-radius: 10px;
        margin-top: 5px;
        background: #f3f5f7;
        float: left;
        .progress-inner {
          width: 50%;
          background-image: linear-gradient(270deg, #f55 1%, #ff9c31);
          border-radius: 10px;
          height: 5px;
        }
      }
      span {
        font-size: 10px;
        color: #999;
        margin-left: 3px;
        float: left;
        height: 12px;
        line-height: 12px;
      }
    }
  }
}
</style>