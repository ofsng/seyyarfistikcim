"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Gift, Star, Users, Copy, Check } from "lucide-react"

export default function DestekPage() {
  const [copied, setCopied] = useState(false)
  const iban = "TR11 0082 9000 0949 1104 0013 80"

  const copyIban = () => {
    navigator.clipboard.writeText(iban.replace(/\s/g, ""))
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const supportTiers = [
    {
      name: "Fıstık Dostu",
      amount: "₺25",
      description: "Bir kişiye fıstık ısmarla!",
      benefits: ["Teşekkür mesajı", "Sosyal medyada mention"],
      color: "bg-green-500",
    },
    {
      name: "Fıstık Aşığı",
      amount: "₺50",
      description: "İki kişiye fıstık ısmarla!",
      benefits: ["Özel teşekkür videosu", "Backstage fotoğraflar", "Erken duyuru erişimi"],
      color: "bg-blue-500",
    },
    {
      name: "Fıstık Kahramanı",
      amount: "₺100",
      description: "Beş kişiye fıstık ısmarla!",
      benefits: ["Kişisel teşekkür videosu", "Özel sticker paketi", "VIP etkinlik erişimi", "Aylık özel içerik"],
      color: "bg-purple-500",
    },
    {
      name: "Fıstık Efsanesi",
      amount: "₺250+",
      description: "Sınırsız fıstık desteği!",
      benefits: ["Özel hediye paketi", "İsminiz destekçiler listesinde", "Özel etkinlik daveti", "Aylık video call"],
      color: "bg-orange-500",
    },
  ]

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <Image
              src="/images/peanut-mascot.png"
              alt="Seyyar Fıstıkçım"
              width={80}
              height={80}
              className="animate-bounce mr-4"
            />
            <h1 className="text-5xl font-bold text-white">Bizi Destekle</h1>
            <Heart className="h-12 w-12 text-red-500 ml-4 animate-pulse" />
          </div>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Seyyar Fıstıkçım ailesinin büyümesine katkıda bulun! Desteğinizle daha fazla insana ulaşıyor, daha çok
            eğlence üretiyoruz.
          </p>
        </div>

        {/* Main Support Card */}
        <Card className="bg-gradient-to-r from-orange-400 to-red-400 text-white mb-12 overflow-hidden">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold mb-4">Birine Fıstık Ismarla! 🥜</h2>
              <p className="text-xl text-white/90">
                Desteğinizle sokaktaki birine fıstık ısmarlayın ve mutluluk paylaşın!
              </p>
            </div>

            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-lg font-semibold">IBAN Numarası:</span>
                <Button
                  onClick={copyIban}
                  variant="secondary"
                  size="sm"
                  className="bg-white/20 hover:bg-white/30 text-white border-white/30"
                >
                  {copied ? <Check className="h-4 w-4 mr-2" /> : <Copy className="h-4 w-4 mr-2" />}
                  {copied ? "Kopyalandı!" : "Kopyala"}
                </Button>
              </div>
              <div className="bg-white/10 rounded-lg p-4 font-mono text-xl text-center tracking-wider">{iban}</div>
              <p className="text-center text-white/80 mt-2 text-sm">Açıklama kısmına "Fıstık Desteği" yazabilirsiniz</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div className="bg-white/20 rounded-lg p-4">
                <div className="text-2xl font-bold">₺25</div>
                <div className="text-sm">1 Kişiye Fıstık</div>
              </div>
              <div className="bg-white/20 rounded-lg p-4">
                <div className="text-2xl font-bold">₺50</div>
                <div className="text-sm">2 Kişiye Fıstık</div>
              </div>
              <div className="bg-white/20 rounded-lg p-4">
                <div className="text-2xl font-bold">₺100</div>
                <div className="text-sm">5 Kişiye Fıstık</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Support Tiers */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Destek Seviyeleri</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportTiers.map((tier, index) => (
              <Card
                key={index}
                className="bg-white/95 hover:bg-white transition-all duration-300 transform hover:scale-105"
              >
                <CardHeader className="text-center">
                  <div className={`w-16 h-16 ${tier.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <Star className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-orange-800">{tier.name}</CardTitle>
                  <div className="text-3xl font-bold text-orange-600">{tier.amount}</div>
                  <CardDescription className="text-gray-600">{tier.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {tier.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Why Support Us */}
        <Card className="bg-white/95 mb-12">
          <CardHeader>
            <CardTitle className="text-3xl text-orange-800 text-center flex items-center justify-center">
              <Gift className="mr-3 h-8 w-8" />
              Neden Bizi Desteklemelisiniz?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange-800 mb-2">Topluluk Büyüsün</h4>
                    <p className="text-gray-600">Desteğinizle daha fazla insana ulaşıyor, topluluk büyüyor.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange-800 mb-2">Daha Çok Eğlence</h4>
                    <p className="text-gray-600">Daha büyük etkinlikler, daha çok eğlence üretebiliyoruz.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange-800 mb-2">Kaliteli İçerik</h4>
                    <p className="text-gray-600">Daha kaliteli videolar ve içerikler üretebiliyoruz.</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                    4
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange-800 mb-2">Sosyal Sorumluluk</h4>
                    <p className="text-gray-600">Sokaktaki insanlara fıstık ısmarlayarak mutluluk paylaşıyoruz.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                    5
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange-800 mb-2">Özel Ayrıcalıklar</h4>
                    <p className="text-gray-600">Destekçilerimize özel içerikler ve etkinlikler sunuyoruz.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                    6
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange-800 mb-2">Şeffaflık</h4>
                    <p className="text-gray-600">Desteklerinizi nasıl kullandığımızı düzenli olarak paylaşıyoruz.</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Supporters */}
        <Card className="bg-white/95 mb-12">
          <CardHeader>
            <CardTitle className="text-3xl text-orange-800 text-center flex items-center justify-center">
              <Users className="mr-3 h-8 w-8" />
              Destekçilerimiz
            </CardTitle>
            <CardDescription className="text-center">Bizi destekleyen harika insanlar (son 30 gün)</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 text-center">
              {[
                "Ahmet K.",
                "Zeynep M.",
                "Mehmet S.",
                "Ayşe D.",
                "Can T.",
                "Elif Y.",
                "Murat B.",
                "Selin A.",
                "Emre K.",
                "Deniz L.",
                "Burak Ö.",
                "Gamze P.",
              ].map((name, index) => (
                <div key={index} className="bg-orange-50 rounded-lg p-3">
                  <div className="w-12 h-12 bg-orange-200 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-orange-800 font-bold text-lg">{name.charAt(0)}</span>
                  </div>
                  <div className="text-sm font-medium text-orange-800">{name}</div>
                  <div className="text-xs text-gray-500">Fıstık Dostu</div>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Badge className="bg-orange-500 text-white text-lg px-4 py-2">Toplam 127 Destekçi Bu Ay! 🎉</Badge>
            </div>
          </CardContent>
        </Card>

        {/* Alternative Support Methods */}
        <Card className="bg-white/95">
          <CardHeader>
            <CardTitle className="text-2xl text-orange-800 text-center">Diğer Destek Yolları</CardTitle>
            <CardDescription className="text-center">Maddi destek dışında bize yardım etme yolları</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-orange-50 rounded-xl">
                <div className="text-4xl mb-4">📱</div>
                <h4 className="font-bold text-orange-800 mb-2">Sosyal Medyada Paylaş</h4>
                <p className="text-gray-600 text-sm">
                  İçeriklerimizi paylaşarak daha fazla kişiye ulaşmamıza yardım edin.
                </p>
              </div>

              <div className="text-center p-6 bg-orange-50 rounded-xl">
                <div className="text-4xl mb-4">👥</div>
                <h4 className="font-bold text-orange-800 mb-2">Arkadaşlarını Davet Et</h4>
                <p className="text-gray-600 text-sm">Arkadaşlarınızı topluluğumuza davet ederek ailemizi büyütün.</p>
              </div>

              <div className="text-center p-6 bg-orange-50 rounded-xl">
                <div className="text-4xl mb-4">💡</div>
                <h4 className="font-bold text-orange-800 mb-2">Fikir Paylaş</h4>
                <p className="text-gray-600 text-sm">
                  Yaratıcı fikirlerinizi bizimle paylaşın, birlikte daha iyisini yapalım.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
