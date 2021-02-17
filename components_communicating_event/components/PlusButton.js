const plusButtonComp = {
    template:
    /*html*/
    `
    <button @click="addOneEvent">+1</button>
    `,
    methods: {
        addOneEvent(){
            this.$emit('add-one-event');
        }
    }
}

app.component('plus-button', plusButtonComp);