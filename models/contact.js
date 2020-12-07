var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ContactSchema = new Schema({
  name: {
    first: {type: String, required: true},
    middle: {type: String, required: true},
    last: {type: String, required: true} 
  },
  address: {
    street: {type: String, required: true},
    city: {type: String, required: true},
    state: {type: String, required: true},
    zip: {type: String, required: true}
  },
  phone: [
    {
      number: {type: String, required: true},
      type: {type: String, required: true}
    },
	{
      number: {type: String, required: true},
      type: {type: String, required: true}
    }
  ],
  email: {type: String, required: true}
});



// Export the model
module.exports = mongoose.model('Contact', ContactSchema);