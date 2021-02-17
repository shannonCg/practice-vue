const HelloVueApp = {
    data(){
        return {
            foodPic: './assets/apple.jpeg',
            foods: [
                {id: '1', name: 'apple', img: './assets/apple.jpeg'},
                {id: '2', name: 'banana', img: './assets/banana.jpeg'},
                {id: '3', name: 'lemon', img: './assets/lemon.jpeg'}
            ],
            buyTimes: 0
        }
    },
    methods:{
        changeFoodPic(imgPath){
            this.foodPic = imgPath;
        }
    }
}

const app = Vue.createApp(HelloVueApp);