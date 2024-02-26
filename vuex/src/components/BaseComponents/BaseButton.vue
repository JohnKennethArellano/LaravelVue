<template>
    <button :type="type" :class="buttonClass">
        <slot />
    </button>
</template>


<script setup>
defineProps({
    type: String,
    buttonClass: {
        type: String,
        default: "btn-primary"
    }
})
</script>