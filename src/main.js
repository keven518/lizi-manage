import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import VueProgressBar from "vue-progressbar";
import "normalize.css/normalize.css"; // a modern alternative to CSS resets

import "./styles/element-variables.scss";
import "./icons"; // icon

import "./styles/index.scss"; // global css

import VueParticles from "vue-particles";
const options = {
  color: "#bffaf3",
  failedColor: "#874b4b",
  thickness: "5px",
  transition: {
    speed: "0.2s",
    opacity: "0.6s",
    termination: 300
  },
  autoRevert: true,
  location: "top",
  inverse: false
};

Vue.use(VueProgressBar, options);
Vue.use(VueParticles);
Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
