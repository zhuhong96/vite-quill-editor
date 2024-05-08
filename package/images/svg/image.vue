<template>
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="Group 427319301" :opacity="props.ash ? '0.4' : '1'">
      <rect
        id="Rectangle 34624674"
        x="1"
        y="1"
        width="14"
        height="14"
        rx="1.75"
        :stroke="props.color"
        stroke-width="1.4"
      />
      <circle
        id="Ellipse 1926"
        cx="5.20017"
        cy="5.19996"
        r="0.9"
        fill="#516082"
        :stroke="props.color"
      />
      <path
        id="Vector 552"
        d="M1.32889 12.8128L9.70142 7.64262C10.1429 7.37002 10.7179 7.47824 11.027 7.89487C12.1396 9.394 14.6 12.7175 15.0004 13.3268"
        :stroke="props.color"
        stroke-width="1.4"
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
