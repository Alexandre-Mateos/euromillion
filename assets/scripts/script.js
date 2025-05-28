const buttonMainGrid = document.querySelectorAll(".container-main-grid button");
// console.log(buttonMainGrid);
const selectedNumber = [];

// for ( let i = 0 ; i < buttonMainGrid.length ; i++){
//     buttonMainGrid[i].addEventListener('click', ()=>{
//         // console.log(`le bouton ${i+1} vient d'être cliqué`);
//         selectedNumber.push(buttonMainGrid[i].innerHTML);
//         // console.log(selectedNumber);
//     } )
// };

/*
stock dans le tableau selectedNumber la valeur du bouton cliqué
verifie si la valeur existe déjà dans le tableau selectedNUmber
si elle n'y est pas => l'ajoute
si elle y est => la retire
*/
function selectNumber (){
    for ( let i = 0 ; i < buttonMainGrid.length ; i++){
    buttonMainGrid[i].addEventListener('click', ()=>{
        let buttonValue = buttonMainGrid[i].innerHTML;
        if (selectedNumber.includes(buttonValue)){
            const index = selectedNumber.indexOf(buttonValue);
            selectedNumber.splice(index, 1);
        }else{
        selectedNumber.push(buttonValue);
        }
        buttonMainGrid[i].classList.toggle("selectedStyle");
        console.log(selectedNumber);
    } )
    }
}



selectNumber();