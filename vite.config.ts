import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import sonda from 'sonda/vite'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const isAnalyzeMode = mode === "analyze";

  return {
    build: {
      sourcemap: isAnalyzeMode
    },
    server: {
      proxy: {
        "/football": {
          target: env.FOOTBALL_API_BASE_URL,
          changeOrigin: true,
          secure: true,
          rewrite: (path) => path.replace(/^\/football/, "/v4"),
        },
      },
    },
    define: {
      FOOTBALL_API_PROXY_URL: JSON.stringify(env.FOOTBALL_API_PROXY_URL),
      FOOTBALL_API_BASE_URL: JSON.stringify(env.FOOTBALL_API_BASE_URL),
      FOOTBALL_API_TOKEN: JSON.stringify(env.FOOTBALL_API_TOKEN),
      USE_CUSTOM_AUTH: JSON.parse(JSON.stringify(env.USE_CUSTOM_AUTH)),
      POST_LOGIN_URI: JSON.stringify(env.POST_LOGIN_URI),
      POST_LOGOUT_URI: JSON.stringify(env.POST_LOGOUT_URI),
      COGNITO_OIDC_CLIENT_ID: JSON.stringify(env.COGNITO_OIDC_CLIENT_ID),
      COGNITO_ROOT_DOMAIN: JSON.stringify(env.COGNITO_ROOT_DOMAIN),
      COGNITO_AUTHORITY: JSON.stringify(env.COGNITO_AUTHORITY),
    },
    resolve: {
      alias: {
        "@tabler/icons-react": "@tabler/icons-react/dist/esm/icons/index.mjs",
      },
    },
    plugins: [react(), tsconfigPaths(), sonda({
      brotli: true,
      detailed: true,
      enabled: isAnalyzeMode,
      filename: './node_modules/.tmp/sonda-report.html',
      gzip: true,
    })],
  };
});
