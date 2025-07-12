<script setup>
import { ref, onMounted } from 'vue';

const props = defineProps({
    itemService: {
        type: Object,
        required: true
    },
});

const itemList = ref([]);
const itemsPerPage = 8;

const {
    currentPage,
    totalPages,
    goToPage,
    paginatedItems,
} = usePagination(itemsPerPage, itemList, 1);

onMounted(async () => {
    const items = await props.itemService.getItems();
    
    if (items.error) {
        return;
    }

    itemList.value = [...items].sort((a, b) => a.id - b.id);
});
</script>

<template>
    <div class="layout-list-container">
        <div class="list-content-wrapper">
            <div class="list-content" v-for="(item, index) in paginatedItems" :key="index">
                <div class="link-img-wrapper">
                    <NuxtImg format="webp" :src="item.images[0]" placeholder loading="lazy" alt="item" class="link-img" />
                </div>
                <p class="list-content-name">{{ item.name }}</p> 
            </div>
        </div>
        <Pagination
            :currentPage="currentPage"
            :totalPages="totalPages"
            :goToPage="goToPage"
        />
    </div>
</template>

<style scoped>
.layout-list-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 2rem 10rem;
}

.list-content-wrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    justify-items: center;
    width: 100%;
    max-width: 100rem;
}

.list-content {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    margin: 1rem 1rem;
    width: 100%;
}

.link-img-wrapper {
    position: relative;
    width: 100%;
    padding-bottom: 130%;
    overflow: hidden;
    border-radius: .3rem;
    border: 2px solid var(--surface-b);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.link-img-wrapper:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
}

.link-img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
    transition: opacity 0.3s ease, filter 0.3s ease; 
}

.list-content-name {
    display: block;
    margin-top: 1rem;
    margin-bottom: 1rem;
    padding: 0 1rem;
    text-align: center;
    font-weight: bold;
    font-size: 1.1rem;
    text-decoration: none;
    min-height: 2.2rem;
    line-height: 2.2rem;
    height: auto;
}

.list-content-tag {
    display: block;
    padding: 0;
    color: var(--gray-800);
    text-align: center;
    font-size: 1rem;
    text-decoration: none;
    min-height: 2rem;
    line-height: 2rem;
    height: auto;
    transition: background-color 0.3s ease;
}


@media (max-width: 1024px) {
    .layout-list-container {
        padding: 2.5rem 3.5rem;
    }

    .list-content-wrapper {
        gap: 1.5rem;
    }

    .list-content {
        margin: .5rem .5rem;
    }

    .list-content-name {
        line-height: 2.1rem;
        min-height: 2.1rem;
    }

    .list-content-tag {
        font-size: .8rem;
        min-height: 1.8rem;
        line-height: 1.8rem;
    }
}

@media (max-width: 770px) {
    .layout-list-container {
        padding: 2.5rem 3.5rem;
    }

    .list-content-wrapper {
        grid-template-columns: repeat(1, 1fr);
    }

    .list-content-name {
        font-size: 1.2rem;
        line-height: 2rem;
        min-height: 2rem;
    }

    .list-content-tag {
        font-size: .9rem;
        line-height: 1.7rem;
        min-height: 1.7rem;
    }
}

@media (max-width: 590px) {
    .layout-list-container {
        padding: 2rem 3.5rem;
    }

    .list-content-name {
        font-size: 1rem;
        line-height: 1.8rem;
        min-height: 1.8rem;
    }

    .list-content-tag {
        font-size: .8rem;
        line-height: 1.7rem;
        min-height: 1.7rem;
    }
}


@media (max-width: 450px) {
    .layout-list-container {
        padding: 1.5rem 1rem;
    }


    .list-content-wrapper {
        gap: .8rem;
    }

    .list-content {
        /* min-width: 130px; */
        margin: .5rem .2rem;
    }

    .list-content-name {
        font-size: .8rem;
        line-height: 1.7rem;
        min-height: 1.7rem;
    }

    .list-content-tag {
        font-size: .7rem;
        line-height: 1.2rem;
        min-height: 1.2rem;
    }
    
}
</style>