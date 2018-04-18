<template lang="html">
  <div class="contianers" id="Index">
      <div class="com-header">
        <div class="com-header-width">
          <div class="logo">
              <router-link :to="{ path: '/' }">
                  <img src="../assets/logo.png" alt="">
              </router-link>
          </div>
          <ul class="list">
            <li v-if='name==""' @click='loginClick'>登录</li>
            <li v-if='name==""'>丨</li>
            <li v-if='name==""' @click='regClick'>注册</li>
            <li v-if='name==""'>丨</li>
            <li @click='aboutClick'>关于</li>
            <li v-if='name==!""'>丨</li>
            <li>{{name}}</li>
            <li v-if='name==!""'>丨</li>
          </ul>
        </div>
      </div>
      <div class="main">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </div>
      <div class="com-footer">
        paopao-email:1647340208@qq.com
      </div>
      <myDilog :is-show='isLoginShow' @close-mask='closeT("isLoginShow")'>
        <Login @has-log='onSuccessLog'></Login>
      </myDilog>
      <myDilog :is-show='isRegShow' @close-mask='closeT("isRegShow")'>2</myDilog>
      <myDilog :is-show='isAboutShow' @close-mask='closeT("isAboutShow")'>
        <p class="ablutWe">
          学习，是指通过阅读、听讲、思考、研究、实践等途径获得知识或技能的过程。学习分为狭义与广义两种：
狭义：通过阅读、听讲、研究、观察、理解、探索、实验、实践等手段获得知识或技能的过程，是一种使个体可以得到持续变化（知识和技能，方法与过程，情感与价值的改善和升华）的行为方式。例如通过学校教育获得知识的过程。
广义：是人在生活过程中，通过获得经验而产生的行为或行为潜能的相对持久的行为方式。
        </p>
      </myDilog>
  </div>
</template>

<script>
import myDilog from '@/components/dilog';
import Login from '@/components/login';
export default {
  components:{
    myDilog,
    Login,
  },
  data(){
    return{
      isLoginShow:false,
      isRegShow:false,
      isAboutShow:false,
      name:''
    }
  },
  methods:{
    loginClick(){
      this.isLoginShow=true;
    },
    regClick(){
      this.isRegShow=true;
    },
    aboutClick(){
      this.isAboutShow=true;
    },
    closeT(attr){
      this[attr]=false;
    },
    onSuccessLog(data){
      var data=data.data
      if(data){
        this.name=data.login.username;
        this.closeT('isLoginShow');
      }
    }
  }
}
</script>

<style lang="css">
    /* 公用样式表 */
    *{
      padding: 0;
      margin: 0;
      font-family:"Segoe UI","Lucida Grande",Helvetica,Arial,"Microsoft YaHei",FreeSans,Arimo,"Droid Sans","wenquanyi micro hei","Hiragino Sans GB","Hiragino Sans GB W3","FontAwesome",sans-serif;
    }
    body{
      background:#f1f2f6;
      font-size:12px;
    }
    ul,ol,dl,dd,p,h1,h2,h3,h4,h5,h6,form,div,fieldset,form,textarea,input,body {margin:0;padding:0;}
    h1,h2,h3,h4,h5,h6,i{font-style: normal;font-weight:normal;}
    ul,li{list-style:none;}
    img{display: block;}

    .com-header{
      width: 100%;
      height: 60px;
      background: #363436;
    }
    .com-header-width{
      width: 1200px;
      margin: 0 auto;
    }
    .com-header-width .logo{
        width: 50px;
        height: 40px;
        float: left;
        margin-top: 10px;
    }
    .com-header-width .logo img{
      width: 100%;
      height: 100%;
    }
    .com-header-width .list{
      float: right;
    }
    .com-header-width .list li{
      float: right;
      line-height: 60px;
      color: #888788;
      font-size: 16px;
      margin-left: 10px;
      cursor: pointer;
    }
    .ablutWe{
      padding: 10px;
      font-size: 14px;
      color: #333;
      text-indent: 2rem;
      line-height: 25px;
    }
    .com-footer{
      width: 100%;
      height: 60px;
      background: #e3e5e9;
      color: #98979a;
      text-align: center;
      line-height: 60px;
      font-size: 14px;
      clear: both;
    }
</style>
