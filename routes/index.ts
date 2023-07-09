var express = require('express');

const SensorCtrl = require('../controllers/sensor-ctrl')

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/*
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
*/

router.post('/sensor', SensorCtrl.createSensor)
router.put('/sensor/:id', SensorCtrl.updateSensor)
router.delete('/sensor/:id', SensorCtrl.deleteSensor)
router.get('/sensor/:id', SensorCtrl.getSensorById)
router.get('/sensors', SensorCtrl.getSensors)

module.exports = router;
