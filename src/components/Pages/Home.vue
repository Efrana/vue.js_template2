<template>
  <div>
    <Master>
      <template v-slot:content>
        <Header />
        <Intro />
        <Divider />
        <Latestpost />
        <Gallery />
      </template>
    </Master>
  </div>
</template>

<script>
import Master from '../Layout/Master'
import Header from '../Layout/Partial/Header'
import Intro from '../Layout/Partial/Intro'
import Divider from '../Layout/Partial/Divider'
import Latestpost from '../Layout/Partial/Latestpost'
import Gallery from '../Layout/Partial/Gallery'
export default {
  name: 'Home',
  components: {
    Master,
    Header,
    Intro,
    Divider,
    Latestpost,
    Gallery
  }
}
</script>
