<template lang="html">
  <div class="details-right-wp">
      <div class="details-right-title">
        <h3>流量分析</h3>
        <p>
          是指在获去网站的访问量基本数据情况下对有关数据进行统计，分析，从中发现用户访问网站的规律，并将这些规律与网络营销等相组合，从而发现目前网络营销活动中可能存在的问题，并未进一步修正重新制定网络营销策略
          提供依据，当然这样的定义实站在网络营销的角度来考虑的。
        </p>
      </div>
      <div class="details-right-number">
        <div class="details-right-number-left">有效时间：</div>
        <div class="details-right-number-right">
           <RadioCom :radios='radios' @on-change="onParamChange('buyTime',$event)"></RadioCom>
        </div>
      </div>
      <div class="details-right-number">
        <div class="details-right-number-left">购买数量：</div>
        <div class="details-right-number-right">
          <CountCom :max="max" :countNumber="countNumber" :min="min" @on-change="onParamChange('buyNumber',$event)"></CountCom>
        </div>
      </div>
      <div class="details-right-number">
        <div class="details-right-number-left">产品类型：</div>
        <div class="details-right-number-right">
            <SelectCom :selectLists="selectLists" @on-change="onParamChange('buyType',$event)"></SelectCom>
        </div>
      </div>
      <div class="details-right-number">
        <div class="details-right-number-left">产品版本：</div>
        <div class="details-right-number-right">
          <CheckoutCom :checkoutList='checkoutList' @on-change="onParamChange('buyVersions',$event)"></CheckoutCom>
        </div>
      </div>
      <div class="details-right-number">
        <div class="details-right-number-left">总价：</div>
        <div class="details-right-number-right"><b>{{totlePrice}}</b>元</div>
      </div>
      <div class="details-right-totle-btn">
        <button type="button" name="button" @click='myDilogOpen'>立即购买</button>
      </div>
      <div class="">
        <div class="details-right-title">
          <h3>流量分析</h3>
          <p>
            是指在获去网站的访问量基本数据情况下对有关数据进行统计，分析，从中发现用户访问网站的规律，并将这些规律与网络营销等相组合，从而发现目前网络营销活动中可能存在的问题，并未进一步修正重新制定网络营销策略
            提供依据，当然这样的定义实站在网络营销的角度来考虑的。
          </p>
        </div>
      </div>
      <MyDilog :isShow='isShow' @close-mask="myDilogClose">
          <table class="my-table">
            <tr class="my-table-header">
              <td>购买数量</td>
              <td>产品类型</td>
              <td>产品版本</td>
              <td>有效时间</td>
              <td>总价格</td>
            </tr>
            <tr>
              <td>{{buyNumber}}</td>
              <td>{{buyType.label}}</td>
              <td>
                <span v-for="(item,index) in buyVersions">{{item.label}}</span>
              </td>
              <td>{{buyTime.label}}</td>
              <td>{{totlePrice}}</td>
            </tr>
          </table>
          <h3 class="chooseBank">选择银行卡：</h3>
          <BackCom @on-change="bankParams"></BackCom>
          <button type="button" name="button" class='payBtn' @click='payMonyClick'>立即支付</button>
      </MyDilog>
      <CheckRoderCom :checkOrder='checkOrder' :orderId='orderId' @on-close-check-dialog="closeCheckRorder"></CheckRoderCom>
  </div>
</template>

<script>
import _ from 'lodash';
import SelectCom from '@/components/selectComponent';
import CheckoutCom from '@/components/checkout';
import RadioCom from '@/components/radio';
import CountCom from '@/components/countCom';
import MyDilog from '@/components/dilog';
import BackCom from '@/components/backCom';
import CheckRoderCom from '@/components/checkOrder';

