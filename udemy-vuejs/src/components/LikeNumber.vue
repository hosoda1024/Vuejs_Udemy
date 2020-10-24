<template>
<div>

<p>いいね({{halfNumber}})</p>
<button @click="increment">+1</button>
</div>
</template>

<script>
export default{
    props:["Number","testprops"],
    computed:{
        halfNumber(){
            return this.Number/2
        }
    },
    methods:{
        increment(){
            this.$emit("my-click", this.Number+1)
            //$emitとは、子コンポーネントの特定のタイミングで、親コンポーネントの
            //イベントを発火できるスイッチ

        }
    }
};

</script>

<style scoped>
</style>
