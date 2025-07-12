<script setup>
const props = defineProps({
  error: {
    type: Object,
    required: true
  }
});
</script>

<template>
  <div class="container">
    <ErrorSection
      v-if="props.error.statusCode === 404"
      errorTitle="Page Not Found"
      errorMessage="The page you’re looking for may have been moved or does not exist. Please check the URL and try again."
    />
    <ErrorSection v-else />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  width: 100%;
}
</style>
