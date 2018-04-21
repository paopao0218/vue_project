<template lang="html">
  <div class="orderList-wp">
    <div class="search_wp">
      <div class="proType">
        <span>产品类型：</span>
        <SelectCom :selectLists="selectLists" @on-change='getProject' class="proTypeSelect"></SelectCom>
      </div>
      <div class="dataPrkerStart" >
        <span>开始日期：</span>
          <flat-pickr
          v-model='Startdate'
          class="form-control startTime"
          placeholder="Select date"
          @on-change="startTime" >
        </flat-pickr>
      </div>
      <div class="dataPrkerEnd" >
        <span>结束日期：</span>
          <flat-pickr
          v-model='Enddate'
          class="form-control startTime"
          placeholder="Select date"
          @on-change="entTime" >
        </flat-pickr>
      </div>
    </div>
    <div class="search_btn">
      <input type="text" name="" value="" placeholder='请输入搜索内容' v-model.lazy='query'>
      <span @click='searchBtn'>搜索</span>
    </div>
    <div class="table_wp">
      <table>
        <tr class="tHeader">
          <td  v-for='item in tabelHeader'>{{item.fontText}}</td>
        </tr>
        <tr class="tBody" v-for='value in tabelBody' :key="value.period">
          <td v-for='item in tabelHeader'>{{value[item.key]}}</td>
        </tr>
      </table>
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
      tabelHeader:[
        {
          'fontText':'订单编号',
          'key':'orderId'
        },
        {
          'fontText':'版本类型',
          'key':'product'
        },
        {
          'fontText':'版本',
          'key':'version'
        },
        {
          'fontText':'年限',
          'key':'period'
        },
        {
          'fontText':'购买数量',
          'key':'buyNum'
        },
        {
          'fontText':'订单日期',
          'key':'date'
        },
        {
          'fontText':'总价',
          'key':'amount'
        },
      ],
      tabelBody:[],
    }
  },
  watch:{
    query(){
        this.getList();
        this.getTableBody();
    }
  },
  methods:{
    startTime(){
      this.Startdate=new Date(this.Startdate).getTime();
      this.getTableBody();
    },
    entTime(){
      this.Enddate=new Date(this.Enddate).getTime();
      this.getTableBody();
    },
    getProject(parm){
      this.prejectValue=parm.value;
    },
    getList(){
      query:this.query;
    },
    searchBtn(){
      this.getTableBody();
    },
    getTableBody(){
      var params={
        Startdate:Date.parse(this.Startdate),
        Enddate:Date.parse(this.Enddate),
        prejectValue:this.prejectValue,
        query:this.query,
      }
      this.$http.get('../../../static/db.json',params)
      .then((data)=>{
          let datas=data.bodyText,
              res=JSON.parse(datas);
              this.tabelBody=res.getOrderList.list
      },(error)=>{
        console.log(error+'错误信息')
      })
    }
  },
  mounted(){
    // this.Startdate=new Date().getTime();
    // this.Enddate=new Date().getTime();
    // this.prejectValue=this.selectLists[0].value;
    // this.query=''
    this.getTableBody();
  }
}
</script>

<style lang="css" scoped="scoped">

.orderList-wp{
  width: 1200px;
  margin: 0 auto;
}
.search_wp{
  margin-top: 20px;
}


.proType{
  width: 180px;
  height: 35px;
  float: left;
}
.proType span{
  float: left;
  line-height: 35px;
}
.proTypeSelect{
  float: left;
}

.dataPrkerStart{
  float: left;
  height: 35px;
}
.dataPrkerStart span{
  float: left;
  line-height: 35px;
}
.dataPrkerEnd{
  float: left;
  height: 35px;
  margin-left: 15px;
}
.dataPrkerEnd span{
  float: left;
  line-height: 35px;
}
.startTime{
  float: left;
  height: 30px;
  border-radius: 8px;
  outline: none;
  border:1px solid #ccc;
  text-align: center;
  width: 100px;
}

.search_btn{
  float: right;
}
.search_btn input{
  height: 30px;
  line-height: 30px;
  border-radius: 8px;
  border:1px solid #ccc;
  outline: none;
  padding-left: 8px;
}
.search_btn span{
  display: block;
  float: right;
  width: 55px;
  height: 30px;
  border-radius: 8px;
  border: none;
  background: #50c08f;
  color: #fff;
  outline: none;
  cursor: pointer;
  text-align: center;
  line-height: 30px;
  font-size: 14px;
  margin-left: 15px;
}


.table_wp{
  clear: both;
  padding-top: 15px;
  padding-bottom: 15px;
}
.table_wp table{
  width: 98%;
  height: 100%;
  text-align: center;
  border-radius: 8px;
  border-top: none;
  border-collapse:collapse;
  margin: 10px auto;
  cursor: pointer;
}

.table_wp table tr td{
  border:1px solid #ccc;
}
.tHeader{
  height: 36px;
  background: #50c08f;
  color: #fff;
}
.tBody{
  height: 25px;
  line-height: 25px;
}
.tBody:hover{
  background: #ccc;
}
</style>
