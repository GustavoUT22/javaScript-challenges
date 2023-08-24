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
