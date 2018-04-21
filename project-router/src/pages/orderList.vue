<template lang="html">
  <div class="orderList-wp">
    <div class="search_wp">
      <div class="proType">
        <span>产品类型：</span>
        <SelectCom :selectLists="selectLists" @on-change='getProject'></SelectCom>
      </div>
      <div class="dataPrkerStart" >
        <span>开始日期和结束日期：</span>
          <flat-pickr
          v-model='Startdate'
          class="form-control"
          placeholder="Select date"
          @on-change="startTime" >
        </flat-pickr>
      </div>
      <div class="dataPrkerEnd" >
        <span>开始日期和结束日期：</span>
          <flat-pickr
          v-model='Enddate'
          class="form-control"
          placeholder="Select date"
          @on-change="entTime" >
        </flat-pickr>
      </div>
    </div>
    <div class="search_table">
      <input type="text" name="" value="" placeholder='请输入搜索内容' v-model.lazy='query'>
      <span>搜索</span>
    </div>
  </div>
</template>

<script>

import SelectCom from '@/components/selectComponent';
import flatPickr from 'vue-flatpickr-component';
import 'flatpickr/dist/flatpickr.css';
import {Hindi} from 'flatpickr/dist/l10n/hi';

export default {
  components: {
    SelectCom,
    flatPickr,
  },
  data(){
    return{
      query:'',
      inputSeart:'',
      Startdate: new Date(),
      Enddate:new Date(),
      selectLists:[
        {
          'label':'数据统计',
          'value':'0'
        },
        {
          'label':'数据类型',
          'value':'1'
        },
        {
          'label':'数据计算',
          'value':'2'
        },
        {
          'label':'流量发布',
          'value':'3'
        },
      ],
    }
  },
  watch:{
    query(){
        this.getList()
    }
  },
  methods:{
    startTime(){
      this.Startdate=new Date(this.Startdate).getTime();
      this.Enddate=new Date(this.Enddate).getTime();
    },
    entTime(){
      this.Startdate=new Date(this.Startdate).getTime();
      this.Enddate=new Date(this.Enddate).getTime();
    },
    getProject(parm){
      this.prejectValue=parm.value;
    },
    getList(){
      var params={
        Startdate:this.Startdate,
        Enddate:this.Enddate,
        prejectValue:this.prejectValue,
        query:this.query,
      }
      this.$http.get('../../../static/db.json',passParams)
      .then((data)=>{
          let datas=data.bodyText,
              res=JSON.parse(datas);
      },(error)=>{
        console.log(error+'错误信息')
      })
    }
  }
}
</script>

<style lang="css" scoped="scoped">

.orderList-wp{
  width: 1200px;
  margin: 0 auto;
}
.search_wp{

}
.search_table{}

</style>
