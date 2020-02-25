<template>
    <div>
    <!-- nav start-->
     <Nav/>
     <!-- header start-->
     <slot name="content"></slot>
       <!-- footer start-->
       <Footer/>
    </div>
</template>
<script>
import Nav from './Partial/Nav'
import Footer from './Partial/Footer'
export default {
  name: 'Master',
  components: {
    Nav,
    Footer
  }
}
</script>
