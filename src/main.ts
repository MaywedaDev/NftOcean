import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/scss/bootstrap.scss'
import 'bootstrap/dist/js/bootstrap.min.js'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowRightLong, faHatWizard, faHeart as fasHeart, faGlobe, faUser, faCircleQuestion } from '@fortawesome/free-solid-svg-icons'
import { faHeart, faEnvelope, faCompass, faCalendar} from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faEthereum, faDiscord, faTwitter, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons'


library.add(faHatWizard, faArrowRightLong, faEthereum, faHeart, fasHeart, faDiscord, faTwitter, faYoutube, faEnvelope, faInstagram, faGlobe, faCompass, faCalendar, faUser, faCircleQuestion)


createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
