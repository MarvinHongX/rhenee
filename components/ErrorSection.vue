<script setup>
const props = defineProps({
    errorTitle: {
        type: String,
        default: 'An unexpected error occurred.'
    },
    errorMessage: {
        type: String,
        default: 'Please try again later.'
    }
});

const { errorUrl } = useImg();

</script>

<template>
    <div class="error-section">
        <h1>{{ props.errorTitle }}</h1>
        <p>{{ props.errorMessage }}</p>
        
        <NuxtImg format="webp" :src="errorUrl" alt="error" placeholder loading="lazy" class="error-img" />
        <div class="error-actions">
            <NuxtLink to="/" class="btn-go-home">Go Home</NuxtLink>
            <button @click="goBack" class="btn-go-back">Go Back</button>
        </div>
    </div>
</template>
  

<style scoped>
.error-section {
    text-align: center;
    padding: 3rem;
}

h1 {
    font-size: 2.5rem;
}

p {
    font-size: 1.2rem;
    color: var(--gray-700);
}

.error-img {
    margin-top: 1.2rem;
    width: 14rem;
    height: auto;
    display: block;
    margin-left: auto;
    margin-right: auto;
}

.error-actions {
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    gap: 1rem;
    flex-wrap: wrap;
}

.error-actions .btn-go-home,
.error-actions .btn-go-back {
    padding: 1rem 1.1rem;
    margin: .8rem;
    font-size: 1rem;
    background-color: transparent;
    color: var(--gray-700);
    border: 2px solid var(--gray-700);
    border-radius: 4px;
    cursor: pointer;
    text-decoration: none;
    font-weight: 500;
    display: inline-block;
    line-height: 1.5;
    transition: background-color 0.3s ease, color 0.3s ease;
    width: 14rem;
}

.error-actions .btn-go-home:hover {
    background-color: var(--gray-300);
    color: var(--gray-800);
}

.error-actions .btn-go-back {
    background-color: var(--gray-800);
    color: var(--surface-0);
}

.error-actions .btn-go-back:hover {
    background-color: var(--gray-700);
    color: var(--surface-0);
}

@media (max-width: 1024px) {
    .error-section {
        padding: 2.14rem;
    }

    h1 {
        font-size: 2rem;
    }

    p {
        font-size: 1rem;
    }

    .error-actions .btn-go-home,
    .error-actions .btn-go-back {
        padding: 1.2rem 1.28rem;
        font-size: 0.9rem;
        width: 12rem;
    }
}

@media (max-width: 450px) {
    .error-section {
        padding: 1rem;
    }

    h1 {
        font-size: 1.5rem;
    }

    p {
        font-size: 0.9rem;
    }

    .error-actions .btn-go-home,
    .error-actions .btn-go-back {
        padding: 1rem 1.14rem;
        font-size: 0.85rem;
        width: 10rem;
        gap: 0;
        margin: 0;
    }

    .error-img {
        width: 10rem;
    }
}
</style>