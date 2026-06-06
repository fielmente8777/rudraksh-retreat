import { contact } from "@/utils/constent";

export const homePageData = {
  heroSection: {
    title: "A Journey <i>Awaits</i>",
    video: "/videos/heroSection.mp4",
    videoPoster: "/videos/heroSection.png",
  },
  slidingText: [
    "Himalayan Yoga",
    "Tehri Lake Panoramas",
    "Ayurvedic Healing",
    "Farm-to-Table Sattvic",
    "Zero-Pollution Stargazing",
  ],
  about: {
    images: ["/images/story1.jpg", "/images/story2.jpg"],
    subTitle: "Our STORY",
    title: "Named after the <i class='text-p22'>divine tears</i> of Shiva.",
    note: "Discover the Art of Slow Living in the Himalayas",
    cards: [
      {
        title: "Sustainable Soul",
        description: "Powered by local craftsmanship and zero-waste ideals.",
      },
      {
        title: "Ancient Energy",
        description:
          "Near the Agaan Shiv temple, vibrating with ancient prana.",
      },
    ],
    description: [
      "Perched above Tehri Lake, The Rudraksh is a boutique Himalayan sanctuary for those seeking genuine time in nature, restorative silence, and holistic wellbeing.",
      "Named after the sacred Rudraksh bead, a timeless symbol of clarity, protection, and inner balance, the retreat embraces a philosophy of mindful living where mountain landscapes, thoughtful hospitality, and moments of stillness come together in harmony.",
    ],
    listsText: [
      "Family Hosted",
      "Organic Vegetarian & Vegan Meals",
      "<span class='font-body'>11</span> Rooms",
      "Holistic Wellness",
    ],
    buttons: [
      {
        label: "CALL NOW",
        href: contact.callCta,
      },

      {
        label: "Know More About Us",
        href: "/about-us",
      },
    ],
  },

  wisdom: {
    logo: "/home/logo.png",
    image: "/home/Gemini.png",
    description: `
      Your retreat begins even before check-in. A serene 300-meter walk through a canopy of Silver Oak and Rhododendron trees leads you to The Rudraksh Retreat, inviting you to slow down, unwind, and connect with the natural beauty that surrounds you.
    `,
  },

  beginYourJourney: {
    title: "Escape into <i class='text-p22'>Stillness</i>",
    button: {
      label: "Begin Your Journey",
      link: "/",
    },
    cards: [
      {
        id: "01",
        title: "REFINED LIVING SPACES",
        image: "/home/lftrgt-img1.jpg",
        href: "/refined-living-spaces/",
        description: [
          "A serene escape with eight crafted guestrooms, set against the Himalayas and overlooking peaceful Tehri Lake. Rudraksh Retreat is a space to unwind, rejuvenate, and restore inner balance.",
        ],
      },

      {
        id: "02",
        title: "Holistic Wellness",
        image: "/home/lftrgt-img2.jpg",
        href: "/holistic-wellness/",
        description: [
          "Sat-cit-ānanda / सच्चिदानन्द",
          "sat (सत्): Being, Existence",
          "cit (चित्): Consciousness or Spirit",
          "ānanda (आनन्द): Happiness, Joy, Bliss",
          "Experience Sat-cit-ānanda with our curated offerings. Designed to detox, de-stress, and rejuvenate, our spa treatment, guided yoga sessions, and mindful nature walks.",
        ],
      },
      {
        id: "03",
        title: "Mindful Trekking Retreats",
        image: "/home/lftrgt-im.jpg",
        href: "/experiences/",
        description: [
          "Pause, and reconnect with the natural world at The Rudraksh.",
          " Perched on a hill, away from the city’s hustle, embark on hikes through lush forests, explore local villages, capture Himalayan biodiversity, or camp under the clear, starry skies.",
        ],
      },

      {
        id: "04",
        title: "Farm To Table",
        image: "/home/lftrgt-img4.jpg",
        href: "/farm-to-table/",
        description: [
          "अन्नं ब्रह्म रसो विष्णुः",
          "भोक्ता देवो महेश्वरः",
          " Creative energy in the food is Brahma. Nourishing energy in the body is Vishnu. Transformation of food into pure consciousness is Shiva.",
          "Experience farm-to-table dining with fresh, organic, locally sourced ingredients straight from our garden to your plate. Enjoy a vegetarian-inspired menu that celebrates the natural flavors of the earth.",
        ],
      },
    ],
  },

  gettingHereSection: {
    title: "Getting <i class='text-p22'>here</i>",

    options: [
      {
        title: "Road",
        img: "/home/car-icon.png",
        description: `
          3 hours drive from Rishikesh
          2.5 hours drive from Mussoorie.
        `,
      },

      {
        title: "Train",
        img: "/home/train-icon.png",
        description: `
          4 hours drive from Haridwar & Dehradun Railway Station.
        `,
      },

      {
        title: "Air",
        img: "/home/plane-icon.png",
        description: `
          3 hours drive from Dehradun Airport.
        `,
      },
    ],
  },
  experienceSection: {
    title: "Explore Our <i class='text-p22'>Experiences</i>",
    items: [
      {
        title: "Mindfull trekking retreats",
        image: "/blogs/service2-prlx.jpg",
      },

      {
        title: "Ayurvedic cooking classes",
        image: "/blogs/WhatsApp-Image-2025-05-13-at-2.03.56-PM-scaled.jpeg",
      },
      {
        title: "Sustainability and local support",
        image: "/blogs/1-e1747165008992.png",
      },
    ],
  },
  storiesSection: {
    title: "Stories Of <i class='text-primary'>Satisfaction</i>",
    reviews: [
      {
        title: "An incredible experience!",
        description: `
          The hotel itself is already wonderful, but the warmth and care from Mahesh and his family made us feel truly welcomed.
        `,
        href: "https://www.tripadvisor.in/Hotel_Review-g25181975-d25136174-Reviews-The_Rudraksh_A_Himalayan_Retreat-Selur_Tehri_Garhwal_District_Uttarakhand.html",
        author: "Priscila Z",
        image: "/home/review-img1.jpg",
      },
      {
        title: "A Beautiful Retreat",
        description: `
          Amazing retreat experience in the rudraksh. Beautifull place in the deep Himalayas around very Nice and authenthic comunities.
        `,
        href: "https://www.tripadvisor.in/Hotel_Review-g25181975-d25136174-Reviews-The_Rudraksh_A_Himalayan_Retreat-Selur_Tehri_Garhwal_District_Uttarakhand.html",
        author: "Mariano",
        image: "/home/review-img2.jpg",
      },
      {
        title: "Himalayan Medicine",
        description: `
          The love that went into food preparation and the staff who genuinely feel blessed to share their World with you.
        `,
        href: "https://www.tripadvisor.in/Hotel_Review-g25181975-d25136174-Reviews-The_Rudraksh_A_Himalayan_Retreat-Selur_Tehri_Garhwal_District_Uttarakhand.html",
        author: "Glen S",
        image: "/home/review-img3.jpg",
      },
      {
        title: "Away from the crowd, peaceful stay!",
        description: `
          About 2 hours away from Rishikesh, this place is nestled with one of the best views of the mountains and the lake.
        `,
        href: "https://www.tripadvisor.in/Hotel_Review-g25181975-d25136174-Reviews-The_Rudraksh_A_Himalayan_Retreat-Selur_Tehri_Garhwal_District_Uttarakhand.html",
        author: "Aarthi I",
        image: "/home/rve4.jpg",
      },
      {
        title: "An amazing vegetarian place with great service",
        description: `
          The moment we stepped in, we felt warmly welcomed by Mahesh ji and his friendly staff, who went above and beyond to make our stay truly special.
        `,
        href: "https://www.tripadvisor.in/Hotel_Review-g25181975-d25136174-Reviews-The_Rudraksh_A_Himalayan_Retreat-Selur_Tehri_Garhwal_District_Uttarakhand.html",
        author: "Vinay Sharma",
        image: "/home/rve5.jpg",
      },
    ],

    button: {
      label: "Book Your Stay",
      link: "https://bookings.therudrakshretreat.com/?propertyId=8699",
    },
  },

  blogsSection: {
    blogs: [
      {
        title: "Best Winter Locations in Uttarakhand",

        description: `
          Best Winter Locations in Uttarakhand – The Rudraksh Retreat Nestled amidst the Himalayan foothills, The Rudraksh Retreat is among the best winter locations in Uttarakhand for travelers seeking a perfect blend of luxury, tranquility, and nature.
        `,

        button: {
          label: "Read More",
          link: "https://therudrakshretreat.com/news/best-winter-locations-in-uttarakhand/",
        },
      },

      {
        title: "Best offbeat Resort in india",

        description: `
          Offbeat Resort in India for Peaceful and Luxury Travel Choosing an offbeat resort in India is the perfect way to escape crowded tourist destinations and experience nature in its purest form.
        `,

        button: {
          label: "Read More",
          link: "https://therudrakshretreat.com/news/offbeat-resort-in-india/",
        },
      },

      {
        title:
          "Why The Rudraksh Retreat Is Among the Best Yoga Retreats in India",

        description: `
          Nestled in the peaceful Himalayan foothills of Uttarakhand, The Rudraksh Retreat stands out as one of the best yoga retreats in India.
        `,

        button: {
          label: "Read More",
          link: "https://therudrakshretreat.com/news/why-the-rudraksh-retreat-is-among-the-best-yoga-retreats-in-india/",
        },
      },
    ],
  },

  enquirySection: {
    title: "Limited Availability",
    subtitle: "In the <i>Himalayas</i>, doing less often means experiencing <i>more!</i>",
    description: "A place to pause, reconnect, and simply be",
    image: "/G48095455.png",
    buttons: [
      {
        label: "Check Availability",
        href: contact.WhatsappCta,
      },

      {
        label: "Plan Your Stay",
        href: "/contact-us",
      },
    ],
  },
};
