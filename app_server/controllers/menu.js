module.exports.home = function(req, res){
    res.render('home', { title: 'home' });
  };
  /* GET menu page */
  module.exports.menu = function(req, res){
    res.render('menu', { title: 'menu' });
  };

  module.exports.earphones = function(req, res){
    res.render('earphones', { title: 'earphones' ,Course: [
      {
        name: "Boat",
        price: 1300,
        description: "Base music",
        rating: 4,
        image:"images/earphones.jpeg" 
      },
      {
        name: "Noise",
        price: 1400,
        description: "Loud and clear music",
        rating: 5,
        image: "images/earphones.jpeg"
      },
      {
        name: "Sony",
        price: 1400,
        description: "Loud and beautiful music",
        rating: 4,
        image: "images/earphones.jpeg"
      },
      {
        name: "Redme",
        price: 400,
        description: "Music headphones",
        image: "image/earphones.jpeg"
      }
    ]});
  };

  module.exports.dress = function(req, res){
    res.render('dress', { title: 'dress',Course: [
      {
        name: "frocks",
        price: 1300,
        description: "Cotton and poluster",
        rating: 4,
        image:"images/dress.jpeg" 
      },
      {
        name: "Jeans",
        price: 400,
        description: "jeans high waist",
        rating: 5,
        image: "images/dress.jpeg"
      }
    ]});
  };

  module.exports.shoe= function(req, res){
    res.render('shoe', { title: 'shoe',Course: [
      {
        name: "nike",
        price: 1300,
        description: "sneakers white color",
        rating: 4,
        image:"images/shoe.jpeg" 
      },
      {
        name: "puma",
        price: 400,
        description: "black puma shoes",
        rating: 5,
        image: "images/shoe.jpeg"
      }
    ]});
  };