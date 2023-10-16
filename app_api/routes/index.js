var express = require('express');
var router = express.Router();
var reservationController = require('../controller/reservation'); 

var courseController = require('../controller/menu'); // Adjust the path accordingly

// Create a new course
router.post('/courses', courseController.coursesCreate);

// Get a list of courses
router.get('/courses', courseController.coursesList);

// Get a single course by ID
router.get('/courses/:courseid', courseController.coursesReadOne);

// Update a course by ID
router.put('/courses/:courseid', courseController.coursesUpdateOne);

// Delete a course by ID
router.delete('/courses/:courseid', courseController.coursesDeleteOne);

//reservations

router.post('/reservations', reservationController.reservationsCreate);


router.get('/reservations', reservationController.reservationsList);


router.get('/reservations/:reservationid', reservationController.reservationsReadOne);


router.put('/reservations/:reservationid', reservationController.reservationsUpdateOne);


router.delete('/reservations/:reservationid', reservationController.reservationsDeleteOne);

module.exports = router;

