const HelloVueApp = {
    data(){
        return {
            message: '~Product Sale~',
            // isOnSale: true,
            isOnSale: false,
            // inventory: 100
            // inventory: 10
            inventory: 0
        }
    }
}

const app = Vue.createApp(HelloVueApp);