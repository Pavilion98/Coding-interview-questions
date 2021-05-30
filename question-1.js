const checkCapital = (word) => {
    let isCapital = false;

    if (word === word.toUpperCase()){
        isCapital = true;
    }
    else if(word === word.toLowerCase()){
        isCapital  = true;
    }
    else if (word[0] === word[0].toUpperCase() && word.slice(1) === word.slice(1).toLowerCase()){
        isCapital  = true;
    }
    else {
        return isCapital = false;
    }
    return isCapital;
}


console.log(checkCapital("UAE"));
console.log(checkCapital("school"));
console.log(checkCapital("Google"));
console.log(checkCapital("wassiM"));
console.log(checkCapital("WassiM"));