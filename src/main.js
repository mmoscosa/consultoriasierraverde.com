// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import '~/assets/css/bootstrap.min.css'
import '~/assets/css/font-awesome.min.css'
import '~/assets/css/LineIcons.css'
import '~/assets/css/animate.css'
import '~/assets/css/aos.css'
import '~/assets/css/slick.css'
import '~/assets/css/default.css'
import '~/assets/css/style.css'

import DefaultLayout from '~/layouts/Default.vue'

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}
