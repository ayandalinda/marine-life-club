export const SPECIES_CATEGORIES = [
  'All',
  'Sharks & Rays',
  'Marine Mammals',
  'Sea Turtles',
  'Reef & Invertebrates',
];

export const SPECIES_DATA = [
  {
    id: 'ragged-tooth-shark',
    commonName: 'Ragged-Tooth Shark',
    scientificName: 'Carcharias taurus',
    category: 'Sharks & Rays',
    status: 'Vulnerable',
    statusCode: 'VU',
    habitat: 'Subtropical coastal reefs, rocky overhangs, and caves',
    depth: '10m – 40m',
    kznHotspots: 'Aliwal Shoal, Protea Banks, Sodwana Bay',
    image: 'https://images.unsplash.com/photo-1560275619-4662e36fa65c?auto=format&fit=crop&w=800&q=80',
    description:
      'Also known locally as the "Raggie", this gentle giant migrates in large aggregations along the KwaZulu-Natal coastline during winter to mate in the warm subtropical waters before moving south.',
    facts: [
      'Despite their formidable mouthful of pointed teeth, raggies are docile and non-aggressive towards divers.',
      'They are the only known shark species able to gulp air from the surface to achieve neutral buoyancy.',
      'Females exhibit intrauterine cannibalism (oophagy), where the strongest embryo consumes unfertilized eggs in the womb.',
    ],
    conservationNote:
      'Protected under South African marine legislation. Commercial targeting is prohibited, though they remain vulnerable to shark nets and drumlines.',
  },
  {
    id: 'green-sea-turtle',
    commonName: 'Green Sea Turtle',
    scientificName: 'Chelonia mydas',
    category: 'Sea Turtles',
    status: 'Endangered',
    statusCode: 'EN',
    habitat: 'Seagrass pastures, coastal lagoons, and offshore coral reefs',
    depth: 'Surface – 30m',
    kznHotspots: 'iSimangaliso Wetland Park, Sodwana Bay, Aliwal Shoal',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80',
    description:
      'Adult green turtles are the only strictly herbivorous sea turtles, grazing on coastal seagrass beds that oxygenate and maintain vital marine nursery habitats along KZN.',
    facts: [
      'Named after the greenish color of their subdermal fat rather than the color of their carapace.',
      'They can hold their breath underwater for up to 5 hours while resting or sleeping.',
      'Females return to the exact beach where they hatched decades later to deposit their own clutch of eggs.',
    ],
    conservationNote:
      'Threatened by plastic ingestion (often mistaking floating plastic bags for jellyfish), ghost fishing gear, and coastal habitat loss.',
  },
  {
    id: 'humpback-whale',
    commonName: 'Humpback Whale',
    scientificName: 'Megaptera novaeangliae',
    category: 'Marine Mammals',
    status: 'Least Concern (Recovering)',
    statusCode: 'LC',
    habitat: 'Pelagic open ocean, migrating along the Durban shoreline',
    depth: 'Surface – 200m',
    kznHotspots: 'Durban Bluff, Umhlanga Coast, St. Lucia Marine Reserve',
    image: 'https://images.unsplash.com/photo-1568430462989-44163eb1752f?auto=format&fit=crop&w=800&q=80',
    description:
      'Every year from June to November, thousands of humpback whales travel up the KZN coast from icy Antarctic feeding grounds to breed in the warm waters of Mozambique and Madagascar.',
    facts: [
      'Famous for complex, haunting melodic songs sung by males that can travel hundreds of kilometers across open ocean.',
      'Their pectoral flippers are up to one-third of their entire body length—the largest appendages of any animal.',
      'Breaching behaviors are used for acoustic communication, parasite dislodgment, and display.',
    ],
    conservationNote:
      'A triumph of international protection after whaling moratoria, but increasingly impacted by ship collisions, noise pollution, and entanglement in commercial crab and shark fishing nets.',
  },
  {
    id: 'bottlenose-dolphin',
    commonName: 'Indo-Pacific Bottlenose Dolphin',
    scientificName: 'Tursiops aduncus',
    category: 'Marine Mammals',
    status: 'Near Threatened',
    statusCode: 'NT',
    habitat: 'Coastal surf zones, shallow bays, and estuary mouths',
    depth: '1m – 25m',
    kznHotspots: 'Durban Golden Mile, Umhlanga Rocks, Scottburgh',
    image: 'https://images.unsplash.com/photo-1607153333879-c1a05825843d?auto=format&fit=crop&w=800&q=80',
    description:
      'Regularly spotted surfing the backline breakers along Durban beaches. The resident KZN coastal pod exhibits sophisticated cooperative foraging behaviors and deep social bonding.',
    facts: [
      'Each individual develops a unique "signature whistle" in early life that serves as a vocal name within the pod.',
      'Known to coordinate with local artisanal fishermen in certain regions, driving fish schools toward shallows.',
      'They utilize high-frequency echolocation clicks to detect prey buried beneath seabed sediments.',
    ],
    conservationNote:
      'Subject to severe bioaccumulation of toxic chemical runoff in urban waters and high acoustic stress from commercial harbor shipping.',
  },
  {
    id: 'african-penguin',
    commonName: 'African Penguin',
    scientificName: 'Spheniscus demersus',
    category: 'Marine Mammals',
    status: 'Critically Endangered',
    statusCode: 'CR',
    habitat: 'Cold-temperate coastal waters and offshore islands',
    depth: 'Surface – 130m',
    kznHotspots: 'uShaka Sea World Rehabilitation Center, Southern KZN Coastline',
    image: 'https://images.unsplash.com/photo-1598439210625-5067c578f3f6?auto=format&fit=crop&w=800&q=80',
    description:
      'Africa’s only endemic penguin species. While breeding colonies are centered in the Western Cape and Algoa Bay, moulting juveniles and foraging adults regularly drift along KZN during the annual Sardine Run.',
    facts: [
      'Also known as the "Jackass Penguin" due to its distinctive loud, donkey-like braying vocalization.',
      'Pink patches of skin above their eyes act as thermoregulators—flushing with blood to cool off in warm weather.',
      'Populations have crashed by over 90% in the last century, making them one of the most endangered birds on the planet.',
    ],
    conservationNote:
      'UMLC collaborates with SAAMBR on reporting stranded penguins along local Durban beaches and supporting emergency rehabilitation.',
  },
  {
    id: 'coral-nudibranch',
    commonName: 'Variable Coral Nudibranch',
    scientificName: 'Nembrotha lineolata',
    category: 'Reef & Invertebrates',
    status: 'Data Deficient',
    statusCode: 'DD',
    habitat: 'Subtropical coral reefs and sponge gardens',
    depth: '5m – 35m',
    kznHotspots: 'Aliwal Shoal, Landers Reef, Sodwana Bay Reef Complex',
    image: 'https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?auto=format&fit=crop&w=800&q=80',
    description:
      'Vibrantly colored sea slugs that thrive in KwaZulu-Natal’s unique transition reefs where tropical Indo-Pacific and temperate marine fauna meet in a biodiversity hotspot.',
    facts: [
      'They incorporate toxic compounds from ascidians and sponges into their own flesh to deter predatory fish.',
      'Their bright warning coloration (aposematism) signals potential predators that they are noxious.',
      'Equipped with specialized sensory horns called rhinophores that detect chemical scents in ocean currents.',
    ],
    conservationNote:
      'Highly sensitive bio-indicators of coral bleaching, ocean warming, and mechanical damage from unregulated anchoring.',
  },
];
