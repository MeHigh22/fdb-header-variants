# Ferme de Basseilles — Variantes de header

5 propositions de nouvelle barre de navigation pour le site de la [Ferme de Basseilles](https://fermedebasseilles.be), pensées pour l'intégration SWIFT.

## Objectifs (instructions FdB)

- ✅ Partie e-commerce (panier & boutique) **retirée du header** et déplacée vers le footer
- ✅ Nouveaux boutons : **Réserver**, **Acheter un bon cadeau**, **Ajouter des extras**, **Voir ma réservation**
- ✅ Conservés : informations de contact, sélecteur de langue, réseaux sociaux
- ✅ Testables sur ordinateur **et** téléphone (design responsive)

## Les 5 variantes

| # | Page | Concept |
|---|------|---------|
| 1 | `variant-1.html` | 4 boutons distincts à droite du menu |
| 2 | `variant-2.html` | 1 menu déroulant « Mon séjour » regroupant les 4 actions |
| 3 | `variant-3.html` | Logo centré, 2 boutons de chaque côté (proche du site actuel) |
| 4 | `variant-4.html` | Actions secondaires dans la barre verte du haut + grand CTA « Réserver » |
| 5 | `variant-5.html` | Desktop : CTA + menu « Mon séjour » · Mobile : barre d'actions fixe en bas d'écran (app-like) |

`index.html` sert de page d'accueil et liste les 5 variantes.
Un **sélecteur flottant** en bas de chaque page (et les flèches ← → du clavier) permet de passer d'une variante à l'autre.

## Design

- Vert : `#678D73` · Jaune : `#D3C774` · Fond : blanc
- Polices : Montserrat + Dancing Script (Google Fonts)
- HTML / CSS / JS statiques, sans framework — déployable tel quel sur Vercel

## Déploiement Vercel

1. Importer ce dépôt sur [vercel.com/new](https://vercel.com/new)
2. Framework preset : **Other** (site statique, aucun build)
3. Deploy — c'est tout.
