const checkNumber = (input) => {
    input = Math.abs(input);

    if(isEven(input) && input > 2){
        return 'Yes';
    }
    return 'No';

}


const isEven = (input) => {
    if (input % 2 === 0){
        return true;
    }
    return false;
}




console.log(checkNumber(8)); //output yes
console.log(checkNumber(3)); //output no