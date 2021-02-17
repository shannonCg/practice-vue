const HelloVueApp = {
    data(){
        return {
            result: 0
        }
    },
    methods:{
        addOne(){
            this.result+=1;
        }
    }
}

const app = Vue.createApp(HelloVueApp);