export interface Location {
  id: string
  name: string
  title: string
  description: string
  specialization: string
  image: string
  color: string
}

export const locations: Location[] = [
  {
    id: "shantipur",
    name: "Shantipur",
    title: "Shantipur - Handloom Industry",
    description:
      "The heart of Bengal's weaving tradition. Shantipur is renowned for its exquisite handloom textiles, including cotton saris, dhotis, and dress materials created with intricate patterns and natural dyes.",
    specialization: "Handloom Weaving",
    image: 'url("/traditional-handloom-textile-weaving.jpg")',
    color: "from-amber-100 to-amber-200",
  },
  {
    id: "kachrapara",
    name: "Kachrapara",
    title: "Kachrapara - Fuchka Para",
    description:
      "A hub of artisan snack makers specializing in the crispy and delicious fuchka shells. This location preserves traditional techniques passed down through generations of skilled craftspeople.",
    specialization: "Artisan Snacks",
    image: 'url("/crispy-traditional-fuchka-shells.jpg")',
    color: "from-yellow-100 to-yellow-200",
  },
  {
    id: "krishnanagar",
    name: "Krishnanagar",
    title: "Krishnanagar - Clay Idols",
    description:
      "Home to the legendary matir putul (clay dolls) tradition. Krishnanagar artisans create lifelike sculptures inspired by mythology and daily life, carrying forward centuries of artistic excellence.",
    specialization: "Clay Sculpture",
    image: 'url("/clay-art-sculptures.jpg")',
    color: "from-red-100 to-red-200",
  },
  {
    id: "bankapasi",
    name: "Bankapasi",
    title: "Bankapasi - Daaker Saaj",
    description:
      "The epicenter of shola wood crafting. Bankapasi artisans create intricate shola wood creations for festive occasions, weddings, and decorative purposes with unparalleled precision and artistry.",
    specialization: "Shola Craft",
    image: 'url("/white-shola-wood-festival-decorations.jpg")',
    color: "from-yellow-100 to-orange-100",
  },
  {
    id: "kumartuli",
    name: "Kumartuli",
    title: "Kumartuli - God's Home",
    description:
      "The sacred home of clay idol making. Kumartuli artisans craft elaborate deity idols for temples and festivals, maintaining a legacy of seven generations of devotion and divine artistry.",
    specialization: "Clay Idol Making",
    image: 'url("/traditional-clay-deity-idol.jpg")',
    color: "from-orange-100 to-orange-200",
  },
]
