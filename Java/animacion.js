gsap.to('.nave', { 
    
    duration: 3,
    transform: "rotate(179deg)"})

    alert("Prueba la nueva animación de Freeelancer Web moviendo tu scroll hacia abajo!! :D")


    gsap.registerPlugin(ScrollTrigger);

    const nave = document.querySelector('.nave');
    const codigo1 = document.querySelector('.codigo1');
    const codigo2 = document.querySelector('.codigo2');
    const codigo3 = document.querySelector('.codigo3');

    const texto = document.querySelector('.texto');
    const codigo4 = document.querySelector('.codigo4');

    const tl = gsap.timeline ( {
        scrollTrigger: {
        trigger: '.contenedorAnimacion',
        markers: true,
        start: 'top top',
        end: '100% 100%',
        scrub: true,
        pin: true,

        },
        });

        tl.to(nave, {scale: 0.5, y:'30vh', duartion: 5});
        tl.to(codigo1, {opacity:1,y:'-90vh',scale:1.3, duartion: 1});

        tl.to(codigo2, {opacity:1,y:'-70vh',scale:1.3, duartion: 1});

      

       

        
       
   

        tl.to(codigo1, {opacity:0,y:'-120vh', duartion: 0.1});

        tl.to(codigo2, {opacity:0,y:'-120vh',scale:0.5, duartion: 0.1});   

        tl.to(codigo3, {opacity:1,y:'-90vh',scale:0.5, duartion: 2});   

        tl.to(nave, {x:'x5vh',duartion: 3});

        
        tl.to(codigo4, {opacity:1,y:'-40vh',scale:1.3, duartion: 1});   

        
    

        
   
        tl.to(codigo3, {opacity:0,y:'-120vh',scale:0.5, duartion: 1});   

        
        tl.to(codigo4, {opacity:0,y:'-120vh',scale:0.5, duartion: 1});   

        tl.to(nave, {rotation:90,duartion: 3});
        
      
        tl.to(texto, {opacity:1,y:'-40vh',scale:1.3, duartion: 1});   