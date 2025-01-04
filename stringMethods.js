// String() constructor
String(thing);

//String.fromCharCode()
//returns a string created from the specified sequence of UTF-16 code units
String.fromCharCode(65, 66, 67); // returns "ABC"
String.fromCharCode(0x2014); // returns "—"
String.fromCharCode(0x12014); // also returns "—"; the digit 1 is truncated and ignored
String.fromCharCode(8212); // also returns "—"; 8212 is the decimal form of 0x2014
String.fromCharCode(0xd83c, 0xdf03); // Code Point U+1F303 "Night with
String.fromCharCode(55356, 57091); // Stars" === "\uD83C\uDF03"
String.fromCharCode(0xd834, 0xdf06, 0x61, 0xd834, 0xdf07); // "\uD834\uDF06a\uD834\uDF07"

//String.fromCodePoint()
//
String.fromCodePoint(42); // "*"
String.fromCodePoint(65, 90); // "AZ"
String.fromCodePoint(0x404); // "\u0404" === "Є"
String.fromCodePoint(0x2f804); // "\uD87E\uDC04"
String.fromCodePoint(194564); // "\uD87E\uDC04"
String.fromCodePoint(0x1d306, 0x61, 0x1d307); // "\uD834\uDF06a\uD834\uDF07"
String.fromCodePoint("_"); // RangeError
String.fromCodePoint(Infinity); // RangeError
String.fromCodePoint(-1); // RangeError
String.fromCodePoint(3.14); // RangeError
String.fromCodePoint(3e-2); // RangeError
String.fromCodePoint(NaN); // RangeError

// String.raw()
String.raw`Hi\n${2 + 3}!`;
// 'Hi\\n5!', the character after 'Hi'
// is not a newline character,
// '\' and 'n' are two characters.

String.raw`Hi\u000A!`;
// 'Hi\\u000A!', same here, this time we will get the
// \, u, 0, 0, 0, A, 6 characters.
// All kinds of escape characters will be ineffective
// and backslashes will be present in the output string.
// You can confirm this by checking the .length property
// of the string.

const name = "Bob";
String.raw`Hi\n${name}!`;
// 'Hi\\nBob!', substitutions are processed.

String.raw`Hi \${name}!`;
// 'Hi \\${name}!', the dollar sign is escaped; there's no interpolation.

// String.prototype.at()
// returns a new String consisting of the single UTF-16 code unit located at the specified offset. This method allows for positive and negative integers. Negative integers count back from the last string character.
// A function which returns the last character of a given string
function returnLast(str) {
  return str.at(-1);
}

let invoiceRef = "my-invoice01";

console.log(returnLast(invoiceRef)); // '1'

invoiceRef = "my-invoice02";

console.log(returnLast(invoiceRef)); // '2'

// String.prototype.charAt()
//returns a new string consisting of the single UTF-16 code unit at the given index.

//charAt() always indexes the string as a sequence of UTF-16 code units, so it may return lone surrogates. To get the full Unicode code point at the given index, use String.prototype.codePointAt() and String.fromCodePoint().
const anyString = "Brave new world";
console.log(`The character at index 0   is '${anyString.charAt()}'`);
// No index was provided, used 0 as default

console.log(`The character at index 0   is '${anyString.charAt(0)}'`);
console.log(`The character at index 1   is '${anyString.charAt(1)}'`);
console.log(`The character at index 2   is '${anyString.charAt(2)}'`);
console.log(`The character at index 3   is '${anyString.charAt(3)}'`);
console.log(`The character at index 4   is '${anyString.charAt(4)}'`);
console.log(`The character at index 999 is '${anyString.charAt(999)}'`);
//charAt() may return lone surrogates, which are not valid Unicode characters.
const str = "𠮷𠮾";
console.log(str.charAt(0)); // "\ud842", which is not a valid Unicode character
console.log(str.charAt(1)); // "\udfb7", which is not a valid Unicode character

// String.prototype.charCodeAt()
// returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.
//charCodeAt() always indexes the string as a sequence of UTF-16 code units, so it may return lone surrogates. To get the full Unicode code point at the given index, use String.prototype.codePointAt().
"ABC".charCodeAt(0); // returns 65
const strq = "𠮷𠮾";
console.log(strq.charCodeAt(0)); // 55362, or d842, which is not a valid Unicode character
console.log(strq.charCodeAt(1)); // 57271, or dfb7, which is not a valid Unicode character

// String.prototype.codePointAt()
//eturns a non-negative integer that is the Unicode code point value of the character starting at the given index. Note that the index is still based on UTF-16 code units, not Unicode code points.
"ABC".codePointAt(0); // 65
"ABC".codePointAt(0).toString(16); // 41

"😍".codePointAt(0); // 128525
"\ud83d\ude0d".codePointAt(0); // 128525
"\ud83d\ude0d".codePointAt(0).toString(16); // 1f60d

"😍".codePointAt(1); // 56845
"\ud83d\ude0d".codePointAt(1); // 56845
"\ud83d\ude0d".codePointAt(1).toString(16); // de0d

"ABC".codePointAt(42); // undefined
for (const codePoint of str) {
  console.log(codePoint.codePointAt(0).toString(16));
}
// '1f40e', '1f471', '2764'

[...str].map((cp) => cp.codePointAt(0).toString(16));
// ['1f40e', '1f471', '2764']

// String.prototype.concat()
//returns a new string.

// String.prototype.endsWith()

// String.prototype.includes()

// String.prototype.indexOf()

// String.prototype.isWellFormed()

// String.prototype.lastIndexOf()

// String.prototype.localeCompare()

// String.prototype.match()

// String.prototype.matchAll()

// String.prototype.normalize()

// String.prototype.padEnd()

// String.prototype.padStart()

// String.prototype.repeat()

// String.prototype.replace()

// String.prototype.replaceAll()

// String.prototype.search()

// String.prototype.slice()

// String.prototype.split()

// String.prototype.startsWith()

// String.prototype.substring()

// String.prototype.toLocaleLowerCase()

// String.prototype.toLocaleUpperCase()

// String.prototype.toLowerCase()

// String.prototype.toString()

// String.prototype.toUpperCase()

// String.prototype.toWellFormed()

// String.prototype.trim()

// String.prototype.trimEnd()

// String.prototype.trimStart()

// String.prototype.valueOf()
