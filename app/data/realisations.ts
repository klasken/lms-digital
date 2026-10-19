// Les sites réalisés, affichés dans la section « Réalisations », 2 par ligne, dans cet ordre.
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
    slug: "sweet-cook",
    nom: "Sweet Cook",
    metier: "Traiteur de mignardises",
    lieu: "Montpellier et alentours",
    resume:
      "Mignardises salées et sucrées, plateaux, box et buffets, avec des viandes certifiées halal. Un site aux rayures rose et sauge, gourmand dès le premier écran.",
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
  {
    slug: "riviera",
    nom: "Buffet Riviera",
    metier: "Buffets, box brunch et mocktails",
    lieu: "Nice et Côte d'Azur",
    resume:
      "Buffets sucrés et salés, box brunch et bars à mocktails pour les mariages, fiançailles et anniversaires. Un site crème et chocolat, aussi soigné que ses tables.",
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
    slug: "shine",
    nom: "Shine by Bloom",
    metier: "Bouquets et paniers personnalisés",
    lieu: "Orléans",
    resume:
      "Des fleurs fraîches accompagnées de soins et de petits cadeaux, composées sur commande. Un site poudré et élégant, à l'image de ses bouquets.",
    url: "https://shineabybloom-siteaa.netlify.app/",
    couleurs: ["#FCF7F6", "#E58DA0", "#2A1418"],
    images: {
      page: {
        src: "/realisations/shine-page.webp",
        srcPetit: "/realisations/shine-page-petit.webp",
        width: 1800,
        height: 9768,
      },
      mobile: { src: "/realisations/shine-mobile.webp", width: 750, height: 4400 },
    },
  },
  {
    slug: "delices-de-mel",
    nom: "Délices de Mel",
    metier: "Pâtisserie maison",
    lieu: "Saint-Chamond (42)",
    resume:
      "Number cakes, bento cakes, cupcakes et brownies faits main, personnalisés pour chaque fête. Un site crème et framboise, aussi gourmand que ses gâteaux.",
    url: "https://delicaes-de-melaea.netlify.app/",
    couleurs: ["#FFF9F8", "#F2C4CF", "#3A211C"],
    images: {
      page: {
        src: "/realisations/melaea-page.webp",
        srcPetit: "/realisations/melaea-page-petit.webp",
        width: 1800,
        height: 6940,
      },
      mobile: { src: "/realisations/melaea-mobile.webp", width: 750, height: 4400 },
    },
  },
];
