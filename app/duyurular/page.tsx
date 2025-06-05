import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Share2, Heart } from "lucide-react"

export default function DuyurularPage() {
  const announcements = [
    {
      id: 1,
      title: "Büyük Fıstık Partisi - 15 Mayıs!",
      date: "15 Mayıs 2025",
      category: "Etkinlik",
      content:
        "Yılın en büyük etkinliği geliyor! Müzik, dans, fıstık ve sürprizlerle dolu bir gece. Ücretsiz katılım için hemen kayıt olun!",
      image: "/placeholder.svg?height=200&width=400",
      featured: true,
    },
    {
      id: 2,
      title: "Yeni Ürün Koleksiyonu Mağazada!",
      date: "10 Mayıs 2025",
      category: "Ürün",
      content:
        "Özel tasarım tişörtler, şapkalar, bez çantalar ve daha fazlası! Sınırlı sayıda üretilen ürünlerimizi kaçırmayın.",
      image: "/placeholder.svg?height=200&width=400",
      featured: false,
    },
    {
      id: 3,
      title: "10.000 Takipçi Hediye Çekilişi!",
      date: "5 Mayıs 2025",
      category: "Çekiliş",
      content:
        "10K takipçiye ulaştık! Bu özel anı kutlamak için büyük hediye çekilişi düzenliyoruz. Katılmak için sosyal medyada bizi takip edin!",
      image: "/placeholder.svg?height=200&width=400",
      featured: false,
    },
    {
      id: 4,
      title: "Kış Sezonu Özel Fıstık Çeşitleri",
      date: "1 Mayıs 2025",
      category: "Ürün",
      content: "Soğuk kış günleri için özel olarak hazırladığımız sıcak baharatlı fıstık çeşitlerimiz satışta!",
      image: "/placeholder.svg?height=200&width=400",
      featured: false,
    },
    {
      id: 5,
      title: "Topluluk Kuralları Güncellendi",
      date: "25 Nisan 2025",
      category: "Duyuru",
      content: "Daha iyi bir topluluk deneyimi için kurallarımızı güncelledik. Lütfen yeni kuralları okuyun.",
      image: "/placeholder.svg?height=200&width=400",
      featured: false,
    },
    {
      id: 6,
      title: "Sonbahar Fıstık Festivali Başarıyla Tamamlandı",
      date: "20 Nisan 2025",
      category: "Etkinlik",
      content:
        "500+ katılımcıyla gerçekleştirdiğimiz festival harika geçti! Katılan herkese teşekkürler. Fotoğraflar sosyal medyada!",
      image: "/placeholder.svg?height=200&width=400",
      featured: false,
    },
  ]

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Etkinlik":
        return "bg-red-500"
      case "Ürün":
        return "bg-blue-500"
      case "Çekiliş":
        return "bg-green-500"
      case "Duyuru":
        return "bg-purple-500"
      default:
        return "bg-gray-500"
    }
  }

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
            <h1 className="text-5xl font-bold text-white">Duyurular</h1>
          </div>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Son haberler, etkinlikler ve özel duyurular burada! Hiçbir güncellemeyi kaçırmayın.
          </p>
        </div>

        {/* Featured Announcement */}
        {announcements
          .filter((ann) => ann.featured)
          .map((announcement) => (
            <Card
              key={announcement.id}
              className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white mb-12 overflow-hidden"
            >
              <div className="md:flex">
                <div className="md:w-1/2">
                  <Image
                    src={announcement.image || "/placeholder.svg"}
                    alt={announcement.title}
                    width={400}
                    height={200}
                    className="w-full h-48 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center mb-4">
                    <Badge className="bg-white text-orange-600 mr-3">ÖNE ÇIKAN</Badge>
                    <Badge className={`${getCategoryColor(announcement.category)} text-white`}>
                      {announcement.category}
                    </Badge>
                  </div>
                  <h2 className="text-3xl font-bold mb-4">{announcement.title}</h2>
                  <p className="text-white/90 mb-6 text-lg">{announcement.content}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-white/80">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{announcement.date}</span>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="secondary" size="sm">
                        <Share2 className="h-4 w-4 mr-2" />
                        Paylaş
                      </Button>
                      <Button variant="secondary" size="sm">
                        <Heart className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}

        {/* Regular Announcements */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {announcements
            .filter((ann) => !ann.featured)
            .map((announcement) => (
              <Card
                key={announcement.id}
                className="bg-white/95 hover:bg-white transition-all duration-300 transform hover:scale-105"
              >
                <CardHeader className="p-0">
                  <Image
                    src={announcement.image || "/placeholder.svg"}
                    alt={announcement.title}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex items-center mb-3">
                    <Badge className={`${getCategoryColor(announcement.category)} text-white mr-2`}>
                      {announcement.category}
                    </Badge>
                    <span className="text-sm text-gray-500 flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {announcement.date}
                    </span>
                  </div>
                  <CardTitle className="text-xl text-orange-800 mb-3">{announcement.title}</CardTitle>
                  <CardDescription className="text-gray-600 mb-4">{announcement.content}</CardDescription>
                  <div className="flex items-center justify-between">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
                    >
                      Devamını Oku
                    </Button>
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="sm">
                        <Share2 className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Heart className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-white/20 backdrop-blur-sm rounded-xl p-8 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">Duyurulardan Haberdar Ol!</h3>
          <p className="text-white/90 mb-6 text-lg">
            Yeni duyurular, etkinlikler ve özel kampanyalardan ilk sen haberdar ol!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="E-posta adresin"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-yellow-400 outline-none"
            />
            <Button className="bg-yellow-400 hover:bg-yellow-500 text-orange-900 font-bold px-8">Abone Ol</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
