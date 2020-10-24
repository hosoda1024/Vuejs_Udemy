<template>
    <div>
    <slot></slot>
    </div>
</template>

<script>
export default {
    data(){
        return{
            user:{
                firstName:"hosoda",
                lastName:"kentaro"
            }
        }
    }
}
</script>

<style scoped>
h2 {
    color: red;
}
</style>
