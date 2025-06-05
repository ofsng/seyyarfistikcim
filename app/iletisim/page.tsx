"use client"

import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Instagram, MessageCircle, MapPin, Mail } from "lucide-react"

export default function IletisimPage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center py-8 px-2">
      <div className="w-full max-w-5xl mx-auto flex flex-col gap-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-2">
          <Image
            src="/images/peanut-mascot.png"
            alt="Seyyar Fıstıkçım"
            width={90}
            height={90}
            className="animate-bounce drop-shadow-2xl"
          />
          <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">İletişim</h1>
          <p className="text-base md:text-lg text-white max-w-2xl mx-auto leading-relaxed font-medium">
            Bizimle iletişime geçmek için en hızlı yol sosyal medya! DM'lerinize genellikle 24 saat içinde yanıt veriyoruz.
          </p>
        </div>

        {/* 2 sütunlu ana grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Sol sütun: Instagram DM + SSS */}
          <div className="flex flex-col gap-4">
            {/* Instagram DM Bloğu */}
            <Card className="bg-white/95 shadow-xl rounded-2xl flex flex-col justify-between">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl text-orange-800 flex items-center font-bold">
                  <Instagram className="mr-2 h-6 w-6" />
                  Instagram DM
                </CardTitle>
                <CardDescription className="text-sm">
                  En hızlı iletişim için Instagram DM kullanabilirsiniz.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <Button
                  asChild
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-3 text-base rounded-xl shadow-lg transition-all duration-300"
                >
                  <Link href="https://instagram.com/seyyarfistikcim" target="_blank">
                    <Instagram className="mr-2 h-5 w-5" />
                    Instagram DM ile iletişime geç
                  </Link>
                </Button>
              </CardContent>
            </Card>
            {/* SSS Bloğu */}
            <Card className="bg-white/95 shadow-xl rounded-2xl flex flex-col justify-between">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl text-orange-800 font-bold">Sık Sorulan Sorular</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 pt-0">
                <div className="p-2 bg-orange-50 rounded-xl">
                  <h4 className="font-bold text-gray-800 mb-1 text-sm">DM'lerinize ne kadar sürede yanıt veriyorsunuz?</h4>
                  <p className="text-gray-700 leading-relaxed text-sm">
                    Genellikle 24 saat içinde yanıt veriyoruz. Ancak yoğun dönemlerde yanıt süremiz biraz uzayabilir.
                  </p>
                </div>
                <div className="p-2 bg-orange-50 rounded-xl">
                  <h4 className="font-bold text-gray-800 mb-1 text-sm">En hızlı iletişim yolu hangisi?</h4>
                  <p className="text-gray-700 leading-relaxed text-sm">
                    WhatsApp grubumuz ve Instagram DM'lerimiz en hızlı iletişim kanallarımızdır.
                  </p>
                </div>
                <div className="p-2 bg-orange-50 rounded-xl">
                  <h4 className="font-bold text-gray-800 mb-1 text-sm">İş birliği teklifleri için nereye yazmalıyım?</h4>
                  <p className="text-gray-700 leading-relaxed text-sm">
                    İş birliği teklifleriniz için e-posta adresimizi kullanabilirsiniz.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sağ sütun: Hızlı İletişim + İletişim Bilgileri */}
          <div className="flex flex-col gap-4">
            {/* Hızlı İletişim */}
            <Card className="bg-white/95 shadow-xl rounded-2xl">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl text-orange-800 font-bold">Hızlı İletişim</CardTitle>
                <CardDescription className="text-sm">Acil durumlar için direkt iletişim kanalları</CardDescription>
              </CardHeader>
              <CardContent className="pt-0 flex flex-col gap-2">
                <Button
                  asChild
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-base rounded-xl shadow-lg transition-all duration-300"
                >
                  <Link href="https://chat.whatsapp.com/KPMuWKScceu4g10Z98OTvn" target="_blank">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    WhatsApp Grubuna Katıl
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white py-3 text-base rounded-xl shadow-lg transition-all duration-300"
                >
                  <Link href="mailto:seyyarfistikcim@gmail.com">
                    <Mail className="mr-2 h-5 w-5" />
                    E-posta Gönder
                  </Link>
                </Button>
              </CardContent>
            </Card>
            {/* İletişim Bilgileri */}
            <Card className="bg-white/95 shadow-xl rounded-2xl">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl text-orange-800 font-bold">İletişim Bilgileri</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 pt-0">
                <div className="flex items-start space-x-2 p-2 bg-orange-50 rounded-xl">
                  <Mail className="h-6 w-6 text-orange-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-800 text-sm mb-1">E-posta</h4>
                    <p className="text-gray-700 text-sm">seyyarfistikcim@gmail.com</p>
                    <p className="text-xs text-gray-500 mt-1">Resmi iletişim adresi</p>
                  </div>
                </div>
                <div className="flex items-start space-x-2 p-2 bg-orange-50 rounded-xl">
                  <MessageCircle className="h-6 w-6 text-orange-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-800 text-sm mb-1">WhatsApp Grubu</h4>
                    <p className="text-gray-700 text-sm">Topluluk Sohbet</p>
                    <p className="text-xs text-gray-500 mt-1">Anlık sohbet ve duyurular</p>
                  </div>
                </div>
                <div className="flex items-start space-x-2 p-2 bg-orange-50 rounded-xl">
                  <MapPin className="h-6 w-6 text-orange-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-800 text-sm mb-1">Konum</h4>
                    <p className="text-gray-700 text-sm">Sokakların her yerindeyiz!</p>
                    <p className="text-xs text-gray-500 mt-1">Güncel konumumuz için sosyal medyayı takip edin</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Response Time Notice */}
        <div className="mt-6 bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded-r-2xl shadow-lg max-w-3xl mx-auto">
          <div className="flex items-center">
            <svg className="h-5 w-5 text-yellow-400 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <p className="text-yellow-700 leading-relaxed text-sm ml-3">
              <strong>Yanıt Süresi:</strong> DM'lerinize genellikle 24 saat içinde yanıt veriyoruz. Acil durumlar için WhatsApp grubunu tercih edin. Hafta sonları yanıt süremiz biraz daha uzun olabilir.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}