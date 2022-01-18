// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat (cat) {
   return cats.push(cat);
}

function destructivelyPrependCat (cat) {
    return cats.unshift(cat);
}

function destructivelyRemoveLastCat (cat) {
    return cats.pop(cat);
}

function destructivelyRemoveFirstCat (cat) {
    return cats.shift(cat);
}

function appendCat (cat) {
    const newCat = [...cats , cat ]; 
    return newCat;
}

function prependCat (cat) {
    const newCat = [cat , ...cats];
    return newCat;
}

const removeLastCat = function () {
    const newCat = cats.slice(0, (cats.length - 1));
    return newCat;
}
removeLastCat();



const removeFirstCat = cat => cats.slice(1) ;