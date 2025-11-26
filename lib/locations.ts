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
    image: "https://cdn.builder.io/api/v1/image/assets%2F5d194e4113c94b9c9d4ca1e98e139060%2F0aab360bf6c64e1cb40a0012b5e07aef?format=webp&width=800",
    color: "from-amber-100 to-amber-200",
  },
  {
    id: "kachrapara",
    name: "Kachrapara",
    title: "Kachrapara - Fuchka Para",
    description:
      "A hub of artisan snack makers specializing in the crispy and delicious fuchka shells. This location preserves traditional techniques passed down through generations of skilled craftspeople.",
    specialization: "Artisan Snacks",
    image: "https://cdn.builder.io/api/v1/image/assets%2F5d194e4113c94b9c9d4ca1e98e139060%2F88d356196db64f7eaea49b92427a3d4b?format=webp&width=800",
    color: "from-yellow-100 to-yellow-200",
  },
  {
    id: "krishnanagar",
    name: "Krishnanagar",
    title: "Krishnanagar - Clay Idols",
    description:
      "Home to the legendary matir putul (clay dolls) tradition. Krishnanagar artisans create lifelike sculptures inspired by mythology and daily life, carrying forward centuries of artistic excellence.",
    specialization: "Clay Sculpture",
    image: "https://cdn.builder.io/api/v1/image/assets%2F5d194e4113c94b9c9d4ca1e98e139060%2Ff62914b582654c759e113a99859417c8?format=webp&width=800",
    color: "from-red-100 to-red-200",
  },
  {
    id: "bankapasi",
    name: "Bankapasi",
    title: "Bankapasi - Daaker Saaj",
    description:
      "The epicenter of shola wood crafting. Bankapasi artisans create intricate shola wood creations for festive occasions, weddings, and decorative purposes with unparalleled precision and artistry.",
    specialization: "Shola Craft",
    image: "https://cdn.builder.io/api/v1/image/assets%2F5d194e4113c94b9c9d4ca1e98e139060%2F497a63a34138444c91464ed1c08e32d8?format=webp&width=800",
    color: "from-yellow-100 to-orange-100",
  },
  {
    id: "kumartuli",
    name: "Kumartuli",
    title: "Kumartuli - God's Home",
    description:
      "The sacred home of clay idol making. Kumartuli artisans craft elaborate deity idols for temples and festivals, maintaining a legacy of seven generations of devotion and divine artistry.",
    specialization: "Clay Idol Making",
    image: "https://cdn.builder.io/api/v1/image/assets%2F5d194e4113c94b9c9d4ca1e98e139060%2Fa43efbedb30741b8824b949ac3972491?format=webp&width=800",
    color: "from-orange-100 to-orange-200",
  },
]
