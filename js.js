        var pantalla = document.querySelector('canvas');
        var pincel = pantalla.getContext('2d');
        var puedoDibujar = false;
       
    
        pincel.fillStyle = 'lightgrey';
        pincel.fillRect(0, 0, 600, 400);

        //diseñando la paleta de colores en el canvas

        pincel.fillStyle = "red";
        pincel.fillRect(0,0,50,50);
        pincel.fillStyle = "black";
        pincel.strokeRect(0,0,50,50)

        pincel.fillStyle = "green";
        pincel.fillRect(50,0,50,50);
        pincel.fillStyle = "black";
        pincel.strokeRect(50,0,50,50);

        pincel.fillStyle = "blue";
        pincel.fillRect(100,0,50,50);
        pincel.fillStyle = "black";
        pincel.strokeRect(100,0,50,50);
        let paletaColores= ["blue", "green", "red"];
        let color= paletaColores[0];
        
        function clickPaleta(evento){  //cambia color cuando da click en la paleta
          
          let x = evento.pageX - pantalla.offsetLeft;
          let y = evento.pageY - pantalla.offsetTop;
          console.log(x,  y);

          if((x > 0) && (x < 50) && (y > 0) && (y < 50)){
            color=paletaColores[2];
          }else if((x > 50) && (x < 100) && (y > 0) && (y < 50)){
            color=paletaColores[1];
          } else if((x > 100) && (x < 150) && (y > 0) && (y < 50)){
            color = paletaColores[0];
          }
          
        }
        
        pantalla.onclick = clickPaleta;
    
        function dibujarCirculo(evento) {
    
            if(puedoDibujar ) {
                let x = evento.pageX - pantalla.offsetLeft;
                let y = evento.pageY - pantalla.offsetTop;
                
                if((x > 150) || (y > 50)){ //para que no pinte en la paleta
                    pincel.fillStyle = color;
                    pincel.beginPath();
                    pincel.arc(x, y, 5, 0, 2 * 3.14);
                    pincel.fill();
                }
             

            }
    
        }
    
        pantalla.onmousemove = dibujarCirculo;
    
        function habilitarDibujar() {
    
            puedoDibujar = true;
        }
    
        function deshabilitarDibujar() {
    
            puedoDibujar = false;
        }
    
        pantalla.onmousedown = habilitarDibujar;
    
        pantalla.onmouseup = deshabilitarDibujar;
    
