function makeEntry(formData) {
    const age = parseInt(formData.get('age'));
    const hair = formData.get('hair') === 'yes';
    const indoor = formData.get('indoor') === 'yes';
    const biscuits = formData.get('biscuits') === 'yes';

    const applicant = {
        owner: formData.get('owner'),
        name: formData.get('name'),
        age: age,
        type: formData.get('type'),
        color: formData.getAll('color'),
        hair: hair, 
        indoor: indoor,
        biscuits: biscuits,
        love: formData.get('love')
    };

    return applicant;

}
export default makeEntry;