# Gestion de l'état dans React

La librairie React permet de développer des pages web en séparant leur contenu en plusieurs petits éléments : _Components_. Ces components doivent parfois communiquer ensemble pour partager des données. Lorsque les données sont persistées et modifiées durant la durée de vie de la page, on parle plutôt d'un état.

La gestion de l'état dans une application React peut se faire de plusieurs manières différentes. Ce projet illustre différents exemples allant de l'approche la plus simple jusqu'à l'utilisation des patrons plus avancés comme SAM (_Station Action Model_) et des notions mathématiques de _reducer_.

# Exemple de gestionnaire de cours

Les différents exemples se basent sur le même projet de base : un gestionnaire d'une liste de cours.

Le component [ClassInput](./src/ClassInput.jsx) permet de saisir un sigle de cours et l'ajout à la liste des cours en générant un nombre de crédits aléatoires. 

Cette liste est affichée dans le component [ClassChoices](./src/ClassChoices.jsx). Un clic sur une des entrées de la liste retire celle-ci et met à jour la liste.

Finalement, le nombre de cours dans la liste est affiché dans le component [ClassCounter](./src/ClassCounter.jsx). Ce nombre est mis à jour à chaque manipulation de la liste.

# Approche de base par propriétées

La branche [main](https://github.com/LOG2440/react_classManager/tree/main) contient l'implémentation d'un gestionnaire de cours dont l'état est sauvegardé dans le component parent au plus haut niveau: [App](./src/App.jsx). L'information est passée à ses enfants à travers des _propriétés_ . La manipulation de l'état est possible à travers 2 méthodes dans _App_ qui sont passés en référence aux componsantes enfants qui en on besoin.

Cette approche a l'avantage de découpler les components enfants de leur parent, mais n'est pas bien adaptée pour des arborescences profondes, surtout si les components intermédiaires se retrouvent a recevoir des propriétés qu'ils n'utilisent pas et ne font que passer plus bas dans l'arbre. Par exemple, si on voulait rendre `ClassChoices` enfant de `ClassCounter`, la propriété `classModifier` se retrouverait passée à `ClassCounter` sans que ce component ait à s'en servir.

# Approche par Contexte

La branche [useContext](https://github.com/LOG2440/react_classManager/tree/use_state) contient l'implémentation de la même application, mais en utilisant le _hook_ de React : `useContext` où l'information est gérée par un _contexte_ partagé. 

Un Contexte est un conteneur de données (état) qui sont rendues disponibles à travers un attribut spécial fournisseur (`Provider`) et sa propriété `value`. Le fournisseur est un component React et dont tous les enfants/descendants ont accès au contenu de son contexte.

```jsx
<ClassContext.Provider value={{ classes, setClasses, deleteClass, addClass }}>
    {children}
</ClassContext.Provider>
```

Le contexte est accédé par le hook `useContext` dans les components enfants qui peuvent accéder à une ou plusieurs variables de l'état :
```jsx
const { classes, deleteClass } = useContext(ClassContext);
```

Contrairement au passage par propriétés, le Contexte permet aux components d'accéder à des éléments plus haut dans l'arborescence sans avoir à passer des propriétés à travers des couches intermédiaires. Cette approche augmente cependant le couplage puisqu'un component doit obligatoirement être enfant du fournisseur du contexte accédé pour y avoir accès.

# Utilisation de Reducer

La branche [useReducer](https://github.com/LOG2440/react_classManager/tree/useReducer) contient l'implémentation de la même application, mais en utilisant le _hook_ de React : `useReducer` où l'information est gérée par un _contexte_ partagé et la logique de traitement est gérée par une fonction _reducer_. 

L'utilistion d'une fonction reducer permet la mise en place une variante du patron SAM (_State Action Model_). Dans ce patron, la gestion d'un état (ou plusieurs) a lieu à 1 seule place : le modèle. Ce modèle peut accepte des actions de l'extérieur qui sont évaluées et, si acceptées, traitées dans le modèle pour modifier l'état. Par la suite, le nouveau état est retourné et synchronisé dans la vue par React.

Ici, la fonction reducer joue le rôle de modèle et gestionnaire de l'état :
```js
export default function reducer(state, action) { 
    switch (action.type) {
        ...
        default:
            return state;
    }
}
```

Le fournisseur expose l'état et une fonction spéciale `dispatch` qui permet d'envoyer des actions :
```jsx
/// Configuration dans le fournisseur
const [state, dispatch] = useReducer(reducer, { classes: CLASSES });

// Accès et utilisation dans le component
const { state, dispatch } = useContext(ClassContext);
...
{state.classes.map((item, i) => {...} }
...
onClick={() => dispatch({ type: ACTIONS.DELETE, payload: item })}
```

# Utilisation  de contextes séparés

Dans notre exemple, le contexte contient 2 valeurs : l'état (`state`) et la fonction d'envoi d'actions (`dispatch`). Une des particularités d'un contexte est que chaque component qui l'accède doit être redessiné (_rerender_) si la valeur du contexte change.

Ceci est vrai même si le component utlise seulement `dispatch` et n'est pas affecté par le changement de `state`. C'est le cas de `ClassInput` qui se retrouvé redessiné à chaque fois que `state` change, même si la variable n'est jamais utilisée.

Cet enjeu a un coût de performance négligeable pour cet exemple, mais ce n'est pas nécessairement le cas pour des applications plus complexes, surtout s'il y a plusieurs components qui n'ont besoin que de `dispatch` et que `state` change souvent.

La branche [separateContexts](https://github.com/LOG2440/Cours-13-React-ClassManager/tree/separateContexts) contient une solution à ce problème en utilisant 2 contextes et leurs fournisseurs séparés pour rendre `state` et `dispatch` disponibles :
```jsx
return (
  <ClassContext.Provider value={state}>
    <DispatchContext.Provider value={dispatch}>
      {children}
    </DispatchContext.Provider>
  </ClassContext.Provider>
);
```

Chaque component peut, par la suite, accéder aux contextes qu'il a besoin de manière séparée :
```jsx
const state = useContext(ClassContext);
const dispatch = useContext(DispatchContext);
``` 

Les components `ClassInput`, `ClassCounter` et `ClassChoice` présentent un exemple où chaque component a besoin d'un seul contexte ou les deux dans le cas de `ClassChoice`.