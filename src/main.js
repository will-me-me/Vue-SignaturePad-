import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import VueSignaturePad from "vue-signature-pad";

Vue.use(VueSignaturePad);

Vue.config.productionTip = false;

new Vue({
  vuetify,
  VueSignaturePad,
  render: (h) => h(App),
}).$mount("#app");
