// I'm setting up my library as a 3x3 array.
let libraryShelves = [
  ["Friday", "Fried Green Tomatoes", "It belongs with us"], 
  ["Instellar", "Black Panther", "Diary of a wimpy kid"],    
  ["Star Wars", "Dawn of the dead", "Sinners"]              
];

// This helps me see exactly how the [row][item] coordinates work.
console.log("--- Finding items by their index numbers ---");
console.log(libraryShelves[0][0]);
console.log(libraryShelves[0][1]);
console.log(libraryShelves[0][2]);
console.log(libraryShelves[1][0]);
console.log(libraryShelves[1][1]);
console.log(libraryShelves[1][2]);
console.log(libraryShelves[2][0]);
console.log(libraryShelves[2][1]);
console.log(libraryShelves[2][2]);

// Now I'm doing the same thing but using variables for 'row' and 'item'. 
console.log("--- Finding items using my row and item variables ---");
let row;
let item;

row = 0; item = 0; console.log(libraryShelves[row][item]);
row = 0; item = 1; console.log(libraryShelves[row][item]);
row = 0; item = 2; console.log(libraryShelves[row][item]);
row = 1; item = 0; console.log(libraryShelves[row][item]);
row = 1; item = 1; console.log(libraryShelves[row][item]);
row = 1; item = 2; console.log(libraryShelves[row][item]);
row = 2; item = 0; console.log(libraryShelves[row][item]);
row = 2; item = 1; console.log(libraryShelves[row][item]);
row = 2; item = 2; console.log(libraryShelves[row][item]);

// Finally, I'm using a loop to scan just the second shelf (index 1). 
console.log("--- Scanning the second shelf automatically ---");
for (let i = 0; i < libraryShelves[1].length; i++) {
  console.log("Item found on shelf 2: " + libraryShelves[1][i]);
}