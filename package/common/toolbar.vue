<template>
  <div class="z-toolbar">
    <div
      class="z-formats"
      v-for="(toolbar, index) in toolbarTitle"
      :key="index"
    >
      <button
        type="button"
        v-for="tool in toolbar"
        :key="tool"
        class="icon"
        @click="onTest"
      >
        <icon-bold v-if="tool === 'bold'" color="#516082" />
        <icon-italic v-if="tool === 'italic'" color="#516082" />
        <icon-strike v-if="tool === 'strike'" color="#516082" />
        <icon-underline v-if="tool === 'underline'" color="#516082" />

        <icon-blockquote v-if="tool === 'blockquote'" color="#516082" />
        <icon-link v-if="tool === 'link'" color="#516082" />
        <icon-image v-if="tool === 'image'" color="#516082" />
        <icon-clean v-if="tool === 'clean'" color="#516082" />
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { PropType, onMounted } from "vue";
// import { isString, isObject } from "../enum/utils";
import { toolbarTitle } from "../model/quill-editor";
import IconBold from "../images/svg/bold.vue";
import IconItalic from "../images/svg/italic.vue";
import IconStrike from "../images/svg/strike.vue";
import IconUnderline from "../images/svg/underline.vue";

import IconBlockquote from "../images/svg/blockquote.vue";
import IconLink from "../images/svg/link.vue";
import IconImage from "../images/svg/image.vue";
import IconClean from "../images/svg/clean.vue";

// interface IToolbar {
//   // 单个
//   bold?:string,
//   italic?:string,
//   underline?:string,
//   strike?:string,
//   blockquote?:string,
//   'code-block'?:string,
//   link?:string,
//   image?:string,
//   video?:string,
//   formula?:string,
//   clean?:string,
//   // 多个
//   header?: any[] | number | string,
//   list?: "ordered" | "bullet" | "check",
//   script?: "sub" | "super",
//   indent?: "+1" | "-1"
//   direction?: "rtl" | "ltr",
//   size?: any[],
//   color?: any[],
//   background?: any[],
//   font?: any[],
//   // align?: "center" | "right" | "justify"
//   align?: string[]
//   // lineHeight?: any[]
// }

const props = defineProps({
  getQuill: {
    type: Function as PropType<any>,
    default: () => {},
  },
});

const onTest = () => {
  props.getQuill().format("header", 1);
};

onMounted(() => {});
</script>

<style scoped>
@import "../style/toolbar.css";
</style>
