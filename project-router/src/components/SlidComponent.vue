<template lang="html">
    <div class="sild-banner-wp" @mouseover="clearInterValFn" @mouseout=" intervalFn">
        <ul>
          <li>
            <a :href="sildeBannerList[showIndex].imgUlr">
                <img :src="sildeBannerList[showIndex].img" alt="">
            </a>
          </li>
        </ul>
        <p>{{sildeBannerList[showIndex].font}}</p>
        <ol>
          <li>
            <span @click='togo(prevClick)'>&lt;</span>
            <span>
                <a href="javaScript:;" v-for="(item,index) in sildeBannerList" @click="togo(index)">{{index+1}}</a>
            </span>
            <span @click="togo(nextClick)">&gt;</span>
          </li>
        </ol>
    </div>
</template>

<script>

export default {
  props:{
    sildeBannerList:{
      type:Array,
    }
  },
  data(){
    return{
      showIndex:0,
    }
  },
  methods:{
    togo(index){
      this.showIndex=index;
    },
    intervalFn(){
      this.interId=setInterval(()=>{
        this.togo(this.nextClick);
      }, 2000);
    },
    clearInterValFn(){
      clearInterval(this.interId)
    }
  },
  mounted(){
    this.intervalFn();
  },
  computed:{
    prevClick(){
      if(this.showIndex===0){
        return this.sildeBannerList.length-1;
      }else{
        return this.showIndex-1;
      }
    },
    nextClick(){
      if(this.showIndex===this.sildeBannerList.length-1){
        return 0;
      }else{
        return this.showIndex+1;
      }
    }
  }
}
</script>

<style lang="css" scoped="scoped">
/* banner轮播图 */
.sild-banner-wp{
  width: 100%;
  height: 452px;
  background: red;
  position: relative;
}
.sild-banner-wp ul{
  width: 100%;
  height: 100%;
  background: pink;
  position: relative;
}
.sild-banner-wp ul li{
  position: absolute;
  width: 100%;
  height: 100%;
}
.sild-banner-wp ul li a{
  color: #fff;
}
.sild-banner-wp ul li a img{
  display: block;
  width: 100%;
  height: 100%;
}
.sild-banner-wp ol{
  position: absolute;
  bottom: 0px;
  width: 100%;
  height: 40px;
  background: #000;
  opacity: 0.6;
}
.sild-banner-wp ol li{
  height: 40px;
  float: right;
  padding: 0px 5px;
}
.sild-banner-wp ol li span{
  float: left;
  line-height: 40px;
  color: #fff;
  font-size: 25px;
  cursor: pointer;
}
.sild-banner-wp ol li span a{
  float: left;
  line-height: 20px;
  color: #fff;
  margin-right: 10px;
  margin-left: 10px;
  font-size: 16px;
  display: block;
  width: 20px;
  height: 20px;
  text-align: center;
  margin-top: 11px;
}
.sild-banner-wp p{
  position: absolute;
  bottom: 0px;
  left: 15px;
  color: #fff;
  z-index: 2;
  line-height: 40px;
}
</style>
