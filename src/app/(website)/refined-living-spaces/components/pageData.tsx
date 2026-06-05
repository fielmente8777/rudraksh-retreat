import { contact } from "@/utils/constent";

export const RoomsPageData = {
  heroSection: {
    title: "Refined Living <i>Spaces</i>",
    image: "/rooms/bnr-new.webp",
  },
  aboutUsSection: {
    title:
      `<span class='text-primary'>सर्वं खल्विदं ब्रह्म </span><br/> <i class='text-p22 mr-2'>“Consciousness</i> is all there is. All is One, One is All!”`,
    description: [
      "‘Sarvam Khalu Idam Brahma’, is the belief that all existence is interconnected and divine. At Rudraksh Retreat, every corner resonates with this profound wisdom, where our 8 crafted villas are thoughtfully designed to immerse you in the serenity of nature. Here, you are not just a guest but part of the retreat's living spirit, where the calmness of nature and the warmth of our spaces inspire a deeper connection with your inner self.",
      "Our two exclusive stays are Angan and Machan, where our rooms are named after Uttarakhand's sacred blooms: Buransh, Shiuli, Fyonli, and Tesu, embracing a minimalist, nature-inspired elegance that reflects the natural beauty of the region.",
    ],
  },
  roomsSection: {
    cards: [
      {
        title: "Angan / आँगन ",
        subtitle: "An Earthly Refuge",
        description: [
          "The Angan brings you closer to the Earth’s nurturing energy.It offers a spacious and airy ambiance, blending indoor comfort with outdoors beauty, gathering your experiences around a shared garden courtyard. ",
          "Designed to enhance freedom, these rooms invite natural light and provide open views of the surrounding landscape.",
        ],
        images: [
          "/rooms/angan/angan1.jpg",
          "/rooms/angan/angan2.jpg",
          "/rooms/angan/angan3.jpg",
          "/rooms/angan/angan4.jpg",
        ],
        slidingText: [
          "Up to 2 Guests, extra bedding on request.",
          "24 SQM of personal space",
          "Ground floor of the villa with shared garden access.",
          "Garden View Room with Partial view of Bhagirathi River.",
          "King-size bed",
        ],
        buttons: [
          {
            label: "CALL NOW",
            href: contact.callCta,
          },
          {
            label: "BOOK YOUR STAY",
            href: contact.bookingLink,
          },
        ],
        amenities: [
          {
            title: "Custom toiletry essentials",
            image: "/rooms/toiletries.png",
          },
          {
            title: "Wardrobe facility",
            image: "/rooms/closet.png",
          },

          {
            title: "Writing desk",
            image: "/rooms/table.png",
          },
          {
            title: "Free high-speed wifi",
            image: "/rooms/internet.png",
          },
          {
            title: "Coffee & tea-making facility",
            image: "/rooms/coffee-cup.png",
          },
        ],
      },
      {
        title: "Machan / माचान",
        subtitle: "Perch Among The Clouds",
        description: [
          "The Machan rooms immerse you in nature’s panoramic views. These rooms elevate into the treetops, they provide a unique connection with the surrounding wilderness. With their open layouts and balconies, these rooms invite natural light and showcase scenic views of the Himalayas and the Bhagirathi River, blending comfort with privacy.",
          "Suspended above ground, the Machan rooms offers a secluded, peaceful retreat where luxury meets nature. Ideal for those seeking solitude and inspiration, the Machan rooms provide quiet reflection amid breathtaking views.",
        ],
        images: [
          "/rooms/machan/machan1.jpg",
          "/rooms/machan/machan2.jpg",
          "/rooms/machan/machan3.jpg",
          "/rooms/caption.jpeg",
          "/rooms/machan/machan4.jpg",
        ],
        slidingText: [
          "Up to 2 Guests, extra bedding on request.",
          "24 SQM of personal space",
          "Panoramic Valley View Room",
          "Top floor room with balcony",
          "King-size bed",
        ],
        buttons: [
          {
            label: "CALL NOW",
            href: contact.callCta,
          },
          {
            label: "BOOK YOUR STAY",
            href: contact.bookingLink,
          },
        ],
        // amenities: [
        //   {
        //     title: "Custom toiletry essentials",
        //     image: "/rooms/toiletries.png",
        //   },
        //   {
        //     title: "Wardrobe Facility",
        //     image: "/rooms/closet.png",
        //   },
        //   {
        //     title: "Sustainably sourced coffee and tea-making facility",
        //     image: "/rooms/coffee-cup.png",
        //   },
        //   {
        //     title: "Writing Desk",
        //     image: "/rooms/table.png",
        //   },
        //   {
        //     title: "Free High-Speed Wifi",
        //     image: "/rooms/internet.png",
        //   },
        // ],
      },
    ],
  },
};
