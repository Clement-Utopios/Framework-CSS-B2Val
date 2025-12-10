---
marp: true
title: Frameworks CSS
theme: utopios
client: 
paginate: true
author: Clément Roelens
header: "![h:60px](https://utopios-marp-assets.s3.eu-west-3.amazonaws.com/logo_blanc.svg)"
footer: "Utopios® All rights reserved"
---

<style>
p, 
pre {
  margin: 0.8em 0 0;
}

section {
 padding-top : 80px;
}

</style>

<!-- _class: lead -->
<!-- _paginate: false -->


# Frameworks CSS

---

## Un framework, pourquoi ?

- Pour ne pas réinventer la roue à chaque fois
- Pour bénéficier de classes implémentant déjà les bonnes pratiques, notamment le responsive design
- Apporte des idées de styles qu'on saurait coder mais auxquels on n'aurait pas forcément pensé

---

<!-- _class: lead -->
<!-- _paginate: false -->

## Bootstrap

---

## Bootstrap

- Créé par Twitter en 2011
- Framework CSS le plus populaire, et de un des projets les plus populaires de GitHub
- Bootstrap 5 depuis 2021 (attentin aux recherches Google qui mènent vers des anciennes versions de la doc)

---

## Installation

- Installation via CDN, téléchargement, ou `npm i Bootstrap`
- En React, on ajoute en plus cet import à la racine

```js
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
```

---

## Les bases

Une fois Bootstrap installé, on va simplement ajouter à nos éléments HTML le nom des **classes** que l'on veut utiliser pour les styliser

```html
<div class="row row-cols-2 my-3">
    <p class="col bg-primary border border-dark">Colonne 1</p>
    <p class="col bg-primary border border-dark">Colonne 2</p>
    <p class="col bg-primary border border-dark">Colonne 3</p>
</div>
```

---

## Les breakpoints


Bootstrap gère le responsive design avec des **breakpoints**

<center>

| Breakpoint | Identifiant | Largeur |
|------------|--------|-----------|
| Extra small |  | < 576px |
| Small | `sm` | ≥ 576px |
| Medium | `md` | ≥ 768px |
| Large | `lg` | ≥ 992px |
| Extra-large | `xl` | ≥1200px |
| Extra-extra-large | `xxl` | ≥1400px |

</center>

À chaque breakpoint est associée une **media-query**

---

## Mobile-first


- Bonne pratique : penser son design d'abord pour le mobile
- Par défaut, tout style est appliqué à la taille d'écran minimum, et jusqu'à ce qu'un breakpoint soit rencontré
- Les breakpoints peuvent être appliqués sur beaucoup de classes

```html
<div class="m-5 text-center text-md-start">
```

---

<style scoped>

li {
  font-size:0.95em;
}

</style>

## Container

- Une classe englobante, qui est souvent mise sur le main pour contenir tout le layout, mais qui peut également être utilisée dans d'autres cas
- De base, le `container` crée des marges de chaque côté, mais celles-ci peuvent être réduites via des breakpoints

```html
<main class="container">
<!-- Marges tout le temps -->
<main class="container-md">
<!-- Marge réduite si l'écran est petit ou très petit, sinon marges normales -->
<main class="container-fluid">
<!-- Marges réduites dès le très petit -->
```

---

## Le grid system

- Le layout se base globalement sur un système de grille, qui malgré son nom utilise des flexbox
- Elle se base sur un `row` qui par divise par défaut l'espace en 12 `col` qui vont automatiquement ajuster leur taille
- Une grille doit **obligatoirement** être dans un `container`

```html
<div class="row">
    <p class="col">Element 1</p>
    <p class="col">Element 2</p>
    <p class="col">Element 3</p>
</div>
```

---

## Le grid system

On peut également indiquer manuellement le nombre d'unités que l'on veut pour une `col`

```html
<div class="row">
    <p class="col">Element 1</p>
    <p class="col-8">Element 2</p>
    <p class="col">Element 3</p>
</div>
```

---

