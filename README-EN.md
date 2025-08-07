# FuncScript

---

## Choose your language

- [French](README-FR.md)
- [English](README-EN.md)

#2. README-fr.md (complete French with documentation section)
markdown
Copy
Edit
# FuncScript

## What is FuncScript?

FuncScript is a lightweight scripting language designed to be embedded directly into HTML pages via a custom `<fscript>` tag.

It allows you to write scripts with a simple and readable syntax, inspired by Scratch, that runs in the browser.

You can create and manipulate HTML elements, and apply styles, without writing raw JavaScript.

## How to use FuncScript?

1. Include the FuncScript library in the `<head>` section of your HTML page:

```html
<script src="https://cdn.jsdelivr.net/gh/Reqeuss-html/FuncScript@33a076b84320efd485f6a52b72680edd5a48b131/javascript/funcscript/release/funcscript-v0.1.js"></script>
```

Write your FuncScript code in an <fscript> tag anywhere in the body of the document:

```html
<fscript>
create div title "Welcome!"
setStyle title "fontSize" "36px"
setStyle title "textAlign" "center"
</fscript>
```

The script will run automatically when the page loads, creating the elements and applying the styles.

Features
Simple and readable syntax

Direct manipulation of HTML elements and CSS styles

No need to write JavaScript

Compatible with HTML and CSS

Easy to integrate into any website

Documentation
For full documentation, examples, and guides, visit:
🌐 [https://INDISPONIBLE.com](https://INDISPONIBLE.com)

License
This project is licensed under the MIT License - see the [LICENSE](LICENSE.md) file for details.
