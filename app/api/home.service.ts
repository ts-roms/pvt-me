import profile from "../../public/data/home/default.json";

// Bundled at build time so the loader never depends on an HTTP self-fetch
// (VITE_PUBLIC_SITE_URL pointed at localhost and caused 500s on Vercel).
export const getProfile = async () => profile;
