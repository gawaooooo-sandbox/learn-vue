// サーバとクライアント間で共有(universal code)
import { createSSRApp } from "vue";

export function createApp() {
  return createSSRApp({
    data: () => ({ count: 1 }),
    template: `<button @click="count++">{{count}}</button>`,
  });
}
