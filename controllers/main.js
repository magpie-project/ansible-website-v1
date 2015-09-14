'use strict';

var errorController = require( './error' );
var pageController = require( './page' );
var apiController = require( './api' );

module.exports = function( app ) {
	errorController( app ); //must go first in express 4 due to use API
	pageController( app );
	apiController( app );
};
