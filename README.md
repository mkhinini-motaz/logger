



## Msk log

**msk-log** is a very simple and small package for all developers that appreciate simple packages, this package simply add some styling to your logs using Twitter/Bootstrap4 colors with the same colors names as methods names for logging.

This package was designed so that it has the minimum base code and yet still provides a functionality that many of you need when dealing with logs is that you always need to persist those logs into a file, and of course sometimes you may not want persistence but you want to add some color and style to the logs that you write to the console.

This package is a wrapper around the **console.log** method and offers a series of functions that were written using the popular npm **[chalk](https://www.npmjs.com/package/chalk)** package which is this package's only dependency.

If you have any suggestions about how we can improve this package while keeping it as simple as possible, please let me know.

## Install
To install the package, simply run this command at the root of your project :

    npm install msk-log
this will install the **msk-log** package as well as the **chalk** package if you don't have it already.

This package include two files, **index.js** which contains the source code of the logger package, and **test.js** is an example of the usage of all available methods, to see their output, run the following command at the root of your :

    node node_modules/msk-log/test.js
If you want to modify the source code of this package, first execute the following command :

    git clone https://github.com/mkhinini-motaz/logger.git
This will create a logger folder, go inside that folder and start modifying the source code, to see the effect of your changes, run the following command :

    npm start
Behind the scenes, this will execute the **test.js** file which contains calls to all the methods available in this package.

## Usage
In your script, require the logger with the following line of code :

    var logger = require("msk-log")
Then you use it as you use the console object :

    logger.log("Your message");
Behind the scenes, this will execute **console.log** and then persists the arguments it has received in the **./logs/system.log** file.

## Methods

### Configuration methods

Right now, **msk-log** only has one configuration methods that allows you to enable or disable persisting the logs in a file on the hard drive. This file path is **YOUR_PROJECT/logs/system.log**

Just call this method with an argument that will evaluate to *true* if you want to activate persisting logs in a file *(default option)* , or pass a value that will evaluate to *false* to disable persisting logs.

    logger.persistLogs(truthyValue)

### Output methods
**msk-log** has many output methods where their names are inspired from the Bootstrap4 framework so that you feel familiar with it very quickly, pass any number of arguments you want and their value will be displayed on the console with a different text color.

All the methods accept any number of arguments of any type you pass to them because they were created to behave just like **console.log**. If you look at the source code of this package, methods defined don't have parameters declared but use the special *javascript* **[arguments](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments)** object.


     logger.error(errorObj);
     logger.danger("message", ["message2", ...]);
     logge.dark("message", ["message2", ...]);
     logger.info("message", ["message2", ...]);
     logger.light("message", ["message2", ...]);
     logger.log("message", ["message2", ...]);
     logger.primary("message", ["message2", ...]);
     logger.secondary("message", ["message2", ...]);
     logger.success("message", ["message2", ...]);
     logger.warning("message", ["message2", ...]);
     logger.white("message", ["message2", ...]);

The **logger.error(errorObj)** method takes an error object and persists it in the log file after converting it to a JSON string, when the error object is written in the file or in the console, it's delimited by dashes before and after so that it's easy to spot when you read your logs.

If you want to change the background color instead of the text color, just add **Bg** to the method name, here is a list of the available methods that changes the background.


     logger.dangerBg("message", ["message2", ...]);
     logge.darkBg("message", ["message2", ...]);
     logger.infoBg("message", ["message2", ...]);
     logger.lightBg("message", ["message2", ...]);
     logger.primaryBg("message", ["message2", ...]);
     logger.secondaryBg("message", ["message2", ...]);
     logger.successBg("message", ["message2", ...]);
     logger.warningBg("message", ["message2", ...]);
     logger.whiteBg("message", ["message2", ...]);

All methods mentioned above return the logger object, so it's possible to chain methods calls  like this :

    logger.danger("message 1").info("message 2").success("message 3");
Each method call will display its arguments in a separate line.

### Other Methods
You also have other methods available to use, the **newLine** method was create to help improve your code readability, if you look at its source code, it just insert  line return in the console and in the log file :

    logger.newLine();
If you are already familiar with **[chalk](https://www.npmjs.com/package/chalk)**, you know that coloring the console is done like this :

    var chalk = require('chalk');
    console.log(chalk.blue.bgWhite("Your message"));
If you want to create your own custom logs without modifying this package's source code, you can use the **styleLog** method, this method accepts any number of parameters and checks wether the last arguments is a **[chalk](https://www.npmjs.com/package/chalk)** style or not, if it is, it will be applied to the rest of the arguments, if not, arguments will be logged on the console and the log file with no style.

The **[chalk](https://www.npmjs.com/package/chalk)** object must be passed to this method without calling it as a function, because this will happen inside the **styleLog** method. Here is a usage example of the **styleLog** method :

    logger.styleLog("This is a style log", {a:5,b:9}, 123456789, false, chalk.red.bgYellow);



### Persisting to log file without console output
If you want to add some message or data to the log file but without showing it on the console, you can use the following method :

    logger.appendToLogFile("message");
**Attention :** If you disable persisting logs with **logger.persistLogs(falsyValue)**, this method won't do or persist anything, and this method at the moment only accept one argument which is a string to be persisted.

If you try to use this method to write an array into the log file, it will be written like this : *[1, 2, 3, 4]*, and objects will be written like this : *[object Object]*, you can solve this problem by converting your object or array into a string and then persist it as a string like the following example :

    logger.appendToLogFile(logger.treatArguments([1,2,3,4])); // ⇒ will write in the log file : 1  2  3  4
This example will write **1  2  3  4** as if you called **console.log(1, 2, 3, 4)** and the output is stored in the log file. The **treatArguments** method was created to concatenate all object or array's **values** (keys will be discarded for objects). If you want to keep the object's keys, try converting it to JSON instead of using the **treatArguments** method before persisting it in the log file.

## Update Notice
When i first created this package, **msk-log** methods were accepting a single argument as data to output and the second argument was used to indicate that we want to color the background instead of the text, your code with the previous version will still work but it will not change the background color, consider adding **Bg** to the methods names and removing the boolean second argument so that you can have the wanted behavior as described above.

## Copyright
Feel free to use, modify, publish or sell this package as you like.

**(c) Moatez Mkhinini <mkhinini.motaz@gmail.com>**

----
----


## Msk log (French documentation)

**msk-log** est un petit package simple pour tous les développeurs qui apprécient les packages simple, ce package ajoute simplement du style à vos logs en utilisant les couleurs de Twitter/Bootstrap4 avec les noms des couleurs comme noms de méthodes.

Ce package a été conçu afin d'avoir le minimum de source code mais en fournissant une fonctionnalité que plusieurs entre vous auront besoin quand vous manipuler les logs, c'est que vous avez toujours besoins de sauvegarder vos logs dans un fichier, et bien sur, parfois vous voulez pas sauvegarder vos logs mais vous voulez comme même ajouter des couleurs et des styles à vos logs que vous écrivez sur la console.

Ce package est une sur-couche pour la méthode **console.log** et offre une série de fonctions qui ont été écrit en utilisant le fameux package npm **[chalk](https://www.npmjs.com/package/chalk)** qui est sa seule dépendance.

Si vous avez des suggestions à propos comment je peut améliorer ce package tous en gardant sa simplicité, je vous en prie, contactez moi.
## Installation
Pour installer ce package, rien n'est plus simple, simplement exécutez la commande suivant dans la racine de votre projet :

    npm install msk-log
ceci installera le package **msk-log** et aussi le package **[chalk](https://www.npmjs.com/package/chalk)** si il existe pas déjà.

Ce package contient deux fichiers, **index.js** est celui qui contient le code source de ce package, et **test.js** est un example d'utilisation de tous les méthodes disponibles, pour voir leur affichage, exécutez la commande suivante dans la racine de votre projet :

    node node_modules/msk-log/test.js
Si vous voulez modifier le code source de ce package, d'abord, exécutez la commande suivante :

    git clone https://github.com/mkhinini-motaz/logger.git
Ceci va créer un dossier appelé logger, rentrez dans ce dossier et commencer à modifier le code source, pour voir les effets de vos modification, exécutez la commande suivante :

    npm start
Behind the scenes, ceci va exécuter le fichier **test.js** qui contient les appels à tous les méthodes disponible dans ce package.

## Utilisation
Dans votre script, faites un require pour le logger avec la ligne de code suivante :

    var logger = require("msk-log")
Après vous l'utiliser comme vous utiliser l'objet console :

    logger.log("Your message");
Behind the scenes, ceci va exécuter **console.log** et enregistrer les paramètres qu'il a reçu dans le fichier **./logs/system.log**

## Methodes

### Methodes de configuration

Pour le moment, **msk-log** a une seule méthode de configuration qui permet de activer ou désactiver la persistance des logs dans un fichier sur le disque dur. Le chemin de ce fichier est **YOUR_PROJECT/logs/system.log**

Simplement appeler cet méthode avec un argument qui peut être évalué à *true* pour activer la persistance des logs (valeur par défaut) , ou bien passez lui un valeur qui sera évalué à *false* pour désactiver la persistance des logs.

    logger.persistLogs(truthyValue)

### Methods d'affichage
**msk-log** a plusieurs méthodes d'affichage où leurs noms ont été inspirésdu framework Bootstrap4 pour que vous sentez familier très rapidement, passez n'importe quel nombre d'arguments de n'importe quel type et leurs valeurs sera affichée dans la console avec un couleur de text différent.

Tous les méthodes acceptent n'importe quel nombre d'argument de n'importe quel type parce que ils ont été créé pour agir comme **console.log**. Si vous regardez le code source de ce package, les méthodes ne définissent pas des paramètres mais        ils utilisent l'objet spéciale de javascript appelé **[arguments](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Fonctions/arguments)**.


     logger.error(errorObj);
     logger.danger("message", ["message2", ...]);
     logge.dark("message", ["message2", ...]);
     logger.info("message", ["message2", ...]);
     logger.light("message", ["message2", ...]);
     logger.log("message", ["message2", ...]);
     logger.primary("message", ["message2", ...]);
     logger.secondary("message", ["message2", ...]);
     logger.success("message", ["message2", ...]);
     logger.warning("message", ["message2", ...]);
     logger.white("message", ["message2", ...]);

La méthode **logger.error(errorObj)** prend un objet erreur et le persiste dans le fichier log après l'avoir converti en un chaine de caractères JSON, quand l'objet erreur est écrit dans le fichier log ou bien dans la console, il est délimité par des tirets avant et après pour pouvoir les repérer facilement quand vous lisez vos logs.   

Si vous voulez changez le couleur de background au lieu du couleur du text, simplement ajouter **Bg** au nom du méthode,  voici une liste de tous les méthodes disponibles qui modifient le background :


     logger.dangerBg("message", ["message2", ...]);
     logge.darkBg("message", ["message2", ...]);
     logger.infoBg("message", ["message2", ...]);
     logger.lightBg("message", ["message2", ...]);
     logger.primaryBg("message", ["message2", ...]);
     logger.secondaryBg("message", ["message2", ...]);
     logger.successBg("message", ["message2", ...]);
     logger.warningBg("message", ["message2", ...]);
     logger.whiteBg("message", ["message2", ...]);

Tous les méthodes mentionnés ci-dessus retourne l'objet logger, alors c'est possible d'enchainer les apels de méthodes comme suit :

    logger.danger("message 1").info("message 2").success("message 3");
Chaque méthode affiche ses arguments dans une ligne apart.

### Autre méthodes
Vous avez aussi d'autres méthodes disponibles, la méthode **newLine** a été créé afin d'améliorer la lisibilité de votre code, si vous regardez son code source, elle ajoute simplement un retour à la ligne dans le console et dans le fichier log :

    logger.newLine();
Si vous êtes déjà habitué à **[chalk](https://www.npmjs.com/package/chalk)**, vous savez que la coloration est faite de la façon suivante :

    var chalk = require('chalk');
    console.log(chalk.blue.bgWhite("Your message"));
Si vous voulez créer vos propres logs sans modifier le code source de ce package, vous pouvez utiliser la méthode **styleLog** , cet méthode accepte n'importe quel nombre de paramètres et vérifie que le dernier argument est un style **[chalk](https://www.npmjs.com/package/chalk)**  ou pas, si il l'est, il sera appliqué sur le reste des arguments, sinon,  ces arguments seront loggé sur la console et dans le fichier log sans style.

L'objet **[chalk](https://www.npmjs.com/package/chalk)** doit être passé à cet méthode avant de l'appeler en tant que fonction, parce que cet appel sera réalisé à l'intérieur du méthode **styleLog**. Voici un exemple d'utilisation de la méthode **styleLog** :

    logger.styleLog("This is a style log", {a:5,b:9}, 123456789, false, chalk.red.bgYellow);



### Persister dans le fichier log sans affichage sur la console
Si vous voulez ajouter un message ou des données au fichier log sans l'afficher sur la console, vous pouvez utiliser la méthode suivante :

    logger.appendToLogFile("message");
**Attention :** Si vous désactiver la persistance des logs avec **logger.persistLogs(falsyValue)**, cet méthode ne va rien faire ou persister, et cet méthode, au moment, n'accepte qu'un seul paramètre qui est la chaine de caractères à persister.

Si vous essayez d'utiliser cet méthode pour écrire un tableau dans le fichier log, il sera écrit de la façon suivante : *[1, 2, 3, 4]*, et les objets seront écrit de la manière suivante : *[object Object]*, vous pouvez contourner ce problème en convertissant votre objet ou tableau en une chaine de caractères et après la persister en tant que chaine de caractères comme l'exemple suivant :

    logger.appendToLogFile(logger.treatArguments([1,2,3,4])); // ⇒ va écrire dans le fichier log : 1  2  3  4
Cet example va écrire **1  2  3  4** comme si vous avez appelé **console.log(1, 2, 3, 4)** et que l'affichage à été stocké dans le fichier log. La méthode **treatArguments** a été créé pour concaténer les **valeurs** (les clés seront écartés pour les objets). Si vous voulez garder les clés des objets, essayer de le convertir en JSON au lieu d'utiliser la méthode **treatArguments** avant de persister dans le fichier log.


## Note de mise à jour
Quand j'ai créé ce package, les méthodes de **msk-log** acceptaient un seul argument en tant que donnée à afficher et le deuxième argument été utilisé pour indiquer si on veut changer le couleur du background au lieu du texte, votre code avec la version précédente marche toujours mais il va plus changer le background, pensez à ajouter **Bg** aux noms des méthodes et supprimez le deuxième argument booléen pour avoir le comportement recherché comme décrit ci-dessus.

## Copyright
Vous pouvez utiliser, modifier, publier ou même vendre ce package comme bon vous semble.

**(c) Moatez Mkhinini <mkhinini.motaz@gmail.com>**
