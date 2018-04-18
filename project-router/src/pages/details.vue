<template lang="html">
  <div class="detailes-wp">
    <div class="details-left">
      <div class="details-left-img">
          <img :src="productIcon" alt="">
      </div>
      <ul class="detailes-cont">
        <!-- <li v-for="(value,key) in product.pc.list" @click='detaileLeftListClick'>
            {{value.name}}
        </li> -->
        <router-link :to="{ path: value.path }" tag='li' v-for="(value,key) in product.pc.list">{{value.name}}</router-link>
      </ul>
    </div>
    <div class="details-right">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>

  </div>
</template>

<script>
export default {
  data(){
    return{
      imgUrl:{
        '/DetailsPage/analysisPage':require('../assets/images/3.png'),
        '/DetailsPage/countPage':require('../assets/images/1.png'),
        '/DetailsPage/forecostPage':require('../assets/images/2.png'),
        '/DetailsPage/publishPage':require('../assets/images/4.png'),
      },
      product:{
        pc:{
          title:'PC产品',
          list:[
            {
              name:'开发产品',
              path: 'countPage',
              hot:true
            },
            {
              name:'品牌直销',
              url:'javaScript:;',
              path: 'forecostPage',
              hot:true
            },
            {
              name:'使命必达',
              path: 'analysisPage',
              url:'javaScript:;',
              hot:true
            },
            {
              name:'勇攀高峰',
              path: 'publishPage',
              url:'javaScript:;',
              hot:true
            },
          ]
        },
      },
    }
  },
  methods:{
    detaileLeftListClick(){
      console.log("aaa")
    }
  },
  computed:{
    productIcon(){
       //console.log(this.imgUrl,this.$route.path)
      return this.imgUrl[this.$route.path]
    }
  }
}
</script>

<style lang="css" scoped="scoped">
  .detailes-wp{
    width: 1200px;
    margin: 15px auto;
  }
  .details-left{
    width: 167px;
    height: 296px;
    background: #fff;
    float:left;
  }
  .details-left-img{
    width: 100px;
    height: 100px;
    margin: 20px auto;
  }
  .details-left-img img{
    width: 100%;
    height: 100%;
    display: block;
  }
  .detailes-cont{
    width: 100%;
    height:30px;
    line-height: 30px;
  }
  .detailes-cont li{
    font-size: 14px;
    padding-left: 18px;
    cursor: pointer;
  }
  .detailes-cont li.router-link-exact-active{
    background: #4ec18f;
    color:#fff;
  }
  .details-right{
    width: 1022px;;
    float: right;
  }
  
</style>
