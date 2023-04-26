const router = require("express").Router();
const Movie = require("../models/Movie_model");
const verify = require("../verification");




//GET

router.route("/find/:id").get(verify, async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    res.status(200).json(movie);
  } catch (err) {
    res.status(500).json(err);
  }
});

//CREATE
/*
router.route("/create").post( verify, async (req, res) => {
  // if (!req.user.isAdmin){
  //   res.status(403).json("You are not allowed!");
  // }
  // else{
  console.log(req.body);
    try{

      const newEntry = new Movie({
        title: req.body.title,
        desc: req.body.desc,
        img: req.body.img,
        imgTitle: req.body.imgTitle,
        imgSm: req.body.imgSm,
        trailer: req.body.trailer,
        video: req.body.video,
        year: req.body.year,
        limit: req.body.limit,
        genre: req.body.genre,
        isSeries: req.body.isSeries

      });
      const savedMovie = await newEntry.save();
     
      res.status(201).json(savedMovie);
    } 
    catch (err){
      res.status(500).json(err);
    }
  // }
});
*/


router.post("/", verify, async (req, res) => {
  
  if (req.user.isAdmin) {
    
    try {
      console.log(req.body);
      const newEntry = new Movie({
        title: req.body.title,
        desc: req.body.desc,
        img: req.body.img,
        imgTitle: req.body.imgTitle,
        imgSm: req.body.imgSm,
        trailer: req.body.trailer,
        video: req.body.video,
        year: req.body.year,
        limit: req.body.limit,
        genre: req.body.genre,
        isSeries: req.body.isSeries

      });
      const savedMovie = await newEntry.save();
      res.status(201).json(savedMovie);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("You are not allowed!");
  }
});

//UPDATE

router.route("/:id").put(verify, async (req, res) => {
  console.log("sssssssssssss");
  console.log(req.json);
  if (!req.user.isAdmin) {
    res.status(403).json("You are not allowed!");
  }
  else{
    try {
      const filter = { _id: req.params.id };
      const update = req.body;
      const option = { new: true };

      const updatedMovie = await Movie.findByIdAndUpdate(filter,update,option);
      res.status(200).json(updatedMovie);
    }
    catch (err) {
      res.status(500).json(err);
    }
  }
  
});

//DELETE

router.route("/:id").delete( verify, async (req, res) => {
  if (!req.user.isAdmin) {
    res.status(403).json("You are not allowed!");
  }
    try {
      await Movie.findByIdAndDelete(req.params.id);
      res.status(200).json("Movie deleted ");
    } catch (err) {
      res.status(500).json(err);
    }
  
});


//GET ALL

router.route("/").get(verify, async (req, res) => {

  if (!req.user.isAdmin) {
    res.status(403).json("You are not allowed!");
  }
  try {
    const movies = await Movie.find();
    res.status(200).json(movies.reverse());
  } catch (err) {
    res.status(500).json(err);
  }

});

//GET RANDOM

router.route("/random").get( verify, async (req, res) => {
  const type = req.query.type;
  let movie;
  try {
    if (type === "series") {
      movie = await Movie.aggregate([
        { $match: { isSeries: true } },
        { $sample: { size: 1 } },
      ]);
    } else {
      movie = await Movie.aggregate([
        { $match: { isSeries: false } },
        { $sample: { size: 1 } },
      ]);
    }
    res.status(200).json(movie);
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;