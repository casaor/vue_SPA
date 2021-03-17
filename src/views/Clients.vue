<template>
    <div>

        <div class="p-5 text-center bg-light">
            <h1 class="mb-3">Clients</h1>
            <router-link :to="{ name: 'clients', params: {id: item} }" 
            v-for="(item,index) of llistaClients" :key="index">
            <button type="button" class="btn btn-primary m-1">Client {{ item }}</button>
        </router-link>
        </div>

        <client></client>
    </div>

</template>

<script>
import Client from '../components/Client.vue'

export default {
    name: 'Clients',
    components:
    {
        Client 
    },
    data(){
    return{
        llistaClients: [1,2,3,4,5,6,7,8,9] 
    }
} 
}
</script>



