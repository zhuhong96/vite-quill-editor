<template>
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="8" :opacity="props.ash ? '0.4' : '1'">
      <path
        id="Vector"
        d="M10.4465 5.00662H16.6605"
        :stroke="props.color"
        stroke-width="1.4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        id="Vector_2"
        d="M7.3396 18.988H13.5535"
        :stroke="props.color"
        stroke-width="1.4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        id="Vector_3"
        d="M13.9421 4.98804L10.0583 18.988"
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
