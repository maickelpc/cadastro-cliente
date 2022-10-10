require("./bootstrap");
import Vue from "vue";
window.Vue = Vue;

import Routes from './routes'

import 'vue-select/dist/vue-select.css';

import VueMask from "v-mask";
import Vuelidate from "vuelidate";

import Layouts from "./mixins/layouts.mixin";
import Main from './layouts/main'
import vSelect from 'vue-select'
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/locale/pt-br';
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';
import moment from 'moment'
import InputComponent from './components/forms/input';
import ContainerComponent from './components/forms/container';
import MessageComponent from './components/forms/message';
import PaginationComponent from './components/forms/pagination';
import LoaderComponent from './components/forms/loader.vue'

Vue.use(VueMask);
Vue.use(Vuelidate);
Vue.use(VueToast);
  
Vue.component('date-picker', DatePicker);
Vue.component('vue-select', vSelect);
Vue.component("input-component", InputComponent);
Vue.component("container-component", ContainerComponent);
Vue.component('message-component', MessageComponent);
Vue.component('pagination-component', PaginationComponent);
Vue.component('loader-component', LoaderComponent);

Vue.filter("timeformat", arg => {
  return moment(arg).format("DD/MM/YYYY HH:mm:ss");
});

Vue.filter("dateformat", arg => {
  return moment(arg).format("DD/MM/YYYY");
});

if (document.getElementById("app")) {

Vue.prototype.$isDev = process.env.MIX_APP_ENV !== "production";
Vue.config.devtools = Vue.prototype.$isDev;
Vue.config.debug = Vue.prototype.$isDev;
Vue.config.silent = !Vue.prototype.$isDev;

  const app = new Vue({
    props:{
      user : {
        type: String,
        default: ''
      }
    },
    el: "#app",
    mixins: [Layouts],
    render: h => h(Main),
    router: Routes,
    data(){
      return {
        isLoading: false
      }
    },
    methods: {
        enableLoader: function() {
          this.axiosInterceptor = window.axios.interceptors.request.use(
            config => {
              if(config.method == 'post' || config.method == 'put' || config.method == 'delete')
                this.isLoading = true;
              return config;
            },
            error => {
              this.isLoading = false;
              return Promise.reject(error);
            }
          );
  
          window.axios.interceptors.response.use(
            response => {
              this.isLoading = false;
              return response;
            },
            error => {
              this.isLoading = false;
              return Promise.reject(error);
            }
          );
        },
  
        

         disableLoader: function() {
          window.axios.interceptors.request.eject(this.axiosInterceptor);
        }
      },
      created() {
        this.enableLoader();
      },
  });

}else{
  Vue.component("login-view", LoginView);

  app = new Vue({
    el: "#app2"
  });
}
