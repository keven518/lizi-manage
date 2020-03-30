<!--  -->
<template>
  <div class="layout">
    <sidebar class="sidebar-container" />
    <div class="main-container">
      <hamburger
        :toggle-click="toggleSideBar"
        :is-active="sidebarOpened"
        class="hamburger-container"
      />
      <transition name="fade-transform" mode="out-in">
        <!-- <keep-alive>
          <router-view />
        </keep-alive> -->
        <router-view />
      </transition>
    </div>
  </div>
</template>

<script>
import { Sidebar } from "./components";
import Hamburger from "@/components/Hamburger";
export default {
  components: {
    Sidebar,
    Hamburger
  },
  data() {
    return {
      sidebarOpened: true
    };
  },
  computed: {},
  watch: {},
  methods: {
    toggleSideBar() {}
  },
  created() {},
  mounted() {},
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
  activated() {}
};
</script>
<style lang="scss" scoped>
.layout {
  height: 100%;
  overflow-y: scroll;
  .hamburger-container {
    background: #fff;
    height: 50px;
    overflow: hidden;
    position: relative;
    background: #fff;
    -webkit-box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
    box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  }
}
</style>
