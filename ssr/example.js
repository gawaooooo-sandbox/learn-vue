// サーバー上のNode.jsで実行
import { createSSRApp } from "vue";
// VueのサーバーレンダリングAPIは`vue/server-renderer` 配下
import { renderToString } from "vue/server-renderer";

const app = createSSRApp({
  data: () => ({ count: 1 }),
  template: `<button @click="count++">{{count}}</button>`,
});

renderToString(app).then((html) => {
  console.log(html);
});
