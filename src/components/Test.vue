<template>
    <div class="test">
        <input type="text" v-model="title">
        <br />
        <h1>{{title}}</h1>
        <P v-if="showName">{{user.firstName}}</P>
        <p v-else>Teste</p>
        <ul>
            <li v-for="(item, k) in items" :key="k">{{ item.title }}</li>
        </ul>
        <button @click="greet('Hello World')">Say Greeting</button>
        <br />
        <input type="text" @keyup="pressKey" @keyup.enter="enterHit">
        <hr />
        <input>
    </div>
</template>

<script>
export default {
    name: 'test',
    data () {
        return{
            title: 'Hello World',
            user: {
                firstName: 'Bruno',
                lastName: 'Henrique'
            },
            showName:  true,
            items: [
                {title: 'Item One'},
                {title: 'Item Two'},
                {title: 'Item Three'}
            ]
        }
    },
    methods: {
        greet: function(greeting) {
            alert(greeting);
        },
        pressKey: function(e) {
            console.log(e.target.value);
        },
        enterHit: function() {
            console.log('passou no enter');
        }
    }
}
</script>

<style scope>

</style>
