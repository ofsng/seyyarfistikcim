"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Instagram, Music, Users, Heart, Eye, Youtube, MessageCircle } from "lucide-react"

export default function hakkimizdaPage() {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-8">
            <Image
              src="/images/peanut-mascot.png"
              alt="Seyyar Fıstıkçım"
              width={100}
              height={100}
              className="animate-bounce mr-6 drop-shadow-2xl"
            />
            <h1 className="text-6xl font-bold text-white drop-shadow-lg">Hakkımızda</h1>
          </div>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed font-medium">
            Sosyal medyada bizi takip edin! Günlük eğlence, fıstık hikayeleri ve topluluk etkinlikleri.
          </p>
        </div>

        {/* Social Media Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Instagram */}
          <Card className="bg-gradient-to-br from-purple-500 to-pink-500 text-white overflow-hidden shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105 rounded-2xl">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Instagram className="h-10 w-10" />
                  <div>
                    <CardTitle className="text-2xl font-bold">Instagram</CardTitle>
                    <CardDescription className="text-white/80 font-medium">@seyyarfistikcim</CardDescription>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold">35K+</div>
                  <div className="text-sm text-white/80">Takipçi</div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-white/90 mb-6 leading-relaxed">
                Günlük fıstık maceraları, backstage görüntüler ve topluluk paylaşımları! Stories'te canlı yayınlarımızı
                kaçırmayın.
              </p>
              <div className="flex items-center justify-between mb-6">
                <div className="flex space-x-6 text-sm">
                  <div className="flex items-center">
                    <Eye className="h-4 w-4 mr-2" />
                    <span className="font-semibold">10M+</span>
                  </div>
                  <div className="text-white/80">Görüntülenme</div>
                </div>
              </div>
              <Button
                asChild
                className="w-full bg-white text-purple-600 hover:bg-gray-100 font-bold py-3 rounded-xl shadow-lg transition-all duration-300"
              >
                <Link href="https://instagram.com/seyyarfistikcim" target="_blank">
                  <Instagram className="mr-2 h-5 w-5" />
                  Takip Et
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* TikTok */}
          <Card className="bg-gradient-to-br from-black to-gray-800 text-white overflow-hidden shadow-2xl hover:shadow-gray-500/25 transition-all duration-300 transform hover:scale-105 rounded-2xl">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Music className="h-10 w-10" />
                  <div>
                    <CardTitle className="text-2xl font-bold">TikTok</CardTitle>
                    <CardDescription className="text-white/80 font-medium">@seyyarfistikcim</CardDescription>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold">10K+</div>
                  <div className="text-sm text-white/80">Takipçi</div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-white/90 mb-6 leading-relaxed">
                Viral fıstık dansları, komik anlar ve trend videolar! En eğlenceli içeriklerimiz burada.
              </p>
              <div className="flex items-center justify-between mb-6">
                <div className="flex space-x-6 text-sm">
                  <div className="flex items-center">
                    <Heart className="h-4 w-4 mr-2" />
                    <span className="font-semibold">120K+</span>
                  </div>
                  <div className="text-white/80">Beğeni</div>
                </div>
              </div>
              <Button
                asChild
                className="w-full bg-white text-black hover:bg-gray-100 font-bold py-3 rounded-xl shadow-lg transition-all duration-300"
              >
                <Link href="https://tiktok.com/@seyyarfistikcim" target="_blank">
                  <Music className="mr-2 h-5 w-5" />
                  Takip Et
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* YouTube */}
          <Card className="bg-gradient-to-br from-red-500 to-red-600 text-white overflow-hidden shadow-2xl hover:shadow-red-500/25 transition-all duration-300 transform hover:scale-105 rounded-2xl">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Youtube className="h-10 w-10" />
                  <div>
                    <CardTitle className="text-2xl font-bold">YouTube</CardTitle>
                    <CardDescription className="text-white/80 font-medium">@seyyarfistikcim</CardDescription>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold">300K+</div>
                  <div className="text-sm text-white/80">Görüntülenme</div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-white/90 mb-6 leading-relaxed">
                Uzun format videolar, vloglar ve özel içerikler! Fıstık dünyasının derinliklerine dalın.
              </p>
              <div className="flex items-center justify-between mb-6">
                <div className="flex space-x-6 text-sm">
                  <div className="flex items-center">
                    <Eye className="h-4 w-4 mr-2" />
                    <span className="font-semibold">300K+</span>
                  </div>
                  <div className="text-white/80">Görüntülenme</div>
                </div>
              </div>
              <Button
                asChild
                className="w-full bg-white text-red-600 hover:bg-gray-100 font-bold py-3 rounded-xl shadow-lg transition-all duration-300"
              >
                <Link href="https://youtube.com/@seyyarfistikcim" target="_blank">
                  <Youtube className="mr-2 h-5 w-5" />
                  Abone Ol
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Community Stats */}
        <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-10 mb-16 shadow-2xl">
          <h2 className="text-4xl font-bold text-white text-center mb-12 drop-shadow-lg">Topluluk İstatistikleri</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white/10 rounded-2xl backdrop-blur-sm">
              <div className="text-5xl font-bold text-yellow-300 mb-3">45K+</div>
              <div className="text-white/90 font-medium">Toplam Takipçi</div>
            </div>
            <div className="text-center p-6 bg-white/10 rounded-2xl backdrop-blur-sm">
              <div className="text-5xl font-bold text-yellow-300 mb-3">300K+</div>
              <div className="text-white/90 font-medium">YouTube Görüntülenme</div>
            </div>
            <div className="text-center p-6 bg-white/10 rounded-2xl backdrop-blur-sm">
              <div className="text-5xl font-bold text-yellow-300 mb-3">10M+</div>
              <div className="text-white/90 font-medium">Instagram Görüntülenme</div>
            </div>
            <div className="text-center p-6 bg-white/10 rounded-2xl backdrop-blur-sm">
              <div className="text-5xl font-bold text-yellow-300 mb-3">120K+</div>
              <div className="text-white/90 font-medium">TikTok Beğeni</div>
            </div>
          </div>
        </div>

        {/* Community Rules */}
        <Card className="bg-white/95 mb-16 shadow-2xl rounded-2xl">
          <CardHeader className="pb-6">
            <CardTitle className="text-3xl text-orange-800 flex items-center font-bold">
              <Users className="mr-4 h-8 w-8" />
              Topluluk Kuralları
            </CardTitle>
            <CardDescription className="text-lg">
              Herkesin eğlenceli ve güvenli bir deneyim yaşaması için kurallarımız
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-start space-x-4 p-4 bg-orange-50 rounded-xl">
              <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">
                1
              </div>
              <div>
                <h4 className="font-bold text-orange-800 text-lg mb-2">Saygılı Olun</h4>
                <p className="text-gray-700 leading-relaxed">Herkese saygı gösterin, kaba dil kullanmayın.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 p-4 bg-orange-50 rounded-xl">
              <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">
                2
              </div>
              <div>
                <h4 className="font-bold text-orange-800 text-lg mb-2">Eğlenceli Kalın</h4>
                <p className="text-gray-700 leading-relaxed">Pozitif enerji ve mizah her zaman hoş karşılanır!</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 p-4 bg-orange-50 rounded-xl">
              <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">
                3
              </div>
              <div>
                <h4 className="font-bold text-orange-800 text-lg mb-2">Spam Yapmayın</h4>
                <p className="text-gray-700 leading-relaxed">Gereksiz tekrar paylaşımlardan kaçının.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 p-4 bg-orange-50 rounded-xl">
              <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">
                4
              </div>
              <div>
                <h4 className="font-bold text-orange-800 text-lg mb-2">Fıstık Sevgisini Paylaşın</h4>
                <p className="text-gray-700 leading-relaxed">Fıstık hikayeleri ve deneyimlerinizi bizimle paylaşın!</p>
              </div>
            </div>
            <div className="mt-8">
              <Link href="https://chat.whatsapp.com/KPMuWKScceu4g10Z98OTvn" target="_blank">
                <Button className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp Grubuna Katıl
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* About Us */}
        <Card className="bg-white/95 shadow-2xl rounded-2xl">
          <CardHeader className="pb-6">
            <CardTitle className="text-3xl text-orange-800 font-bold">Hakkımızda</CardTitle>
            <CardDescription className="text-lg">Seyyar Fıstıkçım hikayesi</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div className="space-y-6">
                <p className="text-gray-700 leading-relaxed text-lg">
                  Seyyar Fıstıkçım, sokakların en eğlenceli fıstık satıcısı olarak başladığı yolculuğunda, sosyal medya
                  fenomeni haline geldi. Fıstık sevgisi, mizah ve topluluk ruhuyla binlerce insanın kalbine dokundu.
                </p>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Amacımız sadece fıstık satmak değil, insanları bir araya getirmek, günlük hayatın stresinden
                  uzaklaştırmak ve herkesi güldürmek. Her fıstık tanesi bir hikaye, her paylaşım bir gülümseme.
                </p>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Biz bir marka değil, bir aileyiz. Siz de bu ailenin bir parçası olmak istiyorsanız, sosyal medyada
                  bizi takip edin ve fıstık maceramıza ortak olun!
                </p>
              </div>
              <div className="text-center">
                <Image
                  src="/images/peanut-mascot.png"
                  alt="Seyyar Fıstıkçım Maskot"
                  width={250}
                  height={250}
                  className="mx-auto animate-pulse drop-shadow-2xl"
                />
                <p className="text-orange-600 font-bold mt-6 text-xl">"Fıstık sevgisiyle büyüyen topluluk!"</p>
              </div>
            </div>

            {/* Projelerimiz */}
            <div className="mt-16 space-y-12">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-8 rounded-2xl text-white">
                <h3 className="text-3xl font-bold mb-6">Nutlab</h3>
                <p className="text-lg mb-6">
                  Nutlab, ofis ve oyun alanı olarak kullanılabilecek modern bir mekan projesidir. İnsanların bir araya gelip çalışabilecekleri, oyun oynayabilecekleri ve sosyalleşebilecekleri bir alan sunuyoruz.
                </p>
                <div className="bg-white/10 p-4 rounded-xl">
                  <h4 className="text-xl font-bold mb-4">Nutlab Sunumu</h4>
                  <iframe
                    src="/nutlab.pdf"
                    className="w-full h-[500px] rounded-lg"
                    title="Nutlab Sunumu"
                  />
                </div>
              </div>

              <div className="bg-gradient-to-r from-yellow-500 to-orange-500 p-8 rounded-2xl text-white">
                <h3 className="text-3xl font-bold mb-6">Fıstık Partisi</h3>
                <p className="text-lg mb-6">
                  Fıstık Partisi, topluluğumuzun en eğlenceli etkinliklerinden biridir. Her ay düzenlediğimiz bu partilerde fıstık temalı oyunlar, yarışmalar ve eğlenceli aktivitelerle unutulmaz anlar yaşıyoruz.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white/10 p-4 rounded-xl">
                    <h4 className="text-xl font-bold mb-2">Etkinlikler</h4>
                    <ul className="space-y-2">
                      <li>• Fıstık yeme yarışmaları</li>
                      <li>• Canlı DJ performansı</li>
                      <li>• Müzik ve dans</li>
                      <li>• Hediyeler ve içerik üretimi</li>
                    </ul>
                  </div>
                  <div className="bg-white/10 p-4 rounded-xl">
                    <h4 className="text-xl font-bold mb-2">Katılım</h4>
                    <p>
                      Herkesi bekliyoruz! WhatsApp grubumuza katılarak etkinliklerden haberdar olabilirsiniz.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-8 rounded-2xl text-white">
                <h3 className="text-3xl font-bold mb-6">Türkiye'yi Geziyoruz!</h3>
                <p className="text-lg mb-6">
                  Türkiye'nin dört bir yanını geziyor, fıstık kültürünü yayıyor ve yeni arkadaşlıklar kuruyoruz. Her şehirde farklı deneyimler yaşıyor, yerel kültürleri keşfediyoruz.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white/10 p-4 rounded-xl">
                    <h4 className="text-xl font-bold mb-2">Gezilerimiz</h4>
                    <ul className="space-y-2">
                      <li>• Şehir turları</li>
                      <li>• Yerel lezzetler</li>
                      <li>• Kültürel etkinlikler</li>
                      <li>• Topluluk buluşmaları</li>
                    </ul>
                  </div>
                  <div className="bg-white/10 p-4 rounded-xl">
                    <h4 className="text-xl font-bold mb-2">Katılım</h4>
                    <p>
                      Gezilerimize katılmak için sosyal medya hesaplarımızı takip edin ve WhatsApp grubumuza katılın.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-8 rounded-2xl text-white">
                <h3 className="text-3xl font-bold mb-6">Fıstık İkram Et</h3>
                <p className="text-lg mb-6">
                  Online destekçilerimizin yardımıyla sokaktaki insanlara fıstık ikram ediyoruz. Bu proje ile hem insanları mutlu ediyor hem de fıstık kültürünü yayıyoruz.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white/10 p-4 rounded-xl">
                    <h4 className="text-xl font-bold mb-2">Nasıl Katılabilirsiniz?</h4>
                    <ul className="space-y-2">
                      <li>• Online bağış yaparak</li>
                      <li>• Gönüllü olarak</li>
                      <li>• Sosyal medyada paylaşarak</li>
                      <li>• Etkinliklere katılarak</li>
                    </ul>
                  </div>
                  <div className="bg-white/10 p-4 rounded-xl">
                    <h4 className="text-xl font-bold mb-2">Destekçilerimiz</h4>
                    <p>
                      Her ay binlerce kişiye ulaşıyoruz. Siz de destekçimiz olun, mutluluğu paylaşın!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
