export default {
    // Estado
    state: {
        tituloTarea: '',
    },

    // Mutación
    guardarTarea(titulo) {
        this.state.tituloTarea = titulo;
    }
}