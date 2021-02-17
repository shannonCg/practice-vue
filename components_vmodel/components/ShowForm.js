const showFormComp = {
    props:['data'],
    template:
    /*html*/
    `
    <div>
    {{data.name}} rate {{data.rate}} stars, and leave comment: {{data.comment}}
    </div>
    `
}

app.component('show-form', showFormComp);