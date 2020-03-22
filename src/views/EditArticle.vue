<template>
  <v-form :model="article" @submit.native.prevent="saveArticle">
    <v-col cols="12" sm="6">
      <v-text-field
        v-model="article.title"
        label="标题"
        clearable
        hint="文章标题"
      ></v-text-field>
    </v-col>
    <!-- 文本框 -->
    <v-col cols="12" md="6">
      <v-textarea
        name="input-7-1"
        label="文章内容"
        v-model="article.body"
        value=""
        hint="正文"
      ></v-textarea>
    </v-col>
    <v-btn class="ma-2" type="submit" tile color="indigo" dark>修改</v-btn>
    <v-btn class="ma-2" tile color="" dark>取消</v-btn>
  </v-form>
</template>

<script>
export default {
  data() {
    return {
      article: {}
    };
  },
  methods: {
    saveArticle() {
      this.$http
        .put(`/articles/${this.$route.params.id}`, this.article)
        .then(() => {
          this.$router.push("/articles/index");
        });
    },
    fetch() {
      this.$http.get(`/articles/${this.$route.params.id}`).then(res => {
        this.article = res.data;
      });
    }
  },

  created() {
    this.fetch();
  }
};
</script>
