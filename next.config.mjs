import autoIntl, { LanguageCode } from 'algebras-auto-intl'

const nextConfig = {
	output: 'standalone',
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'images.unsplash.com',
			},
		],
	},
}

// autoIntl bilan configni o'rash
export default autoIntl({
	defaultLocale: LanguageCode.en,
	includeNodeModules: false,
	targetLocales: [LanguageCode.ru],
	outputDir: './src/intl',
})(nextConfig)
