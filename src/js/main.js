// 一、导入第三方包
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import MintUI from 'mint-ui';       //MintUI是Vue插件，需要手动use才能使用
import 'mint-ui/lib/style.css';    //引入样式库还需要单独导入CSS文件
import 'mui/dist/css/mui.css';      //引入mui样式
import 'mui/examples/hello-mui/css/icons-extra.css';  //引入mui的扩展图标样式

// 1.手动use启用插件
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(MintUI);
// 二、导入我们自己的东西

// 2.1导入自己的组件
import App from '../component/App.vue';   //根组件

// 2.2导入配置好的路由对象
import router from './router.js';   //路由

// 三、创建一个Vue实例，关联视图，把根组件渲染到视图中
new Vue({
    el: '#app',
    render: c => c(App),
    router
});