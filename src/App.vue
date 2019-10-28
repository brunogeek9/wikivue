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
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: "app",
  components: {
    // HelloWorld
  },
  computed: {
    query: {
      get() {
        return this.$store.state.query;
      },
      set(value) {
        his.$store.commit("updateQuery", value);
      },
      articles() {
        return this.$store.getters.articles;
      }
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
