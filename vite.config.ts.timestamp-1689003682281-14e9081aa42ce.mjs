// vite.config.ts
import path from "node:path";
import * as url from "node:url";
import react from "file:///D:/%D0%9A%D1%83%D1%80%D1%81%D1%8B/Front-end/%D0%9F%D0%BE%D1%80%D1%82%D1%84%D0%BE%D0%BB%D0%B8%D0%BE/pixema/node_modules/@vitejs/plugin-react-swc/index.mjs";
import { defineConfig } from "file:///D:/%D0%9A%D1%83%D1%80%D1%81%D1%8B/Front-end/%D0%9F%D0%BE%D1%80%D1%82%D1%84%D0%BE%D0%BB%D0%B8%D0%BE/pixema/node_modules/vite/dist/node/index.js";
import eslint from "file:///D:/%D0%9A%D1%83%D1%80%D1%81%D1%8B/Front-end/%D0%9F%D0%BE%D1%80%D1%82%D1%84%D0%BE%D0%BB%D0%B8%D0%BE/pixema/node_modules/vite-plugin-eslint/dist/index.mjs";
import svgr from "file:///D:/%D0%9A%D1%83%D1%80%D1%81%D1%8B/Front-end/%D0%9F%D0%BE%D1%80%D1%82%D1%84%D0%BE%D0%BB%D0%B8%D0%BE/pixema/node_modules/vite-plugin-svgr/dist/index.js";
var __vite_injected_original_import_meta_url = "file:///D:/%D0%9A%D1%83%D1%80%D1%81%D1%8B/Front-end/%D0%9F%D0%BE%D1%80%D1%82%D1%84%D0%BE%D0%BB%D0%B8%D0%BE/pixema/vite.config.ts";
var vite_config_default = defineConfig(({ mode }) => {
  return {
    plugins: [
      react(),
      eslint({
        failOnError: mode === "production"
      }),
      svgr({
        svgrOptions: {
          prettier: false,
          svgo: true,
          svgoConfig: {
            plugins: [{ removeViewBox: false }]
          },
          titleProp: true,
          ref: true
        }
      })
    ],
    resolve: {
      alias: {
        "~": path.resolve(
          path.dirname(url.fileURLToPath(__vite_injected_original_import_meta_url)),
          "src"
        )
      }
    }
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxcdTA0MUFcdTA0NDNcdTA0NDBcdTA0NDFcdTA0NEJcXFxcRnJvbnQtZW5kXFxcXFx1MDQxRlx1MDQzRVx1MDQ0MFx1MDQ0Mlx1MDQ0NFx1MDQzRVx1MDQzQlx1MDQzOFx1MDQzRVxcXFxwaXhlbWFcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXFx1MDQxQVx1MDQ0M1x1MDQ0MFx1MDQ0MVx1MDQ0QlxcXFxGcm9udC1lbmRcXFxcXHUwNDFGXHUwNDNFXHUwNDQwXHUwNDQyXHUwNDQ0XHUwNDNFXHUwNDNCXHUwNDM4XHUwNDNFXFxcXHBpeGVtYVxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovJUQwJTlBJUQxJTgzJUQxJTgwJUQxJTgxJUQxJThCL0Zyb250LWVuZC8lRDAlOUYlRDAlQkUlRDElODAlRDElODIlRDElODQlRDAlQkUlRDAlQkIlRDAlQjglRDAlQkUvcGl4ZW1hL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHBhdGggZnJvbSAnbm9kZTpwYXRoJztcbmltcG9ydCAqIGFzIHVybCBmcm9tICdub2RlOnVybCc7XG5cbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdC1zd2MnO1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgZXNsaW50IGZyb20gJ3ZpdGUtcGx1Z2luLWVzbGludCc7XG5pbXBvcnQgc3ZnciBmcm9tICd2aXRlLXBsdWdpbi1zdmdyJztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKCh7IG1vZGUgfSkgPT4ge1xuICByZXR1cm4ge1xuICAgIHBsdWdpbnM6IFtcbiAgICAgIHJlYWN0KCksXG4gICAgICBlc2xpbnQoe1xuICAgICAgICBmYWlsT25FcnJvcjogbW9kZSA9PT0gJ3Byb2R1Y3Rpb24nXG4gICAgICB9KSxcbiAgICAgIHN2Z3Ioe1xuICAgICAgICBzdmdyT3B0aW9uczoge1xuICAgICAgICAgIHByZXR0aWVyOiBmYWxzZSxcbiAgICAgICAgICBzdmdvOiB0cnVlLFxuICAgICAgICAgIHN2Z29Db25maWc6IHtcbiAgICAgICAgICAgIHBsdWdpbnM6IFt7IHJlbW92ZVZpZXdCb3g6IGZhbHNlIH1dXG4gICAgICAgICAgfSxcbiAgICAgICAgICB0aXRsZVByb3A6IHRydWUsXG4gICAgICAgICAgcmVmOiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgXSxcbiAgICByZXNvbHZlOiB7XG4gICAgICBhbGlhczoge1xuICAgICAgICAnfic6IHBhdGgucmVzb2x2ZShcbiAgICAgICAgICBwYXRoLmRpcm5hbWUodXJsLmZpbGVVUkxUb1BhdGgoaW1wb3J0Lm1ldGEudXJsKSksXG4gICAgICAgICAgJ3NyYydcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH1cbiAgfTtcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUEyVyxPQUFPLFVBQVU7QUFDNVgsWUFBWSxTQUFTO0FBRXJCLE9BQU8sV0FBVztBQUNsQixTQUFTLG9CQUFvQjtBQUM3QixPQUFPLFlBQVk7QUFDbkIsT0FBTyxVQUFVO0FBTnNLLElBQU0sMkNBQTJDO0FBUXhPLElBQU8sc0JBQVEsYUFBYSxDQUFDLEVBQUUsS0FBSyxNQUFNO0FBQ3hDLFNBQU87QUFBQSxJQUNMLFNBQVM7QUFBQSxNQUNQLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxRQUNMLGFBQWEsU0FBUztBQUFBLE1BQ3hCLENBQUM7QUFBQSxNQUNELEtBQUs7QUFBQSxRQUNILGFBQWE7QUFBQSxVQUNYLFVBQVU7QUFBQSxVQUNWLE1BQU07QUFBQSxVQUNOLFlBQVk7QUFBQSxZQUNWLFNBQVMsQ0FBQyxFQUFFLGVBQWUsTUFBTSxDQUFDO0FBQUEsVUFDcEM7QUFBQSxVQUNBLFdBQVc7QUFBQSxVQUNYLEtBQUs7QUFBQSxRQUNQO0FBQUEsTUFDRixDQUFDO0FBQUEsSUFDSDtBQUFBLElBQ0EsU0FBUztBQUFBLE1BQ1AsT0FBTztBQUFBLFFBQ0wsS0FBSyxLQUFLO0FBQUEsVUFDUixLQUFLLFFBQVksa0JBQWMsd0NBQWUsQ0FBQztBQUFBLFVBQy9DO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
