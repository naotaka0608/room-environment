import Sensor from '../models/sensor'

const CreateSensor : any = (req : any, res : any) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a sensor',
        })
    }
    
    const sensor : any = new Sensor(body)

    
    if (!sensor) {
        return res.status(400).json({ success: false, error: 'err' })
    }

    sensor
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: sensor._id,
                message: 'Sensor created!',
            })
        })
        .catch((error : any) => {
            return res.status(400).json({
                error,
                message: 'Sensor not created!',
            })
        })
    
}


const UpdateSensor : any = async (req : any, res : any) => {
    const body : any = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Sensor.findOne({ _id: req.params.id }, (err : any, sensor : any) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Movie not found!',
            })
        }

        sensor.date = body.date
        sensor.humidity = body.humidity
        sensor.temperature = body.temperature
        sensor
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: sensor._id,
                    message: 'Sensor updated!',
                })
            })
            .catch((error : any) => {
                return res.status(404).json({
                    error,
                    message: 'Sensor not updated!',
                })
            })
    })
}

const DeleteSensor : any = async (req : any, res : any) => {
    await Sensor.findOneAndDelete({ _id: req.params.id }, (err : any, sensor : any) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!sensor) {
            return res
                .status(404)
                .json({ success: false, error: 'Sensor not found' })
        }

        return res.status(200).json({ success: true, data: sensor })
    }).catch((err : any) => console.log(err))
}

const GetSensorById : any = async (req : any, res : any) => {
    await Sensor.findOne({ _id: req.params.id }, (err : any, sensor : any) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        return res.status(200).json({ success: true, data: sensor })
    }).catch((err : any) => console.log(err))
}

const GetSensors : any = async (req : any, res : any) => {
    await Sensor.find({}, (err : any, sensors : any) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!sensors.length) {
            return res
                .status(404)
                .json({ success: false, error: 'Sensor not found' })
        }
        return res.status(200).json({ success: true, data: sensors })
    }).catch((err : any) => console.log(err))
}

module.exports = {
    CreateSensor,
    UpdateSensor,
    DeleteSensor,
    GetSensors,
    GetSensorById,
}
