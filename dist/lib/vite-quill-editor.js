import { defineComponent, openBlock, createElementBlock } from "vue";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "quillEditor",
  setup(__props, { expose: __expose }) {
    const test = () => {
    };
    __expose({
      test
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, "组件");
    };
  }
});
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const quillEditor = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d0d421c4"]]);
quillEditor.install = (app) => {
  app.component(quillEditor.__name, quillEditor);
};
const components = [quillEditor];
const install = (app) => {
  components.forEach((component) => app.component(component.__name, component));
};
const viteQuillEditor = {
  install
};
export {
  quillEditor as Editor,
  viteQuillEditor as default
};
