// uno.config.ts
import { defineConfig } from 'unocss'
import { presetIcons, presetWind } from 'unocss'
export default defineConfig({
  // ...UnoCSS options
  presets: [
    presetWind(),
    presetIcons({
      /* options */
      prefix: 'i-',
      extraProperties: {
        // 图标设置为行内元素
        display: 'inline-block'
      }
    })
  ]
})
