<!--
 * @Author: lyj
 * @Date: 2023-08-01 13:20:59
 * @LastEditTime: 2023-08-04 16:59:03
 * @Description: 
 * @LastEditors: lyj
-->
<template>
  <div class="container">
    <div :class="['bg', state.data]">
      <nav>
        <ul>
          <li>
            <div class="link-bio top" @click="state.data = 'bio'">颜</div>
          </li>
          <li>
            <div class="link-projects top" @click="state.data = 'projects'">
              ❤
            </div>
          </li>
          <li>
            <div class="link-find-me top" @click="state.data = 'find-me'">
              卢
            </div>
          </li>
        </ul>
      </nav>
      <div class="transition transition-bio" />
      <div class="transition transition-projects" />
      <div class="transition transition-find-me" />
      <!-- 标题 -->
      <div class="title">颜❤卢</div>

      <!--  左侧线 -->
      <div class="dots dots1" />
      <!--  右侧线 -->
      <div class="dots dots2" />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { reactive } from "vue";
const state: any = reactive({ data: "projects" });
// import { reactive } from "vue";

// const state: any = reactive({
//   value: "bio"
// });

// const setType = value => {
//   state.value = value;
// };
</script>

<style lang="scss" scoped>
:root {
  --purple-brown: #231f20;
  --egg-shell: #e8e4d2;
  --dark-peach: #e26961;
  --border-width: 0.75rem;
  --dots-gap: 10px;
}
*,
*:before,
*:after {
  box-sizing: border-box;
}

body {
  font-family: Trocchi, Georgia, serif;
  line-height: 1.5;
  color: #e8e4d2;
}

.top {
  width: 100px;
  background: red;
  height: 50px;
  text-align: center;
  line-height: 50px;
  cursor: pointer;
  // color: inherit;
  color: #fff;
}
.bg {
  background: inherit;
  min-height: 100vh;
  padding: 25vh 0 1.5rem;
  transition: background 0s 1s, color 0.6s;
}
.projects {
  color: #231f20;
}

// marie-louise
.bg:after {
  content: "";
  border: var(--border-width) solid;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: 12;
  pointer-events: none;
  transition: 1s;
}

.bio,
.link-bio {
  background: #231f20;
}

.bio .title {
  background-color: #e26961;
}
.projects,
.link-projects {
  background: #e8e4d2;
}

.find-me,
.link-find-me {
  background: #e26961;
}

// bg transition

.transition {
  width: 1rem;
  height: 1rem;
  top: 0;
  display: block;
  position: absolute;
  opacity: 0;
  transition: transform 0.6s ease-in-out;
  width: 100%;
  height: 100vh;
  transform: scale(0.1);
  transform-origin: 0 0;
}
.transition-bio {
  left: 0;
  background: #231f20;
}
.transition-projects {
  left: 7.5rem;
  background: #e8e4d2;
}
.transition-find-me {
  left: 15rem;
  background: #e26961;
}

.bio .transition-bio,
.projects .transition-projects,
.find-me .transition-find-me {
  opacity: 1;
}
.bio .transition-bio {
  transform: scale(1);
}
.projects .transition-projects {
  transform: scale(1) translateX(-7.5rem);
}
.find-me .transition-find-me {
  transform: scale(1) translateX(-15rem);
}

@keyframes movebg {
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(0, 10px, 0);
  }
}
// dots

.dots:before,
.dots:after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  opacity: 0.5;
  z-index: 11;
  background-image: linear-gradient(#e26961 20%, transparent 0);
  background-size: 100% 10px;
  background-position: 0 0;
  animation: movebg 0.2s linear infinite;
  will-change: transform;
  width: 2px;
}

.dots1:before {
  left: 5%;
}
.dots1:after {
  left: 15%;
}
.dots2:before {
  right: 75%;
}
.dots2:after {
  right: 5%;
}

.dots:after {
  animation-direction: reverse;
}

.projects {
  .dots:before,
  .dots:after {
    background-image: linear-gradient(#231f20 20%, transparent 0);
  }
}
.find-me {
  .dots:before,
  .dots:after {
    background-image: linear-gradient(#e8e4d2 20%, transparent 0);
  }
}

// .title

.title {
  font-family: "Anton", sans-serif;
  text-align: center;
  margin: 0;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-mask-image: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(0, #000),
    color-stop(0.5, #000),
    color-stop(1, transparent)
  );
  transition: background-position 1s, background-color 1s;
  text-align: center;
  font-size: calc(23vw + 1rem);
  font-weight: 200;
  line-height: 1;
  background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/tw-o.png"),
    url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/tw6-o.png"),
    url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/tw5-o.png");
  background-size: 45vw auto, 45vw auto, 30vw auto;
  background-repeat: repeat-x;
  background-position: 0px 15%, 200px 25%, -50px 2vw;
}
.projects .title {
  background-color: #e26961;
  background-position: -120px 15%, 230px 20%, -100px 3vw;
}
.find-me .title {
  background-color: #e8e4d2;
  background-position: -240px 15%, 260px 25%, -150px 1vw;
}

.container {
  position: relative;
  padding: 10px;
  background: pink;
}
nav {
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 10;
  ul {
    list-style: none;
    display: flex;
    text-align: center;
    margin: 0;
    padding: 0;
  }
  li {
    flex: 1 0 7.5rem;
  }
  a {
    display: block;
    padding: 0.75rem 0 0.5rem;
    color: #e8e4d2;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 0.875rem;
  }
  .link-projects {
    color: #231f20;
  }
}

// main

main {
  position: relative;
  max-width: 36rem;
  padding: 0 1.5rem;
  margin: -3rem auto 0;
  font-size: 2rem;
}

// main transitions

.slide-fade-enter-active {
  transition: all 1s ease;
}
.slide-fade-leave-active {
  transition: all 0.5s;
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateY(2rem);
  opacity: 0;
}
</style>
