import Vue from 'vue'
import App from './App.vue'
import ScrollAnimation from './directives/scrollanimation'
import VueWindowSize from 'vue-window-size';

Vue.use(VueWindowSize);

Vue.directive('scrollanimation', ScrollAnimation)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
