var express = require('express');
var router = express.Router();

var result = {number: 0};

router.post('/', function (req, res) {
  console.log(req.body);
  console.log(req.body.type);
  var calculateObject = req.body;
  console.log("object ", calculateObject);
  switch(calculateObject.type) {
    case "add":
      result.number = Number(calculateObject.x) + Number(calculateObject.y);
      console.log(result);
      break;

    case "subtract":
      result.number = Number(calculateObject.x) - Number(calculateObject.y);
      console.log(result);
      break;

    case "divide":
      result.number = Number(calculateObject.x) / Number(calculateObject.y);
      console.log(result);
      break;
      
    case "multiply":
      result.number = Number(calculateObject.x) * Number(calculateObject.y);
      console.log(result);
      break;
  }
  res.sendStatus(201);
});


router.get('/', function (req, res) {

  res.send(result);
});

module.exports = router;
