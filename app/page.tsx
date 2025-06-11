"use client"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Users, Megaphone, ShoppingBag, Sparkles, ArrowRight } from "lucide-react"
import { useState } from "react"

export default function HomePage() {
  const [copied, setCopied] = useState(false);

  const handleShare = (url: string, title: string) => {
    if (navigator.share) {
      navigator.share({
        title: title,
        url: url,
      });
    } else {
      navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 px-4 text-center overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 animate-bounce delay-100 text-4xl">🥜</div>
          <div className="absolute top-20 right-20 animate-bounce delay-300 text-4xl">🎉</div>
          <div className="absolute bottom-20 left-20 animate-bounce delay-500 text-4xl">🥜</div>
          <div className="absolute bottom-10 right-10 animate-bounce delay-700 text-4xl">🎊</div>
          <div className="absolute top-1/2 left-1/4 animate-pulse delay-1000 text-3xl">✨</div>
          <div className="absolute top-1/3 right-1/3 animate-pulse delay-1500 text-3xl">🎈</div>
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="mb-8">
            <Image
              src="/images/peanut-mascot.png"
              alt="Seyyar Fıstıkçım Maskot"
              width={180}
              height={180}
              className="mx-auto animate-bounce drop-shadow-2xl"
            />
          </div>

          <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 drop-shadow-2xl leading-tight">
            Merhaba!
            <br />
            <span className="text-yellow-300 animate-pulse">Çerez ister misiniz..?</span>
          </h1>

          <p className="text-xl md:text-2xl text-white mb-12 max-w-3xl mx-auto leading-relaxed font-medium drop-shadow-lg">
            Sokakların en eğlenceli fıstık satıcısı ile tanışın! Fıstık, eğlence ve topluluk bir arada. 🥜✨
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="bg-yellow-400 hover:bg-yellow-500 text-orange-900 font-bold text-xl px-10 py-6 rounded-2xl shadow-2xl hover:shadow-yellow-400/25 transition-all duration-300 transform hover:scale-105 border-2 border-yellow-300"
            >
              <Link href="/fistik-partisi" className="flex items-center">
                <Calendar className="mr-3 h-6 w-6" />
                Fıstık Partisi'ne Katıl!
                <ArrowRight className="ml-3 h-6 w-6" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-orange-800 font-bold text-xl px-10 py-6 rounded-2xl shadow-2xl hover:shadow-white/25 transition-all duration-300 transform hover:scale-105 bg-white/10 backdrop-blur-sm"
            >
              <Link href="/magaza" className="flex items-center">
                <ShoppingBag className="mr-3 h-6 w-6" />
                Mağazayı Keşfet
                <ArrowRight className="ml-3 h-6 w-6" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Güncel Duyurular */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6 flex items-center justify-center drop-shadow-lg">
              <Megaphone className="mr-4 h-10 w-10" />
              Güncel Duyurular
            </h2>
            <p className="text-white/90 text-xl font-medium">Son haberler ve duyurular burada!</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white/95 hover:bg-white transition-all duration-300 border-0 shadow-2xl hover:shadow-orange-200/50 transform hover:scale-105 rounded-2xl overflow-hidden">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-3">
                  <Badge className="bg-red-500 text-white font-semibold px-3 py-1 rounded-full">YENİ!</Badge>
                </div>
                <CardTitle className="text-orange-800 text-xl font-bold">Büyük Fıstık Partisi Geliyor!</CardTitle>
                <CardDescription className="text-gray-600 font-medium">15 Mayıs 2025</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Bu ayın en büyük etkinliği! Müzik, dans, fıstık ve sürprizlerle dolu bir gece sizi bekliyor.
                </p>
                <Button
                  type="button"
                  onClick={() => handleShare(
                    typeof window !== "undefined" ? window.location.origin + "/fistik-partisi" : "",
                    "Büyük Fıstık Partisi Geliyor!"
                  )}
                  className="flex items-center gap-2 border px-4 py-2 rounded-md text-sm font-semibold bg-white hover:bg-orange-50 text-orange-800 border-orange-200 shadow-sm transition-all"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-9A2.25 2.25 0 002.25 5.25v13.5A2.25 2.25 0 004.5 21h9a2.25 2.25 0 002.25-2.25V15" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L21 10.5m0 0l-3.75 3.75M21 10.5H9" />
                  </svg>
                  Paylaş
                </Button>
                {copied && (
                  <span className="ml-2 text-green-600 text-xs font-medium">Bağlantı kopyalandı!</span>
                )}
              </CardContent>
            </Card>

            <Card className="bg-white/95 hover:bg-white transition-all duration-300 border-0 shadow-2xl hover:shadow-orange-200/50 transform hover:scale-105 rounded-2xl overflow-hidden">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-3">
                  <Badge className="bg-blue-500 text-white font-semibold px-3 py-1 rounded-full">KAMPANYA</Badge>
                </div>
                <CardTitle className="text-orange-800 text-xl font-bold">Yeni Ürünler Mağazada!</CardTitle>
                <CardDescription className="text-gray-600 font-medium">10 Mayıs 2025</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Özel tasarım tişörtler, şapkalar ve daha fazlası! Sınırlı sayıda, kaçırmayın.
                </p>
                <Button
                  type="button"
                  onClick={() => handleShare(
                    typeof window !== "undefined" ? window.location.origin + "/magaza" : "",
                    "Yeni Ürünler Mağazada!"
                  )}
                  className="flex items-center gap-2 border px-4 py-2 rounded-md text-sm font-semibold bg-white hover:bg-orange-50 text-orange-800 border-orange-200 shadow-sm transition-all"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-9A2.25 2.25 0 002.25 5.25v13.5A2.25 2.25 0 004.5 21h9a2.25 2.25 0 002.25-2.25V15" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L21 10.5m0 0l-3.75 3.75M21 10.5H9" />
                  </svg>
                  Paylaş
                </Button>
                {copied && (
                  <span className="ml-2 text-green-600 text-xs font-medium">Bağlantı kopyalandı!</span>
                )}
              </CardContent>
            </Card>

            <Card className="bg-white/95 hover:bg-white transition-all duration-300 border-0 shadow-2xl hover:shadow-orange-200/50 transform hover:scale-105 rounded-2xl overflow-hidden">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-3">
                  <Badge className="bg-green-500 text-white font-semibold px-3 py-1 rounded-full">TOPLULUK</Badge>
                </div>
                <CardTitle className="text-orange-800 text-xl font-bold">35K Takipçi Hediyesi!</CardTitle>
                <CardDescription className="text-gray-600 font-medium">5 Mayıs 2025</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  35.000 takipçiye ulaştık! Özel hediye çekilişi ve sürprizler için bizi takip edin.
                </p>
                <Button
                  type="button"
                  onClick={() => handleShare(
                    typeof window !== "undefined" ? window.location.origin + "/hakkimizda" : "",
                    "35K Takipçi Hediyesi!"
                  )}
                  className="flex items-center gap-2 border px-4 py-2 rounded-md text-sm font-semibold bg-white hover:bg-orange-50 text-orange-800 border-green-200 shadow-sm transition-all"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-9A2.25 2.25 0 002.25 5.25v13.5A2.25 2.25 0 004.5 21h9a2.25 2.25 0 002.25-2.25V15" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L21 10.5m0 0l-3.75 3.75M21 10.5H9" />
                  </svg>
                  Paylaş
                </Button>
                {copied && (
                  <span className="ml-2 text-green-600 text-xs font-medium">Bağlantı kopyalandı!</span>
                )}
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-orange-800 font-bold text-lg px-8 py-4 rounded-2xl shadow-2xl hover:shadow-white/25 transition-all duration-300 bg-white/10 backdrop-blur-sm"
            >
              <Link href="/duyurular">Tüm Duyuruları Gör</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Özellikler */}
      <section className="py-20 px-4 bg-white/10 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6 drop-shadow-lg">Neden Seyyar Fıstıkçım?</h2>
            <p className="text-white/90 text-xl font-medium">Bizi özel kılan şeyler</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-8 bg-white/20 rounded-2xl backdrop-blur-sm shadow-2xl hover:shadow-white/25 transition-all duration-300 transform hover:scale-105">
              <div className="text-6xl mb-6 animate-bounce">🥜</div>
              <h3 className="text-2xl font-bold text-white mb-4">Kaliteli Fıstık</h3>
              <p className="text-white/90 leading-relaxed">En taze ve lezzetli fıstıklar</p>
            </div>

            <div className="text-center p-8 bg-white/20 rounded-2xl backdrop-blur-sm shadow-2xl hover:shadow-white/25 transition-all duration-300 transform hover:scale-105">
              <div className="text-6xl mb-6 animate-pulse">🎉</div>
              <h3 className="text-2xl font-bold text-white mb-4">Eğlence</h3>
              <p className="text-white/90 leading-relaxed">Her an eğlence ve mizah dolu</p>
            </div>

            <div className="text-center p-8 bg-white/20 rounded-2xl backdrop-blur-sm shadow-2xl hover:shadow-white/25 transition-all duration-300 transform hover:scale-105">
              <div className="text-6xl mb-6 animate-bounce delay-300">👥</div>
              <h3 className="text-2xl font-bold text-white mb-4">Topluluk</h3>
              <p className="text-white/90 leading-relaxed">Büyük bir aile gibiyiz</p>
            </div>

            <div className="text-center p-8 bg-white/20 rounded-2xl backdrop-blur-sm shadow-2xl hover:shadow-white/25 transition-all duration-300 transform hover:scale-105">
              <div className="text-6xl mb-6 animate-pulse delay-500">🎊</div>
              <h3 className="text-2xl font-bold text-white mb-4">Fıstık Partisi</h3>
              <p className="text-white/90 leading-relaxed">Birlikte eğleniyoruz!</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
