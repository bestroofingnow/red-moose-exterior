// Site-wide data and content
export const siteConfig = {
  name: "Red Moose Exterior",
  tagline: "Professional Pressure Washing & Soft Washing",
  phone: "704-285-1467",
  email: "info@redmooseexterior.com",
  address: "Charlotte, NC",
  businessHours: "Mon-Sat: 7AM-7PM",
  yearsInBusiness: 25,
  propertiesCleaned: 1000,
  satisfactionRate: 99,
  rating: 4.9,
  socialLinks: {
    facebook: "https://facebook.com/redmooseexterior",
  },
};

export const services = {
  pressureWashing: {
    name: "Pressure Washing",
    slug: "pressure-washing",
    tagline: "Powerful Cleaning for Tough Surfaces",
    description: "Professional high-pressure cleaning for driveways, patios, decks, sidewalks, and more. Our industrial-grade equipment removes years of grime, oil stains, mold, and mildew.",
    residential: {
      surfaces: [
        "Driveways & Walkways",
        "Patios & Pool Decks",
        "Wooden Decks",
        "Composite Decks",
        "Fences",
        "Garage Floors",
        "Stone & Brick",
        "Retaining Walls",
      ],
      benefits: [
        "Boost curb appeal instantly",
        "Increase property value",
        "Prevent surface damage",
        "Remove dangerous mold & mildew",
        "Prepare surfaces for sealing",
      ],
    },
    commercial: {
      surfaces: [
        "Parking Lots & Garages",
        "Loading Docks",
        "Building Facades",
        "Sidewalks",
        "Drive-Thrus",
        "Dumpster Pads",
        "Warehouse Floors",
        "Stadium Seating",
      ],
      benefits: [
        "Professional appearance",
        "Safety compliance",
        "Liability reduction",
        "Customer impressions",
        "Property maintenance",
      ],
    },
  },
  softWashing: {
    name: "Soft Washing",
    slug: "soft-washing",
    tagline: "Gentle Care for Delicate Surfaces",
    description: "Low-pressure cleaning with specialized solutions for delicate surfaces. Perfect for siding, roofs, stucco, and painted surfaces that could be damaged by high pressure.",
    residential: {
      surfaces: [
        "Vinyl Siding",
        "Stucco",
        "Painted Surfaces",
        "Roof Shingles",
        "Gutters",
        "Cedar Shakes",
        "Aluminum Siding",
        "Trim & Fascia",
      ],
      benefits: [
        "Safe for all surfaces",
        "Longer-lasting results",
        "Kills mold at the root",
        "Preserves paint & finishes",
        "Extends surface life",
      ],
    },
    commercial: {
      surfaces: [
        "Building Facades",
        "Stucco Exteriors",
        "Painted Surfaces",
        "Awnings & Signage",
        "EIFS Systems",
        "Composite Panels",
        "Historic Buildings",
        "Multi-Story Structures",
      ],
      benefits: [
        "Preserves building materials",
        "Safe for all finishes",
        "Comprehensive cleaning",
        "No surface damage risk",
        "Ideal for delicate architecture",
      ],
    },
  },
};

export const buildingTypes = {
  residential: [
    { name: "Single Family Homes", icon: "home" },
    { name: "Townhouses", icon: "building" },
    { name: "Condominiums", icon: "building" },
    { name: "Apartments", icon: "building" },
    { name: "Duplexes", icon: "home" },
    { name: "Vacation Homes", icon: "home" },
  ],
  commercial: [
    { name: "Office Buildings", icon: "building" },
    { name: "Retail Storefronts", icon: "store" },
    { name: "Restaurants", icon: "utensils" },
    { name: "Hotels & Motels", icon: "bed" },
    { name: "Gas Stations", icon: "fuel" },
    { name: "Parking Garages", icon: "car" },
    { name: "Warehouses", icon: "warehouse" },
    { name: "Medical Facilities", icon: "medical" },
    { name: "Schools & Universities", icon: "school" },
    { name: "Churches", icon: "church" },
    { name: "Stadiums & Arenas", icon: "stadium" },
    { name: "Shopping Centers", icon: "shopping" },
  ],
};

