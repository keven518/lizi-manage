<!--  -->
<template>
  <div class="app-container">
    <div class="head-container">
      <el-row>
        <el-input
          v-model="query.title"
          clearable
          size="small"
          placeholder="课程名称"
          style="width: 200px;"
          class="filter-item"
          @keyup.enter.native="toQuery"
        />
        <el-select
          v-model="query.category_id"
          class="filter-item"
          placeholder="请选择课程类别"
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
          @click="getCourseList"
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
          <el-table-column prop="course_title" label="课程标题" />
          <el-table-column prop="update_time" label="更新时间" />
          <el-table-column prop="category_name" label="课程分类" />
          <el-table-column label="操作" align="center" header-align="center">
            <template slot-scope="scope">
              <el-button size="mini" type="text" @click="details(scope.row)">
                详情
              </el-button>
              <el-button
                size="mini"
                type="text"
                style=" margin-left: 10px;"
                @click="editCourse(scope.row)"
              >
                编辑
              </el-button>
              <el-popover
                :ref="scope.row.course_id"
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
                    @click="$refs[scope.row.course_id].doClose()"
                    >取消</el-button
                  >
                  <el-button
                    :loading="delLoading"
                    type="primary"
                    size="mini"
                    @click="subDelete(scope.row.course_id)"
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
import { courseCategory, courseList, courseDelete } from "@/api/face";
export default {
  components: {},
  data() {
    return {
      pageType: '',
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
    async subDelete(course_id) {
      const params = {
        course_id
      };
      const res = await courseDelete(params);
      console.log("de-res: ", res);
      if (res.error_status === false) {
        this.getCourseList();
        this.$notify({
          title: "成功",
          message: "产品删除成功",
          type: "success",
          duration: 2500
        });
      }
    },
    details(row) {
      this.$router.push({
        name: "courseDetails",
        query: { course_id: row.course_id }
      });
    },
    editCourse(row) {
      console.log("row: ", row);
      // course_id
      this.$router.push({ name: "proManage", query: { id: row.course_id } });
    },
    toAdd() {
      this.$router.push({ name: "proManage" });
    },
    pageChangeHandler(v) {
      this.query.page = v;
      this.getCourseList();
    },
    selectionChangeHandler() {},
    resetQuery() {
      this.query.title = "";
      this.query.category_id = null;
    },
    async getCourseList() {
      const res = await courseList(this.query);
      this.proList = res.data.rows;
      this.total = res.data.count;
      console.log("res: ", res);
    },
    async getCourseCategory() {
      try {
        const res = await courseCategory();
        console.log("getCourseCategory - res: ", res);
        this.categoryList = res.data.rows;
      } catch (e) {
        // alert(e);
      }
    }
  },
  created() {
    // alert("created");
    this.getCourseList();
    this.getCourseCategory();
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
.el-button + .el-button {
  margin-left: 10px !important;
}
//@import url(); 引入公共css类
</style>
