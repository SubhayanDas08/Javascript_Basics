
//const objects cant be changed but the properties can be modified individually
const score = { visitors: 0, home: 0 };
// This is okay
score.visitors = 1;
// This isn't allowed
//score = { visitors: 1, home: 1 };

console.log(score)