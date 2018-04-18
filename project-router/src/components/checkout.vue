<template lang="html">
  <div class="checkout-wp">
    <div class="checkout">
      <span v-for='(item,index) in checkoutList' @click='checkoutClick(index)' :class="{active:index===currentIndex}">
        {{item.label}}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    checkoutList:{
      type:Array,
      default:{
        'label':'test',
        'value':'0'
      }
    }
  },
  data(){
    return{
      currentIndex:0,
    }
  },
  methods:{
    checkoutClick(index){
      this.currentIndex=index;
      this.$emit('checkoutChange',index)
    }
  }
}
</script>

<style lang="css" scoped="scoped">
.checkout-wp{

}
.checkout{

}
.checkout span{
    display: block;
    float: left;
    padding: 4px 8px;
    color: #333;
    background: #fff;
    border-radius: 4px;
    cursor: pointer;
    border: 1px solid #ccc;
    margin-right: 8px;
}
.checkout span.active{
  background: #50c08f;
  border-radius: 4px;
  cursor: pointer;
  border: 1px solid #ccc;
  color: #fff;
}
</style>
