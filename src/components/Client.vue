<template>

    <div>

        <div class="p-5 text-center" style="background-color: #EEE9E9;">
            <h2 class="mb-3">Client {{ $route.params.id }}</h2>
            <button @click="tornarClients" type="button" class="btn btn-info">Tornar a clients</button>
        </div>

    </div>

</template>

<script>

export default {
    name: 'Client',
    methods:{
        tornarClients(){
            this.$router.push('../clients')
        }
    }
}
</script>
