import { defineConfig } from '@slidev/cli'

export default defineConfig({
  // Presentation aspect ratio
  aspectRatio: '16/9',
  
  // Enable presenter mode
  presenter: true,
  
  // Enable download
  download: true,
  
  // Canvas size for consistent rendering
  canvasWidth: 980,
  
  // Theme configuration
  themeConfig: {
    primary: '#10A3C8', // BC Hydro Sea
  },
  
  // Enable drawing
  drawings: {
    enabled: true,
    persist: false,
  },
  
  // CSS configuration
  css: 'unocss',
})
