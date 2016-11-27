<template>

    <!-- 一个组件下只能有一个并列的 div，可以这么写，所以复制官网示例的时候只要复制 div 里面的内容就好。 -->

    <div id="app-6">
        <p>{{message}}</p>
        <input v-model="message">
        <h1>{{msg}}</h1>
    </div>
</template>

<script>
    export default{
        data(){
            return {
                message: 'Vue2.0',
                msg: 'Hello Vue!'
            }
        }
    }
</script>

