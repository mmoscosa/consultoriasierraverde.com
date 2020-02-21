<template>
  <Layout>
    <Header />
    <About />
    <Services />
    <Project />
    <Team />
    <Contact />
    <Map />
  </Layout>
</template>

<script>
import Header from '~/components/Header.vue'
import About from '~/components/About.vue'
import Services from '~/components/Services.vue'
import Project from '~/components/Project.vue'
import Team from '~/components/Team.vue'
import Testimonial from '~/components/Testimonial.vue'
import Contact from '~/components/Contact.vue'
import Map from '~/components/Map.vue'
export default {
  components: {
    Header,
    About,
    Services,
    Project,
    Team,
    Testimonial,
    Contact,
    Map
  }
}
</script>

<style></style>
