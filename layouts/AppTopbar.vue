<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const menuItems = useMenuItems();
const { logoUrl } = useImg();
const hamburgerActive = ref(false);
const emit = defineEmits(['update:hamburgerActive']); 

const hamburgerButtonEl = ref(null);
const navMobileEl = ref(null);

const handleResize = () => {
    if (window.innerWidth >= 450) {
        toggleHamburger(false);
    }
};

const toggleHamburger = (value = null) => {
    if (typeof value === 'boolean') {
        hamburgerActive.value = value;
    } else {
        hamburgerActive.value = !hamburgerActive.value;
    }

    emit('update:hamburgerActive', hamburgerActive.value);
    hamburgerButtonEl.value.classList.toggle('active', hamburgerActive.value);
};

const handleOutsideClick = (event) => {
    if (!hamburgerButtonEl.value.contains(event.target) && !navMobileEl.value.contains(event.target)) {
        toggleHamburger(false);
    }
};

onMounted(() => {
    hamburgerButtonEl.value = document.querySelector('.nav-hamburger');
    navMobileEl.value = document.querySelector('.nav-mobile');

    document.addEventListener('click', handleOutsideClick);
    window.addEventListener('resize', handleResize);
});

onBeforeUnmount(() => {
    document.removeEventListener('click', handleOutsideClick);
    window.removeEventListener('resize', handleResize);
});
</script>

<template>
    <div class="layout-topbar-container">
        <div class="layout-topbar">
            <div class="layout-topbar-nav">
                <NuxtLink to="/">
                    <div class="nav-logo">
                        <NuxtImg format="webp" :src="logoUrl" alt="logo" placeholder loading="lazy" />
                        &nbsp;RHENEE
                    </div>
                </NuxtLink>
                <nav class="nav-desktop">
                    <ul>
                        <li v-for="(item, index) in menuItems" :key="item.path">
                            <NuxtLink :to="item.path">{{ item.label }}</NuxtLink>
                        </li>
                    </ul>
                </nav>
                <div :class="{ 'active': hamburgerActive }" class="nav-mobile">
                    <ul>
                        <li v-for="(item, index) in menuItems" :key="item.path">
                            <NuxtLink :to="item.path" @click="toggleHamburger(false)">{{ item.label }}</NuxtLink>
                        </li>
                    </ul>
                </div>
                <button class="nav-hamburger" @click="toggleHamburger">
                    <svg class="w-7 h-7" fill="none" stroke="black" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path class="hamburger-icon" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2 3h16M2 10h16M2 17h16" />
                        <path class="close-icon" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </div>     
    </div>
</template>

<style scoped>
</style>