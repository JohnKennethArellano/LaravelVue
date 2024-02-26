<template>
    <label :for="forLabel" class="w-full h-auto">{{ text }}</label>
</template>


<script setup>
defineProps({
    forLabel : {
        type : String,
        default : "Input label"
    },
    text : {
        type : String, 
        default : "Label"
    }
})
</script>