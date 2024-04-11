

# Nom du Projet

Description du projet et son objectif.

## Prérequis

- Node.js 20
- MySQL 

## Installation

1. Cloner le projet :
   ```bash
   git clone git@github.com:HiGeorges/Test.git
   ````

2. Accéder au dossier du projet
Changez votre répertoire courant pour le dossier du projet :
  ```bash
      cd Test
  ````
3. Installer les dépendances
Installez toutes les dépendances requises par le projet en exécutant :

  ```bash
    npm install
  ```
4.Configuration

Pour configurer votre application, vous devez créer un fichier .env à la racine du projet. Ce fichier doit contenir les informations de configuration suivantes :

  ```bash
   DATABASE_HOST=localhost
   DB_PORT=3306
   DATABASE_USER=root
   DATABASE_PASSWORD=root
   DATABASE_NAME=izi
   ```
Assurez-vous de remplacer les valeurs ci-dessus par vos propres informations de connexion à la base de données.

## Démarrage de l'application

Pour démarrer l'application, exécutez la commande suivante :
 ```bash
   npm run start
   ```
## Routes

L'application supporte les routes suivantes :

-  / Affiche "Hello World".
- /product : Affiche la liste des produits.
- /product/new : Permet d'ajouter un nouveau produit.
- /product/edit/{id} : Permet de modifier un produit existant.




## Authors

- [@HiGeorges](https://github.com/HiGeorges)


## Support

Joindre georges.heloussato@epitech.eu

