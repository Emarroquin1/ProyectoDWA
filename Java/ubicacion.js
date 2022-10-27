
window.addEventListener('load', function(){
   
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(function(pos){
             var lat = pos.coords.latitude;
             var lon = pos.coords.longitude;
             //creacion del mapa
             const map= L.map('map').setView([lat,lon],15);
             //moisaico de capas
             const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{
                 attribution:'<img  style="width: 75px; height: 45px;"src="images/logo.png" alt="">',
                 maxZoom:20
             }).addTo(map)

             //creacion de marcador
             const marker = L.marker([lat,lon],{alt:'Ubicación Buscada'}).addTo(map).bindPopup('TU ESTAS AQUI').openPopup();



        });




     }else{
         console.log("El navegador no permite Geolocalización");
     }

});


