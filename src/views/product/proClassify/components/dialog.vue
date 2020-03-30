<!--  -->
<template>
  <div class="">
    <el-dialog
      title="新增-修改分类"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose"
    >
      <div class="head-container">
        <!--搜索-->
        <el-row>
          <span class="form-label">类名:</span>
          <el-input
            v-model="query.category_name"
            clearable
            placeholder="输入类名"
            style="width: 200px;"
            class="filter-item"
          />
        </el-row>

        <el-row>
          <span class="form-label">分类描述:</span>
          <el-input
            v-model="query.category_desc"
            clearable
            placeholder="输入分类描述"
            style="width: 200px;"
            class="filter-item"
          />
        </el-row>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="add">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { addProdCate } from "../../../../api/face";
export default {
  components: {},
  data() {
    return {
      dialogVisible: false,
      query: {
        category_name: "",
        category_desc: ""
      }
    };
  },
  computed: {},
  watch: {},
  methods: {
    handleClose() {},
    add() {
      addProdCate(this.query).then(res => {
        console.log("res: ", res);
        if (res.error_status === false) {
          this.dialogVisible = false;
          this.$parent.getProductCategory();
        }
      });
    }
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
//@import url(); 引入公共css类
</style>
