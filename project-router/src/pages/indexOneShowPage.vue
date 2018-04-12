<template lang="html">
  <div class="indexOneShowPage">
      <div class="index-one-left">
        <div class="all-product">
            <h2 class='all-product-title'>全部产品</h2>
            <div class="all-product-cont" v-for='productList in product'>
                <h3>{{productList.title}}</h3>
                <ul v-for='productListName in productList.list'>
                  <li>
                      <a :href="productListName.url">{{productListName.name}}</a>
                      <span v-if='productListName.hot'>hot</span>
                  </li>
                </ul>
            </div>
            <h2 class='all-product-title all-product-title-top'>最新消息</h2>
            <div class="all-product-cont">
                <ul>
                  <li v-for='(item,index) in newList'>
                      <a :href='item.ulr'>{{item.title}}</a>
                  </li>
                </ul>
            </div>
        </div>
      </div>
      <div class="index-one-right">
        <div class="index-banner">

        </div>
        <div class="index-list-wp">
            <div class="index-list" v-for="(item,index) in newList" :class="{'index-list-last':index % 2 !==0}">
              <div class="index-list-img" :class="['index-list-images-'+item.id]"></div>
              <div class="index-list-font">
                <h4>{{item.title}}</h4>
                <p>{{item.cont}}</p>
                <a href="javaScript:;">{{item.acont}}</a>
              </div>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      newList:[
        {
          title:'开发产品',
          cont:'开放产品是一款开放产品，是我们快速的进去开发模式，更高，更快有效的提高我们的开发效率',
          acont:'立即购买',
          ulr:'javaScript:;',
          id:'erath',
        },
        {
          title:'品牌营销',
          cont:'品牌营销帮助你的产品更好的找到定位',
          ulr:'javaScript:;',
          acont:'立即购买',
          ulr:'javaScript:;',
          id:'car',
        },
        {
          title:'使命必达',
          cont:'使命必达快速迭代永远保持最前端的速度 ',
          ulr:'javaScript:;',
          acont:'立即购买',
          ulr:'javaScript:;',
          id:'speaker',
        },
        {
          title:'勇攀高峰',
          cont:'帮你勇闯高峰，到达事业的顶峰',
          ulr:'javaScript:;',
          acont:'立即购买',
          ulr:'javaScript:;',
          id:'hill',
        }
      ],
      product:{
        pc:{
          title:'PC产品',
          list:[
            {
              name:'数据统计',
              url:'javaScript:;'
            },
            {
              name:'数据预测',
              url:'javaScript:;',
              hot:true
            },
            {
              name:'流量分析',
              url:'javaScript:;',
            },
            {
              name:'广告发布',
              url:'javaScript:;'
            },
          ]
        },
      app:{
        title:'应用类',
        last:true,
        list:[
          {
            name:'91助手',
            url:'javaScript:;'
          },
          {
            name:'产品助手',
            url:'javaScript:;',
            hot:true
          },
          {
            name:'智能地图',
            url:'javaScript:;'
          },
          {
            name:'团队协作',
            url:'javaScript:;'
          },
        ]
      }
      }
    }
  },
}
</script>

<style lang="css" scoped="scoped">
    .indexOneShowPage{
      width: 1200px;
      height: auto;
      margin:15px auto;
    }
    /* 左侧列表导航部分 */
    .index-one-left{
      width: 210px;
      height: auto;
      float: left;
    }
    .all-product{
      width: 100%;
      height: auto;
    }
    .all-product-title{
      background: #52bd8f;
      color: #fff;
      padding-left: 15px;
      line-height: 30px;
      height: 30px;
      font-size: 16px;
    }
    .all-product-title-top{
        margin-top: 15px;
    }
    .all-product-cont{
      width: 100%;
      height: auto;
      background: #fff;
      border-bottom: 1px solid #ededed;
    }
    .all-product-cont:last-child{
      border-bottom: none;
    }
    .all-product-cont h3{
      padding-left: 20px;
      height: 50px;
      line-height: 50px;
      color: #413f40;
      font-weight: bold;
      font-size: 14px;
    }
    .all-product-cont ul{
        padding-left: 25px;
        color: #413f40;
        font-size: 14px;
        padding-bottom: 6px
    }
    .all-product-cont ul li{
        line-height: 25px;
    }
    .all-product-cont ul li a{
      color: #413f40;
      text-decoration: none;
    }
    .all-product-cont ul li span{
      background: #f92307;
      margin-left: 2px;
      margin-top: 2px;
      border-radius: 5px;
      padding: 0 4px;
      color: #fff;
    }
    /* 左半部分内容 */
    .index-one-right{
      width: 982px;
      float: right;
    }
    /* banner轮播图 */
    .index-banner{
      width: 100%;
      height: 452px;
      background: red;
    }
    /* 图片列表内容 */
    .index-list-wp{
      width: 100%;
      height: auto;
      margin-top: 15px;
    }
    .index-list{
      width: 483px;
      height: 140px;
      background: #fff;
      float: left;
    }
    .index-list-last{
      margin-left: 15px;
    }
    .index-list-img{
      width:100px;
      height: 100px;
      float: left;
      margin-left: 15px;
      margin-top: 22px;
    }
    .index-list-img.index-list-images-erath{
      background: url('../assets/images/1.png');
    }
    .index-list-img.index-list-images-car{
      background: url('../assets/images/2.png');
    }
    .index-list-img.index-list-images-speaker{
      background: url('../assets/images/3.png');
    }
    .index-list-img.index-list-images-hill{
      background: url('../assets/images/4.png');
    }
    .index-list-font{
      float: left;
      margin-left: 10px;
      width: 340px;
      margin-top: 15px;
    }
    .index-list-font h4{
      font-size: 15px;
      font-weight: bolder;
    }
    .index-list-font p{
      color: #413f40;
      font-size: 13px;
      line-height: 25px;
      width: 100%;
      height: 50px;
      overflow: hidden;
      text-overflow:ellipsis;
    }
    .index-list-font a{
      display: block;
      width: 78px;
      height: 26px;
      background: #51c191;
      color: #fff;
      text-align: center;
      line-height: 26px;
      border-radius: 5px;
      text-decoration: none;
    }
</style>
