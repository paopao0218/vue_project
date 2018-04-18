<template lang="html">
  <div class="login_wp">
    <div class="login_user">
      <label for="user">用户名字：</label>
      <input type="text" name="" value="" placeholder='请输入用户名字' id='user' v-model='userModel'>
      <span>{{userErrors.errorText}}</span>
    </div>
    <div class="login_user">
      <label for="password">用户密码：</label>
      <input type="text" name="" value="" placeholder='请输入用户名字' id='password' v-model='passwordModel'>
      <span>{{passwordError.errorPwd}}</span>
    </div>
    <div class="login_btn">
      <button type="button" name="登录" @click='loginClick'>登录</button>
      <span></span>
    </div>
  </div>
</template>

<script>
import api from './../axios/api.js';

export default {
  data(){
    return{
      userModel:'',
      passwordModel:'',
      btnError:'',
    }
  },
  computed:{
    userErrors(){
        let errorText,status;
        if(!/@/g.test(this.userModel)){
            errorText='你输入的内容不包含@符号';
            status=false;
        }else{
          errorText='';
          status=true;
        }
        if(!this.Flag){
          errorText='';
          this.Flag=true;
        }
        return {
          status,
          errorText,
        }
    },
    passwordError(){
        let errorPwd,status;
        if(!/^[0-9A-Za-z]{6,}$/.test(this.passwordModel)){
          errorPwd='密码长度不能少于6位数字且不能为汉字';
          status=false;
        }
        if(!this.Flags){
          errorPwd='';
          this.Flags=true;
        }
        return {
          status,
          errorPwd,
        }
    }
  },
  methods:{
    loginClick(){
      let user=this.userModel,
          pwd=this.passwordModel;
          if(this.userErrors.status || this.passwordError.status){
            //ajax请求
            this.$http.get ('../../../static/db.json')
            .then((res)=>{
                this.$emit('has-log',res);
            },(error)=>{
              console.log(error)
            })
          }else{

          }
    },
  }
}
</script>

<style lang="css">

.login_wp{
  background: #fff;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
}
.login_user{
  width: 50%;
  margin: 15px auto;
}
.login_user label{
  font-size: 14px;
  width: 30%;
  color: #333;
}
.login_user input{
  width: 70%;
  height: 40px;
  border-radius: 8px;
  outline: none;
  border:1px solid #ccc;
  padding-left: 8px;
}
.login_user span{
  margin-left: 25%;
  display: block;
  margin-top: 10px;
  color: #ff0220;
}
.login_btn{
  width: 60%;
  margin: 0 auto;
  color:#333;
}
.login_btn button{
  color: #333;
  width: 40%;
  display: block;
  margin-left: 40%;
  height: 35px;
  font-size: 16px;
  border-radius: 8px;
  border: none;
  background: #45b1ff;
  color: #fff;
  outline: none;
  cursor: pointer;
}
.login_btn span{
    width: 40%;
    color:#333;
    margin-left: 40%;
    line-height: 30px;
}
</style>
