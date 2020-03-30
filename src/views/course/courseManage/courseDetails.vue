<!--  -->
<template>
  <div class="page">
    <div class="page-header">
      <span>课程详情</span>
      <el-button type="primary" icon="el-icon-edit" size="mini"
        >修改课程详情</el-button
      >
    </div>
    <div class="content">
      <el-card shadow="never" class="box-card">
        <span class="title">老师简介</span>
        <p class="content-box">{{ detailsData.tearch_desc }}</p>
        <span class="title">课程亮点</span>
        <p class="content-box">
          {{ detailsData.course_trait }}
        </p>
        <div class="title-box">
          <span class="title">课程大纲</span>
          <el-button
            type="primary"
            icon="el-icon-plus"
            size="mini"
            @click="addChapter"
            >新增课程章节</el-button
          >
        </div>
        <el-collapse class="collapse-box" v-model="activeName" accordion>
          <el-collapse-item v-for="item in chapterList" :key="item.chapter_id">
            <template slot="title">
              <div class="collapse">
                <span>{{ item.chapter_title }}</span>
                <span class="icon-box">
                  <i class="iconfont icon-video" @click.stop="video"></i>
                  <i
                    class="iconfont icon-xiugai"
                    @click.stop="editChapter(item.chapter_id)"
                  ></i>
                  <i class="iconfont icon-delete2" @click.stop="video"></i>
                </span>
              </div>
            </template>
            <div>
              {{ item.chapter_desc }}
            </div>
          </el-collapse-item>
        </el-collapse>
      </el-card>
    </div>
  </div>
</template>

<script>
import { courseDetails, chapter } from "../../../api/face";
export default {
  components: {},
  data() {
    return {
      course_id: "",
      detailsData: {},
      chapterList: [],
      activeName: ""
    };
  },
  computed: {},
  watch: {},
  methods: {
    video() {
      alert("ok");
    },
    editChapter(chapter_id) {
      this.$router.push({
        name: "chapter",
        query: { course_id: this.course_id, chapter_id }
      });
    },
    addChapter() {
      this.$router.push({
        name: "chapter",
        query: { course_id: this.course_id }
      });
    },
    async getChapter() {
      const params = {
        course_id: this.course_id
      };
      try {
        const data = await chapter(params);
        console.log("data: ", data);
        if (data.error_status === false) {
          this.chapterList = data.data;
        }
      } catch (e) {
        console.log("e: ", e);
      }
    },
    async getDetails() {
      const params = {
        course_id: this.course_id
      };
      // eslint-disable-next-line no-empty
      try {
        const data = await courseDetails(params);
        if (data.error_status === false) {
          this.detailsData = data.data;
        }
        console.log("getDetails - data: ", data);
      } catch (e) {
        console.log("e: ", e);
      }
    }
  },
  created() {
    this.course_id = this.$route.query.course_id;
    this.getDetails();
    this.getChapter()
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
.page {
  .page-header {
    display: flex;
    justify-content: space-between;
    background: #fff;
    padding: 24px 32px 20px 20px;
    line-height: 20px;
    font-size: 20px;
    border-bottom: 1px solid #e8e8e8;
  }
  .content {
    margin: 24px 24px 0;
  }
  .title {
    line-height: 30px;
    font-size: 16px;
    font-weight: 800;
  }
  .content-box {
    line-height: 30px;
    font-size: 14px;
    padding: 0 0 30px 0;
    margin: 10px 0 30px 0;
    border-bottom: 1px #ccc solid;
  }
  .title-box {
    display: flex;
    justify-content: space-between;
  }
  .collapse-box {
    margin: 20px 0 0 0;
    .collapse {
      flex: 1;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 20px 0 0;
      .iconfont + .iconfont {
        margin-left: 10px;
      }
    }
  }
}
</style>
