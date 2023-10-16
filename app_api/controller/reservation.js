var sendJsonResponse = function (res, status, content) {
    res.status(status);
    res.json(content);
  };
  
var mongoose = require('mongoose');
var Reservation = mongoose.model('Reservation');
  
  module.exports.reservationsCreate = function (req, res) {
    console.log(req.body);
    const { name, email, phone, date, time, guests } = req.body;
    const newReservation = {
      name,
      email,
      phone,
      date,
      time,
      guests,
    };
  
    Reservation.create(newReservation)
      .then((reservation) => {
        console.log('Reservation created:', reservation);
        return res.status(201).json(reservation);
      })
      .catch((err) => {
        console.error(err);
        return res.status(400).json({ error: 'Could not create reservation' });
      });
  };
  
  module.exports.reservationsList = function (req, res) {
    Reservation.find({})
      .exec()
      .then((reservations) => {
        sendJsonResponse(res, 200, reservations);
      })
      .catch((err) => {
        console.error(err);
        sendJsonResponse(res, 500, { error: 'An error occurred' });
      });
  };
  
  module.exports.reservationsReadOne = async function (req, res) {
    try {
      const reservation = await Reservation.findById(req.params.reservationid).exec();
      sendJsonResponse(res, 200, reservation);
    } catch (err) {
      sendJsonResponse(res, 500, { error: 'An error occurred' });
    }
  };
  
  module.exports.reservationsUpdateOne = function (req, res) {
    Reservation.findByIdAndUpdate(
      req.params.reservationid,
      { $set: req.body },
      { new: true }
    )
      .exec()
      .then((reservation) => {
        sendJsonResponse(res, 200, reservation);
      })
      .catch((err) => {
        console.error(err);
        sendJsonResponse(res, 500, { error: 'An error occurred' });
      });
  };
  
  module.exports.reservationsDeleteOne = function (req, res) {
    Reservation.findByIdAndRemove(req.params.reservationid)
      .exec()
      .then(() => {
        sendJsonResponse(res, 204, null);
      })
      .catch((err) => {
        console.error(err);
        sendJsonResponse(res, 500, { error: 'An error occurred' });
      });
  };