var express = require('express');
const Sensor = require('../models/Sensor');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/sensor', function(req:any, res:any, next:any) {
	
	let date = req.body.date;
	let humidity = req.body.humidity;
	let temperature = req.body.temperature;

	let data = {date, humidity, temperature}

	console.log(data);
	const newSensor = new Sensor(data);
	newSensor.save();	

	res.json({ id: 1 });
});


module.exports = router;
