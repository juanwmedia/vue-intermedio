<template>
    <div>
        <h1>Los detalles:</h1>
        <p>{{ detalles.tituloTarea }}</p>
    </div>
</template>

<script>
//import EventBus from '../EventBus.js';
import state from '../state.js';
export default {
    name: 'TereaDetalles', 
    created() {
        this.detalles = state.state;
        //EventBus.$on('detalles', detalles => this.detalles = detalles);
    },
    data() {
        return {
            detalles: '',
        }
    }
}
</script>

<style scoped>
    div {
        position: fixed;
        width: 500px;
        height: 200px;
        top: 0;
        left: 0;
        padding: 20px;
        background: rgba(255, 255, 255, .7);
        border: 1px solid black;
    }
</style>