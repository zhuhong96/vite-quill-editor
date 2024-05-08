<template>
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="14" :opacity="props.ash ? '0.4' : '1'">
      <path
        id="Vector"
        d="M6.71252 4.79689V8.0122"
        :stroke="props.color"
        stroke-width="1.4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        id="Vector_2"
        d="M7.78434 8.01228H5.64081"
        :stroke="props.color"
        stroke-width="1.4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        id="Vector_3"
        d="M7.78434 13.0137H5.64081"
        :stroke="props.color"
        stroke-width="1.4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        id="Vector_4"
        d="M5.64081 10.513C5.64081 10.513 6.71257 9.44121 7.42708 10.513C8.14159 11.5848 5.64081 13.0138 5.64081 13.0138"
        :stroke="props.color"
        stroke-width="1.4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        id="Vector_5"
        d="M5.64081 15.6932C5.64081 15.6932 6.35532 14.6214 7.4271 15.336C8.49887 16.0505 7.4271 16.9436 7.4271 16.9436C7.4271 16.9436 8.49887 17.8368 7.4271 18.5513C6.35532 19.2658 5.64081 18.194 5.64081 18.194"
        :stroke="props.color"
        stroke-width="1.4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        id="Vector_6"
        d="M7.42703 16.9437H6.71252"
        :stroke="props.color"
        stroke-width="1.4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        id="Vector_7"
        d="M6.71257 4.79689L5.64081 5.5114"
        :stroke="props.color"
        stroke-width="1.4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        id="Vector_8"
        d="M10.9996 11.9421H18.8592"
        :stroke="props.color"
        stroke-width="1.4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        id="Vector_9"
        d="M10.9996 16.9437H18.8592"
        :stroke="props.color"
        stroke-width="1.4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        id="Vector_10"
        d="M10.9996 6.94044H18.8592"
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
