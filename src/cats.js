import catDetailApi from './cat-detail-api.js';
import makeCatRow from './make-cat-row.js'

const tbody = document.getElementById('cats');

const cats = catDetailApi.getAll();

for(let i = 0; i < cats.length; i++) {
    const cat = cats[i];
    const tr = makeCatRow(cat);
    tbody.appendChild(tr);
}




