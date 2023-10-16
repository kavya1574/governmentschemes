module.exports.aboutus = function(req, res){
    res.render('aboutus', { title: 'aboutus' });
  };
  /* GET menu page */
  module.exports.contact = function(req, res){
    res.render('contact', { title: 'contact' });
  };
  module.exports.reservation = function(req, res){
    res.render('reservation', { title: 'reservation' });
  };