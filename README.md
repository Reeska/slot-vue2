# Hands-On Vue.js

- Benjamin Szatny [@MasterBnJ](https://twitter.com/MasterBnJ)
- Ludovic Ladeu
- Thomas Champion [@ReeskaFr](https://twitter.com/ReeskaFr)

## Synopsis

L'objectif de ce Hands-On est de mettre en pratique vos connaissances sur Vue.js en 
développant une application de commande de livre intitulé **Henri Potier**.

Cet exercice est découpé en 5 étapes afin d'introduire au fur et à mesure les concepts 
de Vue.js, et ainsi de construire l'application qui détrônera Amazon.

## Etape 2

Maintenant que nous avons un composant Book, il va nous falloir récupérer la vraie liste des livres que nous avons en stock et la présenter aux clients.

Pour ce faire il va falloir créer un composant `Books` qui affichera la liste des livres disponible depuis cet endpoint :

> http://henri-potier.xebia.fr/books

Pour les plus impatients, vous trouverez la solution sur la [branche step-2](https://github.com/Reeska/slot-vue2/tree/step-2).

## Installation

### Pérequis

Attention, pour fonctionner Vue.js requiert au moins **node v5**.

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev
```

Plus d'informations sur la très complète [documentation officielle](https://vuejs.org/v2/guide/).