export default {
  components:{
    SelectCom,
    CheckoutCom,
    RadioCom,
    CountCom,
    MyDilog,
    BackCom,
    CheckRoderCom,
  },
  data(){
    return{
      buyNumber:'',
      buyType:'',
      buyTime:'',
      buyVersions:[],
      totlePrice:640,
      isShow:false,
      bankId:null,
      orderId:'',
      checkOrder:false,
      selectLists:[
        {
          'label':'入门版',
          'value':'0'
        },
        {
          'label':'中级版',
          'value':'1'
        },
        {
          'label':'高级版',
          'value':'2'
        },
        {
          'label':'终极版',
          'value':'3'
        },
      ],
      checkoutList:[
        {
          'label':'客服版',
          'value':'0',
        },
        {
          'label':'代理商版',
          'value':'1',
        },
        {
          'label':'专家版',
          'value':'2',
        }
      ],
      radios:[
        {
          'label':'一年',
          'value':'0',
        },
        {
          'label':'三年',
          'value':'1',
        },
        {
          'label':'五年',
          'value':'2',
        },
        {
          'label':'七年',
          'value':'3',
        }
      ],
      max:10,
      min:1,
      countNumber:4,
    }
  },
  methods:{
    onParamChange(attr,val){
      this[attr]=val;
      this.getPirce();
    },
    getPirce(){
      let buyVersionsArray=_.map(this.buyVersions,(item,index)=>{
          return item.value;
      })
      let passParams={
        buyNumber:this.buyNumber,
        buyType:this.buyType.value,
        buyTime:this.buyTime.value,
        buyVersions:buyVersionsArray.join(','),
      }
      this.$http.get('../../../static/db.json',passParams)
      .then((data)=>{
          let datas=data.bodyText,
              res=JSON.parse(datas);
              this.totlePrice=res.getPrice.amount;
      },(error)=>{
        console.log(error+'错误信息')
      })
    },
    myDilogOpen(){
      //
      this.isShow=true;
    },
    myDilogClose(){
      this.isShow=false;
    },
    bankParams(bankObj){
      this.bankId=bankObj;
    },
    payMonyClick(){
      let buyVersionsArray=_.map(this.buyVersions,(item,index)=>{
          return item.value;
      })
      let passParams={
        buyNumber:this.buyNumber,
        buyType:this.buyType.value,
        buyTime:this.buyTime.value,
        buyVersions:buyVersionsArray.join(','),
        bankId:this.bankId,
      }
      this.$http.get('../../../static/db.json',passParams)
      .then((data)=>{
          let datas=data.bodyText,
              res=JSON.parse(datas);
              this.orderId=res.createOrder.orderId;
              this.isShow=false;
              this.checkOrder=true;
      },(error)=>{
        console.log(error+'错误信息')
      })
    },
    closeCheckRorder(){
      this.checkOrder=false;
    }
  },
  mounted(){
      //组件渲染完成
    this.buyNumber = 1;
    this.buyTime=this.radios[0];
    this.buyType = this.selectLists[0]
    this.buyVersions = [this.checkoutList[0]]
    this.totlePrice = this.totlePrice;
    this.bankId=201;
    this.getPirce()
  },
}
</script>

<style lang="css">
/* 公用样式 */
.details-right-wp{
  padding: 14px;
  background: #fff;
}
.details-right-title{
  margin: 20px 0px;
}
.details-right-title h3{
  font-size: 18px;
  color: #222;
  font-weight: bold;
}
.details-right-title p{
  line-height: 25px;
  font-size: 14px;
  margin-top: 10px;
  color: #333;
}
.details-right-number{
  width: 100%;
  height: 40px;
  clear: both;
}
.details-right-number-left{
  float: left;
  color: #333;
  font-size: 15px;
  width: 100px;
}
.details-right-number-right{
  float: left;
  width: 400px;
}
.details-right-totle-btn{
    margin-left: 100px;
}
.details-right-totle-btn button{
  display: block;
  width: 150px;
  height: 35px;
  border-radius: 8px;
  border: none;
  background: #50c08f;
  color: #fff;
  outline: none;
  cursor: pointer;
}
.details-right-totle-btn button:hover{
  background: green;
}
.my-table{
  width: 98%;
  height: 100%;
  text-align: center;
  border-radius: 8px;
  border-top: none;
   border-collapse:collapse;
   margin: 10px auto;
}
.my-table tr{
  height: 30px;
  line-height: 30px;
}
.my-table tr td{
    border:1px solid #ccc;
}
.my-table tr td span{
  margin-right: 6px;;
}
.my-table-header{
  font-size: 14px;
}
.chooseBank{
  margin-left: 8px;
  line-height: 35px;
  font-weight: bold;
  color: #333;
}
.payBtn{
  display: block;
  width: 150px;
  height: 35px;
  border-radius: 8px;
  border: none;
  background: #50c08f;
  color: #fff;
  outline: none;
  cursor: pointer;
  margin: 18px auto;
}
.payBtn:hover{
  background: green;
}
</style>
