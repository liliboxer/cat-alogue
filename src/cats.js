import catDetailApi from './cat-detail-api.js';
import catRowMaker from './make-cat-row.js'

const tbody = document.getElementById('cats');

const cats = catDetailApi.getAll();

for(let i = 0; i < cats.length; i++) {
    const cat = cats[i];
    const tr = catRowMaker.makeCatRow(cat);
    tbody.appendChild(tr);
}




