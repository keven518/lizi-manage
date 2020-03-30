<!--  -->
<template>
  <el-scrollbar wrap-class="scrollbar-wrapper">
    <Logo />
    <el-menu
      :router="true"
      :show-timeout="200"
      :default-active="menu"
      :collapse="false"
      :unique-opened="uniqueOpened"
      mode="vertical"
      background-color="#304156"
      text-color="#bfcbd9"
      active-text-color="#409EFF"
    >
      <!--1-->
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-s-custom"></i>
          <span>人员</span>
        </template>
        <el-menu-item index="usersInfor">人员信息</el-menu-item>
        <el-menu-item index="usersGroup">人员分组</el-menu-item>
      </el-submenu>
      <!--2-->
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-s-grid"></i>
          <span>规则</span>
        </template>
        <el-menu-item index="passRule">人员通行规则</el-menu-item>
        <el-menu-item index="connectivityRules">连接规则</el-menu-item>
      </el-submenu>
      <!--3-->
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-s-order"></i>
          <span>记录</span>
        </template>
        <el-menu-item index="passRecord">通行记录</el-menu-item>
      </el-submenu>
      <!--4-->
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-s-custom"></i>
          <span>产品</span>
        </template>
        <el-menu-item index="proClassify">产品分类</el-menu-item>
        <el-menu-item index="proManage">产品管理</el-menu-item>
        <el-menu-item index="proList">产品列表</el-menu-item>
      </el-submenu>
      <!--5-->
      <el-submenu index="5">
        <template slot="title">
          <i class="el-icon-s-custom"></i>
          <span>课程</span>
        </template>
        <el-menu-item index="courseClassify">课程分类</el-menu-item>
        <el-menu-item index="courseManage">课程管理</el-menu-item>
        <el-menu-item index="courseList">课程列表</el-menu-item>
      </el-submenu>
    </el-menu>
  </el-scrollbar>
</template>

<script>
import Logo from "./logo";
export default {
  components: { Logo },
  data() {
    return {
      menu: "",
      uniqueOpened: true,
      isCollapse: true
    };
  },
  computed: {},
  watch: {},
  methods: {},
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
<style lang="scss" scoped></style>
