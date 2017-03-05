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

## Etape 4

Pour finaliser notre application nous souhaitons ajouter une page permettant de saisir l'adresse de livraison ainsi qu'une page de confirmation.

### Saisie de l'adresse de livraison

Créer un composant `Order` qui contiendra un formulaire avec les champs suivants :
- Nom
- E-mail
- Numéro de rue
- Nom de rue
- Ville

Ainsi qu'un bouton **Confirm** qui aura pour action de rediriger vers la page de confirmation en lui transmettant les informations de livraison.
Pour la redirection utiliser la méthode *programmatique*.

Nous souhaitons aussi vérifier que le champ **Numéro de rue** est bien un entier avant qu'activer le bouton **Confirm**.

En fin, ajouter un bouton **Order** sur le composant `Basket` qui redirigera vers ce nouveau composant `Order`.
Pour ça utiliser la méthode *déclarative*.

### Ecran de confirmation de commande

Créer un composant `Checkout` qui aura pour but d'afficher les informations de livraison précédemment saisies.

Pour les plus impatients, vous trouverez la solution sur la [branche step-5](https://github.com/Reeska/slot-vue2/tree/step-5).
