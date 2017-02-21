var express  = require( 'express' ),
    path     = require( 'path' ),
    bodyParser = require('body-parser');
    root     = __dirname,
    port     = process.env.PORT || 9000,
    app      = express();
    
app.use(bodyParser.json());
app.use(bodyParser.text({ type: 'text/html' }));    
app.use( express.static( path.join( root )));
app.use( express.static( path.join( root, 'client' )));
app.use( express.static( path.join( root, 'client/static' )));
app.use( express.static( path.join( root, 'node_modules' )));

require('./server/config/routes.js')(app);

app.listen( port, function() {
  console.log( `server running on port ${ port }` );
});
