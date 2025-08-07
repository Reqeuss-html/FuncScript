# FuncScript

---

## Choisissez votre langue / Choose your language

- [Français](README-FR.md)
- [English](README-EN.md)

#2. README-fr.md (français complet avec section documentation)
markdown
Copier
Modifier
# FuncScript

## Qu'est-ce que FuncScript ?

FuncScript est un langage de script léger conçu pour être intégré directement dans les pages HTML via une balise personnalisée `<fscript>`.  
Il vous permet d’écrire des scripts avec une syntaxe simple et lisible, inspirée de Scratch, qui s’exécute dans le navigateur.  
Vous pouvez créer et manipuler des éléments HTML, appliquer des styles, sans écrire du JavaScript brut.

## Comment utiliser FuncScript ?

1. Incluez la librairie FuncScript dans la section `<head>` de votre page HTML :

```html
<script src="https://cdn.jsdelivr.net/gh/Reqeuss-html/FuncScript@33a076b84320efd485f6a52b72680edd5a48b131/javascript/funcscript/release/funcscript-v0.1.js"></script>
```

Écrivez votre code FuncScript dans une balise <fscript> n’importe où dans le corps du document :

```html
<fscript>
create div title "Bienvenue !"
setStyle title "fontSize" "36px"
setStyle title "textAlign" "center"
</fscript>
```

Le script s’exécutera automatiquement au chargement de la page, créant les éléments et appliquant les styles.

Fonctionnalités
Syntaxe simple et lisible

Manipulation directe des éléments HTML et des styles CSS

Pas besoin d’écrire du JavaScript

Compatible avec HTML et CSS

Facile à intégrer sur n’importe quel site web

Documentation
Pour la documentation complète, les exemples et les guides, visitez :
🌐 [https://INDISPONIBLE.com](https://INDISPONIBLE.com)

Licence
Ce projet est sous licence MIT - voir le fichier [LICENSE](LICENSE.md) pour plus de détails.
