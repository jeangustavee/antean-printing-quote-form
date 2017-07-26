
//Print sizes
var print_sizes= new Array();
print_sizes["none"]=0;
print_sizes["4x5"]=20;
print_sizes["8x11"]=95;

//Paper stock
var stocks= new Array();
stocks["14"]=10;
stocks["16"]=25;
stocks["17"]=20;

//Back side
var back_sides= new Array();
back_sides["none"]=0;
back_sides["full"]=15;
back_sides["bw"]=30;

//Coating
var coatings= new Array();
coatings["none"]=0;
coatings["high"]=98;
coatings["matt"]=120;

//Corner
var corners= new Array();
corners["none"]=0;
corners["rounded"]=25;
corners["standard"]=20;

//Quantity
var quantities= new Array();
quantities["0"]=0;
quantities["100"]=10;
quantities["250"]=20;
quantities["500"]=30;
quantities["1000"]=40;
quantities["2000"]=50;
quantities["2500"]=60;
quantities["3000"]=70;

//Printing turnaround
var ship_options= new Array();
ship_options["3"]=10;
ship_options["7"]=15;
ship_options["next"]=50;
ship_options["today"]=80;

//Shipping locations
var ship_locations= new Array();
ship_locations["jax"]=10;
ship_locations["orlando"]=15;
ship_locations["miami"]=40;
ship_locations["atlanta"]=55;


function getShipOptionsPrice()
{
   var shipOptionsPrice=0;
   //Get a reference to the form id="printform"
   var theForm = document.forms["printform"];
   //Get a reference to the print option the user Chooses name=selectedship":
   var selectedShip = theForm.elements["selectedship"];

   //We loop through each radio buttons
   for(var i = 0; i < selectedShip.length; i++)
   {
       //if the radio button is checked
       if(selectedShip[i].checked)
       {
           shipOptionsPrice = ship_options[selectedShip[i].value];
           break;
       }
   }
   //We return the shipOptionsPrice
   return shipOptionsPrice;
}

//This function finds the print size price based on the
//drop down selection
function getSizePrice()
{
   var printSizePrice=0;
   var theForm = document.forms["printform"];
   //Get a reference to the select id="print_sizes"
    var selectedSize = theForm.elements["print_sizes"];

   //set print size Price equal to value user chose
   //For example print_sizes["4x5".value] would be equal to 5
   printSizePrice = print_sizes[selectedSize.value];

   //finally we return printSizePrice
   return printSizePrice;
}


function calculateTotal()
{
   var printPrice = getShipOptionsPrice() + getSizePrice();

   //display the result
   var divobj = document.getElementById('totalPrice');
   divobj.style.display='block';
   divobj.innerHTML = "Total Price For the print job $"+printPrice;

}

function hideTotal()
{
   var divobj = document.getElementById('totalPrice');
   divobj.style.display='none';
}
