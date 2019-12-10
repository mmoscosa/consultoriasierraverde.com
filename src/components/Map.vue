<template>
  <section id="map" class="map-area">
    <div class="mapouter">
      <div class="gmap_canvas">
        <iframe
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=university%20of%20san%20francisco&t=&z=13&ie=UTF8&iwloc=&output=embed"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
        ></iframe>
      </div>
    </div>
    <div
      class="map-bg bg_cover d-none d-lg-block"
      style="background-image: url(assets/images/map/map-bg.jpg)"
    ></div>
  </section>
</template>

<script>
export default {}
</script>

<style></style>
