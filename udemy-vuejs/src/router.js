import Vue from 'vue'
//プラグインのimport
import Router from 'vue-router'
import Home from "./views/Home.vue"
import Users from "./views/Users.vue"
import UsersPosts from "./views/UsersPosts.vue"
import UsersProfiles from "./views/UsersProfile.vue"
import headerHome from "./views/headerHome.vue"
import headerUsers from "./views/headerUsers.vue"



//プラグインの使用を宣言
Vue.use(Router)

export default
new Router({
    mode: "history",
    routes: [
        {
            path: '/',
            components: {
                default: Home,
                header: headerHome
            }
        },
        {
            path: '/users/:id',
            components: {
                default: Users,
                header: headerUsers
            }, 
            props: {
                default: true,
                header:false
            },
            children:[
                {path: "posts", component:UsersPosts},
                {path: "profiles", component:UsersProfiles, name: "users-id-profile"}
            ]    
        },
        // {
        //     path: "*",
        //     redirect: "/"
        // }
    ],
    scrollBehavior(to, from,savedPosition){
        if(savedPosition){
            return savedPosition
        }
        if(to.hash){

            return{
                selector: to.hash,
                // offset:{x:0,y:100}
            }
        }
        return{x:0,y:0}
    }
})