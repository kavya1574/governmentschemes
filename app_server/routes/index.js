require('dotenv').config();
var express = require('express');
var router = express.Router();
var ctrlmenu = require('../controllers/menu');
var ctrlcontact = require('../controllers/contact');

/* GET menu page. */
router.get('/',ctrlmenu.home);
router.get('/menu',ctrlmenu.menu);
router.get('/earphones',ctrlmenu.earphones);
router.get('/dress',ctrlmenu.dress);
router.get('/shoe',ctrlmenu.shoe);
/* get contact page */
router.get('/aboutus',ctrlcontact.aboutus);
router.get('/contact', ctrlcontact.contact);
router.get('/reservation', ctrlcontact.reservation);
module.exports= router;