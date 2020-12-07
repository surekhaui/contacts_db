var Contact = require('../models/contact');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

exports.contact_list = function (req, res) {
    Contact.find(function (err, contact) {
        if (err) return next(err);
        res.send(contact);
    })
};

exports.contact_create = function (req, res) {
	let req_data = {
		  name: {
			first: req.body.name.first,
			middle: req.body.name.middle,
			last: req.body.name.last
		  },
		  address: {
			street: req.body.address.street,
			city: req.body.address.city,
			state: req.body.address.state,
			zip: req.body.address.zip
		  },
		  phone: req.body.phone,
		  email: req.body.email
		};
    var contact = new Contact(req_data);
	contact.save(function (err) {
        if (err) {
			return res.status(400).json({
			  status: 'error',
			  error: 'There is an error while creating contact',
			});
        }
		
        return res.status(200).json({
			status: 'Contact created Successfully',
			data: req.body,
		})
    })
};

exports.contact_details = function (req, res) {
    Contact.findById(req.params.id, function (err, contact) {
        if (err) return next(err);
        res.send(contact);
    })
};

exports.contact_update = function (req, res) {
    Contact.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, contact) {
        if (err) return next(err);
        res.send('Contact udpated.');
    });
};

exports.contact_delete = function (req, res) {
    Contact.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Contact Deleted successfully!');
    })
};