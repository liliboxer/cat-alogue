import catDetailApi from './cat-detail-api.js';

const tbody = document.getElementById('cats');

const cats = catDetailApi.getAll();

for (let i = 0; i < cats.length; i++) {
    const cat = cats[i];

    const tr = document.createElement('tr');
    const ownerCell = document.createElement('td');
    ownerCell.textContent = cat.owner;
    tr.appendChild(ownerCell);
    
    const tr = document.createElement('tr');
    const nameCell = document.createElement('tr');
    nameCell.textContent = cat.owner;
}




