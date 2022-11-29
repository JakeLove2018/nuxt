<script setup>
import { NButton,NResult } from 'naive-ui';
const props = defineProps({
  error: Object
})
const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <div class="mt-10">
    <n-result status="500" title="500 服务器错误" :description="error.message">
      <template #footer>
        <n-button @click="handleError">数据错误，返回首页</n-button>
      </template>
    </n-result>
  </div>

</template>

<style lang="css" scoped>

</style>