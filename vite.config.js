import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite' //importo tailwind
import react from '@vitejs/plugin-react-swc' //importo react

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(),], //agrego los plugins de react y de tailwind css
})
