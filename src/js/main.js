// 一、导入第三方包
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

// 1.手动use启用插件
Vue.use(VueRouter);
Vue.use(VueResource);

// 二、导入我们自己的东西

// 2.1导入自己的组件
import ComptApp from '../component/App.vue';   //根组件

// 三、创建一个Vue实例，关联视图，把根组件渲染到视图中
new Vue({
    el: '#app',
    render: c => c(ComptApp),

});