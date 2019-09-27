export const crudItemsMixin = {
    data() {
        return {
            items: [],
            nuevoItem: "",
            filtroItems: ""
        };
    },
    methods: {
        agregarItem() {
            this.items.unshift({ title: this.nuevoItem });
            this.nuevoItem = "";
        },
        eliminarItem(indice) {
            this.items.splice(indice, 1);
        }
    },
    computed: {
        itemsFiltrados() {
            return this.items.filter(item => {
                return item.title.includes(this.filtroItems);
            });
        }
    },
}