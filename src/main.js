// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './components/App'
import VueRouter from 'vue-router'
import echarts from 'echarts'
import {Row, Menu, MenuItem} from 'element-ui'
import Chart from './components/Chart'

Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.prototype.$echarts=echarts

const routes=[
	{ path:'/', redirect:'/list'},
	{ path:'/list', component:App},
	{ path:'/chart', component:Chart},
];

const router= new VueRouter({routes});
/* eslint-disable no-new */
new Vue({
  router,
  template: `
	<div>
		<el-row class="container">
      <el-menu mode="horizontal" defaule-active="0">
        <el-menu-item index="0">
          <router-link to="/list">明细</router-link>
        </el-menu-item>
        <el-menu-item index="1">
          <router-link to="/chart">报表</router-link>
        </el-menu-item>
      </el-menu>
      <router-view></router-view>
    </el-row>
	</div>
  `,
  components: { 
  	'el-row':Row,
  	'el-menu':Menu,
  	'el-menu-item':MenuItem,
   }
}).$mount('#app');
