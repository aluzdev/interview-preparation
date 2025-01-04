//Array() constructor -- create empty array
let names = ["pris", "cris"];
names = Array(names.length);
console.log("🚀 ~ names:", names);

//Array.from() -- convert into array
console.log(Array.from("foo"));

console.log(Array.from([1, 2, 3], (x) => x + x));

//Array.isArray() -- determine wether something is an array
console.log(Array.isArray([1, 3, 5]));

//Array.of() -- creates an array in a very inefficient way
console.log(Array.of("foo", 2, "bar", true));

//Array.prototype.at() --get the value of an array by its index, positive or negative
const at = [5, 12, 8, 130, 44];
at.at(-1);
console.log("🚀 ~ at:", at);

//Array.prototype.concat() -- merge two arrays
const concat1 = ["a", "b", "c"];
const concat2 = ["d", "e", "f"];
const concat3 = concat1.concat(concat2); //["a", "b", "c", "d", "e", "f"]
console.log("🚀 ~ concat3:", concat3);

//Array.prototype.copyWithin() --copy part of an array into itself, at another location -- does not add; replaces.
const copyWithinList = ["a", "b", "c", "d", "e"];
const middle = Math.round(copyWithinList.length / 2);
const r = copyWithinList.copyWithin(middle, 0, 2);
console.log("🚀 ~ r:", r);

//Array.prototype.entries() -- for of but with access to the index
const entriesList = ["a", "b", "c", "d"];

for (let [i, num] of entriesList.entries()) {
  console.log(i, num);
}

//Array.prototype.every() -- tests whether all elements in the array pass the test
const everyList = [10, 20, 30, 40, 50];
const everyResult = everyList.every((num) => num < 100);
console.log("🚀 ~ everyResult:", everyResult);

//Array.prototype.fill() -- fill an array with a value / populate array with a value
const fillList = Array(5);
const entireFill = fillList.fill("potato");
console.log("🚀 ~ entireFill:", entireFill);

const partialFill = fillList.fill("tomato", 3);
console.log("🚀 ~ partialFill:", partialFill);

//Array.prototype.filter()
const filterList = ["spray", "elite", "exuberant", "destruction", "present"];
const filtered = filterList.filter((word) => word.length <= 5);
console.log("🚀 ~ filtered:", filtered);

//Array.prototype.find() -- returns the first element that tests true
const findList = ["spray", "elite", "exuberant", "destruction", "present"];
const found = findList.find((word) => word.length <= 5);
console.log("🚀 ~ found:", found);

//Array.prototype.findIndex() -- returns the index of the first element that tests true
const findIndexList = ["spray", "elite", "exuberant", "destruction", "present"];
const foundIndex = findIndexList.findIndex((word) => word.length <= 5);

//Array.prototype.findLast()
const findLastList = ["spray", "elite", "exuberant", "destruction", "present"];
const lastFound = findLastList.findLast((word) => word.length <= 5);
console.log("🚀 ~ lastFound:", lastFound);

//Array.prototype.findLastIndex()
const findLastIndexList = [
  "spray",
  "elite",
  "exuberant",
  "destruction",
  "present",
];
const indexOfLastFound = findLastIndexList.findLastIndex(
  (word) => word.length <= 5
);

//Array.prototype.flat() -- flattens an array to a specified depth
const flatList = [0, 1, 2, [3, 4, [5, 6], [7, 8], [9, 10, [11, 12]]]];
const flattened = flatList.flat(Infinity);
console.log("🚀 ~ flattened:", flattened);

//Array.prototype.forEach() -- executes a function once for each element in the array
const forEachList = ["a", "b", "c"];

forEachList.forEach((element) => console.log(element));
//Array.prototype.includes() -- returns wether a value exists in the array
const includesList = [1, 2, 3, 4, 5];
console.log(includesList.includes(5));

//Array.prototype.indexOf() -- returns -1 if not found, the index of first appearance otherwise.
const beasts = ["ant", "bison", "camel", "duck", "bison"];

console.log(beasts.indexOf("bison"));
console.log(beasts.indexOf("bison", 2)); //specifies searchStart position

//Array.prototype.join() -- transforms into string with given separator
const joinList = [1, 2, 3, 4];
console.log(joinList.join());
console.log(joinList.join(" "));

//Array.prototype.lastIndexOf() -- returns -1 if not found, last index of element found otherwise
const animals = ["Dodo", "Tiger", "Penguin", "Dodo"];
const indexOfLastDodo = animals.lastIndexOf("Dodo");
console.log("🚀 ~ indexOfLastDodo:", indexOfLastDodo);

//Array.prototype.map()
const mapList = [1, 4, 9, 16];

// Pass a function to map
const mapped = mapList.map((x) => x * 2);
console.log("🚀 ~ mapped:", mapped);

//Array.prototype.pop() -- removes last element and returns it
const popList = ["broccoli", "cauliflower", "cabbage", "kale", "tomato"];
console.log(popList.pop());

//Array.prototype.push() -- returns the new length of the array
const pushList = ["pigs", "goats", "sheep"];

console.log(pushList.push("cows"));

//Array.prototype.reduce()

//Array.prototype.reduceRight()

//Array.prototype.reverse()

//Array.prototype.shift()

//Array.prototype.slice()

//Array.prototype.some()

//Array.prototype.sort()

//Array.prototype.splice()

//Array.prototype.toLocaleString()

//Array.prototype.toReversed()

//Array.prototype.toSorted()

//Array.prototype.toSpliced()

//Array.prototype.toString()

//Array.prototype.unshift()

//Array.prototype.values()

//Array.prototype.with()

//Function.prototype.apply()

//Function.prototype.bind()

//Function.prototype.call()

//Function.prototype.toString()
