import getEntry from './src/get-entry.js';

const form = document.getElementById('cat-entry');
const ageRange = document.getElementById('age');
const ageDisplay = document.getElementById('age-display');

ageRange.addEventListener('change', () => {
    ageDisplay.textContent = ageRange.value;

});

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const applicant = getEntry(formData);
    console.log(applicant);
});
