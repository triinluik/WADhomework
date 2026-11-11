<template>
  <!-- Paigutus joonise 3 järgi: külgveerg, postitused, külgveerg -->
  <main class="layout">
    <aside></aside>

    <section class="posts">
      <Post v-for="post in postsList"
            :key="post.id" :post="post"></Post>
      <!-- Resets the like counters -->
      <button type="button" class="reset-button" @click="resetLikes">
        Reset likes
      </button>
    </section>

    <aside></aside>
  </main>
</template>

<script>

import Post from '@/components/Post.vue'

export default {
  name: 'HomeView',
  // Runs once HomeView component is mounted
  mounted() {
    //Dispatches the Vuex action to fetch posts
    this.$store.dispatch('fetchPosts')
  },
  // Update automatically when their dependencies change
  computed: {
    //Retrieves the posts array from the central Vuex store
    // When Vuex updates the posts, Vue updates the displayed lists.
    postsList() {
      return this.$store.state.postsList
    }
  },
  //Registers the reusable Post component so that it can be used
  // in this view's template to display each individual post
  components: {
    Post
  },
  methods: {
    resetLikes() {
      // Calls the Vuex mutation to reset every post's like counter
      this.$store.commit('resetLikes')
    }
  }
}
</script>