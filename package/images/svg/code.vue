<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M8.80001 7.59997L4 12.5729L8.80001 17.2"
      :stroke="props.color"
      stroke-width="1.24445"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M15.2 7.59997L20 12.5729L15.2 17.2"
      :stroke="props.color"
      stroke-width="1.24445"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M13.6001 3.99999L10.8 20"
      :stroke="props.color"
      stroke-width="1.24445"
      stroke-linecap="round"
    />
  </svg>
</template>

<script setup lang="ts">
const props = defineProps({
  color: {
    type: String,
    default: "#516082",
  },
});
</script>

<style lang="less" scoped></style>
