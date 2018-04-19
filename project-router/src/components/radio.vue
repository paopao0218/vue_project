<template lang="html">
  <div class="radio-wp">
    <div class="radio">
      <span v-for="(item,index) in radios" @click='radioClick(index)' :class="{active:index==curIndex}">{{item.label}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    radios:{
      type:Array,
      default:{
        'label':'test',
        'value':'0',
      }
    }
  },
  data(){
    return{
      curIndex:0,
    }
  },
  methods:{
    radioClick(index){
      this.curIndex=index;
      this.$emit('on-change',this.radios[index]);
    }
  }
}
</script>

<style lang="css" scoped="scoped">
.radio-wp{

}
.radio{

}
.radio span{
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
.radio span.active{
  background: #50c08f;
  border-radius: 4px;
  cursor: pointer;
  border: 1px solid #ccc;
  color: #fff;
}
</style>
