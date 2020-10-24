<template>
    <div>
        <h2>メンバー</h2>
        <h3>・村田</h3>
        <h3>・神戸</h3>
        <h3>・竹内</h3>
        <h3>・細田</h3>
        <button @click="toUsers">Usersのページに行く</button>
    </div>
</template>

<script>
export default {
    methods:{
        toUsers(){
            this.$router.push({
                name: "users-id-profile",
                params: {id:1 }
            });
        }        
    }
}
</script>

<style  scoped>
    .link{
        margin-right: 10px;
    }
    .link--active{
        font-size: 20px
    }
</style>