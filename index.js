// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat (name){
cats.push("Ralph");
}

function destructivelyPrependCat (name) {
    cats.unshift("Bob");
    }

function destructivelyRemoveLastCat(name) {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat(name) {
   const catsCopy = [ ...cats , "Broom"];
   return catsCopy;
}

function prependCat(name) {
    const catsPrepend = ["Arnold" , ...cats]
  return  catsPrepend;
}

function removeLastCat(name) {
const copyLastCat = cats.slice( 0 ,cats.length - 1);
return copyLastCat;
}

function removeFirstCat(name) {
const copyLastCat = cats.slice(1);
return copyLastCat;
}