import Vue from "vue";
import VueRouter from "vue-router";

const CustomerIndex = () => import('./views/customers/CustomerIndex')
const CustomerForm = () => import('./views/customers/CustomerForm')

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    routes: [  
        {
          path: `/`, 
          name: "main", 
          component: CustomerIndex, 
        },
        {
          path: `/customers`, 
          name: "customers.index", 
          component: CustomerIndex, 
        },
        {
          path: `/customers/create`,
          name: "customers.create", 
          component: CustomerForm, 
        },
        {
          path: `/customers/:id`,
          name: "customers.edit", 
          component: CustomerForm, 
        },
   
    ]
  });
  
  export default router;