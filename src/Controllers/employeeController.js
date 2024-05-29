const Employee = require('../Models/employeeModel')

//Employee Creation
exports.createEmployee = async (req, res) => {
    try {
        const employees = new Employee(req.body)
        let result = await employees.save()
        res.status(200).json({
            data: result,
            message: "Employee created Successfully"
        })
    } catch (error) {
        console.log(error, "erroe");
        res.status(500).json({
            message: "Employee creation failed"
        })
    }
}

//Employee Listing
exports.getEmployeesByUserId = async (req, res) => {
    try {
        const userId = req.params.id;
        const employees = await Employee.find({ userId: userId });
        if (!employees || employees.length === 0) {
            return res.status(404).json({ message: "Employees not found" });
        }
        res.status(200).json({ data: employees, message: "Employees retrieved successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
};