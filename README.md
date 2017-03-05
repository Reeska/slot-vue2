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

## Etape 3

Afin de permettre aux utilisateurs d'acheter leurs précieux livres il va falloir ajouter un panier.

Pour ce faire créer un composant `Basket` qui aura pour but de :
- stocker les livres ajoutés par les utilisateurs, 
- modifier la quantité pour chaque livre, 
- supprimer un livre du panier,
- calculer et rafraîchir le total à chaque modification.

Pour réaliser cette fonctionnalité, il pourrait être intéressant de créer un service `basket-service` qui 
servira à gérer ces différents cas. Il faudra aussi ajouter un bouton "Ajouter au panier" dans le composant `Book`.

Si vous avez terminé, ou pour les plus impatients, vous trouverez la suite et solution sur la [branche step-3](https://github.com/Reeska/slot-vue2/tree/step-3).

### Tips

#### Persistance

L'utilisation du `localStorage` améliorait l'expérience utilisateur en conservant les informations de sa commande
entre deux sessions (et rafraîchissement du navigateur).

Exemple d'utilisation :

> Pour sauvegarder
```javascript
window.localStorage.setItem('potier.commandLines', JSON.stringify(commandLines));
```

> Pour restaurer

```javascript
let commandLines = [];
const rawCommandLines = window.localStorage.getItem('potier.commandLines'); // retourne une String

if (rawCommandLines) {
  commandLines = JSON.parse(rawCommandLines);
}
```
