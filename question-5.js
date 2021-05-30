const checkLongWords = (string) => {
    let length = string.length;
    let middleNum = length - 2;
    let result = "";
    if ( length > 8 ){
        result = string[0] + middleNum + string[length - 1];
        return result;
    }
    return string;
    
}


console.log(checkLongWords('test')); //output: test
console.log(checkLongWords('topinterns')); //output: t8s
console.log(checkLongWords('realmadrid')); //output: r8d