# Hands-On Vue.js

> [Accès à la présentation](https://docs.google.com/a/xebia.fr/presentation/d/1z3OnbRF8KcZCaJf7638-4XF4_H853x9aqcfIVGQJXlE/edit?usp=sharing)

- Benjamin Szatny [@MasterBnJ](https://twitter.com/MasterBnJ)
- Ludovic Ladeu
- Thomas Champion [@ReeskaFr](https://twitter.com/ReeskaFr)

## Installation

### Prérequis

Attention, pour fonctionner Vue.js requière au moins **node v5**.

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

## Etape 1

Cette première étape consiste à se familiariser avec la création de composants.
Pour ce faire, vous devez créer un composant `Book` qui aura la lourde tâche d'afficher les informations d'un livre.

Cette branche met à disposition un service `BookService` qui contient une unique opération `getBook` qui permet de récupérer les données suivantes :

```json
{
    "isbn": "c8fabf68-8374-48fe-a7ea-a00ccd07afff",
    "title": "Henri Potier à l'école des sorciers",
    "price": 35.0,
    "cover": "http://henri-potier.xebia.fr/hp0.jpg",
    "synopsis": [
        "Après la mort de ses parents (Lily et James Potter), Harry est recueilli par sa tante Pétunia (la sœur de Lily) et son oncle Vernon à l'âge d'un an. Ces derniers, animés depuis toujours d'une haine féroce envers les parents du garçon qu'ils qualifient de gens « bizarres », voire de « monstres », traitent froidement leur neveu et demeurent indifférents aux humiliations que leur fils Dudley lui fait subir. Harry ignore tout de l'histoire de ses parents, si ce n'est qu'ils ont été tués dans un accident de voiture",
        "Le jour des 11 ans de Harry, un demi-géant du nom de Rubeus Hagrid vient le chercher pour l’emmener à Poudlard, une école de sorcellerie, où il est inscrit depuis sa naissance et attendu pour la prochaine rentrée. Hagrid lui révèle alors qu’il a toujours été un sorcier, tout comme l'étaient ses parents, tués en réalité par le plus puissant mage noir du monde de la sorcellerie, Voldemort (surnommé « Celui-Dont-On-Ne-Doit-Pas-Prononcer-Le-Nom »), après qu'ils ont refusé de se joindre à lui. Ce serait Harry lui-même, alors qu'il n'était encore qu'un bébé, qui aurait fait ricocher le sortilège que Voldemort lui destinait, neutralisant ses pouvoirs et le réduisant à l'état de créature quasi-insignifiante. Le fait d'avoir vécu son enfance chez son oncle et sa tante dépourvus de pouvoirs magiques lui a donc permis de grandir à l'abri de la notoriété qu'il a dans le monde des sorciers.",
        "Harry entre donc à l’école de Poudlard, dirigée par le professeur Albus Dumbledore. Il est envoyé dans la maison Gryffondor par le « choixpeau ». Il y fait la connaissance de Ron Weasley et Hermione Granger, qui deviendront ses complices. Par ailleurs, Harry intègre rapidement l'équipe de Quidditch de sa maison, un sport collectif très populaire chez les sorciers se pratiquant sur des balais volants. Harry connaît probablement la plus heureuse année de sa vie, mais également la plus périlleuse, car Voldemort n'a pas totalement disparu et semble bien décidé à reprendre forme humaine."
    ]
}
```

### Instructions

#### Création du composant Book

* Créer le répertoire *components* qui contiendra vos composants
* Dans ce répertoire, créer le fichier *book.vue* 
* Ce fichier respecter la structure d'un fichier Vue avec une balise template, style, et script
* Dans la création de votre composant dans la partie **script**, déclarer une propriété `book` qui en sera l'input : `props: ['book']`
* La propriété book contiendra les informations du livre, dans la partie **template**, il est alors possible d'afficher le titre : `{{ book.title }}`

#### Utilisation du composant Book

* Dans le composant App déclarer le composant Book que vous allez utilisé, pour ce faire dans la partie **script** : 
  * importer le composant Book : `import Book from './components/book';`
  * ajouter au composant App : `components: { Book }`
* Pour récupérer les informations du livre, importer le service `book-service` : `import BookService from './services/book-service';`
* Faire appel à la méthode getBook pour récupérer les informations du livre à assigner à la propriété `book` du composant `App` :
```javascript
  data () {
    return {
      book: BookService.getBook()
    };
  }
```
* Utiliser le composant `Book` dans la partie **template** 

A vous de jouer !

Pour les plus impatients, vous trouverez la solution sur la [branche step-1](https://github.com/Reeska/slot-vue2/tree/step-1).
