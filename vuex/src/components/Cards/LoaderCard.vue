<template>
    <div class="flex flex-col w-[15vw]  h-[fit-content] p-5 shadow-lg rounded-lg bg-white">
        <span class="  rounded w-[100%] h-6 mb-3 loader"></span>
        <span class=" rounded w-[80%] h-5 loader"></span>
    </div>
</template>


<script setup>
</script>

<style scoped>
.loader {
    animation: loading 2000ms infinite;
}

@keyframes loading {
    0% {
        background: #ffffff;
    }

    50% {
        background: #ebebeb;
    }

    100% {
        background: #ffffff;
    }
}
</style>