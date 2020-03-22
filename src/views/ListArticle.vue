<template>
  <v-data-table :headers="headers" :items="articles">
    <template v-slot:top>
      <v-toolbar flat color="black">
        <v-toolbar-title>文章管理</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>
      </v-toolbar>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon small class="mr-2" @click="edit(item._id)">
        mdi-pencil
      </v-icon>
      <v-icon small @click="remove(item._id)">
        mdi-delete
      </v-icon>

      

    </template>

    <v-alert
      v-model="alert"
      dismissible
      color="cyan"
      border="left"
      elevation="2"
      colored-border
      icon="mdi-twitter"
    >
    </v-alert>
  </v-data-table>
</template>

<script>
export default {
  data() {
    return {
      articles: [],
      headers: [
        {
          text: "标题",
          align: "start",
          sortable: false,
          value: "title"
        },
        { text: "内容", value: "body" },
        { text: "Actions", value: "actions", sortable: false }
      ],
      desserts: [],
      alert: true
    };
  },
  methods: {
    fetch() {
      this.$http.get("articles").then(res => {
        this.articles = res.data;
      });
    },
    edit(id) {
      this.$router.push(`/articles/${id}/edit`);
    },

    remove(id) {
      this.$http.delete(`/articles/${id}`).then(() => {
        confirm("确定删除");
      }),
        this.fetch();
    }
  },

  created() {
    this.fetch();
  }
};
</script>
