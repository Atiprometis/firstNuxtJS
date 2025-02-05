<template>
    <div>
        <h1> product {{ id }}</h1>
    </div>
</template>

<script setup>

    const { id } = useRoute().params
</script>

<style lang="scss" scoped>

</style>