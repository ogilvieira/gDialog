# gDialog
An elegant jQuery replacement for browser alerts

```javascript
//alert
$.gDialog.alert("Something wrong...");

//prompt with default value
var theBestGame = $.gDialog.prompt("The best game ever created?", "The legend of Zelda");
console.log( theBestGame );

var contribute = $.gDialog.confirm("Want to contribute?");
if( contribute ){
  // using animate.css
  $.gDialog.alert("Fork me on github!", {
    animateIn: "fadeIn",
    animateOut: "FadeOut",
  });
}
```
