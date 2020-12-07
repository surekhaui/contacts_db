var express = require('express');
var router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
var contact_controller = require('../controllers/contact');


// a simple test url to check that all of our files are communicating correctly.
router.get('/test', contact_controller.test);


router.get('/contacts', contact_controller.contact_list);

router.post('/contacts', contact_controller.contact_create);

router.get('/contacts/:id', contact_controller.contact_details);

router.put('/contacts/:id/update', contact_controller.contact_update);

router.delete('/contacts/:id/delete', contact_controller.contact_delete);


module.exports = router;