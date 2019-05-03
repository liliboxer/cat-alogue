import catDetailApi from './cat-detail-api.js';

const tbody = document.getElementById('cats');

const cats = catDetailApi.getAll();

for(let i = 0; i < cats.length; i++) {
    const cat = cats[i];

    const tr = document.createElement('tr');

    const ownerCell = document.createElement('td');
    const link = document.createElement('a');
    
    const searchParams = new URLSearchParams();
    
    searchParams.set('name', cat.owner);
    link.href = 'cat-detail.html?name=' + searchParams.toString();
    
    link.textContent = cat.owner;
    ownerCell.appendChild(link);
    tr.appendChild(ownerCell);
    
    const nameCell = document.createElement('td');
    nameCell.textContent = cat.name;
    tr.appendChild(nameCell);

    const ageCell = document.createElement('td');
    ageCell.value = cat.age;
    tr.appendChild(ageCell);
    
    const typeCell = document.createElement('td');
    typeCell.textContent = cat.type;
    tr.appendChild(typeCell);

    const colorCell = document.createElement('td');
    let colorList = '';
    if(cat.color) {
        colorList = cat.color.join(', ');
    }
    colorCell.textContent = colorList;
    tr.appendChild(colorCell);
    console.log('cat color', cat.color);

    const hairCell = document.createElement('td');
    hairCell.textContent = cat.hair;
    tr.appendChild(hairCell);

    const indoorCell = document.createElement('td');
    indoorCell.textContent = cat.indoor;
    tr.appendChild(indoorCell);

    const biscuitsCell = document.createElement('td');
    biscuitsCell.textContent = cat.indoor;
    tr.appendChild(biscuitsCell);

    tbody.appendChild(tr);

}




