<script setup>
import { onMounted } from 'vue'

onMounted(() => {
    const script = document.createElement('script')
    script.async = true
    script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9944647203025348"
    script.crossOrigin = "anonymous"
    document.head.appendChild(script)

    script.onload = () => {
        (window.adsbygoogle = window.adsbygoogle || []).push({})
    }
})


</script>

<template>
    <section class="layout-ad-container">
        <ins class="adsbygoogle"
            style="display:block; text-align:center;"
            data-ad-layout="in-article"
            data-ad-format="fluid"
            data-ad-client="ca-pub-9944647203025348"
            data-ad-slot="7928253603"></ins>
    </section>
</template>

<style scoped>
.layout-ad-container {
    margin-top: 2rem;
    text-align: center;
    padding: 3rem 10rem;    
}


@media (max-width: 1024px) {
    .layout-ad-container {
        padding: 3.5rem 3.5rem;  
    }
}

@media (max-width: 450px) {
    .layout-ad-container {
        padding: 1.5rem 1.2rem;
    }
}
</style>