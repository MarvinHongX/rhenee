<script setup>
</script>

<template>
    <div class="layout-title-container">
        <div class="layout-title">
            <slot></slot>
        </div>
    </div>
</template>

<style scoped>
@keyframes slideUp {
    0% {
        transform: translateY(1rem);
        opacity: 0;
    }
    100% {
        transform: translateY(0);
        opacity: 1;
    }
}

.layout-title-container {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    width: 100%;
    padding: 2.5rem 10rem;
}

.layout-title {
    display: flex;
    flex-direction: row;
    justify-content: start;
    animation: slideUp 0.8s ease-out;
    z-index: 1;
    padding: 1rem 0;
    width: 100%;
    font-size: 1.4rem;
    color: var(--gray-700);
}

.layout-title span {
    display: block;    
}

@media (max-width: 1024px) {
    .layout-title-container {
        padding: 2.2rem 3.5rem;
    }

    .layout-title {
        display: flex;
        flex-direction: column;
        font-size: 1.3rem;
    }
}

@media (max-width: 450px) {
    .layout-title-container {
        padding: 1.2rem 1.2rem;
    }

    .layout-title {
        font-size: 1.1rem;
    }
}
</style>