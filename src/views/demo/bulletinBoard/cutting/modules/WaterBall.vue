<template>
  <div>
    <div class="container">
      <img :src="bottomImg" class="bottomImg" alt="" />
      <div class="water-ball">
        <div class="ball">
          <svg
            xlink="https://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            style="display: none"
          >
            <!-- 定义可复用的 icon -->
            <symbol id="wave">
              <path
                d="M420,20c21.5-0.4,38.8-2.5,51.1-4.5c13.4-2.2,26.5-5.2,27.3-5.4C514,6.5,518,4.7,528.5,2.7c7.1-1.3,17.9-2.8,31.5-2.7c0,0,0,0,0,0v20H420z"
              />
              <path
                d="M420,20c-21.5-0.4-38.8-2.5-51.1-4.5c-13.4-2.2-26.5-5.2-27.3-5.4C326,6.5,322,4.7,311.5,2.7C304.3,1.4,293.6-0.1,280,0c0,0,0,0,0,0v20H420z"
              />
              <path
                d="M140,20c21.5-0.4,38.8-2.5,51.1-4.5c13.4-2.2,26.5-5.2,27.3-5.4C234,6.5,238,4.7,248.5,2.7c7.1-1.3,17.9-2.8,31.5-2.7c0,0,0,0,0,0v20H140z"
              />
              <path
                d="M140,20c-21.5-0.4-38.8-2.5-51.1-4.5c-13.4-2.2-26.5-5.2-27.3-5.4C46,6.5,42,4.7,31.5,2.7C24.3,1.4,13.6-0.1,0,0c0,0,0,0,0,0l0,20H140z"
              />
            </symbol>
          </svg>
          <div class="box">
            <div class="percent">
              <div :id="countSVG" class="percentNum">0</div>
              <div class="percentB">%</div>
            </div>
            <div :id="waterSVG" class="water">
              <svg viewBox="0 0 560 20" class="water_wave water_wave_back">
                <use xlink:href="#wave" />
              </svg>
              <svg viewBox="0 0 560 20" class="water_wave water_wave_front">
                <use xlink:href="#wave" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, nextTick, ref } from "vue";
import bottomImg from "./img/bottomImg.png";
const props = defineProps<{
  number: any; //数量
}>();

//修改宽高  box
//修改水的颜色  water_wave_
//修改水的百分比  count

const countSVG = ref("count" + Date.now() + Math.random()); //生成id 防止多个组件id重复

const waterSVG = ref("water" + Date.now() + Math.random()); //生成id 防止多个组件id重复
//数量
const count = props.number;

nextTick(() => {
  const countEL: any = document.getElementById(countSVG.value);
  const waterEl: any = document.getElementById(waterSVG.value);
  let currentPercentage = 0;

  let timeId: any = null;
  timeId = setInterval(function () {
    currentPercentage++;
    if (currentPercentage >= count) {
      clearInterval(timeId);
    }
    countEL.innerHTML = currentPercentage;
    if (currentPercentage <= 100) {
      waterEl.style.transform = `translateY(${100 - currentPercentage}%)`;
    }
  }, 50);
});
</script>

<style scoped lang="scss">
.container {
  width: 10vw;
  height: 21vh;
  position: relative;
}
.bottomImg {
  position: absolute;
  top: 0;
  left: 0;
  width: 200px;
  height: 200px;
}
*,
*:before,
*:after {
  box-sizing: border-box;
  outline: none;
}
.water-ball {
  position: absolute;
  top: 3px;
  left: 1px;
  display: flex;
  align-items: center;
  padding-bottom: 10px;
  .ball {
    .box {
      width: 200px; //宽度
      height: 200px; //高度
      position: relative;
      background: #020438;
      border-radius: 100%;
      overflow: hidden;
      transform: scale(0.5); //缩放
      .percent {
        position: absolute;
        left: 0;
        top: 0;
        z-index: 3;
        width: 100%;
        height: 100%;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        display: -webkit-flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        font-size: 64px;
      }
      .water {
        position: absolute;
        left: 0;
        top: 0;
        z-index: 2;
        width: 100%;
        height: 100%;
        transform: translate(0, 100%);
        background: #5faeff; //修改颜色【水0】
        .water_wave {
          width: 200%;
          position: absolute;
          bottom: 100%;
        }

        .water_wave_front {
          left: 0;
          fill: #5faeff; //修改颜色【水1】
          margin-bottom: -1px;
          animation: moveWaveFront 1s linear infinite;
        }
        .water_wave_back {
          right: 0;
          fill: #95bff4; //修改颜色【水2】
          animation: moveWaveBack 1.8s linear infinite;
        }
      }
    }
  }
  .tips {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 200px;
    .tip-item {
      display: flex;
      padding: 15px 0;
      .tip-item-icon {
        width: 20px;
        height: 20px;
        border-radius: 10px;
        margin-right: 10px;
      }
      .tip-item-title {
        font-size: 14px;
        color: #ffffff;
        margin-right: 10px;
        line-height: 20px;
      }
      .tip-item-percentage {
        color: #1acdff;
        line-height: 20px;
      }
    }
  }
}
@keyframes moveWaveBack {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(200px);
  }
}
@keyframes moveWaveFront {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-200px);
  }
}

.ball {
  animation: ballShow 1s linear;
}
@keyframes ballShow {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
</style>
