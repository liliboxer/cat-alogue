import makeEntry from '../src/make-entry.js';

const test = QUnit.test;
QUnit.module('make-entry');

test('puts applicant form into object', function(assert) {
    //Arrange
    // Set up your parameters and expectations

    const expected = {
        owner: 'Lili',
        name: 'Max',
        age: 8,
        type: 'calico',
        color: ['ginger', 'white'],
        hair: true,
        indoor: true,
        biscuits: true,
        love: 'he is the fluffiest best!'
    };

    const formData = new FormData();
    formData.set('owner', expected.owner);
    formData.set('name', expected.name);
    formData.set('age', '8');
    formData.set('type', 'calico');
    formData.set('color', expected.color[0]);
    formData.append('color', expected.color[1]);
    formData.set('hair', 'yes');
    formData.set('indoor', 'yes');
    formData.set('biscuits', 'yes');
    formData.set('love', expected.love);


    //Act 
    // Call the function you're testing and set the result to a const
    const applicant = makeEntry(formData);

    //Assert
    assert.deepEqual(expected, applicant);
});