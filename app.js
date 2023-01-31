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
    console.log('The answer to life, the universe and everything is:', finalResult)
}

functionOne(12, 30)