<template>
    <div>
        <p>Esto es un Post con id: {{ this.$route.params.id }}</p>
    </div>
</template>

<script>
export default {
    mounted() {
        console.log(this.$route);
    }
}
</script>