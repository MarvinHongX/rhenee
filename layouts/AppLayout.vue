<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue';
import AppTopbar from './AppTopbar.vue';
import AppFooter from './AppFooter.vue';

const lastScrollY = ref(0);
const scrollDirection = ref('up'); 
const hamburgerActive = ref(false);
const scrollThresholdTop = ref(60);
const scrollThresholdBottom = ref(60); 

const handleScroll = () => {
    if (hamburgerActive.value) return;

    const currentScrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    if (currentScrollY > scrollThresholdTop.value) {
        scrollDirection.value = 'down';
    } else {
        scrollDirection.value = 'up';
    }

    const bottomThreshold = documentHeight - windowHeight - scrollThresholdBottom.value;
    if (currentScrollY > bottomThreshold) {
        scrollDirection.value = 'down';
    } else if (currentScrollY < lastScrollY.value) {
        scrollDirection.value = 'up';
    }

    lastScrollY.value = currentScrollY;
};

let scrollTimeout;
const throttleScroll = () => {
    if (scrollTimeout) cancelAnimationFrame(scrollTimeout);
    scrollTimeout = requestAnimationFrame(handleScroll);
};

const updateHamburger = (newState) => {
    hamburgerActive.value = newState;
};

watch(hamburgerActive, (isActive) => {
    document.body.style.overflow = isActive ? 'hidden' : '';
});

onMounted(() => {
    window.addEventListener('scroll', throttleScroll, { passive: true });
});

onBeforeUnmount(() => {
    window.removeEventListener('scroll', throttleScroll, { passive: true });
});

</script>

<template>
    <div class="layout-wrapper">
        <app-topbar 
            class="topbar-show" 
            :class="{ 'topbar-hidden': scrollDirection === 'down' }"
            @update:hamburgerActive="updateHamburger"
        ></app-topbar>
        <div class="layout-main-container">
            <div v-show="hamburgerActive" class="overlay"></div>
            <div class="layout-main">
                <NuxtPage />
            </div>
            <app-footer></app-footer>
        </div>
    </div>
</template>

<style scoped>
.layout-wrapper {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-color: var(--surface-a);
    color: var(--text-color);
}

.layout-main-container {
    flex: 1;
    display: flex;
    flex-direction: column;
}

.layout-main {
    flex-grow: 1;
    border-radius: var(--border-radius);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.topbar-show {
    transform: translateY(0);
    transition: transform 0.4s ease-in-out, opacity 0.4s ease-in-out;
    opacity: 1;
}

.topbar-hidden {
    transform: translateY(-100%);
    opacity: 0;
}

.overlay {
    position: fixed; 
    left: 0;
    width: 100%;
    min-height: 100vh;
    bottom: 0;
    background: var(--maskbg);
    z-index: 992;
}


</style>