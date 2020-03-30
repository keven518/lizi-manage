<!--  -->
<template>
  <div class="app-container">
    <vDialog ref="dia" />
    <el-row>
      <el-button
        class="filter-item"
        size="mini"
        type="success"
        icon="el-icon-search"
        @click="addClass"
        >新增类别</el-button
      >
    </el-row>
    <el-table :data="tableData" size="small" class="table-box m-t-20">
      <el-table-column
        prop="category_name"
        label="产品类名"
        width="200"
        header-align="center"
      />
      <el-table-column
        prop="update_time"
        label="更新时间"
        header-align="center"
      />
    </el-table>
  </div>
</template>

<script>
import { productCategory } from "../../../api/face";
import vDialog from "./components/dialog";
export default {
  components: { vDialog },
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
  methods: {
    addClass() {
      this.$refs.dia.dialogVisible = true;
    },
    getProductCategory() {
      productCategory().then(res => {
        console.log("productCategory - res: ", res);
        this.tableData = res.data.rows;
      });
    }
  },
  created() {
    this.getProductCategory();
  },
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
