const Employee = require('../lib/employee');

class Manager extends Employee {
    constructor(name, id, email, officePhone) {
        super(name, id, email);
        this.officePhone = officePhone
    }
    getOfficePhone() {
        return this.officePhone;
    }

};

module.exports = Manager;