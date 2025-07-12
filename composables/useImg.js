export const useImg = () => {
    const logoUrl = computed(() => {
        return `/layout/images/logo.webp`;
    });

    const errorUrl = computed(() => {
        return `/layout/images/error.webp`;
    });

    return {
        logoUrl,
        errorUrl
    };
};