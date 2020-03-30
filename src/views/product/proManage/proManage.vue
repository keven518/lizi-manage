<!-- https://www.showdoc.cc/676767222857812?page_id=3908829914806444 -->
<template>
  <div class="app-container">
    {{ product_id ? "修改产品" : "新增产品" }}
    <el-form ref="form" :model="form" size="small" label-width="88px">
      {{ product_id }}
      <el-form-item label="产品标题">
        <el-input
          v-model="form.title"
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
      <el-form-item label="产品类别">
        <el-select v-model="form.category_id" placeholder="请选择产品类别">
          <el-option
            v-for="item in categoryList"
            :key="item.category_id"
            :label="item.category_name"
            :value="item.category_id"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="市场价">
        <el-input
          v-model="form.market_price"
          type="number"
          auto-complete="on"
          style="width: 370px;"
        />
      </el-form-item>
      <el-form-item label="商店价">
        <el-input
          v-model="form.shop_price"
          type="number"
          auto-complete="on"
          style="width: 370px;"
        />
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
      <el-form-item label="产品描述	">
        <el-input
          v-model="form.product_desc"
          type="text"
          auto-complete="on"
          style="width: 370px;"
        />
      </el-form-item>
      <el-form-item label="是否显示">
        <el-switch v-model="form.is_show"></el-switch>
      </el-form-item>
      <el-form-item label="是否精品">
        <el-switch v-model="form.is_best"></el-switch>
      </el-form-item>
      <el-form-item label="是否热销">
        <el-switch v-model="form.is_hot"></el-switch>
      </el-form-item>
      <el-form-item label="排序">
        <el-input-number
          v-model="form.sort_order"
          :min="1"
          :max="10"
          label="描述文字"
        ></el-input-number>
      </el-form-item>
      <el-form-item label="销量">
        <el-input-number
          v-model="form.sales_volume"
          :min="1"
          :max="10"
          label="描述文字"
        ></el-input-number>
      </el-form-item>
      <el-form-item label="库存量">
        <el-input-number
          v-model="form.stock_num"
          :min="1"
          :max="10"
          label="描述文字"
        ></el-input-number>
      </el-form-item>
      <el-form-item label="活动时间">
        <el-date-picker
          v-model="form.activity_time"
          type="date"
          placeholder="选择日期"
        >
        </el-date-picker>
      </el-form-item>
      <el-upload
        class="upload-demo"
        action="http://www.liztrip.com/attach/upload"
        :on-preview="handlePreview_imgArr"
        :on-remove="handleRemove_imgArr"
        :file-list="imgArr"
        list-type="picture"
        :on-success="handleAvatarSuccess_imgArr"
      >
        <el-button size="small" type="primary">点击上传</el-button>
        <div slot="tip" class="el-upload__tip">
          只能上传jpg/png文件，且不超过500kb
        </div>
      </el-upload>
    </el-form>
    {{ form.content }}
    <tinymce-editor
      ref="editor"
      v-model="form.content"
      :disabled="disabled"
      :base-url="baseUrl"
      :language="language"
      :skin="skin"
      @onClick="onClick"
    >
    </tinymce-editor>
    <!-- <button @click="clear">清空内容</button>
    <button @click="disabled = true">禁用</button>
    <button @click="disabled = false">启用</button> -->
    <el-button type="primary" size="mini" @click="submit">确定</el-button>
  </div>
</template>

<script>
// addProdCate
import {
  productCategory,
  addProduct,
  productList,
  productUpdata
} from "../../../api/face";
import TinymceEditor from "../../../components/tinymce-editor/tinymce-editor";
export default {
  components: { TinymceEditor },
  data() {
    return {
      data: "",
      product_id: "",
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
        title: "",
        remark_title: "",
        category_id: 0,
        market_price: 0,
        is_show: false,
        shop_price: 0,
        product_image: "",
        sort_order: 0,
        sales_volume: 0,
        stock_num: 0,
        activity_time: 0,
        images: "",
        content: ""
      }
    };
  },
  computed: {},
  watch: {},
  methods: {
    async getProList() {
      const param = {
        product_id: this.product_id
      };
      const res = await productList(param);
      this.form = res.data;
      console.log("this.form: ", this.form);
    },
    handleRemove_imgArr(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview_imgArr(file) {
      console.log(file);
    },
    handleAvatarSuccess(res, file) {
      console.log("res: ", res);
      console.log("file: ", file);
      this.form.product_image = res.data.url;
    },
    handleAvatarSuccess_imgArr(res) {
      this.imgArr.push(res.data.url);
    },
    // submit
    submit() {
      console.log("fileList: ", this.fileList);
      console.log("this.form:", this.form);
      console.log("imgArr: ", this.imgArr);
      this.form.images = this.imgArr.toString();
      if (this.product_id) {
        this.form.product_id = this.product_id;
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
        addProduct(this.form)
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
      const res = await productCategory(param);
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
    this.product_id = this.$route.query.id;
    this.getProList();
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
