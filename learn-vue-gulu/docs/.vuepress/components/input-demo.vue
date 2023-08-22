<template>
    <div>
        <l-input value="这是输入框" class="one input"></l-input>
        <l-input value="这是输入框" disabled class="two input"></l-input>
        <l-input value="这是输入框" readonly class="three input"></l-input>
        <l-input value="123" error="请重新输入手机号码" class="four input"></l-input>
        <pre><code>{{content}}</code></pre>
    </div>
</template>

<script>
    import Input from '../../../src/input'
    export default {
        name: "input-demo",
        data(){
            return{
                content:`
<l-input value="这是输入框"></l-input>
<l-input value="这是输入框" disabled></l-input>
<l-input value="这是输入框" readonly></l-input>
<l-input value="123" error="请重新输入手机号码"></l-input>
                `.trim()
            }
        },
        components:{
            'l-input':Input,
        }
    }
</script>

<style scoped lang="scss">
    .input{
        margin:5px 3px;
    }
</style>