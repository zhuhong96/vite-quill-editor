<template>
  <!-- <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="icon20">
      <path
        id="downArrow"
        d="M7.20711 9.5H12.7929L10 12.2929L7.20711 9.5Z"
        fill="#516082"
        :stroke="props.color"
      />
    </g>
  </svg> -->
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="8"
    height="4"
    viewBox="0 0 8 4"
    fill="none"
  >
    <path
      d="M1.20711 0.5H6.79289L4 3.29289L1.20711 0.5Z"
      fill="#516082"
      :stroke="props.color"
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
