const HelloVueApp = {
    data(){
        return {
            message: '~Shopping List~',
            foods:['apple','banana','lemon'],
            clothes:['skirt', 'pants', 'T-shirt'],
            others:[
                {id:'aaa', name:'toy', num: 10},
                {id:'bbb', name:'phone', num: 2},
                {id:'ccc', name:'book', num: 5}
            ]
        }
    }
}

const app = Vue.createApp(HelloVueApp);