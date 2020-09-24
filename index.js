// Template Literals

function firstLastName(firstName, lastName) {
  return console.log(`FirstLastName: ${firstName} ${lastName}`);
}
firstLastName('Robert', 'Ochi');

// Arrow Functions

const arrowFirstLastName = (first, last) =>
  console.log(`ArrowFirstLastName: ${first} ${last}`);
arrowFirstLastName('Robert', 'Ochi');

setTimeout(() => console.log(`setTimeout: Time is up!`), 25);

const askAreWeThereYet = (() => window.alert('Are we there yet?'), 500);

// Callbacks

function processSplicedValue(array, index, callback) {
  let spliced = array[index];
  console.log(`processSplicedValue: ${spliced} (array[${index}])`);
  let result = callback(spliced);
  console.log(`processSplicedValue: ${result} (callback)`);
  return result;
}

const testArray1 = ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven'];

function firstCharacter(str) {
  let result = str.charAt(0);
  console.log(`firstCharacter: ${result}`);
  return result;
}

//firstCharacter('Test');

processSplicedValue(testArray1, 2, console.log);
processSplicedValue(testArray1, 4, window.alert);
processSplicedValue(testArray1, 0, (alert) => {
  window.alert(alert);
});
processSplicedValue(testArray1, 6, firstCharacter);