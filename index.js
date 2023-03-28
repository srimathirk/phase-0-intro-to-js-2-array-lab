const cats = ['Milo','Otis','Garfield'];
function destructivelyAppendCat(name) { 
    return cats.push('Ralph');
}
console.log(destructivelyAppendCat(cats));
console.log(cats);
function destructivelyPrependCat(name){
    return cats.unshift('Bob');
}
console.log(destructivelyPrependCat(cats));
function destructivelyRemoveLastCat(){
    return cats.pop();
}
console.log(destructivelyRemoveLastCat());
function destructivelyRemoveFirstCat(){
    return cats.shift();
}
console.log(destructivelyRemoveFirstCat());
function appendCat(name){
    return [...cats,'Broom'];
}
console.log(appendCat(cats));
function prependCat(name){
    return ["Arnold",...cats];
}
console.log(prependCat(cats));
function removeLastCat(){
    return cats.slice(0,2);
}
console.log(removeLastCat());
function removeFirstCat(){
    return cats.slice(-2);
}
console.log(removeLastCat());