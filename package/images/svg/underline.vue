<template>
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="007" :opacity="props.ash ? '0.4' : '1'">
      <path
        id="Vector"
        d="M6.09009 19.5243H17.9098"
        :stroke="props.color"
        stroke-width="1.4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        id="Vector_2"
        d="M16.8018 5.52429C16.8018 7.98672 16.8018 8.93587 16.8018 11.3983C16.8018 14.0503 14.6519 16.2001 12 16.2001C9.34806 16.2001 7.19824 14.0503 7.19824 11.3983C7.19824 8.93587 7.19824 7.98672 7.19824 5.52429"
        :stroke="props.color"
        stroke-width="1.4"
        stroke-linecap="round"
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
