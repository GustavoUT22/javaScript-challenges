// Coding Meetup #1 - Higher-Order Functions Series - Count the number of JavaScript developers coming from Europe
function countDevelopers(list) {
  let result = [];
  for (let ele of list) {
    if (ele.language === "JavaScript" && ele.continent === "Europe") {
      result.push(ele);
    }
  }
  const total = result.length > 0 ? result.length : 0;
  return total;
}

// Coding Meetup #2 - Higher-Order Functions Series - Greet developers
function greetDevelopers(list) {
  for (let obj of list) {
    obj.greeting = `Hi ${obj.firstName}, what do you like the most about ${obj.language}?`;
  }
  return list;
}

// Coding Meetup #3 - Higher-Order Functions Series - Is Ruby coming?
function isRubyComing(list) {
  return list.filter((a) => a.language == "Ruby").length > 0;
}

// Coding Meetup #4 - Higher-Order Functions Series - Find the first Python developer
function getFirstPython(list) {
  const pythonDeveloper = list.filter((ele) => ele.language == "Python");
  return pythonDeveloper.length > 0
    ? `${pythonDeveloper[0].firstName}, ${pythonDeveloper[0].country}`
    : "There will be no Python developers";
}
// Coding Meetup #5 - Higher-Order Functions Series - Prepare the count of languages
function countLanguages(list) {
  let result = {};
  for (let i = 0; i < list.length; i++) {
    result[list[i].language] = (result[list[i].language] || 0) + 1;
  }
  return result;
}

// Coding Meetup #6 - Higher-Order Functions Series - Can they code in the same language?
function isSameLanguage(list) {
  const firstLanguage = list[0].language;
  return list.every((ele) => ele.language === firstLanguage);
}

// Coding Meetup #8 - Higher-Order Functions Series - Will all continents be represented?
function allContinents(list) {
  let continents_dev = list.map((ele) => ele.continent);
  let continents = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
  return continents.every((ele) => continents_dev.includes(ele));
}

// Coding Meetup #11 - Higher-Order Functions Series - Find the average age
function getAverageAge(list) {
  const sizeList = list.length;
  return Math.round(
    list.map((ele) => ele.age).reduce((a, b) => a + b, 0) / sizeList
  );
}

// Coding Meetup #12 - Higher-Order Functions Series - Find GitHub admins
function findAdmin(list, lang) {
  return list.filter(
    (ele) => ele.language === lang && ele.githubAdmin === "yes"
  );
}

// Coding Meetup #14 - Higher-Order Functions Series - Order the food
function orderFood(list) {
  let result = {};

  for (let i = 0; i < list.length; i++) {
    result[list[i].meal] = (result[list[i].meal] || 0) + 1;
  }
  return result;
}
