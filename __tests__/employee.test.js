var Employee = require('../lib/employee');

test('creates an Employee object', () => {
    
    const employee = new Employee('Snooks', 2, 'snooks@candm.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

//test for getName function
test('gets Employee name', () => {
    const employee = new Employee('Snooks', 2, 'snooks@candm.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

// test for getId function
test('gets Employee ID', () => {
    const employee = new Employee('Snooks', 2, 'snooks@candm.com');

    expect(employee.getId()).toEqual(expect.any(Number))
})

//test for getEmail function
test('gets Employee email', () => {
    const employee = new Employee('Snooks', 2, 'snooks@candm.com');

    expect(employee.getEmail()).toEqual(expect.any(String));
});

// test for getRole function
test('gets Employee role', () => {
    const employee = new Employee('Snooks', 2, 'snooks@candm.com');
});
