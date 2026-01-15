import autoIntl, { LanguageCode } from '@dima-algebras/algebras-auto-intl'
import type { NextConfig } from 'next'

const nextConfig: NextConfig = autoIntl({
	defaultLocale: LanguageCode.ru,
	targetLocales: [LanguageCode.en, LanguageCode.hy],
	outputDir: './src/intl',
	includeNodeModules: false,
	// The plugin automatically reads ALGEBRAS_API_KEY and ALGEBRAS_API_URL from .env
})({
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
})

export default nextConfig
