const Engineer = require('../lib/Engineer');

// test for creating Engineer object 
test('Creates Engineer object', () => {
    const engineer = new Engineer('', 2, '', '');

    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
});


// test for getGithub function 
test('gets Engineer Github', () => {
    const engineer = new Engineer('Toussaint', 2, 'allen@candm.com', 'holy_cow_in_a_coal_mine');

    expect(engineer.getGithub()).toEqual(expect.any(String));
});

