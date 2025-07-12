import { ref, computed } from 'vue';

export const usePagination = (itemsPerPage, itemList, defaultPage) => {
    const currentPage = ref(Number(defaultPage) || 1);
    const totalPages = computed(() => Math.ceil(itemList.value.length / itemsPerPage));

    // 페이지 이동 함수
    const goToPage = (page) => {
        if (page >= 1 && page <= totalPages.value) {
            currentPage.value = page;
        }
    };

    // 현재 페이지에 맞는 아이템 필터링
    const paginatedItems = computed(() => {
        const start = (currentPage.value - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        return itemList.value.slice(start, end);
    });

    return {
        currentPage,
        totalPages,
        goToPage,
        paginatedItems,
    };
}