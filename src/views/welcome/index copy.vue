<script setup lang="ts">
import dayjs from "dayjs";
import axios from "axios";
import MdEditor from "md-editor-v3";
import Bar from "./components/Bar.vue";
import Pie from "./components/Pie.vue";
import custom from "./components/custom.vue";
import TypeIt from "@/components/ReTypeit";
import { ref, computed, markRaw } from "vue";

import Github from "./components/Github.vue";
import { randomColor } from "@pureadmin/utils";
import { useRenderFlicker } from "@/components/ReFlicker";

import Motion from "./utils/motion";

defineOptions({
  name: "Welcome"
});

const list = ref();
const loading = ref<boolean>(true);
const titleClass = computed(() => {
  return ["text-base", "font-medium"];
});

setTimeout(() => {
  loading.value = !loading.value;
}, 800);

axios
  .get("https://api.github.com/repos/pure-admin/vue-pure-admin/releases")
  .then(res => {
    list.value = res.data.map(v => {
      return {
        content: v.body,
        timestamp: dayjs(v.published_at).format("YYYY/MM/DD hh:mm:ss A"),
        icon: markRaw(
          useRenderFlicker({
            background: randomColor({ type: "hex" }) as string
          })
        )
      };
    });
  });
</script>

<template>
  <div>
    <Motion :delay="150">
      <div class="demo-1">我是测试</div>
    </Motion>
  </div>
</template>

<style lang="scss" scoped>
:deep(.el-timeline-item) {
  margin: 6px 0 0 6px;
}

.main-content {
  margin: 20px 20px 0 20px !important;
}
.demo-1 {
  width: 100px;
  height: 100px;
  background: red;
}
</style>
