const name = "name"
const repoCount = 50
// console.log(name+repoCount + "val")
// use backticks (``)instead for creating place holders & then inject variables with ${}, with that,
// one can use toUpperCase(Multiple functions as such) inbuilt functions to alter the text properties

//console.log(`Hey my name is ${name.toUpperCase()} the repcount is ${repoCount}`);

const gameName = "   hii-qwessssssrt    "
//console.log(gameName);

//console.log(gameName.__proto__);

//console.log(gameName.length);
//console.log(gameName.toLocaleUpperCase());
//console.log(gameName.charAt(3));
//console.log(gameName.indexOf('i'));

const newString = gameName.substring(0,4) //substring (last number is not included)
console.log(newString)
//array starts from zero, the proto function(default f) for the strings can be checked from google
console.log(gameName.length)
const anotherString  = gameName.slice(-14,2)
console.log(anotherString)

//slice and trim are important, go through the doc
console.log(gameName)
console.log(gameName.trim())

//if you define string directly, i.e. in double quotes then the string console will be 
// as desired and if you use it as const stringName = String('text), then the console log will be
// [String: '   ']

//replace is for replacing ('value to be replaced', 'value to be replaced with')
//split( for splitting)-> console.log(gameName.split('seperator value'))
//includes is used for finding if a certain string have a particlar value or not