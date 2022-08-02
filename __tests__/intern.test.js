const Intern = require('../lib/intern');

// test for creating Intern object
test('creates Intern object', () => {
    const intern = new Intern('', 3, '', '');

    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
});

// test for getSchool function
test('gets Intern school', () => {
    const intern = new Intern('Eldridge', 3, 'eldridge@candm.com', 'Xavier University');
});