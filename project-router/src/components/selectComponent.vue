<template lang="html">
  <div class="selectCom">
      <div class="selectComShow" @click='selectClick'>
          <span class="selectComShowOneSpan">{{selectLists[newIndex].label}}</span>
          <span class="selectComShowTowSpan"></span>
      </div>
      <div class="selectListWarp" v-if='togger'>
        <ul class="selectList">
          <li v-for='(index,item) in selectLists' @click='listClick(item)'>{{index.label}}</li>
        </ul>
      </div>
  </div>
</template>

<script>
export default {
  props:{
    selectLists:{
      type:Array,
      default:{
        'lable':'test',
        'value':'0'
      }
    }
  },
  data(){
    return{
      togger:false,
      newIndex:0,
    }
  },
  methods:{
    selectClick(){
      this.togger=!this.togger;
    },
    listClick(item){
      this.togger=false;
      this.newIndex=item;
      // console.log(this.selectLists[item])
      this.$emit('on-change',this.selectLists[item])
    }
  }
}
</script>

<style lang="css">

.selectComShow{
  width: 90px;
  height: 30px;
  line-height: 30px;
  padding: 0px 4px;
  border-radius: 8px;
  border: 1px solid #ccc;
  display: block;
  cursor: pointer;
}
.selectComShowOneSpan{
  width: 60px;
  overflow: hidden;
  display:block;
  float: left;
  white-space :nowrap;
  text-overflow:ellipsis;
  text-align: center;
}
.selectComShowTowSpan{
  width: 0px;
  height: 0px;
  border: 6px solid transparent;
  display: block;
  float: right;
  border-top-color: #666;
  margin-top: 12px;
  margin-right: 6px;
}
.selectListWarp{
  position: relative;
  top: -6px;

}
.selectList{
  position: absolute;
  top: 0px;
  left: 0px;
  border: 1px solid #ccc;
  width: 98px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top: none;
  background: #fff;
}
.selectList li{
  text-align: center;
  line-height: 30px;
  border-bottom: 1px solid #ccc;
  cursor: pointer;
}
.selectList li:first-child{
  margin-top: 6px;
  border-top: 1px solid #ccc;
}
.selectList li:last-child{
  border-bottom: none;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
}
.selectList li:hover{
  background: #fef;
}
</style>
