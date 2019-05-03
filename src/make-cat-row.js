function makeCatRow(cat) {
    const tr = document.createElement('tr');
    const ownerCell = makeOwnerCell(cat.owner);
    const nameCell = makeTextCell(cat.name);
    const ageCell = makeTextCell(cat.age);
    const typeCell = makeTextCell(cat.type);
    const colorCell = makeColorCell(cat.color);
    const hairCell = makeTextCell(cat.hair);
    const indoorCell = makeTextCell(cat.indoor);
    const biscuitsCell = makeTextCell(cat.biscuits);

    tr.appendChild(ownerCell);
    tr.appendChild(nameCell);
    tr.appendChild(ageCell);
    tr.appendChild(typeCell);
    tr.appendChild(colorCell);
    tr.appendChild(hairCell);
    tr.appendChild(indoorCell);
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
