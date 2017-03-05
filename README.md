# Hands-On Vue.js

> [Accès à la présentation](https://docs.google.com/a/xebia.fr/presentation/d/1z3OnbRF8KcZCaJf7638-4XF4_H853x9aqcfIVGQJXlE/edit?usp=sharing)

- Benjamin Szatny [@MasterBnJ](https://twitter.com/MasterBnJ)
- Ludovic Ladeu
- Thomas Champion [@ReeskaFr](https://twitter.com/ReeskaFr)

## Installation

### Prérequis

Attention, pour fonctionner Vue.js requiert au moins **node v5**.

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev
```

Plus d'informations sur la très complète [documentation officielle](https://vuejs.org/v2/guide/).

## Synopsis

L'objectif de ce Hands-On est de mettre en pratique vos connaissances sur Vue.js en 
développant une application de commande de livre intitulé **Henri Potier**.

Cet exercice est découpé en 5 étapes afin d'introduire au fur et à mesure les concepts 
de Vue.js, et ainsi de construire l'application qui détrônera Amazon.

## Etape 2

Maintenant que nous avons un composant Book, il va nous falloir récupérer la vraie liste des livres que nous avons en stock et la présenter aux clients.

Il va falloir créer un composant `Books` qui affichera la liste des livres disponible depuis cet endpoint :

> http://henri-potier.xebia.fr/books

Pour ce faire :
 
* Ajouter une opération `getBooks` dans le `book-service` qui va utiliser la fonction HTML5 `window.fetch` pour récupérer les données en retournant une Promesse :
```
  window.fetch('url').then(data => data.json())
```

* Dans le composant Books
  * Ajouter une propriété `books` initialisée avec un tableau vide 
  * Importer le service `book-service`
  * Ajouter la fonction `created` dans laquelle vous aller appeler la fonction `getBooks` et valoriser la propriété `books` à la résolution de la Promesse
  * Utiliser `v-for` pour afficher la liste des livres

Si vous avez terminé, ou pour les plus impatients, vous trouverez la suite et solution sur la [branche step-2](https://github.com/Reeska/slot-vue2/tree/step-2).
