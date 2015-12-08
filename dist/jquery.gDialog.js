'use strict';
/**
 * jquery.gDialog.js
 * @version: v0.1.0
 * @author: ogilvieira
 *
 * The MIT License (http://www.opensource.org/licenses/mit-license.php)
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */

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

    m.OPTIONS = {
        title: false,
        animateIn : false,
        animateOut : false,
    };

    m.clear = function(){
        $('.gdialog-shadow').length ? $('.gdialog-shadow').remove() : '';
    };

    m.init = function(){
        m.clear();
        $('body').append("<div class=\"gdialog-shadow\"></div>");
    };

    m.getOptions = function(options){
        var o = m.OPTIONS;
        if( typeof options == 'object' ){
          $.each(options, function(key, val){
            m.OPTIONS[key] !== undefined ? m.OPTIONS[key] = val : '';
          });
        };
        return o;
    };

    //global functions
    g.alert = function(message, userOptions){
        m.init();
        var options = m.getOptions(userOptions);
    };

    g.confirm = function(message, userOptions){
        m.init();
        var options = m.getOptions(userOptions);
    };

	g.prompt = function(message, userOptions){
        m.init();
        var options = m.getOptions(userOptions);
	};


    $.gDialog = $.gDialog || g;
}));