<template>        

    <div class="p-5 text-center bg-light">
        <h1 class="mb-3">Botiga</h1>

        <button class="btn btn-info m-3" @click="currentComponent = 'Alimentacio'">Alimentacio</button>
        <button class="btn btn-info m-3" @click="currentComponent = 'Congelats'">Congelats</button>

        <keep-alive>
            <component :is = "currentComponent"></component>
        </keep-alive>

    </div>

</template>

<script>

import Alimentacio from '../components/Alimentacio.vue'
import Congelats from '../components/Congelats.vue'

export default {
    data(){
        return {
            currentComponent : "Botiga"
        }
    },
    components:
        {
            Alimentacio,
            Congelats
        }
}
</script>


