import { createApp,h } from 'vue'
import './style.css'
import MainPageComponent from "./components/MainPageComponent.vue"
import axios from 'axios'
import VueAxios from 'vue-axios'
const routes = {
    '/': MainPageComponent,
  }
  
  const SimpleRouter = {
    data: () => ({
      currentRoute: window.location.pathname
    }),
  
    computed: {
      CurrentComponent() {
        return routes[this.currentRoute] || NotFoundComponent
      }
    },
  
    render() {
      return h(this.CurrentComponent)
    }
  }

createApp(SimpleRouter).use(VueAxios,axios).mount('#app')
