let myString = "  JavaScript is powerful and fun!  ";

// String Methods
console.log(myString.length); 
console.log(myString.trim()); 
console.log(myString.toUpperCase()); 
console.log(myString.toLowerCase()); 
console.log(myString.indexOf("powerful"));
console.log(myString.lastIndexOf("is")); 
console.log(myString.includes("fun")); 
console.log(myString.startsWith("JavaScript")); 
console.log(myString.endsWith("fun!")); 
console.log(myString.slice(0, 10)); 
console.log(myString.substring(2, 11)); 
console.log(myString.replace("powerful", "amazing")); 
console.log(myString.split(" ")); 
console.log(myString.concat(" Let's learn more.")); 
console.log(myString.repeat(2)); 
console.log(myString.charAt(5)); 
console.log(myString.charCodeAt(0)); 
console.log(myString.match(/\b[a-zA-Z]+\b/g)); 
console.log(myString.search("fun")); 
console.log(myString.padStart(40, "*")); 
console.log(myString.padEnd(40, "*")); 


let myArray = [5, 10, 15, 20, 25, 30];

// Array Methods
console.log(myArray.length); 
console.log(myArray.push(35)); 
console.log(myArray.pop()); 
console.log(myArray.unshift(0)); 
console.log(myArray.shift()); 
console.log(myArray.reverse()); 
console.log(myArray.sort());
console.log(myArray.join(" - ")); 
console.log(myArray.indexOf(20)); 
console.log(myArray.lastIndexOf(15)); 
console.log(myArray.includes(10)); 
console.log(myArray.slice(1, 4)); 
console.log(myArray.splice(2, 1, 100)); 
console.log(myArray.map(num => num * 2)); 
console.log(myArray.filter(num => num > 10)); 
console.log(myArray.reduce((sum, num) => sum + num, 0)); 
console.log(myArray.some(num => num > 20)); 
console.log(myArray.every(num => num > 0)); 
console.log(myArray.find(num => num > 15)); 
console.log(myArray.findIndex(num => num > 15)); 
console.log(Array.from("JavaScript")); 
console.log(Array.isArray(myArray)); 
console.log(myArray.fill(7, 2, 4)); 
console.log(myArray.copyWithin(0, 2, 4));
console.log(myArray.flat()); 
console.log([...new Set([10, 20, 20, 30])]); 