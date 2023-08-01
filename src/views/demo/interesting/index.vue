<!--
 * @Author: lyj
 * @Date: 2023-08-01 13:20:59
 * @LastEditTime: 2023-08-01 17:32:22
 * @Description: 
 * @LastEditors: lyj
-->
<template>
  <div>
    <div>
      <NewButton />
    </div>
    <div class="stereoscopic">
      <Stereoscopic />
    </div>
    <Bottom />
  </div>
</template>
<script lang="ts" setup>
import NewButton from "./modules/button/index.vue";
import Stereoscopic from "./modules/stereoscopic/index.vue";
import Bottom from "./modules/bottom/index.vue";
</script>

<style lang="scss" scoped></style>
