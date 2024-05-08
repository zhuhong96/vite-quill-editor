<template>
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="icon20/icon_more" :opacity="props.ash ? '0.4' : '1'">
      <g id="Group 1312317210">
        <circle id="Ellipse 4178" cx="5" cy="10.5" r="1.5" :fill="props.color" />
        <circle id="Ellipse 4179" cx="10" cy="10.5" r="1.5" :fill="props.color" />
        <circle id="Ellipse 4180" cx="15" cy="10.5" r="1.5" :fill="props.color" />
      </g>
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
