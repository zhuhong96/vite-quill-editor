<template>
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="006" :opacity="props.ash ? '0.4' : '1'">
      <path
        id="Vector"
        d="M4.3999 12H19.5999"
        :stroke="props.color"
        stroke-width="1.4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        id="Vector_2"
        d="M11.9999 12C18.3999 14.4 15.9999 20 11.9999 20C7.99991 20 7.19995 16.8 7.19995 16.8"
        :stroke="props.color"
        stroke-width="1.4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        id="Vector_3"
        d="M16.8 7.2C16.8 7.2 15.6 4 12 4C8.39997 4 6.97437 7.0398 8.64385 9.6"
        :stroke="props.color"
        stroke-width="1.4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        id="Vector_4"
        d="M7.19995 16.8C7.19995 16.8 8.79991 20 11.9999 20C15.1999 20 17.0255 16.9602 15.3561 14.4"
        :stroke="props.color"
        stroke-width="1.4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
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
