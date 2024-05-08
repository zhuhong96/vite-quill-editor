<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
  >
    <path
      d="M10.031 7.43406L10.051 7.42708H10.0212H6.00033V7.40657L5.99052 7.43399L5.07632 9.98958H3.36952L7.11171 0.0104167H8.88894L12.6311 9.98958H10.9244L10.031 7.43406ZM6.49053 5.99646L6.48549 6.01042H6.50033H9.50033H9.51516L9.51012 5.99646L8.05179 1.9548L8.07086 1.94792H8.04199H7.95866V1.92764L7.94886 1.9548L6.49053 5.99646Z"
      fill="#516082"
      stroke="#516082"
      stroke-width="0.0208333"
      :opacity="props.ash ? '0.4' : '1'"
    />
    <path
      d="M1 16C0.447715 16 0 15.5523 0 15V14C0 13.4477 0.447715 13 1 13H15C15.5523 13 16 13.4477 16 14V15C16 15.5523 15.5523 16 15 16H1Z"
      :fill="color"
      :opacity="props.ash ? '0.4' : '1'"
    />
    <path
      d="M1 15.5C0.723858 15.5 0.5 15.2761 0.5 15V14C0.5 13.7239 0.723858 13.5 1 13.5H15C15.2761 13.5 15.5 13.7239 15.5 14V15C15.5 15.2761 15.2761 15.5 15 15.5H1Z"
      stroke="black"
      stroke-opacity="0.04"
    />
  </svg>
</template>

<script setup lang="ts">
import { computed } from 'vue';

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

// 计算属性
const color = computed(() => (Array.isArray(props.color) ? props.color[0] : props.color));

</script>

<style lang="less" scoped></style>
