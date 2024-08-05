import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base:"/hkustcas_website/",
  plugins: [react()], server:{
    host:true
  }
})
