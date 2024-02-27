<template>
    <Teleport to="body">
        <div class="parent">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </Teleport>
</template>

<style scoped>
.parent {
    position: absolute;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(2px);
    z-index: 5;
    gap: 1vh;
}

.parent div {
    width: 1vw;
    height: 1vw;
    border-radius: 50%;
    animation: bounce 2s ease infinite;
    /* Added duration and timing function */
    background-color: none;
    transition: all ease-in;
}

.parent div:nth-child(1) {
    animation-delay: 200ms;
}

.parent div:nth-child(2) {
    animation-delay: 400ms;
}

.parent div:nth-child(3) {
    animation-delay: 600ms;
}

.parent div:nth-child(4) {
    animation-delay: 800ms;
}

.parent div:nth-child(5) {
    animation-delay: 1000ms;
}

@keyframes bounce {
    0% {
        transform: translateY(0);
        background-color: #42A5F5;
    }

    50% {
        transform: translateY(2vw);

    }

    100% {
        /* Corrected the final keyframe declaration */
        transform: translateY(0);
        background-color: #98d1ff;
    }
}
</style>