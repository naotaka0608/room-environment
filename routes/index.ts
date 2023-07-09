var express = require('express');

const SensorCtrl = require('../controllers/sensor-ctrl')

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/sensor', SensorCtrl.CreateSensor)
router.put('/sensor/:id', SensorCtrl.UpdateSensor)
router.delete('/sensor/:id', SensorCtrl.DeleteSensor)
router.get('/sensor/:id', SensorCtrl.GetSensorById)
router.get('/sensors', SensorCtrl.GetSensors)

module.exports = router;
