<template>
  <tab-bar>
     <tab-bar-item link="/index">
       <img slot="icon" src="~assets/img/tabBar/index.svg" alt="">
       <img slot="active-icon" src="~assets/img/tabBar/index_1.svg" alt="">
       <div slot="text">首页</div>
     </tab-bar-item>
     <tab-bar-item link="/mx">
        <img slot="icon" src="~assets/img/tabBar/mx.svg" alt="">
        <img slot="active-icon" src="~assets/img/tabBar/mx_1.svg" alt="">
        <div slot="text">分类</div>
     </tab-bar-item>
     <tab-bar-item link="/shop">
         <img slot="icon" src="~assets/img/tabBar/shop.svg" alt="">
         <img slot="active-icon" src="~assets/img/tabBar/shop_1.svg" alt="">
        <div slot="text">购物车</div>
     </tab-bar-item>
     <tab-bar-item link="/mine">
         <img slot="icon" src="~assets/img/tabBar/mine.svg" alt="">
         <img slot="active-icon" src="~assets/img/tabBar/mine_.svg" alt="">
        <div slot="text">我的</div>
     </tab-bar-item>
      <!-- <tab-bar-item>
         <img src="./assets/img/tabBar/mine.svg" alt="">
       <div>我的</div>
     </tab-bar-item> -->
    </tab-bar>
</template>

<script>
import TabBar from 'common/tabbar/TabBar'
import TabBarItem from 'common/tabbar/TabBarItem'


export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style scoped>

</style>