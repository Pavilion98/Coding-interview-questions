const findItems = (object, string) => {
    let result = [];

    Object.keys(object).forEach( key => {
        if (object[key].includes(string)) {
            result.push(key);
        }
    })
    return result;

}

console.log(findItems({'water': ['water', 'beverage'], 'pepsi': ['soft drinks', 'beverage']}, 'beverage')); //output: [water, pepsi]
console.log(findItems({'kitkat': ['snacks', 'chocolate'], 'pepsi': ['soft drinks', 'beverage']}, 'chocolate')); //output: [kitkat]
