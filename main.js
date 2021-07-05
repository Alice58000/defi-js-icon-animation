function balanceScale() {
    // Développez la fonction

     let icon =document.getElementById('balanceIcon');

     icon.innerHTML = " &#xf24e;"
    
        setTimeout(function(){
           icon.innerHTML = "&#xf516";
           
           
        }, 1000);
    

    
        setTimeout(function(){
           icon.innerHTML =  "&#xf515";
           
        }, 2000);
    

        setTimeout(function(){
            icon.innerHTML = "&#xf24e";
            
         }, 3000);

    }
    balanceScale();
    setInterval(balanceScale, 4000);

    // faire une balance et la faire balancer de gauche à droite 