## Le grid system

Une `row` peut être définie avec un nombre de colonnes précise (de 1 à 6). Dans ce cas, chaque colonne prend uniquement une unité de place

```html
<div class="row row-cols-2">
    <p class="col">Element 1</p>
    <p class="col">Element 2</p>
    <p class="col">Element 3</p>
</div>
```

---

## Le grid system

Une grille peut en contenir une autre

```html
<div class="row">
    <p class="col">Ligne 1 Colonne 1</p>
    <div class="col">
        <p>Ligne 1 Colonne 2</p>
        <div class="row">
            <p class="col">Ligne 2 Colonne 1 </p>
            <p class="col">Ligne 2 Colonne 2 </p>
        </div>
    </div>
    <p class="col">Ligne 1 Colonne 3</p>
</div>
```

---

## L'espacement

- Plusieurs classes : `m` (margin), `p` (padding) et `g` (gutter)
- Valeurs allant de 0 à 5 sur chaque classe
- Possibilité d'appliquer à seulement un axe (x/y) ou une direction (s pour start, e pour end, t pour top et b pour bottom)

```html
<div class="row p-3">
    <p class="col mx-2">Element 1</p>
    <p class="col mx-2">Element 2</p>
    <p class="col mx-2">Element 3</p>
</div>
```

---

## L'espacement

On peut également utiliser `gap` sur une flexbox ou une grid pour espacer tous ses enfants
Ainsi le comportement de la slide précédente est proche de celui-ci


```html
<div class="row p-3 gap-2">
    <p class="col">Element 1</p>
    <p class="col">Element 2</p>
    <p class="col">Element 3</p>
</div>
```

Attention, la valeur d'espacement n'est pas la même

---

## Les gutters

Les gutters s'appliquent sur la ligne dans le grid system. Elles sont une sorte de padding compensé par du margin négatif pour tous les éléments englobés

```html
<div class="row g-5">
    <p class="col">Très long texte inséré dans l'élément 1</p>
    <p class="col">Très long texte inséré dans l'élément 2</p>
    <p class="col">Très long texte inséré dans l'élément 3</p>
</div>
```

---

## Flexbox

Pour créer une Flexbox, on utilise `d-flex` (d = display). On a ensuite nos propriétés habituelles: 

- `justify-content`
- `align-content`
- `align-items`
- `flex-wrap`
- etc

---

## Flexbox

```html
<div class="d-flex justify-content-around p-3">
    <p>Element 1</p>
    <p>Element 2</p>
    <p>Element 3</p>
</div>
```

---

<style scoped>

p {
  font-size:0.90em;
}

</style>

## Les couleurs

Bootstrap définit 8 couleurs personnalisées, utilisables facilement pour colorer du texte, un fond, des bordures...

![alt text](image.png)

---

## Les couleurs

On peut l'ajouter à `text` pour colorer le texte, à `bg` pour colorer le fond, à `text-bg` pour colorer le fond également mais que Bootstrap choisisse automatiquement une couleur de texte contrasté, ou à `border` pour colorer une bordure par exemple

```html
<div class="text-primary">Texte bleu</div>
<div class="bg-primary">Fond bleu</div>
<div class="text-bg-primary">Fond bleu et texte adapté</div>
<div class="border border-primary">Bordure bleue</div>
```

---

## Taille des éléments

- Pour définir la taille d'un élément, on peut se référer au pourcentage du parent avec `w` et `h`, de 25 en 25
- On peut également utiliser `vw` et `vh` pour le pourcentage de l'écran, toujours de 25 en 25
- On peut également utiliser min et max en préfixe sur nos classes, et auto comme valeur

```html
<div class="bg-primary w-25">-</div>
<div class="bg-primary maxw-50">-</div>
```

---

## Le texte

- Les éléments `h1`, `h2` etc ont une taille par défaut dans Bootstrap
- On peut également appliquer la classe `fs` (font-size) avec des valeurs de 1 (plus grand) à 5 (plus petit)
- Pour du plus grand texte, on a aussi la classe `display` marchant de la même façon

