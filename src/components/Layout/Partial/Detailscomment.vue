<template>
  <div>
    <div v-for="post in post" :key="post.id">
   <h4>{{post.name}}</h4>
   <p>{{post.body}}</p>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'Detailscomment',
  data () {
    return {
      post: []
    }
  },
  created () {
    axios
      .get(
        'https://jsonplaceholder.typicode.com/posts/' + this.$route.params.teamid + '/comments')
      .then(response => {
        console.log(response.data)
        this.post = response.data
      })
  }
}
</script>
