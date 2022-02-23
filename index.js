const receivesAFunction = function(callback) {
    return callback()
}
receivesAFunction(function() {return "hello"})

const returnsANamedFunction = function() {
    return function namedFunction() {return "Goodbye"}
}

const returnsAnAnonymousFunction = function() {
    return function() {return 4 + 5}
}