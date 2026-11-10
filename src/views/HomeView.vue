<template>
  <div class="home">
    <Post v-for="post in postsList"
          :key="post.id" :post="post"></Post>
  </div>
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
  computed: {
    postsList() {
      return this.$store.state.postsList
    }
  },
  components: {
    Post
  }
}
</script>
