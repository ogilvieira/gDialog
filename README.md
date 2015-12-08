# gDialog
An elegant jQuery/Zepto.js replacement for browser alerts

[view demo](http://ogilvieira.github.io/gDialog/) 

```javascript
//alert
$.gDialog.alert("Something wrong...");

//prompt with default value
$.gDialog.prompt("The best game ever created?", "The legend of Zelda", {
  onSubmit: function(res){
    console.log(res);
  },
  onCancel: function(){
    console.log("Okay, you do not have to answer that...");
  }
});

var contribute = $.gDialog.confirm("Want to contribute?", {
  onSubmit: function(){
    // using animate.css
    $.gDialog.alert("Fork me on github!", {
      animateIn: "fadeIn",
      animateOut: "FadeOut",
    });
  }
});
```
