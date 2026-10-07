import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), 'VITE_')
  const verificationToken = env.VITE_GSC_VERIFICATION

  return {
    plugins: [
      react({
        babel: {
          plugins: [['babel-plugin-react-compiler']],
        },
      }),
      {
        name: 'search-console-verification',
        transformIndexHtml(html: string) {
          if (!verificationToken) return html
          const escapedToken = verificationToken.replace(/[&"<>]/g, (character) => {
            const entities: Record<string, string> = {
              '&': '&amp;',
              '"': '&quot;',
              '<': '&lt;',
              '>': '&gt;',
            }
            return entities[character]
          })
          return html.replace(
            '</head>',
            `  <meta name="google-site-verification" content="${escapedToken}" />\n  </head>`,
          )
        },
      },
    ],
  }
})
