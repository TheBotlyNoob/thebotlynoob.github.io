import type { SiteConfig } from "$lib/types/site"

export const site: SiteConfig = {
  protocol: "https://",
  domain: import.meta.env.URARA_SITE_DOMAIN ?? "jj.is-a.dev",
  title: "Blog",
  subtitle: "Sweet & Powerful SvelteKit Blog Template",
  lang: "en-US",
  description: "Powered by SvelteKit/Urara",
  author: {
    name: "Jay Jackson",
    avatar: "/assets/maskable@192.png",
    status: "👨‍💻",
    bio: "12 year old developer, loves to code, and loves to play games."
  },
  themeColor: "#3D4451"
}
