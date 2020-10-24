
<template>
    <nav>
        <h2>事業内容</h2>
        <h3>・Youtube</h3>
        <h3>・マスクフックの製造、販売</h3>
        <router-link to="/" active-class="link--active" exact class="link">home</router-link>
        <router-link :to="{ name: 'users-id-profile', params: {id:1 }, query:{lang:'Ja',page:2},hash:'#next-user'}" active-class="link--active" exact class="link">Users</router-link>
    </nav>
    
</template>