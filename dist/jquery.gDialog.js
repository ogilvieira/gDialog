'use strict';

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory(require('jquery'));
    } else {
        factory(jQuery || Zepto);
    }	
}(function($){
	var g = {};

	g.alert = function(message){
		window.alert( message );
	};

	window.g = g;
}));