import catDetailApi from '../src/cat-detail-api.js';
const test = QUnit.test;

QUnit.module('cat-detail-api');

test('round trip for cat data', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const applicant = { name: 'Max' };
    
    //Act 
    // Call the function you're testing and set the result to a const
    catDetailApi.save(applicant);
    const result = catDetailApi.get();

    //Assert
    assert.deepEqual(result, applicant);
});

test('no cats in local storage returns empty aray', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    localStorage.removeItem('cats');
    const expected = [];
    
    //Act 
    // Call the function you're testing and set the result to a const
    const cats = catDetailApi.getAll();

    //Assert
    assert.deepEqual(cats, expected);
});