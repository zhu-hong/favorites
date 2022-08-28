import { defineStore } from 'pinia'

export const useFavStore = defineStore('favorites', {
  state: () => {
    return {
      key: '',
      favorites: [
        {
          name: 'xmrth',
          address: 'https://xmrth.vip',
          desc: '翻墙',
        },
        {
          name: 'nerd-fonts',
          address: 'https://github.com/ryanoasis/nerd-fonts',
          desc: '图标字体',
        },
        {
          name: 'terminal',
          address: 'https://github.com/microsoft/terminal',
          desc: '终端',
        },
        {
          name: '7-zip',
          address: 'https://www.7-zip.org',
          desc: '压缩',
        },
        {
          name: 'lx-music',
          address: 'https://github.com/lyswhut/lx-music-desktop',
          desc: '音乐',
        },
        {
          name: 'power-shell',
          address: 'https://github.com/PowerShell/PowerShell',
          desc: '命令行',
        },
        {
          name: 'bilibili',
          address: 'https://app.bilibili.com',
          desc: '嘿嘿嘿',
        },
        {
          name: 'vscode',
          address: 'https://code.visualstudio.com/Download',
          desc: '写代码',
        },
        {
          name: 'git',
          address: 'https://git-scm.com',
          desc: 'git',
        },
        {
          name: 'node',
          address: 'https://nodejs.dev/en/download',
          desc: 'node',
        },
        {
          name: 'lux',
          address: 'https://github.com/iawia002/lux',
          desc: '视频下载',
        },
        {
          name: 'sumatra-pdf',
          address: 'https://www.sumatrapdfreader.org',
          desc: 'pdf',
        },
        {
          name: 'ffmpeg',
          address: 'https://ffmpeg.org',
          desc: '图像音视频处理',
        },
      ]
    }
  },
  getters: {
    favoritesFilter() {
      return this.favorites.filter((f) => f.name.toLowerCase().includes(this.key.toLowerCase()))
    },
  },
})