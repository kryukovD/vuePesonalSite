<script>

import HeaderComponent from './HeaderComponent.vue';
import MainBannerComponent from './MainBannerComponent.vue';
import TechnologiesComponent from './TechnologiesComponent.vue';
import ServicesComponent from './ServicesComponent.vue';
import FormComponent from "./FormComponent.vue";

export default {
    data(){
        return{
            
        }
        HeaderComponent
    },
    components:{
        'header-component':HeaderComponent,
        'main-banner':MainBannerComponent,
        'technologies-component':TechnologiesComponent,
        "services-component":ServicesComponent,
        "form-component":FormComponent
    }
}
</script>
<template>
    <header-component></header-component>
    <main-banner></main-banner>
    <technologies-component></technologies-component>
    <services-component></services-component>
    <form-component></form-component>
</template>