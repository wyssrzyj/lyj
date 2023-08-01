<!--
 * @Author: lyj
 * @Date: 2023-05-22 16:25:12
 * @LastEditTime: 2023-08-01 20:33:07
 * @Description: 
 * @LastEditors: lyj
-->
<template>
  <div>测试 特效粒子</div>
  <Particles
    id="tsparticles"
    class="login__particles"
    :options="particlesData"
  />
</template>

<script lang="ts" setup>
import { onMounted } from "vue";
import Particles from "particles.vue3";
import { particlesData } from "./modules/index.ts";
onMounted(() => {
  show();
});
</script>
<style scoped>
body {
  overflow: hidden;
  margin: 0;
}

.twitter:hover a {
  transform: rotate(-45deg) scale(1.05);
}
.twitter:hover i {
  color: #21c2ff;
}
.twitter a {
  bottom: -40px;
  right: -75px;
  transform: rotate(-45deg);
}
.twitter i {
  bottom: 7px;
  right: 7px;
  color: #00aced;
}

.social-icon a {
  position: absolute;
  background: white;
  color: white;
  box-shadow: -1px -1px 20px 0px rgba(0, 0, 0, 0.3);
  display: inline-block;
  width: 150px;
  height: 80px;
  transform-origin: 50% 50%;
  transition: 0.15s ease-out;
}
.social-icon i {
  position: absolute;
  pointer-events: none;
  z-index: 1000;
  transition: 0.15s ease-out;
}

.youtube:hover a {
  transform: rotate(45deg) scale(1.05);
}
.youtube:hover i {
  color: #ec4c44;
}
.youtube a {
  bottom: -40px;
  left: -75px;
  transform: rotate(45deg);
}
.youtube i {
  bottom: 7px;
  left: 7px;
  color: #e62117;
}
</style>
