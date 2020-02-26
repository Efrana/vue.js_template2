<template>
  <main class="posts-listing col-lg-8">
    <div class="container">
      <div class="row">
        <!-- post -->
        <div class="post col-xl-6" v-for="post in posts.slice(0,4)" :key="post.id">
          <div class="post-thumbnail"><a href="post.html"><img src="https://d19m59y37dris4.cloudfront.net/blog/1-2-1/img/blog-post-1.jpeg" alt="..." class="img-fluid"></a></div>
          <router-link :to="{ name: 'Details', params: { teamid:post.id}}"><h3>{{ post.title}}</h3></router-link>
          <p>{{post.body}}</p>
        </div>
        <!-- post             -->
    </div>
    </div>
  </main>
</template>
<script>
import axios from 'axios'
export default {
  name: 'Blogbody',
  data () {
    return {
      posts: []
    }
  },
  created () {
    axios.get('https://jsonplaceholder.typicode.com/posts').then(response => {
      console.log(response)
      this.posts = response.data
    })
  }
}
</script>
