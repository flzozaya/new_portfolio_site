// Require controllers
var forms = require('./../controllers/forms.js');

console.log('routes');

module.exports = function(app){

/*====================== POST ======================*/
	
		app.post('/formData', forms.process);

}

