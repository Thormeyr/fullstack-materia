 const canvas = document.getElementById('myCanvas');
 const ctx = canvas.getContext('2d');

 // Função para desenhar um quadrado
 function desenharQuadrado(x, y, tamanho, cor) {
     ctx.fillStyle = cor;
     ctx.fillRect(x, y, tamanho, tamanho);
 }

 // Função para desenhar uma linha
 function desenharLinha(x1, y1, x2, y2, cor, largura) {
     ctx.strokeStyle = cor;
     ctx.lineWidth = largura;
     ctx.beginPath();
     ctx.moveTo(x1, y1);
     ctx.lineTo(x2, y2);
     ctx.stroke();
 }

 // Função para desenhar um arco (círculo)
 function desenharArco(x, y, raio, anguloInicio, anguloFim, corBorda, corPreenchimento) {
     ctx.strokeStyle = corBorda;

     ctx.beginPath();
     ctx.arc(x, y, raio, anguloInicio, anguloFim);
     ctx.stroke();

     if (corPreenchimento) {
         ctx.fillStyle = corPreenchimento;
         ctx.fill();
     } 
 }

 // Função para escrever texto
 function escreverTexto(texto, x, y, cor, fonte = '16px Arial') {
     ctx.fillStyle = cor;
     ctx.font = fonte;
     ctx.fillText(texto, x, y);
 }


 // Desenhando a imagem conforme a referência
 function desenharCanvas() {

    //Quadrados 
     desenharQuadrado(0, 0, 50, 'blue');
     desenharQuadrado(250, 0, 50, 'red'); 

     desenharQuadrado(0, 270, 30, 'yellow'); 
     desenharQuadrado(0, 240, 30, 'yellow');
     desenharQuadrado(30, 270, 30, 'yellow');

     desenharQuadrado(270, 270, 30, 'black'); 
     desenharQuadrado(240, 270, 30, 'black'); 
     desenharQuadrado(270, 240, 30, 'black'); 

     desenharQuadrado(0,150,30,'cyan')
     desenharQuadrado(0,120,30,'cyan')

     desenharQuadrado(270,135,30,'cyan')

     desenharQuadrado(110, 150, 40, 'red');


     //Arcos inferiores
     desenharArco(150,300,50,0,Math.PI*2,'green','cyan')
     desenharArco(150,300,65,1.5*Math.PI,Math.PI*2,'green',null)
     desenharArco(150,300,80,1*Math.PI,Math.PI*1.5,'green',null)

     //Circulos amarelos
     desenharArco(75,225,15,0,Math.PI*2,'green','yellow')
     desenharArco(225,225,15,0,Math.PI*2,'green','yellow')

     //Arcos superiores
     desenharArco(150,150,70,Math.PI*1,Math.PI*2,'green',null)
     desenharArco(150,150,90,Math.PI*1,Math.PI*1.25,'green',null)
     desenharArco(150,150,90,Math.PI*1.75,Math.PI*2,'green',null)

     //Circulo ciano
     desenharArco(150,115,15,0,Math.PI*2,'blue','cyan')

    //Linhas
     desenharLinha(150, 150, 150, 250, 'green', 2); // Linha vertical
     desenharLinha(0, 150, 300, 150, 'green', 2); // Linha horizontal

     desenharLinha(50,50,150,150,'blue',2)

     desenharLinha(150,150,250,50,'red',2)

    //Texto
     escreverTexto("Canvas", 106, 50, 'black', '24px Arial');
 }

 desenharCanvas();