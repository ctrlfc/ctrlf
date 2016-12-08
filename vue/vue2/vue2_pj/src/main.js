import Vue from 'vue'
import App from './App.vue'

new Vue({
    el: '#app',
    render: h => h(App),
    // components: {
    //     // <my-component> will only be available in parent's template
    //     'componentA': Child
    // }
})

