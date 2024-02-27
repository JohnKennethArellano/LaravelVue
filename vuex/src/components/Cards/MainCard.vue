<template>
    <div class="flex flex-col w-[19%] h-[fit-content] p-5 shadow-lg rounded-lg bg-white transition-all">
        <span class="font-bold text-lg  text-gray-800 mb-2">{{ name }} <span class="text-gray-400">({{ age
        }})</span></span>
        <span class="font-bold text-sm text-gray-400">LRN : {{ lrn }}</span>
    </div>
</template>


<script setup>
defineProps({
    name: String,
    lrn: String,
    age: Number,
})
</script>