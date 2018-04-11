import Vue from 'vue';
import Router from 'vue-router';

import indexOneShowPage from '@/pages/indexOneShowPage';

Vue.use(Router);



export default new Router({
   routes:[
     {
       path:'/',
       name:'indexOneShowPage',
       component:indexOneShowPage
     }
   ]
 })
