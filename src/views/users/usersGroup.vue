<!--  -->
<template>
  <div class="app-container">
    人员分组
    <el-table
      :data="tableData"
      size="small"
      class="table-box m-t-20"
      style="width: 440px"
    >
      <el-table-column
        prop="name"
        label="设备"
        width="60"
        header-align="center"
      />
      <el-table-column prop="address" label="所属空间" header-align="center" />
      <el-table-column
        prop="date"
        label="记录时间"
        width="140"
        header-align="center"
      />
    </el-table>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      tableData: [
        {
          date: "2019-10-27 11:20:26",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2019-10-27 11:20:26",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2019-10-27 11:20:26",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2019-10-27 11:20:26",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ]
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
<style lang="scss" scoped>
//@import url(); 引入公共css类
</style>
