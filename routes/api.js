/*
 * Serve JSON to our AngularJS client
 */

//exports.name = function (req, res) {
//  res.json({
//    name: 'Bob'
//  });
//};

// initialize our faux database
var data = {
  "projects": [
    {
      "image": "images/haprowine.png",
      "title": "HAproWINE",
      "text": 'One of the biggest challenges faced nowadays by humanity is the search \
      for a healthy balance between economic development, biodiversity and environmental protection.'
    },
    {
      "image": "images/fenix.png",
      "title": "FENIX",
      "text": "FENIX – Giving Packaging a New Life - is a 3-year European LIFE+ project \
      which will create a user-friendly and flexible tool for assisting municipalities, \
      communities and regions of Spain and Portugal to easily obtaining environmental \
      Life Cycle Assessment (LCA) results on packaging waste management."
    },
    {
      "image": "images/cileccta.png",
      "title": "CILECCTA",
      "text": "CILECCTA has brought top class academical and industrial researchers, \
      associations and enterprises together in a consortium to develop a suite of \
      software that will enable the assessment of sustainable options providing decision support."
    },
    {
      "image": "images/zerowin.png",
      "title": "ZeroWIN",
      "text": "The ZeroWIN-project will examine and develop new and innovative \
      approaches and effective strategies for the prevention of waste in \
      industries based on industrial symbiosis."
    },
    {
      "image": "images/fc-hy-guide.png",
      "title": "FC-HyGuide",
      "text": "The idea behind FC-HyGuide: Development of Guidance Document \
      for performing Life Cycle Assessment (LCA) on Fuel Cells (FCs) and Hydrogen (H2) Technologies"
    },
    {
      "image": "images/construction21.png",
      "title": "Construction21",
      "text": "CONSTRUCTION21 is the winner of a call of proposals \
      \"Intelligent Energy for Europe\". This collaborative platform aims to help practitioners \
      discover and develop new ways of sustainable building."
    },
    {
      "image": "images/eebguideproject.png",
      "title": "EeBGuide Project",
      "text": "The European research project “EeBGuide” aims to develop metrics for the preparation \
      of Life Cycle Assessment (LCA) studies for energy-efficient buildings and building products."
    },
    {
      "image": "images/elibama.png",
      "title": "ELIBAMA Project",
      "text": "The ELIBAMA (European Li-Ion Battery Advanced Manufacturing) \
      project aims at enhancing and accelerating the creation of a strong \
      European automotive battery industry structured around industrial companies \
      already committed to mass production of Li-ion cells and batteries for EVs."
    },
    {
      "image": "images/beat.png",
      "title": "BEATool",
      "text": "Evaluation of energy efficiency of alternative processes and technology chains"
    }
  ]
};

// GET

exports.projects = function (req, res) {
  var posts = [];
  data.projects.forEach(function (post, i) {
    posts.push({
      id: i,
      image: "http://localhost:3000/" + post.image,
      title: post.title,
      text: post.text //.substr(0, 50) + '...'
    });
  });

  res.json({
    projects: posts
  });
};

//exports.post = function (req, res) {
//  var id = req.params.id;
//  if (id >= 0 && id < data.posts.length) {
//    res.json({
//      post: data.posts[id]
//    });
//  } else {
//    res.json(false);
//  }
//};
//
//// POST
//
//exports.addPost = function (req, res) {
//  data.posts.push(req.body);
//  res.json(req.body);
//};
//
//// PUT
//
//exports.editPost = function (req, res) {
//  var id = req.params.id;
//
//  if (id >= 0 && id < data.posts.length) {
//    data.posts[id] = req.body;
//    res.json(true);
//  } else {
//    res.json(false);
//  }
//};
//
//// DELETE
//
//exports.deletePost = function (req, res) {
//  var id = req.params.id;
//
//  if (id >= 0 && id < data.posts.length) {
//    data.posts.splice(id, 1);
//    res.json(true);
//  } else {
//    res.json(false);
//  }
//};