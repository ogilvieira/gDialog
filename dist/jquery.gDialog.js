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
    var m = {};
 	var g = {};

    m.close = function(){
        if( $('.gdialog-shadow').length ){
            $('.gdialog-shadow').remove();
        };
    };

    m.init = function(){
        m.close();
    };

    //global functions
    g.alert = function(message){
        console.log( message );
        m.init();
    };

    g.confirm = function(message){
        console.log( message );
    };

	g.prompt = function(message){
        console.log( message );
	};


    $.gDialog = $.gDialog || g;
}));