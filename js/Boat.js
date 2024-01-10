// 7. Altere o valor da opção (option) dentro da classe Boat
class Boat {
  constructor(x, y, width, height,) {
    var options = {
      isStatic : true
    };


   
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
   
   // 8. Adicione a variável this.boatPosition para obter as posições aleatórias do navio a partir do código. 
   

    
    World.add(world, this.body);
  }

// 8.1 Na função display(), use push() e pop() em Boat.js
  display() {
   
    var pos = this.body.position;
  
    
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    
  }
}
