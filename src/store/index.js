import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    query: "", articles: []
  },
  mutations: {
    updateQuery(state, query) {
      state.query = query;
    },
    articles(state, articles) {
      state.articles = articles;
    }
  },
  actions: {
    async getArticles({ state, commit }) {
      const cors_proxy = 'https://cors-anywhere.herokuapp.com/'
      const url = `${cors_proxy}https://en.wikipedia.org/w/api.php?action=opensearch&search=
      ${state.query}&origin=*`;

      const response = await axios.get(url);
      window.console.log(response);
      const articles = [];

      for (let i = 0, j = response.data[i].length - 1; i < j; i++) {
        articles[i] = {
          title: response.data[1][i],
          snippet: response.data[2][i],
          url: response.data[3][i]
        };
      }

      commit("articles", articles);
    }
  },
  getters: {
    query(state) {
      return state.query;
    },
    articles(state) {
      return state.articles || [];
    }
  }
})
