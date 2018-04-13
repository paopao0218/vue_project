<template lang="html">
  <div class="">
    <div class="dilog-wp">
      <div class="dilog-cover"></div>
      <div class="dilog-cont">
          <div class="dilog-title">
            <h3>title</h3>
            <span>X</span>
          </div>
          <div class="dilog-font">
            <slot>empty</slot>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="css" scoped="scoped">
.dilog-wp{
  position: fixed;
  top:0;
  left:0;
}
.dilog-cover{
  width: 100%;
  height: 100%;
  position: fixed;
  top:0;
  left:0;
  background: #000;
  opacity: 0.7;
}
.dilog-cont{
  width: 50%;
  height: auto;
  position: fixed;
  z-index: 2;
  left: 50%;
  margin-left: -25%;
  top:20%;
    border: 1px solid #ccc;
    border-radius: 8px;
}
.dilog-title{
  width: 100%;
  height: 45px;
  background: #fff;
  border-bottom: 1px solid #ccc;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}
.dilog-title h3{
  text-align: center;
  line-height: 45px;
  font-size: 22px;
  font-weight: 600;
}
.dilog-title span{
  position: absolute;
  top:0px;
  right: 25px;
  font-size: 16px;
  width: 20px;
  height: 20px;
  background: #52bd8f;
  border-radius: 50%;
  text-align: center;
  line-height: 20px;
  color: #fff;
  top: 50%;
  margin-top: -18px;
  cursor: pointer;
}
.dilog-font{
  width: 100%;
  height: auto;
  background: #fff;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
}
</style>
