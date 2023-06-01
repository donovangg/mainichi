import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  backgroundImage: {
    'index-bg': "url('/assets/your-name.jpeg')",
    'watchlist-bg': "url('/assets/hibike.webp')",
  }
} satisfies Config;
