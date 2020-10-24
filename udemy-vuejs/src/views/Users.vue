<template>
    <div>
        <h3>Users</h3>
        <h1>User No. {{id}}</h1>
        <router-link :to="'/users/' +(Number(id) + 1) + '/profiles#next-user'">次のユーザのプロフィールを見る</router-link>
        <h2>-----プロフィールor投稿-----</h2>
        <router-view></router-view>
        <div style="height: 700px;"></div>
        <router-link id="next-user" :to="{ name: 'users-id-profile', params: {id:Number(id) + 1 }, query:{lang:'Ja',page:2},hash:'#next-user'}">次のユーザのプロフィールを見る</router-link>
        <div style="height: 1400px;"></div>
    </div>
</template>

<script>
export default {
    props:["id"]
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