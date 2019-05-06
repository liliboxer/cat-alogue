import catDetailApi from '../src/cat-detail-api.js';
const test = QUnit.test;

QUnit.module('cat-detail-api');
catDetailApi.key = 'test-applicants';

test('round trip for cat data', function(assert) {
    //Arrange
    localStorage.removeItem('test-applicants');
    const applicant = { name: 'Max' };
    
    //Act 
    catDetailApi.save(applicant);
    const result = catDetailApi.get();

    //Assert
    assert.deepEqual(result, applicant);
});

test('no cats in local storage returns empty aray', function(assert) {
    //Arrange
    localStorage.removeItem('test-applicants');
    const expected = [];
    
    //Act 
    const cats = catDetailApi.getAll();

    //Assert
    assert.deepEqual(cats, expected);
});

test('2 saves returns array with 2 items', function(assert) {
    //Arrange
    localStorage.removeItem('test-applicants');
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

test('save 2 applicants w/ diff names and save 2nd', function(assert) {
    //Arrange
    localStorage.removeItem('test-applicants');
    const applicant1 = { owner: 'name1' };
    const applicant2 = { owner: 'name2' };
   
    //Act 
    catDetailApi.save(applicant1);
    catDetailApi.save(applicant2);
    const result = catDetailApi.get(applicant2.owner);

    //Assert
    assert.deepEqual(result, applicant2);
});