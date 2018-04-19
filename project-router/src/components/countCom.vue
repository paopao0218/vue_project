<template lang="html">
  <div class="count-wp">
      <div class="count">
        <div class="count-btn count-less" @click='lessClick'>-</div>
        <div class="count-input-wp">
          <input type="text" name="" value="" v-model='bayNumbder' readonly="readonly" >
        </div>
        <div class="count-btn count-add" @click="addClick">+</div>
      </div>
  </div>
</template>

<script>
export default {
  props:{
    max:{
      type:Number,
      default:88,
    },
    countNumber:{
      type:Number,
      default:88,
    },
    min:{
      type:Number,
      default:88,
    }
  },
  data(){
    return{
      bayNumbder:this.min
    }
  },
  methods:{
    lessClick(){
      if(this.bayNumbder<=this.min){
        this.bayNumbder=this.min;
      }else{
        this.bayNumbder --;
      }
    },
    addClick(){
      if(this.bayNumbder>=this.max){
        this.bayNumbder=this.max;
      }else{
        this.bayNumbder ++;
      }
    }
  }
}
</script>

<style lang="css" scoped="scoped">
  .count-wp{

  }
  .count{

  }
  .count-btn{
    float: left;
    width: 20px;
    height: 20px;
    border:1px solid #ccc;
    text-align: center;
    line-height: 18px;
    font-size: 22px;
    cursor: pointer;
    background: #ffe;
  }
  .count-input-wp{
    float: left;
    width: 35px;
    height: 20px;
    border-top: 1px solid #ccc;
    border-bottom:1px solid #ccc;
  }
  .count-input-wp input{
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    text-align: center;
    line-height: 20px;
  }
</style>
