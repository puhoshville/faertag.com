"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const images = [
    "/anastasia.jpg",
    "/anastasia1.jpg",
    "/anastasia2.jpg",
    "/anastasia3.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20 px-4 sm:py-32 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl mb-6">
                Продвиньте свой бренд среди активной аудитории 🇦🇲 Армении и 🇦🇲 Диаспоры
              </h1>
              <p className="text-xl text-gray-700 max-w-3xl lg:max-w-none mx-auto lg:mx-0 mb-8">
                Партнёрские видео, интеграции и имиджевые кампании на YouTube-канале FAERTAG IN
              </p>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:bg-indigo-700 hover:shadow-xl"
              >
                Начать сотрудничество
              </a>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md aspect-square rounded-2xl overflow-hidden shadow-2xl">
                {images.map((src, index) => (
                  <Image
                    key={src}
                    src={src}
                    alt="Анастасия Фаертаг"
                    width={600}
                    height={600}
                    className={`object-cover w-full h-full -scale-x-100 absolute inset-0 transition-opacity duration-1000 ${
                      index === currentImageIndex ? "opacity-100" : "opacity-0"
                    }`}
                    priority={index === 0}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-16">
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl font-bold text-indigo-600 mb-2">10 000+</div>
              <div className="text-gray-600">подписчиков</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl font-bold text-indigo-600 mb-2">1,6 млн</div>
              <div className="text-gray-600">просмотров за 28 дней</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl font-bold text-indigo-600 mb-2">257 000</div>
              <div className="text-gray-600">уникальных зрителей в месяц</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl font-bold text-indigo-600 mb-2">87 %</div>
              <div className="text-gray-600">просмотров от новых зрителей</div>
              <div className="text-sm text-gray-500 mt-1">высокий охват, идеален для брендов</div>
            </div>
          </div>
        </div>
      </section>

      {/* Audience Demographics Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Основная аудитория
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">География</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 flex items-center gap-2">
                    🇦🇲 Армения
                  </span>
                  <span className="text-indigo-600 font-bold">44 %</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-indigo-600 h-3 rounded-full" style={{ width: "44%" }}></div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 flex items-center gap-2">
                    🇷🇺 Россия
                  </span>
                  <span className="text-indigo-600 font-bold">22 %</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-indigo-600 h-3 rounded-full" style={{ width: "22%" }}></div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Пол</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Мужчины</span>
                  <span className="text-indigo-600 font-bold">69 %</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-indigo-600 h-3 rounded-full" style={{ width: "69%" }}></div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Женщины</span>
                  <span className="text-indigo-600 font-bold">31 %</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-indigo-600 h-3 rounded-full" style={{ width: "31%" }}></div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Возраст</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">45–65+</span>
                  <span className="text-indigo-600 font-bold">≈ 60 %</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-indigo-600 h-3 rounded-full" style={{ width: "60%" }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Special Issue Package Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Специальный выпуск
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Полноценный видеоролик, полностью посвящённый бренду, продукту или кампании.
              Создаётся в стилистике канала, чтобы органично воспринимался аудиторией и вызывал доверие.
            </p>
          </div>

          <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-8 md:p-12 mb-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-8">Что включено</h3>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="flex items-start">
                  <div className="shrink-0 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                    1
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">
                      Концепт и сценарий
                    </h4>
                    <p className="text-gray-600">
                      Разработка идеи ролика, креатива и сценария совместно с брендом. Возможность адаптировать продукт под контент блогера (история, челлендж, эксперимент и т.д.).
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="flex items-start">
                  <div className="shrink-0 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                    2
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">
                      Съёмка и продакшн
                    </h4>
                    <p className="text-gray-600">
                      Полноценная съёмка видео в стиле канала: постановка, монтаж, цветокоррекция, графика, звук.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="flex items-start">
                  <div className="shrink-0 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                    3
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">
                      Полное упоминание бренда
                    </h4>
                    <p className="text-gray-600">
                      Интеграция в течение всего видео: логотип, продукт, ключевые сообщения, демонстрация преимуществ.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="flex items-start">
                  <div className="shrink-0 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                    4
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">
                      Размещение и продвижение
                    </h4>
                    <p className="text-gray-600">
                      Публикация на основном YouTube-канале с закреплённой ссылкой в описании и первом комментарии. Опционально — пост в сообществе YouTube или сторис в других соцсетях.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="flex items-start">
                  <div className="shrink-0 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                    5
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">
                      Отчётность
                    </h4>
                    <p className="text-gray-600">
                      Предоставление статистики через 7 и 30 дней: просмотры, удержание, клики по ссылкам, вовлечённость.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Дополнительные услуги
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Прямая интеграция в видео
              </h3>
              <p className="text-gray-600 mb-4">
                Упоминание продукта в основном видео
              </p>
              <div className="bg-indigo-50 rounded-lg p-4 mb-4">
                <div className="text-sm font-medium text-indigo-900 mb-1">Формат</div>
                <div className="text-gray-700">30–90 секунд</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="text-sm font-medium text-gray-900 mb-1">Пример</div>
                <div className="text-gray-700 italic">«Сегодня я пользуюсь X, и вот почему…»</div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Product placement
              </h3>
              <p className="text-gray-600 mb-4">
                Нативное размещение продукта в кадре
              </p>
              <div className="bg-indigo-50 rounded-lg p-4 mb-4">
                <div className="text-sm font-medium text-indigo-900 mb-1">Формат</div>
                <div className="text-gray-700">Без прямой речи</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="text-sm font-medium text-gray-900 mb-1">Пример</div>
                <div className="text-gray-700 italic">Продукт стоит на фоне, используется в сцене</div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Интро / аутро вставка
              </h3>
              <p className="text-gray-600 mb-4">
                Короткий спонсорский блок в начале или конце
              </p>
              <div className="bg-indigo-50 rounded-lg p-4 mb-4">
                <div className="text-sm font-medium text-indigo-900 mb-1">Формат</div>
                <div className="text-gray-700">5–15 секунд</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="text-sm font-medium text-gray-900 mb-1">Пример</div>
                <div className="text-gray-700 italic">«Ролик создан при поддержке…»</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-indigo-600">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Связаться с нами
          </h2>
          <p className="text-xl text-indigo-100 mb-12">
            Готовы обсудить сотрудничество? Выберите удобный способ связи
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a
              href="https://wa.me/37495051893"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              <div className="text-2xl mb-3">💬</div>
              <div className="font-semibold text-gray-900 mb-2">WhatsApp</div>
              <div className="text-indigo-600">+37495051893</div>
            </a>
            <a
              href="mailto:anastasia@faertag.com"
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              <div className="text-2xl mb-3">✉️</div>
              <div className="font-semibold text-gray-900 mb-2">Email</div>
              <div className="text-indigo-600">anastasia@faertag.com</div>
            </a>
            <a
              href="https://t.me/psych_faertag"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              <div className="text-2xl mb-3">✈️</div>
              <div className="font-semibold text-gray-900 mb-2">Telegram</div>
              <div className="text-indigo-600">psych_faertag</div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 px-4 text-center">
        <p>© {new Date().getFullYear()} FAERTAG IN. Все права защищены.</p>
      </footer>
    </div>
  );
}