```html
<p class="display-1">Très grand texte</p>
<p>Texte normal</p>
<p class="fs-5">Texte légèrement grand</p>
```

---

## Le texte

- On peut facilement aligner du texte, le mettre en **gras**, en *italique* ou même en MAJUSCULE

```html
<p class="text-center">Je suis centré</p>
<p class="text-end">Je suis à la fin</p>
<p class="fw-bold">Je suis gras</p>
<p class="text-uppercase">Je suis en majuscule</p>
```

---

## Généralités

- Beaucoup de propriétés sont transparentes : `text-center` pour aligner le texte au centre, `border` pour ajouter une bordure, `border-[color]` pour la colorer, `text-[color]` pour colorer du texte...
- Attention, il faut souvent d'abord entrer une classe globale puis une classe précisant le comportement (`row` puis `row-cols-[nombre]` pour limiter le nombre de colonnes, ou `border` puis `border-danger` pour déclarer une bordure rouge par exemple)

---

## Les boutons

La classe `btn` permet de styliser un élément comme un bouton. On peut rajouter une couleur en ajoutant une seconde classe `btn-[color]`, ou limiter la couleur au cadre et au texte avec `btn-outline-[color]`

```html
<button class="btn">Bouton basique</button>
<a class="btn btn-primary">Bouton bleu</a>
<input type="submit" class="btn btn-outline-success" value= "Bouton à cadre vert">
```

---

## Les tableaux

La classe `table` permet de styliser un tableau

```html
<table class="table">
<!-- ... -->
</table>
```

On peut ajouter plusieurs options comme créer un tableau à bandes avec `table-striped`, rajouter une couleur (possible également sur une seule ligne) avec `table-[color]` ou rajouter des bords avec `table-bordered`

---

<style scoped>

p {
  font-size:0.90em;
}

</style>

## Les listes

On peut créer une liste avec `list-group` puis ajouter `list-group-item` sur chaque élément. 

```html
<ul class="list-group">
    <li class="list-group-item">Element 1</li>
    <li class="list-group-item">Element 2</li>
    <li class="list-group-item">Element 3</li>
</ul>
```

On peut ajouter une numérotation avec `list-group-number`, l'afficher en horizontal avec `list-group-horizontal` ou encore supprimer les bords avec `list-group-flush`

---

## Les formulaires

Dans un form, on va typer d'un côté les label avec `form-label` et de l'autre les input avec `form-control`. On peut également ajouter du texte avec `form-text`.

```html
<form class="d-flex flex-column align-items-center border border-dark rounded w-25 mx-auto my-4 p-4">
    <div class="mb-2">
        <label for="email" class="form-label">Adresse e-mail</label>
        <input type="email" class="form-control" name="email">
    </div>
    <div class="mb-2">
        <label for="password" class="form-label">Mot de passe</label>
        <input type="password" class="form-control" name="password">
    </div>
    <input type="submit" value="Valider" class="btn btn-outline-dark mt-3">
</form>
```

---

## Les formulaires

On peut intégrer le label à l'input avec `form-floating`. Dans ce cas, on doit obligatoirement mettre un placeholder à notre input, et le déclarer avant son label

```html
<div class="mb-2 form-floating">
    <input type="email" class="form-control" name="email" placeholder="">
    <label for="email" class="form-label">Adresse e-mail</label>
</div>
```

---

## Les formulaires

Les possibilités de formulaires sont foisonnantes, et souvent on ajoutera simplement le type d'input particulier au suffix `form` (`form-check`, `form-select`, `form-range`...)

---

## Les cards

Les cards sont des conteneurs supportant header, footer, image, titre et corps... Ils représente en quelque sorte l'affichage d'un objet avec toutes ses informations.

