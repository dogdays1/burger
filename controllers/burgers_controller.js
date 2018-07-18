var express = require("express");
var burger = require("../models/burger.js");

var router = express.Router();


router.get("/", function(req, res) {
  console.log(" got to root");
    burger.selectAll(function(data) {
      var hbsObject = {
        burgers: data
      };
      console.log("this is hbsobject" + hbsObject);
      res.render("index", hbsObject);
    });
  });
  
  router.post("/", function(req, res) {
    console.log("got to post");
    console.log(req.body.burger_name);
    burger.insertOne(["burger_name", "devoured"], [req.body.burger_name, false], function(result) {
      // Send back the ID of the new quote
     // res.json({ id: result.insertId });
      res.redirect("/");

    });
  });
  
  router.put("/:id", function(req, res) {

    console.log("test if got to put");
    console.log(req.params.id);
    var condition = "id = " + req.params.id;
  
    console.log("condition", condition);
  
    burger.updateOne(
      {
        devoured: req.body.devoured
      },
      condition,
      function() {
        res.redirect("/");

        // if (result.changedRows === 0) {
        //   // If no rows were changed, then the ID must not exist, so 404
        //   return res.status(404).end();
        // }
        // res.status(200).end();
  
      }
    );
  });



module.exports = router;
