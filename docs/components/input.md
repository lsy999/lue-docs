
在 `components/input.md` 中写入：

```md
# Input 输入框

```vue
<template>
  <LueInput v-model="value" />
</template>

<script setup>
import { ref } from 'vue'
const value = ref('Hello')
</script>
