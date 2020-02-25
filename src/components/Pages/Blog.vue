<template>
  <div>
    <Master>
      <template v-slot:content>
      <Postlayout>
        <template v-slot:contentmain>
          <Blogbody />
        </template>
        <template v-slot:contentside>
          <Blogside />
        </template>
        </Postlayout>
      </template>
    </Master>
  </div>
</template>
<script>
import Master from '../Layout/Master'
import Postlayout from '../Layout/Postlayout'
import Blogbody from '../Layout/Partial/Blogbody'
import Blogside from '../Layout/Partial/Blogside'
export default {
  name: 'Blog',
  components: {
    Master,
    Postlayout,
    Blogbody,
    Blogside
  }
}
</script>
