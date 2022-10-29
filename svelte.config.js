/** @type {import('@sveltejs/kit').Config} */
import adapter from "@sveltejs/adapter-netlify";
const config = {
  kit: {
    adapter: adapter(),
    // hydrate the <div id="svelte"> element in src/app.html
  },
};

export default config;
