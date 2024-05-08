<template>
  <svg
    width="15"
    height="14"
    viewBox="0 0 15 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="Group 1312317169" :opacity="props.ash ? '0.4' : '1'">
      <g id="Group 1312317163">
        <path
          id="Vector 1030"
          d="M5 1.00003L14 1.00003"
          :stroke="props.color"
          stroke-width="1.4"
          stroke-linecap="round"
        />
        <path
          id="Vector 1031"
          d="M2 1L1 1"
          :stroke="props.color"
          stroke-width="1.4"
          stroke-linecap="round"
        />
      </g>
      <g id="Group 1312317164">
        <path
          id="Vector 1030_2"
          d="M5 7.00003L14 7.00003"
          :stroke="props.color"
          stroke-width="1.4"
          stroke-linecap="round"
        />
        <path
          id="Vector 1031_2"
          d="M2 7L1 7"
          :stroke="props.color"
          stroke-width="1.4"
          stroke-linecap="round"
        />
      </g>
      <g id="Group 1312317165">
        <path
          id="Vector 1030_3"
          d="M5 13L14 13"
          :stroke="props.color"
          stroke-width="1.4"
          stroke-linecap="round"
        />
        <path
          id="Vector 1031_3"
          d="M2 13L1 13"
          :stroke="props.color"
          stroke-width="1.4"
          stroke-linecap="round"
        />
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
