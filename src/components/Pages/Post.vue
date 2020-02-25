<template>
  <div>
    <Master>
      <template v-slot:content>
      <Postlayout>
        <template v-slot:contentmain>
          <Postbody />
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
import Postbody from '../Layout/Partial/Postbody'
import Blogside from '../Layout/Partial/Blogside'
export default {
  name: 'Post',
  components: {
    Master,
    Postlayout,
    Postbody,
    Blogside
  }
}
</script>
