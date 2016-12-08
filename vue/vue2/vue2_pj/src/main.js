import Vue from 'vue'
import App from './App'

new Vue({
    el: '#app',
    render: h => h(App)
    // components: {
    //     // <my-component> will only be available in parent's template
    //     'componentA': Child
    // }
});
//
// new Vue({
//     el: '#app',
//     template: '<App/>',
//     router,
//     component: {App}
// });
//
// new Vue(Vue.util.extend({
//     router
// }, App)).$mount('#app');

// new Vue({
//     el: "#app",
//     render: h => h(App)
// });

// new Vue({
//     el:'#app',
//     ...App
// });