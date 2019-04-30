import getEntry from './src/get-entry.js';

const form = document.getElementById('cat-entry');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const applicant = getEntry(formData);
    console.log(applicant);
});