```html
<div class="card w-25">
    <img src="fraise.jpeg" alt="Image de fraises" class="card-img-top">
    <h3 class="card-header">La fraise</h3>
    <div class="card-body">
        <h5 class="card-title">Le meilleur des fruits</h5>
        <p class="card-text">Sa chair délicieuse peut être consommée nature tout comme dans quantité de recettes
        </p>
    </div>
    <div class="card-footer">À consommer sans modération</div>
</div>
```

---

## Les navbars

- Bootstrap met à disposition une navbar responsive, qui va s'étendre verticalement sur un petit écran et s'afficher horizontalement sur un grand écran
- C'est un composant plus complexe avec beaucoup de classes, d'éléments et de propriétés différentes

---

<style scoped>

code {
    font-size:0.35em;
}

</style>

## Les navbars

```html
<nav class="navbar navbar-expand-lg border rounded">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">
            <img src="ecole-it.png" alt="" height="35">
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Features</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Pricing</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link disabled" aria-disabled="true">Disabled</a>
                </li>
            </ul>
        </div>
    </div>
</nav>
```

---

<style scoped>
    p, li {
        font-size:0.91em;
    }
</style>

## Les icônes

- Bootstrap fournit également des icônes utilisables en plaçant les classes appropriées dans un élément `i`
- Utiliser les icônes nécessite d'utiliser un autre CDN/d'installer un autre package

```html
<i class="bi bi-trash3"></i>
```

On peut appliquer les autres classes sur nos icônes, notamment les couleurs

```html
<i class="bi bi-trash3 text-primary"></i>
```

---

## Personnalisation

- Les options offertes par Bootstrap sont pratiques mais limitées
- Si on veut modifier le comportement des classes Bootstrap dans nos projets, par exemple modifier les variables de couleur (`primary`, `secondary`, `success` etc) on doit utiliser **Sass**

---

## Sass

Sass (**S**yntaxically **a**wesome **s**tyle**s**heets) est un préprocesseur CSS : il ajoute des fonctionnalités n'existant pas en CSS (mixins, boucles, tests conditionnels) et est ensuite compilé en du CSS.
Pour l'utiliser, il est nécessaire de l'installer. Et on ne peut plus utiliser le CDN de Bootstrap, on doit utiliser le package node ou avoir les fichiers non-compilés en local

```sh
npm i -g sass
npm i bootstrap
``` 

---

## Sass

On crée ensuite un fichier .scss dans lequel on va redéfinir nos variables, puis importer le Sass de Bootstrap

```scss
$primary:#000000;

@import "./node_modules/bootstrap/scss/bootstrap";
```

Puis, on doit compiler notre fichier, et insérer un `link` dans notre HTML (et supprimer celui du CDN)

---

## Sass

Pour compiler, on utilise cette commande

```sh
sass nom.scss nom.css
```

Comme pour Typescript ou Node, on peut utiliser `--watch` pour recompiler automatiquement à chaque modification

```sh
sass --watch nom.scss nom.css
```

---

<!-- _class: lead -->
<!-- _paginate: false -->

## Tailwind

---

## Tailwind

Tailwind a une philosophie radicalement différente de Bootstrap : il ne fournit quasiment aucun composant ou style pré-définie, mais va plutot nous laisser personnaliser nos éléments à outrance.

C'est l'approche utility-first : chaque classe n'a qu'un seul but, contrairement à Bootstrap qui est dit component-based

<br>

- Avantage : CSS minimal et design précis
- Inconvénient : HTML très verbeux et apprentissage plus difficile

---

## Installation

Tout comme Bootstrap, Tailwind peut soit être utilisé avec un CDN, soit installé via npm

On verra notamment deux méthodes pour installer Tailwind

Dans tous les cas, on devra importer Tailwind dans un fichier CSS racine

```css
@import "tailwindcss";
```

---

## Installation

Avec n'importe quel projet Node

```sh
npm install tailwindcss @tailwindcss/cli
```

On doit ensuite build ce fichier, et référencé le fichier build dans notre HTML

```sh
npx @tailwindcss/cli -i ./input.css -o ./output.css --watch
```

---

<style scoped>
    p, li {
        font-size:0.85em;
    }
    code {
        font-size:0.65em;
    }
