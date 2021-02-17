const blogInfoComp = {
    props:{
        blogImg:{
            type: String,
            required: true
        },
        blogInfo:{
            type: String,
            required: true
        }
    },
    template:
    /*html*/
    `
    <div class="content">
        <div class="blog-img">
            <img :src="foodPic">
        </div>
        <div class="blog-info">
            <div>{{ foodInfo }}</div>
        </div>
    </div>
    `,
    data(){
        return {
        }
    },
    computed: {
        foodPic(){
            return this.blogImg;
        },
        foodInfo(){
            return this.blogInfo;
        }
    }
}

app.component('blog-info', blogInfoComp);