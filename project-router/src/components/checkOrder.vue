<template lang="html">
  <div class="checkOrder_wp">
    <MyDilog :is-show='checkOrder' @close-mask="checkOrderClose">
      <span class="pay-status-span">点击发送支付状态：</span>
      <div class="pay-status-wp">
        <button type="button" name="button" class="pay-status" @click="SureClick">确认支付</button>
        <button type="button" name="button" class="pay-status" @click="ErrorClick">取消支付</button>
      </div>
    </MyDilog>
    <MyDilog :is-show="isSuccess" @close-mask="checkOrderCloseA">
      <p>购买成功了！</p>
    </MyDilog>
    <MyDilog :is-show="isError" @close-mask="checkOrderClose">购买失败！</MyDilog>
  </div>
</template>

<script>
import MyDilog from '@/components/dilog';
export default {
  props:{
    checkOrder:Boolean,
    orderId:[Number,String],
  },
  components:{
    MyDilog,
  },
  data(){
    return{
      isSuccess:false,
      isError:false,
    }
  },
  methods:{
    SureClick(){
      console.log(this.orderId)
      this.isSuccess=true;
      this.$emit('on-close-check-dialog');
    },
    ErrorClick(){
      this.isError=true;
      this.$emit('on-close-check-dialog');
    },
    checkOrderClose(){
      this.isError=false;
      this.isSuccess=false;
      this.$emit('on-close-check-dialog');
    },
    checkOrderCloseA(){
      this.isError=false;
      this.isSuccess=false;
      this.$emit('on-close-check-dialog');
      this.$router.push({path:'/orderListPage'})
    }
  }
}
</script>

<style lang="css" scoped="scoped">
.checkOrder_wp{

}
.pay-status-span{
  display: block;
  margin-top: 25px;
  margin-left: 15px;
  font-size: 14px;
  font-weight: bold;
}
.pay-status-wp{
  clear: both;
  margin-left: 15px;
}
.pay-status{
  display: block;
  width: 150px;
  height: 35px;
  border-radius: 8px;
  border: none;
  background: #50c08f;
  color: #fff;
  outline: none;
  cursor: pointer;
  float: left;
  margin: 35px 55px;
}
.pay-status:hover{
  background: green;
}
</style>
