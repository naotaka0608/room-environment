const mongoose1 = require('mongoose')
const Schema = mongoose1.Schema
// const ObjectId = Schema.ObjectId

const SensorSchema = new Schema({
  // id: ObjectId,
  date: { type: Date },
  humidity: { type: Number, default: 0 },
  temperature: { type: Number, default: 0 },
})


module.exports = mongoose1.model('Sensor', SensorSchema)
