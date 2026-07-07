import { contact } from "@/utils/constent";
import {
  ArrowIcon,
  CallIcon,
  FiveIcon,
  FourIcon,
  OneIcon,
  ThreeIcon,
  TwoIcon,
} from "@/utils/icons";
export const landingPageData = {
  heroSection: {
    video: "/videos/heroSection.mp4",
    videoPoster: "/videos/heroSection.png",
    title:
      'A <i class="text-primary">Himalayan</i> Sanctuary Above the <i class="text-primary">Clouds</i>', // 'A Himalayan Sanctuary Above the Clouds',
    description:
      "An exclusive eleven-suite, family-run sanctuary nestled in the Selur forests of the Garhwal Himalayas, a slow, scenic two-and-a-half hours from Rishikesh.",
    buttons: [
      {
        label: "CALL NOW",
        href: contact.callCta,
      },

      {
        label: "EXPLORE SUITES",
        href: "#residences",
      },
    ],
  },

  pillarSection: {
    subtitle: "THE THREE PILLARS",
    title: "Paths to",
    highlightedText: "Ananda",

    cards: [
      {
        hindi: "सत्",
        title: "Sat",
        tag: "BEING",
        description:
          "Ground yourself in the truth of the present. Let the ancient peaks remind you of what is permanent within.",
      },

      {
        hindi: "चित्",
        title: "Chit",
        tag: "PURE MIND",
        description:
          "Elevate consciousness through meditation that mirrors the crystalline clarity of the Himalayan sky.",
      },

      {
        hindi: "आनन्द",
        title: "Ananda",
        tag: "BLISS",
        description:
          "Return to eternal joy. Not discovered elsewhere, but remembered here, in the silence.",
      },
    ],

    buttons: [
      {
        label: "CALL NOW",
        href: contact.callCta,
      },

      {
        label: "BOOK YOUR STAY",
        href: contact.WhatsappCta,
      },
    ],
  },
  wellnessSection: {
    subtitle: "HOLISTIC HEALING",

    title: {
      normal: "The path of",
      highlighted: "awakening.",
    },

    description:
      "From sunrise yoga on the open terrace to Ayurvedic rituals with Himalayan salts, our wellness offerings are designed to detoxify the city from your veins.",

    images: ["/new-img/_DSC0530.webp","/Sunrise-View.webp"],

    buttons: [
      {
        label: "CALL NOW",
        variant: "primary",
        href: contact.callCta,
      },

      {
        label: "BOOK YOUR STAY",
        variant: "secondary",
        href: contact.WhatsappCta,
      },
    ],
  },
  viewSection: {
    video: "/videos/view.mp4",
    videoPoster: "/videos/view.png",
    subtitle: "LIMITED AVAILABILITY",

    title: {
      normal: "Ready for Himalayan",
      highlighted: "Escape?",
    },

    description:
      "Availability is limited. Book your stay directly via WhatsApp for the fastest response and best rates.",

    buttons: [
      {
        label: "CHECK AVAILABILITY VIA WHATSAPP",
        href: contact.WhatsappCta,
      },

      {
        label: "BOOK YOUR STAY",
        href: contact.WhatsappCta,
      },
    ],
  },
  journeySection: {
    subtitle: "THE JOURNEY",

    title: {
      normal: "Curated",
      highlighted: "Himalayan",
      end: "moments.",
    },

    journeys: [
      {
        icon: OneIcon,
        title: "Sunrise Yoga & Breathwork",
        description:
          "Salutations to the sun atop the open terrace as the Gangotri range glows.",
      },

      {
        icon: TwoIcon,
        title: "Mindful Trekking",
        description:
          "Discover hidden waterfalls and ancient Pahadi temples with local naturalists.",
      },

      {
        icon: ThreeIcon,
        title: "Village Immersion",
        description:
          "Walk through Selur and experience the authentic life of mountain dwellers.",
      },

      {
        icon: FourIcon,
        title: "Celestial Nights",
        description:
          "Stargaze under zero-light-pollution skies and witness the Milky Way in full.",
      },

      {
        icon: FiveIcon,
        title: "Lake Reverie",
        description:
          "Kayaking and meditative picnics by the turquoise waters of Tehri Lake.",
      },
    ],

    buttons: [
      {
        label: "CALL NOW",
        variant: "primary",
        href: contact.callCta,
      },

      {
        label: "BOOK YOUR STAY",
        variant: "secondary",
        href: contact.WhatsappCta,
      },
    ],
  },
  nutritionSection: {
    subtitle: "PURE NOURISHMENT",

    title: {
      normal: "The garden-to-",
      highlighted: "plate",
      end: "ritual",
    },

    quote: "As the food is, so is the mind. As the mind is, so is the soul.",

    description:
      "Our Sattvic kitchen serves entirely vegetarian cuisine sourced from our organic farms and the cooperatives of neighbouring villages. Every meal is a tribute to the soil beneath our feet.",

    image: "/images/nutrition.jpg",

    buttons: [
      {
        label: "CALL NOW",
        href: contact.callCta,
      },

      {
        label: "BOOK YOUR STAY",
        href: contact.WhatsappCta,
      },
    ],
  },
  roomSection: {
    subtitle: "THE RESIDENCES",

    title: {
      normal: "Suites in the",
      highlighted: "clouds.",
    },

    description:
      "Every window frames the azure of Tehri Lake or the snow-capped Himalayan horizon. Eleven rooms. No more. By design.",

    cards: [
      {
        id: "01",
        tag: "SIGNATURE VIEW",
        title: "Machaan Room with Balcony",

        description:
          "A first-floor sanctuary with a private balcony framing the Himalayan ridgeline and Tehri Lake.",

        image: "/rooms/Room-1/_DSC0791.webp",
      },

      {
        id: "02",
        tag: "AZURE VISTA",
        title: "Aangan Room",

        description:
          "A ground-floor retreat opening into lush surroundings, cozy, intimate, close to the earth.",

        image: "/rooms/room-2/_DSC0833.webp",
      },

      {
        id: "03",
        tag: "ULTIMATE PEACE",
        title: "Prasadam Restaurant",

        description:
          "Our in-house kitchen serving Sattvic, vegetarian meals on a serene deck above the valley.",

        image: "/new-img/_DSC0515.webp",
      },
    ],

    buttons: [
      {
        label: "CALL NOW",
        href: contact.callCta,
      },

      {
        label: "BOOK YOUR STAY",
        href: contact.WhatsappCta,
      },
    ],
  },
  titles: [
    "HIMALAYAN YOGA",
    "TEHRI LAKE PANORAMAS",
    "AYURVEDIC HEALING",
    "FARM-TO-TABLE SATTVIC",
    "ZERO-POLLUTION STARGAZING",
  ],
  storySection: {
    subtitle: "OUR STORY",

    title: {
      normal: "Named after the",
      highlighted: "divine tears",
      end: "of Shiva.",
    },

    quote:
      "The Rudraksh is more than a seed, it is a symbol of cosmic protection and unshakeable peace, born from the divine tears of Lord Shiva.",

    description:
      "Perched in the Land of Gods, our retreat is built to be a living extension of that energy. We host only a limited number of guests to preserve the sacred silence of the Selur mountains. Here, luxury is not measured in gold, but in the clarity of your breath.",

    points: [
      {
        title: "Sustainable Soul",
        description: "Powered by local craftsmanship and zero-waste ideals.",
        image: "/rooms/Room-3/_DSC0965.webp",
      },

      {
        title: "Ancient Energy",
        description:
          "Near the Agaan Shiv temple, vibrating with ancient prana.",
        image: "/images/story2.jpg",
      },
    ],

    buttons: [
      {
        label: "CALL NOW",
        href: contact.callCta,
      },

      {
        label: "BOOK YOUR STAY",
        href: contact.WhatsappCta,
      },
    ],
  },
};
