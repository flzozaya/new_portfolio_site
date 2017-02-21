var express  = require( 'express' ),
    path     = require( 'path' ),
    bodyParser = require('body-parser');
    global     = __dirname,
    port     = process.env.PORT || 8000,
    app      = express();
    
app.use(bodyParser.json());
app.use(bodyParser.text({ type: 'text/html' }));    
app.use( express.static( path.join( global )));
app.use( express.static( path.join( global, 'client' )));
app.use( express.static( path.join( global, 'client/static' )));
app.use( express.static( path.join( global, 'node_modules' )));

require('./server/config/routes.js')(app);

app.listen( port, function() {
  console.log( `server running on port ${ port }` );
});
