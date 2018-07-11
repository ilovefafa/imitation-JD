<template>
  <div>
    <div class="bottom-nav">
      <div v-for="item in navData" :key="item.url">
        <router-link :to="item.route">
          <img :src="activeRoute===item.route?item.activeUrl:item.url" alt="">
          <p>{{ item.name }}</p>
        </router-link>
      </div>
    </div>
    <section class="placeHolder"></section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navData: [
        {
          url:
            'https://img12.360buyimg.com/jrpmobile/jfs/t17587/158/1300523690/1908/eabacaac/5ac4850bNdf876dd8.png?width=60&height=60',
          name: '首页',
          route: '/',
          activeUrl:
            'https://img12.360buyimg.com/jrpmobile/jfs/t17650/174/1729132233/4020/2b09fc25/5ad6aac4N620fbed1.png?width=60&height=60',
        },
        {
          url:
            'https://img12.360buyimg.com/jrpmobile/jfs/t7690/252/3621724688/1715/757a3ca1/59e9d81bN27304850.png?width=60&height=60',
          name: '赚钱',
          route: '/MakeMoney',
          activeUrl:
            'https://img12.360buyimg.com/jrpmobile/jfs/t9922/341/1927418106/3391/75795250/59e9d7e9N1289d306.png?width=60&height=60',
        },

        {
          url:
            'https://img12.360buyimg.com/jrpmobile/jfs/t11653/76/201131398/1192/bf1b2852/59e9d7f3N5f691137.png?width=60&height=60',
          name: '借钱',
          route: '/BorrowMoney',
          activeUrl:
            'https://img12.360buyimg.com/jrpmobile/jfs/t10717/7/1897882784/3005/9f66e191/59e9d826Nadb4e6db.png?width=60&height=60',
        },
        {
          url:
            'https://img12.360buyimg.com/jrpmobile/jfs/t19729/201/1027312338/1395/95cecd48/5ab85d0eN01f81011.png?width=56&height=56',
          name: '省钱',
          route: '/SaveMoney',
          activeUrl:
            'https://img12.360buyimg.com/jrpmobile/jfs/t19663/262/787103169/1654/ffffd4b/5aaa44adN4d5e3560.png?width=56&height=56',
        },
        {
          url:
            'https://img12.360buyimg.com/jrpmobile/jfs/t10897/141/1894216742/2046/ad0e8dc1/59e9d7feNaa5dd2fd.png?width=60&height=60',
          name: '金融会员',
          route: '/Member',
          activeUrl:
            'https://img12.360buyimg.com/jrpmobile/jfs/t11191/356/198417818/3320/c18da9bd/59e9d86aN8d1daea3.png?width=60&height=60',
        },
      ],
    };
  },
  computed: {
    activeRoute() {
      document.title = this.$route.meta.title;
      return this.$route.path;
    },
  },
};
</script>

<style lang="scss" scoped>
.bottom-nav {
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  background: #fff;
  box-shadow: 0 -3px 4px rgba(0, 0, 0, 0.03);
  z-index: 100000;
  height: 50px;
  div {
    text-align: center;
    // width: 64px;
    .router-link-exact-active {
      p {
        color: rgb(70, 104, 255);
      }
    }
    img {
      width: 22px;
      margin: 0 auto;
    }
    p {
      color: #b1b4bb;
      font-size: 11px;
      height: 14px;
      line-height: 14px;
      padding-top: 4px;
    }
  }
}
section {
  height: 50px;
}
</style>
