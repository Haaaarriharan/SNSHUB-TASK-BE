const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employeeSchema = new Schema(
    {
        employeeName: String,
        designation: String,
        department: String,
        dateOfJoining: String,
        address: String,
        userId: String,
        uniqueId: String,
        createdAt: { type: Number, default: Date.now() },
        updatedAt: { type: Number, default: Date.now() },
    },
    { versionKey: false }
);
const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;
