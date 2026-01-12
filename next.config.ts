import autoIntl, { LanguageCode } from '@dima-algebras/algebras-auto-intl'

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

// Wrap config with Algebras AI auto translation plugin
export default autoIntl({
	defaultLocale: LanguageCode.ru,
	includeNodeModules: false,
	targetLocales: [LanguageCode.en],
	outputDir: './src/intl',
})(nextConfig)
