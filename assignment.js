// Feet to Mile
// ==============


function feetToMile(feet) {
  if (feet >= 0) {
    var mile = (feet / 5280); // we know that 1 mile = 5282 foot so that, 1foot = 1 / 5282 mile 
    return mile;
  } else {

    return 'Distance can not be Negative';
  }
}

var getMile = feetToMile(-1);
console.log('The Mile is : ' + getMile);




// Wood Calculator
// ===============

function woodCalculator(chair, table, bed) {
  if (chair >= 0 && table >= 0 && bed >= 0) {

    var chairWood = (chair * 1); // 1 chair = 1 ft3 wood
    var tableWood = (table * 3); // 1 table = 3 ft3 wood
    var bedWood = (bed * 5); // 1 bed = 5 ft3 wood

    var totalWood = (chairWood + tableWood + bedWood);
    return totalWood;
  } else {
    return 'Invalid Input'
  }
}

var getTotalWood = woodCalculator(19, 30, 40);
console.log("Total Wood Need For All Furniture : " + getTotalWood + ' ft3');




// brick calculator
// ================

function brickCalculator(buildingStories) {
  const bricksNeedPerFeet = 1000;
  if (1 <= buildingStories && buildingStories <= 10) {
    var storiesSize = buildingStories * 15;
    var bricksIs = storiesSize * bricksNeedPerFeet;
    return bricksIs;


  } else if (11 <= buildingStories && buildingStories <= 20) {
    buildingStories = Math.abs((buildingStories - 10));
    storiesSize = buildingStories * 12;
    bricksIs = storiesSize * bricksNeedPerFeet;
    var total = bricksIs + 150000;
    return total;


  } else if (buildingStories >= 21) {
    buildingStories = Math.abs((buildingStories - 20));
    storiesSize = buildingStories * 10;
    brickIs = storiesSize * bricksNeedPerFeet;
    total = brickIs + 150000 + 120000;
    return total;
  } else {
    return 'Invalid Input'
  }
}

const getBricks = brickCalculator();
console.log(getBricks);



// Find the smallest friend name in an Array (tinyFriend)
// ========================================================


var names = ['Naiem', 'Farhan', 'Fahim'];

function tinyFriend(names) {
  var smallestName = names[0];
  for (var i = 0; i < names.length; i++) {
    if (names[i].length < smallestName.length) {
      smallestName = names[i];
    }
  }

  return smallestName;
}

var getSmallestName = tinyFriend(names);
console.log(getSmallestName)