/*
 * Basic responsive mashup template
 * @owner Enter you name here (xxx)
 */
/*
 *    Fill in host and port for Qlik engine
 */
var prefix = '/';
var config = {
	host: 'g5no9ay42rhaj1v.sg.qlikcloud.com',
	prefix: prefix,
	port: 443,
	isSecure: true
};
require.config( {
	baseUrl: ( config.isSecure ? "https://" : "http://" ) + config.host + (config.port ? ":" + config.port : "") + config.prefix + "resources"
} );

require( ["js/qlik"], function ( qlik ) {
	qlik.on( "error", function ( error ) {
		$( '#popupText' ).append( error.message + "<br>" );
		$( '#popup' ).fadeIn( 1000 );
	} );
	$( "#closePopup" ).click( function () {
		$( '#popup' ).hide();
	} );

	//callbacks -- inserted here --
	//open apps -- inserted here --
	var app = qlik.openApp('Sales Overview On-prem.qvf', config);

	//get objects -- inserted here --
	app.getObject('QV03','KVHwwx');
	app.getObject('CurrentSelections','CurrentSelections');
	
	app.getObject('QV04','VqPugbQ');
	
	app.getObject('QV02','dVvj');
	
	
	app.getObject('QV01','AeFEAP');
	//create cubes and lists -- inserted here --

} );
