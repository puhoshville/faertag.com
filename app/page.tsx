'use client'

import LocaleSwitcher from '@dima-algebras/algebras-auto-intl/runtime/client/components/LocaleSwitcher'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Home() {
	const images = [
		'/anastasia.jpg',
		'/anastasia1.jpg',
		'/anastasia2.jpg',
		'/anastasia3.jpg',
	]
	const thumbnails = [
		'/thumb0.png',
		'/thumb1.png',
		'/thumb2.png',
		'/thumb3.png',
		'/thumb4.png',
		'/thumb5.png',
		'/thumb6.png',
	]

	const screenshots = [
		'/screen0.jpeg',
		'/screen1.jpeg',
		'/screen2.jpeg',
		'/screen3.jpeg',
		'/screen4.jpeg',
		'/screen5.jpeg',
		'/screen6.jpeg',
		'/screen7.jpeg',
	]

	const [currentThumbnailIndex, setCurrentThumbnailIndex] = useState(0)
	const [currentStoryImageIndex, setCurrentStoryImageIndex] = useState(0)

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentThumbnailIndex(prevIndex => (prevIndex + 1) % thumbnails.length)
		}, 3000) // Change image every 3 seconds

		return () => clearInterval(interval)
	}, [thumbnails.length])

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentStoryImageIndex(prevIndex => (prevIndex + 1) % images.length)
		}, 3000) // Change image every 3 seconds

		return () => clearInterval(interval)
	}, [images.length])

	return (
		<div className='min-h-screen bg-white'>
			<LocaleSwitcher />
			{/* Hero Section */}
			<section className='relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20 px-4 sm:py-32 sm:px-6 lg:px-8'>
				<div className='mx-auto max-w-7xl'>
					<div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16'>
						<div className='text-center lg:text-left'>
							<h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl mb-6 leading-tight'>
								257 тысяч зрителей ждут Вашу историю
							</h1>
							<p className='text-xl text-gray-700 max-w-3xl lg:max-w-none mx-auto lg:mx-0 mb-8 leading-relaxed'>
								Партнёрские видео и интеграции на{' '}
								<a
									href='https://www.youtube.com/@faertag'
									target='_blank'
									rel='noopener noreferrer'
									className='text-indigo-600 hover:text-indigo-700 transition-colors font-semibold underline decoration-2 underline-offset-2'
								>
									YouTube-канале FAERTAG IN 🇦🇲
								</a>
							</p>
							<a
								href='#contact'
								className='inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-10 py-4 text-lg font-semibold text-white shadow-xl transition-all hover:from-indigo-700 hover:to-purple-700 hover:shadow-2xl hover:scale-105'
							>
								Начать сотрудничество
							</a>
						</div>
						<div className='flex justify-center lg:justify-end'>
							<div className='relative w-full max-w-2xl aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl'>
								{thumbnails.map((src, index) => (
									<Image
										key={src}
										src={src}
										alt='Анастасия Фаертаг'
										width={1280}
										height={800}
										className={`object-cover w-full h-full absolute inset-0 transition-opacity duration-1000 ${
											index === currentThumbnailIndex
												? 'opacity-100'
												: 'opacity-0'
										}`}
										priority={index === 0}
									/>
								))}
							</div>
						</div>
					</div>

					{/* Statistics */}
					<div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-16'>
						<div className='bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow'>
							<div className='text-3xl font-bold text-indigo-600 mb-2'>
								10 000+
							</div>
							<div className='text-gray-600'>подписчиков</div>
						</div>
						<div className='bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow'>
							<div className='text-3xl font-bold text-indigo-600 mb-2'>
								1,6 млн
							</div>
							<div className='text-gray-600'>просмотров за 28 дней</div>
						</div>
						<div className='bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow'>
							<div className='text-3xl font-bold text-indigo-600 mb-2'>
								257 000
							</div>
							<div className='text-gray-600'>уникальных зрителей</div>
						</div>
						<div className='bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow'>
							<div className='text-3xl font-bold text-indigo-600 mb-2'>
								44 %
							</div>
							<div className='text-gray-600'>просмотров из 🇦🇲</div>
						</div>
					</div>
				</div>
			</section>

			{/* Special Issue Package Section */}
			<section className='relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50'>
				<div className='mx-auto max-w-7xl'>
					{/* Premium Badge */}
					<div className='flex justify-center mb-8'>
						<div className='relative inline-block'>
							<div className='absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-full blur-lg opacity-75 animate-pulse'></div>
							<div className='relative bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white px-8 py-3 rounded-full font-bold text-lg tracking-wide shadow-xl'>
								⭐ САМОЕ ЦЕННОЕ ПРЕДЛОЖЕНИЕ ⭐
							</div>
						</div>
					</div>

					<div className='text-center mb-16'>
						<h2 className='text-4xl sm:text-5xl font-bold text-gray-900 mb-6'>
							Специальный выпуск
						</h2>
						<p className='text-xl text-gray-700 max-w-3xl mx-auto font-medium'>
							Полноценный видеоролик, полностью посвящённый бренду, продукту или
							кампании. Создаётся в стилистике канала, чтобы органично
							воспринимался аудиторией и вызывал доверие.
						</p>
					</div>

					{/* Animated Gradient Border Container */}
					<div className='animated-gradient-border premium-glow max-w-6xl mx-auto'>
						<div className='bg-white rounded-xl p-8 md:p-12'>
							<h3 className='text-3xl font-bold text-gray-900 mb-10 text-center'>
								Что включено
							</h3>
							<div className='space-y-6'>
								<div className='bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6 shadow-lg border-l-4 border-indigo-600'>
									<div className='flex items-start'>
										<div className='shrink-0 w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 text-white rounded-full flex items-center justify-center font-bold mr-4 text-lg shadow-lg'>
											1
										</div>
										<div>
											<h4 className='text-xl font-bold text-gray-900 mb-2'>
												Концепт и сценарий
											</h4>
											<p className='text-gray-700 leading-relaxed'>
												Разработка идеи ролика, креатива и сценария совместно с
												брендом. Возможность адаптировать продукт под контент
												блогера (история, челлендж, эксперимент и т.д.).
											</p>
										</div>
									</div>
								</div>

								<div className='bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6 shadow-lg border-l-4 border-indigo-600'>
									<div className='flex items-start'>
										<div className='shrink-0 w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 text-white rounded-full flex items-center justify-center font-bold mr-4 text-lg shadow-lg'>
											2
										</div>
										<div>
											<h4 className='text-xl font-bold text-gray-900 mb-2'>
												Съёмка и продакшн
											</h4>
											<p className='text-gray-700 leading-relaxed'>
												Полноценная съёмка видео в стиле канала: постановка,
												монтаж, цветокоррекция, графика, звук.
											</p>
										</div>
									</div>
								</div>

								<div className='bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6 shadow-lg border-l-4 border-indigo-600'>
									<div className='flex items-start'>
										<div className='shrink-0 w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 text-white rounded-full flex items-center justify-center font-bold mr-4 text-lg shadow-lg'>
											3
										</div>
										<div>
											<h4 className='text-xl font-bold text-gray-900 mb-2'>
												Полное упоминание бренда
											</h4>
											<p className='text-gray-700 leading-relaxed'>
												Интеграция в течение всего видео: логотип, продукт,
												ключевые сообщения, демонстрация преимуществ.
											</p>
										</div>
									</div>
								</div>

								<div className='bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6 shadow-lg border-l-4 border-indigo-600'>
									<div className='flex items-start'>
										<div className='shrink-0 w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 text-white rounded-full flex items-center justify-center font-bold mr-4 text-lg shadow-lg'>
											4
										</div>
										<div>
											<h4 className='text-xl font-bold text-gray-900 mb-2'>
												Размещение и продвижение
											</h4>
											<p className='text-gray-700 leading-relaxed'>
												Публикация на основном YouTube-канале с закреплённой
												ссылкой в описании и первом комментарии. Опционально —
												пост в сообществе YouTube или сторис в других соцсетях.
											</p>
										</div>
									</div>
								</div>

								<div className='bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6 shadow-lg border-l-4 border-indigo-600'>
									<div className='flex items-start'>
										<div className='shrink-0 w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 text-white rounded-full flex items-center justify-center font-bold mr-4 text-lg shadow-lg'>
											5
										</div>
										<div>
											<h4 className='text-xl font-bold text-gray-900 mb-2'>
												Отчётность
											</h4>
											<p className='text-gray-700 leading-relaxed'>
												Предоставление статистики через 7 и 30 дней: просмотры,
												удержание, клики по ссылкам, вовлечённость.
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Story Section */}
			<section className='py-20 px-4 sm:px-6 lg:px-8 bg-white'>
				<div className='mx-auto max-w-7xl'>
					<h2 className='text-3xl font-bold text-center text-gray-900 mb-12'>
						Обо мне
					</h2>
					<div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
						<div className='prose prose-lg max-w-none'>
							<p className='text-xl text-gray-700 leading-relaxed mb-6'>
								Меня зовут Анастасия Фаертаг.
							</p>
							<p className='text-xl text-gray-700 leading-relaxed mb-6'>
								Уже три года я живу в Армении и делюсь своей жизнью здесь на
								YouTube.
							</p>
							<p className='text-xl text-gray-700 leading-relaxed'>
								В своих видео рассказываю о людях, культуре и вдохновляющих
								историях этой удивительной страны — глазами человека, который
								когда-то просто решил остаться здесь жить.
							</p>
						</div>
						<div className='flex justify-center lg:justify-end'>
							<div className='relative w-full max-w-md aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl'>
								{images.map((src, index) => (
									<Image
										key={`story-${src}`}
										src={src}
										alt='Анастасия Фаертаг'
										width={600}
										height={800}
										className={`object-cover w-full h-full -scale-x-100 absolute inset-0 transition-opacity duration-1000 ${
											index === currentStoryImageIndex
												? 'opacity-100'
												: 'opacity-0'
										}`}
									/>
								))}
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Audience Demographics Section */}
			<section className='py-20 px-4 sm:px-6 lg:px-8 bg-gray-50'>
				<div className='mx-auto max-w-7xl'>
					<h2 className='text-3xl font-bold text-center text-gray-900 mb-12'>
						Основная аудитория
					</h2>
					<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
						<div className='bg-white rounded-xl p-8 shadow-md'>
							<h3 className='text-xl font-semibold text-gray-900 mb-4'>
								География
							</h3>
							<div className='space-y-3'>
								<div className='flex justify-between items-center'>
									<span className='text-gray-700 flex items-center gap-2'>
										🇦🇲 Армения
									</span>
									<span className='text-indigo-600 font-bold'>44 %</span>
								</div>
								<div className='w-full bg-gray-200 rounded-full h-3'>
									<div
										className='bg-indigo-600 h-3 rounded-full'
										style={{ width: '44%' }}
									></div>
								</div>
								<div className='flex justify-between items-center'>
									<span className='text-gray-700 flex items-center gap-2'>
										🇷🇺 Россия
									</span>
									<span className='text-indigo-600 font-bold'>22 %</span>
								</div>
								<div className='w-full bg-gray-200 rounded-full h-3'>
									<div
										className='bg-indigo-600 h-3 rounded-full'
										style={{ width: '22%' }}
									></div>
								</div>
							</div>
						</div>
						<div className='bg-white rounded-xl p-8 shadow-md'>
							<h3 className='text-xl font-semibold text-gray-900 mb-4'>Пол</h3>
							<div className='space-y-3'>
								<div className='flex justify-between items-center'>
									<span className='text-gray-700'>Мужчины</span>
									<span className='text-indigo-600 font-bold'>69 %</span>
								</div>
								<div className='w-full bg-gray-200 rounded-full h-3'>
									<div
										className='bg-indigo-600 h-3 rounded-full'
										style={{ width: '69%' }}
									></div>
								</div>
								<div className='flex justify-between items-center'>
									<span className='text-gray-700'>Женщины</span>
									<span className='text-indigo-600 font-bold'>31 %</span>
								</div>
								<div className='w-full bg-gray-200 rounded-full h-3'>
									<div
										className='bg-indigo-600 h-3 rounded-full'
										style={{ width: '31%' }}
									></div>
								</div>
							</div>
						</div>
						<div className='bg-white rounded-xl p-8 shadow-md'>
							<h3 className='text-xl font-semibold text-gray-900 mb-4'>
								Возраст
							</h3>
							<div className='space-y-3'>
								<div className='flex justify-between items-center'>
									<span className='flex items-center justify-center w-full h-32 text-6xl font-extrabold text-gray-900'>
										25+
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Detailed Statistics Section */}
			<section className='py-20 px-4 sm:px-6 lg:px-8 bg-white'>
				<div className='mx-auto max-w-7xl'>
					<div className='text-center mb-16'>
						<h2 className='text-3xl font-bold text-gray-900 mb-4'>
							Подробная статистика
						</h2>
						<p className='text-xl text-gray-600 max-w-3xl mx-auto'>
							Скриншоты YouTube Studio подтверждают статистику канала и вызывают
							доверие. Все цифры основаны на реальных данных аналитики.
						</p>
					</div>

					<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
						{screenshots.map((src, index) => (
							<div
								key={src}
								className='relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-gray-100'
							>
								<Image
									src={src}
									alt={`Статистика канала ${index + 1}`}
									width={1080}
									height={1920}
									className='w-full h-auto object-contain'
								/>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Additional Services Section */}
			<section className='py-20 px-4 sm:px-6 lg:px-8 bg-gray-50'>
				<div className='mx-auto max-w-7xl'>
					<h2 className='text-3xl font-bold text-center text-gray-900 mb-12'>
						Дополнительные услуги
					</h2>
					<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
						<div className='bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow'>
							<h3 className='text-xl font-semibold text-gray-900 mb-4'>
								Прямая интеграция в видео
							</h3>
							<p className='text-gray-600 mb-4'>
								Упоминание продукта в основном видео
							</p>
							<div className='bg-indigo-50 rounded-lg p-4 mb-4'>
								<div className='text-sm font-medium text-indigo-900 mb-1'>
									Формат
								</div>
								<div className='text-gray-700'>30–90 секунд</div>
							</div>
							<div className='bg-gray-50 rounded-lg p-4'>
								<div className='text-sm font-medium text-gray-900 mb-1'>
									Пример
								</div>
								<div className='text-gray-700 italic'>
									«Сегодня я пользуюсь X, и вот почему…»
								</div>
							</div>
						</div>

						<div className='bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow'>
							<h3 className='text-xl font-semibold text-gray-900 mb-4'>
								Product placement
							</h3>
							<p className='text-gray-600 mb-4'>
								Нативное размещение продукта в кадре
							</p>
							<div className='bg-indigo-50 rounded-lg p-4 mb-4'>
								<div className='text-sm font-medium text-indigo-900 mb-1'>
									Формат
								</div>
								<div className='text-gray-700'>Без прямой речи</div>
							</div>
							<div className='bg-gray-50 rounded-lg p-4'>
								<div className='text-sm font-medium text-gray-900 mb-1'>
									Пример
								</div>
								<div className='text-gray-700 italic'>
									Продукт стоит на фоне, используется в сцене
								</div>
							</div>
						</div>

						<div className='bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow'>
							<h3 className='text-xl font-semibold text-gray-900 mb-4'>
								Интро / аутро вставка
							</h3>
							<p className='text-gray-600 mb-4'>
								Короткий спонсорский блок в начале или конце
							</p>
							<div className='bg-indigo-50 rounded-lg p-4 mb-4'>
								<div className='text-sm font-medium text-indigo-900 mb-1'>
									Формат
								</div>
								<div className='text-gray-700'>5–15 секунд</div>
							</div>
							<div className='bg-gray-50 rounded-lg p-4'>
								<div className='text-sm font-medium text-gray-900 mb-1'>
									Пример
								</div>
								<div className='text-gray-700 italic'>
									«Ролик создан при поддержке…»
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Contact Section */}
			<section
				id='contact'
				className='py-20 px-4 sm:px-6 lg:px-8 bg-indigo-600'
			>
				<div className='mx-auto max-w-4xl text-center'>
					<h2 className='text-3xl font-bold text-white mb-4'>
						Связаться с нами
					</h2>
					<p className='text-xl text-indigo-100 mb-12'>
						Готовы обсудить сотрудничество? Выберите удобный способ связи
					</p>
					<div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
						<a
							href='https://wa.me/37495051893'
							target='_blank'
							rel='noopener noreferrer'
							className='bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:scale-105'
						>
							<div className='text-2xl mb-3'>💬</div>
							<div className='font-semibold text-gray-900 mb-2'>WhatsApp</div>
							<div className='text-indigo-600'>+37495051893</div>
						</a>
						<a
							href='mailto:anastasia@faertag.com'
							className='bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:scale-105'
						>
							<div className='text-2xl mb-3'>✉️</div>
							<div className='font-semibold text-gray-900 mb-2'>Email</div>
							<div className='text-indigo-600'>anastasia@faertag.com</div>
						</a>
						<a
							href='https://t.me/psych_faertag'
							target='_blank'
							rel='noopener noreferrer'
							className='bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:scale-105'
						>
							<div className='text-2xl mb-3'>✈️</div>
							<div className='font-semibold text-gray-900 mb-2'>Telegram</div>
							<div className='text-indigo-600'>psych_faertag</div>
						</a>
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer className='bg-gray-900 text-gray-400 py-8 px-4 text-center'>
				<p>© {new Date().getFullYear()} FAERTAG IN. Все права защищены.</p>
			</footer>
		</div>
	)
}
