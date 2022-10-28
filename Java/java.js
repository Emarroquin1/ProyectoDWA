var w =0;
var h=0;





    function myFunction(x) {
        if (x.matches) { // If media query matches
           
      


            $('.navbar-center').removeClass("navbar-center").addClass("navbar-right");

        } else {
         
            $('.navbar-right').removeClass("navbar-right").addClass("navbar-center");

        }
      }
      
      var x = window.matchMedia("(max-width: 1030px)")
      myFunction(x) // Call listener function at run time
      x.addListener(myFunction) // Attach listener function on state changes


      