</style>

## Installation

Avec Vite

On commence par créer un projet Vite

```sh
npm create vite@latest nom-projet
cd nom-projet
npm install tailwindcss @tailwindcss/vite
```

Puis ajouter dans `vite.config.ts`

```sh
import tailwindcss from '@tailwindcss/vite';
```
Et `tailwindcss()` dans `plugins`

---

## Généralités

Tailwind partage de nombreux noms de classes avec Bootstrap:

- `m` pour margin (`ms`, `mx`, `mt` etc) et `p` pour padding
- `text-center` ou `text-right` pour positionner le texte
- `bg-` ou `text-` pour indiquer une couleur de fond ou de texte
- `w` pour width et `h` pour height pour les tailles
- `border` pour créer une bordure
- etc

---

## Généralités

La différence avec Bootstrap, c'est les possibilités offertes

- Pas de limite sur les valeurs de margin, de padding ou de taille
- Des couleur très détaillés (sur le modèle `nom-intensité`)
- De nombreuses valeurs de taille de texte
- Plusieurs types d'arrondis pour les bordures
- etc

---

## Espacement

- Le margin,le padding et le gap n'ont pas de limite de valeur dans Tailwind. On peut donc positionner nos éléments bien plus finement.
- Contrairement à Bootstrap, les valeurs négatives de margin sont activées par défaut, et utilisables simplement en rajoutant un - devant la classe

```html
<p class="-ms-10">Hello world</p>
<!-- Marge négative -->
```

---

## Espacement

- On peut utiliser l'unité pixel plutôt que l'unité de Tailwind avec 

```html
<p class="ms-[10px]">Hello world</p>
```

- On peut également utiliser les propriétés `ml` pour margin-left et `mr` pour margin-right
- Enfin, on peut définir un espacement sur axe commun aux éléments englobés avec `space`

```html
<div class="flex justify-center space-x-20">
    <p>Du texte</p>
    <p>Du texte</p>
    <p>Du texte</p>
</div>
``` 

---

## Les tailles

On peut régler la taille avec `w-` et `h-` en passant des valeurs absolus. On peut aussi passer `w-full` ou une fraction `w-1/2`. Il y a également un certain nombre de tailles prédéfinies, de `w-3xs` jusqu'à `w-7xl`. Enfin, on peut utiliser `size-` pour donner la même valeur à la hauteur et à la largeur.

```html
<p class="mx-auto w-2/3">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam velit arcu, 
    sagittis vitae velit id, finibus scelerisque neque. Vivamus vulputate scelerisque sodales.  
</p>
```

---

<style scoped>
p {
    font-size:0.95em;
}
</style>

## Couleurs

Tailwind propose une vingtaine de couleurs par défaut

![alt text](<Screenshot 2025-12-10 at 10-39-51 Colors - Core concepts - Tailwind CSS.png>)

---

## Couleurs

Les couleurs sont applicables sur le fond, le texte, les bordures, les ombres, les décorations...

```html
<p class="underline decoration-red-500">Hello world</p>
```

L'opacité se contrôle en ajoutant `/` puis la valeur d'opacité désirée

```html
<p class="underline decoration-red-500/20">Hello world</p>
```

On peut également utiliser `white` et `black` comme valeur de couleur

---

## Typographie

- La classe `text-` permet à la fois de colorer, aligner et contrôler la taille du texte

```html
<p class="text-center text-red-500 text-xl">Hello world</p>
```

- Il y a 13 valeurs de taille de texte par défaut, de `xs` à `9xl` 
- Comme pour l'espacement, on peut aussi indiquer une valeur en pixel avec `text-[2px]`

---

## Typographie

Quelques autres classes :

- `italic`
- `font-bold`
- `uppercase`
- `underline`
- `font-serif`
- etc

---

## Variants

Un variant est une condition à l'application d'une classe. Cela peut être un `hover`, un `focus`, la sélection du mode `dark`, mais aussi l'attribut `required`, `read-only` mais aussi `odd` et `even` quand vous voulez cibler un enfant pair/impair

