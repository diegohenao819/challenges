var cancellable = function(fn, args, t) {
    
    var timeout = setTimeout(() =>
        fn(...args)
    , t)

    return cancelFn = () => clearTimeout(timeout);
};


let fn = () => console.log("Esta es la función");
let args = [2];
let t = 5000;

let result = (cancellable(fn, args, t))
setTimeout(result, 6000);




