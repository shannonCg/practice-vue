const HelloVueApp = {
    data(){
        return {
            vueLink: 'https://v3.vuejs.org/guide/introduction.html#what-is-vue-js',
            vuePic: './assets/vue_logo.png'
        }
    }
}

const app = Vue.createApp(HelloVueApp);