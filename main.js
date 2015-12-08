$('.btn-demo-alert').click(function(){
	$.gDialog.alert("1 - A robot may not injure a human being or, through inaction, allow a human being to come to harm.");
});

$('.btn-demo-alert-with-title').click(function(){
	$.gDialog.alert("2 - A robot must obey the orders given it by human beings except where such orders would conflict with the First Law.", {
		title: "Three Laws of Robotics"
	});
});

$('.btn-demo-alert-animated').click(function(){
	$.gDialog.alert("3 - A robot must protect its own existence as long as such protection does not conflict with the First or Second Laws.", {
		title: "Three Laws of Robotics",
		animateIn: "bounceIn",
		animateOut: "flipOutY"
	});
});

//prompt window
$('.btn-demo-prompt').click(function(){
	$.gDialog.prompt("Make a wish!", "I want to use this plugin", {
		title: "Prompt with required field.",
		required: true,
		animateIn : "rollIn",
		animateOut: "zoomOutDown",		
		onSubmit: function(res){
			//do something
		},
		onCancel: function(res){
			//do something
		}
	});
});

//confirm window
$('.btn-demo-confirm').click(function(){
	$.gDialog.confirm("Want to contribute?", {
		title: "Confirm window",
		animateIn : "rollIn",
		animateOut: "zoomOutDown",		
		onSubmit: function(res){
			//do something
		},
		onCancel: function(res){
			//do something
		}
	});
});