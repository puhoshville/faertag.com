import autoIntl, { LanguageCode } from "algebras-auto-intl";

const nextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

// autoIntl bilan configni o'rash
export default autoIntl({
  defaultLocale: LanguageCode.ru,
  includeNodeModules: false,
  targetLocales: [LanguageCode.es, LanguageCode.fr, LanguageCode.de],
  outputDir: "src/intl",
})(nextConfig);
