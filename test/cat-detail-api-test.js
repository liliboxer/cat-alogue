import catDetailApi from '../src/cat-detail-api.js';
const test = QUnit.test;

QUnit.module('cat-detail-api');

test('round trip for cat data', function(assert) {
    //Arrange
    const applicant = { name: 'Max' };
    
    //Act 
    catDetailApi.save(applicant);
    const result = catDetailApi.get();

    //Assert
    assert.deepEqual(result, applicant);
});

test('no cats in local storage returns empty aray', function(assert) {
    //Arrange
    localStorage.removeItem('cats');
    const expected = [];
    
    //Act 
    const cats = catDetailApi.getAll();

    //Assert
    assert.deepEqual(cats, expected);
});

test('2 saves returns array with 2 items', function(assert) {
    //Arrange
    localStorage.removeItem('cats');
    const cat1 = { name: 'kitty1' };
    const cat2 = { name: 'kitty2' };
    
    const expected = [cat1, cat2];
    catDetailApi.save(cat1);
    catDetailApi.save(cat2);
    
    //Act 
    const cats = catDetailApi.getAll();

    //Assert
    assert.deepEqual(cats, expected);
});