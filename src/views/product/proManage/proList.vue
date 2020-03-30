<!--  -->
<template>
  <div class="app-container">
    <div class="head-container">
      <el-row>
        <el-input
          v-model="query.title"
          clearable
          size="small"
          placeholder="产品名称"
          style="width: 200px;"
          class="filter-item"
          @keyup.enter.native="toQuery"
        />
        <el-select
          v-model="query.category_id"
          class="filter-item"
          placeholder="请选择产品类别"
        >
          <el-option
            v-for="item in categoryList"
            :key="item.category_id"
            :label="item.category_name"
            :value="item.category_id"
          />
        </el-select>
        <el-button
          class="filter-item"
          size="mini"
          type="success"
          icon="el-icon-search"
          @click="getProList"
          >搜索</el-button
        >
        <el-button
          class="filter-item"
          size="mini"
          type="warning"
          icon="el-icon-refresh-left"
          @click="resetQuery()"
          >重置</el-button
        >
      </el-row>
      <el-row style="margin-top: 10px">
        <el-button
          class="filter-item"
          size="mini"
          type="primary"
          icon="el-icon-plus"
          @click="toAdd"
        >
          新增
        </el-button>
      </el-row>
      <el-row>
        <el-table
          v-loading="loading"
          :data="proList"
          style="width: 100%;"
          @selection-change="selectionChangeHandler"
        >
          <el-table-column type="selection" width="55" />
          <el-table-column prop="title" label="产品名称" />
          <el-table-column prop="update_time" label="更新时间" />
          <el-table-column prop="category_name" label="产品类别" />
          <el-table-column label="操作" align="center" header-align="center">
            <template slot-scope="scope">
              <el-button
                size="mini"
                type="text"
                @click="editProduct(scope.row)"
              >
                编辑
              </el-button>
              <el-popover
                :ref="scope.row.product_id"
                placement="top"
                width="280"
              >
                <p>
                  删除规则，将移除规则中空间和设备下关联人员的通行权限。操作不可逆，是否确认删除？
                </p>
                <div style="text-align: right; margin: 0">
                  <el-button
                    size="mini"
                    type="text"
                    @click="$refs[scope.row.product_id].doClose()"
                    >取消</el-button
                  >
                  <el-button
                    :loading="delLoading"
                    type="primary"
                    size="mini"
                    @click="subDelete(scope.row.product_id)"
                    >确定</el-button
                  >
                </div>
                <el-button
                  slot="reference"
                  type="text"
                  size="mini"
                  style=" margin-left: 10px;"
                >
                  删除
                </el-button>
              </el-popover>
            </template>
          </el-table-column>
        </el-table>

        <el-pagination
          :page-size.sync="query.limit"
          :total="total"
          :current-page.sync="query.page"
          style="margin-top: 8px;"
          layout="total, prev, pager, next"
          @current-change="pageChangeHandler"
        />
      </el-row>
    </div>
  </div>
</template>

<script>
import { productCategory, productList, productDelete } from "@/api/face";
export default {
  components: {},
  data() {
    return {
      delLoading: false,
      loading: false,
      proList: [],
      categoryList: [],
      total: 0,
      query: {
        title: "",
        limit: 10,
        page: 1,
        category_id: null
      }
    };
  },
  computed: {},
  watch: {},
  methods: {
    async subDelete(product_id) {
      const params = {
        product_id
      };
      const res = await productDelete(params);
      console.log("de-res: ", res);
      if (res.error_status === false) {
        this.getProList();
        this.$notify({
          title: "成功",
          message: "产品删除成功",
          type: "success",
          duration: 2500
        });
      }
    },
    editProduct(row) {
      console.log("row: ", row);
      // product_id
      this.$router.push({ name: "proManage", query: { id: row.product_id } });
    },
    toAdd() {
      this.$router.push({ name: "proManage" });
    },
    pageChangeHandler() {},
    selectionChangeHandler() {},
    resetQuery() {
      this.query.title = "";
      this.query.category_id = null;
    },
    async getProList() {
      const res = await productList(this.query);
      this.proList = res.data.rows;
      console.log("res: ", res);
    },
    async getProductCategory() {
      try {
        const res = await productCategory();
        console.log("getProductCategory - res: ", res);
        this.categoryList = res.data.rows;
        this.total = res.data.count;
      } catch (e) {
        // alert(e);
      }
    }
  },
  created() {
    // alert("created");
    this.getProList();
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
