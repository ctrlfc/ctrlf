<template>

    <!-- 一个组件下只能有一个并列的 div，可以这么写，所以复制官网示例的时候只要复制 div 里面的内容就好。 -->

    <div id="app">
        <h1 v-text="title"></h1>
        <input v-model="newItem" @keyup.enter="addNew">
        <ul>
            <li v-for="(item,index) in items" :class="{finished:item.isFinished}" @click="toggle(item)">
                {{item.label}}
            </li>
        </ul>
        <p>child tells me: {{childWords}}</p>
        <componentA msgfromfather="you die!" @child-tell-me-something="listenToMyBoy"></componentA>
    </div>
</template>

<script>
    import Store from './store.js'
    //        console.log(Store.save("ddd"));
    import ComponentA from './components/componentA.vue'
    export default{
        data(){
            return {
                title: 'this is a todo list',
                items: //                    {
//                        label: 'coding',
//                        isFinished: true
//                    },
//                    {
//                        label: 'walking',
//                        isFinished: true
//                    }
                        Store.fetch(),
                newItem: '',
                childWords:'',
            }
        },
        components: {ComponentA},
        watch: {
            items: {
                handler(items){
//                    console.log(val,oldvalue);
                    Store.save(items)
                },
                deep: true
            }
        },
        methods: {
            toggle(item) {
                item.isFinished = !item.isFinished;
            },
            addNew(){
//                console.log(this.newItem);
                this.items.push({
                    label: this.newItem,
                    isFinished: false
                });
                this.newItem = ''
            },
            listenToMyBoy(msg){
                this.childWords = msg;
            }
        }
    }

</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        /*display: inline-block;*/
        /*width: 200px;*/
        /*border: 1px solid #59c5ff;*/
        margin: 0 10px;
    }

    .finished {
        color: #B94047;
    }

    a {
        color: #42b983;
    }
</style>