// Complete the following procedure, the 'name' variable in all letters to uppercase, output: ' 'HELLO' '.
var name = 'hello';
console.log(name.toUpperCase());


// Complete the following procedure, capitalizing all the words in the variable sentence and printing: 'Good Afternoon, Mr Mike.'
var sentence = 'good afternoon, mr mike.';
var words = sentence.split(' ');
sentence = '';
// console.log(sentenceArray[0][0]);
// console.log(sentenceArray[0][0].toUpperCase());
words.forEach(element => {
    var capitalizedLetter = element[0].toUpperCase();
    // capitalizedWord[0]=capitalizedWord[0].toUpperCase();
    // // console.log(element[0]);
    // // console.log(element[0].toUpperCase());
    sentence += capitalizedLetter.concat(element.substring(1,element.length),' ');

});
console.log(sentence);


// Complete the following procedure to extract the amount of money variable, output: 20.
var money = '￥20';
// console.log(money.substring(1,money.length)); //¿¥20
console.log(money.substring(3,money.length)); 