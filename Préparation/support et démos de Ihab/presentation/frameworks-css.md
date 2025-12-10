---
marp: true
title: Frameworks CSS - Bootstrap 5, Tailwind CSS, Bulma & Foundation
theme: utopios
paginate: true
author: Ihab ABADI
header: "![h:70px](https://utopios-marp-assets.s3.eu-west-3.amazonaws.com/logo_blanc.svg)"
footer: "Utopios® Tous droits réservés"

---

<!-- _class: lead -->

# Frameworks CSS




---

## Objectifs de la Formation

- Maîtriser **Bootstrap 5** et son système de grille
- Comprendre l'approche **utility-first** de Tailwind
- Explorer **Bulma** et **Foundation**
- Découvrir **CSS-in-JS** (Styled Components, Emotion)
- Savoir **choisir** le bon framework
- **Optimiser** les builds de production

---

## Prérequis

- HTML5 et CSS3 solides
- Bases de JavaScript ES6+
- Notions de responsive design
- Familiarité avec npm/Node.js
- Éditeur VS Code configuré

**Public** : Développeurs front-end, intégrateurs, designers UI/UX

---

## Programme des 3 Jours

<center>

| Jour | Contenu | Format |
|------|---------|--------|
| **Jour 1** | Bootstrap 5 : Grid, Composants, Sass | Cours + TP |
| **Jour 2** | Tailwind CSS : Utility-first, Config | Cours + TP |
| **Jour 3** | Bulma, Foundation, CSS-in-JS | Cours + Projet |

</center>

---

## Livrables de la Formation

- 📊 Support de cours complet
- 💻 Projets de démonstration fonctionnels
- 📁 Templates réutilisables
- 📝 Fiches de référence rapide

---

## Environnement Technique

<center>

| Frameworks | Build Tools |
|------------|-------------|
| Bootstrap 5.3.2 | Node.js 18+ |
| Tailwind CSS 3.4 | npm / yarn |
| Bulma 0.9.4 | Vite 5.x |
| Foundation 6.8 | Sass/SCSS |

</center>

---

<!-- _class: lead -->
# JOUR 1
## Bootstrap 5 : Maîtrise Complète

