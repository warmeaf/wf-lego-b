/*
 * @Author: warmleaf 1391040917@qq.com
 * @Date: 2023-12-10 20:45:33
 * @LastEditors: warmleaf 1391040917@qq.com
 * @LastEditTime: 2024-03-04 21:21:35
 * @FilePath: \v-element\docs\.vitepress\config.mts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig } from 'vitepress'
import { fileURLToPath, URL } from 'node:url'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'xxxx',
  description: 'A VitePress Site',
  vite: {
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('../../src', import.meta.url)),
      },
    },
  },
  themeConfig: {
    nav: [
      { text: '指南', link: '/guide/install', activeMatch: '/guide/' },
    ],

    sidebar: {
      '/guide/': [
        { text: '指南', items: [{ text: '安装', link: '/guide/install' }] },
      ],
    },
  },
})
