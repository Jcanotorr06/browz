<script lang="ts">
    let count = 0;

    const handleCount = () => {
        count++
    }
</script>

<style>
</style>

<template>
    <section class="p-4">
        <h1 class="text-3xl">{count}</h1>
    
        <button class="btn btn-primary" on:click={() => handleCount()}>Increment</button>
    </section>
</template>
