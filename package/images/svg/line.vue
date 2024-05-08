<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    :opacity="props.ash ? '0.4' : '1'"
  >
    <path
      d="M4 12H20"
      :stroke="props.color"
      stroke-width="1.4"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M5.6001 6.39999H7.2001"
      :stroke="props.color"
      stroke-width="1.4"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M10.3999 6.39999H13.5999"
      :stroke="props.color"
      stroke-width="1.4"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M16.8 6.39999H18.4"
      :stroke="props.color"
      stroke-width="1.4"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M5.6001 17.6H7.2001"
      :stroke="props.color"
      stroke-width="1.4"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M10.3999 17.6H13.5999"
      :stroke="props.color"
      stroke-width="1.4"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M16.8 17.6H18.4"
      :stroke="props.color"
      stroke-width="1.4"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

<script setup lang="ts">
const props = defineProps({
  color: {
    type: String,
    default: "#516082",
  },
  ash: {
    type: Boolean,
    default: () => false,
  },
});
</script>

<style lang="less" scoped></style>
