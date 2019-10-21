<template>
    <div>
        <h3>
            {{ titulo }} 
            <button @click="mostrarDetalles(titulo)">Eliminar</button>
        </h3>
    </div>
</template>

<script>
    //import EventBus from '../EventBus.js';
    import state from '../state.js';
    export default {
        name: 'Tarea',
        props: ['titulo'],
        methods: {
            // Acción
            mostrarDetalles(titulo) {
                //EventBus.$emit('detalles', titulo);
                state.guardarTarea(titulo);
            }
        }
    }
</script>

<style lang="scss" scoped>
    h3 {
        color: $corporativo;
    }

    button {
        background-color: $alternativo;
        color: white;
    }
</style>