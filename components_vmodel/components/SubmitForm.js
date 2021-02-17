const submitFormComp = {
    template:
    /*html*/
    `
    <form @submit.prevent="onSubmit">
            <div>
                Name:<input id="name" v-model="name">
            </div>
            <div>
                Rate:
                <select id="rate" v-model="rate">
                    <option>1</option>
                    <option>5</option>
                    <option>10</option>
                </select>
            </div>
            <div>
                Comment:<textarea id="comment" v-model="comment"></textarea>
            </div>
            <button type="submit">Confirm</button>
    </form>
    `,
    data(){
        return {
            name:'',
            rate:null,
            comment:''
        }
    },
    methods: {
        onSubmit(){
            let formReview = {
                name: this.name,
                rate: this.rate,
                comment: this.comment
            }
            this.$emit('submit-form-event', formReview)

            this.name = ''
            this.rate = null
            this.comment = ''
        }
    }
}

app.component('submit-form', submitFormComp);