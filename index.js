// Template Literals

function firstLastName(firstName, lastName) {
  return console.log(`FirstLastName: ${firstName} ${lastName}`);
}
firstLastName('Robert', 'Ochi');

// Arrow Functions

const arrowFirstLastName = (first, last) =>
  console.log(`ArrowFirstLastName: ${first} ${last}`);
arrowFirstLastName('Robert', 'Ochi');

// Set Timeout/Set Interval

setTimeout(() => {
  console.log(`setTimeout: Time is up!`);
}, 5000);

setInterval(() => {
  window.alert('Are we there yet?');
}, 7000);

// Callbacks

function processSplicedValue(array, index, callback) {
  let spliced = array[index];
  console.log(`processSplicedValue: ${spliced} (array[${index}])`);
  let result = callback(spliced);
  return result;
}

const testArray1 = ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven'];
console.log(`Test Array: ${testArray1}`);

function firstCharacter(str) {
  let result = str.charAt(0);
  console.log(`firstCharacter: ${result}`);
  return result;
}

//firstCharacter('Test');

processSplicedValue(testArray1, 2, console.log);
let data = processSplicedValue(testArray1, 4, alert);
console.log(`Process Spliced Value(alert): ${data}`);
processSplicedValue(testArray1, 0, (spliced) => {
  window.alert(`Anonymous Processed Spliced Value: ${spliced}`);
  console.log(`Anonymous Processed Spliced Value: ${spliced}`);
});
processSplicedValue(testArray1, 6, firstCharacter);
