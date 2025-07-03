import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import LueUI from '@alinaliao/lue-ui'
import '@alinaliao/lue-ui/dist/lue-ui.css'

// 创建 Vue 应用实例
const app = createApp(App)

// 注册组件库
app.use(LueUI)

// 挂载到页面
app.mount('#app')
