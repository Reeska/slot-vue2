# Hands-On Vue.js

> [Accès à la présentation](https://docs.google.com/a/xebia.fr/presentation/d/1z3OnbRF8KcZCaJf7638-4XF4_H853x9aqcfIVGQJXlE/edit?usp=sharing)

- Benjamin Szatny [@MasterBnJ](https://twitter.com/MasterBnJ)
- Ludovic Ladeu
- Thomas Champion [@ReeskaFr](https://twitter.com/ReeskaFr)

## Synopsis

L'objectif de ce Hands-On est de mettre en pratique vos connaissances sur Vue.js en 
développant une application de commande de livre intitulé **Henri Potier**.

Cet exercice est découpé en 5 étapes afin d'introduire au fur et à mesure les concepts 
de Vue.js, et ainsi de construire l'application qui détrônera Amazon.

## Etape 4

Actuellement les composants `Books` et `Baskets` sont sur la même page, ce qui n'est pas très user-friendly.
Nous proposons donc d'en faire 2 pages séparées. 

Pour ce faire utiliser `VueRouter` et définir une route par composant dans le fichier `main.js`.

Pour les plus impatients, vous trouverez la solution sur la [branche step-4](https://github.com/Reeska/slot-vue2/tree/step-4).

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
