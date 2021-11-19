# Class Manager

Exemple de base de gestion d'état en React.

La branche **main** contient l'implémentation d'un gestionnaire de cours dont l'état est sauvegardé dans le Component parent au plus haut niveau. L'information est passée à ses enfants à travers les _propriétés_ . La manipulation de l'état est possible à travers 2 méthodes dans _App_ qui sont passés en référence aux componsantes enfants qui en on besoin.

La branche [useContext](https://github.com/LOG2440/react_classManager/tree/use_state) contient l'implémentation de la même application, mais en utilisant le _hook_ de React : **useContext** où l'information est gérée par un _contexte_ partagé. 
