// Receive a function and call it
function receivesAFunction(callback) {
    callback();
}

// Returns a named function
function returnsANamedFunction() {
    function namedFunction() {
        console.log("Function");
    }
    // Return a named function
    return namedFunction;
}

// Returns an anonymous function
function returnsAnAnonymousFunction() {
    return function() {
        console.log("Anonymous function.");
    };
}
