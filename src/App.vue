<template>
  <div class="container">
    <header>
      <h1>{{title}}</h1>
      <input
        type="text"
        placeholder="Search from wikipedia"
        autofocus
        v-model="query"
        v-on:input="getArticles"
      />
    </header>
    <ul class="list-group list-unstyled">
      <li v-for="(item, index) in articles" :key="index">
        <a :href="item.url" class="list-group-item list-group-item-action" target="_blank">
          <h1>{{ item.title }}</h1>

          <p>{{ item.snippet }}</p>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "app",
  computed: {
    query: {
      get() {
        return this.$store.state.query;
      },
      set(value) {
        this.$store.commit("updateQuery", value);
      },
      ...mapGetters([
        "articles"
        // ...
      ])
    }
  },
  methods: {
    getArticles() {
      if (this.query) {
        this.$store.dispatch("getArticles");
      }
    }
  },
  data() {
    return {
      title: "Wikipedia Viewer"
    };
  }
};
</script>

<style>
.container {
  max-width: 760px;
  margin: 0 auto;
  padding: 2em;
}
h1 {
  text-align: center;
}
main > header {
  margin-bottom: 4em;
}
</style>
