<!--  -->
<template>
  <div class="page">
    <div class="page-header">
      <span>{{ $route.query.chapter_id ? "编辑章节" : "新增章节" }}</span>
    </div>
    <div class="content">
      <el-card shadow="never" class="box-card">
        <el-form
          :label-position="labelPosition"
          label-width="80px"
          :model="formLabelAlign"
          class="form-box"
        >
          <el-form-item label="章节标题:">
            <el-input v-model="formLabelAlign.chapter_title"></el-input>
          </el-form-item>
          <el-form-item label="章节描述:">
            <el-input
              type="textarea"
              v-model="formLabelAlign.chapter_desc"
            ></el-input>
          </el-form-item>
          <el-form-item label="排序:">
            <el-input-number
              v-model="formLabelAlign.sort_order"
              :min="1"
              :max="100"
            ></el-input-number>
          </el-form-item>
          <div class="form-hr">
            <span class="label">视频时长:</span>
            <el-slider
              class="slider-box"
              v-model="formLabelAlign.vedio_duration"
            ></el-slider>
          </div>
          <div class="form-hr">
            <span class="label">视频地址:</span>
            <el-upload
              class="upload-demo"
              action="https://jsonplaceholder.typicode.com/posts/"
              :on-remove="videoRemove"
              multiple
              :limit="3"
              :on-exceed="uploadVideo"
              :file-list="videoList"
            >
              <el-button size="small" type="primary">点击上传</el-button>
              <div slot="tip" class="el-upload__tip">
                只能上传jpg/png文件，且不超过500kb
              </div>
            </el-upload>
          </div>
          <el-form-item label="章节内容:">
            <el-input
              type="textarea"
              v-model="formLabelAlign.chapter_content"
            ></el-input>
          </el-form-item>
        </el-form>
        <el-row class="btn-box">
          <el-button type="success" @click="submit">提交</el-button>
          <el-button type="success" plain>取消</el-button>
        </el-row>
      </el-card>
    </div>
  </div>
</template>

<script>
import { addChapter, editChapter, chapter } from "../../../api/face";
export default {
  components: {},
  data() {
    return {
      videoList: [],
      detailsData: {},
      labelPosition: "right",
      formLabelAlign: {
        chapter_title: "",
        chapter_desc: "",
        course_id: 0,
        chapter_type: 0,
        sort_order: 0,
        pid: 0,
        vedio_url: "",
        vedio_duration: 0,
        chapter_content: ""
      },
      activeName: ""
    };
  },
  computed: {},
  watch: {},
  methods: {
    video() {
      alert("ok");
    },
    videoRemove() {},
    uploadVideo() {},
    async getChapter() {
      const params = {
        chapter_id: this.$route.query.chapter_id,
        course_id: this.formLabelAlign.course_id
      };
      try {
        const data = await chapter(params);
        console.log("data: ", data);
        if (data.error_status === false) {
          data.data.vedio_duration = data.data.vedio_duration * 1;
          this.formLabelAlign = data.data;
          console.log(
            "data.data.vedio_duration * 1: ",
            data.data.vedio_duration * 1
          );
          console.log("this.formLabelAlign: ", this.formLabelAlign)
        }
      } catch (e) {
        console.log("e: ", e);
      }
    },
    submit() {
      if (!this.$route.query.chapter_id) {
        this.addChapter();
      } else {
        this.editChapter();
      }
    },
    async addChapter() {
      try {
        const data = await addChapter(this.formLabelAlign);
        if (data.error_status === false) {
          this.$notify({
            title: "成功",
            message: "章节添加成功",
            type: "success",
            duration: 2500
          });
          this.$router.push({
            name: "courseDetails",
            query: { course_id: this.formLabelAlign.course_id }
          });
        }
      } catch (e) {
        console.log("e: ", e);
      }
    },
    async editChapter() {
      try {
        const data = await editChapter(this.formLabelAlign);
        console.log("data: ", data);
        this.$notify({
          title: "成功",
          message: "章节修改成功",
          type: "success",
          duration: 2500
        });
        this.$router.push({
          name: "courseDetails",
          query: { course_id: this.formLabelAlign.course_id }
        });
      } catch (e) {
        console.log("e: ", e);
      }
    }
  },
  created() {
    this.formLabelAlign.course_id = this.$route.query.course_id;
    if (this.$route.query.chapter_id) {
      this.getChapter();
    }
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
  .form-box {
    width: 600px;
    margin: 0 auto;
    .form-hr {
      width: 100%;
      display: flex;
      flex-direction: row;
      vertical-align: middle;
      font-size: 14px;
      color: #606266;
      align-items: center;
      margin-bottom: 20px;
      .label {
        width: 80px;
        padding: 0 12px 0 0;
        text-align: right;
        box-sizing: border-box;
      }
      .slider-box,
      .upload-demo {
        flex: 1;
        margin-left: 10px;
      }
      .upload-demo {
        display: flex;
        flex-direction: row;
        align-items: center;
        .el-upload__tip {
          margin-left: 10px;
        }
      }
    }
  }
  .btn-box {
    margin: 40px 0 30px 0;
    display: flex;
    justify-content: center;
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
