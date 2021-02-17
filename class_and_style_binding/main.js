const HelloVueApp = {
    data(){
        return {
            colors: ['red', 'yellow', 'green'],
            setBorderColor: 'red',
            isButtonEnable: true,
            buttonStatus: ['啟用按鈕', '禁用按鈕']
        }
    },
    methods:{
        changeBorderColor(color){
            this.setBorderColor = color;
        }
    }
}

const app = Vue.createApp(HelloVueApp);