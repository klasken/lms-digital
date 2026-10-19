# LMS Digital

Site vitrine de LMS Digital (création de sites internet), fait avec Next.js et Tailwind CSS.

## Lancer le site en local

```bash
npm install
npm run dev
```

Puis ouvrir http://localhost:3000.

## Où modifier quoi

| Je veux changer… | Fichier |
| --- | --- |
| Le compte Instagram, l'email | `app/data/site.ts` |
| Les sites présentés dans « Réalisations » | `app/data/realisations.ts` |
| Les captures des sites | `public/realisations/` |
| Les textes de la page (avantages, méthode, contact) | `app/page.tsx` |
| L'animation de l'écran d'ordinateur en haut de page | `app/components/EcranPC.tsx` et `ecran-pc.css` |
| Les couleurs et polices | `app/globals.css` et `app/layout.tsx` |

### Ajouter un nouveau site dans « Réalisations »

1. Faire 3 captures en `.webp` (en haute définition, pour qu'elles restent nettes) et les déposer dans `public/realisations/` :
   - `<nom>-page.webp` : la page entière en version ordinateur, 1800 px de large
   - `<nom>-page-petit.webp` : la même en 1000 px de large (utilisée sur téléphone)
   - `<nom>-mobile.webp` : le haut de la page sur téléphone, 750 px de large
2. Copier un bloc dans `app/data/realisations.ts` et changer les textes, l'adresse et la taille des images.

## Formulaire de contact

Les demandes envoyées depuis le formulaire arrivent dans la table `contacts` de Supabase
(colonnes `nom`, `email`, `service`, `message`). Les clés sont dans `.env.local` :

```
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
```
