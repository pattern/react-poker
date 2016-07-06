var CleanCSS = require( 'clean-css' );
var fs = require( 'fs-extra' );
var webpackConfig = require( './webpack.config.js' );
var webpack = require( 'webpack' );
var cssFile = 'bin/style.css';
var cssSource = [ 'node_modules/normalize.css/normalize.css', 'style.css' ];
var compiler = webpack( webpackConfig );

function logError( err ) {
    if( err ) console.log( err );
}

fs.emptyDir( 'bin', function( err ) {
    logError( err );
    new CleanCSS( { output : 'react-poker.css' } ).minify(
        cssSource,
        function( error, minified ) {
            fs.outputFile( cssFile, minified.styles, logError );
            fs.copySync( 'index.html', 'bin/index.html' );
            compiler.run( logError );
        }
    );
} );