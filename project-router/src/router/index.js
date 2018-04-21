import Vue from 'vue';
import Router from 'vue-router';

import indexOneShowPage from '@/pages/indexOneShowPage';
import DetailsPage from '@/pages/details';
import orderListPage from '@/pages/orderList';

import analysisPage from '@/pages/detail/analysis';
import countPage from '@/pages/detail/count';
import forecostPage from '@/pages/detail/forecost';
import publishPage from '@/pages/detail/publish';


Vue.use(Router);



export default new Router({
  mode:'history',
   routes:[
     {
       path:'/',
       name:'indexOneShowPage',
       component:indexOneShowPage
     },
     {
       path:'/orderListPage',
       component:orderListPage,
     },
     {
       path:'/DetailsPage',
       name:'DetailsPage',
       component:DetailsPage,
       children:[
         {
           path:'analysisPage',
           component:analysisPage,
         },
         {
           path:'countPage',
           component:countPage,
         },
         {
           path:'forecostPage',
           component:forecostPage,
         },
         {
           path:'publishPage',
           component:publishPage,
         }
       ]
     }
   ]
 })
