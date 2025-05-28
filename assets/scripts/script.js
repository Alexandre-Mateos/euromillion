const buttonMainGrid = document.querySelectorAll(".container-main-grid button");
// console.log(buttonMainGrid);
const selectedNumber = [];

for ( let i = 0 ; i < buttonMainGrid.length ; i++){
    buttonMainGrid[i].addEventListener('click', ()=>{
        // console.log(`le bouton ${i+1} vient d'être cliqué`);
        selectedNumber.push(buttonMainGrid[i].innerHTML);
        console.log(selectedNumber);
    } )
};