![bg right:35%](https://placehold.co/400x600/7c3aed/ffffff?text=Bootstrap+5)

---

## Qu'est-ce qu'un Framework CSS ?

Une **collection organisée** de styles CSS préconçus, composants réutilisables et outils qui accélèrent le développement.

### ✅ Avantages
- Développement rapide / Cohérence visuelle
- Responsive intégré / Documentation riche

---

## Inconvénients des Frameworks

- Surcharge CSS potentielle
- Sites qui "se ressemblent"
- Courbe d'apprentissage
- Dépendance au framework
- Personnalisation parfois complexe

---

## Les Différentes Approches

<center>

| Approche | Exemples | Style |
|----------|----------|-------|
| Component-based | Bootstrap, Bulma | `.btn`, `.card` |
| Utility-first | Tailwind, Tachyons | `.p-4`, `.text-center` |
| CSS-in-JS | Styled, Emotion | `styled.div` |

</center>

---

## Bootstrap 5 - Présentation

- Créé par Twitter en 2011
- **Bootstrap 5** : Mai 2021
- **Plus de jQuery !**
- 165k+ stars GitHub
- 22M+ téléchargements npm/mois

---

## Bootstrap 5 - Nouveautés

- Abandon de jQuery
- RTL support natif
- Nouveau système d'utilitaires
- Offcanvas component
- CSS custom properties

---

## Installation CDN

```html
<!-- CSS -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/
      dist/css/bootstrap.min.css" rel="stylesheet">

<!-- JS -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/
      dist/js/bootstrap.bundle.min.js"></script>
```

---

## Installation npm

```bash
npm create vite@latest mon-projet -- --template vanilla
cd mon-projet
npm install bootstrap @popperjs/core
npm install -D sass
```

---

## Structure de Projet

```
mon-projet/
├── index.html
├── scss/
│   ├── styles.scss
│   └── _variables.scss
├── js/main.js
└── node_modules/bootstrap/
```

---

## Système de Grille

```html
<div class="container">
  <div class="row">
    <div class="col-md-4">1/3</div>
    <div class="col-md-4">1/3</div>
    <div class="col-md-4">1/3</div>
  </div>
</div>
```

---

## Éléments de la Grille


| Élément | Rôle |
|---------|------|
| **Container** | Contient et centre le contenu |
| **Row** | Ligne horizontale de colonnes |
| **Col** | Colonne responsive |


---

## Breakpoints

<center>

| Breakpoint | Classe | Min-width |
|------------|--------|-----------|
| Extra small | `.col-` | < 576px |
| Small | `.col-sm-` | ≥ 576px |
| Medium | `.col-md-` | ≥ 768px |
| Large | `.col-lg-` | ≥ 992px |

</center>

---

## Breakpoints (suite)

<center>

| Breakpoint | Classe | Min-width |
|------------|--------|-----------|
| Extra large | `.col-xl-` | ≥ 1200px |
| XXL | `.col-xxl-` | ≥ 1400px |

</center>

**Principe** : Mobile-First

---

## Exemple Responsive

```html
<!-- 100% mobile, 50% tablet, 33% desktop -->
<div class="col-12 col-md-6 col-lg-4">
  Responsive
</div>
```

---

## Types de Containers

```html
<!-- Fixe : max-width selon breakpoint -->
<div class="container"></div>

<!-- Fluide : toujours 100% -->
<div class="container-fluid"></div>

<!-- Responsive : 100% jusqu'à md -->
<div class="container-md"></div>
```

---

## Colonnes Automatiques

```html
<div class="row row-cols-1 row-cols-md-2 row-cols-lg-4">
  <div class="col"><div class="card">Auto</div></div>
  <div class="col"><div class="card">Auto</div></div>
</div>
```

---

## Gutters et Offset

```html
<!-- Gutters -->
<div class="row g-3">Gap de 1rem</div>
<div class="row gx-4 gy-2">Horizontal/Vertical</div>

<!-- Offset -->
<div class="col-md-6 offset-md-3">Centré</div>
```

---

## Order et Alignement

```html
<!-- Order -->
<div class="col order-md-2">2ème sur desktop</div>
<div class="col order-md-1">1er sur desktop</div>

<!-- Alignement -->
<div class="row align-items-center justify-content-center">
```

---

## Navbar - Structure

```html
<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <div class="container">
    <a class="navbar-brand" href="#">MonSite</a>
    <button class="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav">
```

---

## Navbar - Menu

```html
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav me-auto">
        <li class="nav-item">
          <a class="nav-link active" href="#">Accueil</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
```

---

## Card - Structure

```html
<div class="card h-100 shadow-sm">
  <img src="image.jpg" class="card-img-top">
  <div class="card-body">
    <h5 class="card-title">Titre</h5>
    <p class="card-text">Description...</p>
    <a href="#" class="btn btn-primary">Voir plus</a>
  </div>
</div>
```

---

## Modal - Déclencheur

```html
<button class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#myModal">
  Ouvrir
</button>

<div class="modal fade" id="myModal" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
```

---

## Modal - Contenu

```html
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Titre</h5>
        <button class="btn-close" data-bs-dismiss="modal">
        </button>
      </div>
      <div class="modal-body">Contenu...</div>
    </div>
```

---

## Formulaire - Input

```html
<div class="form-floating mb-3">
  <input type="email" class="form-control"
         id="email" placeholder="email@example.com">
  <label for="email">Adresse email</label>
</div>
```

---

## Formulaire - Éléments

```html
<select class="form-select mb-3">
  <option selected disabled>Choisir...</option>
</select>

<div class="form-check form-switch">
  <input class="form-check-input" type="checkbox">
  <label class="form-check-label">Newsletter</label>
</div>
```

---

## Classes Utilitaires - Spacing

```css
.mt-3  /* margin-top: 1rem */
.px-4  /* padding-x: 1.5rem */
.py-2  /* padding-y: 0.5rem */
.mx-auto /* centrage horizontal */
```

**Sizes** : 0, 1, 2, 3, 4, 5, auto

---

## Classes Utilitaires - Display

```css
.d-none .d-md-block
.d-flex .flex-column
.justify-content-between
.align-items-center
.gap-3
```

---

## Classes Utilitaires - Text

```css
.text-center .text-end
.text-primary .text-muted
.fw-bold .fs-4
.bg-light .bg-dark
.rounded .shadow
```

---

## Personnalisation Sass

```scss
// _variables.scss
$primary: #6366f1;
$secondary: #64748b;
$border-radius: 0.5rem;
$font-family-sans-serif: 'Inter', sans-serif;
```

---

## Import Sass Bootstrap

```scss
// styles.scss
@import "../node_modules/bootstrap/scss/functions";
@import "variables";
@import "../node_modules/bootstrap/scss/variables";
@import "../node_modules/bootstrap/scss/mixins";
@import "../node_modules/bootstrap/scss/bootstrap";
```

---

## TP Jour 1 : Landing Page

### Éléments à créer
1. Navbar fixe avec menu responsive
2. Hero section avec CTA
3. Section Features : 6 cards
4. Section Pricing : 3 plans
5. Footer multi-colonnes

---

## TP Jour 1 : Critères

- ✅ Responsive mobile/tablet/desktop
- ✅ Personnalisation Sass
- ✅ Composants Bootstrap correctement utilisés
- ✅ Code HTML sémantique

---

<!-- _class: lead -->
# JOUR 2
## Tailwind CSS : Utility-First

![bg right:35%](https://placehold.co/400x600/06b6d4/ffffff?text=Tailwind+CSS)

---

## Approche Traditionnelle

```html
<div class="card">
  <h2 class="card-title">Titre</h2>
</div>
```

```css
.card { padding: 1.5rem; border-radius: 0.5rem; }
.card-title { font-size: 1.25rem; }
```

---

## Approche Utility-First

```html
<div class="p-6 rounded-lg shadow-md bg-white">
  <h2 class="text-xl font-semibold text-gray-900">Titre</h2>
</div>
```

**Pas de CSS personnalisé à écrire !**

---

## Avantages Tailwind

- **Pas de nommage** de classes à inventer
- **Colocation** : style dans le HTML
- **Cohérence** : design system imposé
- **CSS minimal** : ~10-30KB après purge

---

## Inconvénients Tailwind

- HTML "verbeux" au premier abord
- Courbe d'apprentissage initiale
- Dépendance à la documentation

**Solutions** : `@apply`, composants React/Vue

---

## Installation Tailwind

```bash
npm create vite@latest mon-projet -- --template vanilla
cd mon-projet
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

---

## Configuration de Base

```css
/* src/styles.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

## tailwind.config.js

```javascript
export default {
  content: ["./index.html", "./src/**/*.{js,html}"],
  darkMode: 'class',
  theme: { extend: {} },
  plugins: [],
}
```

---

## Spacing - Padding

```html
<div class="p-4">     <!-- padding: 1rem -->
<div class="px-6">    <!-- padding-x: 1.5rem -->
<div class="py-2">    <!-- padding-y: 0.5rem -->
<div class="pt-8">    <!-- padding-top: 2rem -->
```

---

## Spacing - Margin

```html
<div class="m-4">      <!-- margin: 1rem -->
<div class="mx-auto">  <!-- centrage horizontal -->
<div class="mt-8">     <!-- margin-top: 2rem -->
<div class="-mt-4">    <!-- margin négatif -->
```

---

## Échelle des Valeurs

<center>

| Valeur | Taille |
|--------|--------|
| 1 | 0.25rem |
| 2 | 0.5rem |
| 4 | 1rem |
| 8 | 2rem |
| 16 | 4rem |

</center>

---

## Couleurs de Texte

```html
<p class="text-gray-900">Texte foncé</p>
<p class="text-blue-600">Texte bleu</p>
<p class="text-white/80">Blanc 80% opacité</p>
```

---

## Couleurs de Fond

```html
<div class="bg-white">Fond blanc</div>
<div class="bg-indigo-600">Fond indigo</div>
<div class="bg-black/50">Noir 50% opacité</div>
```

---

## Dégradés

```html
<div class="bg-gradient-to-r from-purple-500 to-pink-500">
  Dégradé horizontal
</div>

<div class="bg-gradient-to-br from-blue-400 to-pink-500">
  Dégradé diagonal
</div>
```

---

## Typography - Tailles

```html
<p class="text-xs">12px</p>
<p class="text-sm">14px</p>
<p class="text-base">16px</p>
<p class="text-lg">18px</p>
<p class="text-xl">20px</p>
<p class="text-2xl">24px</p>
```

---

## Typography - Graisse

```html
<p class="font-light">300</p>
<p class="font-normal">400</p>
<p class="font-medium">500</p>
<p class="font-semibold">600</p>
<p class="font-bold">700</p>
```

---

## Flexbox

```html
<div class="flex">              <!-- display: flex -->
<div class="flex flex-col">     <!-- column -->
<div class="flex justify-center">
<div class="flex items-center">
<div class="flex gap-4">
```

---

## Grid

```html
<div class="grid grid-cols-3 gap-4">
  <div>Col 1</div>
  <div>Col 2</div>
  <div>Col 3</div>
</div>
```

---

## Grid Responsive

```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
  <div class="col-span-2">2 colonnes</div>
  <div class="col-span-full">Toute la largeur</div>
</div>
```

---

## Breakpoints Tailwind

<center>

| Préfixe | Min-width |
|---------|-----------|
| (aucun) | 0px (mobile) |
| `sm:` | 640px |
| `md:` | 768px |
| `lg:` | 1024px |
| `xl:` | 1280px |

</center>

---

## Responsive Example

```html
<div class="text-sm md:text-base lg:text-lg">
  Taille responsive
</div>

<div class="hidden md:block">Visible md+</div>
<div class="block md:hidden">Mobile only</div>
```

---

## États - Hover & Focus

```html
<button class="bg-blue-500
               hover:bg-blue-600
               focus:ring-2
               active:bg-blue-700">
  Button
</button>
```

---

## États - Group Hover

```html
<div class="group p-4 hover:bg-gray-50">
  <h3 class="group-hover:text-blue-600">Titre</h3>
  <p class="group-hover:text-gray-700">Description</p>
</div>
```

---

## Dark Mode

```html
<div class="bg-white dark:bg-gray-900
            text-gray-900 dark:text-white">
  S'adapte au dark mode
</div>
```

---

## Composants @apply

```css
@layer components {
  .btn {
    @apply px-4 py-2 rounded-lg font-medium
           transition-all focus:ring-2;
  }
  .btn-primary {
    @apply btn bg-blue-600 text-white;
  }
}
```

---

## PurgeCSS

Tailwind supprime les classes non utilisées en production.

```javascript
// tailwind.config.js
content: ["./index.html", "./src/**/*.{js,html}"]
```

**Résultat** : Dev ~3MB → Prod ~10-30KB

---

## Règles PurgeCSS

```javascript
// ❌ MAUVAIS
className = `text-${color}-500`;

// ✅ BON
className = isBlue ? 'text-blue-500' : 'text-red-500';
```

---

## TP Jour 2 : Dashboard

### Éléments à créer
1. Sidebar collapsible
2. Header avec recherche
3. Stats cards
4. Tableau de données
5. Dark mode toggle

---

## TP Jour 2 : Critères

- ✅ Classes Tailwind bien utilisées
- ✅ Configuration personnalisée
- ✅ Composants @apply
- ✅ Dark mode fonctionnel

---

<!-- _class: lead -->
# JOUR 3
## Autres Frameworks et Projet Final

![bg right:35%](https://placehold.co/400x600/00d1b2/ffffff?text=Bulma+%26+More)

---

## Bulma - Présentation

- Framework **CSS pur** (pas de JS)
- Basé sur **Flexbox**
- Syntaxe claire et sémantique
- **44 KB** minifié

```bash
npm install bulma
```

---

## Bulma - Points Forts

- ✅ Pas de dépendance JS
- ✅ Classes très lisibles
- ✅ Documentation excellente
- ✅ Facile à apprendre

---

## Bulma - Points Faibles

- ⚠️ Composants interactifs = JS custom
- ⚠️ Moins de composants que Bootstrap
- ⚠️ Communauté plus petite

---

## Bulma - Colonnes

```html
<div class="columns">
  <div class="column">Auto</div>
  <div class="column is-4">4/12</div>
  <div class="column is-8">8/12</div>
</div>
```

---

## Bulma - Responsive

```html
<div class="columns is-mobile">
  <div class="column is-half-mobile
              is-one-third-tablet
              is-one-quarter-desktop">
  </div>
</div>
```

---

## Bulma - Navbar

```html
<nav class="navbar is-primary">
  <div class="navbar-brand">
    <a class="navbar-item" href="#">Logo</a>
  </div>
  <div class="navbar-menu">
    <a class="navbar-item">Accueil</a>
  </div>
</nav>
```

---

## Bulma - Card

```html
<div class="card">
  <div class="card-image">
    <figure class="image is-4by3">
      <img src="image.jpg">
    </figure>
  </div>
  <div class="card-content">
    <p class="title is-4">Titre</p>
  </div>
</div>
```

---

## Bulma - Formulaire

```html
<div class="field">
  <label class="label">Email</label>
  <div class="control has-icons-left">
    <input class="input is-success" type="email">
  </div>
  <p class="help is-success">Email valide</p>
</div>
```

---

## Bulma - Boutons

```html
<div class="buttons">
  <button class="button is-primary">Primary</button>
  <button class="button is-link is-outlined">Outlined</button>
  <button class="button is-loading">Loading</button>
</div>
```

---

## Foundation - Présentation

- Créé par **ZURB**
- Orienté projets **enterprise**
- **XY Grid** avancé
- Accessibilité WCAG 2.0

```bash
npm install foundation-sites
```

---

## Foundation - XY Grid

```html
<div class="grid-container">
  <div class="grid-x grid-padding-x">
    <div class="cell small-12 medium-6 large-4">
      Responsive
    </div>
    <div class="cell auto">Auto</div>
  </div>
</div>
```

---

## CSS-in-JS : Styled Components

```jsx
import styled from 'styled-components';

const Button = styled.button`
  padding: 0.75rem 1.5rem;
  background: ${props => props.primary ? '#6366f1' : 'white'};
  border-radius: 0.5rem;
`;
```

---

## Styled Components - Usage

```jsx
<Button primary>Primary</Button>
<Button>Secondary</Button>
```

---

## CSS-in-JS : Emotion

```jsx
import { css } from '@emotion/react';

const buttonStyles = css`
  padding: 0.75rem;
  background: #6366f1;
  border-radius: 0.5rem;
`;
```

---

## Comparatif - Taille et JS

<center>

| Framework | Taille | JavaScript |
|-----------|--------|------------|
| Bootstrap | 152 KB | Inclus |
| Tailwind | ~10-30 KB* | Non |
| Bulma | 44 KB | Non |
| Foundation | 90 KB | Inclus |

</center>

---

## Comparatif - Approche

<center>

| Framework | Approche | Customisation |
|-----------|----------|---------------|
| Bootstrap | Components | Sass |
| Tailwind | Utility-first | Config JS |
| Bulma | Components | Sass |
| Foundation | Components | Sass |

</center>

---

## Quand utiliser Bootstrap ?

- Prototypes rapides
- Sites vitrines classiques
- Équipes mixtes
- Deadline serrée

---

## Quand utiliser Tailwind ?

- Designs uniques
- Design systems stricts
- Applications modernes
- Projets long terme

---

## Quand utiliser Bulma/Foundation ?

**Bulma** : Projets sans JS, sites statiques

**Foundation** : Projets enterprise, accessibilité

**CSS-in-JS** : Applications React/Vue

---

## Projet Final : Dashboard

### Objectif
Créer un **dashboard analytics** avec le framework de votre choix

---

## Projet Final : Éléments (1/2)

1. **Sidebar** : Navigation avec icônes
2. **Header** : Logo, recherche, profil
3. **Stats cards** : 4 cartes avec tendances
4. **Graphique** : Zone Chart.js

---

## Projet Final : Éléments (2/2)

5. **Tableau** : Données avec pagination
6. **Page Utilisateurs** : Liste et filtres
7. **Page Paramètres** : Formulaire
8. **Dark mode** : Toggle fonctionnel

---

## Critères d'Évaluation

<center>

| Critère | Points |
|---------|--------|
| Structure HTML | /10 |
| Maîtrise framework | /25 |
| Responsive design | /15 |
| Customisation | /15 |

</center>

---

## Critères d'Évaluation (suite)

<center>

| Critère | Points |
|---------|--------|
| UX/UI | /15 |
| Code quality | /10 |
| Optimisation | /10 |
| **Bonus** | +5 |

</center>

---

## Ressources - Documentation

- [Bootstrap](https://getbootstrap.com/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Bulma](https://bulma.io/documentation)
- [Foundation](https://get.foundation/sites/docs)

---

## Ressources - Outils

- [Tailwind Play](https://play.tailwindcss.com)
- [Tailwind UI](https://tailwindui.com)
- [DaisyUI](https://daisyui.com)
- [Heroicons](https://heroicons.com)

---

## Ressources - Apprentissage

- [CSS-Tricks](https://css-tricks.com)
- [Smashing Magazine](https://smashingmagazine.com)
- [Kevin Powell (YouTube)](https://youtube.com/kevinpowell)
