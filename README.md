# gDialog
jQuery, Zepto, Responsive and UMD
---
An elegant replacement dialog boxes with fancy entrance and exit animations powered by [Animate.css](https://daneden.github.io/animate.css/).


[view demo](http://ogilvieira.github.io/gDialog/) 

##How to use it:

* Load the required jQuery library and Animate.css in the html document.
```html
<link rel="stylesheet" href="/path/to/animate.min.css">
<script src="/path/to/jquery.min.js"></script>
```

* Load the gDialog plugin's files from src folder.

```html
<link rel="stylesheet" href="src/jquery.gDialog.css">
<script src="src/jquery.gDialog.js"></script>
```

* Create an alert dialog box with title and custom animations.
```javascript
$.gDialog.alert("Alert message here.", {
  title: "Alert Dialog Box",
  animateIn: "bounceIn",
  animateOut: "flipOutY"
});
```

* Create a prompt dialog box with required field and custom animations.
```javascript
$.gDialog.prompt("Your Username", "jQueryScript", {
  title: "Prompt Dialog Box",
  required: true,
  animateIn : "rollIn",
  animateOut: "zoomOutDown"
});
```

* Create a confiramtion dialog box with no animations.
```javascript
$.gDialog.confirm("Are You Sure?", {
  title: "Confirm Dialog Box",
});
```

* All configuration options with default values.
```javascript
// dialog title
title: false,
 
// animation types
// reference to https://daneden.github.io/animate.css/
animateIn : false,
animateOut : false,
 
// callback functions
onSubmit : false,
onCancel : false,
 
// required field for prompt dialog
required: false,
```
