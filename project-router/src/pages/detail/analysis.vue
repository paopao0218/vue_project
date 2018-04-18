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
        <div class="details-right-number-left">购买数量：</div>
        <div class="details-right-number-right"></div>
      </div>
      <div class="details-right-number">
        <div class="details-right-number-left">产品类型：</div>
        <div class="details-right-number-right">
            <SelectCom :selectLists="selectLists" @value-parent='selectVlaue'></SelectCom>
        </div>
      </div>
      <div class="details-right-number">
        <div class="details-right-number-left">有效时间：</div>
        <div class="details-right-number-right"></div>
      </div>
      <div class="details-right-number">
        <div class="details-right-number-left">产品版本：</div>
        <div class="details-right-number-right">
          <CheckoutCom :checkoutList='checkoutList'></CheckoutCom>
        </div>
      </div>
      <div class="details-right-number">
        <div class="details-right-number-left">总价：</div>
        <div class="details-right-number-right"></div>
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
  </div>
</template>

<script>
import SelectCom from '@/components/selectComponent';
import CheckoutCom from '@/components/checkout';
export default {
  components:{
    SelectCom,
    CheckoutCom,
  },
  data(){
    return{
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
          'value':'0',
        },
        {
          'label':'专家版',
          'value':'0',
        }
      ]
    }
  },
  methods:{
    selectVlaue(){

    }
  }
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
</style>
