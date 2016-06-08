// equivalents
var jpMJ = 1000000;
var kcalpMJ  = 238.834488;
var BTUpMJ = 947.771913;
var ThermpMJ = 0.009477719;
var kWhpMJ = 0.27776451;

// DC units in megajoules
var burrito =  5.0244;
var rushmore = 54422;
var nyminute = 5372907;
var moonlanding = 58867933;
var alderaan = 1000000000000000000;

// HTML elements


function clickFunction() {
  var energyamount = document.getElementById("energyamount").value; 
  var unit = document.getElementById("unit").value;
  console.log(unit)
  
  //convert to joules
  var newjoules = 0;

  if      (unit === "joule") { newjoules = energyamount / jpMJ} 
  else if (unit === "megajoule") { newjoules = energyamount } 
  else if (unit === "kcal") { newjoules = energyamount / kcalpMJ } 
  else if (unit === "btu") { newjoules = energyamount / BTUpMJ } 
  else if (unit === "therm") { newjoules = energyamount / ThermpMJ } 
  else if (unit === "kwh") { newjoules = energyamount / kWhpMJ };


  // Once in Joules; 
  var burEQ = newjoules / burrito;
  var rushEQ = newjoules / rushmore;
  var nyEQ = newjoules / nyminute;
  var moonEQ = newjoules / moonlanding;
  var aldEQ = newjoules / alderaan;

  //Spit out the answers after this. 
  console.log(burEQ);
  console.log(rushEQ);
  console.log(nyEQ);
  console.log(moonEQ);
  console.log(aldEQ);

}  

window.onload= clickFunction();
