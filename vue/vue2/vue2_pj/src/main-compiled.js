'use strict';

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _App = require('./App');

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _vue2.default({
    el: '#app',
    render: function render(h) {
        return h(_App2.default);
    }
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

//# sourceMappingURL=main-compiled.js.map