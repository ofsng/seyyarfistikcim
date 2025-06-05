import Image from "next/image"
import { Calendar, MapPin, Clock, Users, Music, Gift } from "lucide-react"

export default function FistikPartisiPage() {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <Image
              src="/images/peanut-mascot.png"
              alt="Seyyar Fıstıkçım"
              width={100}
              height={100}
              className="animate-bounce mr-4"
            />
            <h1 className="text-5xl font-bold text-white">Fıstık Partisi</h1>
            <div className="text-4xl ml-4 animate-pulse">🎉</div>
          </div>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Yılın en eğlenceli etkinliği! Müzik, dans, fıstık ve sürprizlerle dolu bir gece.
          </p>
        </div>

        {/* Event Info */}
        <div className="bg-white/95 rounded-xl p-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Calendar className="h-6 w-6 text-orange-600" />
                <div>
                  <h3 className="font-bold text-orange-800">Tarih</h3>
                  <p className="text-gray-700">15 Mayıs 2025, Cumartesi</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Clock className="h-6 w-6 text-orange-600" />
                <div>
                  <h3 className="font-bold text-orange-800">Saat</h3>
                  <p className="text-gray-700">20:00 - 02:00</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <MapPin className="h-6 w-6 text-orange-600" />
                <div>
                  <h3 className="font-bold text-orange-800">Konum</h3>
                  <p className="text-gray-700">Açık Hava Sahne Alanı</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Users className="h-6 w-6 text-orange-600" />
                <div>
                  <h3 className="font-bold text-orange-800">Kapasite</h3>
                  <p className="text-gray-700">500 Kişi</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Music className="h-6 w-6 text-orange-600" />
                <div>
                  <h3 className="font-bold text-orange-800">Müzik</h3>
                  <p className="text-gray-700">Canlı DJ Performansı</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Gift className="h-6 w-6 text-orange-600" />
                <div>
                  <h3 className="font-bold text-orange-800">Hediyeler</h3>
                  <p className="text-gray-700">Sürpriz çekilişler!</p>
                </div>
              </div>
            </div>
          </div>

          {/* Program */}
          <div className="border-t pt-8">
            <h3 className="text-2xl font-bold text-orange-800 mb-6">Program</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-4 bg-orange-50 rounded-lg">
                <span className="font-bold text-orange-600 w-16">20:00</span>
                <span className="text-gray-700">Kapılar açılır, karşılama fıstığı</span>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-orange-50 rounded-lg">
                <span className="font-bold text-orange-600 w-16">20:30</span>
                <span className="text-gray-700">Seyyar Fıstıkçım sahne alıyor!</span>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-orange-50 rounded-lg">
                <span className="font-bold text-orange-600 w-16">21:00</span>
                <span className="text-gray-700">DJ performansı başlıyor</span>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-orange-50 rounded-lg">
                <span className="font-bold text-orange-600 w-16">22:00</span>
                <span className="text-gray-700">Büyük çekiliş ve hediye dağıtımı</span>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-orange-50 rounded-lg">
                <span className="font-bold text-orange-600 w-16">23:00</span>
                <span className="text-gray-700">Dans yarışması</span>
              </div>
            </div>
          </div>
        </div>

        {/* Registration Form */}
        <div className="bg-white/95 rounded-xl p-8">
          <h2 className="text-3xl font-bold text-orange-800 mb-6 text-center">Fıstık Partisi'ne Katıl!</h2>
          <p className="text-center text-gray-700 mb-8">
            Aşağıdaki formu doldurarak etkinliğimize ücretsiz katılabilirsiniz.
          </p>

          <div className="w-full">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSdIwKRnDlgCHVb9bSWcAoB2gmVLONyAaWxHfzgmQtM_vOWcTg/viewform?embedded=true"
              width="100%"
              height="936"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              className="rounded-lg"
            >
              Yükleniyor…
            </iframe>
          </div>
        </div>

        {/* Warning */}
        <div className="mt-8 bg-yellow-100 border-l-4 border-yellow-500 p-6 rounded-r-lg">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-yellow-700">
                <strong>Önemli:</strong> Etkinlik ücretsizdir ancak kapasite sınırlıdır. Erken kayıt yaptırmanızı
                öneririz. Etkinlik hava koşullarına bağlı olarak ertelenebilir.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
