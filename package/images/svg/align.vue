<template>
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill=""
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="014-02" :opacity="props.ash ? '0.4' : '1'">
      <path
        id="Vector"
        d="M19.5 5.75H4.5"
        :stroke="props.color"
        stroke-width="1.4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        id="Vector_2"
        d="M16.1667 9.91669H4.5"
        :stroke="props.color"
        stroke-width="1.4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        id="Vector_3"
        d="M19.5 14.0833H4.5"
        :stroke="props.color"
        stroke-width="1.4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        id="Vector_4"
        d="M16.1667 18.25H4.5"
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
