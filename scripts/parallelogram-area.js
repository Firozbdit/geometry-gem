// function calculateParallelogramArea(){
//     // get Parallelogram base value

    
//     const ParallelogramBaseInput = document.getElementById('parallelogram-base');
//     const ParallelogramBaseText = ParallelogramBaseInput.Value;
//     const base = parseFloat(ParallelogramBaseText);
//     console.log(base);

//     // // get parallelogram base value
//     const ParallelogramHeightInput = document.getElementById('parallelogram-height');
//     const ParallelogramHeightText = ParallelogramHeightInput.value;
//     const height = parseFloat(ParallelogramBaseText);
//     console.log(height);

//     const area = base * height;
//     console.log('area of the Parallelogram is:', area);

//     // // display Parallelogram area
//     const parallelogramAreaSpan = document.getElementById('p');
//     parallelogramAreaSpan.innerText = area;
// }

function calculateParallelogramArea(){

    const base = getInputValueById('parallelogram-base');
    // console.log('base value' , base);

    const height = getInputValueById('parallelogram-height');
    // console.log('height value', height);

    const area = base * height;
    console.log('area of parallelogram:is', area);

    setInnerTextById('parallelogram-area', area);


}

function getInputValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputFieldText = inputField.value;
    const inputValue = parseFloat(inputFieldText);
    return inputValue;
}

function setInnerTextById(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}