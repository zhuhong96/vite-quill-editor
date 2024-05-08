<template>
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="27" :opacity="props.ash ? '0.4' : '1'">
      <path
        id="Vector"
        d="M12.8375 9.16117L9.43017 5.75383C8.43805 4.76169 6.80762 4.78354 5.7885 5.80264C4.7694 6.82173 4.74754 8.45219 5.73969 9.44431L8.69792 12.4026"
        :stroke="props.color"
        stroke-width="1.4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        id="Vector_2"
        d="M15.3214 11.6329L18.2796 14.5911C19.2718 15.5833 19.2499 17.2137 18.2308 18.2328C17.2117 19.2519 15.5813 19.2738 14.5891 18.2816L11.1818 14.8742"
        :stroke="props.color"
        stroke-width="1.4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        id="Vector_3"
        d="M12.7888 12.8028C13.8079 11.7837 13.8298 10.1533 12.8377 9.16112"
        :stroke="props.color"
        stroke-width="1.4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        id="Vector_4"
        d="M11.1819 11.1837C10.1628 12.2028 10.1409 13.8332 11.133 14.8254"
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
