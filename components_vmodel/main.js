const HelloVueApp = {
    data(){
        return {
            formData: null
        }
    },
    methods:{
        setFormData(data){
            this.formData=data;
        }
    }
}

const app = Vue.createApp(HelloVueApp);