<script setup lang="ts">
const props = defineProps<{
  displayPhone?: string
}>();

const formattedPhone = computed(() => props.displayPhone || `Phone number not specified`);
</script>

<template>
  <KeyValue icon="mdi-phone">
    <p class="text-body-1">
      {{ formattedPhone }}
    </p>
  </KeyValue>
</template>
