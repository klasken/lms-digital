// Coordonnées affichées sur le site.
export const INSTAGRAM = "lms__digital";
export const INSTAGRAM_URL = `https://www.instagram.com/${INSTAGRAM}/`;
// Ouvre directement une conversation privée avec le compte.
export const INSTAGRAM_DM = `https://ig.me/m/${INSTAGRAM}`;
export const EMAIL = "ceugnietmarius@gmail.com";
// WhatsApp : ouvre directement une conversation (numéro au format international, sans le 0).
export const WHATSAPP = "06 95 51 04 37";
// Message déjà écrit quand la conversation s'ouvre (la personne n'a plus qu'à appuyer sur Envoyer).
export const WHATSAPP_MESSAGE =
  "Bonjour ! Je viens de votre site LMS Digital, j'aimerais avoir plus d'infos pour la création de mon site internet.";
export const WHATSAPP_URL = `https://wa.me/33695510437?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

// Informations légales de l'entreprise (source : annuaire-entreprises.data.gouv.fr).
export const ENTREPRISE = {
  nom: "Marius Ceugniet",
  nomCommercial: "LMS Digital",
  statut: "Entrepreneur individuel (EI)",
  siren: "102 263 373",
  siret: "102 263 373 00015",
  naf: "62.01Z – Programmation informatique",
  creation: "11 mars 2026",
  adresse: "7 avenue Foch, 59800 Lille, France",
  annuaire: "https://annuaire-entreprises.data.gouv.fr/entreprise/marius-ceugniet-102263373",
};

