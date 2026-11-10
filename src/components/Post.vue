<script>
export default {
  name: "PostItem",
  // Props are like arguments passed from parent compo to a child
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  methods: {
    // Formats the date from JSON into readable date.
    // Adding T00:00:00 ensures the date is interpreted as local midnight
    formatDate(date) {
      return new Date(date + "T00:00:00")
          .toLocaleDateString("en-US", {month: "short", day: "numeric", year: "numeric"});
    },
    // Handles a like button click for an individual post.
    // Passes postId to the Vuex incrementLikes mutation,
    // which in turn updates the like counter in the central store.
    likePost(postId) {
      this.$store.commit("incrementLikes", postId);
    }
  }
}

</script>

<template>
<article class="post">
  <!-- Header contains the avatar and creation date -->
  <div class="post-header">
    <!-- Bind the avatar img and author from the post object -->
    <img :src="post.authorAvatar" :alt="post.author">
    <!-- Displays the formatted date using formatDate method -->
    <time :datetime="post.createTime"> {{ formatDate(post.createTime)}}</time>
  </div>
  <!-- If JSON object contains image, display it -->
  <img v-if="post.image" :src="post.image" class="post-image" :alt="post.imageAlt"/>
  <!-- Display post text -->
  <p> {{ post.text }}</p>
  <!-- Like button displays the current number of likes -->
  <button class="like" type="button" @click="likePost(post.id)">
    👍 {{ post.likes }}
  </button>
</article>
</template>

<style scoped>

</style>