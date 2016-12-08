<template>
    <div class="hello">
        <h1>{{msg}}</h1>
        <h1>{{msgfromfater}}</h1>
        <button @click="onClickMe">Click!</button>
    </div>
</template>

<script>
    export default{
        data(){
            return {
                msg: 'Hello from component a!'
            }
        },
//        prop 是父组件用来传递消息的一个自定义属性。
        props: ['msgfromfather'],
        methods: {
            onClickMe() {
//                console.log(this.msgfromfather)
                this.$emit('child-tell-me-something',this.msg);
            }
        }
    }
</script>

<style>
    h1 {
        color: #42b983;
    }
</style>