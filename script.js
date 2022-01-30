const telNumber = document.querySelector("#telNumber");
const password = document.querySelector("#password");

let startTime;
let endTime;

// Function - go to step one.
goToStepOne = () => {
    // Hide stepZero
    document.querySelector("#stepZero").classList.add("stepZeroHidden");
    // Show stepOne
    document.querySelector("#stepOne").classList.remove("stepOneHidden");
    document.querySelector("#stepOne").classList.add(".stepOne");

    startTime = new Date().getTime();
}

// Function - go to step two
goToStepTwo = () => {

    // Walidation
    if (telNumber.value.length != 9 || password.value.length != 4) {
        document.querySelector("#stepOne__form--allert").classList.add("stepOne__form--allert-active");
    };

    if (telNumber.value.length === 9 && password.value.length === 4) {
        stepOneButton = document.querySelector("#stepOneButton").classList.add('loading');

        let timeout = setTimeout(() => {
            document.querySelector("#stepOne").classList.add("stepOneBlur");
            document.querySelector("#stepOneButton").classList.remove('loading');
            document.querySelector("#stepTwo").classList.remove("stepTwoHidden");
            document.querySelector("#stepTwo").classList.add("stepTwo");
            endTime = new Date().getTime();

            let operationTime = Math.floor((endTime - startTime) / 1000);
            document.querySelector("#timer").innerHTML = operationTime;
        }, 1000);
    }
};

// addEventListeners to active button on stepOne.
telNumber.addEventListener('change', () => {

    if (telNumber.value.length === 9 && password.value.length === 4) {
        document.querySelector("#stepOneButton").classList.add('active');
    };
})

password.addEventListener('change', () => {

    if (telNumber.value.length === 9 && password.value.length === 4) {
        document.querySelector("#stepOneButton").classList.add('active');
    } else {
        document.querySelector("#stepOneButton").classList.remove('active');
    };
})

// Function - go to beginning
goToStart = () => {
    document.querySelector("#stepTwo").classList.add("stepTwoHidden");
    document.querySelector("#stepOne").classList.remove("stepOneBlur");
    document.querySelector("#stepOne").classList.add("stepOneHidden");
    document.querySelector("#stepZero").classList.remove("stepZeroHidden");
    let inputs = document.querySelectorAll("input");
    inputs.forEach(input =>  input.value = '');
    document.querySelector("#stepOneButton").classList.remove('active');
    document.querySelector("#stepOne__form--allert").classList.remove("stepOne__form--allert-active");
}

// Function - get another package
anotherPackage = () => {
    document.querySelector("#stepTwo").classList.add("stepTwoHidden");
    document.querySelector("#stepOne").classList.remove("stepOneBlur");
    let inputs = document.querySelectorAll("input");
    inputs.forEach(input =>  input.value = '');
    document.querySelector("#stepOneButton").classList.remove('active');
    document.querySelector("#stepOne__form--allert").classList.remove("stepOne__form--allert-active");
    
    
}