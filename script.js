let numberInput = document.getElementById('number-input')

let convertBtn = document.getElementById('convert-btn')

let firstPara = document.getElementById('first-para')
let secondPara = document.getElementById('second-para')
let thirdPara = document.getElementById('third-para')

convertBtn.addEventListener('click', function(){
    let currentNumber = numberInput.value

    if(currentNumber<=0) alert("Must be a positive number")
    else{
        calculateLength(currentNumber)
        calculateVolume(currentNumber)
        calculateMass(currentNumber)
    }
})

function calculateLength(number){
    let meterToFeet = number * 3.28084
    let feetToMeter = number / 0.304
    firstPara.textContent = `${number} meters = ${meterToFeet.toFixed(3)} feet | ${number} feet = ${feetToMeter.toFixed(3)} meters`
}

function calculateVolume(number){
    let literToGallon = number * 264172
    let gallonToLiter = number * 3.785412
    secondPara.textContent = `${number} liters = ${literToGallon.toFixed(3)} gallons | ${number} gallons = ${gallonToLiter.toFixed(3)} liters`
}

function calculateMass(number){
    let kilogramToPounds = number * 2.2 
    let poundToKilogram = number * 0.45359237
    thirdPara.textContent = `${number} kilos = ${kilogramToPounds.toFixed(3)} pounds | ${number} pounds = ${poundToKilogram.toFixed(3)} meters`
}