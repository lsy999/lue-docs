import { defineConfig } from 'vitepress'

export default defineConfig({
    title: 'Lue UI',
    description: '一个轻量级的 Vue 3 UI 组件库',
    base: '/https://github.com/lsy999/lue-docs/tree/main/docs/',
    themeConfig: {
        nav: [
            { text: '指南', link: '/' },
            { text: '@alinaliao/lue-ui', link: 'https://www.npmjs.com/package/@alinaliao/lue-ui' }
        ],
        sidebar: [
            {
                text: '组件',
                items: [
                    { text: 'Button 按钮', link: '/components/button' },
                    { text: 'Input 输入框', link: '/components/input' }
                ]
            }
        ]
    }
})
