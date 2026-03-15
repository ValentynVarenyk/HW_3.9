//   (--- Завдання 1 ---)
function logItems(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(`${i + 1} - ${array[i]}`);
  }
}

logItems(["Геній", "Плейбой", "Міліардер", "Філантроп"]);


//   (--- Завдання 2 ---)
function calculateEngravingPrice(message, pricePerWord) {
  const words = message.split(" ");
  return words.length * pricePerWord;
}

console.log(calculateEngravingPrice("JavaScript is cool", 10));
console.log(calculateEngravingPrice("Капібара", 14));
console.log(calculateEngravingPrice("Capybara but English version", 9));


//   (--- Завдання 3 ---)
function findLongestWord(string) {
  const words = string.split(" ");
  let longestWord = "";

  for (const word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }

  return longestWord;
}

console.log(findLongestWord("Я не знаю шо придумать шоб тут написать"));


//   (--- Завдання 4 ---)
function formatString(string) {
  if (string.length <= 40) {
    return string;
  } else {
    return string.slice(0, 40) + "...";
  }
}

console.log(formatString("Не бажаю я нічого, хочу тільки одного, стуку серця дорогого біля серденька мого."));


//   (--- Завдання 5 ---)
function checkForSpam(message) {
  const lowerMessage = message.toLowerCase();

  if (lowerMessage.includes("spam") || lowerMessage.includes("sale")) {
    return true;
  }

  return false;
}

console.log(checkForSpam("Latest technology news"));
console.log(checkForSpam("Get best SALE offers now!"));


//   (--- Завдання 6 ---)
let input;
const numbers = [];
let total = 0;

while (true) {
  input = prompt("Введіть число");

  if (input === null) {
    break;
  }

  if (isNaN(input)) {
    alert("Було введено не число, попробуйте ще раз");
    continue;
  }

  numbers.push(Number(input));
}

for (const number of numbers) {
  total += number;
}

if (numbers.length > 0) {
  console.log(`Загальна сума чисел дорівнює ${total}`);
}


//   (--- Завдання 7 ---)
const logins = ["user1", "admin", "player123"];

function isLoginValid(login) {
  return login.length >= 4 && login.length <= 16;
}

function isLoginUnique(allLogins, login) {
  return !allLogins.includes(login);
}

function addLogin(allLogins, login) {

  if (!isLoginValid(login)) {
    return "Помилка! Логін повинен бути від 4 до 16 символів";
  }

  if (!isLoginUnique(allLogins, login)) {
    return "Такий логін уже використовується!";
  }

  allLogins.push(login);
  return "Логін успішно доданий!";
}

console.log(addLogin(logins, "newUser"));
console.log(addLogin(logins, "admin"));
console.log(addLogin(logins, "ab"));