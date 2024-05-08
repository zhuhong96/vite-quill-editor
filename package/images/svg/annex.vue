<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="props.size"
    :height="props.size"
    viewBox="0 0 24 24"
    fill="none"
    :opacity="props.ash ? '0.4' : '1'"
  >
    <path
      d="M12.3503 5.38322L5.5228 12.2107C3.90679 13.8267 3.90679 16.4468 5.5228 18.0628C7.1388 19.6788 9.75888 19.6788 11.3749 18.0628L19.5028 9.93485C20.5801 8.85753 20.5801 7.11081 19.5028 6.03345C18.4255 4.95612 16.6788 4.95612 15.6014 6.03345L7.47352 14.1614C6.93484 14.7001 6.93484 15.5734 7.47352 16.112C8.01216 16.6507 8.88552 16.6507 9.4242 16.112L16.2516 9.28462"
      :stroke="props.color"
      stroke-width="1.4"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
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
  size: {
    type: Number,
    default: () => 24,
  },
});
</script>

<style lang="less" scoped></style>
