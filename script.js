
function calculateTip() {
    var inputtemp = document.getElementById("inputtemp").value;
    var temperature = document.getElementById("temperature").value;
    var outtemp = document.getElementById("outtemp").value;
    
    if (inputtemp ==0 || outtemp==0) {
        alert("Please chose a temprature unit to calculate");
        return;
      }

    if(inputtemp==outtemp){
        var total = temperature ;
        document.getElementById("finaltemp").style.display = "block";
        document.getElementById("temp").innerHTML = total;
    }
    //celcious to kelvin..
    else if(inputtemp==1 && outtemp==2){    
        var total = ((temperature - 273.15)+273.15*2) ;
        document.getElementById("finaltemp").style.display = "block";
        document.getElementById("temp").innerHTML = total;
    }
    //celcious to fahren...
    else if(inputtemp==1 && outtemp==3){    
        var total = ((temperature )* (9/5)) + 32 ;
        document.getElementById("finaltemp").style.display = "block";
        document.getElementById("temp").innerHTML = total;
        }
    //kelvin to celcious..
    else if(inputtemp==2 && outtemp==1){    
        var total = (temperature - 273.15) ;
        document.getElementById("finaltemp").style.display = "block";
        document.getElementById("temp").innerHTML = total;
    }
    //kelvin to fahren...
    else if(inputtemp==2 && outtemp==3){    
        var total = ((temperature - 273.15) *(9/5 ))+ 32  ;
        document.getElementById("finaltemp").style.display = "block";
        document.getElementById("temp").innerHTML = total;
        }
    //fahren to celcious
    else if(inputtemp==3 && outtemp==1){    
        var total =(temperature - 32) *(5/9) ;
        document.getElementById("finaltemp").style.display = "block";
        document.getElementById("temp").innerHTML = total;
    }
     //fahren to kelvin
    else if(inputtemp==3 && outtemp==2){    
        var total = ((temperature - 32) * (5/9 ))+ 273.15 ;
        document.getElementById("finaltemp").style.display = "block";
        document.getElementById("temp").innerHTML = total;
    }
  }

  document.getElementById("calculate").onclick = function() {
    calculateTip();
  };