<template>
  <div>
    <Master>
      <template v-slot:content>
        <Postlayout>
          <template v-slot:contentmain>
            <div class="post-thumbnail"><a href="post.html"><img src="https://d19m59y37dris4.cloudfront.net/blog/1-2-1/img/blog-post-1.jpeg" alt="..." class="img-fluid"></a></div>
            <h2>{{ post.title}}</h2>
           <p>{{post.body}}</p>
            <Detailscomment/>
          </template>
           <template v-slot:contentside>
            <Blogside/>
          </template>
        </Postlayout>
      </template>
    </Master>
  </div>
</template>
<script>
import Master from '../Layout/Master'
import Postlayout from '../Layout/Postlayout'
import Blogside from '../Layout/Partial/Blogside'
import Detailscomment from '../Layout/Partial/Detailscomment'
import axios from 'axios'
export default {
  name: 'Details',
  components: {
    Master,
    Postlayout,
    Blogside,
    Detailscomment
  },
  data () {
    return {
      post: []
    }
  },
  created () {
    axios
      .get(
        'https://jsonplaceholder.typicode.com/posts/' + this.$route.params.teamid)
      .then(response => {
        console.log(response.data)
        this.post = response.data
      })
  }
}
</script>
