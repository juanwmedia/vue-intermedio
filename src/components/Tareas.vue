<template>
    <div>
        <h1>Tareas</h1>
        <input type="text" placeholder="Añadir tarea" v-model="nuevaTarea">
        <input type="button" value="Agregar tarea" @click="agregarTarea"><br>
        <input type="search" placeholder="Filtrar por título de tareas" v-model="filtroTareas">
        <Tarea 
            v-for="(tarea, $index) in tareasFiltradas" 
            :key="tarea.id" 
            :titulo="tarea.title"
            @eliminarTarea="eliminarTarea($index)">
        </Tarea>
    </div>
</template>

<script>
    import Tarea from '@/components/Tarea'
    export default {
        name: 'Tareas',
        created() {
            fetch('https://jsonplaceholder.typicode.com/todos')
                .then(respuesta => respuesta.json())
                    .then(datos => this.tareas = datos)
            .catch(error => console.error(error));

        },
        data() {
            return {
                tareas: [],
                nuevaTarea: '',
                filtroTareas: '',
            }
        },
        methods: {
            agregarTarea() {
                this.tareas.unshift({title: this.nuevaTarea});
                this.nuevaTarea = '';
            },
            eliminarTarea(indice) {
                this.tareas.splice(indice, 1);
            }
        },
        computed: {
            tareasFiltradas() {
                return this.tareas.filter(tarea => {
                    return tarea.title.includes(this.filtroTareas)
                })
            }
        },
        components: {
            Tarea
        }
    }
</script>