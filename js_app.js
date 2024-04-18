const container = document.querySelector(".container");



function setGrid(size=16){
    const gridSize = 100/size;
    
    for (let i = 1; i <=(size*size); i++){
        const grid = document.createElement('div');
        grid.className = "grids"
        grid.style.border = "1px solid black";
        grid.style.backgroundColor = "white";
        grid.style.height = gridSize+"%";
        grid.style.width = gridSize+"%";
        grid.style.boxSizing = "border-box";
        grid.addEventListener("mouseover", event=>{event.target.style.backgroundColor = "purple";}) //event is an automatically object create when an event (such as hover) occur. .target is then use to acceses the element (div) that trigger such event. 
        
        container.appendChild(grid);
        
    }
}






const resetButton = document.querySelector(".reset");
resetButton.addEventListener("click", () => {
    const allgrid = document.querySelectorAll(".grids");
    allgrid.forEach(grid => {grid.remove()});
    setGrid();
    
});




const setSize = document.querySelector("#setSize");
setSize.addEventListener("click", () => { 
    const allgrid = document.querySelectorAll(".grids");
    let size = prompt("Enter Dimension (Num of box per row/column)"); 
    allgrid.forEach(grid => {grid.remove()});
    setGrid(size);
})
    





setGrid()

