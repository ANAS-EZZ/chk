var tab1 ={ A: 12 , B: 23 , C: 10 } 
var tab2 ={ A: 3 , B: 5 , C: 2 } 

function produitScalaire(tab1, tab2) {
    return tab1.A * tab2.A + tab1.B * tab2.B + tab1.C  * tab2.C;
  } 
  const resultat = produitScalaire(tab1, tab2);
  console.log(resultat);
