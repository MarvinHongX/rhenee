<script setup>
import WorkService from '@/services/WorkService';

const workService = new WorkService();
</script>

<template>
    <TitleSection>
        <span>Work</span>
    </TitleSection>
    <ListSection :itemService="workService" />
</template>

<style scoped>
</style>