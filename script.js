let grid = prompt("Enter the number of grids you want");

gridNumber = Number(grid);

function getRandomColor(){
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

container = document.querySelector(".container");
if(gridNumber<=100){
    for(let i=0; i<=gridNumber-1; i++){
        let row = document.createElement('div');
        row.classList.add("row");
        row.setAttribute("style", "width: 100%; height: 25%; border: 1px solid hsla(0, 100%, 50%, 0.2); display: flex; background-color: white;");
        container.appendChild(row);
        
        for(let i=0; i<=gridNumber-1; i++){
            let cell = document.createElement('div');
            cell.classList.add("cell");
            cell.setAttribute("style", "width: 25%; height: 100%; border: 1px dotted hsla(0, 100%, 50%, 0.2);");
            row.appendChild(cell);

            cell.addEventListener("mouseover", ()=>{
                cell.style.background = getRandomColor();
            });
            
        }
    }
}else{
    alert("Number too big");
}