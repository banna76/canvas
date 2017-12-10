var canvas = document.getElementById('tutorial');

if (canvas.getContext) {
         var ctx = canvas.getContext('2d');
          // ctx.fillStyle = 'rgb(200, 0, 0)';
          // ctx.fillRect(10, 10, 50, 50);
          //
          // ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
          // ctx.fillRect(30, 30, 50, 50);
          //
          // ctx.beginPath();
          // ctx.moveTo(75, 50);
          // ctx.lineTo(100, 75);
          // ctx.lineTo(100, 25);
          // ctx.lineTo(75, 25);
          // ctx.fill();
          var gradient = ctx.createRadialGradient(100, 100, 100, 100, 100, 0);
            gradient.addColorStop(0, '#E88E0C');
            gradient.addColorStop(1, '#F7F70C');


          ctx.beginPath();
          ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
          ctx.fillStyle  = gradient;
          ctx.stroke();
          ctx.fill();
          ctx.closePath();
          //
          ctx.beginPath();
          ctx.moveTo(110, 75);
          ctx.arc(75, 75, 35, 0, Math.PI, false);  // Mouth (clockwise)
          ctx.lineTo(110, 75);
          ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
          ctx.stroke();
            ctx.fill();
          //
          ctx.beginPath();
          ctx.moveTo(110, 75);
          ctx.arc(75, 75, 35, 0, Math.PI, false);  // Mouth (clockwise)
          ctx.stroke();
          //
          ctx.beginPath();
          ctx.moveTo(65, 55);
          ctx.arc(60, 55, 5, 0, Math.PI * 2, true);  // Left eye
          ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
          ctx.stroke();
          ctx.fill();
          //
          ctx.beginPath();
          ctx.moveTo(95, 55);
          ctx.arc(90, 55, 5, 0, Math.PI * 2, true);  // Right eye
          ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
          ctx.stroke();
          ctx.fill();


       }else{
         document.write("Your Browser not support HTML5!");
       }
