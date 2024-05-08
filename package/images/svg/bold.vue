<template>
  <svg
    width="11"
    height="14"
    viewBox="0 0 11 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="Group 1312317163" :opacity="props.ash ? '0.4' : '1'">
      <path
        id="Rectangle 34626143"
        d="M1 1H6C7.65685 1 9 2.34315 9 4V4C9 5.65685 7.65685 7 6 7H1V1Z"
        :stroke="props.color"
        stroke-width="2"
        stroke-linecap="round"
      />
      <path
        id="Rectangle 34626144"
        d="M1 7H7C8.65685 7 10 8.34315 10 10V10C10 11.6569 8.65685 13 7 13H1V7Z"
        :stroke="props.color"
        stroke-width="2"
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
