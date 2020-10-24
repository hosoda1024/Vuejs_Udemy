<template>
<div>
<p v-border:solid.round.shadow="{width: '5px', color:'brown'}">
Home
</p>
<h2>{{title | upperCase}}</h2>
<h2>{{subTitle | lowerCase}}</h2>
<h2>{{subTitle | lowerCase}}</h2>

<CountNumber></CountNumber>




</div>
</template>

<script>
import CountNumber from "./CountNumber.vue"
import {TokyoNumber} from "@/TokyoNumber"

export default {
mixins:[TokyoNumber],

    
    components:{
        CountNumber
    },
    computed:{
        
        
    },
   
    directives:{
        border(el,binding){
            el.style.borderWidth = binding.value.width
            el.style.borderColor = binding.value.color
            el.style.borderStyle = binding.arg
            if (binding.modifiers.shadow) {
                el.style.boxShadow= "0 2px 5px rgba(0,0,0,0.26)"
            }} 
                    
                }
}
</script>