/**
 * objective: get base, height of triangle. Calculate the area by using the provided
 * formula. and then display the area.
 * step- 1 get base value of the triangle
 * step -2 added an id in the base input field
 * step-3 use getElementById to access the input field
 * step-4 get value from the input field (value is sting now)
 * step - 5 convert the value to a number . use parseFlot
 * 
 */
function claculateTriangleArea(){
   // get triangle base value
    const triangleBaseInput = document.getElementById('triangle-base');
    const triangleBaseText = triangleBaseInput.value;
    const base = parseFloat(triangleBaseText)
    console.log(base);

    //get triangle 

    const triangleHeightInput= document.getElementById('triangle-height');
    const triangelHeightText = triangleHeightInput.value;
    const height = parseFloat(triangelHeightText);
    console.log(height);
    // calculate triangle area
    const area = 0.5 * base * height;
    console.log('Area of the triangle is:', area)

    // display triangle area
    const triangleAreaSpan = document.getElementById('triangle-area');
    triangleAreaSpan.innerText = area;
}