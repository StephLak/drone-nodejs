const { Drone, Medication } = require("../models");

class DroneRepository {
    static async create (newDrone) {
        const drone = await Drone.create(newDrone);
        return drone;
    }

    static async createMed (newMed) {
        const med = await Medication.create(newMed);
        return med;
    }

    static async findById (droneId) {
        const drone = await Drone.findOne({ droneId });
        return drone;
    }

    static async findBySerialNumber (serialNumber) {
        const drone = await Drone.findOne({serialNumber});
        return drone;
    }

    static async findDroneMed (droneId) {
       const meds = await Medication.find({ droneId });
       return meds
    }
}

module.exports = DroneRepository;