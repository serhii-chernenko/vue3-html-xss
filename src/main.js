import { createApp } from 'vue'
import Vue3Sanitize from 'vue-3-sanitize'
import App from './App.vue'
import '@/assets/main.css'
import terminal from 'virtual:terminal'
globalThis.console = terminal

const app = createApp(App)
app.use(Vue3Sanitize, {
    allowedTags: ['p', 'a', 'img'],
    allowedAttributes: {
        a: ['href', 'name', 'target'],
        img: ['src', 'alt'],
    },
})
app.mount('#app')
