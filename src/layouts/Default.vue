<template>
  <div class="layout">
    <Nav />
    <slot />
    <Footer />
    <a href="#" class="back-to-top"><i class="lni-chevron-up"></i></a>

    <!--====== BACK TO TOP PART ENDS ======-->

    <!-- row -->
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import Nav from '~/components/Nav.vue'
import Footer from '~/components/Footer.vue'
export default {
  name: 'Layout',
  data() {
    return {}
  },
  components: {
    Nav,
    Footer
  }
}
</script>

<style></style>
