<template>
    <div>
        <h3>
            {{ titulo }} 
            <button @click="$emit('eliminarTarea')">Eliminar</button>
        </h3>
    </div>
</template>

<script>
    export default {
        name: 'Tarea',
        props: ['titulo']
    }
</script>