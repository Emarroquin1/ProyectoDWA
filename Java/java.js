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


      

  
   
        var chatbox = document.getElementById('fb-customer-chat');
        chatbox.setAttribute("page_id", "102479432693468");
        chatbox.setAttribute("attribution", "biz_inbox");
    
  

   
        window.fbAsyncInit = function() {
          FB.init({
            xfbml            : true,
            version          : 'v15.0'
          });
        };
  
        (function(d, s, id) {
          var js, fjs = d.getElementsByTagName(s)[0];
          if (d.getElementById(id)) return;
          js = d.createElement(s); js.id = id;
          js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
          fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    