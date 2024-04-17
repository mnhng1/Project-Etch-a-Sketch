const container = document.querySelector(".container");




for (let i = 1; i <=256; i++){
    const grid = document.createElement('div');
    grid.style.border = "1px solid black";
    grid.style.backgroundColor = "grey";
    grid.style.height = "6.25%";
    grid.style.width = "6.25%";
    grid.style.boxSizing = "border-box";
    grid.addEventListener("mouseover", event=>{event.target.style.backgroundColor = "purple";}) //event is an automatically object create when an event (such as hover) occur. .target is then use to acceses the element (div) that trigger such event. 
    
    container.appendChild(grid);
    
}

const allgrid = document.querySelectorAll("grid");

allgrid.forEach(grid => {
    grid.style.flexGrow = "1";
});




