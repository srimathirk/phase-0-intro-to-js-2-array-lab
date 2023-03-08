
const cats =  ["Milo", "Otis", "Garfield"];
console.log(cats);

function destructivelyAppendCat(name){
    cats.push("Ralph");

}


function destructivelyPrependCat(name){
    console.log(cats.unshift("Bob"));
}


function destructivelyRemoveLastCat(){
    cats.pop();
    }

function destructivelyRemoveFirstCat(){
    cats.shift();
}

function appendCat(name){
    return [...cats, "Broom"];
}

appendCat("Broom");
//console.log(cats);
function prependCat(name){
return ["Arnold",...cats];
}
prependCat("Arnold");
function removeLastCat(){
 let removedCats = cats;
  removedCats = removedCats.slice(0,cats.length -1);
 return removedCats;
}
removeLastCat();

function removeFirstCat(){
    let removedcat = cats;
 removedcat = removedcat.slice(1,cats.length);
 return removedcat;
}
removeFirstCat();