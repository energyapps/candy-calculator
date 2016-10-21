var pymChild = new pym.Child();

// equivalents
var jpMJ = 1000000;
var kcalpMJ  = 238.834488;
var BTUpMJ = 947.771913;
var ThermpMJ = 0.009477719;
var kWhpMJ = 0.27776451;

// DC units in megajoules
var burrito =   0.03;
var rushmore =  4.32; 
var nyminute =  49.58;
var moonlanding =  4000.00;
var alderaan =  5133265920.00;

var comparisons = {
  "meteor":{
    "value":500000,
    "unit":"joule"
  },
  "youyear":{
    "value":313000000,
    "unit":"btu"
  },
  "dubai":{
    "value":200,
    "unit":"btu"
  },
  "marty":{
    "value":1150000,
    "unit":"btu",
    "source":"http://energy.gov/maps/how-much-do-you-consume-0"
  },
  "earth":{
    "value":'524.0E+15',
    // "value":'3.89E+20',
    "unit":"btu",
    "source":"https://www.eia.gov/cfapps/ipdbproject/IEDIndex3.cfm?tid=44&pid=44&aid=2"
  },
  "sun":{
    "value":'1.5E+22',
    "unit":"joule",
    "source":"https://en.wikipedia.org/wiki/Orders_of_magnitude_(energy)"
  },
  "universe":{
    "value":'4E+58',
    "unit":"joule",
    "source":"https://en.wikipedia.org/wiki/Orders_of_magnitude_(energy)"
  }
};


// HTML elements


function compareFunction(e) {
  

  $("input").val(e.value);
  $("select").val(e.unit)

  clickFunction();
}

function clickFunction() {  

  var energyamount = document.getElementById("energyamount").value; 
  var unit = document.getElementById("unit").value;

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
  $("#burEQ").html(addCommas(burEQ));
  $("#rushEQ").html(addCommas(rushEQ));
  $("#nyEQ").html(addCommas(nyEQ));
  $("#moonEQ").html(addCommas(moonEQ));
  $("#aldEQ").html(addCommas(aldEQ));
}  

window.onload= clickFunction();

$('select').change(function(){
  clickFunction();
});

// track delete
$( "#energyamount" ).on('keydown', function() {
    var key = event.keyCode || event.charCode;
    if( key == 8 || key == 46 )
      clickFunction();
});

$( "#energyamount" ).keyup(function() {
  $("span").removeClass('clicked');  
  clickFunction();

  // if (event.keyCode >= 48 && event.keyCode <= 57) {

  // } else if ((event.keyCode >= 65 && event.keyCode <= 90) || (event.keyCode >= 97 && event.keyCode <= 122)) {

  // }   
});

$("span").click(function(){
  var CompAmount = comparisons[this.id]  

  $("span").removeClass('clicked');
  $(this).addClass('clicked');

  compareFunction(CompAmount);
})

function addCommas(amount) {
    // If really small or big, change thing
    if (amount <= 0.001 || amount >= 1000000000) {
      amount = RealSmall(amount)
      return amount;      
    } 

    // Round
    amount = amount.toPrecision(4)
    amount = Math.round(amount*100) / 100;
    amount = amount.toString();

    var delimiter = ","; // replace comma if desired
    var a = amount.split('.',2)
    var d = a[1];
    var i = parseInt(a[0]);
    if(isNaN(i)) { return ''; }
    var minus = '';
    if(i < 0) { minus = '-'; }
    i = Math.abs(i);
    var n = new String(i);
    var a = [];
    while(n.length > 3) {
      var nn = n.substr(n.length-3);
      a.unshift(nn);
      n = n.substr(0,n.length-3);
    }
    if(n.length > 0) { a.unshift(n); }
    n = a.join(delimiter);
    if(d===undefined) { amount = n; }
    else { amount = n + '.' + d; }
    amount = minus + amount;
    return amount;
}

function RealSmall(amount) {
  amount = amount.toExponential();
  amount = parseFloat(amount).toPrecision(2);
  return amount
}