const arrangeWords = (sentence) => {
    let words = sentence.split(" ");
    let result = new Array();
    words.forEach( word => {
        let index = parseInt(word[word.length - 1]) - 1;
        result[index] = word.slice(0, word.length - 1);
    })
    return result.join(" ")
}


console.log(arrangeWords("is2 sentence4 This1 a3")); //Output = This is a sentence 