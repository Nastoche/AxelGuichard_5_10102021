# Memo des nouvelles choses JS apprises

[{ id: 1 }, { id: 2}, { id: 3}]; ==> array

array.find ===> récupérer le premier élément de ta liste qui valide la condition que tu lui donne
const x = array.find(element => element.id >= 2) ===> { id: 2 };
array.find(element => element.id > 4) ===> undefined

array.filter ===> récupére l'ensemble des éléments de ta liste qui valide la condition
const y = array.filter(element => element.id >= 2) ===> [{ id: 2 }, { id: 3 }];
array.filter(element => element.id > 4) ===> undefined

array.map ===> recréé un tableau à partir de ton tableau existant
const result = array.map(element => `Mon id c'est ${element.id}`); => passer 3 fois, et pour chacun il insère dans le nouveau ce return
console.log(result) => ['Mon id c'est 1', 'Mon id c'est 2', 'Mon id c'est 3'];

array.forEach ===> boucle juste sur tes éléments
array.forEach(element => {
..... ce que tu veux
});

array.some => vérifie si au moins un des éléments du tableau valide la condition ==> TRUE OU FALSE
array.every =>

1. T'as besoin que de l'élément
   array.forEach(element => {});
   array.map(element => {});

2. Besoin de l'élement mais aussi de l'index
   array.forEach((element, index) => {
   console.log(index); // 0, 1, 2;
   });
   array.map((element, index) => {
   console.log(index); // 0, 1, 2;
   })

## Fonctions fléchées

array.filter(element => element.id > 2); ===> array.filter(element => { return element.id > 2 });
const x = array.filter(element =>
const total = x + y \* 2 / 5;
.....
.....
return total === element.price; // Si c'est true, je te l'ajoute à ton nouveau tableau "x", sinon ciao
);

const maFonction = (id) => id < 2 && id > 0; // fonction qui return id < 2; ES6
function maFonction(id) { // 0
return id < 2;
}
const maFonction = (id) => { // Ecriture EcmaScript 6
return id < 2;
};

array.find // est-ce qu'il existe pour l'id et la couleur ?
si oui =>
array.map(element => {
if (element.id === id) {
element.qty += pQty.innerTexta-
}
return element;
})
si non =>
array push

array.unshift() -> permet d'ajouter un objet au début d'un tableau plutôt qu'à la fin
