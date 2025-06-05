import Link from "next/link"
import Image from "next/image"
import { Instagram, Music, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-orange-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo ve Açıklama */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <Image src="/images/peanut-mascot.png" alt="Seyyar Fıstıkçım" width={50} height={50} />
              <h3 className="text-2xl font-bold">Seyyar Fıstıkçım</h3>
            </div>
            <p className="text-orange-200 mb-4">
              Sokakların en eğlenceli fıstık satıcısı! Fıstık, eğlence ve topluluk bir arada. Halkla iç içe, mizahi ve
              enerjik bir marka olarak sizlerleyiz.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://instagram.com/seyyarfistikcim"
                target="_blank"
                className="bg-orange-700 p-2 rounded-full hover:bg-orange-600 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link
                href="https://tiktok.com/@seyyarfistikcim"
                target="_blank"
                className="bg-orange-700 p-2 rounded-full hover:bg-orange-600 transition-colors"
              >
                <Music className="w-5 h-5" />
              </Link>
              <Link
                href="https://youtube.com/@seyyarfistikcim"
                target="_blank"
                className="bg-orange-700 p-2 rounded-full hover:bg-orange-600 transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Hızlı Linkler */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Hızlı Linkler</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/magaza" className="text-orange-200 hover:text-white transition-colors">
                  Mağaza
                </Link>
              </li>
              <li>
                <Link href="/fistik-partisi" className="text-orange-200 hover:text-white transition-colors">
                  Fıstık Partisi
                </Link>
              </li>
              <li>
                <Link href="/duyurular" className="text-orange-200 hover:text-white transition-colors">
                  Duyurular
                </Link>
              </li>
              <li>
                <Link href="/destek" className="text-orange-200 hover:text-white transition-colors">
                  Bizi Destekle
                </Link>
              </li>
            </ul>
          </div>

          {/* İletişim */}
          <div>
            <h4 className="text-lg font-semibold mb-4">İletişim</h4>
            <ul className="space-y-2 text-orange-200">
              <li>
                <Link 
                  href="https://chat.whatsapp.com/KPMuWKScceu4g10Z98OTvn" 
                  target="_blank"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp Grubu
                </Link>
              </li>
              <li>Email: seyyarfistikcim@gmail.com</li>
              <li>Sosyal medyada bizi takip edin!</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-orange-700 mt-8 pt-8 text-center text-orange-200">
          <p>&copy; 2024 Seyyar Fıstıkçım. Tüm hakları saklıdır. Fıstık sevgisiyle yapıldı! 🥜</p>
        </div>
      </div>
    </footer>
  )
}
