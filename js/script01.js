"use strict";
function calculatePension(){
    const birthdateInput = document.getElementById("birthdate").value;
    const resultParagraphElem = document.getElementById("result");
    resultParagraphElem.textContent = "";
    const birthdate = new Date(birthdateInput);
    if (isNaN(birthdate)){
        resultParagraphElem.textContent = "Indtast en gyldig fødelsdato.";
        return;
    }
    let retirementAge = "";

    if (birthdate < new Date('1955-06-30')){
        retirementAge = 66;
    } else if (birthdate <= new Date('1962-12-31')){
        retirementAge = 67;
    } else if (birthdate <= new Date('1966-12-31')){
        retirementAge = 68;
    } else if (birthdate <= new Date('1970-12-31')){
        retirementAge = 69;
    } else if (birthdate <= new Date('1974-12-31')){
        retirementAge = 70;
    } else if (birthdate <= new Date('1978-12-31')){
        retirementAge = 71;
    } else if (birthdate <= new Date('1982-12-31')){
        retirementAge = 72;
    } else if (birthdate <= new Date('1987-06-30')){
        retirementAge = 72.5;
    } else if (birthdate <= new Date('1991-12-31')){
        retirementAge = 73;
    } else if (birthdate <= new Date('1996-06-30')){
        retirementAge = 73.5;
    } else{
        retirementAge = 74;
    }

    if (retirementAge <= 66) {
        resultParagraphElem.textContent = `Du har opnået din folkepensionsalder.`;
    } else {
        resultParagraphElem.textContent = `Du kan gå på pension ${retirementAge} år`;
    }

}