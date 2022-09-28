import { sveltekit } from "@sveltejs/kit/vite"
import { VitePluginFonts } from "vite-plugin-fonts"
import type { UserConfig } from "vite"

const config: UserConfig = {
    plugins: [
        sveltekit(),
        VitePluginFonts({
            google: {
                families: ["Quicksand"]
            }
        })
    ]
}

export default config