export const benefits = [
  {
    title: "Protect Your Investment",
    description: "Regular cleaning prevents costly damage and extends the life of your surfaces.",
    icon: "shield",
  },
  {
    title: "Professional Grade Results",
    description: "Industrial equipment and trained technicians deliver superior cleaning.",
    icon: "star",
  },
  {
    title: "Eco-Friendly Solutions",
    description: "Environmentally safe cleaning products that protect your landscaping.",
    icon: "leaf",
  },
  {
    title: "Flexible Scheduling",
    description: "We work around your schedule, including weekends and evenings.",
    icon: "calendar",
  },
  {
    title: "Licensed & Insured",
    description: "Fully licensed, bonded, and insured for your complete peace of mind.",
    icon: "certificate",
  },
  {
    title: "Same-Day Estimates",
    description: "Quick response times with free, no-obligation quotes.",
    icon: "clock",
  },
];

export const processSteps = [
  {
    step: 1,
    title: "Get a Free Estimate",
    description: "Contact us for a no-obligation quote. We'll assess your property and recommend the best cleaning solution.",
    icon: "phone",
  },
  {
    step: 2,
    title: "Confirm Your Details",
    description: "We'll finalize the scope of work, schedule a convenient time, and answer any questions you have.",
    icon: "clipboard",
  },
  {
    step: 3,
    title: "We Clean Your Property",
    description: "Our trained professionals arrive on time with professional equipment and complete the job efficiently.",
    icon: "sparkles",
  },
  {
    step: 4,
    title: "Enjoy the Transformation",
    description: "Walk through the results with our team. We're not done until you're completely satisfied.",
    icon: "check",
  },
];

