const player = {
  name: "Mario",
  level: 21,
  lifes: 3,
  size: "small",
  world: "Bowser's Fury",
};

function fireFlower() {
  console.log(`Fire ${this.name}`);
}

function superMushroom() {
  console.log(`${this.name} went from small tu super size`);
}

function die(reason) {
  console.log(`${this.name} died because of ${reason}`)
}

fireFlower.call(player)
fireFlower.apply(player)
//Fire Mario
superMushroom.call(player)
superMushroom.apply(player)
//Mario went from small tu super size
die.call(player, "sugar")
die.apply(player, ["sugar"])
//Mario died because of sugar