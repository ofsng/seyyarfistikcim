import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ShoppingBag, Clock } from "lucide-react"

export default function MagazaPage() {
  const products = [
    {
      id: 1,
      name: "Seyyar Fıstıkçım Tişört",
      price: "₺149",
      image: "/placeholder.svg?height=300&width=300",
      description: "Özel tasarım maskot baskılı pamuklu tişört",
      available: false,
    },
    {
      id: 2,
      name: "Fıstık Şapka",
      price: "₺89",
      image: "/placeholder.svg?height=300&width=300",
      description: "Ayarlanabilir snapback şapka",
      available: false,
    },
    {
      id: 3,
      name: "Bez Çanta",
      price: "₺59",
      image: "/placeholder.svg?height=300&width=300",
      description: "Çevre dostu bez alışveriş çantası",
      available: false,
    },
    {
      id: 4,
      name: "Sticker Paketi",
      price: "₺25",
      image: "/placeholder.svg?height=300&width=300",
      description: "10 adet çıkartma seti",
      available: false,
    },
    {
      id: 5,
      name: "Premium Fıstık Paketi",
      price: "₺35",
      image: "/placeholder.svg?height=300&width=300",
      description: "Özel ambalajlı taze fıstık (250g)",
      available: false,
    },
    {
      id: 6,
      name: "Fıstık Termos",
      price: "₺199",
      image: "/placeholder.svg?height=300&width=300",
      description: "Özel tasarım termos bardak",
      available: false,
    },
  ]

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
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
            <h1 className="text-5xl font-bold text-white">Mağaza</h1>
          </div>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Seyyar Fıstıkçım özel ürünleri yakında burada! Tişörtler, aksesuarlar ve daha fazlası için bizi takip edin.
          </p>
        </div>

        {/* Coming Soon Banner */}
        <div className="bg-yellow-400 text-orange-900 p-6 rounded-xl mb-12 text-center">
          <div className="flex items-center justify-center mb-4">
            <Clock className="h-8 w-8 mr-3" />
            <h2 className="text-3xl font-bold">Yakında Açılıyor!</h2>
          </div>
          <p className="text-lg">
            Mağazamız çok yakında hizmetinizde olacak. Özel ürünlerimiz için sosyal medyadan bizi takip etmeyi
            unutmayın!
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card
              key={product.id}
              className="bg-white/95 hover:bg-white transition-all duration-300 transform hover:scale-105"
            >
              <CardHeader className="p-0">
                <div className="relative">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={300}
                    height={300}
                    className="w-full h-64 object-cover rounded-t-lg"
                  />
                  <Badge className="absolute top-4 right-4 bg-orange-500 text-white">Yakında</Badge>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-xl text-orange-800 mb-2">{product.name}</CardTitle>
                <CardDescription className="text-gray-600 mb-4">{product.description}</CardDescription>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-orange-600">{product.price}</span>
                  <Button disabled className="bg-gray-400 cursor-not-allowed">
                    <ShoppingBag className="mr-2 h-4 w-4" />
                    Yakında
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-white/20 backdrop-blur-sm rounded-xl p-8 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">Mağaza Açılışından Haberdar Ol!</h3>
          <p className="text-white/90 mb-6 text-lg">
            Mağazamız açıldığında ilk sen öğren, özel indirimlerden faydalan!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="E-posta adresin"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-yellow-400 outline-none"
            />
            <Button className="bg-yellow-400 hover:bg-yellow-500 text-orange-900 font-bold px-8">Bildirim Al</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