export const faqs = {
  pressureWashing: [
    {
      question: "How does pressure washing work?",
      answer: "Pressure washing uses high-pressure water spray to remove dirt, grime, mold, mildew, and other contaminants from surfaces. Our industrial-grade equipment delivers up to 4,000 PSI of cleaning power while our trained technicians ensure safe and effective cleaning for each surface type.",
    },
    {
      question: "Is pressure washing safe for my driveway?",
      answer: "Yes! Concrete driveways are ideal for pressure washing. Our technicians adjust pressure levels based on the surface condition and use appropriate techniques to clean thoroughly without causing damage. We can remove oil stains, tire marks, and years of accumulated grime.",
    },
    {
      question: "How often should I pressure wash my driveway?",
      answer: "For most homes in Charlotte, we recommend pressure washing driveways annually. However, high-traffic areas or properties with heavy tree coverage may benefit from cleaning every 6-8 months to prevent buildup of mold and mildew.",
    },
    {
      question: "What's the difference between pressure washing and soft washing?",
      answer: "Pressure washing uses high-pressure water (typically 2,500-4,000 PSI) for hard surfaces like concrete and brick. Soft washing uses low pressure (under 1,000 PSI) with specialized cleaning solutions for delicate surfaces like siding, roofs, and painted surfaces.",
    },
    {
      question: "Can you pressure wash in winter?",
      answer: "Yes, we can pressure wash year-round in Charlotte. However, we avoid cleaning when temperatures are below freezing to prevent ice formation. Winter can actually be a great time for cleaning as there's less demand and we can often accommodate quicker scheduling.",
    },
    {
      question: "How long does pressure washing take?",
      answer: "A typical residential driveway takes 1-2 hours. A full house exterior with driveway, sidewalks, and patio can take 3-5 hours. Commercial properties vary based on size. We'll provide a time estimate with your quote.",
    },
    {
      question: "Do you offer equipment rental?",
      answer: "We focus on providing professional cleaning services rather than equipment rental. DIY pressure washing can lead to surface damage, personal injury, and inconsistent results. Our trained professionals deliver better results safely.",
    },
    {
      question: "Is pressure washing eco-friendly?",
      answer: "Yes! Pressure washing primarily uses water pressure for cleaning, reducing the need for harsh chemicals. When cleaning solutions are needed, we use environmentally safe products that won't harm your landscaping or pets.",
    },
  ],
  softWashing: [
    {
      question: "What's the difference between soft washing and pressure washing?",
      answer: "Soft washing uses low pressure (under 1,000 PSI) combined with specialized cleaning solutions to safely clean delicate surfaces. Pressure washing uses high pressure (2,500-4,000 PSI) for hard surfaces. Soft washing is essential for siding, roofs, and painted surfaces.",
    },
    {
      question: "Will soft washing damage my siding?",
      answer: "No! Soft washing is specifically designed to be safe for delicate surfaces like vinyl, aluminum, and painted siding. The low pressure and specialized solutions clean effectively without risk of water intrusion or surface damage.",
    },
    {
      question: "How long do soft wash results last?",
      answer: "Soft washing results typically last 2-3 years because our solutions kill mold, mildew, and algae at the root rather than just removing surface growth. This is much longer than pressure washing alone, which only removes visible growth.",
    },
    {
      question: "What cleaning solutions do you use?",
      answer: "We use a blend of sodium hypochlorite (similar to pool chlorine), surfactants, and specialized cleaners designed for exterior cleaning. All products are safe for your landscaping when applied properly, and we pre-wet plants as an extra precaution.",
    },
    {
      question: "Is soft washing safe for my roof?",
      answer: "Absolutely! Soft washing is the only recommended method for cleaning asphalt shingles. High-pressure washing can void your roof warranty and cause damage. Our soft wash process removes black streaks, algae, and moss safely.",
    },
    {
      question: "Can soft washing handle heavy stains?",
      answer: "Yes! Our cleaning solutions break down organic growth, dirt, and stains at the molecular level. For particularly stubborn stains, we may apply multiple treatments or adjust our solution concentration for optimal results.",
    },
    {
      question: "How quickly do results appear?",
      answer: "Results are often visible immediately, but the full effect of soft washing develops over 24-48 hours as the cleaning solutions continue working. Algae and mold stains may fade further over the following days.",
    },
    {
      question: "Is soft washing eco-friendly?",
      answer: "Our solutions are biodegradable and break down quickly in the environment. We take precautions to protect your landscaping and follow all local environmental guidelines. The solutions become inert within hours of application.",
    },
  ],
  general: [
    {
      question: "How do I get a free estimate?",
      answer: "You can request a free estimate by calling us at 704-285-1467, filling out our online form, or sending us an email. We typically respond within 24 hours and can often provide same-day estimates for standard projects.",
    },
    {
      question: "How much does pressure washing cost?",
      answer: "Pricing depends on the size of the area, surface type, and condition. Residential driveways typically range from $100-300, while house exteriors range from $200-500. We provide detailed quotes after assessing your property.",
    },
    {
      question: "Are you licensed and insured?",
      answer: "Yes! Red Moose Exterior is fully licensed, bonded, and insured. We carry comprehensive liability insurance and workers' compensation coverage for your complete protection and peace of mind.",
    },
    {
      question: "What areas do you serve?",
      answer: "We serve Charlotte and the surrounding areas including Huntersville, Cornelius, Davidson, Matthews, Mint Hill, Pineville, Indian Trail, Weddington, and more. Contact us to confirm service in your specific location.",
    },
    {
      question: "Do you offer maintenance contracts?",
      answer: "Yes! We offer annual maintenance programs for both residential and commercial properties. Regular maintenance ensures your property always looks its best and can save money compared to individual service calls.",
    },
    {
      question: "Can you accommodate my schedule?",
      answer: "Absolutely! We offer flexible scheduling including early morning, evening, and weekend appointments. For commercial clients, we can work during off-hours to minimize disruption to your business operations.",
    },
    {
      question: "What's your satisfaction guarantee?",
      answer: "We stand behind our work 100%. If you're not completely satisfied with the results, we'll return to address any concerns at no additional charge. Your satisfaction is our top priority.",
    },
    {
      question: "Do you accept credit cards?",
      answer: "Yes! We accept all major credit cards, debit cards, checks, and cash. For commercial accounts, we also offer invoicing with net-30 terms for qualified businesses.",
    },
  ],
};

