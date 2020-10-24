<template>
<div>

<h2>{{title | upperCase}}</h2>
<h2>{{subTitle | lowerCase}}</h2>
<h2>{{subTitle | lowerCase}}</h2>




</div>
</template>

<script>
import {TokyoNumber} from "@/TokyoNumber"

export default {
    mixins:[TokyoNumber],

    
    computed:{
        
        
    },
   
}
</script>