const Manager = require('../lib/manager');

// test for creating the Manager object
test('creates Manager object', () => {
    const manager = new Manager('', 1, '', '');

    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officePhone).toEqual(expect.any(String));
});

// test for getOfficePhone function
test('gets Office Phone', () => {
    const manager = new Manager('Cosimo', 1, 'cosimo@candm.com', '1-985-319-3767');
});