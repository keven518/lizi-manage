<!--  -->
<template>
  <div class="">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column type="index" width="50"></el-table-column>
      <el-table-column
        prop="category_name"
        label="类名"
        width="180"
      ></el-table-column>
      <el-table-column
        prop="sort_order"
        label="排序"
        width="180"
      ></el-table-column>
      <el-table-column prop="update_time" label="更新时间"></el-table-column>
    </el-table>
  </div>
</template>

<script>
import { productCategory } from "../../../api/face";
export default {
  components: {},
  data() {
    return {
      tableData: []
    };
  },
  computed: {},
  watch: {},
  methods: {},
  created() {
    productCategory().then(res => {
      console.log("res: ", res);
      if (res.error_status === false) {
        this.tableData = res.data.rows;
      }
    });
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
