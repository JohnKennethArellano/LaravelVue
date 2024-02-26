<template>
    <input type="text" v-model="modelValue" v-bind="$attrs"
    class="w-[20vw] py-2 px-4 outline-none focus:ring rounded text-md border border-gray-400">
</template>


<script setup>
import { defineModel } from 'vue';
const modelValue = defineModel()
</script>