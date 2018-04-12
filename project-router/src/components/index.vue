<template lang="html">
  <div class="contianers" id="Index">
      <div class="com-header">
        <div class="com-header-width">
          <div class="logo">
              <img src="../assets/logo.png" alt="">
          </div>
          <ul class="list">
            <li>登录</li>
            <li>丨</li>
            <li>注册</li>
            <li>丨</li>
            <li>关于</li>
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
  </div>
</template>

<script>
export default {

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
