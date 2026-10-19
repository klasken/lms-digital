// Les sites réalisés, affichés dans la section « Réalisations ».
// Pour ajouter un site : copie un bloc, change les textes, et dépose 3 captures dans /public/realisations :
//   - <slug>-page.webp       : la page entière en version ordinateur, 1800 px de large (capture en haute définition)
//   - <slug>-page-petit.webp : la même en 1000 px de large (chargée sur téléphone)
//   - <slug>-mobile.webp     : le haut de la page en version mobile, 750 px de large

export type Realisation = {
  slug: string;
  nom: string;
  metier: string;
  lieu?: string;
  resume: string;
  points: string[];
  url: string;
  // Couleurs du site du client : fond, accent, texte.
  couleurs: [string, string, string];
  images: {
    page: { src: string; srcPetit: string; width: number; height: number };
    mobile: { src: string; width: number; height: number };
  };
};

export const REALISATIONS: Realisation[] = [
  {
    slug: "myss",
    nom: "Myss Event66",
    metier: "Traiteur événementiel",
    resume:
      "Buffets, cocktails et déco de henné pour les mariages et les réceptions. Un site sombre et doré, dans l'esprit de ses tables dressées.",
    points: [
      "Six prestations présentées en photos, du salé au sucré",
      "Une galerie de réalisations qui s'agrandit au toucher",
      "Les vidéos des événements, lisibles directement sur la page",
      "Réservation en un clic par message Instagram",
    ],
    url: "https://site-maeaeyss-events.netlify.app/",
    couleurs: ["#121914", "#CDB185", "#EEF0EA"],
    images: {
      page: {
        src: "/realisations/myss-page.webp",
        srcPetit: "/realisations/myss-page-petit.webp",
        width: 1800,
        height: 7588,
      },
      mobile: { src: "/realisations/myss-mobile.webp", width: 750, height: 4400 },
    },
  },
  {
    slug: "riviera",
    nom: "Buffet Riviera",
    metier: "Buffets, box brunch et mocktails",
    lieu: "Nice et Côte d'Azur",
    resume:
      "Buffets sucrés et salés, box brunch et bars à mocktails pour les mariages, fiançailles et anniversaires. Un site crème et chocolat, aussi soigné que ses tables.",
    points: [
      "Une galerie de réalisations qui s'agrandit au clic",
      "Les occasions et les formules présentées clairement",
      "La réservation expliquée en trois étapes",
      "Les vidéos des événements et la réservation par Instagram ou WhatsApp",
    ],
    url: "https://buffet-riviera.netlify.app/",
    couleurs: ["#F8F3F1", "#D7AE66", "#2E1D19"],
    images: {
      page: {
        src: "/realisations/riviera-page.webp",
        srcPetit: "/realisations/riviera-page-petit.webp",
        width: 1800,
        height: 10391,
      },
      mobile: { src: "/realisations/riviera-mobile.webp", width: 750, height: 4400 },
    },
  },
  {
    slug: "sweet-cook",
    nom: "Sweet Cook",
    metier: "Traiteur de mignardises",
    lieu: "Montpellier et alentours",
    resume:
      "Mignardises salées et sucrées, plateaux, box et buffets, avec des viandes certifiées halal. Un site aux rayures rose et sauge, gourmand dès le premier écran.",
    points: [
      "La carte 2026 par catégories, avec les prix et une version PDF",
      "Les buffets et animations présentés en photos",
      "Les coulisses en vidéo et une galerie des créations",
      "La commande en trois étapes, par WhatsApp, Instagram ou email",
    ],
    url: "https://sweet-cook.netlify.app/",
    couleurs: ["#FDFBF8", "#EBC9C0", "#3A2F28"],
    images: {
      page: {
        src: "/realisations/sweet-cook-page.webp",
        srcPetit: "/realisations/sweet-cook-page-petit.webp",
        width: 1800,
        height: 10349,
      },
      mobile: { src: "/realisations/sweet-cook-mobile.webp", width: 750, height: 4400 },
    },
  },
];
