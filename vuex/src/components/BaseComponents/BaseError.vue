<template>
    <p class="text-red-500 text-xs">{{ msg }}</p>
</template>


<script setup>
defineProps({
    msg : String
})
</script>