export const testimonials = [
  {
    id: 1,
    name: "Sarah M.",
    location: "Myers Park, Charlotte",
    propertyType: "residential",
    service: "Pressure Washing",
    rating: 5,
    quote: "Red Moose transformed our driveway! It looked brand new after years of oil stains and dirt. The team was professional, on time, and the price was very fair. Highly recommend!",
    image: "/images/472311686_595383709891099_8289575024316967321_n.jpg",
  },
  {
    id: 2,
    name: "Mike T.",
    location: "Ballantyne, Charlotte",
    propertyType: "commercial",
    service: "Pressure Washing",
    rating: 5,
    quote: "We use Red Moose for our parking garage and restaurant patio. They work around our business hours and always deliver excellent results. Our customers have noticed the difference!",
    image: "/images/Red-Moose-Restaurant-Patio1.png",
  },
  {
    id: 3,
    name: "Jennifer L.",
    location: "SouthPark, Charlotte",
    propertyType: "residential",
    service: "Soft Washing",
    rating: 5,
    quote: "I was worried about my vinyl siding, but the soft wash was perfect. No damage, no issues, just a beautifully clean house. The crew was courteous and cleaned up everything after.",
    image: "/images/Red-Moose-Pressure-Washing-Siding.webp",
  },
  {
    id: 4,
    name: "David R.",
    location: "University Area, Charlotte",
    propertyType: "commercial",
    service: "Pressure Washing",
    rating: 5,
    quote: "Managing multiple properties, I need reliable vendors. Red Moose has been our go-to for three years. Consistent quality, fair pricing, and great communication every time.",
    image: "/images/Red-Moose-Parking-Deck1.png",
  },
];

export const serviceAreas = [
  "Charlotte",
  "Huntersville",
  "Cornelius",
  "Davidson",
  "Matthews",
  "Mint Hill",
  "Pineville",
  "Indian Trail",
  "Weddington",
  "Waxhaw",
  "Fort Mill",
  "Lake Norman",
  "Ballantyne",
  "SouthPark",
  "Myers Park",
  "Dilworth",
  "NoDa",
  "Plaza Midwood",
  "University City",
  "Uptown Charlotte",
];

export const galleryImages = [
  {
    id: 1,
    before: "/images/468968021_573095245453279_3862210879744362609_n.jpg",
    after: "/images/472208748_595383749891095_579082424894432307_n.jpg",
    title: "Residential Driveway Transformation",
    service: "Pressure Washing",
    propertyType: "residential",
    surface: "Driveway",
    description: "Complete driveway restoration removing years of oil stains and dirt buildup.",
  },
  {
    id: 2,
    before: "/images/472361098_595383699891100_7982681566791241068_n.jpg",
    after: "/images/472311440_595383753224428_4647714442334182497_n.jpg",
    title: "Patio Deep Clean",
    service: "Pressure Washing",
    propertyType: "residential",
    surface: "Patio",
    description: "Restored patio pavers to like-new condition.",
  },
  {
    id: 3,
    before: "/images/474621657_609912111771592_8705984829583445172_n.jpg",
    after: "/images/474620283_611646214931515_2503600508367388984_n.jpg",
    title: "Commercial Parking Structure",
    service: "Pressure Washing",
    propertyType: "commercial",
    surface: "Parking Garage",
    description: "Multi-level parking deck cleaned and restored.",
  },
  {
    id: 4,
    before: "/images/475289594_613445651418238_7737378628540032140_n.jpg",
    after: "/images/475491881_616407617788708_7582151240545784634_n.jpg",
    title: "Restaurant Outdoor Seating",
    service: "Pressure Washing",
    propertyType: "commercial",
    surface: "Patio",
    description: "Restaurant patio cleaned for a fresh, welcoming appearance.",
  },
  {
    id: 5,
    before: "/images/481071161_646231381484973_7065245135346607739_n.jpg",
    after: "/images/483594842_657929490315162_3506036098779792051_n.jpg",
    title: "Home Exterior Soft Wash",
    service: "Soft Washing",
    propertyType: "residential",
    surface: "Siding",
    description: "Gentle soft wash removed algae and restored siding appearance.",
  },
  {
    id: 6,
    before: "/images/472750055_599378046158332_3005726317828620530_n.jpg",
    after: "/images/484074752_658512136923564_7405740221406480476_n.jpg",
    title: "Gas Station Cleaning",
    service: "Pressure Washing",
    propertyType: "commercial",
    surface: "Concrete",
    description: "Full gas station cleaning including pumps area and parking lot.",
  },
];

export const navLinks = [
  { name: "Home", href: "/" },
  { name: "Pressure Washing", href: "/pressure-washing" },
  { name: "Soft Washing", href: "/soft-washing" },
  { name: "Gallery", href: "/gallery" },
  { name: "How It Works", href: "/how-it-works" },
  { name: "Service Areas", href: "/service-areas" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
];