```html
<p class="rounded-md px-5 py-2
        bg-blue-500 text-white 
        cursor-pointer hover:bg-blue-600">
    Hello world
    </p>
```

---

## Variants

Le responsive design se fait aussi via les variants. Les breakpoints sont assez proches de ceux de Bootstrap

<center>

| Breakpoint | Identifiant | Largeur |
|------------|--------|-----------|
| Extra-small |  | < 640px |
| Small | `sm` | ≥ 640px |
| Medium | `md` | ≥ 768px |
| Large | `lg` | ≥ 1024px |
| Extra-large | `xl` | ≥1280px |
| Extra-extra-large | `2xl` | ≥1536px |

</center>

---

## Variants

```html
<p class="
    text-xs
    sm:text-base
    md:text-lg
    lg:text-2xl
    xl:text-4xl
    2xl:text-6xl
">Hello world</p>
```

---

## Variants

On peut aussi spécifier un range de breakpoints avec `:max-`. Ainsi on veut avoir un comportement spécifique seulement entre deux breakpoints

```html
<p class="md:max-lg:underline">Hello world</p>
<!-- Texte souligné pour un écran moyen ou grand -->
 <!-- Texte nus pour les écrnas plus petits ou plus grands -->
```

---

## Variants

Comme les autres variants, les breakpoints sont utilisables sur **toutes** les classes de Tailwind, toujours avec la même syntaxe. Ils sont également combinables si on veut des conditions plus précises

```html
<p class="md:max-lg:hover:underline">Hello world</p>
<!-- Texte souligné seulement quand l'écran est moyen ou grand ET que la souris est dessus -->
```

--- 

## Personnalisation

On peut personnaliser Tailwind en créant ses propres variables de thème, par exemple de couleur, en respectant la syntaxe Tailwind et les plaçant dans le fichier CSS racine

```css
@import "tailwindcss";
@theme {  
    --color-mint-500: oklch(0.72 0.11 178);
    --text-godzilla: 200px;
    }
```

---

<style scoped>

p {
    font-size:0.85em;
}

</style>

## Personnalisation

Les variables de thèmes sont très utiles pour par exemple définir des polices ou des couleurs spécifiques à un projet, mais elles peuvent aussi permettre de créer de nouveaux breakpoints personnalisés

```css
@theme {
    --breakpoint-xxs: 400px;
}
```

Ce breakpoint sera ensuite utilisable comme n'importe quel autre breakpoint

```html
<p class="text-md xxs:text-xl">Hello world</p>
```

---

## Personnalisation

On peut aussi appliquer des styles par défaut à certains éléments dans notre projet avec `@layer base`

```css
@layer base {
    h1 {
        color: green;
    }
    p {
        color:blue;
    }
}
```

---

## Personnalisation

`@layer` permet aussi de se créer des classes totalement personnalisée, sur lesquelles on pourra toujours appliquer des utilitaires de Tailwind qui écraseront les valeurs par défaut

```css
@layer components {  
    .card {    
        background-color: var(--color-white);    
        border-radius: var(--radius-lg);    
        padding: --spacing(6);    
        box-shadow: var(--shadow-xl); 
        }
    }
```

---

<!-- _class: lead -->
<!-- _paginate: false -->

## Purge CSS

---

## Purge CSS

Purge CSS est un outil permettant de supprimer le CSS non-utilisé d'un projet afin d'avoir à la compilation des fichiers CSS plus petits.

PurgeCSS peut s'utiliser avec PostCSS ou Next.js, mais également de manière indépendante. Elle s'installe via npm.

```sh
npm i -g purgecss
```

---

## PurgeCSS

On va ensuite utiliser cette commande pour produire un fichier purgé

```sh
purgecss --css css-a-purger.css --content html-a-analyser.html  --output chemin-fichier-final
```

---

## PurgeCSS

Tailwind met nativement en oeuvre des mécanismes de PurgeCSS