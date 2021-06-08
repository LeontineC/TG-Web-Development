/*2.1*/
let someKittens = "De poes van de buurman heeft kittens gehad!";
let otherKittens = "Hij vraagt of wij nog kittens willen.";




console.log(someKittens);

console.log (someKittens.toUpperCase());

console.log("Last index of Kittens is " + someKittens.lastIndexOf("s"));
console.log("First index of Kittens is " + someKittens.indexOf("k"));

console.log("using charAt " + someKittens.charAt("35"));
console.log("using charAt " + someKittens.charAt("29"));

let cats = "De poes van de buurman heeft kittens gehad! Hij vraagt of wij nog kittens willen.";
let catsTwo = cats.split("!");
console.log(catsTwo);

/*2.2*/

let someLetters = "abcdefghijklmn.";
console.log("substring " + someLetters.substring(4,1));

let someOtherLetters = "abcdefghijklmn";
console.log("slice " + someOtherLetters.slice(4,1));

let word = "fromheretothere";
let otherWord = "somewhereovetherainbow";

console.log("substring negative numbers " + word.substring(-2,-5));
console.log("slice negative numbers " + otherWord.slice(-2,-5));


/*2.3*/

let newKittens = "Die nieuwe kittens zijn zo schattig!"

let arrayKittens = newKittens.split(' ');
console.log(arrayKittens);
