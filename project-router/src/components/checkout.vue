<template lang="html">
  <div class="checkout-wp">
    <div class="checkout">
      <span v-for='(item,index) in checkoutList' @click='checkoutClick(index)' :class="{active:checkActive(index)}">
        {{item.label}}
      </span>
    </div>
  </div>
</template>

<script>
import _ from 'lodash';
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
      currentIndex:[0],
    }
  },
  methods:{
    checkoutClick(index){
      if(this.currentIndex.indexOf(index)===-1){
        //不存在就===-1,
        this.currentIndex.push(index)
      }else{
        //存在在这个数组里面
        this.currentIndex=_.remove(this.currentIndex,(idx)=>{return idx!==index})
      }
      let nowObjArray=_.map(this.currentIndex,(idx)=>{ return this.checkoutList[idx]} )
      //this.currentIndex=index;
      this.$emit('checkoutChange',nowObjArray);
    },

    checkActive (index) {
      return this.currentIndex.indexOf(index) !== -1
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
