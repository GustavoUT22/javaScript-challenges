function greet(language) {
  const traductions = {
    english: "Welcome",
    czech: "Vitejte",
    danish: "Velkomst",
    dutch: "Welkom",
    estonian: "Tere tulemast",
    finnish: "Tervetuloa",
    flemish: "Welgekomen",
    french: "Bienvenue",
    german: "Willkommen",
    irish: "Failte",
    italian: "Benvenuto",
    latvian: "Gaidits",
    lithuanian: "Laukiamas",
    polish: "Witamy",
    spanish: "Bienvenido",
    swedish: "Valkommen",
    welsh: "Croeso",
  };
  for (let key in traductions) {
    if (key == language) {
      return traductions[key];
    }
  }
  return traductions.english;
}

function boredom(staff){
    let boringLevel = {
      accounts: 1,
      finance: 2,
      canteen: 10,
      regulation: 3,
      trading: 6,
      change: 6,
      IS: 8,
      retail: 5,
      cleaning: 4,
      'pissing about': 25
    }
    
    let count = 0
    for (let key in staff){
        let department = staff[key]
        let score = boringLevel[department]
        count = count + score
    }
    
    if (count<=80) return 'kill me now'
    else if ( count < 100 && count > 80) return 'i can handle this'
    else return 'party time!!'
  }
