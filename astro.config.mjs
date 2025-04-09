import { defineConfig } from "astro/config";
import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
	markdown: {
		syntaxHighlighting: {
			theme: "material-theme-palenight",
			lineNumbers: true,
			highlightLines: true,
		},
	},
	site: "https://localhost.com",
	integrations: [react(), tailwind()],
});
