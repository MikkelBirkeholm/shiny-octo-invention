function functionOne(numOne, numTwo) {
    functionTwo(numOne, numTwo)
}


function functionTwo(a, b) {
    functionThree(addMe(a, b))

}

function addMe(x, y) {
    return x + y
}

function functionThree(finalResult) {
    console.log(finalResult)
}

functionOne(12, 23)