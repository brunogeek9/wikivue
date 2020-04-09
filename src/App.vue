<template>


  <div class="container">
    <header>
      <h1>{{title}}</h1>
      <input
        type="text"
        placeholder="Search from wikipedia"
        autofocus
        v-model="query"
        @change="getArticles"
        @keyup.enter="getArticles"
      />
      <!-- <input type="submit" @click="getArticles"> -->
    </header>
    <ul>
      <li v-for="(item, index) in this.$store.getters.articles" v-bind:key="index">
        <div class="card">
          <a v-bind:href="item.url" target="_blank">
            <header class="card-title">
                <h2>{{item.title}}</h2>
            </header>
            <footer>
              <p>{{item.url}}</p>
            </footer>
          </a>
        </div>
      </li>
    </ul>
    <!-- {{this.$store.getters.articles}} -->
  </div>
</template>
<script>
// import { mapGetters } from "vuex";
export default {
  name: "app",
  computed: {
    query: {
      get() {
        // window.console.log(this.$store.state.articles)

        return this.$store.state.query;
      },
      set(value) {
        this.$store.commit("updateQuery", value);
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
      title: "Wikipedia Viewer",
      // articles: this.$store.getters.articles

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
  color: red;
}
h2{
  color: black;
  font-weidth: bold;
}
main > header {
  margin-bottom: 4em;
}
ul{
  list-style-type: none;
  margin-top: 20px;
  margin: 0 auto;
  padding: 2em;
}
header, footer{
  font-size: 22px;
  font-family: 'Gotu', sans-serif;
  border-style: none;
}

body{
  font-family: 'Work Sans', sans-serif;
}

a{
  font-family: 'Space Mono', monospace;
}
</style>
