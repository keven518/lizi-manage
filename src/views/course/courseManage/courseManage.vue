<!-- https://www.showdoc.cc/676767222857812?page_id=3908829914806444 -->
<template>
  <div class="app-container">
    {{ course_id ? "修改产品课程" : "新增课程" }}
    <el-form ref="form" :model="form" size="small" label-width="88px">
      {{ course_id }}
      <el-form-item label="课程标题">
        <el-input
          v-model="form.course_title"
          type="text"
          auto-complete="on"
          style="width: 370px;"
        />
      </el-form-item>
      <el-form-item label="副标题	">
        <el-input
          v-model="form.remark_title"
          type="text"
          auto-complete="on"
          style="width: 370px;"
        />
      </el-form-item>
      <el-form-item label="作者简介	">
        <el-input
          v-model="form.author_desc"
          type="text"
          auto-complete="on"
          style="width: 370px;"
        />
      </el-form-item>
      <el-form-item label="作者简介">
        <el-input
          v-model="form.author_desc"
          type="text"
          auto-complete="on"
          style="width: 370px;"
        />
      </el-form-item>
      <el-form-item label="课程特色">
        <el-input
          v-model="form.course_trait"
          type="text"
          auto-complete="on"
          style="width: 370px;"
        />
      </el-form-item>
      <el-form-item label="教师介绍">
        <el-input
          v-model="form.tearch_desc"
          type="text"
          auto-complete="on"
          style="width: 370px;"
        />
      </el-form-item>
      <el-form-item label="课程类别">
        <el-select v-model="form.category_id" placeholder="请选择课程类别">
          <el-option
            v-for="item in categoryList"
            :key="item.category_id"
            :label="item.category_name"
            :value="item.category_id"
          />
        </el-select>
      </el-form-item>
      <el-upload
        class="upload-demo"
        drag
        action="http://www.liztrip.com/attach/upload"
        :on-success="handleAvatarSuccess"
        multiple
      >
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        <div class="el-upload__tip" slot="tip">
          只能上传jpg/png文件，且不超过500kb
        </div>
      </el-upload>
    </el-form>
    <!-- <button @click="clear">清空内容</button>
    <button @click="disabled = true">禁用</button>
    <button @click="disabled = false">启用</button> -->
    <el-button type="primary" size="mini" @click="submit">确定</el-button>
  </div>
</template>

<script>
// addProdCate
import { courseCategory, addCourse, productUpdata } from "../../../api/face";
export default {
  components: {},
  data() {
    return {
      data: "",
      course_id: "",
      categoryList: [],
      options: {
        language_url: "https://ym-smartspace.yunzhisheng.cn:8088/hotel/zh_CN.js" //This url points to location of persian language file.
      },
      msg: "Welcome to Use Tinymce Editor-liubing.me",
      fileList: [],
      imgArr: [],
      disabled: false,
      baseUrl: process.env.NODE_ENV === "production" ? "/vue-use-tinymce" : "",
      language: "zh_CN",
      skin: "oxide",
      form: {
        course_title: "",
        remark_title: "",
        category_id: 0,
        author_desc: "",
        author_image: "",
        course_trait: "",
        tearch_desc: ""
      }
    };
  },
  computed: {},
  watch: {},
  methods: {
    handleAvatarSuccess(res, file) {
      console.log("res: ", res);
      console.log("file: ", file);
      this.form.author_image = res.data.url;
    },
    // submit
    submit() {
      if (this.course_id) {
        this.form.course_id = this.course_id;
        // productUpdata
        productUpdata(this.form)
          .then(res => {
            console.log("res: ", res);
            this.$notify({
              title: "成功",
              message: "用户规则修改成功",
              type: "success",
              duration: 2500
            });
            this.$router.push({ name: "proList" });
          })
          .catch(e => {
            console.log(e);
          });
      } else {
        console.log("form: ", this.form);
        addCourse(this.form)
          .then(res => {
            console.log("res: ", res);
            this.$notify({
              title: "成功",
              message: "新增课程成功",
              type: "success",
              duration: 2500
            });
            this.$router.push({ name: "proList" });
          })
          .catch(e => {
            console.log(e);
          });
      }
      // try {
      //   console.log('sub-res: ', res)
      // } catch (e) {
      //   alert(e)
      // }
    },
    // 产品类别
    async getCategory() {
      const param = {};
      const res = await courseCategory(param);
      if (res.error_status === false) {
        this.categoryList = res.data.rows;
      }
    },
    // 鼠标单击的事件
    onClick(e, editor) {
      console.log("Element clicked");
      console.log(e);
      console.log(editor);
    },
    // 清空内容
    clear() {
      this.$refs.editor.clear();
    }
  },
  created() {
    console.log("this.$route.query: ", this.$route.query);
    this.course_id = this.$route.query.id;
    this.getCategory();
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
