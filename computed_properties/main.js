const HelloVueApp = {
    data(){
        return {
            colors: ['red', 'yellow', 'green'],
            selectedColorIndex: 0
        }
    },
    computed:{
        setBorderColor(){
            return this.colors[this.selectedColorIndex];
        }
    }
}

const app = Vue.createApp(HelloVueApp);