import { defineConfig,loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import electron from 'vite-plugin-electron'

// https://vite.dev/config/
export default defineConfig(({mode})=>{
  const env =  loadEnv(mode, process.cwd(), '')
  return {
    define:{
      _VITE_APP_ENV_:JSON.stringify(env.VITE_DEV_SERVER_URL)
    },
    plugins: [
      vue(), 
      electron({
      // 主进程入口文件
      entry: './main.js'
    })],
  }
})
