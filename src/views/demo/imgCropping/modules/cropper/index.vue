<template>
  <Layer :layer="layer" width="1000">
    <div class="container">
      <div class="box">
        <img :id="imgId" class="default-img" :src="modelValue" />
      </div>
      <div class="box">
        <div :class="previewClass" class="preview">
        </div>
      </div>
    </div>
    <Tip :cropper="cropper" v-if="cropper" />
    <div class="handle-box">
      <el-upload
        class="upload-demo"
        action=""
        :auto-upload="false"
        accept="image/*"
        ref="uploadDom"
        :on-change="uploadchange"
      >
        <el-button type="primary" :icon="Upload" style="margin-right: 10px;">上传图片</el-button>
      </el-upload>
      <el-button type="primary" :icon="Download" @click="downloadCropper">下载截图至本地</el-button>
      <el-button type="primary" :icon="Picture" @click="saveAsModel">保存截图</el-button>
    </div>
  </Layer>
</template>

<script lang="ts" setup>

  import { nextTick, ref } from 'vue'
  import Layer from '../layer/index.vue'
  import Tip from './tip.vue'
  import Cropper from 'cropperjs'
  import 'cropperjs/dist/cropper.css'
import { Upload, Download, Picture } from '@element-plus/icons'

  const props = defineProps<{
    layer: any,
  }>()

  const emit = defineEmits(['update:modelValue'])

  let cropper = ref(null as Cropper|null)
  const imgId = 'image' + new Date().getTime()
  const previewClass = 'preview' + new Date().getTime()
  let uploadDom = ref(null as any|null)
  
   nextTick(() => {
      initCropper()
    })
  // init the cropperjs
  const  initCropper=()=> {
    if (cropper.value) {
      cropper.value.destroy()
    }
    const image = document.getElementById(imgId) as HTMLImageElement
    cropper.value = new Cropper(image, {
      preview: '.' + previewClass
    });
  }

 const uploadchange=(file: any, fileList: any) =>{
    file2base64(file)
    uploadDom.value.clearFiles()
  }

  // the file object transform to base64
  const file2base64=(file: any)=> {
    let imgFile = new FileReader()
    imgFile.readAsDataURL(file.raw)
    imgFile.onload = function(e) {
      const image = document.getElementById(imgId) as HTMLImageElement
      image.setAttribute('src', this.result as string)
      initCropper()
    }
  }
  // download the local image
  const downloadCropper=() =>{
    const canvas = cropper.value?.getCroppedCanvas({
      maxWidth: 4096,
      maxHeight: 4096
    })
    const base64 = canvas?.toDataURL() || ''
    const a = document.createElement('a')
    a.href = base64
    a.download = "download.png"
    a.click()
  }
  // save as v-model data, just like download the local image, but need to upload the data
  const saveAsModel=()=> {
    // 1. 获取base64数据
    const canvas = cropper.value?.getCroppedCanvas({
      maxWidth: 4096,
      maxHeight: 4096
    })
    const base64 = canvas?.toDataURL()
    // 2. 进行图片上传，并拿到上传后的地址，暂时省略
    // 3. 赋值给v-model
    emit('update:modelValue', base64)
    // 4. 关闭当前弹窗
    props.layer.show = false
  }
  
</script>

<style lang="scss" scoped>
  .container {
    display: flex;
    justify-content: space-between;
    height: 300px;
    overflow: hidden;
    .box {
      width: 49%;
      height: 100%;
      .default-img {
        display: block;
        max-width: 100%;
        height: 100%;
        margin: 0 auto;
      }
      .preview{
        width: 100%;
        height: 100%;
        overflow: hidden;
        background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAAA3NCSVQICAjb4U/gAAAABlBMVEXMzMz////TjRV2AAAACXBIWXMAAArrAAAK6wGCiw1aAAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M26LyyjAAAABFJREFUCJlj+M/AgBVhF/0PAH6/D/HkDxOGAAAAAElFTkSuQmCC');
        img {
          max-width: 100%;
        }
      }
    }
    
  }
  .handle-box {
    margin-top: 10px;
    display: flex;
    align-items: center;
    width: 49%;
  }

  .upload-demo {
    display: flex;
    align-items: center;
  }
</style>