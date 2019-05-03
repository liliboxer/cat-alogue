function makeCatRow(cat) {
    const tr = document.createElement('tr');

    const ownerCell = makeOwnerCell(cat.owner);
    tr.appendChild(ownerCell);

    const nameCell = makeTextCell(cat.name);
    tr.appendChild(nameCell);
    
    const ageCell = makeTextCell(cat.age);
    tr.appendChild(ageCell);
    
    const typeCell = makeTextCell(cat.type);
    tr.appendChild(typeCell);

    const colorCell = makeColorCell(cat.color);
    tr.appendChild(colorCell);

    const hairCell = makeTextCell(cat.hair);
    tr.appendChild(hairCell);

    const indoorCell = makeTextCell(cat.indoor);
    tr.appendChild(indoorCell);

    const biscuitsCell = makeTextCell(cat.biscuits);
    tr.appendChild(biscuitsCell);

    return tr;
}

function makeOwnerCell(owner) {
    const ownerCell = document.createElement('td');
    const link = document.createElement('a');
    
    const searchParams = new URLSearchParams();
    
    searchParams.set('owner', owner);
    link.href = 'cat-detail.html?' + searchParams.toString();
    
    link.textContent = owner;
    ownerCell.appendChild(link);

    return ownerCell;
}

function makeTextCell(text) {
    const cell = document.createElement('td');
    cell.textContent = text;
    return cell;
}

function makeColorCell(color) {
    let colorList = '';
    if(color) {
        colorList = color.join(', ');
    }
    return makeTextCell(colorList);
}

export default makeCatRow;
