<script setup>
import { computed } from 'vue';
import { useRouter } from 'vue-router';

const props = defineProps({
    currentPage: {
        type: Number,
        required: true
    },
    totalPages: {
        type: Number,
        required: true
    },
    goToPage: {
        type: Function,
        required: true
    },
    category: {
        type: String,
    }
});

const router = useRouter();

const goToPage = (page) => {
    if (page >= 1 && page <= props.totalPages) {
        router.push({ query: { 
            page,
            category: props.category
         } });
        props.goToPage(page);
    }
};

const pageGroup = computed(() => {
    const groupSize = 5;
    const groupStart = Math.floor((props.currentPage - 1) / groupSize) * groupSize + 1;
    const groupEnd = Math.min(groupStart + groupSize - 1, props.totalPages);

    return Array.from({ length: groupEnd - groupStart + 1 }, (_, index) => groupStart + index);
});


const prevGroup = () => {
    const groupStart = Math.floor((props.currentPage - 1) / 5) * 5 + 1;
    const targetPage = groupStart > 5 ? groupStart - 5 : 1;
    goToPage(targetPage);
};

const nextGroup = () => {
    const groupStart = Math.floor((props.currentPage - 1) / 5) * 5 + 1;
    const targetPage = Math.min(groupStart + 5, props.totalPages);
    goToPage(targetPage);
};

const prevPage = () => {
    if (props.currentPage > 1) {
        goToPage(props.currentPage - 1);
    }
};

const nextPage = () => {
    if (props.currentPage < props.totalPages) {
        goToPage(props.currentPage + 1);
    }
};
</script>

<template>
    <div class="pagination">
        <button class="pagination-btn" @click="prevGroup" :disabled="props.currentPage === 1">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path d="M10 19l-7-7 7-7M17 19l-7-7 7-7" stroke="currentColor" stroke-width="2" fill="none"/>
            </svg>
        </button>
        <button class="pagination-btn" @click="prevPage" :disabled="props.currentPage === 1">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path d="M15 18l-6-6 6-6" stroke="currentColor" stroke-width="2" fill="none"/>
            </svg>
        </button>
 
        <button
            v-for="page in pageGroup"
            :key="page"
            class="pagination-btn2"
            :class="{'active': props.currentPage === page}"
            @click="goToPage(page)"
        >
            {{ page }}
        </button>

        <button class="pagination-btn" @click="nextPage" :disabled="props.currentPage === totalPages">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path d="M9 6l6 6-6 6" stroke="currentColor" stroke-width="2" fill="none"/>
            </svg>
        </button>
        <button class="pagination-btn" @click="nextGroup" :disabled="props.currentPage === totalPages">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path d="M14 5l7 7-7 7M7 5l7 7-7 7" stroke="currentColor" stroke-width="2" fill="none"/>
            </svg>
        </button>
    </div>
</template>
  
  
  
<style scoped>
.pagination {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
    width: 100%;
    color: var(--gray-700);
}

.pagination-btn {
    color: var(--btn-b);
}
.pagination-btn,
.pagination-btn2 {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    margin: 0 0.5rem;
    background-color: transparent;
    border: 2px solid var(--btn-b);
    border-radius: 8px;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 600;
}

.pagination-btn svg {
    width: 1.5rem;
    height: 1.5rem;
}

.pagination-btn2.active {
    background-color: var(--btn-b);
    color: var(--surface-0);
}

.pagination-btn2:disabled {
    cursor: not-allowed;
    opacity: 0.5;
}



@media (max-width: 1024px) {
    .pagination-btn, .pagination-btn2 {
        width: 2.2rem;
        height: 2.2rem;
        margin: 0 0.4rem;
        border-radius: 8px;
        font-size: 1rem;
    }

    .pagination-btn svg {
        width: 1.2rem;
        height: 1.2rem;
    }
}

@media (max-width: 450px) {
    .pagination-btn, .pagination-btn2 {
        width: 2rem;
        height: 2rem;
        margin: 0 0.2rem;
        border: 1.5px solid var(--btn-b);
        border-radius: 4px;
        font-size: .8rem;
    }

    .pagination-btn svg {
        width: 1rem;
        height: 1rem;
    }
}
</style>