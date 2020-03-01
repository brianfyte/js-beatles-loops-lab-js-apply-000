// add solution here
function theBeatlesPlay(musicians, instruments) {
  var array = [];
  var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
  var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
  for (var i = 0; i < musicians.length; i++) {
  array.push(musicians[i] + " plays " + instruments[i]);
}
return array;
}

function johnLennonFacts(facts) {
  var array2 = []
  var facts = ["He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice",
  "While on tour, he enjoyed playing Monopoly",
  "Harmonica was the first instrument Lennon learned to play"];
  var i = 0;
  while (i < facts.length) {
  array2.push(facts[i] + "!!!");
  i++
}
return array2;
}

function iLoveTheBeatles(number) {
  var array3 = [];
do {
    array3.push("I love the Beatles!");
    number++
  }
  while (number < 15);
return array3;
}
