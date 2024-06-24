let functionEnabled = true;

function myFunction() {
    if (functionEnabled) {
        // Main logic of your function
        console.log('Function is enabled and executed.');
    } else {
        console.log('Function is currently disabled.');
    }
}

function myFunctione() {
    functionEnabled = false;
    console.log('Function is enabled and executed.');
}
// Example of disabling the function
functionEnabled = false;
myFunction(); // This will log "Function is currently disabled."
