import Vue from 'vue';
import Buefy from 'buefy';
import '../node_modules/buefy/lib/buefy.css';
import App from './App.vue';
import Craigslist from './services/craiglist.service';
import Letgo from './services/letgo.service';

Vue.use(Buefy);

Vue.component(Buefy.Field.name, Buefy.Field);
Vue.component(Buefy.Input.name, Buefy.Input);
Vue.component(Buefy.Taginput.name, Buefy.Taginput);
Vue.component(Buefy.Icon.name, Buefy.Icon);
Vue.component(Buefy.Checkbox.name, Buefy.Checkbox);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  Craigslist,
  Letgo
}).$mount('#app');
