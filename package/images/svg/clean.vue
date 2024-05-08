<template>
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="Clip path group" :opacity="props.ash ? '0.4' : '1'">
      <mask
        id="mask0_1336_1603"
        style="mask-type: luminance"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="24"
        height="24"
      >
        <g id="icon-587d56b37c11bad3">
          <path id="Vector" d="M24 0H0V24H24V0Z" fill="white" />
        </g>
      </mask>
      <g mask="url(#mask0_1336_1603)">
        <g id="Group">
          <path
            id="Vector_2"
            d="M20.2118 12.0227L15.1568 5.31448L8.1687 10.5804L13.4207 17.0643L14.7393 16.1465L20.2118 12.0227Z"
            :stroke="props.color"
            stroke-width="1.4"
            stroke-linejoin="round"
          />
          <path
            id="Vector_3"
            d="M13.4206 17.0643L11.9122 18.2726L7.76117 18.2723L6.73927 16.9162L4.21179 13.5621L8.31211 10.4723"
            :stroke="props.color"
            stroke-width="1.4"
            stroke-linejoin="round"
          />
          <path
            id="Vector_4"
            d="M7.80356 18.2715H20.1267"
            :stroke="props.color"
            stroke-width="1.4"
            stroke-linecap="round"
          />
        </g>
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
