<template>
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="26" :opacity="props.ash ? '0.4' : '1'">
      <path
        id="Vector"
        d="M5 6.16663H19"
        :stroke="props.color"
        stroke-width="1.4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        id="Vector_2"
        d="M10.0555 10.0555H19"
        :stroke="props.color"
        stroke-width="1.4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        id="Vector_3"
        d="M10.0555 13.9445H19"
        :stroke="props.color"
        stroke-width="1.4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        id="Vector_4"
        d="M5.00001 10.0555L6.94446 12L5.00001 13.9444"
        :stroke="props.color"
        stroke-width="1.4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        id="Vector_5"
        d="M5 17.8334H19"
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
